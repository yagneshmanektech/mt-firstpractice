import React, {useState} from 'react'

export default function FirstExcercise(props) {

    const handleclearclick = ()=> {
        console.log('test');
        let newText = '';
        setText(newText);
    }
    const handlechange = (event)=> {
        setText(event.target.value);
    }
    const[text_input,setText] = useState('');

  return (
    <div className="container">
           <div className="my-3">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input className="form-control" type="text" onChange={handlechange} placeholder="Enter Name" value={text_input} aria-label="default input example" />                
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Color</label>
                <select className='form-select' aria-label="Default select example">
                    <option selected>Select Color</option>
                    <option value="1">Red</option>
                    <option value="2">Green</option>
                    <option value="3">Blue</option>
                </select>  
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="submit" className="btn btn-primary mx-3" onClick={handleclearclick} >Clear</button>
   
        
        
    </div>
  )
}
