import './block.css'
function Block(props){
    const val = props.val;
    const index = props.index;
    return (<>
                <div className="block" key={index}>{val}</div>
            </>);
}
export default Block;