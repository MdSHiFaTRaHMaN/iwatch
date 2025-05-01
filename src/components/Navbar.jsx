import React, { useEffect, useState } from "react";
import { Button, Dropdown, Menu, Drawer } from "antd";
import { FaAngleDown } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
 // Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Menu Items
  const productsMenu = (
    <Menu>
      <Menu.Item key="1" className="cursor-pointer text-[#797979]">
        Product 1
      </Menu.Item>
      <Menu.Item key="2" className="cursor-pointer text-[#797979]">
        Product 2
      </Menu.Item>
    </Menu>
  );
 // More Items
  const moreMenu = (
    <Menu>
      <Menu.Item key="1">About Us</Menu.Item>
      <Menu.Item key="2">Contact</Menu.Item>
    </Menu>
  );

  const openDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <header
      className={`px-4 py-5 fixed top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-100 py-3 shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`w-full lg:w-[1380px] px-0 lg:px-5 mx-auto flex items-center justify-between`}
      >
        <Link to="/">
          <div className="text-3xl font-bold text-teal-700">Reddy App</div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10 text-gray-600">
          <Link
            to="/"
            className="text-[#00878C] text-[16px] font-medium"
            href="#"
          >
            Home
          </Link>
          <Dropdown
            overlay={productsMenu}
            className="flex items-center text-[#797979] gap-1 cursor-pointer"
          >
            <span className="cursor-pointer flex items-center gap-1 font-medium">
              Products <FaAngleDown className="text-[#797979]" />
            </span>
          </Dropdown>
          <a href="#" className="text-[#797979] font-medium">
            Blog
          </a>
          <Dropdown
            overlay={moreMenu}
            className="flex items-center text-[#797979] gap-1 cursor-pointer"
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="cursor-pointer font-medium"
            >
              More <FaAngleDown className="text-[#797979]" />
            </a>
          </Dropdown>
          <a href="#" className="text-[#797979] font-medium">
            Careers
          </a>
          <Link to="/login" target="_blank">
            <Button
              shape="round"
              className="bg-teal-700 text-[14px] font-semibold border-none hover:!bg-teal-800 w-[120px] !text-white h-[44px]"
            >
              Login
            </Button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="block md:hidden">
          <Button icon={<LuMenu />} onClick={openDrawer} />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={visible}
      >
        <Link className="block mb-2 text-teal-700 font-medium" to="/">
          Home
        </Link>
        <Dropdown overlay={productsMenu} trigger={["click"]}>
          <a
            onClick={(e) => e.preventDefault()}
            className="mb-2 flex items-center font-medium text-[#797979] gap-1 cursor-pointer"
          >
            Products <FaAngleDown />
          </a>
        </Dropdown>
        <a className="block mb-2 text-[#797979] font-medium" href="#">
          Blog
        </a>
        <Dropdown overlay={moreMenu} trigger={["click"]}>
          <a
            onClick={(e) => e.preventDefault()}
            className="mb-2 flex items-center text-[#797979] font-medium gap-1 cursor-pointer"
          >
            More <FaAngleDown />
          </a>
        </Dropdown>
        <a className="block mb-4 text-[#797979] font-medium" href="#">
          Careers
        </a>
        <Link to="/login" target="_blank">
          <Button
            type="primary"
            shape="round"
            className="bg-teal-700 border-none w-full"
          >
            Login
          </Button>
        </Link>
      </Drawer>
    </header>
  );
};

export default Navbar;
