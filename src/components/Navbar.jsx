import React, { useEffect, useState } from "react";
import { Button, Dropdown, Menu, Drawer } from "antd";
import { FaAngleDown } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productsMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/products/1" className="text-[#797979]">Product 1</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/products/2" className="text-[#797979]">Product 2</Link>
      </Menu.Item>
    </Menu>
  );

  const moreMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/about" className="text-[#797979]">About Us</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/contact" className="text-[#797979]">Contact</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-0 py-7 ${
        isScrolled ? "bg-white shadow-md !py-4" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-4xl font-bold text-teal-700">
          Reddy App
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="text-[#00878C]">Home</Link>

          <Dropdown overlay={productsMenu}>
            <span className="cursor-pointer flex items-center gap-1 text-[#797979]">
              Products <FaAngleDown />
            </span>
          </Dropdown>

          <Link to="/blog" className="text-[#797979]">Blog</Link>

          <Dropdown overlay={moreMenu}>
            <span className="cursor-pointer flex items-center gap-1 text-[#797979]">
              More <FaAngleDown />
            </span>
          </Dropdown>

          <Link to="/careers" className="text-[#797979]">Careers</Link>

          <Link to="/login" target="_blank">
            <Button
              shape="round"
              className="bg-teal-700 text-white font-semibold border-none hover:!bg-teal-800 px-5 h-[40px]"
            >
              Login
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            icon={<LuMenu className="text-xl" />}
            type="text"
            onClick={() => setVisible(true)}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
      >
        <Link className="block mb-3 text-teal-700 font-medium" to="/" onClick={() => setVisible(false)}>
          Home
        </Link>
        <Dropdown overlay={productsMenu} trigger={["click"]}>
          <span className="block mb-3 text-[#797979] font-medium cursor-pointer flex items-center gap-1">
            Products <FaAngleDown />
          </span>
        </Dropdown>
        <Link className="block mb-3 text-[#797979]" to="/blog" onClick={() => setVisible(false)}>
          Blog
        </Link>
        <Dropdown overlay={moreMenu} trigger={["click"]}>
          <span className="block mb-3 text-[#797979] font-medium cursor-pointer flex items-center gap-1">
            More <FaAngleDown />
          </span>
        </Dropdown>
        <Link className="block mb-4 text-[#797979]" to="/careers" onClick={() => setVisible(false)}>
          Careers
        </Link>
        <Link to="/login" target="_blank">
          <Button
            type="primary"
            shape="round"
            className="bg-teal-700 w-full"
          >
            Login
          </Button>
        </Link>
      </Drawer>
    </header>
  );
};

export default Navbar;
