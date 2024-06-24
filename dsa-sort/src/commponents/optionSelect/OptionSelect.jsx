function OptionSelect (props){
    let algo = props.algorithms
    let selectAlgo = props.setSelectedValue
   
    return (<>
    
                <label htmlFor="algorithmsType">Select sorting algorithm:  </label>
                <select onChange={selectAlgo} name="" id="algorithmsType">
                    <option value="none" key={0}>Select Algorithm type</option>
                    {algo.map((elem,index)=> 
                        <option key={index+1} value={elem}> {elem} </option>)}
                </select>
                               
            </>)
}
export default OptionSelect;
