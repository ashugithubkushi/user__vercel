// import React, { useEffect, useState } from "react";
// import "./vehicles.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
// import axios from "axios";

// const Vehicles = () => {
//   const [selectedVehicle, setSelectedVehicle] = useState("");
//   const [showSelectDate, setShowSelectDate] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [error, setError] = useState(false);
//   const [villaNumber, setVillaNumber] = useState("");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [bookedBy, setBookedBy] = useState("");
//   const [formError, setFormError] = useState(false);
//   const [modal, setModal] = useState(false);
//   const [data, setData] = useState([]);

//   const [bookedClicked, setBookedClicked] = useState(false);
//   const [bookedSlots, setBookedSlots] = useState([]);

//   const [vehicleNumbers, setVehicleNumbers] = useState([]);
//   const [bookedByOptions, setBookedByOptions] = useState([]);

//   const handleVehicleClick = (selectedVehicle) => {
//     setSelectedVehicle(selectedVehicle);
//     setShowSelectDate(true);
//   };

//   const toggleModal = () => setModal(!modal);

//   // const handleSelectSlot = (slot) => {
//   //   if (selectedDate) {
//   //     setSelectedSlot(slot);
//   //     toggleModal(); // Show modal
//   //     setError(false);
//   //   } else {
//   //     setError(true);
//   //     setTimeout(() => {
//   //       setError(false);
//   //     }, 2000);
//   //   }
//   // };

//   // const isSlotBooked = (slot, date) => {
//   //   return bookedSlots.some((item) => item.slot === slot && item.date === date);
//   // };
//   // const isSlotBooked = (slot, date) => {
//   //   return bookedSlots.some((item) => item.selectedSlot === slot && item.selectedDate === date);
//   // };
//   const isSlotBooked = (slot, date) => {
//     return data.some((item) => {
//       // Ensure item.selectedDate is a Date object before calling getTime()
//       const itemDate = new Date(item.selectedDate);
//       return (
//         item.selectedVehicle === selectedVehicle && // Check for selected vehicle
//         item.selectedSlot === slot &&
//         itemDate.getTime() === date.getTime()
//       );
//     });
//   };

//   // imp
//   // const handleSelectSlot = (slot) => {
//   //   if (selectedDate) {
//   //     // Check if the slot is already booked for the selected date
//   //     const slotAlreadyBooked = data.some(
//   //       (item) => {
//   //         // Ensure item.selectedDate is a Date object before calling getTime()
//   //         const itemDate = new Date(item.selectedDate);
//   //         return item.selectedSlot === slot && itemDate.getTime() === selectedDate.getTime();
//   //       }
//   //     );

//   //     if (slotAlreadyBooked) {
//   //       // If the slot is already booked for the selected date
//   //       setBookedClicked(true);
//   //       setTimeout(() => {
//   //         setBookedClicked(false);
//   //       }, 2000);
//   //     } else {
//   //       setSelectedSlot(slot);
//   //       toggleModal(); // Show modal
//   //       setError(false);
//   //     }
//   //   } else {
//   //     setError(true);
//   //     setTimeout(() => {
//   //       setError(false);
//   //     }, 2000);
//   //   }
//   // };

//   const handleSelectSlot = (slot) => {
//     if (selectedDate) {
//       // Check if the slot is already booked for the selected date
//       const slotAlreadyBooked = data.some((item) => {
//         // Ensure item.selectedDate is a Date object before calling getTime()
//         const itemDate = new Date(item.selectedDate);
//         return (
//           item.selectedSlot === slot &&
//           itemDate.getTime() === selectedDate.getTime()
//         );
//       });

//       if (slotAlreadyBooked) {
//         // If the slot is already booked for the selected date
//         setBookedClicked(true);
//         setTimeout(() => {
//           setBookedClicked(false);
//         }, 2000);
//       } else {
//         setSelectedSlot(slot);
//         toggleModal(); // Show modal
//         setError(false);
//       }
//     } else {
//       setError(true);
//       setTimeout(() => {
//         setError(false);
//       }, 2000);
//     }
//   };

//   // const handleDateChange = (date) => {
//   //   // Convert selected date to IST
//   //   const selectedISTDate = new Date(date.getTime() + 5.5 * 60 * 60 * 1000);
//   //   setSelectedDate(selectedISTDate);
//   // };
//   // const handleDateChange = (date) => {
//   //   setSelectedDate(date);
//   //   setSelectedSlot(null);
//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setSelectedSlot(null);
//     // Convert selected date to IST
//     const selectedISTDate = new Date(date.getTime() + 5.5 * 60 * 60 * 1000);
//     setSelectedDate(selectedISTDate);
//   };

