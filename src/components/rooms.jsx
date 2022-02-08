import React, {useState,} from 'react';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import profA from "../images/profA.jpeg";
import guest from '../const/guests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome,faBell, faUser, faBed, faUsers, faFolder,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as
   Router, Routes,
   Link, Route ,
   useHistory,useParams} from "react-router-dom";
//import firebaseDb from '../firebase';
// import firebase from '../firebase';

const Rooms = () => {
 
  


return(
    <>
        
        <div className='container'>

          <form >
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
    <a className="nav-link active" aria-current="page" href="#">Add</a>
    
  </li>
  <li class="nav-item">
  <Link to='/roomView' className="nav-link">View</Link>
  </li>
  
</ul>


        </div>

        <div className='container mt-5'>
        

<div class="mb-3 row justify-content-center align-items-center">
<label for="staticEmail" class="col-sm-2 col-form-label">Room Type</label>
<div class="col-sm-3">
<select class="form-select form-select-md" style={{marginLeft:40}}>
<option selected>Please Select</option>
<option value="1"> Executive Suite</option>
<option value="2">Standard Suite</option>
<option value="3">Junior Suite</option>
</select>
</div>
</div>

<div class="mb-3 row justify-content-center align-items-center">
<label for="lastName" class="col-sm-2 col-form-label">Room Number</label>
<div class="col-sm-3">
<select class="form-select form-select-md" style={{marginLeft:40}}>
<option selected>Please Select</option>
<option value="1"> Room 1</option>
<option value="2">Room 2 </option>
<option value="3">Room 3</option>
<option value="4">Room 4 </option>
<option value="5">Room 5</option>
</select>
</div>
</div>

<div class="mb-3 row justify-content-center align-items-center">
<label for="emailAddress" class="col-sm-2 col-form-label">Price</label>
<div class="col-sm-3">
<input type="number" name="price" 
 className="form-control" id="inputPassword" />
</div>
</div>



<div class="mb-3 row justify-content-center align-items-center">
<label for="inputPassword" class="col-sm-2 col-form-label">No. Of Beds</label>
<div class="col-sm-3">
<input type="number" name="noOfBeds" className="form-control" id="inputPassword" />
</div>
</div>

<div class="mb-3 row justify-content-center align-items-center">
<label for="contactNumber" class="col-sm-2 col-form-label">Photos</label>
<div class="col-sm-3" >
<div class="mb-3">
<input class="form-control" id="formFileMd" type="file"/>
</div>    </div>
</div>

<div className='button justify-content-center align-items-center' style={{marginLeft:230}}>
<button type="submit" className="btn btn-light">Add</button>
<button type="button" className="btn btn-light">Clear</button>

</div>
    </div>
    </form>
</div>
        </>
    )
}
export default Rooms