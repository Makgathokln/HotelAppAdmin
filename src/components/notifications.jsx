import React, {Component} from 'react';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import profA from "../images/profA.jpeg";
import guest from '../const/guests';
import notification from '../const/notification';


const notifications = () => {

return(
    <>
        
        <div className='form-group'>
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
           <h3>Notifications</h3>
            <h4>Clear All</h4></div>
           
            <hr style={{  color:'#444',border: '1px solid #444', marginLeft:10, marginBottom:40}}/>
    
  
    
            <table class="table table-bordered" style={{marginLeft:20, width:900, justifyContent:'center', alignContent:'center'}}>
  <thead>
    <tr>
      <th style={{width:100}}>Name</th>
      <th style={{width:100}}>Room Type</th>
      <th style={{width:100}}>Room No</th>

      <th style={{width:100}}>Check-In</th>
      <th style={{width:100}}>Check-Out</th>
      <th style={{width:100}}>Paid</th>

    </tr>
  </thead>
  <tbody>
  {
    notification.map((item)=>
    <tr>
      <td>{item.name}</td>
      <td>{item.type}</td>

      <td>{item.roomNo}</td>
      <td>{item.checkIn}</td>
      <td>{item.checkOut}</td>
      <td>{item.price}</td>


    </tr>
     )}
  </tbody>
</table>
   
        </div>

        </div>
        </>
    )
}
export default notifications