import Card from "./Card.jsx"
import "./index.css"
import Button from "./Button.jsx";
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ButtonClick from "./ButtonClick.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import MyCom from "./MyCom.jsx";
import ColorPicker from "./ColorPicker.jsx";
import Car from "./Car.jsx";
import Food from "./Food.jsx";
import MyCars from "./MyCars.jsx";
import ToDoList from "./ToDoList.jsx";
import Effect from "./Effect.jsx";
import Size from "./Size.jsx";
import DigitalClick from "./DigitalClick.jsx";
import ComponentA from "./ComponentA.jsx";
import Ref from "./Ref.jsx";
import Stopwatch from "./Stopwatch.jsx";

function App() {

  // const fruits = [{id : 1, name : "apple", calories: 50},
  //                 {id : 2, name :"banana", calories: 85},
  //                 {id : 3, name :"pineapple", calories: 105},
  //                 {id : 4, name :"strawberry", calories: 23},
  //                 {id : 5, name :"orange", calories: 60}];

  // const vegetables = [{id : 1, name : "potatoes", calories: 115},
  //                 {id : 2, name :"celery", calories: 15},
  //                 {id : 3, name :"carrots", calories: 25},
  //                 {id : 4, name :"corn", calories: 63},
  //                 {id : 5, name :"broccoli", calories: 36}];

  return(
    <>
      {/* <Student name="Spongebob" age = {30} isStudent = {true}/>
      <Student name="Patrick" age = {50} isStudent = {false}/>
      <Student name="Nour" age = {22} isStudent = {true}/>
      <Student name="Sandy" age = {18} isStudent = {true}/>
      <Student /> */}
      {/* <UserGreeting isLoggedIn = {false} username = "Nour Hek"/>
      <UserGreeting isLoggedIn = {true} username = "Nour Hek"/>
      <UserGreeting isLoggedIn = {true} />
      <UserGreeting/> */}

      {/* {fruits.length > 0 && <List items = {fruits} category = "Fruits"/>}
      {vegetables.length > 0 && <List items = {vegetables} category = "Vegetables"/>} */}
      {/* <ButtonClick/> */}
      {/* <ProfilePicture /> */}
      {/* <MyComponent/> */}
      {/* <Counter /> */}
      {/* <MyCom /> */}
      {/* <ColorPicker /> */}
      {/* <Car/> */}
      {/* <Food/> */}
      {/* <MyCars/> */}
      {/* <ToDoList/> */}
      {/* <Effect/> */}
      {/* <Size/> */}
      {/* <DigitalClick/> */}
      {/* <ComponentA/> */}
      {/* <Ref/> */}
      <Stopwatch/>

    </>  
  ); 
}

export default App
