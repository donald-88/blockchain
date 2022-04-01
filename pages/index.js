import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className="h-screen w-full">
      {
        //<div className="fixed backdrop-blur-3xl bg-black bg-opacity-50 z-negative h-screen w-screen"/>
        //<div className="fixed top-80 left-40 bg-green rounded-full h-48 w-48 z-negativeTwo"/>
      }
      <Navbar/>
    </div>
  )
}
