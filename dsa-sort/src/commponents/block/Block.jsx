import './block.css'
function Block(props){
    const list = props.list;
    return (<>
                {list.map((val,index)=> <div className="block" key={index}>{val}</div>)}
            </>);
}
export default Block;