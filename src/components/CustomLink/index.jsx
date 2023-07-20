import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";



const CustomLink = ({ href, title, className}) => {

    return (
    <div className={`flex items-center relative `}>
        <div className="flex group-hover:w-full  rounded-md  hover:bg-slate-200 relative ">
      <motion.li
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={`${className} relative group w-10 mx-10`}
      
    >
        
      <NavLink
       
        to={href}
      >
        {title}
        <span
          className={`h-[1px] inline-block  color-primary  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 `}
        >
          &nbsp;
        </span>
      
      </NavLink>
      
    </motion.li></div>
   
  </div>
    );
  };
  
  export default CustomLink