//   const handleCancel = () => {
//     toggleModal();
//   };

//   const handlereset = () => {
//     setVillaNumber("");
//     setVehicleNumber("");
//     setBookedBy("");
//     setFormError("");
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   if (!villaNumber.trim() || !vehicleNumber.trim() || !bookedBy.trim()) {
//   //     setFormError(true);
//   //     return;
//   //   }
//   //   const data = {
//   //     selectedVehicle: selectedVehicle,
//   //     selectedDate: selectedDate,
//   //     selectedSlot: selectedSlot,
//   //     vehicleNumber: vehicleNumber,
//   //     villaNumber: villaNumber,
//   //     bookedBy: bookedBy,
//   //   };

//   //   axios
//   //     .post("http://localhost:3000/createSlots", data)
//   //     .then((response) => {
//   //       console.log(response.status);
//   //       console.log("Form data submitted successfully:", response.data);
//   //       alert("form submitted successfully");
//   //       setShowSelectDate(false);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error submitting form data:", error);
//   //     });

//   //   toggleModal();

//   //   setSelectedDate(null);
//   //   setSelectedSlot(null);
//   //   setSelectedVehicle("");
//   //   setVehicleNumber("");
//   //   setVillaNumber("");
//   //   setBookedBy("");
//   // };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const currentTime = new Date(); // Capture the current time
//   //   const formattedCurrentTime = currentTime.toLocaleTimeString("en-IN"); // Format the current time as per IST
//   //   if (!villaNumber.trim() || !vehicleNumber.trim() || !bookedBy.trim()) {
//   //     setFormError(true);
//   //     return;
//   //   }
//   //   const data = {
//   //     selectedVehicle: selectedVehicle,
//   //     selectedDate: selectedDate,
//   //     selectedSlot: selectedSlot,
//   //     vehicleNumber: vehicleNumber,
//   //     villaNumber: villaNumber,
//   //     bookedBy: bookedBy,
//   //     submittedAt: formattedCurrentTime, // Add the current time to the data object
//   //   };

//   //   axios
//   //     .post("http://localhost:3000/createSlots", data)
//   //     .then((response) => {
//   //       console.log(response.status);
//   //       console.log("Form data submitted successfully:", response.data);
//   //       alert("form submitted successfully");
//   //       setShowSelectDate(false);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error submitting form data:", error);
//   //     });

//   //   toggleModal();

//   //   setSelectedDate(null);
//   //   setSelectedSlot(null);
//   //   setSelectedVehicle("");
//   //   setVehicleNumber("");
//   //   setVillaNumber("");
//   //   setBookedBy("");
//   // };

//   // vvimp
//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const currentTime = new Date();
//   //   const formattedCurrentTime = currentTime.toLocaleTimeString("en-IN");
//   //   if (!villaNumber.trim() || !vehicleNumber.trim() || !bookedBy.trim() || !selectedVehicle) {
//   //     setFormError(true);
//   //     return;
//   //   }
//   //   const data = {
//   //     selectedVehicle: selectedVehicle,
//   //     selectedDate: selectedDate,
//   //     selectedSlot: selectedSlot,
//   //     vehicleNumber: vehicleNumber,
//   //     villaNumber: villaNumber,
//   //     bookedBy: bookedBy,
//   //     submittedAt: formattedCurrentTime,
//   //   };

//   //   axios
//   //     .post("http://localhost:3000/createSlots", data)
//   //     .then((response) => {
//   //       console.log(response.status);
//   //       console.log("Form data submitted successfully:", response.data);
//   //       alert("form submitted successfully");
//   //       setShowSelectDate(false);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error submitting form data:", error);
//   //     });

//   //   toggleModal();

//   //   setSelectedDate(null);
//   //   setSelectedSlot(null);
//   //   setSelectedVehicle(""); // Make sure to reset selectedVehicle here
//   //   setVehicleNumber("");
//   //   setVillaNumber("");
//   //   setBookedBy("");
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const currentTime = new Date();
//     const formattedCurrentTime = currentTime.toLocaleTimeString("en-IN");

//     // Check if any required field is empty
//     // if (!villaNumber.trim() || !vehicleNumber.trim() || !bookedBy.trim() || !selectedVehicle || !selectedDate || !selectedSlot) {
//     //   setFormError(true); // Set formError state to true if any required field is empty
//     //   return;
//     // }
//     if (!villaNumber.trim() || !vehicleNumber.trim() || !bookedBy.trim()) {
//       setFormError(true);
//       return;
//     }
//     const data = {
//       selectedVehicle: selectedVehicle,
//       selectedDate: selectedDate,
//       selectedSlot: selectedSlot,
//       vehicleNumber: vehicleNumber,
//       villaNumber: villaNumber,
//       bookedBy: bookedBy,
//       submittedAt: formattedCurrentTime,
//     };

//     axios
//       .post("http://localhost:3000/createSlots", data)
//       .then((response) => {
//         console.log(response.status);
//         console.log("Form data submitted successfully:", response.data);
//         alert("Form submitted successfully");
//         // setShowSelectDate(false);
//         console.log(data);
//         toggleModal();
//         setSelectedDate(null);
//         setSelectedSlot(null);
//         setSelectedVehicle("");
//         setVehicleNumber("");
//         setVillaNumber("");
//         setBookedBy("");
//       })
//       .catch((error) => {
//         console.error("Error submitting form data:", error);
//       });
//   };

//   useEffect(() => {
//     fetch("http://localhost:3000/getslots", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data, "userData");
//         setData(data.data);
//       });
//   }, []);

//   //vehiclenum
//   // useEffect(() => {
//   //   axios.get("http://localhost:3000/getVehicle").then((response) => {
//   //     const vehicleNumbers = response.data.map((vehicle) => vehicle.vehicleNum);
//   //     setVehicleNumbers(vehicleNumbers);
//   //   }).catch((error) => {
//   //     console.error("Error fetching vehicle numbers:", error);
//   //   });
//   // }, []);
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/vehicles") // Correct endpoint to fetch all vehicle numbers
//       .then((response) => {
//         const vehicleNumbers = response.data.map(
//           (vehicle) => vehicle.vehicleNum
//         );
//         setVehicleNumbers(vehicleNumbers);
//       })
//       .catch((error) => {
//         console.error("Error fetching vehicle numbers:", error);
//       });
//   }, []);

//   const handleVehicleNumberChange = (event) => {
//     setVehicleNumber(event.target.value);
//   };


//   //bookedby
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/createusers") // Endpoint to fetch all usernames
//       .then((response) => {
//         const usernames = response.data.map(
//           (user) => user.username
//         );
//         setBookedByOptions(usernames);
//       })
//       .catch((error) => {
//         console.error("Error fetching usernames:", error);
//       });
//   }, []);


//   const handleBookedByChange = (event) => {
//     setBookedBy(event.target.value);
//   };






//   return (
//     <div>
//       {!showSelectDate ? (
//         <div className="grid-container">
//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("Tractor")}
//             className="grid-item"
//           >
//             Tractor
//           </div>
//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("JCB")}
//             className="grid-item"
//           >
//             JCB
//           </div>
//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("Concrete Mixer")}
//             className="grid-item"
//           >
//             Concrete Mixer
//           </div>
//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("Bulldozers")}
//             className="grid-item"
//           >
//             Bulldozers
//           </div>
//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("Cranes")}
//             className="grid-item"
//           >
//             Cranes
//           </div>
//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("Rollers")}
//             className="grid-item"
//           >
//             Rollers
//           </div>
//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("Trucks")}
//             className="grid-item"
//           >
//             Trucks
//           </div>
//         </div>
//       ) : (
//         <div>
//           <div className="date-picker-wrapper d-flex">
//             <DatePicker
//               selected={selectedDate}
//               onChange={handleDateChange}
//               dateFormat="dd/MM/yyyy"
//               placeholderText="Select a date"
//               className="date-picker"
//               popperPlacement="top-end"
//               minDate={new Date()}
//               utcOffset={330}
//             />
//             {error && (
//               <div className="error-popup">
//                 <p>Please select a date</p>
//               </div>
//             )}
//           </div>

//           <div className="select-container">
//             {[
//               "6AM-7AM",
//               "7AM-8AM",
//               "8AM-9AM",
//               "9AM-10AM",
//               "10AM-11AM",
//               "11AM-12PM",
//               "12PM-1PM",
//               "1PM-2PM",
//               "2PM-3PM",
//               "3PM-4PM",
//               "4PM-5PM",
//               "5PM-6PM",
//               "6PM-7PM",
//               "7PM-8PM",
//               "8PM-9PM",
//               "9PM-10PM",
//               "10PM-11PM",
//               "11PM-12AM",
//             ].map((timeRange, index) => (
//               <div
//                 className="select-item"
//                 key={index}
//                 onClick={() => handleSelectSlot(timeRange)}
//               >
//                 {timeRange}
//               </div>
//             ))}
//             <div
//               type="button"
//               className="select-item1"
//               // onClick={() => handleSelectSlot("Available")}
//             >
//               Available
//             </div>
//             <div
//               type="button"
//               className={
//                 bookedClicked ? "select-item1 booked-clicked" : "select-item1"
//               }
//               onClick={() => handleSelectSlot("Booked")}
//             >
//               Booked
//             </div>
//           </div>

//           <Modal isOpen={modal} toggle={toggleModal} centered={true}>
//             <ModalHeader toggle={toggleModal}>Slot Details:</ModalHeader>
//             <ModalBody>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="input2">Vehicle Name:</label>
//                   <input
//                     type="text"
//                     id="input6"
//                     value={selectedVehicle}
//                     readOnly
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="input1">Slot date (IST):</label>
//                   {/* <input
//                     type="text"
//                     id="input1"
//                     value={
//                       selectedDate
//                         ? new Date(
//                             selectedDate.getTime() + 5.5 * 60 * 60 * 1000
//                           ).toLocaleDateString("en-IN")
//                         : ""
//                     }
//                     readOnly
//                   /> */}
//                   <input
//                     type="text"
//                     id="input1"
//                     value={
//                       selectedDate ? selectedDate.toLocaleString("en-IN") : ""
//                     }
//                     readOnly
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="input2">Slot time:</label>
//                   <input
//                     type="text"
//                     id="input2"
//                     value={selectedSlot}
//                     readOnly
//                   />
//                 </div>
//                 {/* <div className="form-group">
//                   <label htmlFor="input4">Vehicle Number:</label>
//                   <input
//                     type="text"
//                     id="input4"
//                     value={vehicleNumber}
//                     onChange={(e) => setVehicleNumber(e.target.value)}
//                   />
//                 </div> */}
//                  <div>Vehicle Number
//                 <select
//                 className="form-group-input"
//                   id="input4"
//                   value={vehicleNumber}
//                   onChange={handleVehicleNumberChange}
//                 >
//                   <option 
//                   value="">Select Vehicle Number</option>
//                   {vehicleNumbers.map((number) => (
//                     <option key={number} value={number}>
//                       {number}
//                     </option>
//                   ))}
//                 </select>
//                 </div>
                


//                 <div className="form-group">
//                   <label htmlFor="input3">Villa Number:</label>
//                   <input
//                     type="text"
//                     id="input3"
//                     value={villaNumber}
//                     onChange={(e) => setVillaNumber(e.target.value)}
//                   />
//                 </div>

//                 {/* <div className="form-group">
//                   <label htmlFor="input5">Booked By:</label>
//                   <input
//                     type="text"
//                     id="input5"
//                     value={bookedBy}
//                     onChange={(e) => setBookedBy(e.target.value)}
//                   />
//                 </div> */}
// <div> Booked By
// <select
//               className="form-group-input"
//               id="input7"
//               value={bookedBy}
//               onChange={handleBookedByChange}
//             >
//               <option value="">Select Booked By</option>
//               {bookedByOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//             </div>
//                 {formError && (
//                   <p className="error">Please fill out all fields.</p>
//                 )}
//                 <div className="float-end m-2">
//                   <Button
//                     color="secondary"
//                     className="m-2"
//                     onClick={handlereset}
//                   >
//                     Reset
//                   </Button>
//                   <Button color="primary" onClick={handleSubmit}>
//                     Submit
//                   </Button>
//                 </div>
//               </form>
//             </ModalBody>
//           </Modal>
//         </div>
//       )}

//       <div className="auth-inner" style={{ width: "auto" }}>
//         <table>
//           <tr>
//             <th>Vehicle Name</th>
//             <th>Date</th>
//             <th>slot time</th>
//             <th>vehicle num</th>
//             <th>villa num</th>
//             <th>Booked by</th>
//           </tr>
//           {data.map((i, index) => {
//             return (
//               <tr key={index}>
//                 <td>{i.selectedVehicle}</td>
//                 <td>{`${i.selectedDate} (${i.submittedAt})`}</td>
//                 <td>{i.selectedSlot}</td>
//                 <td>{i.vehicleNumber}</td>
//                 <td>{i.villaNumber}</td>
//                 <td>{i.bookedBy}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Vehicles;










import React, { useEffect, useState } from "react";
import "./vehicles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import axios from "axios";
import SimpleImageSlider from "react-simple-image-slider";
import AgricultureIcon from "@mui/icons-material/Agriculture";

const Vehicles = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [showSelectDate, setShowSelectDate] = useState(false);
  // const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [error, setError] = useState(false);
  const [villaNumber, setVillaNumber] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [bookedBy, setBookedBy] = useState("");
  const [formError, setFormError] = useState(false);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);


  const [bookedByOptions, setBookedByOptions] = useState([]);
  const [successModal, setSuccessModal] = useState(false); // New state for success modal
  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/vehicles")
      .then((response) => {
        setVehiclesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vehicles data:", error);
      });
  }, []);

  useEffect(() => {
    // Filter vehicle numbers based on the selected vehicle
    const filteredVehicleNumbers = vehiclesData
      .filter((vehicle) => vehicle.vehicleName === selectedVehicle)
      .map((vehicle) => vehicle.vehicleNum);
    setVehicleNumbers(filteredVehicleNumbers);
  }, [selectedVehicle, vehiclesData]);

  const handleVehicleChange = (event) => {
    setSelectedVehicle(event.target.value);
    // Reset selected vehicle number when a different vehicle is selected
    setVehicleNumber("");
  };

  // const [vehicleNumber, setVehicleNumber] = useState("");

  // const handleVehicleNumberChange = (event) => {
  //   setVehicleNumber(event.target.value);
  // };

  // const handleVehicleChange = (event) => {
  //   setSelectedVehicle(event.target.value);
  // };




  const images = [
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
  ];


  const [vehicleCounts, setVehicleCounts] = useState({
    Tractor: 0, 
    JCB:0,

  });


  const fetchSlotData = () => {
    axios
      .get("http://localhost:3000/getslots")
      .then((response) => {
        // Process the fetched data to get the count of available slots for each vehicle type
        const slotsData = response.data.data;
        const counts = {
          Tractor: 0, // Initialize Tractor count to 0
          // Initialize other vehicle counts similarly
        };
        slotsData.forEach((slot) => {
          // Increment the count of available slots for the corresponding vehicle type
          counts[slot.selectedVehicle]++;
        });
        setVehicleCounts(counts); // Update the state variable with the counts
      })
      .catch((error) => {
        console.error("Error fetching slot data:", error);
      });
  };

  //useeffect
  useEffect(() => {
    const fetchSlotData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getslots");
        const slotsData = response.data.data;
        const counts = {
          Tractor: 0, // Initialize Tractor count to 0
          // Initialize other vehicle counts similarly
        };
        slotsData.forEach((slot) => {
          counts[slot.selectedVehicle]++;
        });
        setVehicleCounts(counts);
      } catch (error) {
        console.error("Error fetching slot data:", error);
      }
    };
  
    fetchSlotData();
  }, []);

  const [bookedSlots, setBookedSlots] = useState([]);

  const [vehicleNumbers, setVehicleNumbers] = useState([]);

  // 
  const [vehicles, setVehicles] = useState(new Set());

  const handleVehicleClick = (selectedVehicle) => {
    setSelectedVehicle(selectedVehicle);
    toggleModal();
  };

  const toggleModal = () => setModal(!modal);


  const handleSelectSlot = (slot) => {
    if (selectedDate) {
      setSelectedSlot(slot);
      toggleModal(); // Show modal
      setError(false);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };


  const handleCancel = () => {
    toggleModal();
  };

  const handlereset = () => {
    setVillaNumber("");
    setVehicleNumber("");
    setBookedBy("");
    setFormError("");
  };

  

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const currentTime = new Date();
  //   const formattedCurrentTime = currentTime.toLocaleTimeString("en-IN");
  //   if (!villaNumber.trim() || !vehicleNumber.trim() || !bookedBy.trim()) {
  //     setFormError(true);      return;
  //   }
  //   const data = {
  //     selectedVehicle: selectedVehicle,
  //     selectedDate: selectedDate,
  //     fromTime: fromTime,
  //     toTime: toTime,
  //     vehicleNumber: vehicleNumber,
  //     villaNumber: villaNumber,
  //     bookedBy: bookedBy,
  //     // submittedAt: formattedCurrentTime,
  //   };
  
  //  axios
  //     .post("http://localhost:3000/createSlots", data)
  //     .then((response) => {
  //       console.log(response.status);
  //       console.log("Form data submitted successfully:", response.data);
  //       alert("form submitted successfully");
  //       setSuccessModal(true);
  //       fetchSlotData(); // Refresh slot data
  //       setShowSelectDate(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error submitting form data:", error);
  //     });
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    const currentTime = new Date();
    const formattedCurrentTime = currentTime.toLocaleTimeString("en-IN");
    
    // Set the default value for villaNumber if it's empty
    const villaNum = villaNumber.trim() ? villaNumber : "-";
  
    if (!vehicleNumber.trim() || !bookedBy.trim()) {
      setFormError(true);
      return;
    }
  
    const data = {
      selectedVehicle: selectedVehicle,
      selectedDate: selectedDate,
      fromTime: fromTime,
      toTime: toTime,
      vehicleNumber: vehicleNumber,
      villaNumber: villaNum, // Use the default value here
      bookedBy: bookedBy,
    };
  
    axios
      .post("http://localhost:3000/createSlots", data)
      .then((response) => {
        console.log(response.status);
        console.log("Form data submitted successfully:", response.data);
        alert("form submitted successfully");
        setSuccessModal(true);
        fetchSlotData(); // Refresh slot data
        setShowSelectDate(false);
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
      });
  };
  


  const closeSuccessModal = () => {
    setSuccessModal(false);
  };
  

  useEffect(() => {
    fetch("http://localhost:3000/getslots", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "userData");
        setData(data.data);
      });
  }, []);

  //vehiclenum
  // useEffect(() => {
  //   axios.get("http://localhost:3000/getVehicle").then((response) => {
  //     const vehicleNumbers = response.data.map((vehicle) => vehicle.vehicleNum);
  //     setVehicleNumbers(vehicleNumbers);
  //   }).catch((error) => {
  //     console.error("Error fetching vehicle numbers:", error);
  //   });
  // }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/vehicles") // Correct endpoint to fetch all vehicle numbers
      .then((response) => {
        const vehicleNumbers = response.data.map(
          (vehicle) => vehicle.vehicleNum
        );
        setVehicleNumbers(vehicleNumbers);
      })
      .catch((error) => {
        console.error("Error fetching vehicle numbers:", error);
      });
  }, []);

  const handleVehicleNumberChange = (event) => {
    setVehicleNumber(event.target.value);
  };

  //time
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('00:00');

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(date);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
  
    // Add leading zero to month and day if needed
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
  
    return `${year}-${month}-${day}`;
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };


  //from - to
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const handleFromTimeChange = (event) => {
      setFromTime(event.target.value);
  };

  const handleToTimeChange = (event) => {
      setToTime(event.target.value);
  };

  //bookedby
