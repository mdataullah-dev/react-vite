import { useEffect, useState } from "react"
import { postData } from "../api/PostApi";
import { UpdateData } from "../api/PostApi";

export const Form = ({data, setData, updateDataApi, setupdateDataApi}) => {


    const [addData, setAddData] = useState({
        title:"",
        body:""
    });


    //get the updated data and add it into input feilds
    // using useEffect ki jab v ye updatedDataApi wala data update hoga we automatically update addData => jo data show k raha hai page pr 

    useEffect( ()=> {
        updateDataApi && setAddData({
            title: updateDataApi.title || "",
            body: updateDataApi.body || ""
        })
    },[updateDataApi])


    let isEmpty = Object.keys(updateDataApi).length === 0 ;



    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev)=>{
            return {...prev,[name]:value}
        })                                    //* yahan pr ...prev krne se previous data jo hoga aajayega 
                                              //? and [name]:value krne se => [name] agar title change hoga tph title bn jayega title:value=> body change hoga toh body bn jayega aise => body:value
    };


    const addPostData = async () => {
        const res = await postData(addData)
        console.log("res", res);
        
        if(res.status===201){
            setData([...data, res.data])
            setAddData({title:"", body:""});
        }
    }


    //updatePostData function
    const updatePostData = async () => {
        try{
            const res = await UpdateData(updateDataApi.id, addData);
            console.log(res);

            if(res.status===200){
                setData( (prev) => {
                return prev.map((currElem)=>{
                    return currElem.id === res.data.id ? res.data : currElem
                })
            })
            setAddData({title:"", body:""})   //? title / body from input feild will be cleaned
            setupdateDataApi({});            //? edit butto change to add
            }
        }catch ({error}){
            console.log(error);  
        }
    }


    //form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;
        
        if(action==="Add"){
            addPostData();
        }else if (action==="Edit"){
            updatePostData();
        }
    }


    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title"></label>
                <input 
                 type="text"
                 autoComplete="off"
                 id="title"
                 name="title"
                 placeholder="Add Title"
                 value={addData.title}
                 onChange={handleInputChange}
                 />
            </div>

            <div>
                <label htmlFor="body"></label>
                <input 
                 type="text" 
                 autoComplete="off"
                 placeholder="Add Post"
                 id="body"
                 name="body"
                 value={addData.body}
                 onChange={handleInputChange}

                />
            </div>
            <button type="submit"
            value={isEmpty? "Add" : "Edit"}
            >{isEmpty ? "Add" : "Edit"}
            </button>
        </form>
    )
}



