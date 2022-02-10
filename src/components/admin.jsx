import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { db } from "../firebase";
import { v4 } from "uuid";
import { useNavigate, Link } from "react-router-dom";
import profA from "../images/profA.jpeg";

const Admin = () => {
  const navigate = useNavigate();
  const uid = v4();

//   useEffect(() =>{
//   auth.onAuthStateChanged((user) => {
//     if(user){
//       onValue(ref(db, `/${auth.currentUser.uid}`), snapshot =>{
//         setNames([]);
//         const data = snapshot.val();
//         if(data !== null){
//           Object.values(data).map(todo => {
//             setNames((oldArray) => [...oldArray, names]);
//           });
//         }
//       });
//     } else if (!user) {
//       navigate("/");
//     }
//   });
// },[]);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [contactNumber, setcontactNumber] = useState(0);
  

  const addAdminToFirebase = () => {
    if (
      firstName &&
      lastName &&
      email &&
      password &&
      contactNumber 
     
    ) {
      set(ref(db, `addAdmin/${uid}`), {
        sys: {
          id: uid,
        },
        fields: {
          firstName,
          slug: uid.toString(),
          lastName,
          email,
          contactNumber,
          password,
          
         
              },
          
      }).then(() => {
        alert("Admin Added!");
        setfirstName("");
        setlastName("");
        setemail("");
        setcontactNumber(0);
        setpassword("");
      
        navigate("/admin");
      });
    } else {
      return alert("Please fill all required fields.");
    }
  };


  return (
    <div className="container my-5">
      
     

      <div className='gueBody'>
           <div className='gueBodyA'> 
           <h3>Admin</h3>
            
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

                    <label class="col-sm-2 col-form-label" htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control w-25"
                      value={firstName}
                      onChange={(e) => setfirstName(e.target.value)}
                      id="firstName"
                      placeholder="Michael"
                      required
                    />
            </div>

            
            <div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">Last Name</label>
<input
  type="text"
  className="form-control w-25"
  value={lastName}
  onChange={(e) => setlastName(e.target.value)}
  id="last name"
  placeholder="Smith"
  required
/>
</div>

            
<div class="mb-3 row justify-content-center align-items-center">

<label class="col-sm-2 col-form-label" htmlFor="type">Email Address</label>
<input
  type="email"
  className="form-control w-25"
  value={email}
  onChange={(e) => setemail(e.target.value)}
  id="email"
  placeholder="SmithMichael@webmail.co.za"
  required
/>
</div>

 <div class="mb-3 row justify-content-center align-items-center">
<label class="col-sm-2 col-form-label" htmlFor="password">Password</label>
<input
type="password"
 value={password}
onChange={(e) => setpassword(e.target.value)}
className="form-control w-25"
required
id="password"
placeholder="********"
/>
  </div>

                   <div class="mb-3 row justify-content-center align-items-center">

                    <label class="col-sm-2 col-form-label" htmlFor="img1">Contact Number</label>
                    <input
                      type="text"
                      value={contactNumber}
                      onChange={(e) => setcontactNumber(e.target.value)}
                      className="form-control w-25"
                      id="img1"
                      placeholder="078 085 0852"
                      required
                    />
                    </div>

                   
                </div>
                <div className='button justify-content-center align-items-center' style={{marginLeft:200}}>
                <button type="submit" onClick={addAdminToFirebase} className="btn btn-light">Add</button>
                <button type="button" className="btn btn-light">Clear</button></div>                 
                                </form>
              
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Admin;
// useEffect(() =>{
//   auth.onAuthStateChanged((user) => {
//     if(user){
//       onValue(ref(db, `/${auth.currentUser.uid}`), snapshot =>{
//         setNames([]);
//         const data = snapshot.val();
//         if(data !== null){
//           Object.values(data).map(todo => {
//             setNames((oldArray) => [...oldArray, names]);
//           });
//         }
//       });
//     } else if (!user) {
//       navigate("/");
//     }
//   });
// },[]);

  // const [firstName, setfirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  // const [email, setemail] = useState(0);
  // const [password, setpassword] = useState(0);
  // const [contactNumber, setcontactNumber] = useState(1);
  

  // const addAdminToFirebase = () => {
  //   if (
  //     firstName &&
  //     lastName &&
  //     email &&
  //     password &&
  //     contactNumber 
     
  //   ) {
  //     set(ref(db, `addAdmin/${uid}`), {
  //       sys: {
  //         id: uid,
  //       },
  //       fields: {
  //         firstName,
  //         slug: uid.toString(),
  //         lastName,
  //         email,
  //         contactNumber,
  //         password,
          
         
  //             },
          
  //     }).then(() => {
  //       alert("Room Added!");
  //       setfirstName("");
  //       setlastName("");
  //       setemail(0);
  //       setcontactNumber("");
  //       setpassword("");
      
  //       navigate("/rooms");
  //     });
  //   } else {
  //     return alert("Please fill all required fields.");
  //   }
  // };

  