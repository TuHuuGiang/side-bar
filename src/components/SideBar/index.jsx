import user from "../../assets/img/account.jpg";

import { nav } from "./nav";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <ul className="nav">
          <img className="user" src={user} alt="user" />
          {nav.map((item) => (
            <li>
              <NavLink to={item.path}>
                <i className={item.icon}></i>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
