export const NavButton = ({ children, extraStyle, action, tooltip }) => {
  return (
    <li className="w-full relative group">
      <button
        className={`flex items-center justify-center w-full hover:text-teal-400 xl:h-[100px] h-[50px] cursor-pointer ${extraStyle}`}
        onClick={action}
      >
        {children}
      </button>

      {/* Tooltip */}
      <span
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full mr-2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-[999]"
      >
        { tooltip }
      </span>
    </li>
  );
};

export const ContactLink = ({ extraStyle, text, logo, action}) => {
  return (
    <li className={ `flex flex-row items-center bg-rose-600 rounded-full p-2 w-full hover:bg-rose-800 transition-all ${extraStyle}` } >
      <a className="items-center flex flex-row w-full h-full" target="_blank" href={action}>
        {logo}
        <span className="hidden md:block">{text}</span>
      </a>
    </li>
  )
}

export const ConsoleButton = ({ number, text }) => {
  return(
    <li className="py-5 px-5 flex flex-row items-center hover:bg-gray-900">
      <span className="rounded-full bg-white text-black md:px-1 px-1 text-2xl mr-5">
        { number }
      </span>

      { text }
    </li>
  )
}