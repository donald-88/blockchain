import Link from 'next/link'
import Image from 'next/image'

const Navbar = () =>{
  return(
    <div className="h-16 w-full flex justify-center items-center bg-green fixed">
      <ul className="flex justify-evenly w-1/2">
        <li><Link href="/hash">HASH</Link></li>
        <li><Link href="/block">BLOCK</Link></li>
        <li><Link href="/blockchain">BLOCKCHAIN</Link></li>
      </ul>

      <div className="absolute top-0 left-4">
        <Image width={139} height={55.95}src="/logo.png" alt="logo"/>
      </div>
    </div>
  )
}

export default Navbar
