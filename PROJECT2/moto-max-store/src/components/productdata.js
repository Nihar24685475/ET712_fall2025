import H1 from "../img/H1.png";
import H2 from "../img/H2.JPG";
import H3 from "../img/H3.png";
import H4 from "../img/H4.png";
import H5 from "../img/H5.png";
import H6 from "../img/H6.png";
import H7 from "../img/H7.png";
import H8 from "../img/H8.png";
import H9 from "../img/H9.png";
import J1 from "../img/J1.png";
import J2 from "../img/J2.png";
import J3 from "../img/J3.png";
import J4 from "../img/J4.png";
import J5 from "../img/J5.png";
import J6 from "../img/J6.png";
import J7 from "../img/J7.png";
import J8 from "../img/J8.png";
import J9 from "../img/J9.png";
import G1 from "../img/G1.png";
import G2 from "../img/G2.png";
import G3 from "../img/G3.png";
import G4 from "../img/G4.png";
import G5 from "../img/G5.png";
import G6 from "../img/G6.png";
import G7 from "../img/G7.png";
import G8 from "../img/G8.png";
import G9 from "../img/G9.png";
import B1 from "../img/B1.png";
import B2 from "../img/B2.png";
import B3 from "../img/B3.png";
import B4 from "../img/B4.png";
import B5 from "../img/B5.png";
import B6 from "../img/B6.png";
import B7 from "../img/B7.png";
import B8 from "../img/B8.png";
import B9 from "../img/B9.png";






