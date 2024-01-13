import React from 'react'
import axiosInstance from "./helpers/axiosInstance"
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Bookscart = () => {

  let [books, setBooks] =useState([])
  useEffect(()=>{
    let fetchdata=async ()=>{
      let {data}= await axiosInstance.get("/posts")
      setBooks(data)
    }
    fetchdata()
  },[])

  let handleDelete = (id)=>{
    console.log(id);
    axiosInstance.delete(`/posts/${id}`)
    window.location.assign("/")
  }

  return (
    <div className='container'>
          {books.map((x)=>{

return (
  <div className='cards'>
      {/* <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${x.bname}`} alt="" /> */}
      <h3 className='text-focus-in'>Book Name : {x.bname}</h3>
      
      <h3 className='text-focus-in'>Book Price : {x.bprice}</h3>
      <h3 className='text-focus-in'>Accession Register :{x.breg}</h3>
      <div className='btn-block'>
          <button>
            <Link id='links' to={`/update/${x.id}`}>Update</Link>
          </button>
          <button onClick={()=>{
              handleDelete(x.id)
          }}>Delete</button>
      </div>
  </div>
)
})}
</div>
)
}
export default Bookscart