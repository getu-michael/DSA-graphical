import Block from "./commponents/block/Block";
import OptionSelect from "./commponents/optionSelect/OptionSelect"
import InputList from "./commponents/input/InputList";
import SortBtn from "./commponents/sortBtn/SortBtn";

import { useState } from "react";



function App (){

  let arr=[]
  const algoNames = ["Selection Sort",
                    "Bubble Sort",
                    "Insertion Sort",
                    "Merge Sort",
                    "Quick Sort"]
  const [list, setList] = useState('');
  const [selected, setSelected] = useState('none');

// stores the given input string value from the InputList component to the list state.
  let storeList = (event)=>{
                    console.log(event.target.value );
                    setList(event.target.value)
                  }
// stores the selected sorting algorithm value from the OptionSelect component to the selected state.
  let selectedAlgo = (event)=>{
                        setSelected(event.target.value)
                        console.log(event.target.value);
                      }
  let populate = ()=> {
                  arr = list.split(',')
                  console.log(arr);
                  <Block list={arr}/>
              
                }
 
  return (<>
            
            <InputList fun={storeList} listData={list}/><br />
            <OptionSelect algorithms = {algoNames} setSelectedValue={selectedAlgo}/> <br />
            <button onClick={populate} >Populate</button><br />
            <SortBtn listData={list} algoName={selected}/>
            <Block list={arr}/>

          </>);
}
export default App;