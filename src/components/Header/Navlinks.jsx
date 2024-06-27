import { NavLink } from "react-router-dom";

export default function Navlinks(props) {
  return (
<li> <NavLink className= "header__link" to={props.path}> {props.name}</NavLink></li>

  );
}


