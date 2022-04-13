// import React from 'react'
// import Heading from './Heading'
// import Para from './Para'
// import List from './List'

// importfrom "react";

// import  from "react";

// function App() {
//     return (
//         <>
//             <Heading />
//             <Para/>
//             <List/>
//         </>
//         )
// }

// export default App;

// -----
//CHALLENGE 4 

// import React from 'react'

// function App() {

//     let curDate = new Date(2020, 3, 26, 12);
//     curDate = curDate.getHours();
//     let greeting = ' ';
//     const cssStyle = {

//     };

//     if (curDate >= 1 && curDate < 12) {
//         greeting = "Good Morning";
//         cssStyle.color = 'green';
//     }
//     else if (curDate >= 12 && curDate < 19) {
//         greeting = "Good Afternoon";
//         cssStyle.color = 'orange';
//     }
//     else {
//         greeting = "Good Night";
//         cssStyle.color = 'black';
//     }

//     return (
//         <>
//             <div>
//                 <h1>
//                     Hello Sir, <span style={cssStyle}> {greeting} </span>
//                 </h1>
//             
//         </>
//     );
// }

// export default App;


// --------

// IMPORT EXPORT PART

// const youtuber = "thapa technical";
// const favprog = "React js";

// function myName() {
//     let name = "shristi"
//     return name;
// };

// function myNamess() {
//     let myNamess = "shristisss"
//     return myNamess;
// };

// // default can be used for only for single 
// export default youtuber;

// // for others use this 
// export { favprog, myName, myNamess };

// ----

// CHALLENGE 5
// import React from 'react'
// import {add , sub , div , mult} from './Calc'

// function App(){
//     return (
//         <ul>
//             <li>Sum of two no is {add(20, 5)}</li>

//             <li>Sub of two no is {sub(20, 5)}</li>

//             <li>Div of two no is {div(20, 5)}</li>

//             <li>Multi of two no is {mult(20, 5)}</li>

//         </ul>
//     )
// }

// export default App;

// -----
// 

// import React from "react";
// import Cards from "./Cards";
// import Netflix from "./Netflix";
// import Sdata from './Sdata';
// import Amazon from './Amazon';

// const favSeries = "netflix";

// const FavS = () => {

//     //  {
//     //     return <Netflix />;
//     // }
//     // else {
//     //     return (
//     //         <Amazon/>
//     //     );
//     // }


// };


// const App = () => (
//     <>
//         <h1 className="heading_style">List of top 5 Netflix Series in 2022</h1>
//         {/* <FavS /> */}

//         {(favSeries === "amazon") ? <Netflix /> : <Amazon />}
//     </>
// );
// export default App;

// -----

// SLOT MACHINE GAME

// import SlotM from './Slot';
// const App = () => {
//     return (
//         <>
//             <h1 className="heading_style"></h1>
//             <h1>🎰 Welcome to <span style={{ fontWeight: "bold" }}> Slot Machine Game</span> 🎰</h1>
//             <div>
//                 <SlotM x='🎅' y='😄' z='😄' />
//                 <SlotM x='😄' y='😄' z='😄' />
//                 <SlotM x='🎅' y='🎅' z='🎅' />
//                 <SlotM x=" 🍎 " y=' 🍌 ' z=' 🍇 ' />
//                 <SlotM x=' 🦁 ' y=' 🦁 ' z=' 🦁 ' />
//                 <SlotM x=' 🍨 ' y=' 🍫 ' z=' 🍨 ' />
//             </div>
//         </>
//     )
// };
// export default App;

// -------

// REACT HOOKS

// import React, { useState } from "react";


// const App = () => {
//     const state = useState();
//     // console.log(state);

//     const [count,setCount] = useState(0);

//     const IncNum = () => {
//         setCount(count+1);
//         // console.log('clicked' + " " + count++);
//     };

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={IncNum}>Click Me</button>
//         </>
//     )
// }

// export default App;

// ------

// CHALLENGE 6 

// import React, { useState } from "react";

// const App = () => {
//     let curTime = new Date().toLocaleTimeString();

//     const [ctime, setCtime] = useState(curTime);

//     const Updatetime = () => {
//         let curTime = new Date().toLocaleTimeString();
//         setCtime(curTime);
//     }

//     return (
//         <>
//             <h1>{ctime}</h1>
//             <button onClick={Updatetime}>Get Time</button>
//         </>
//     )
// }
// export default App;

// -------

// DIGITAL CLOCK

// import React, { useState } from "react";

// const App = () => {

//     const time = new Date().toLocaleTimeString();
//     const [ctime, setCtime] = useState(time);

