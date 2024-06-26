import OptionSelect from "./commponents/optionSelect/OptionSelect"
import Bar from "./commponents/bar/Bar";
import { useState, useEffect } from "react";

function App (){

  const [arr, setArr] = useState([])
  const algoNames = ["Selection Sort",
                    "Bubble Sort",
                    "Insertion Sort",
                    "Merge Sort",
                    "Quick Sort"]
  const [selected, setSelected] = useState('none');

  let fillArray = (()=>{
    for (let i = 0; i < 700; i++) {
      let num=Math.floor((Math.random()*1000)+10)
      let item = {val:num,color:"red"}
      arr.push(item)
      //setArr([...arr,item])
    }
  });

// stores the selected sorting algorithm value from the OptionSelect component to the selected state.
  let selectedAlgo = (event)=>{
                        setSelected(event.target.value)
                        console.log(event.target.value);
                      }

  let BubbleSort = ()=>{
    //let arrayList = arr
    let temp
    for(let i=0;i<arr.length-1;i++){
      console.log('-------- at iteration: '+ i)
      arr.forEach(e=>console.log(e))
      for(let j=i+1;j<arr.length;j++){
        if(arr[i].val>arr[j].val){
          temp=arr[j]
          arr[j]=arr[i]                  
          arr[i]=temp
          setArr(arr)
        }
      arr[i].color="green"
      setArr(arr)
      }
    arr[arr.length-1].color="green"
    //console.log(arr)
    }
  }

  let selectionSort = ()=>{
    let arrayList = arr
    for(let i=0;i<arrayList.length-1;i++){
          let foundMin=i
      for(let j=i+1;j<arrayList.length;j++){
        if(arrayList[foundMin].val>arrayList[j].val){
          foundMin=j
        }
          }
          if(foundMin!=i){
              let temp = arrayList[i]
              arrayList[i]=arrayList[foundMin]
              arrayList[foundMin]=temp
            }
      arrayList[i].color="pink"
    }
    arrayList[arrayList.length-1].color="pink"
    console.log(arrayList)
  }

  let sort = ()=> {   

    arr.forEach(e=>console.log(e));         
    if(selected=="Bubble Sort")
      BubbleSort()  
    else if(selected=="Selection Sort")
      selectionSort()   

  }
  
  useEffect(()=>console.log('changed'),[arr])

  return (<>
            
            <OptionSelect algorithms = {algoNames} setSelectedValue={selectedAlgo}/> <br />
            <button onClick={fillArray} >Populate</button><br />
            <button onClick={sort} >Start sorting</button><br />
            <Bar list={arr}/>
          
          </>);
}
export default App;