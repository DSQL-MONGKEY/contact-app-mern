import { PropTypes } from "prop-types"

import { Link } from "react-router-dom"

export const Button = (props) => {
   const className=[props.className]

   if(props.editButton) return (
         <Link
         to={props.to}
         className={`bg-blue-300 px-3 py-1 rounded mx-2 hover:bg-blue-400 ${className.join(" ")}`}>
            {props.children}
         </Link>
      )
   if(props.deleteButton) return (
         <button 
         type={props.type}
         onClick={props.onClick}
         className={`bg-red-500 px-3 py-1 rounded mx-2 hover:bg-red-600 ${className.join(" ")}`}>
            {props.children}
         </button>
      )
   if(props.saveButton) return (
         <button
            type={props.type}
            className={`bg-green-500 px-3 py-1 rounded mx-2 hover:bg-green-600 shadow-md ${className.join(' ')}`}>
         {props.children}
         </button>
      )
}

Button.propTypes = {
   editButton: PropTypes.bool,
   deleteButton: PropTypes.bool,
   saveButton: PropTypes.bool,
   children: PropTypes.string,
   className: PropTypes.string,
   type: PropTypes.string,
   onClick: PropTypes.func,
   to: PropTypes.string
}
