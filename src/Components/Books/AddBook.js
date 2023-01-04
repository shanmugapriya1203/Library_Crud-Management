import React from 'react'
import { Formik, useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
import Topbar from './../Topbar';
import { useState } from 'react';
import axios from 'axios';
function AddBook() {
  const[add,setAdd]=useState(false);
  const params=useParams();
  const his=useNavigate();
  const myFormik=useFormik({
    initialValues:{
      name:"",
      img:'',
      author:'',
      bookid:'',
    },
    onSubmit: async(values)=>{
    try{
      setAdd(true);
      await
      axios.post(`https://63943a5f4df9248ead9c85a2.mockapi.io/books`,values)
    } catch(error){
      console.log(error);
      setAdd(false)
    }
    his("/portal/books")
    }
  })
  return (
 <>
 <Topbar/>
 <div className='container' style={{margin:'50px'}}>
  <form onSubmit={myFormik.handleSubmit}>
    <div className='row'>
      <div className='col-lg-12'>
        <label>Book Name</label>
        <input name='name' type={""} className='form-control' value={myFormik.values.name} onChange={myFormik.handleChange}/>
      </div>
    </div>
    <div className='row'>
      <div className='col-lg-12'>
        <label>Book Image Url</label>
        <input name='img' type={""} className='form-control' value={myFormik.values.img} onChange={myFormik.handleChange}/>
      </div>
    </div>
    <div className='row'>
      <div className='col-lg-12'>
        <label>Book Authour</label>
        <input name='author' type={""} className='form-control' value={myFormik.values.author} onChange={myFormik.handleChange}/>
      </div>
    </div>
    <div className='row'>
      <div className='col-lg-12'>
        <label>Book Id</label>
        <input name='bookid' type={""} className='form-control' value={myFormik.values.bookid} onChange={myFormik.handleChange}/>
      </div>
    </div>
    <div className="col-lg-3 mt-3">
        <input type="submit" style={{marginLeft:"30rem"}} value="Add New Book"  className="btn btn-primary"></input>
       </div>
       
  </form>
 </div>
 </>
  )
}

export default AddBook
