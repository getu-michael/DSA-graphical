//import Block from "./commponents/block/Block";
import OptionSelect from "./commponents/optionSelect/OptionSelect"
//import InputList from "./commponents/input/InputList";
import SortBtn from "./commponents/sortBtn/SortBtn";
import Bar from "./commponents/bar/Bar";

import { useState, useEffect } from "react";


function App (){

  const [arr, setArr] = useState([119,425,321,69,92,263,758,604,75])
  const algoNames = ["Selection Sort",
                    "Bubble Sort",
                    "Insertion Sort",
                    "Merge Sort",
                    "Quick Sort"]
  const [list, setList] = useState('');
  const [selected, setSelected] = useState('none');

  let fillArray = (()=>{
    for (let i = 0; i < 50; i++) {
      let num=(Math.random()*1000)+10
      setArr((prv)=>{prv.push(num)})
    }
  });

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
  let BubbleSort = ()=>{
    let arrayList = arr
    let temp
    for(let i=0;i<arrayList.length-1;i++){
      for(let j=i+1;j<arrayList.length;j++){
        if(arrayList[i]>arrayList[j]){
          temp=arrayList[j]
          arrayList[j]=arrayList[i]
          arrayList[i]=temp
        }
          }
    }
    console.log(arrayList)

  }

  let sort = ()=> {               
    if(selected=="Bubble Sort")
      BubbleSort()  
    console.log(arr , 'from populate fun');
    // <Block list={arr}/>

  }
                

  return (<>
            
            <OptionSelect algorithms = {algoNames} setSelectedValue={selectedAlgo}/> <br />
            <button onClick={sort} >Populate</button><br />
            <SortBtn listData={list} algoName={selected}/>
            <Bar list={arr}/>
          
          </>);
}
export default App;