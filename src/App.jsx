import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "" });
  // console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: (type === "checkbox") ? checked : value
      }
    });
  }

  console.log(formData);

  function submitHandler(event){
    event.preventDefault();
    //print
    console.log("finally printing the data of entire Form............");
    console.log(formData);
  }

  return (
    <div className='App'>
      <demoincre></demoincre>
      <form action="" onSubmit={submitHandler}>
        <input type="text"
          placeholder='first name'
          onChange={changeHandler} name='firstName'
          value={formData.firstName} />
        <br /><br />

        <input type="text"
          placeholder='Last name'
          onChange={changeHandler} name='lastName'
          value={formData.lastName} />
        <br /><br />

        <input type="email"
          placeholder='Enter your Email Here'
          onChange={changeHandler} name='email'
          value={formData.email} />
        <br /><br />

        <textarea placeholder='enter your comments here'
          onChange={changeHandler} name="comments" value={formData.comments}></textarea>
        <br /><br />

        <input type="checkbox" onChange={changeHandler} name='isVisible'
          id='isVisible'
          checked={formData.isVisible} />
        <label htmlFor="isVisible">Am i visible?</label>
        <br /><br />

        <fieldset>
          <legend>Mode:</legend>
          <input type="radio" onChange={changeHandler} name='mode' value="Online-Mode" id="Online-Mode" />

          <label htmlFor="Online-Mode"
            checked={formData.mode === "Online-Mode"}>Online Mode </label>
          <br /><br />

          <input type="radio" onChange={changeHandler} name='mode' value="Offline-Mode" id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"} />

          <label htmlFor="Offline-Mode">Offline Mode </label>
          <br /><br />
        </fieldset>

        <select name="favCar" id="favCar" value={formData.favCar} onChange={changeHandler}>

          <option value="scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Freestyle">Freestyle</option>
          <option value="Mustang">Mustang</option>
          <option value="Shelby">Shelby</option>
          <option value="G63">G63</option>

        </select>

      <label htmlFor="favCar">Tell me your Favourite Car</label>

      <input type="submit" value="submit" />

      </form>
    </div>
  )
}

export default App
