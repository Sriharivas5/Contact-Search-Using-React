import { useState } from 'react';
import './App.css';
import { data } from "./data.js"
import Highlighter from "react-highlight-words";



function App() {
  const [search, setSearch] = useState("")
  const [phone, setPhone] = useState("")
  console.log(search)
  return (
    <>
      <div className="container">
        <h1>Conatct Search</h1>
        <form>
          <input type="text" name="name" onChange={(e) => { setSearch(e.target.value) }} placeholder="Search by Name" />
          <input type='text' onChange={(e) => { setPhone(e.target.value) }} placeholder='Search by Number'></input>
        </form>

        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item) => {
              return((search.toLowerCase() === "" ? item : item.first_name.toLowerCase().includes(search))&&(+phone == "" ? item : item.phone.includes(phone)))
            }).map((item) =>
            (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
