import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import { deletePost } from "../api/PostApi";
import "../App.css"
import { Form } from "./Form";

export const Posts = () => {

    const [ data , setData] = useState([]);

    const [updateDataApi, setupdateDataApi] = useState({});

    //* function to delete post
    // function handleDeletePost(){

    // }

    const handleDeletePost = async(id) => {
        try{
            const res = await deletePost(id)
            if(res.status===200){
                const newUpdatedPost = data.filter((curPost)=>{
                    return curPost.id !== id
                });
            setData(newUpdatedPost)
            }else{
                console.log("Failed to delete the post", res.status);  
            }
        }catch(e){
            console.log(e);  
        }   
    }


    const getPostData = async() => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data)
    }

    useEffect( () => {
        getPostData();
    },[]);


    const handleUpdatePost = (currElem) => setupdateDataApi(currElem)

    //? FORM component pr 4 props pass kr raha hun

    return(
    <>
    <section className="section-form">
        <Form 
         data={data}
         setData={setData} 
         updateDataApi={updateDataApi} 
         setupdateDataApi={setupdateDataApi} 
        />
    </section>
    <section className="section-post">
        <ol>
            {
                data.map((currElem) => {
                    const {id,body,title} = currElem 
                    return(
                        <li key={id}>
                            <p>Title: {title}</p>
                            <p>Body: {body}</p>
                            <button onClick={()=>handleUpdatePost(currElem)}>EDIT</button>
                            <button className="btn-delete" onClick={()=> handleDeletePost(id)}>DELETE</button>
                        </li>
                    )
                })
            }
        </ol>
    </section>
    </>
    )
}

//? posts ka bana ki kaise ui pr aa gya sara details and

//* ab usme se kuch delete ho then update ho ye banana hai hum log ko 


//?  update method :

//? agar user edit button ko tap kare toh vo data uper wali feild title mein and body ,mein add ho jaye and add button automatically convert ho jaye edit button mein 





