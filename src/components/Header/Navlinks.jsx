export default function Navlinks(props) {
  return (
    <li >
      <a className="header__link" href="#">
        {props.title}
      </a>
    </li>
  );
}
