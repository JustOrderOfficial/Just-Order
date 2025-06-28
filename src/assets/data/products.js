import blackHoodie1 from "/assets/images/t_shirts/BlackHoodie.png";
import blackHoodie2 from "/assets/images/t_shirts/hoodie.png";
import blackHoodie3 from "/assets/images/t_shirts/BlackHoodieWater.png";
import white_tshirt1 from "/assets/images/t_shirts/tshirt_white.jpg";
import white_tshirt2 from "/assets/images/t_shirts/White_hoodie.png";
import white_tshirt3 from "/assets/images/t_shirts/WhiteHoodieshadow.png";
import jacket from "/assets/images/t_shirts/Jacket.png";
import demin from "/assets/images/t_shirts/demin.jpg";
import graphic from "/assets/images/t_shirts/graphic.jpg";

const products = [
  {
    id: "prod001",
    name: "Classic Black Hoodie",
    category: "Hoodie",
    price: 1499,
    discount: 10,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    gender: "Unisex",
    tags: ["Best Seller"],
    inStock: true,
    rating: 4,
    reviews: 243,
    description: "A premium cotton hoodie with a soft inner lining. Perfect for casual wear.",
    fabric: "100% Cotton",
    fit: "Regular",
    gsm: "300",
    images: [blackHoodie1, blackHoodie2, blackHoodie3]
  },
  {
    id: "prod002",
    name: "Oversized White T-Shirt",
    category: "T-Shirt",
    price: 799,
    discount: 5,
    sizes: ["M", "L", "XL"],
    colors: ["White"],
    gender: "Women",
    tags: ["New Arrival"],
    inStock: true,
    rating: 5,
    reviews: 112,
    description: "Trendy oversized white tee made from organic cotton. Great for everyday style.",
    fabric: "Organic Cotton",
    fit: "Loose",
    gsm: "180",
    images: [white_tshirt1, white_tshirt2, white_tshirt3]
  },
  {
    id: "prod003",
    name: "Urban Bomber Jacket",
    category: "Jacket",
    price: 2199,
    discount: 20,
    sizes: ["M", "L", "XL"],
    colors: ["Olive Green"],
    gender: "Men",
    tags: ["Best Seller"],
    inStock: true,
    rating: 4,
    reviews: 87,
    description: "Stylish bomber jacket with ribbed cuffs and zip-up front.",
    fabric: "Polyester",
    fit: "Slim",
    gsm: "250",
    images: [jacket, blackHoodie2, blackHoodie3]
  },
  {
    id: "prod004",
    name: "Denim Jacket - Classic Blue",
    category: "Jacket",
    price: 1799,
    discount: 10,
    sizes: ["M", "L", "XL"],
    colors: ["Blue"],
    gender: "Men",
    tags: ["Best Seller"],
    inStock: true,
    rating: 4,
    reviews: 64,
    description: "Classic blue denim jacket with button-up front and chest pockets.",
    fabric: "Denim",
    fit: "Regular",
    gsm: "350",
    images: [demin, blackHoodie2, blackHoodie3]
  },
  {
    id: "prod005",
    name: "Graphic Tee - Abstract Design",
    category: "T-Shirt",
    price: 999,
    discount: 0,
    sizes: ["S", "M", "L"],
    colors: ["Beige"],
    gender: "Unisex",
    tags: ["New Arrival"],
    inStock: true,
    rating: 3,
    reviews: 29,
    description: "Unique abstract print tee made with soft cotton fabric.",
    fabric: "Cotton",
    fit: "Regular",
    gsm: "200",
    images: [graphic, blackHoodie2, blackHoodie3]
  }
];

export default products;