//     const UpdateTime = () => {
//         const time = new Date().toLocaleTimeString();
//         setCtime(time);
//     }

//     setInterval(UpdateTime, 1000);
//     return (
//         <>
//             <h1>{ctime}</h1>
//         </>
//     )
// }

// export default App;

// -------

// HANDLING EVENTS IN REACTJS

// import React, { useState } from "react";

// const App = () => {
//     const bgcolor = 'light green';
//     const [bg, setbg] = useState(bgcolor);
//     const [name, setName] = useState("Click Me");

//     const bgChange = () => {
//         const newbgcolor = "pink";
//         setbg(newbgcolor);
//         setName("OUCH!! 🧑‍🦱");
//     }

//     const bgBack = () => {
//         setbg(bgcolor);
//         setName("Aaiyyoo!! 😠");

//     }

//     return (
//         <>
//             <div style={{ backgroundColor: bg }}>
//                 <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
//             </div>
//         </>
//     );
// }
// export default App;

// ------

// REACTJS FORMS

// import React, { useState } from "react";

// const App = () => {
//     const [name, setName] = useState("");
//     const [fullName, setFullName] = useState("");

//     const onSubmit = () => {
//         setFullName(name);
//     };

//     const inputEvent = (event) => {
//         // console.log(event.target.value);
//         event.preventDefault();
//         setName(event.target.value);
//     }

//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <div>

//                     <h1>HELLO {fullName}</h1>

//                     <input type='text' placeholder="Enter Your Name" onChange={inputEvent} value={name} />

//                     <button type="submit">Submit👍</button>
//                 </div>
//             </form>
//         </>
//     )
// }
// export default App;

// --------
//

// import React, { useState } from "react";

// const App = () => {
//     const [name, setName] = useState("");
//     const [fullName, setFullName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [lastNamenew, setLastNamenew] = useState("");
//     const [email, setEmail] = useState("");

//     const onSubmit = (event) => {
//         event.preventDefault();
//         setFullName(name);
//         setLastNamenew(lastName);
//         setEmail(email);
//     };

//     const inputEvent = (event) => {
//         // console.log(event.target.value);
//         setName(event.target.value);
//     }

//     const inputEvent2 = (event) => {
//         setLastName(event.target.value);
//     }

//     const inputEvent3 = (event) => {
//         setEmail(event.target.value);
//     }

//     return (
//         <>
//             <div className="main_div">
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <h1>HELLO {fullName} {lastNamenew} {email}</h1>

//                         <input type='text' placeholder="Enter Your first Name" onChange={inputEvent} value={name} />

//                         <input type='text' placeholder="Enter Your last name" onChange={inputEvent2} value={lastName} />


//                         <button type="submit">Submit👍</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }
// export default App;


// -----
// REDUCING THE ABOVE CODE AND ADDING MORE FIELDS

// import React, { useState } from "react";

// const App = () => {
//     const [fullName, setFullName] = useState({
//         fname: "",
//         lname: "",
//         email: "",
//         phoneNo: "",
//         qual: ""
//     });

//     const inputEvent = (event) => {
//         console.log(event.target.value);
//         console.log(event.target.name);
//         const { name, value } = event.target;

//         setFullName((preValue) => {
//             console.log(preValue);

//             return {
//                 ...preValue,
//                 [name]: value,
//             }
//         });
//     };

//     const onSubmit = (event) => {
//         event.preventDefault();
//         alert("form submitted");
//     };

//     return (
//         <>
//             <div className="main_div">
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <h1>HELLO {fullName.fname} {fullName.lname}</h1>

//                         <p>{fullName.email}</p>
//                         <p>{fullName.phoneNo}</p>
//                         <p>{fullName.qual}</p>

//                         <input type='text' placeholder="Enter Your first Name" name="fname" onChange={inputEvent} value={fullName.fname} />

//                         <input type='text' placeholder="Enter Your last name" name="lname" onChange={inputEvent} value={fullName.lname} />

//                         <input type='email' placeholder="Enter Your email" name="email" onChange={inputEvent} value={fullName.email} autoComplete="off" />

//                         <input type='number' placeholder="Enter Your number" name="phoneNo" onChange={inputEvent} value={fullName.phoneNo} />

//                         <input type='Text' placeholder="Enter Your Qualification" name="qual" onChange={inputEvent} value={fullName.qual} />

//                         <button type="submit">Submit👍</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }
// export default App;


// ----------
//....TO DO LIST....

// import Todolist from './Todolist';
// import React, { useState } from "react"

// const App = () => {
//     const [inputList, setInputList] = useState("");
//     const [items, setItems] = useState([]);

//     const itemEvent = (event) => {
//         setInputList(event.target.value);
//     }

//     const listOfItems = () => {
//         setItems((oldItems) => {
//             return [...oldItems, inputList]
//         });
//         setInputList("");
//     }

//     const deleteItems = (id) => {
//         console.log('deleted');

//         setItems((oldItems) => {
//             return oldItems.filter((arrElem, index) => {
//                 return index !== id;
//             })
//         })

//     };
//     return (
//         <>
//             <div className="main_div">
//                 <div className="center_div">
//                     <h1>ToDo List</h1>

//                     <input type="text" placeholder="Add Items"
//                         value={inputList}
//                         onChange={itemEvent}
//                     />

//                     <button onClick={listOfItems}> + </button>

//                     <ol>
//                         {items.map((itemVal, index) => {
//                             return <Todolist
//                                 key={index}
//                                 id={index}
//                                 text={itemVal}
//                                 onSelect={deleteItems}
//                             />
//                         })}
//                     </ol>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default App;

// ------
// CHALLENGE 8

// import React, { useState } from "react";

// // material icons
// // import AddIcon from '@mui/icons-material/Add';(not working)
// import AddIcon from '@material-ui/icons/Add';
// // (working)
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

// const App = () => {

//     const [num, setNum] = useState(0);

//     const incNum = () => {
//         setNum(num + 1);
//     }

//     const decNum = () => {
//         if (num > 0) {
//             setNum(num - 1);
//         } else {
//             alert('reached 0 limit')
//         }
//     }
//     return (
//         <>d:
//             d
//             <div className='main_div'>
//                 <div className='center_div'>
//                     <h1>{num}</h1>
//                     <div className='btn_div'>

//                         <button onClick={decNum}>Decrement< AccessAlarmIcon/></button>
//                         <button onClick={incNum}><AddIcon />Increment</button>
//                     </div>
//                 </div>
//             </div>
//         </>

//     );
// };
// export default App;

// --------
// REACTJS FRAMEWORK

// import React, { useState } from "react";
// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';


// const App = () => {

//     const [num, setNum] = useState(0);

//     const incNum = () => {
//         setNum(num + 1);
//     }

//     const decNum = () => {
//         if (num > 0) {
//             setNum(num - 1);
//         } else {
//             alert('reached 0 limit')
//         }
//     }
//     return (
//         <>
//             <div className='main_div'>
//                 <div className='center_div'>
//                     <h1>{num}</h1>
//                     <div className='btn_div'>

//                         <Button onClick={incNum} className='btn_green' Tooltip title="Increase"><AddIcon /></Button>

//                         <Button onClick={decNum} className='btn_red' Tooltip title='Decrease'><RemoveIcon /></Button>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default App;


// -------
// 

// import React from "react";
// import Clock from 'react-digital-clock';

// const App = () => {
//     return (
//         <>
//             <Clock />
//         </>
//     );
// }


// -----
//USING BOOTSTRAP
// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//     return (
//         <React.Fragment>
//             <h1 className="text-capitalize text-center">This is my page</h1>
//             <button className="btn btn-success">Ulllluuu</button>

//             {/* COPY AND PASTED BOOTSTRAP PART - form/Input-group */}
//             <div class="input-group mb-3">
//                 <span class="input-group-text" id="basic-addon1">@</span>
//                 <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
//             </div>

//             <div class="input-group mb-3">
//                 <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
//                 <span class="input-group-text" id="basic-addon2">@example.com</span>
//             </div>

//             <label for="basic-url" class="form-label">Your vanity URL</label>
//             <div class="input-group mb-3">
//                 <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
//                 <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
//             </div>

//             <div class="input-group mb-3">
//                 <span class="input-group-text">$</span>
//                 <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
//                 <span class="input-group-text">.00</span>
//             </div>

//             <div class="input-group mb-3">
//                 <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
//                 <span class="input-group-text">@</span>
//                 <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
//             </div>

//             <div class="input-group">
//                 <span class="input-group-text">With textarea</span>
//                 <textarea class="form-control" aria-label="With textarea"></textarea>
//             </div>
//         </React.Fragment>
//     );
// }

// export default App;


// --------
// CREATING REACT WEBPAGE IN JUST 1 MIN

// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//     return (
//         <React.Fragment>
//             <h1>Welcome to my channel</h1>

//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <div class="card">
//                             <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height='200px' />
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div class="card">
//                             <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height='200px' />
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div class="card">
//                             <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height='200px' />
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

// export default App;


// ---------
// 

import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/service" component={Service} />
                <Redirect to='/' />
            </Switch>
            <Footer/>
        </>
    )
}

export default App;