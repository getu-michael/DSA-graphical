import Block from "./commponents/block/Block";
import OptionSelect from "./commponents/optionSelect/OptionSelect"
import InputList from "./commponents/input/InputList";
import { useState } from "react";



function App (){
  const algoNames = ["Selection Sort",
    "Bubble Sort",
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort"]
  const [list, setList] = useState('');
  let store = (event)=>{
    setList((p)=> p + event.target.value)
  }

let populate = ()=>{
 {list.map((l,i)=> {
 <p key={i}>l</p>
 console.log(l);})}
  }

  return (<>
    <InputList fun={store}/><br />
    <OptionSelect algorithms = {algoNames}/> <br />
    <div>
      <button onClick={store}>Populate</button><br />
      <button onClick={populate}>Sort</button>
    </div>
    <div className="block-container">
        <Block val={1} index={0}/>
        <Block val={10} index={1}/>
    </div>
  </>);
}
export default App;