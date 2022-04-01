import Navbar from '../components/navbar'
import { useState } from 'react'
import md5 from 'md5'

const Hash = (props) =>{

  const [data, setData] = useState(null)

  function getData(val){

    setData(md5(val.target.value))

  }
  return(
    <div>
      <Navbar/>
      <div className="flex justify-evenly items-center w-full h-screen">
        <a className="relative block group h-3/5">
          <span className="absolute inset-0 border-2 border-green border-dashed"></span>

          <div
            className="relative flex items-center justify-center h-full transition-transform transform bg-green border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="px-8 pb-8 flex flex-col items-center transition-opacity group-hover:opacity-0 group-hover:absolute">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="96" height="96" preserveAspectRatio="xMinYMin" class="jam jam-computer"><path d='M2 13v1h3V2H2v9h1v2H2zM1 0h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm9 3h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v6h8V5h-8zm2 9h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z'/></svg>

              <h2 className="mt-4 w-64 flex justify-center text-2xl font-medium">HASH</h2>
            </div>

            <div className="absolute h-full flex flex-col justify-center items-evenly p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">



              <label className="relative block p-2 border-2 border-black rounded-lg">
                <span className="text-xs font-medium text-black">
                  {props.name}
                </span>
                <input className="w-full bg-green p-0 text-sm placeholder-black border-none focus:outline-none" id="name" type="text" placeholder="Enter Data" onChange={getData} />
              </label>


              <span className="h-10 w-full flex items-center px-2 border-2 border-black mt-4 rounded-lg">{data}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hash
