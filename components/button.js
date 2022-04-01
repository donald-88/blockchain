const Button = (props) => {
  return(
      <span className="h-12 flex justify-center items-center border border-black rounded-lg text-sm font-medium bg-black text-green hover:bg-green hover:text-black" onClick={props.onClick}>
        Mine
      </span>

  )
}

export default Button
