import './App.css'
import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state={

      todos:[],
      task:""
    }
  }
  addtotask=(e)=>{
    this.setState({task: e.target.value})
  }

  addtasktolist=()=>{
    this.setState({todos: [... this.state.todos,this.state.task]})
    this.setState({task:""})
  }

  update=(index,e)=>{
    let newarr=[...this.state.todos]
    for (let i=0;i<newarr.length;i++){
      if(i===index){
        newarr[i]=e.target.value
      }
    }
    {this.setState({todos: newarr})}
  }

 
  delete=(index)=>{
    let newarr=[...this.state.todos]
    newarr.splice(index,1)
    this.setState({todos: newarr})
  }

  render() {
    return (
      <>
        <div>
          <input type="text" placeholder='Enter task' value={this.state.task} onChange={(e)=>this.addtotask(e)}/>
          <button onClick={this.addtasktolist}>Add Task</button>
        </div>
        <div>
          {this.state.todos.map((item,index)=>{
              return (
              <div key={index}>
              <input type="text" placeholder='Enter task'  value={item} onChange={(e)=>this.update(index,e)}/>
              <button onClick={this.delete}>Delete</button>
              </div>)
            })
          }  
        </div>
      </>  
    )
  }
}
export default App ; 
