import blackHoodie1 from "../t_shirts/blackHoodie.png";
import blackHoodie2 from "../t_shirts/hoodie.png";
import blackHoodie3 from "../t_shirts/BlackHoodiewater.png";
import white_tshirt1 from "../t_shirts/tshirt_white.jpg";
import white_tshirt2 from "../t_shirts/white_hoodie.png";
import white_tshirt3 from "../t_shirts/WhiteHoodieshadow.png";
import jacket from "../t_shirts/Jacket.png";
import demin from "../t_shirts/demin.jpg";
import graphic from "../t_shirts/graphic.jpg";
const products = [
  {
    "id": "prod001",
    "name": "Classic Black Hoodie",
    "category": "Hoodie",
    "price": 1499,
    "discount": 10,
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Black"],
    "gender": "Unisex",
    "tags": ["Best Seller"],
    "inStock": true,
    "description": "A premium cotton hoodie with a soft inner lining. Perfect for casual wear.",
    "images": [
      blackHoodie1,
      blackHoodie2,
      blackHoodie3
    ]
  },
  {
    "id": "prod002",
    "name": "Oversized White T-Shirt",
    "category": "T-Shirt",
    "price": 799,
    "discount": 5,
    "sizes": ["M", "L", "XL"],
    "colors": ["White"],
    "gender": "Women",
    "tags": ["New Arrival"],
    "inStock": true,
    "description": "Trendy oversized white tee made from organic cotton. Great for everyday style.",
    "images": [
      white_tshirt1,
      white_tshirt2,
      white_tshirt3
    ]
  },

  {
    "id": "prod003",
    "name": "Urban Bomber Jacket",
    "category": "Jacket",
    "price": 2199,
    "discount": 20,
    "sizes": ["M", "L", "XL"],
    "colors": ["Olive Green"],
    "gender": "Men",
    "tags": ["Best Seller"],
    "inStock": true,
    "description": "Stylish bomber jacket with ribbed cuffs and zip-up front.",
    "images": [
      jacket,
      blackHoodie2,
      blackHoodie3
    ]
  },
  {
    "id": "prod004",
    "name": "Denim Jacket - Classic Blue",
    "category": "Jacket",
    "price": 1799,
    "discount": 10,
    "sizes": ["M", "L", "XL"],
    "colors": ["Blue"],
    "gender": "Men",
    "tags": ["Best Seller"],
    "inStock": true,
    "description": "Classic blue denim jacket with button-up front and chest pockets.",
    "images": [
      demin,
      blackHoodie2,
      blackHoodie3
    ]
  },
  {
    "id": "prod005",
    "name": "Graphic Tee - Abstract Design",
    "category": "T-Shirt",
    "price": 999,
    "discount": 0,
    "sizes": ["S", "M", "L"],
    "colors": ["Beige"],
    "gender": "Unisex",
    "tags": ["New Arrival "],
    "inStock": true,
    "description": "Unique abstract print tee made with soft cotton fabric.",
    "images": [
      graphic,
      blackHoodie2,
      blackHoodie3
    ]
  }
]

export default products;