useEffect(() => {
  axios
    .get("http://localhost:3000/createusers") // Endpoint to fetch all usernames
    .then((response) => {
      const usernames = response.data.map(
        (user) => user.username
      );
      setBookedByOptions(usernames);
    })
    .catch((error) => {
      console.error("Error fetching usernames:", error);
    });
}, []);


const handleBookedByChange = (event) => {
  setBookedBy(event.target.value);





};

  return (
    <div>

<div className="slider-container">
      {/* <SimpleImageSlider
        width={'100%'}
        height={'70vh'}
        images={images}
        showBullets={true}
        showNavs={true}
      /> */}
      <br />

      <div className="text1">
           <h5 className="txt-color">Choose a vehicle below to book your slot</h5>
           </div>

      {/* <div class="boxes2">
  
  <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("Tractor")}
              className="box2"
            >
              Tractor
            </div>
  
            <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("JCB")}
              className="box2"
            >
              JCB
            </div>
            <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("Concrete Mixer")}
              className="box2"
            >
              Concrete Mixer
            </div>
            <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("Bulldozers")}
              className="box2"
            >
              Bulldozer
            </div>
            <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("Cranes")}
              className="box2"
            >
              Crane
            </div>
            <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("Rollers")}
              className="box2"
            >
              Roller
            </div>
            <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("Trucks")}
              className="box2"
            >
              Truck
            </div>
          </div> */}

          <div className="container-fluid mt-4">
            <div className="row">
            <div className="col-lg-8">
            <div className="row">
              {/* Box 1 */}
              <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor.jpg"
                        alt="Tractor"
                        className="vehicle-icon"
                      />
                      <h5 className="card-title ms-2">
                        <b>Tractor</b>
                      </h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("Tractor")}
                      className="vehicle-details"
                    >
                      <div className="d-grid">
                       <span>Total </span>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                     <img
                        src="https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor.jpg"
                        alt="Tractor"
                        className="vehicle-icon"
                      />
                      <h5 className="card-title ms-2">
                        <b>JCB</b>
                      </h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("JCB")}
                    >
                      <div className="d-grid">
                        <span>Total </span>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                     <img
                        src="https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor.jpg"
                        alt="Tractor"
                        className="vehicle-icon"
                      />
                      <h5 className="card-title ms-2">
                        <b>Concrete Mixer</b>
                      </h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("Concrete Mixer")}
                    >
                      <div className="d-grid">
                        <span>Total </span>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 4 */}
              <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                     <img
                        src="https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor.jpg"
                        alt="Tractor"
                        className="vehicle-icon"
                      />
                      <h5 className="card-title ms-2"><b>Bulldozer</b></h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("Bulldozers")}
                    >
                      <div className="d-grid">
                        <span>Total </span>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 5 */}
              <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                     <img
                        src="https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor.jpg"
                        alt="Tractor"
                        className="vehicle-icon"
                      />
                      <h5 className="card-title ms-2">
                        <b>Crane</b>
                      </h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("Cranes")}
                    >
                      <div className="d-grid">
                        <span>Total </span>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 6 */}
              <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                     <img
                        src="https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor.jpg"
                        alt="Tractor"
                        className="vehicle-icon"
                      />
                      <h5 className="card-title ms-2">
                        <b>Roller</b>
                      </h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("Rollers")}
                    >
                      <div className="d-grid">
                        <span>Total </span>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 7 */}
              <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                     <img
                        src="https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor.jpg"
                        alt="Tractor"
                        className="vehicle-icon"
                      />
                      <h5 className="card-title ms-2">
                        <b>Truck</b>
                      </h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("Trucks")}
                    >
                      <div className="d-grid">
                        <span>Total </span>
                       
                      </div>
                    </div>
                  </div>

                </div>
              </div>


             {/* mapping vehicles data */}
             <div className="row">
      {[...vehicles].map((vehicleName, index) => (
        <div key={index} className="col-xl-4 col-lg-6 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                {/* <DirectionsCarOutlined sx={{ fontSize: 40 }} /> */}
                <img
                        src="https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor.jpg"
                        alt="Tractor"
                        className="vehicle-icon"
                      />
                <h5 className="card-title ms-2">
                  <b>{vehicleName}</b>
                </h5>
              </div>
              <div onClick={() => handleVehicleClick(vehicleName)} className="d-grid">
                <span>Total { } </span>
                {/* */}
              </div>
            </div>
          </div>
        </div>
      ))}
      
    </div>
     {/* vv imp  */}
     {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          // mt: 3,
          mt: 1,
        }}
      >
        {Object.keys(vehicleCounts).map((vehicleName, index) => (
          <Box
            key={index}
            sx={{
              // width: "30%",
              // width: "5%",
              // p: 1,
              // mt: 1,
              // borderRadius: 5,
              // border: "1px solid #ccc",
              // textAlign: "center",
              
            }}
          >
            <h5>
              <b>{vehicleName}</b>
            </h5>
            <p>Total {vehicleCounts[vehicleName]}</p>
          </Box>
        ))}
      </Box> */}


