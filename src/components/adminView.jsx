import React, {Component} from 'react';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import profA from "../images/profA.jpeg";
import guest from '../const/guests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit,faEye, faTrash, faBed, faUsers, faFolder,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Link, Route ,useLocation,useParams} from "react-router-dom";

const adminView = () => {
  
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
           <h3>Admin</h3>
            
            </div>
           
            <hr style={{  color:'#444',border: '1px solid #444', marginLeft:10, marginBottom:40}}/>

            <ul class="nav nav-tabs">
  <li class="nav-item">
  <Link to='/admin' className="nav-link">Add</Link>
    
  </li>
  <li class="nav-item">
  <Link to='/roomView' className="nav-link active">View</Link>
  </li>
  
</ul>


        </div>

        <div className='formAdmin'>
        
       

    <table class="table table-bordered" style={{marginLeft:20, width:900, justifyContent:'center', alignContent:'center'}}>
    <thead>
      <tr>
        <th style={{width:130}}>First Name</th>
        <th style={{width:130}}>Last Name</th>
        <th style={{width:130}}>Email Address</th>
        <th style={{width:180}}>Action</th>

      </tr>
    </thead>
    <tbody>
      <tr >
        <td>John</td>
        <td>Doe</td>
        <td>john@gmail.com</td>
        <td>
     
<button type="button" className="btn btn-light" style={{width:70, marginLeft:10}}>View</button>
<button type="button" className="btn btn-light" style={{width:70, marginLeft:10}}>Edit</button>
<button type="button" className="btn btn-light" style={{width:70, marginLeft:10}}>Delete</button>


        </td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@gmail.com</td>
        
        <td>
     
<button type="button" className="btn btn-light" style={{width:70, marginLeft:10}}>View</button>
<button type="button" className="btn btn-light" style={{width:70, marginLeft:10}}>Edit</button>
<button type="button" className="btn btn-light" style={{width:70, marginLeft:10}}>Delete</button>


        </td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@gmail.com</td>
       

        <td>
     
<td>

  
<button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10, color:'#fff', backgroundColor:'#99ff99'}}>View</button>
<button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10,color:'#fff', backgroundColor:'#ffe066'}}>Edit</button>
<button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10, color:'#fff',backgroundColor:'#ff6666'}}>Delete</button>
{/* <button type="button" className="btn btn-light" style={{width:70, marginLeft:10}}>Edit</button>
<button type="button" className="btn btn-light" style={{width:70, marginLeft:10}}>Delete</button> */}


        </td>
        </td>
      </tr>
    </tbody>
  </table>


</div>
        </div>
        </>
    )
}
export default adminView