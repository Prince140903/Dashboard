import React, { useContext, useState } from "react";
import "./sidebar.css";

import { Button } from "@mui/material";
import { DynamicIcon } from "../../constants";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const Sidebar = () => {
  const [isActive, setisActive] = useState(0);
  const [isToggle, setIsToggle] = useState(false);

  const context = useContext(MyContext);

  const isOpenSM = (index) => {
    setisActive(index);
    setIsToggle(!isToggle);
  };

  return (
    <div className="sidebar">
      <ul className="mb-0">
        <li>
          <Button
            className={`w-100 ${
              isActive === 0 && isToggle === true ? "active" : ""
            }`}
            onClick={() => isOpenSM(0)}
          >
            <span className="icon">
              <DynamicIcon iconName="Dashboard" />
            </span>
            Dashboard
            <span className="arrow">
              <DynamicIcon iconName="KeyboardArrowRight" />
            </span>
          </Button>
        </li>
        <li>
          <Button
            className={`w-100 ${
              isActive === 1 && isToggle === true ? "active" : ""
            }`}
            onClick={() => isOpenSM(1)}
          >
            <span className="icon">
              <DynamicIcon iconName="Layers" />
            </span>
            Products
            <span className="arrow">
              <DynamicIcon iconName="KeyboardArrowRight" />
            </span>
          </Button>
          <div
            className={`submenuWrapper ${
              isActive === 1 && isToggle === true ? "colapse" : "colapsed"
            }`}
          >
            <ul className="submenu">
              <li>
                <Link to={"#"}>Product List</Link>
              </li>
              <li>
                <Link to={"#"}>Product View</Link>
              </li>
              <li>
                <Link to={"#"}>Product Upload</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to={"/"}>
            <Button
              className={`w-100 ${
                isActive === 2 && isToggle === true ? "active" : ""
              }`}
              onClick={() => isOpenSM(2)}
            >
              <span className="icon">
                <DynamicIcon iconName="ShoppingCart" />
              </span>
              Orders
              <span className="arrow">
                <DynamicIcon iconName="KeyboardArrowRight" />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <Button
              className={`w-100 ${
                isActive === 3 && isToggle === true ? "active" : ""
              }`}
              onClick={() => isOpenSM(3)}
            >
              <span className="icon">
                <DynamicIcon iconName="Message" />
              </span>
              Messages
              <span className="arrow">
                <DynamicIcon iconName="KeyboardArrowRight" />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <Button
              className={`w-100 ${
                isActive === 4 && isToggle === true ? "active" : ""
              }`}
              onClick={() => isOpenSM(4)}
            >
              <span className="icon">
                <DynamicIcon iconName="Notifications" />
              </span>
              Notifications
              <span className="arrow">
                <DynamicIcon iconName="KeyboardArrowRight" />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <Button className="w-100">
              <span className="icon">
                <DynamicIcon iconName="Settings" />
              </span>
              Settings
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <Button className="w-100">
              <span className="icon">
                <DynamicIcon iconName="Notifications" />
              </span>
              Notifications
              <span className="arrow">
                <DynamicIcon iconName="KeyboardArrowRight" />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <Button className="w-100">
              <span className="icon">
                <DynamicIcon iconName="Notifications" />
              </span>
              Notifications
              <span className="arrow">
                <DynamicIcon iconName="KeyboardArrowRight" />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <Button className="w-100">
              <span className="icon">
                <DynamicIcon iconName="Notifications" />
              </span>
              Notifications
              <span className="arrow">
                <DynamicIcon iconName="KeyboardArrowRight" />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <Button className="w-100">
              <span className="icon">
                <DynamicIcon iconName="Notifications" />
              </span>
              Notifications
              <span className="arrow">
                <DynamicIcon iconName="KeyboardArrowRight" />
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to={"/"}></Link>
          <Button className="w-100">
            <span className="icon">
              <DynamicIcon iconName="Notifications" />
            </span>
            Notifications
            <span className="arrow">
              <DynamicIcon iconName="KeyboardArrowRight" />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <DynamicIcon iconName="Notifications" />
            </span>
            Notifications
            <span className="arrow">
              <DynamicIcon iconName="KeyboardArrowRight" />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <DynamicIcon iconName="Notifications" />
            </span>
            Notifications
            <span className="arrow">
              <DynamicIcon iconName="KeyboardArrowRight" />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <DynamicIcon iconName="Notifications" />
            </span>
            Notifications
            <span className="arrow">
              <DynamicIcon iconName="KeyboardArrowRight" />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <DynamicIcon iconName="Notifications" />
            </span>
            Notifications
            <span className="arrow">
              <DynamicIcon iconName="KeyboardArrowRight" />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <DynamicIcon iconName="Notifications" />
            </span>
            Notifications
            <span className="arrow">
              <DynamicIcon iconName="KeyboardArrowRight" />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <DynamicIcon iconName="Notifications" />
            </span>
            Notifications
            <span className="arrow">
              <DynamicIcon iconName="KeyboardArrowRight" />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <DynamicIcon iconName="Notifications" />
            </span>
            Notifications
            <span className="arrow">
              <DynamicIcon iconName="KeyboardArrowRight" />
            </span>
          </Button>
        </li>
      </ul>

      <br />

      <div className="logoutWrapper">
        <div className="logoutBox">
          <Button variant="contained">
            <DynamicIcon iconName="LogoutOutlined" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