{/* booked slots count */}
 {/* <div>
            <h2>Slots Data</h2>
            <div>
                {Object.entries(countSelectedVehicles()).map(([vehicle, count]) => (
                    <div key={vehicle}>
                        <p>{`${vehicle}: ${count}`}</p>
                    </div>
                ))} 
            </div>
        </div> */}
      




               {/*  */}
            </div>
          </div>
            </div>
          </div>


    </div>


    {/* // */}
  


{/* test */}
{/* <div className="body"> 
    <div classname="center"> 
  
    <div class="slider"> 
            <div class="imgs_slides"> 
  
                <input type="radio" name="radio-btn" id="radio1" />
  
                <input type="radio" name="radio-btn" id="radio2" /> 
  
                <input type="radio" name="radio-btn" id="radio3" /> 
  
                <input type="radio" name="radio-btn" id="radio4" /> 
  
                <input type="radio" name="radio-btn" id="radio5" /> 
  
                <input type="radio" name="radio-btn" id="radio6" /> 
  
           
                <div class="first slide">
                    <img src= 
"https://assets.tractorjunction.com/truck-junction/assets/images/truck/blazo-x-28-transit-mixer-1614682581.webp?format=webp" /> 
                </div> 
                <div class="slide"> 
                    <img src= 
"https://images.creativefabrica.com/products/previews/2023/10/28/OG8vumD3r/2XNREEHXqeTraAgNdfIbYO45xGP-mobile.jpg" /> 
                </div> 
                <div class="slide"> 
                    <img src= 
"https://images.creativefabrica.com/products/previews/2023/10/28/OG8vumD3r/2XNREEHXqeTraAgNdfIbYO45xGP-mobile.jpg" /> 
                </div> 
                <div class="slide"> 
                    <img src= 
"https://images.creativefabrica.com/products/previews/2023/10/28/OG8vumD3r/2XNREEHXqeTraAgNdfIbYO45xGP-mobile.jpg" /> 
                </div> 
                <div class="slide"> 
                    <img src= 
"https://images.creativefabrica.com/products/previews/2023/10/28/OG8vumD3r/2XNREEHXqeTraAgNdfIbYO45xGP-mobile.jpg" /> 
                </div> 
            </div> 
  
           
        </div> 
        <br />  
         <br />
      
       
         <div class="navigation"> 
                 <label for="radio1" class="navigation-btn">concrete-mixer
                </label> 
                <label for="radio2" class="navigation-btn">Bulldozer
                </label> 
                <label for="radio3" class="navigation-btn">Crane
                </label> 
                <label for="radio4" class="navigation-btn">Roller
                </label> 
                <label for="radio5" class="navigation-btn">Truck
                </label> 
            </div> 
            <hr />

            <div className="text1">
           <h5 className="txt-color">Choose a vehicle below to book your slot</h5>
           </div>
        <div className="grid-container">
        
      







        </div>
    </div> 
</div>  */}





      {/* {!showSelectDate ? ( */}
       
         
    
      {/* ) : ( */}
        <div>
        
        {/* <Modal isOpen={modal} toggle={toggleModal} centered={true}>
  <ModalHeader toggle={closeSuccessModal}>Success</ModalHeader>
  <ModalBody>
    Slot created successfully.
  </ModalBody>
  <ModalFooter>
    <Button color="primary" onClick={closeSuccessModal}>OK</Button>
  </ModalFooter>
</Modal> */}






