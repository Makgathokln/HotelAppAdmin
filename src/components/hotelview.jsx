import React, {Component, useState, useEffect} from 'react';
import { onValue, ref, remove, set } from "firebase/database";
import { signOut, onAuthStateChanged } from "firebase/auth";
import {db } from "../firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import profA from "../images/profA.jpeg";
import guest from '../const/guests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit,faEye, faTrash, faBed, faUsers, faFolder,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Link, Route ,useNavigate,useParams} from "react-router-dom";

const Hotelview = () => {

  const navigate = useNavigate();
  
  const [names, setNames] = useState([]);
 
    
  // const AddRooms = () =>{
    const [addHotels, setAddHotels] = useState([]);
    React.useEffect(() =>{
      onValue(ref(db, "/addHotels/"), (snapshot) =>{
        setAddHotels([]);
        const data = snapshot.val();
        if(data !== null) {
          Object.values(data).map((addHotel) => {
            setAddHotels((oldArray) => [...oldArray,addHotel ]);
          });
        }
      });
    },[])
  
    // function getHotel(arg) {
    //     const idiHotels = state[0][0].addHotels.map((item) => item);
    //     const hotelDatas = idiHotels.filter((hotelItem) => hotelItem.slug === arg);
    //     return hotelDatas
    // }
    // if (state.length > 0 && slug){
    //    HotelData = getHotel(slug);
    //     if (hotelData.length > 0) {
    //         var id = hotelData[0].id;
    //         var name = hotelData[0].name;
    //         var city = hotelData[0].city;
    //         var province = hotelData[0].province;

    //     }
    // }

        const deleteHotel = (id) =>{
    remove(ref(db, `/addHotels/${id}`)).then(() => {
    alert("Hotel deleted Succesfully");
    navigate("/hotelview");
    })
        }

// function deleteHotel   (id) =>{
//     if(window.confirm('Are yoy')){
//         db.child(`addHotels/${id}`).remove((err) =>{
//             if(err) {
//                 co`nsole.log(err);
//             }
//         })
//     }
        

return(
    <>
        
        <div className='container-fluid'>
        

        {/* <input className="form-control" 
        style={{width:600, height:40, 
        borderRadius:10, marginTop:20, marginLeft:20,  border:'2px solid #FF8038',}}
         type="search" placeholder='Search' aria-label='Search'/>
          */}
{/*         
        <div className='roomHeader'>
    <p className='userName'>Hi, Leah</p>
    <img  src={profA} alt="this is car image" style={{ width:50,height:50,  
    marginTop:10,  }} 
    />
    </div> */}


        <div className='gueBody'>
           <div className='gueBodyA'> 
           <h3>Hotel</h3>
            
            </div>
           
            <hr style={{  color:'#444',border: '1px solid #444', marginLeft:10, marginBottom:40}}/>

            <ul class="nav nav-tabs">
  <li class="nav-item">
  <Link to='/addHotels' className="nav-link">Add</Link>
    
  </li>
  <li class="nav-item">
  <Link to='/hotelview' className="nav-link active">Details</Link>
  </li>
  
</ul>


        </div>

        <div className='formAdmin'>


  <table class="table table-bordered" style={{marginLeft:20, justifyContent:'center', alignContent:'center'}}>
 
  <thead>
    <tr>
      <td >#</td>
      <td class="col-sm-2">Hotel Name</td>
      <td class="col-sm-2">Email Address</td>
      <td class="col-sm-2">Contacts</td>
      <td class="col-sm-2">Description</td>
      <td class="col-sm-3">Action</td>


    </tr>
  </thead>
  <tbody>
  

   {addHotels.map((addHotel) => ( 
    <tr key={addHotel.id}>
      <th scope="row">{addHotel.id}</th>
      <th>{addHotel.name}</th>
      <th>{addHotel.email}</th>
      <th>{addHotel.contactNumber}</th>

      <th>{addHotel.description}</th>

      <td>
      <button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10, color:'#fff', backgroundColor:'#99ff99'}}>View</button>
<button type="button" className="btn btn-lightd" style={{width:70, marginLeft:10,color:'#fff', backgroundColor:'#ffe066'}}>Edit</button>
<button type="button"  className="btn btn-lightd" style={{width:70, marginLeft:10, color:'#fff',backgroundColor:'#ff6666'}}>Delete</button>
     
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
export default Hotelview;