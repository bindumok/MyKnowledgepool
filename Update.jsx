import React, { useEffect, useState } from 'react'
import axiosInstance from './helpers/axiosInstance'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const Update = () => {

    let {id} = useParams()
    let navigate = useNavigate() ; 
    let [bname , setBname] = useState("")
    let [bprice , setBprice] = useState("")
    let [breg , setBreg]= useState("")
    

    useEffect(()=>{
            let fetchdata = async()=>{
                    let {data} = await axiosInstance.get(`/posts/${id}`)
                    setBname(data.pname)
                    setBprice(data.pprice)
                    
            }
            fetchdata()
    },[])


    let updatebooks = (e)=>{
        e.preventDefault()
        let payload ={
            bname ,bprice
        }
        axiosInstance.put(`/posts/${id}` , payload)
        toast.info(`${bname} updated `)
        navigate("/")
        

    }


 

  return (
    <div className='form-block'>
       <form  action="" style={{textAlign:"center"}}>
            <fieldset>
                    <legend>UPDATE Book Name</legend>
                    <br /> <br />
                    <label htmlFor="">Book Name : </label>
                    <input value={bname} type="text" onChange={(e)=>{
                            setBname(e.target.value)
                    }} /> <br /> <br />
                    
                    <label htmlFor="">Book Price : </label>
                    <input value={bprice} type="text" onChange={(e)=>{
                            setBprice(e.target.value)
                    }}   /> <br /> <br />

                    <label htmlFor="">Accession Register: </label>
                    <input value={breg} type="text" onChange={(e)=>{
                            setBreg(e.target.value)
                    }}   /> <br /> <br />
                    <button onClick={updatebooks}>Update  </button>
                    <br /><br />
            </fieldset>
       </form>
    </div>
  )
}

export default Update