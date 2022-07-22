import React, {useState} from "react";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      countRed: '0',
      countGreen: '0',
      countBlue: '0',
      edit: false,
      id: null,
      name: "",
      color: ""
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleRemoveRow = this.handleRemoveRow.bind(this);
    this.onUpdateHandle = this.onUpdateHandle.bind(this);    
  }
  
  handleInputChange= (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, color } = this.state;    
    const newdata = {
      id: Date.now(),
      name: name,
      selectedcolor: color 
    };
    if(name === '' || color === '') {
      alert('All fields are mandatory');
      return;
    }
    this.setState(prevState => ({
      data: [...prevState.data,newdata ]
    }));
    
    /* console.log(this.state.data);
    console.log(newdata); */

    let new_lists = [...this.state.data, newdata];
    this.countColor(new_lists);
  };

  handleEditClick = (index) => {
    //console.log(index);
    this.setState({
      edit: true,
      id: index.id,
      name : index.name,
      color : index.selectedcolor
    });
  };

  onUpdateHandle= (event) => {
    event.preventDefault();
    this.setState({
      data: this.state.data.map(item => {
          if (item.id === this.state.id) {
            item['name'] = event.target.updatedname.value;
            item['selectedcolor'] = event.target.updatedcolor.value;            
            return item;
          }
          return item;
        })
     });
     this.setState({  
        edit: false
     });
    let { data } = this.state;
    this.countColor(data);
  }

  handleRemoveRow = (index) => {
    this.state.data.splice(this.state.data.indexOf(index), 1);
    this.setState({ data: this.state.data });
    let { data } = this.state;
    this.countColor(data);
  };

  handleClear= (event) => {
    this.setState({
      name : '',
      color: ''
    })
    event.preventDefault(); 
  }

  countColor = (colors) => {
    var redCount = 0;
    var blueCount = 0;
    var greenCount = 0;
    colors.map((item, index) => {
      if (item.selectedcolor === 'red') {            
          redCount ++;
      }
      if (item.selectedcolor === 'blue') {            
          blueCount ++;
      }
      if (item.selectedcolor === 'green') {            
          greenCount ++;
      }
    });
    this.setState({ countRed: redCount });
    this.setState({ countBlue: blueCount });
    this.setState({ countGreen: greenCount });
  }

  renderEditForm() {
    if (this.state.edit) {
      return <form onSubmit={this.onUpdateHandle}>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input className="form-control" type="text" name='updatedname' onChange={this.handleInputChange} defaultValue={this.state.name} placeholder='Name' />
          </div>
          <div className="mb-3">
		        <label htmlFor="exampleInputPassword1" className="form-label">Color</label>
            <select className='form-select' aria-label="Default select example" onChange={this.handleInputChange} name="updatedcolor" defaultValue={this.state.color} >
            <option value="">Color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <button className="btn btn-primary">Update</button>
		      <input type="button" className="btn btn-primary mx-3" onClick={this.handleClear} value="Clear" />
        </form>
    }
  }

  render() {
    return (
      <>
      <div className="container">
      {this.renderEditForm()}
        <form className="insert_form" style={ this.state.edit ? {display: 'none'} : {display: 'block'} } onSubmit={this.handleSubmit}>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input className="form-control" type="text" name='name' value={this.state.name} onChange={this.handleInputChange} placeholder='Name' />
          </div>
          <div className="mb-3">
		        <label htmlFor="exampleInputPassword1" className="form-label">Color</label>
            <select className='form-select' aria-label="Default select example" name="color" value={this.state.color} onChange={this.handleInputChange} >
            <option value="">Color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <button type='submit' className="btn btn-primary">Submit</button>
		      <input type="button" className="btn btn-primary mx-3" onClick={this.handleClear} value="Clear" />
        </form>
        <h1 className="my-3">Details</h1>
        <table className='table my-3'>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Color</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
          <tbody>
          { 
            this.state.data.map((item, index) => {
              return (
                <tr key={index} data-index={index} >
                  <td>{item.name}</td>
                  <td>{item.selectedcolor}</td>
                  <td><a href="javascript:void(0)" onClick={() =>(this.handleEditClick(item,index,item.name))}>Edit</a></td>
                  <td><a href="javascript:void(0)" onClick= {()=>(this.handleRemoveRow(item))} >Delete</a></td>
                </tr>
              );
            })
          }
          </tbody>
        </table>
        <h1 className="my-3">Count Of Color</h1>
        <table className='table my-3'>
        <thead>
          <tr>
            <th scope="col">Red</th>
            <th scope="col">Blue</th>
            <th scope="col">Green</th>
          </tr>
        </thead>
          <tbody>
          <tr className="colorClass">
            <td className="colorRed">{ this.state.countRed }</td>
            <td className="colorBlue">{ this.state.countBlue }</td>
            <td className="colorGreen">{ this.state.countGreen }</td>
        </tr>
          </tbody>
        </table>
      </div>
      </>
    );
  }
}

//class App extends React.Component {
/*   function App(){
    return ( 
      <AddDeleteTableRows/>
    )
}

export default App; */

export default App;
