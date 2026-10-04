/*function App(){//react component
  return(
  <div>
    <h1>Hey Nilakshana this is your first<br></br> <br></br>web application!</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, tenetur. Quo est tempora nostrum doloremque quam laborum aspernatur natus neque eaque, suscipit praesentium repellendus atque, dolore porro dicta pariatur veniam eligendi quis! Veniam facere consequuntur libero reiciendis dolore est recusandae quos fugit dolores eius, reprehenderit incidunt unde voluptate voluptates corrupti veritatis nihil quas commodi ipsum consequatur natus architecto vel sequi iste! Animi veritatis ullam aliquam est aut, distinctio quae eos asperiores dolorum numquam provident rem! Officiis explicabo perspiciatis molestias esse perferendis, facere omnis culpa eligendi quam, aliquid ullam! Libero dolor et obcaecati minus! Dolorum dolore aliquam iure, distinctio autem deleniti.</p>
  </div>
  )
}
export default App//*/





//part two
import { useState } from "react"
function App(){
  const [message,setMessage]=useState('Hello Nilakshana')
  

function changeMessage(){
  setMessage("You just changed the message!")
}
  return(
    <div>
      <h1>{message}</h1>
      <button onClick={changeMessage}>
        Change Message
      </button>
    </div>
    )
  }

export default App