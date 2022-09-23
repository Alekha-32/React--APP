import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFun, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="ButtonCenter">
    <button
      type="button"
      onClick={() => customFun()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    SetIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleScreenSize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleScreenSize);
    handleScreenSize();
    return () => window.removeEventListener("resize", handleScreenSize);
  }, []);
  useEffect(() => {
    if (screenSize <= 900) {
      setScreenSize(false);
    } else {
      setScreenSize(true);
    }
  }, [screenSize]);
  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFun={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="bule"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="chat"
          dotColor="#03C9D7"
          // eslint-disable-next-line no-undef
          customFun={() => handleClick("chat")}
          color="bule"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Cart"
          // eslint-disable-next-line no-undef
          customFun={() => handleClick("cart")}
          color="bule"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          // eslint-disable-next-line no-undef
          customFun={() => handleClick("notification")}
          color="bule"
          icon={<RiNotification3Line />}
        />
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick("userProfile")}
        >
          <img className="rounded-full w-8 h-8" src={avatar} alt="avatar" />
          <p>
            <span className="text-gray-400 text-14">Hi, </span>
            {""}
            <span className="text-gray-400 font-bold ml-1 text-14">Alekha</span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
        <TooltipComponent />
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