const productData = [
  {
    id: 1,
    name: "Shoei RF-1400",
    price: 299,
    img: H1,
    category: "helmets",
    description:
      "Premium full-face racing helmet designed for maximum protection, comfort, and aerodynamic performance at high speeds.",
  },
  {
    id: 2,
    name: "AGV Pista GP RR Carbon Helmet",
    price: 1499,
    img: H2,
    category: "helmets",
    description: "MotoGP-level carbon helmet offering maximum protection and performance at high speeds."
  },
  {
    id: 3,
    name: "HJC RPHA 11 Pro",
    price: 399,
    img: H3,
    category: "helmets",
    description: "Lightweight racing helmet with excellent airflow and an aggressive design."
  },
  {
    id: 4,
    name: "Arai XD-4 Dual Sport Helmet",
    price: 769,
    img: H4,
    category: "helmets",
    description: "Premium dual-sport helmet ideal for both on-road and off-road adventures."
  },
  {
    id: 5,
    name: "Bell MX-9 Adventure MIPS",
    price: 229,
    img: H5,
    category: "helmets",
    description: "Affordable and durable adventure helmet equipped with MIPS brain protection."
  },
  {
    id: 6,
    name: "Scorpion EXO-AT950 Modular Adventure",
    price: 289,
    img: H6,
    category: "helmets",
    description: "Versatile modular helmet perfect for touring and adventure rides."
  },
  {
    id: 7,
    name: "LS2 Valiant II Modular Helmet",
    price: 259,
    img: H7,
    category: "helmets",
    description: "Flip-up modular helmet with a lightweight shell and Pinlock-ready visor."
  },
  {
    id: 8,
    name: "Fox Racing V1 Off-Road Helmet",
    price: 189,
    img: H8,
    category: "helmets",
    description: "Popular off-road helmet with proven safety and a comfortable interior fit."
  },
  {
    id: 9,
    name: "Troy Lee Designs SE4 Polyacrylite",
    price: 259,
    img: H9,
    category: "helmets",
    description: "Premium motocross helmet offering excellent airflow and lightweight construction."
  },



//   gloves


  {
    id: 10,
    name: "Alpinestars GP Pro R3 Racing Gloves",
    price: 249,
    img: G1,
    category: "gloves",
    description: "Full-gauntlet leather racing gloves with hard knuckle protection."
  },
  {
    id: 11,
    name: "Dainese Carbon 4 Leather Gloves",
    price: 199,
    img: G2,
    category: "gloves",
    description: "Durable leather gloves with carbon protection for sport riders."
  },
  {
    id: 12,
    name: "REV'IT! Summit 4 H2O Winter Gloves",
    price: 139,
    img: G3,
    category: "gloves",
    description: "Waterproof insulated gloves designed for cold-weather riding."
  },
  {
    id: 13,
    name: "Alpinestars SMX-2 Air Carbon V2",
    price: 79,
    img: G4,
    category: "gloves",
    description: "Lightweight street-riding gloves with carbon reinforcements."
  },
  {
    id: 14,
    name: "Klim Adventure GTX Gloves",
    price: 249,
    img: G5,
    category: "gloves",
    description: "Premium adventure-touring gloves with Gore-Tex waterproofing."
  },
  {
    id: 15,
    name: "Scorpion Klaw II Leather Gloves",
    price: 54,
    img: G6,
    category: "gloves",
    description: "Affordable and protective leather gloves for daily riders."
  },
  {
    id: 16,
    name: "Icon Hypersport Short Gloves",
    price: 95,
    img:G7,
    category: "gloves",
    description: "Aggressive sport gloves with TPU protection and airflow."
  },
  {
    id: 17,
    name: "Joe Rocket Wind Chill Winter Gloves",
    price: 99,
    img: G8,
    category: "gloves",
    description: "Insulated leather gloves perfect for cold morning rides."
  },
  {
    id: 18,
    name: "Fly Racing Cool Pro Mesh Gloves",
    price: 39,
    img: G9,
    category: "gloves",
    description: "Budget-friendly mesh gloves ideal for warm weather."
  },



// jackets



  {
    id: 19,
    name: "Alpinestars GP Plus R v3 Leather Jacket",
    price: 499,
    img: J1,
    category: "jackets",
    description: "Race-fit premium leather jacket with CE Level 2 armor."
  },
  {
    id: 20,
    name: "Dainese Racing 4 Perforated Jacket",
    price: 599,
    img:J2,
    category: "jackets",
    description: "High-end leather jacket with excellent airflow and protection."
  },
  {
    id: 21,
    name: "REV'IT! Tornado 3 Textile Jacket",
    price: 299,
    img:J3,
    category: "jackets",
    description: "Versatile 3-season textile jacket with waterproof liner."
  },
  {
    id: 22,
    name: "Alpinestars T-Jaws v3 Textile Jacket",
    price: 229,
    img: J4,
    category: "jackets",
    description: "Sport textile jacket offering lightweight CE protection."
  },
  {
    id: 23,
    name: "Klim Induction Mesh Jacket",
    price: 379,
    img: J5,
    category: "jackets",
    description: "Ultra-breathable mesh jacket built for hot climates."
  },
  {
    id: 24,
    name: "Joe Rocket Phoenix 5.0 Mesh Jacket",
    price: 169,
    img: J6,
    category: "jackets",
    description: "Budget-friendly mesh jacket with removable armor."
  },
  {
    id: 25,
    name: "Scorpion EXO SGS Textile Jacket",
    price: 219,
    img: J7,
    category: "jackets",
    description: "Comfortable textile jacket for touring and commuting."
  },
  {
    id: 26,
    name: "Icon Contra 2 Textile Jacket",
    price: 199,
    img: J8,
    category: "jackets",
    description: "Aggressive street-style jacket with durable textile material."
  },
  {
    id: 27,
    name: "Harley-Davidson Victory Lane Leather Jacket",
    price: 699,
    img: J9,
    category: "jackets",
    description: "Classic premium leather jacket for cruiser riders."
  },




// boots



   {
    id: 28,
    name: "Alpinestars SMX-6 v2 Racing Boots",
    price: 289,
    img: B1,
    category: "boots",
    description: "Top-rated sport riding boots offering maximum ankle protection."
  },
  {
    id: 29,
    name: "Dainese Torque 3 Out Boots",
    price: 399,
    img: B2,
    category: "boots",
    description: "Professional-grade racing boots with excellent ventilation."
  },
  {
    id: 30,
    name: "Sidi Adventure 2 Gore-Tex Boots",
    price: 424,
    img: B3,
    category: "boots",
    description: "Durable adventure-touring boots with Gore-Tex lining."
  },
  {
    id: 31,
    name: "TCX Street 3 WP Shoes",
    price: 159,
    img:B4,
    category: "boots",
    description: "Casual waterproof riding shoes with reinforced protection."
  },
  {
    id: 32,
    name: "REV'IT! Expedition H2O Boots",
    price: 499,
    img: B5,
    category: "boots",
    description: "Premium adventure boots engineered for harsh terrains."
  },
  {
    id: 33,
    name: "Forma Freccia Sport Boots",
    price: 269,
    img: B6,
    category: "boots",
    description: "Track-ready boots with ankle bracing and TPU protection."
  },
  {
    id: 34,
    name: "Fly Racing Maverik Boots",
    price: 149,
    img : B7,
    category: "boots",
    description: "Affordable and durable off-road motocross boots."
  },
  {
    id: 35,
    name: "Gaerne SG-12 Motocross Boots",
    price: 649,
    img: B8,
    category: "boots",
    description: "High-end MX boots trusted by pro motocross riders."
  },
  {
    id: 36,
    name: "Harley-Davidson Ranger Boots",
    price: 219,
    img: B9,
    category: "boots",
    description: "Classic cruiser boots with reinforced toe and heel."
  }

];

export default productData;
