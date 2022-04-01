import Navbar from '../components/navbar'
import Card from '../components/card'
import Textfield from '../components/textfield'
import Button from '../components/button'
import { useState } from 'react'
import md5 from 'md5'

const Blockchain = () =>{

  const [data, setData] = useState(md5('100'))
  const [data2, setData2] = useState(md5('200'))
  const [data3, setData3] = useState(md5('300'))

  const [tempdata, setTempdata] = useState(md5('100'))
  const [tempdata2, setTempdata2] = useState(md5('200'))

  function getData(val){

    setData(md5(val.target.value))
  }

  function getData2(val){
    setData2(md5(val.target.value))
  }

  function getData3(val){

    setData3(md5(val.target.value))
  }


  const changeData = () =>{
    setTempdata(data)
    }

    const changeData2 = () =>{
      setTempdata2(data2)
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

              <h2 className="mt-4 w-64 flex justify-center text-2xl font-medium"></h2>
            </div>

            <div className="absolute h-full flex flex-col justify-evenly items-evenly p-8 group-hover:relative">

              <span className="h-10 w-full border-2 border-black rounded-lg px-2 flex items-center">1</span>

              <Textfield name="Nonce"/>


                <label className="relative block p-2 border-2 border-black rounded-lg">
                  <span className="text-xs font-medium text-black">
                  </span>
                  <input className="w-full bg-green p-0 text-sm placeholder-black border-none focus:outline-none" id="name" type="text" placeholder="100" onChange={getData} />
                </label>


                <span className="h-10 w-full border-2 border-black rounded-lg flex justify-center items-center text-sm px-2">0000000000000000000000000000000</span>
                <span className="h-10 w-full border-2 border-black rounded-lg flex justify-center items-center text-sm px-2">{data}</span>

              <Button/>
            </div>
          </div>
        </a>





        {
          tempdata == data ? <a className="relative block group h-3/5">
            <span className="absolute inset-0 border-2 border-green border-dashed"></span>

            <div
              className="relative flex items-center justify-center h-full transition-transform transform bg-green border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="px-8 pb-8 flex flex-col items-center transition-opacity group-hover:opacity-0 group-hover:absolute">

                <h2 className="mt-4 w-64 flex justify-center text-2xl font-medium"></h2>
              </div>

              <div className="absolute h-full flex flex-col justify-evenly items-evenly p-8 group-hover:relative">

                <span className="h-10 w-full border-2 border-black rounded-lg px-2 flex items-center">2</span>

                <Textfield name="Nonce"/>


                  <label className="relative block p-2 border-2 border-black rounded-lg">
                    <span className="text-xs font-medium text-black">
                    </span>
                    <input className="w-full bg-green p-0 text-sm placeholder-black border-none focus:outline-none" id="name" type="text" placeholder="200" onChange={getData2} />
                  </label>


                  <span className="h-10 w-full border-2 border-black rounded-lg flex justify-center items-center text-sm px-2">{tempdata}</span>
                  <span className="h-10 w-full border-2 border-black rounded-lg flex justify-center items-center text-sm px-2">{data2}</span>

                <Button onClick={changeData}/>
              </div>
            </div>
          </a> : <a className="relative block group h-3/5">
            <span className="absolute inset-0 border-2 border-red-700 border-dashed"></span>

            <div
              className="relative flex items-center justify-center h-full transition-transform transform bg-red-700 border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="px-8 pb-8 flex flex-col items-center transition-opacity group-hover:opacity-0 group-hover:absolute">

                <h2 className="mt-4 w-64 flex justify-center text-2xl font-medium"></h2>
              </div>

              <div className="absolute h-full flex flex-col justify-evenly items-evenly p-8 group-hover:relative">

                <span className="h-10 w-full border-2 border-black rounded-lg px-2 flex items-center">2</span>

                <Textfield name="Nonce"/>


                  <label className="relative block p-2 border-2 border-black rounded">
                    <span className="text-xs font-medium text-black">
                    </span>
                    <input className="w-full bg-transparent p-0 text-sm placeholder-black border-none focus:outline-none" id="name" type="text" placeholder="200" onChange={getData2} />
                  </label>


                  <span className="h-10 w-full border-2 border-black rounded-lg flex justify-center items-center text-sm px-2">{tempdata}</span>
                  <span className="h-10 w-full border-2 border-black rounded-lg flex justify-center items-center text-sm px-2">{data2}</span>

                <Button onClick={changeData}/>
              </div>
            </div>
          </a>
        }







        {
          tempdata == data && tempdata2 == data2 ? <a className="relative block group h-3/5">
            <span className="absolute inset-0 border-2 border-green border-dashed"></span>


            <div
              className="relative flex items-center justify-center h-full transition-transform transform bg-green border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="px-8 pb-8 flex flex-col items-center transition-opacity group-hover:opacity-0 group-hover:absolute">

                <h2 className="mt-4 w-64 flex justify-center text-2xl font-medium"></h2>
              </div>

              <div className="absolute h-full flex flex-col justify-evenly items-evenly p-8  group-hover:relative">

                <span className="h-10 w-full border-2 border-black rounded-lg px-2 flex items-center">3</span>

                <Textfield name="Nonce"/>


                  <label className="relative block p-2 border-2 border-black rounded-lg">
                    <span className="text-xs font-medium text-black">
                    </span>
                    <input className="w-full bg-green p-0 text-sm placeholder-black border-none focus:outline-none" id="name" type="text" placeholder="300" onChange={getData3} />
                  </label>


                  <span className="h-10 w-full border-2 border-black rounded-lg flex justify-center items-center text-sm px-2">{tempdata2}</span>
                  <span className="h-10 w-full border-2 border-black rounded-lg flex justify-center items-center text-sm px-2">{data3}</span>

                <Button onClick={changeData2}/>
              </div>
            </div>
          </a> : <a className="relative block group h-3/5">
            <span className="absolute inset-0 border-2 border-red-700 border-dashed"></span>


            <div
              className="relative flex items-center justify-center h-full transition-transform transform bg-red-700 border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="px-8 pb-8 flex flex-col items-center transition-opacity group-hover:opacity-0 group-hover:absolute">

                <h2 className="mt-4 w-64 flex justify-center text-2xl font-medium"></h2>
              </div>

              <div className="absolute h-full flex flex-col justify-evenly items-evenly p-8  group-hover:relative">

                <span className="h-10 w-full border-2 border-black rounded-lg px-2 flex items-center">3</span>

                <Textfield name="Nonce"/>


                  <label className="relative block p-2 border-2 border-black rounded-lg">
                    <span className="text-xs font-medium text-black">
                    </span>
                    <input className="w-full bg-transparent p-0 text-sm placeholder-black border-none focus:outline-none" id="name" type="text" placeholder="300" onChange={getData3} />
                  </label>


                  <span className="h-10 w-full border-2 border-black rounded-lg flex justify-center items-center text-sm px-2">{tempdata2}</span>
                  <span className="h-10 w-full border-2 border-black rounded-lg flex justify-center items-center text-sm px-2">{data3}</span>

                <Button onClick={changeData2}/>
              </div>
            </div>
          </a>
        }








      </div>



    </div>
  )
}

export default Blockchain
