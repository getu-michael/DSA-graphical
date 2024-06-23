
function InputList(props){
    const handler = props.fun
    const lst = props.listData
    return (<>
                <textarea onChange={handler} value={lst} id="" cols={40} rows={10}></textarea>
            </>);
}
export default InputList ;