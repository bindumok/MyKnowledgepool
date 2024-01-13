import React, { useState } from 'react'
import axiosInstance from './helpers/axiosInstance'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Books = () => { 
  let navigate = useNavigate();
  let [bname , setBname] =useState("");
  let [bprice, setBprice]=useState("");
  let [breg, setBreg]=useState("");


  

  let addbook = (e)=>{
      e.preventDefault()
      let payload = {
          bprice,bname,breg
      }
      axiosInstance.post("/posts" , payload)
      toast.success(`${bname} added successfully!`)
      navigate("/")
      
  }

return (
        <>
  <div className='form-block'>
     <form  action="" style={{textAlign:"center"}}>
          <fieldset>
                  <legend>Enter Books Name</legend>
                  <br /> <br />
                  <label htmlFor="">Book Name : </label>
                  <input type="text" onChange={(e)=>{
                          setBname(e.target.value)
                  }} /> <br /> <br />
                  <label htmlFor="">Book Price : </label>
                  <input type="text" onChange={(e)=>{
                          setBprice(e.target.value)
                  }}   /> <br /> <br />
                  <label htmlFor="">Accession Register : </label>
                  <input type="text" onChange={(e)=>{
                          setBreg(e.target.value)
                  }}   /> <br /> <br />
                  <button onClick={addbook}>ADD  </button>
                  <br /><br />
          </fieldset>
     </form>
  </div>
  </>
)
}

export default Books
