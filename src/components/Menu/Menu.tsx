import MenuItem from "./MenuItem";
import { useState } from "react"; 

export default function Menu() {
  const [activeItem, setActiveItem] = useState<string>("Your Dream");
  const items = [
    {
      title: "Your Dream",
      to: "/"
    },
    {
      title: "Services",
      to: "about"
    },
    {
      title: "About",
      to: "about"
    },
    {
      title: "Contact Us",
      to: "contact"
    }
  ]
  return (
      <div className="hidden md:flex items-center space-x-1">
        {items.map(item => (
          <MenuItem title={item.title} to={item.to} active={activeItem === item.title} onClick={() => setActiveItem(item.title)}/>  
        ))} 
      </div>
    );
}