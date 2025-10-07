export const NavButton = ({ extraStyle, text, action }) => {
  return (
    <button onClick={ () => action } className={ `mr-1 px-2 py-1 transition-all hover:bg-blue-600 rounded cursor-pointer bg-blue-400 ${extraStyle}` }> { text }</button>
  )
}