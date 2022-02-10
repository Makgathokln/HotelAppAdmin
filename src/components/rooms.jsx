import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { db } from "../firebase";
import { v4 } from "uuid";
import { useNavigate, Link } from "react-router-dom";
import profA from "../images/profA.jpeg";

const Rooms = () => {
  const navigate = useNavigate();
  const uid = v4();

  const [type, settype] = useState("");
  const [price, setprice] = useState(0);
  const [NoOfBeds, setNoOfBeds] = useState(0);
  const [roomNo, setroomNo] = useState("");
 
  const [extras, setextras] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const addRoomToFirebase = () => {
    if (
     
      type &&
      price &&
      NoOfBeds &&
      roomNo &&
      image1 &&
      image2 &&
      image3 &&
      image4
    ) {
      set(ref(db, `addRooms/${uid}`), {
        sys: {
          id: uid,
        },
        // fields: {
        //   type,    
        //         slug: uid.toString(),
          type,
          price,
          NoOfBeds,
          roomNo,
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
        // },
      }).then(() => {
        alert("Room Added!");
        // setName("");
        settype("");
        setNoOfBeds(0);
        setprice(0);
        setroomNo("");
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");

        navigate("/rooms");
      });
    } else {
      return alert("Please fill all required fields.");
    }
  };

  return (
    <div className="container my-5">
      
     

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
  <Link to='/roomView' className="nav-link">Details</Link>
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

                    <label class="col-sm-2 col-form-label" htmlFor="type">Room Type</label>
                    <input
                      type="text"
                      className="form-control w-25"
                      value={type}
                      onChange={(e) => settype(e.target.value)}
                      id="type"
                      placeholder="Room type"
                      required
                    />
            </div>

            
            <div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">Room Number</label>
<input
  type="text"
  className="form-control w-25"
  value={roomNo}
  onChange={(e) => setroomNo(e.target.value)}
  id="roomNo"
  placeholder="Room number"
  required
/>
</div>

            
            <div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">No. Of Beds</label>
<input
  type="text"
  className="form-control w-25"
  value={NoOfBeds}
  onChange={(e) => setNoOfBeds(e.target.value)}
  id="NoOfBeds"
  placeholder="No Of Beds"
  required
/>
</div>
                <div class="mb-3 row justify-content-center align-items-center">
                    <label class="col-sm-2 col-form-label" htmlFor="price">Price</label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setprice(e.target.value)}
                      className="form-control w-25"
                      required
                      id="price"
                      placeholder="Room price"
                    />
                   </div>

                   <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img1">Image 1</label>
                    <input
                      type="url"
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
                      type="url"
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
                      type="url"
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
                      type="url"
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
                <button type="submit" onClick={addRoomToFirebase} className="btn btn-light">Add</button>
                <button type="button" className="btn btn-light">Clear</button></div>                </form>
               
                
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Rooms;