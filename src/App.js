import React from "react";
import { Component } from "react";
import Todoitems from "./components/todoitems/Todoitems";
import AddItem from "./components/Additems/AddItem";


class App extends Component {


  state = {
    items : [
      {id:1 , name:"john" , age: 23 },
      {id:2 , name:"sarah" , age: 24 },
      {id:3 , name:"frank" , age: 26 },
    ]
  }


  deleteItem = (id) => {

    let items = this.state.items;
    let i = items.findIndex(item => item.id === id);
    items.splice(i,1);
    this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({
      items
    })


  }

  render(){
    return (
      <div className="App container">
          <h1 className="text-center">Todo list</h1>
          <Todoitems items={this.state.items} deleteItem={this.deleteItem}/>
          <AddItem addItem={this.addItem}/>
      </div>
    );
  }

}



export default App;
