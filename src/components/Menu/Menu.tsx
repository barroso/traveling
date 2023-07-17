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
      to: "services"
    },
    {
      title: "About",
      to: "about"
    },
    {
      title: "Contact",
      to: "contact"
    }
  ]
  return (
      <div className="hidden md:flex items-center space-x-1">
        {items.map((item, index) => (
          <MenuItem key={index} title={item.title} to={item.to} active={activeItem === item.title} onClick={() => setActiveItem(item.title)}/>  
        ))} 
      </div>
    );
}