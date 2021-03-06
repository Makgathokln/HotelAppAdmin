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
  const [city, setcity] = useState("");
  const [hotelprice, sethotelprice] = useState("");

  const [province, setprovince] = useState("");
  const [price1, setprice1] = useState("");
  const [price2, setprice2] = useState("");
  const [price3, setprice3] = useState("");
  
  const [beds, setBeds]  = useState(0);
  const [bedType , setBedType] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [email, setemail] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [longitude, setlongitude] = useState("");
  const [latitude, setlatitude] = useState("");

  const [beds2, setBeds2]  = useState(0);

  const [roomtype, setRoomtype] =useState("");
  const [roomurl, setroomurl] = useState("");
  const [roomtype2, setRoomtype2] =useState("");
  const [roomurl2, setroomurl2] = useState("");
const [roomnumber, setRoomnumber] = useState("");
const [roomprice, setRoomprice] = useState(0);
const [roomnumber2, setRoomnumber2] = useState("");
const [roomprice2, setRoomprice2] = useState(0);
 


const addHotelToFirebase = () => {
    if (

      name &&
      location &&
      description &&
      city &&
      description &&
      province &&
      hotelprice &&
      contactNumber &&
      longitude &&
      latitude &&
      // price1 &&
      // price2 &&
      // price3 &&
      email &&
      image1 
      // image2 &&
      // image3 &&
      // image4
    ) {
      set(ref(db, `addHotels/${uid}`), {
        sys: {
          id: uid,
        },

        name,
        slug: uid.toString(),

        location,
        description,
        city,
        province,
        hotelprice,
        contactNumber,
        email,
        longitude,
        latitude ,
        // price1,
        // price2,
        // price3,
      
        image2,
        image3,
       
        images: [
          {

            url: image1,
          },
          

        ],
        room:[{
         roomtype:roomtype,roomurl:roomurl,
         beds:beds,roomnumber:roomnumber,roomprice:roomprice
        },
        {
          roomtype:roomtype2,roomurl:roomurl2,
          beds:beds2,roomnumber:roomnumber2,roomprice:roomprice2
        }
      ],

      }).then(() => {
        alert("Hotel Added!");
        setname("");
        setlocation("");
        setdescription("");
        sethotelprice("");
        setlongitude("");
        setlatitude("");
        setcity("");
        // setprice1("");
        // setprice2("");
        // setprice3("");

        setprovince("");
        setcontactNumber("");
        setemail("");
        setImage1("");
        // setImage2("");
        // setImage3("");
        // setImage4("");




        navigate("/AddHotels");
      });
    } else {
      return alert("Please fill all required fields.");
    }
  };


  return (
    <div className="container my-5">

      <div >
        <h3>Hotels</h3>


        <hr style={{ color: '#444', border: '1px solid #444', marginLeft: 10, marginBottom: 40 }} />

        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Add</a>

          </li>
          <li class="nav-item">
            <Link to='/hotelview' className="nav-link">Details</Link>
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
                      placeholder="Mooi Hotel"
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
                      placeholder="66 Hans Street "
                      required
                    />
                  </div>

                  <div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">Longitude</label>
<input
  type="text"
  className="form-control w-25"
  value={longitude}
  onChange={(e) => setlongitude(e.target.value)}
  id="longitude"
  placeholder="dfgfdgfd "
  required
/>
</div>

<div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">Latitude</label>
<input
  type="text"
  className="form-control w-25"
  value={latitude}
  onChange={(e) => setlatitude(e.target.value)}
  id="latitude"
  placeholder="fddf "
  required
/>
</div>

                  <div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">Price</label>
<input
  type="text"
  className="form-control w-25"
  value={hotelprice}
  onChange={(e) => sethotelprice(e.target.value)}
  id="Price Hotel"
  placeholder="R1000 "
  required
/>
</div>

                  <div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">Type</label>
<input
  type="text"
  className="form-control w-25"
  value={roomtype}
  onChange={(e) => setRoomtype(e.target.value)}
  id="location"
  placeholder="66 Hans Street "
  required
/>
</div>

                  <div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">Room No</label>
<input
  type="text"
  className="form-control w-25"
  value={roomnumber}
  onChange={(e) => setRoomnumber(e.target.value)}
  id="location"
  placeholder="66 Hans Street "
  required
/>
</div>

                  <div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">No Of Beds</label>
<input
  type="text"
  className="form-control w-25"
  value={beds}
  onChange={(e) => setBeds(e.target.value)}
  placeholder="Mooi Hotel"
  required
/>
</div>

<div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">2 Room No</label>
<input
  type="text"
  className="form-control w-25"
  value={roomnumber2}
  onChange={(e) => setRoomnumber2(e.target.value)}
  id="location"
  placeholder="66 Hans Street "
  required
/>
</div>

                  <div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">2 No Of Beds</label>
<input
  type="text"
  className="form-control w-25"
  value={beds2}
  onChange={(e) => setBeds2(e.target.value)}
  placeholder="Mooi Hotel"
  required
/>
</div>


<div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">2 Room tYpe</label>
<input
  type="text"
  className="form-control w-25"
  value={roomtype2}
  onChange={(e) => setRoomtype2(e.target.value)}
  placeholder="Mooi Hotel"
  required
/>
</div>

<div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">2 Room Url</label>
<input
  type="url"
  className="form-control w-25"
  value={roomurl2}
  onChange={(e) => setroomurl2(e.target.value)}
  id="location"
  placeholder="66 Hans Street "
  required
/>
</div>

                  <div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">2 Price</label>
<input
  type="number"
  className="form-control w-25"
  value={roomprice2}
  onChange={(e) => setRoomprice2(e.target.value)}
  placeholder="Mooi Hotel"
  required
/>
</div>


<div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">Room Price</label>
<input
  type="text"
  className="form-control w-25"
  value={roomprice}
  onChange={(e) => setRoomprice(e.target.value)}
  id="room price"
  placeholder="R2000"
  required
/>
</div>


                  <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="type">Description</label>
                    <textarea
                      className=" col-sm-2 form-control w-25"
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
                      id="description"
                      placeholder="Short description of room."
                      rows="3"
                    ></textarea>


                  </div>




                  <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img2">City </label>
                    <input
                      type="text"
                      className="form-control w-25"
                      value={city}
                      onChange={(e) => setcity(e.target.value)}
                      id="city"
                      placeholder="Polokwane"
                      required
                    />
{/* 
                    <select class="form-select w-25" aria-label="Default select example" style={{ marginLeft: 40 }} selected={city}
                      onChange={() => setcity(!city)}>
                      <option selected>Select City</option>
                      <option value={city}>Polokwane</option>
                      <option value={city}>Pretoria</option>
                      <option value={city}>Cape Town</option>
                    </select> */}

                  </div>

                  <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img3">Province</label>
                    <input
                      type="text"
                      value={province}
                      onChange={(e) => setprovince(e.target.value)}
                      className="form-control w-25"
                      id="province"
                      placeholder="Limpopo"
                      required
                    />

                    {/* <select class="form-select w-25" aria-label="Default select example" style={{ marginLeft: 40 }} selected={city}
                      onChange={() => setprovince(!province)}>
                      <option selected>Select Province</option>
                      <option value={province}>Limpopo</option>
                      <option value={province}>Gauteng</option>
                      <option value={province}>North West</option>
                      <option value={province}>Free State</option>
                      <option value={province}>Western Cape</option>
                      <option value={province}>Northern Cape</option>
                      <option value={province}>Eastern Cape</option>
                      <option value={province}>Gauteng</option>
                      <option value={province}>Kwa-Zulu Natal</option>
                    </select> */}
                  </div>

                  <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img4">Email Address</label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      className="form-control w-25"
                      id="email"
                      placeholder="MooiHotel@webmail.co.za"
                      required
                    />
                  </div>

                  {/* <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img4">Exec Price</label>
                    <input
                      type="text"
                      value={price1}
                      onChange={(e) => setprice1(e.target.value)}
                      className="form-control w-25"
                      id="price"
                      placeholder="R2000"
                      required
                    />
                  </div> */}

                  {/* <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img4">Stan Price</label>
                    <input
                      type="text"
                      value={price2}
                      onChange={(e) => setprice2(e.target.value)}
                      className="form-control w-25"
                      id="price"
                      placeholder="R2000"
                      required
                    />
                  </div> */}

                  {/* <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img4">Stan Price</label>
                    <input
                      type="text"
                      value={price3}
                      onChange={(e) => setprice3(e.target.value)}
                      className="form-control w-25"
                      id="price"
                      placeholder="R2000"
                      required
                    />
                  </div> */}

                  <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img1">Contact Number</label>
                    <input
                      type="text"
                      value={contactNumber}
                      onChange={(e) => setcontactNumber(e.target.value)}
                      className="form-control w-25"
                      id="contactNumber"
                      placeholder="011 282 1520"
                      required
                    />
                  </div>

                  <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img1">Image Url</label>
                    <input
                      type="url"
                      value={image1}
                      onChange={(e) => setImage1(e.target.value)}
                      className="form-control w-25"
                      id="image1"
                      placeholder="https://images.co.za"
                      required
                    />
                  </div>
                  {/* <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img1">Image Url</label>
                    <input
                      type="url"
                      value={image2}
                      onChange={(e) => setImage2(e.target.value)}
                      className="form-control w-25"
                      id="image2"
                      placeholder="https://images.co.za"
                      required
                    />
                  </div>
                  <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img1">Image Url</label>
                    <input
                      type="url"
                      value={image3}
                      onChange={(e) => setImage3(e.target.value)}
                      className="form-control w-25"
                      id="image2"
                      placeholder="https://images.co.za"
                      required
                    />
                  </div> */}

                  <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img1">Room Url</label>
                    <input
                      type="url"
                      value={roomurl}
                      onChange={(e) => setroomurl(e.target.value)}
                      className="form-control w-25"
                      id="image4"
                      placeholder="https://images.co.za"
                      required
                    />
                  </div>



                </div>


              </form>

              <div className='button justify-content-center align-items-center' style={{ marginLeft: 200 }}>
                <button type="submit" onClick={addHotelToFirebase}
                  className="btn btn-light">Add</button>
                <button type="button" className="btn btn-light">Clear</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotels;