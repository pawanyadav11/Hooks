// import {useState} from "react";
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   const content = {
//     action: "show",
//     text: "hide"
//
//   }
//   const [data,changeData] = useState(content);
//   const toggle = ()=>{
//     let tmp = "";
//     if(data.action == "show")
//     {
//       tmp = {
//         action: "hide",
//         text: "show"
//       }
//     }
//
//     else {
//       tmp = {
//         action: "show",
//         text: "hide"
//       }
//     }
//
//     return changeData(tmp);
//
//   }
//   const design = (
//
//   <>
//   <h1 className={data.action}>Vanshika</h1>
//   <button onClick={toggle}>{data.text}</button>
//   </>
//   const css = {
//     color:"black",
//     fontSize: "40px"
//   }
//   const [data,changeColor] = useState("css");
//
//   const setColor = (event)=>{
//   const input =  event.target;
//   let colorName = input.value;
//   const updateData = {
//     color:colorName
//   }
//   return changeColor(updateData);
//   }
//
//   const setSize = (event)=>{
//     const input = event.target;
//     const fontSize = input.value+"px";
//     const updateData ={
//       fontSize: fontSize
//     }
//     return changeColor(updateData);
//   }
//
// const design = (
//   <>
//   <h1 style={data}>Pawan yadav</h1>
//   <input type="color" onChange={setColor} />
//   <input type="range" min="20" max="500" onChange={setSize}/>
//   </>
// );
// return design;
// }
//
// export default App;
import Users from "./Users/Users";
import "bootstrap/dist//css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";
const App =()=>{
  const design = (
    <>
    <Users />
    </>
  );

  return design;

}

export default App;
