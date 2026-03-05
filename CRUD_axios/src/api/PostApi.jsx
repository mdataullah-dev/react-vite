import axios from "axios"

//?post API means => auth

//? authApi => we say coz in authentication we post our details like signup login 


//* first creating axios instance


const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});


//get method
export const getPost = () => {
  return api.get("/posts")
};


// delete method                             =>   delete : /posts/1
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`)
};


//post method   //? (post)=>payload is passed
export const postData = (post) => {
  return api.post("/posts", post );
}

//? uper ye ho raha samjho =>  (post) ki jagah (data) v pass  kr skte the bs var name hai
//? "/posts" root ko call kr raha hun and ye (data)/(post) hai jo mujhe us ropot mein add on krni hai 

//update method 
//*put   =>   complete change sab ko update
//*patch =>   like 100 words hai toh usme se kuch 15 - 20 words ko change krne mein kaam aata hai 

//put

export const UpdateData = (id,post ) => {
  return api.put(`/posts/${id}`, post)
}

