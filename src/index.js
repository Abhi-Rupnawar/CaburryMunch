import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const Chocolate = (props)=>{
    console.log(props)
    
const {name,emoji}=props //destructuring
  return(<> 
    <h1>{props.name} - {props.emoji}</h1>
        
    </>)
}

// const Snacks = ()=>{
//     return <h1>Snacks </h1>
// }
root.render(<>
    <h1>All Chocolates 😍</h1>
    
    <Chocolate name="dairy milk" emoji="🧂"/>
    <Chocolate name="kisme" emoji="😘"/>
    <Chocolate name="kitkate" emoji="😍"/>
    <Chocolate/>
    {/* <Snacks/> */}
</>)