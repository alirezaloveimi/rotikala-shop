// all icons
import { icons } from "./Icons";

export const menuItems = [
  { id: 1, text: "Home", icon: icons.home, to: "/" },
  { id: 2, text: "All Products", icon: icons.fire, to: "/products" },
  { id: 3, text: "Why Rotikala ?", icon: icons.menuSearch, to: "" },
  { id: 4, text: "Help Shop", icon: icons.device, to: "" },
  { id: 5, text: "About Us", icon: icons.shop, to: "" },
  { id: 6, text: "Call Us", icon: icons.call, to: "" },
  { id: 7, text: "Information", icon: icons.info, to: "" },
];

export const imageItems = [
  { id: 8, src: "/images/main-slider-1.jpg" },
  { id: 9, src: "/images/main-slider-2.jpg" },
  { id: 10, src: "/images/main-slider-3.jpg" },
];

export const allProducts = [
  {
    id: 11,
    name: "Men Shoe Nike Model Best In 2021",
    img: "/images/p1.png",
    price: 185000,
    colors: ["black", "gray", "white"],
    sizes: [40, 41, 42],
  },
  {
    id: 12,
    name: "Men Shoe Nike Model Best In 2023",
    img: "/images/p2.png",
    price: 300000,
    colors: ["black", "gray", "white"],
    sizes: [40, 41, 42],
  },
  {
    id: 13,
    name: "Man Shoe Addidas Model Best In 2012",
    img: "/images/p3.png",
    price: 190000,
    colors: ["black", "gray", "white"],
    sizes: [40, 41, 42],
  },
  {
    id: 14,
    name: "Woman Shoe Nike Model Best In 2020",
    img: "/images/p4.png",
    price: 134000,
    colors: ["black", "gray", "white"],
    sizes: [40, 41, 42],
  },
  {
    id: 15,
    name: "Men Shoe Addidas Model Best In 2019",
    img: "/images/p5.png",
    price: 515000,
    colors: ["black", "gray", "white"],
    sizes: [40, 41, 42],
  },
  {
    id: 16,
    name: "Women Bag NY Model Best In 2021",
    img: "/images/p6.png",
    price: 50000,
    colors: ["black", "gray", "white"],
    sizes: ["sm", "md", "lg"],
  },
  {
    id: 17,
    name: "Women Bag Ck Model Best In 2024",
    img: "/images/p7.png",
    price: 200000,
    colors: ["black", "gray", "white"],
    sizes: ["sm", "md", "lg"],
  },
  {
    id: 18,
    name: "Women Bag Qc Model Best In 2010",
    img: "/images/p8.png",
    price: 125000,
    colors: ["black", "gray", "white"],
    sizes: ["sm", "md", "lg"],
  },
];

export const categorysType = [
  { id: 19, name: "Men's Bag", img: "/images/c6.jpg" },
  { id: 20, name: "Men's Sport Shoe", img: "/images/c3.jpg" },
  { id: 21, name: "Men's Socks", img: "/images/c1.jpg" },
  { id: 22, name: "Women's Bag", img: "/images/c5.jpg" },
  { id: 23, name: "Women's Sport Shoe", img: "/images/c4.jpg" },
  { id: 24, name: "Women's Socks", img: "/images/c2.jpg" },
];

export const inputs = [
  {
    id: 25,
    name: "fullName",
    placeholder: "Enter Your Full Name",
    label: "Full Name",
    type: "text",
  },
  {
    id: 26,
    name: "email",
    placeholder: "Enter Your Email",
    label: "Email",
    type: "text",
  },
  {
    id: 27,
    name: "password",
    placeholder: "Enter Your Password",
    label: "Password",
    type: "password",
  },
];

export const dashboardSidebarItems = [
  { id: 28, text: "Panel", to: "panel", icon: icons.dashboard },
  { id: 29, text: "Messages", icon: icons.message },
  { id: 30, text: "Notifacation", icon: icons.notification },
  { id: 31, text: "Address", icon: icons.address },
  { id: 32, text: "Last Update", icon: icons.update },
  { id: 33, text: "Profile", to: "profile", icon: icons.edit },
];
