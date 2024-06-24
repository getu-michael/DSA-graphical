import './block.css'
function Block(props){
    const list = props.list;
    return (<>
                <p>{list}</p>
                <div className='block-container'>
                    { list.map((val,index)=> <div className="block" key={index}>{val}</div>) }
                </div>
            </>);
}
export default Block;