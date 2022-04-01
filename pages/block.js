import Navbar from '../components/navbar'
import Card from '../components/card'

const Block = () =>{
  return(
    <div>
      <Navbar/>
      <div className="flex justify-evenly items-center w-full h-screen">
        <Card number="BLOCK"/>
      </div>
    </div>
  )
}

export default Block
