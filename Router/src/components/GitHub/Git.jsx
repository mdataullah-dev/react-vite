import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Git() {


    const data = useLoaderData()
    // const [ data , setData ] = useState([])

    // useEffect( () => {
    //     fetch('https://api.github.com/users/at-enigma')
    //     .then( response => response.json())
    //     .then( data => setData(data) )
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers : {data.followers}
    <img src={data.avatar_url} alt='Git picture' width={300} />
    </div>
  )
}

export default Git

//? another way using loader 


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/at-enigma')
    return response.json()
}