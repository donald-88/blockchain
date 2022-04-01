const Textfield = (props) =>{


  return(
      <label className="relative block p-2 border-2 border-black rounded-lg" for="name">
        <span className="text-xs font-medium text-black" for="name">
        </span>
        <input className="w-full bg-transparent p-0 text-sm placeholder-black focus:outline-none border-none" id="name" type="text" placeholder={props.name} />
      </label>

  )
}

export default Textfield
