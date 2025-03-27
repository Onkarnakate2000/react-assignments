import { useState, useMemo } from 'react';
import './App.css';
import Assignment1 from './components/assignement1';
import Assignment2 from './components/assignment2';
import Assignment3 from './components/assignment3';
import Assignment4 from './components/assignment4';
import Assignment5 from './components/assignment5';
import Assignment6 from './components/assignment6';

function App() {
  const [input, setInput] = useState();
  return(<>
  {/* <Assignment1></Assignment1> */}
  {/* <Assignment2/> */}
  {/* <Assignment3/> */}
  {/* <Assignment4 /> */}
  {/* <Assignment5/> */}
  <Assignment6></Assignment6>
  </>)
}

export default App;
