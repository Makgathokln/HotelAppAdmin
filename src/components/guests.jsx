import React, {Component} from 'react';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import profA from "../images/profA.jpeg";
import guest from '../const/guests';


const guests = () => {

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
           <h3>Guests</h3>
            <h3>Add New Guest</h3></div>
           
            <hr style={{  color:'#444',border: '1px solid #444', marginLeft:10, marginBottom:40}}/>


            
{/* {
    guest.map((item)=>
    
            <div className="box-container">
                 <div className='box'>
                <div className='image'>
                <img className='imageP' src={profA} alt="this is car image" 
                style={{ width:110,height:110, borderRadius:5,marginTop:10, marginLeft:10  }} />

                </div>

                <div className='gueDetails'>
               
               <div className='header' style={{fontWeight:'bolder', fontSize:18, color:'#0B156F'}}>
                {item.name}<br/>
                </div>
                
                <div className='details'>
                {item.type}<br/>
                {item.checkIn}<br/>
                {item.checkOut}<br/>
                {item.price}
                </div>

                
                </div>
            </div>
           
            </div>
                )
            } */}
        </div>

        </div>
        </>
    )
}
export default guests