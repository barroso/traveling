import { Link } from "react-router-dom";

interface IProps {
  title: string;
  to: string;
}

const MenuItem = ({ title, to }: IProps) => {
  // const activeClass = "border-blue-500 border-b-4å";
  return (
    <Link
      to={to}
      className="py-4 px-2 text-blue-500 font-semibold">
      {title}
    </Link>
  );
};

export default MenuItem;
