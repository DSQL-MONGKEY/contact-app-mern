import { PropTypes } from "prop-types"

export const Button = (props) => {
   const className=[props.className]

   if(props.editButton) return (
         <button className={`bg-blue-300 px-3 py-1 rounded mx-2 hover:bg-blue-400 ${className.join(" ")}`}>
            Edit
         </button>
      )
   if(props.deleteButton) return (
         <button className={`bg-red-500 px-3 py-1 rounded mx-2 hover:bg-red-600 ${className.join(" ")}`}>
            Delete
         </button>
      )
   if(props.saveButton) return (
         <button className={`bg-green-500 px-3 py-1 rounded mx-2 hover:bg-green-600 shadow-md ${className.join(' ')}`}>
         {props.children}
         </button>
      )
}

Button.propTypes = {
   editButton: PropTypes.bool,
   deleteButton: PropTypes.bool,
   saveButton: PropTypes.bool,
   children: PropTypes.string,
   className: PropTypes.string
}
