function OptionSelect (props){
    let algo = props.algorithms
   
    return (<>
                <label htmlFor="algorithmsType">Select sorting algorithm:  </label>
                <select name="" id="algorithmsType">
                    {algo.map((elem,index)=> 
                        <option key={index} value={elem}> {elem} </option>)}
                </select>
                               
            </>)
}
export default OptionSelect;