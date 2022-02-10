import React, {useState, useEffect} from 'react';
import Menu from './menu';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pin3 from "../images/pin3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {signInWithEmailAndPassword} from "firebase/auth";
import './landing.css';
export default function Landing(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
        return(
            <>
            <div className='container-fluid'>
<div className='LandHeader'>

    
<h4 style={{color:'#0B156F'}}>Welcome To Our Admin System</h4>
<p className='nameP' style={{color:'#0B156F'}}>Hi, Bella</p>
<img className='imageP' src={pin3} alt="this is car image" style={{ width:50,height:50, borderRadius:50}} />



</div>
<div className='LandBody'>
                <h1 style={{color:'#666666', marginTop:20}}>Reports</h1>

<div className='LandInside'>

    <div className='LandInsideA'>
<div className='squareA'>
    <p className='guests'>Cancelled Rooms</p>
    <p className='number'> 2</p>
</div>

<div className='squareB'>
<p className='guests'>Rooms Booked</p>
<p className='number'> 2</p>

</div>

<div className='squareC'>
    <p className='guests'>Availabe Rooms</p>
    <p className='number'> 2</p>

</div>
    </div>

    <div className='LandInsideB'>
        <p>fffff</p>
    </div>
    </div>
 
    <div className='LandInsideAA'>
<div className='squareA'>
    <p className='guests'>Total Rooms</p>
    <p className='number'> 2</p>

</div>


<div className='squareB'>
<p className='guests'>Checked-In</p>
<p className='number'> 2</p>

</div>

<div className='squareC'>
    <p className='guests'>Checked-Out</p>
    <p className='number'> 2</p>

</div>
    </div>
            </div>
            </div>

           
            </>
        )
    }