<div className="date-time"></div>
<div class="datetime-picker">

          </div>

          <Modal isOpen={modal} toggle={toggleModal} centered={true}>
            <ModalHeader toggle={toggleModal}>Slot Details:</ModalHeader>
            <ModalBody>
            <form className="form1" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="input2">Vehicle Name:</label>
                  <input
                    type="text"
                    id="input6"
                    value={selectedVehicle}
                    readOnly
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="input1">Slot date (IST):</label>
                  
                   {/* <input type="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange} /> */}
                   <input type="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange} min={getCurrentDate()} />

                </div>

                <div className="form-group">
                 
                  <label>From Time:</label> 
                   <input type="time" value={fromTime} onChange={handleFromTimeChange} />
  
            <label>To Time:</label> 
            <input type="time" value={toTime} onChange={handleToTimeChange} />
        
                </div>
                
                 {/* <div>Vehicle Number
                <select
                className="form-group-input"
                  id="input4"
                  value={vehicleNumber}
                  onChange={handleVehicleNumberChange}
                >
                  <option 
                  value="">Select Vehicle Number</option>
                  {vehicleNumbers.map((number) => (
                    <option key={number} value={number}>
                      {number}
                    </option>
                  ))}
                </select>
                </div> */}
                 <label htmlFor="vehicleNumber">Select Vehicle Number:</label>
      <select id="vehicleNumber" value={vehicleNumber} onChange={handleVehicleNumberChange}>
        <option value="">Select Vehicle Number</option>
        {vehicleNumbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>

                

                <div className="form-group">
                  <label htmlFor="input3">Villa Number:</label>
                  <input
                    type="text"
                    id="input3"
                    value={villaNumber}
                    onChange={(e) => setVillaNumber(e.target.value)}
                  />
                </div>
                
                <label>Booked By</label> 
                 <select
              className="form-group-input"
              id="input7"
              value={bookedBy}
              onChange={handleBookedByChange}
            >
              <option value="">Select Booked By</option>
              {bookedByOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

                {formError && (
                  <p className="error">Please fill out all fields.</p>
                )}
                <div className="flex-end">
                  <Button
                    color="secondary"
                    className="m-2"
                    onClick={handlereset}
                  >
                    Reset
                  </Button>
                  <Button color="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              </form>
            </ModalBody>
          </Modal>
        </div>
      {/* )} */}

      {/* <div className="auth-inner" style={{ width: "auto" }}>
        <table>
          <tr>
            <th>Vehicle Name</th>
            <th>Date</th>
            <th>slot time</th>
            <th>vehicle num</th>
            <th>villa num</th>
            <th>Booked by</th>
          </tr>
          {data.map((i, index) => {
            return (
              <tr key={index}>
                <td>{i.selectedVehicle}</td>
                <td>{i.selectedDate}</td>
                <td>{`${i.fromTime}  -  ${i.toTime}`}</td>
                <td>{i.vehicleNumber}</td>
                <td>{i.villaNumber}</td>
                <td>{i.bookedBy}</td>
              </tr>
            );
          })}
        </table>
      </div> */}
    </div>
  );
};

export default Vehicles;
