import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props)=>{
  console.log(props)
  return(
    <div>
    <h1>{props.course}</h1>
  </div>

  )  
}


const Content = (props)=>{
  console.log(props) 
  const listParts = props.course.parts.map(function(item){
return (
  <div>
    <p>{item.name} {item.exercises}</p>
  </div>
)
  })
  return(
    listParts
  )  
}
const Total = (props)=>{
 let total =0
 const listParts = props.course.parts.map(function(item){
  total += item.exercises
 })
  
  return(
    <div>
      <p>Number of excercises: {total}</p>
    </div>

  )  
}

const App = ()=>{
  const course={
    name:"Half Stack application development",
    parts: [
      {
      id:1,
      name: "Fundamentals of React",
      exercises: 10
      } ,
      {
        id:2,
        name: "Using props to pass data",
        exercises: 7
      } ,
      
      {
        id:3,
        name: "State of a component",
        exercises: 14
      }
    ]
  }


  return(
    <>
     <h1>{course.name}</h1>
     <Content course={course}/>
     <Total course={course}/>
      
    </>

)
}


ReactDOM.render( <App />, document.getElementById("root"))
