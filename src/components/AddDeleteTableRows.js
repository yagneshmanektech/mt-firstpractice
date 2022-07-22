import React, { useState } from 'react';
//import TableRows from "./components/TableRows";

function AddDeleteTableRows(props){

    const [rowsData, setRowsData] = useState([]);
    
    const handleInputChange = (event)=>{
        
        event.preventDefault();
        const target = event.target;
        console.log(target.value);  
        const fieldvalue = target.value;
        const fieldname = target.name;

        /* this.setState({
            [fieldname]: fieldvalue
          }); */
        
        
          
        const rowsInput = [...rowsData];
        rowsInput[fieldname] = fieldvalue;
        setRowsData(rowsInput);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        
        if(rowsData.fname === '' || rowsData.color === '') {
            alert('All fields are mandatory');
            return;
        }
        const rowsInput={
            fname:rowsData.fname,
            color:rowsData.color
        } 
        setRowsData([...rowsData, rowsInput])
    }

    const handleRemoveRow = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
    }

    const handleClear = (event)=>{
        event.preventDefault();
        console.log('clear');
        /* const { name, value } = event.target;
        const rowsInput = [...rowsData];
        rowsInput[name] = '';
        setRowsData(rowsInput); */
        const target = event.target;
        const fieldvalue = target.value;
        const fieldname = target.name;
        console.log(rowsData);
        const rowsInput = [...rowsData];
        rowsInput[fieldname] = '';
        setRowsData(rowsInput);
    }

    const handleEditClick = (index, event)=>{
        console.log('edit');
    }


    
    /* handleClear(event) {
        console.log('clear');
        console.log(event);
        this.setState({
          name : '',
          color: ''
        })
        event.preventDefault();    
      } */

    /* constructor(props) {
        super(props);
        this.state = {
          name: "",
          color: "",
          data: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
      } */
      
     /*  handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      handleSubmit(event) {
        const { name, color } = this.state;    
        const newdata = {
          name: name,
          selectedcolor: color 
        };
        event.preventDefault();
        if(name === '' || color === '') {
          alert('All fields are mandatory');
          return;
        }
    
        this.setState(prevState => ({
          data: [...prevState.data,newdata ]
        }));
        event.preventDefault();
      }
      
      handleEditClick = () => {
    
      };
    
      handleRemoveRow = (index) => {
        
        const [rowsData, setRowsData] = useState([]);
    
        const rowsInput={
          name:'',
          color:'' 
        } 
        setRowsData([...rowsData, rowsInput])
    
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
        
      }; */
      
    
        return (
          <>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input className="form-control" type="text" name="fname" value={rowsData} onChange={handleInputChange} placeholder='Name' />
              </div>
              
              <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Color</label>
                <select className='form-select' aria-label="Default select example" value={rowsData} name="color" onChange={handleInputChange} >
                <option value="">Color</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                </select>
              </div>
              <button type='submit' className="btn btn-primary">Submit</button>
                  <input type="button" className="btn btn-primary mx-3" onClick={handleClear} value="Clear" />
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
                    rowsData.map((data, index)=>{
                        const {name, color}= data;
                        return(
                            <tr key={index}>
                            <td>{data.fname}</td>
                            <td>{data.color}</td>
                            <td><button className="btn btn-outline-danger" onClick={()=>(handleEditClick(index))}>Edit</button></td>
                            <td><button className="btn btn-outline-danger" onClick={()=>(handleRemoveRow(index))}>x</button></td>
                        </tr>
                        )
                    })
            
                }  
              {/* {
                this.state.data.map((item,i) => {
                  return (
                    <tr data-index={i} >
                      <td>{item.name}</td>
                      <td>{item.selectedcolor}</td>
                      <td><a href="#" onClick={handleEditClick}>Edit</a></td>
                      <td><a href="javascript:void(0)" onClick= {handleRemoveRow} >Delete</a></td>
                    </tr>
                  );
                })
              } */}
              </tbody>
            </table>
          </div>
          </>
        );
      }
export default AddDeleteTableRows