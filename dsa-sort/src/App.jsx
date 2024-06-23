import Block from "./commponents/block/Block";
import OptionSelect from "./commponents/optionSelect/OptionSelect"
import InputList from "./commponents/input/InputList";
import { useState } from "react";



function App (){
  let arr=[]
  const algoNames = ["Selection Sort",
    "Bubble Sort",
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort"]
  const [list, setList] = useState('');
  let store = (event)=>{
                console.log(event.target.value );
                setList( event.target.value)
              }

  let populate = ()=> {
                  arr = list.split(',')
                  console.log(arr);
                  {arr.map((e,i)=><Block val={e} index={i} key={i}/>)} 
                }
  let sort = ()=>{}
  return (<>
    <InputList fun={store} listData={list}/><br />
    <OptionSelect algorithms = {algoNames}/> <br />
    <div>
      <button onClick={populate} >Populate</button><br />
      <button onClick={sort}>Sort</button>
      
    </div>
    <div className="block-container">
        {arr.map((e,i)=><Block val={e} index={i} key={i}/>)} 
        <Block val={'TE'} index={1}/>
    </div>
  </>);
}
export default App;