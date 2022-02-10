import React, {Component, useState, useEffect} from 'react';
import { onValue, ref, set } from "firebase/database";
import { signOut, onAuthStateChanged } from "firebase/auth";
import {db } from "../firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import profA from "../images/profA.jpeg";
import guest from '../const/guests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit,faEye, faTrash, faBed, faUsers, faFolder,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Link, Route ,useNavigate,useParams} from "react-router-dom";

const RoomView = () => {
  const navigate = useNavigate();
  
  const [names, setNames] = useState([]);

  // const AddRooms = () =>{
    const [addRooms, setAddRooms] = useState([]);

    React.useEffect(() =>{
      onValue(ref(db, "/addRooms/"), (snapshot) =>{
        setAddRooms([]);
        const data = snapshot.val();
        if(data !== null) {
          Object.values(data).map((addRoom) => {
            setAddRooms((oldArray) => [...oldArray,addRoom ]);
          });
        }
      });
    },[])
  
return(
    <>
        
        <div className='container-fluid'>
        <div className='gueHeader' >

        <input className="form-control" 
        style={{width:600, height:40, 
        borderRadius:10, marginTop:20, marginLeft:20,  border:'2px solid #FF8038',}}
         type="search" placeholder='Search' aria-label='Search'/>
         
        
<p className='nameP' style={{color:'#0B156F',paddingLeft:200, marginTop:20, fontWeight:'bold'}}>Hi, Bella</p>
<img className='imageP' src={profA} alt="this is car image" 
style={{ width:50,height:50, borderRadius:10,marginLeft:140, 
marginTop:10,  }} />

        </div>

        <div className='gueBody'>
           <div className='gueBodyA'> 
           <h3>Rooms</h3>
            
            </div>
           
            <hr style={{  color:'#444',border: '1px solid #444', marginLeft:10, marginBottom:40}}/>

            <ul class="nav nav-tabs">
  <li class="nav-item">
  <Link to='/rooms' className="nav-link">Add</Link>
    
  </li>
  <li class="nav-item">
  <Link to='/roomView' className="nav-link active">View</Link>
  </li>
  
</ul>


        </div>

        <div className='formAdmin'>


  <table class="table table-bordered" style={{marginLeft:20, justifyContent:'center', alignContent:'center'}}>
 
  <thead>
    <tr>
      <td>#</td>
      <td class="col-sm-3">Room Type</td>
      <td class="col-sm-3">Room Number</td>
      <td class="col-sm-3">Price</td>
      <td class="col-sm-6">Action</td>


    </tr>
  </thead>
  <tbody>
  

   {addRooms.map((addRoom) => ( 
    <tr key={addRoom.id}>
      <th scope="row">{addRoom.id}</th>
      <th>{addRoom.type}</th>
      <th>{addRoom.roomNo}</th>
      <th>{addRoom.price}</th>
      <td>
      <button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10, color:'#fff', backgroundColor:'#99ff99'}}>View</button>
<button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10,color:'#fff', backgroundColor:'#ffe066'}}>Edit</button>
<button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10, color:'#fff',backgroundColor:'#ff6666'}}>Delete</button>
     
             </td>
    </tr>
    
    ))}
  </tbody>
</table> 
</div>
        </div>
        </>
    )
}
export default RoomView