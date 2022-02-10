import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { db } from "../firebase";
import { v4 } from "uuid";
import { useNavigate, Link } from "react-router-dom";
import profA from "../images/profA.jpeg";
import './hotels.css';

const AddHotels = () => {
  const navigate = useNavigate();
  const uid = v4();

  const [name, setname] = useState("");
  const [location, setlocation] = useState("");
  const [description, setdescription] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const addHotelToFirebase = () => {
    if (
     
      name &&
      location &&
      description &&
      image1 &&
      image2 &&
      image3 &&
      image4
    ) {
      set(ref(db, `addHotels/${uid}`), {
        sys: {
          id: uid,
        },
        fields: {
          name,    
                slug: uid.toString(),
          
          location,
          description,
          images: [
            {
              fields: {
                file: {
                  url: image1,
                },
              },
            },
            {
              fields: {
                file: {
                  url: image2,
                },
              },
            },
            {
              fields: {
                file: {
                  url: image3,
                },
              },
            },
            {
              fields: {
                file: {
                  url: image4,
                },
              },
            },
          ],
        },
      }).then(() => {
        alert("Hotel Added!");
        setname("");
        setlocation("");
        setdescription("");
        
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");

        navigate("/AddHotels");
      });
    } else {
      return alert("Please fill all required fields.");
    }
  };

  
  return (
    <div className="container my-5">
      
      <div className='hotels' >

      {/* <input className="form-control" 
        style={{width:600, height:40, 
        borderRadius:10, marginTop:20, marginLeft:20,  border:'2px solid #FF8038',}}
         type="search" placeholder='Search' aria-label='Search' disabled/> */}
         
        
         <p className='hotels'>Hi, Bella</p>
    <img className='hotels'  src={profA} alt="this is car image" 
style={{ width:50,height:50, borderRadius:10,marginLeft:140, 
marginTop:10,  }} />
      
      </div>

      <div className='gueBody'>
           <div className='gueBodyA'> 
           <h3>Hotels</h3>
            
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
      
      <div className="row">
         
          <div className="row my-4">
            <div className="col-md-12 col-12 my-auto">
              <div className="col-md-12 col-12 float-right">
                <form>
                  <div className="form-group">

                 
                <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="type">Hotel Name</label>
                    <input
                      type="text"
                      className="form-control w-25"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      id="name"
                      placeholder="Hotel Name"
                      required
                    />
            </div>

            
            <div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">Location</label>
<input
  type="text"
  className="form-control w-25"
  value={location}
  onChange={(e) => setlocation(e.target.value)}
  id="location"
  placeholder="Location "
  required
/>
</div>

            
            <div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">Description</label>
<input
  type="text"
  className="form-control w-25"
  value={description}
  onChange={(e) => setdescription(e.target.value)}
  id="description"
  placeholder="Description"
  required
/>
</div>
                

                   <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img1">Image 1</label>
                    <input
                      type="text"
                      value={image1}
                      onChange={(e) => setImage1(e.target.value)}
                      className="form-control w-25"
                      id="img1"
                      placeholder="Image 1 URL"
                      required
                    />
                    </div>

                    <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img2">Image 2</label>
                    <input
                      type="text"
                      className="form-control w-25"
                      value={image2}
                      onChange={(e) => setImage2(e.target.value)}
                      id="img2"
                      placeholder="Image 2 URL"
                      required
                    />
                  </div>

                  <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img3">Image 3</label>
                    <input
                      type="text"
                      value={image3}
                      onChange={(e) => setImage3(e.target.value)}
                      className="form-control w-25"
                      id="img3"
                      placeholder="Image 3 URL"
                      required
                    />
                    </div>

                    <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img4">Image 4</label>
                    <input
                      type="text"
                      value={image4}
                      onChange={(e) => setImage4(e.target.value)}
                      className="form-control w-25"
                      id="img4"
                      placeholder="Image 4 URL"
                      required
                    />
                  </div>
                </div>

                  <div className='button justify-content-center align-items-center' style={{marginLeft:200}}>
                <button type="submit" onClick={addHotelToFirebase}
                                            className="btn btn-light">Add</button>
                <button type="button" className="btn btn-light">Clear</button></div>
                
                </form>
               
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AddHotels;