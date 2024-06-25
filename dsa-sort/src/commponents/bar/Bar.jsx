import './Bar.css'
function Bar(props){
    const list = props.list
    return (<>
                {list.map((e,i)=> <div className="bar" key={i} 
                                        style={{width:e.val, backgroundColor:e.color} } > </div>)}
            </>);
}
export default Bar;