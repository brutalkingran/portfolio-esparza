export const NavButton = ({ extraStyle, text, action }) => {
  return (
    <button
      onClick={ () => action }
      className={ `mr-1 px-2 py-1 transition-all hover:bg-blue-600 rounded cursor-pointer bg-blue-400 ${extraStyle}` }> 
        { text }
    </button>
  )
}

export const ContactLink = ({ extraStyle, text, logo, action}) => {
  return (
    <li className= { `bg-rose-600 rounded-full p-2 w-full hover:bg-rose-800 transition-all ${extraStyle}` } >
      <a className="flex flex-row items-center" href={action}>
        {logo}
        {text}
      </a>
    </li>
  )
}

export const ConsoleButton = ({ number, text }) => {
  return(
    <li className="py-5 px-5 flex flex-row items-center hover:bg-gray-900">
      <span className="rounded-full bg-white text-black px-1 text-2xl mr-5">
        { number }
      </span>

      { text }
    </li>
  )
}