import { ref, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import { v4 } from "uuid";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const { slug } = useParams();
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    const uid = v4();

    const [name, setname] = useState("");
    const [location, setlocation] = useState("");
    const [description, setdescription] = useState("");
    const [city, setcity] = useState("");
    const [province, setprovince] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [email, setemail] = useState("");
    const [price1, setprice1] = useState("");
    const [price2, setprice2] = useState("");
    const [price3, setprice3] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");

    function getHotel(arg) {

        const idiHotels = state[0][0].addHotels.map((item) => item);
        const hotelDatas = idiHotels.filter((hotelItem) => hotelItem.slug === arg);
        return hotelDatas;
    }

    if (state.length > 0 && slug) {
        const hotelData = getHotel(slug);
        console.log(hotelData);
        if (hotelData.length > 0) {
            var id = hotelData[0].id;
            var newlocation = hotelData[0].type;
            var newname = hotelData[0].name;
            var newdescription = hotelData[0].description;
            var newcity = hotelData[0].city;
            var newprovince = hotelData[0].province;
            var newprice1 = hotelData[0].price1;
            var newprice2 = hotelData[0].price2;
            var newprice3 = hotelData[0].price3;

            var newcontactNumber = hotelData[0].contactNumber;
            var newemail = hotelData[0].email;

            const images = hotelData[0].images;
            var img1 = images[0];
            var img2 = images[1];
            var img3 = images[2];
            var img4 = images[3];
        }
    }

    useEffect(() => {
        setname(newname || "");
        setdescription(newdescription);
        setprice1(newprice1);
        setprice2(newprice2);
        setprice3(newprice3);
        //setextras(newextras && newextras.toString());
        setcity(newcity);
        setprovince(newprovince);
        setImage1(img1);
        setImage2(img2);
        setImage3(img3);
        //setImage4(img4);
        console.log(name);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function updateRoomFirebase() {
        if (
            name &&
            location &&
            description &&
            city &&
            description &&
            province &&
            contactNumber &&
            email &&
            price1 &&
            price2 &&
            price3 &&
            image1 &&
            image2 &&
            image3
        ) {
            await update(ref(db, `hotels/${id}`), {
                sys: {
                    id,
                },
                fields: {
                    name,
                    slug: uid.toString(),
                    price1,
                    price2,
                    price3,

                    city,
                    province,
                    location,
                    description: description,
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
                       
                    ],
                },
            }).then(() => {
                alert("Room updated.!");
                setname("");
                setcity(0);
                setdescription("");
                setprovince("");
                setprice1(0);
                setprice2(0);
                setprice3(0);


                setlocation("");
                setImage1("");
                setImage2("");
                setImage3("");
                // setImage4("");

                navigate(`/Edit`);
            });
        } else {
            return alert("Please fill all required fields.");
        }
    }

    return (
        <>
            {slug ? (
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                            <div>
                                <h1 className="display-4 text-center">Update Hotel</h1>
                            </div>

                            <div className="row my-4">
                                <div className="col-md-12 col-12 my-auto">
                                    <div className="col-md-12 col-12 float-right">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={name}
                                                    onChange={(e) => setname(e.target.value)}
                                                    id="name"
                                                    placeholder="Hotel name."
                                                    required
                                                />

                                                <label htmlFor="price">Stan Price</label>
                                                <input
                                                    type="number"
                                                    value={price1}
                                                    onChange={(e) => setprice1(e.target.value)}
                                                    className="form-control"
                                                    required
                                                    id="price"
                                                    placeholder="Room price"
                                                />

                                                <label htmlFor="price">Exec Price</label>
                                                <input
                                                    type="number"
                                                    value={price1}
                                                    onChange={(e) => setprice2(e.target.value)}
                                                    className="form-control"
                                                    required
                                                    id="price 2"
                                                    placeholder="Room price"
                                                />

                                                <label htmlFor="price">Jun Price</label>
                                                <input
                                                    type="number"
                                                    value={price3}
                                                    onChange={(e) => setprice3(e.target.value)}
                                                    className="form-control"
                                                    required
                                                    id="price 3"
                                                    placeholder="Room price"
                                                />

                                                <label htmlFor="size">Location</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={location}
                                                    onChange={(e) => setlocation(e.target.value)}
                                                    required
                                                    id="size"
                                                    placeholder="Location"
                                                />
                                                <label htmlFor="city">city</label>
                                                <input
                                                    type="text"
                                                    value={city}
                                                    onChange={(e) => setcity(e.target.value)}
                                                    className="form-control"
                                                    required
                                                    id="city"
                                                    placeholder="Capacitiy"
                                                />



                                                <label htmlFor="description">Description</label>
                                                <input
                                                    type="text"
                                                    value={description}
                                                    onChange={(e) => setdescription(e.target.value)}
                                                    className="form-control"
                                                    required
                                                    id="description"
                                                    placeholder="desc"
                                                />

                                                <label htmlFor="province">Province</label>
                                                <input
                                                    type="text"
                                                    value={province}
                                                    onChange={(e) => setprovince(e.target.value)}
                                                    className="form-control"
                                                    required
                                                    id="province"
                                                    placeholder="Province"
                                                />



                                                <label htmlFor="img1">Image 1</label>
                                                <input
                                                    type="text"
                                                    value={image1}
                                                    onChange={(e) => setImage1(e.target.value)}
                                                    className="form-control"
                                                    id="img1"
                                                    placeholder="Image 1 URL"
                                                    required
                                                />
                                                <label htmlFor="img2">Image 2</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={image2}
                                                    onChange={(e) => setImage2(e.target.value)}
                                                    id="img2"
                                                    placeholder="Image 2 URL"
                                                    required
                                                />

                                                <label htmlFor="img3">Image 3</label>
                                                <input
                                                    type="text"
                                                    value={image3}
                                                    onChange={(e) => setImage3(e.target.value)}
                                                    className="form-control"
                                                    id="img3"
                                                    placeholder="Image 3 URL"
                                                    required
                                                />

                                                {/* <label htmlFor="img4">Image 4</label>
                                                <input
                                                    type="text"
                                                    value={image4}
                                                    onChange={(e) => setImage4(e.target.value)}
                                                    className="form-control"
                                                    id="img4"
                                                    placeholder="Image 4 URL"
                                                    required
                                                /> */}
                                            </div>

                                            <div className="form-group form-check"></div>
                                        </form>
                                        <button
                                            className="btn btn-block btn-outline-primary"
                                            onClick={updateRoomFirebase}
                                        >
                                            UPDATE ROOM
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="container roomerror">
                        <div className="row my-5">
                            <div className="col-md-6 col-12 mx-auto">
                                <div className="card shadow-lg border-0 p-4 error">
                                    <h1 className="text-center display-4">Update</h1>
                                    <h3>Please select room from Room page..</h3>
                                    <Link to="/rooms" className="btn btn-warning mt-4 ">
                                        Back to Rooms
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Edit;
