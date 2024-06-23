import {} from "./commponents/block/Block";
import OptionSelect, {} from "./commponents/optionSelect/OptionSelect"
function App (){
  const algoNames = ["Selection Sort",
                    "Bubble Sort",
                    "Insertion Sort",
                    "Merge Sort",
                    "Quick Sort"]
  return (<>
    <OptionSelect algorithms = {algoNames}/>
  </>);
}
export default App;