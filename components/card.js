import Textfield from '../components/textfield'
import Button from '../components/button'
import { useState } from 'react'
import md5 from 'md5'

const Card = (props) => {

const [data, setData] = useState(md5('100'))

function getData(val){

  setData(md5(val.target.value))
}



  return(
    <a className="relative block group h-3/5">
      <span className="absolute inset-0 border-2 border-green border-dashed"></span>

      <div
        className="relative flex items-center justify-center h-full transition-transform transform bg-green border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="px-8 pb-8 flex flex-col items-center transition-opacity group-hover:opacity-0 group-hover:absolute">

          <h2 className="mt-4 w-64 flex justify-center text-2xl font-medium"></h2>
        </div>

        <div className="absolute h-full flex flex-col justify-evenly items-evenly p-8 group-hover:relative">

          <span className="h-10 w-full border-2 border-black rounded-lg flex items-center text-sm px-2">1</span>

          <Textfield name="Nonce"/>


            <label className="relative block p-2 border-2 border-black rounded-lg" for="name">
              <span className="text-xs font-medium text-black" for="name">
              </span>
              <input className="w-full bg-green p-0 text-sm placeholder-black border-none focus:outline-none" id="name" type="text" placeholder="100" onChange={getData} />
            </label>



            <span className="h-10 w-full border-2 border-black rounded-lg flex items-center text-sm px-2">{data}</span>

          <Button/>
        </div>
      </div>
    </a>

  )
}

export default Card
