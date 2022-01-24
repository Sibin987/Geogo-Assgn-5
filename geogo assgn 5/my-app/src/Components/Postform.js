import React,{useState, useEffect} from "react";
import axios from 'axios'
import './App.css';

//hooks

function PostList(){
  const[blog,setData] = useState([])
  useEffect(() => {
      console.log("Rendaring component");
      // make this network call
      axios.get('http://localhost:4000/blog')
      .then((response) => {
        setData(response.data)
        //console.log(response.data) 
      })
      .catch((error) => {
        console.log(error)
      }, [])

  })
  console.log(blog)

  return(
      <div className="app">
          <h1 align="center">Enter Details to create a blog </h1>
          <input type="text" value={title} onChange={(e)=> (settitle(e.target.value))} name="title"></input> <br></br>
          <input type="text" value={author} onChange={(e)=>(setauthor(e.target.value))} name="author"></input><br></br>
          <input type="text" value={content} onChange={(e)=> (setcontent(e.target.value))} name="content"></input><br></br>
          <button align = "center" type="button" onClick={saveUser}>Submit</button>
      
      </div>
  )
}

export default PostList