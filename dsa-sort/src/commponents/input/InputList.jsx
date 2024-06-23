
function InputList(props){
    const eventHandler = props.store
    return (<>
                <textarea onChange={eventHandler} id="" cols={40} rows={10}></textarea>
            </>);
}
export default InputList ;