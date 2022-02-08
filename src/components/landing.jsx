import React, {useState, useEffect} from 'react';
import Menu from './menu';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pin3 from "../images/pin3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {signInWithEmailAndPassword} from "firebase/auth";

export default function Landing(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
        return(
            <>
            <div className='container'>
<div className='LandHeader'>

    
<h4 style={{color:'#0B156F'}}>Welcome To Our Admin System</h4>
<p className='nameP' style={{color:'#0B156F'}}>Hi, Bella</p>
<img className='imageP' src={pin3} alt="this is car image" style={{ width:50,height:50, borderRadius:50}} />



</div>
<div className='LandBody'>
                <h1 style={{color:'#666666'}}>Reports</h1>

<div className='LandInside'>

    <div className='LandInsideA'>
<div className='squareA'>
    <h3>No. of Guests</h3>
</div>

<div className='squareB'>
<h3>Rooms booked</h3>

</div>

<div className='squareC'>
    <h4>Checked-In</h4>
</div>
    </div>

    <div className='LandInsideB'>
        <p>fffff</p>
    </div>
    </div>
 
    <div className='LandInsideAA'>
<div className='squareA'>
    <h3>No. of Guests</h3>
</div>


<div className='squareB'>
<h3>Rooms booked</h3>

</div>

<div className='squareC'>
    <h4>Checked-In</h4>
</div>
    </div>
            </div>
            </div>

           
            </>
        )
    }
