const TodoList =(props) =>{
const faStyle = {
    
        width: "20px",
        height: "20px",
        display: "flex", 
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#9370db",
        borderRadius: "50%",
        margin: "'0' '15px' '0' '35px'",
        color: "#fff",
        boxShadow: "5px 5px 15px -5px rgba(0,0,0,0.3)",
        cursor: "pointer",
        textAlign: "center"
      
}

const todoStyle ={
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
    right: "7.8rem",
    backgroundColor: "#fff",
    paddingLeft: ".5rem"
  }
   
    return(
    <>
     <div className="tode_style" style={todoStyle}>
     <i className = "fa fa-times" style={faStyle}
     arie-hidden = "true" 
     onClick={()=>{
        props.onSelect(props.id)
        // isse ye pta chalega ki kisko select kar rhe ho 
     }} 
         
     />
     <li>{props.text}</li>
     </div>
    </> 
    ) 
}  ;

export default TodoList;