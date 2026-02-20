// ==========================================
// CocoaJoy – Product Data
// ==========================================

const PRODUCTS = [
  {
    id: 1, name: "Dark Chocolate Truffle Box", emoji: "🍫",
    price: 28.99, category: "artisanal", badge: "bestseller",
    rating: 4.9, reviews: 284,
    desc: "Handcrafted dark chocolate truffles with premium cocoa beans.",
    longDesc: "Experience the richness of our handcrafted dark chocolate truffles. Each piece is made with premium cocoa and care, delivering a luxurious chocolate experience.",
    features: ["Handcrafted truffles","Premium cocoa beans","Elegant packaging, perfect for gifts","Available in 6, 12, or 24-piece boxes"],
    sizes: ["6 Pieces","12 Pieces","24 Pieces"],
    colors: ["linear-gradient(135deg,#3b1a08,#6b3a2a)"],
    featured: true
  },
  {
    id: 2, name: "Milk Chocolate Caramel Bites", emoji: "🍬",
    price: 22.99, category: "artisanal", badge: "new",
    rating: 4.8, reviews: 156,
    desc: "Creamy milk chocolate with a smooth caramel centre.",
    longDesc: "Our milk chocolate caramel bites combine velvety smooth milk chocolate with a luscious caramel filling that melts on your tongue.",
    features: ["Soft caramel centre","Premium milk chocolate","Individually wrapped","12 pieces per box"],
    sizes: ["12 Pieces","24 Pieces"],
    colors: ["linear-gradient(135deg,#8b4513,#c47a3a)"],
    featured: true
  },
  {
    id: 3, name: "Vegan Chocolate Assortment", emoji: "🌱",
    price: 26.99, category: "vegan", badge: "vegan",
    rating: 4.7, reviews: 93,
    desc: "100% plant-based chocolates that taste absolutely divine.",
    longDesc: "Our vegan chocolate assortment proves that dairy-free doesn't mean flavour-free. Each piece is crafted with the finest plant-based ingredients.",
    features: ["100% plant-based","Gluten-free certified","No artificial additives","16 pieces assorted"],
    sizes: ["8 Pieces","16 Pieces","32 Pieces"],
    colors: ["linear-gradient(135deg,#1a3a1a,#2d6a2d)"],
    featured: true
  },
  {
    id: 4, name: "Seasonal Holiday Collection", emoji: "🌟",
    price: 34.99, category: "seasonal", badge: "seasonal",
    rating: 4.9, reviews: 207,
    desc: "Limited edition seasonal flavours and festive designs.",
    longDesc: "Celebrate any season with our exclusive holiday collection featuring limited edition flavours inspired by the world's finest seasonal ingredients.",
    features: ["Limited edition","Seasonal flavours","Festive packaging","20 pieces assorted"],
    sizes: ["10 Pieces","20 Pieces"],
    colors: ["linear-gradient(135deg,#2c1200,#7a4a10)"],
    featured: true
  },
  {
    id: 5, name: "Luxury Gift Box", emoji: "🎁",
    price: 49.99, category: "gift-boxes", badge: "bestseller",
    rating: 5.0, reviews: 342,
    desc: "An elegant assortment in our signature gold gift box.",
    longDesc: "Our signature luxury gift box presents a curated assortment of premium chocolates in an elegant gold-accented box perfect for any gifting occasion.",
    features: ["Signature gold gift box","Assorted premium chocolates","Personalised message card","Free ribbon wrapping"],
    sizes: ["24 Pieces","36 Pieces","48 Pieces"],
    colors: ["linear-gradient(135deg,#1a0e05,#5c3317)"],
    featured: true
  },
  {
    id: 6, name: "White Chocolate Rose Truffles", emoji: "🌹",
    price: 31.99, category: "artisanal", badge: "new",
    rating: 4.8, reviews: 78,
    desc: "Delicate white chocolate truffles with real rose petal dust.",
    longDesc: "A romantic indulgence — our white chocolate rose truffles are handcrafted with premium white chocolate and dusted with real rose petals.",
    features: ["Real rose petal dust","Premium white chocolate","Handcrafted","12 pieces in luxury box"],
    sizes: ["6 Pieces","12 Pieces"],
    colors: ["linear-gradient(135deg,#5a2a3a,#9a5060)"],
    featured: true
  },
  {
    id: 7, name: "Hazelnut Praline Collection", emoji: "🌰",
    price: 24.99, category: "artisanal", badge: "",
    rating: 4.7, reviews: 121,
    desc: "Crunchy hazelnut pralines wrapped in rich dark chocolate.",
    features: ["Roasted hazelnuts","Dark chocolate coating","Sea salt finish","18 pieces"],
    sizes: ["9 Pieces","18 Pieces"],
    colors: ["linear-gradient(135deg,#3d1a00,#7a3a10)"],
    featured: false
  },
  {
    id: 8, name: "Gluten-Free Chocolate Bark", emoji: "🍃",
    price: 18.99, category: "vegan", badge: "vegan",
    rating: 4.6, reviews: 64,
    desc: "Rich dark chocolate bark with fruits, nuts, and seeds.",
    features: ["Gluten-free","Mixed nuts and dried fruits","Dark chocolate base","200g slab"],
    sizes: ["200g","400g"],
    colors: ["linear-gradient(135deg,#1a3a1a,#4a7a3a)"],
    featured: false
  },
  {
    id: 9, name: "Mini Chocolate Birthday Box", emoji: "🎂",
    price: 38.99, category: "gift-boxes", badge: "bestseller",
    rating: 4.9, reviews: 189,
    desc: "Celebrate with a curated birthday box of premium chocolates.",
    features: ["Birthday themed packaging","Assorted chocolates","Add-on candle available","Free personalisation"],
    sizes: ["16 Pieces","24 Pieces"],
    colors: ["linear-gradient(135deg,#3b0a3b,#7a2a6a)"],
    featured: false
  },
  {
    id: 10, name: "Spiced Chilli Dark Chocolate", emoji: "🌶️",
    price: 19.99, category: "artisanal", badge: "limited",
    rating: 4.5, reviews: 44,
    desc: "Bold dark chocolate with a warming chilli kick.",
    features: ["85% cocoa dark chocolate","Natural chilli extract","Limited edition","8 pieces per box"],
    sizes: ["8 Pieces"],
    colors: ["linear-gradient(135deg,#4a0000,#8b1a00)"],
    featured: false
  },
  {
    id: 11, name: "Valentine's Heart Box", emoji: "❤️",
    price: 44.99, category: "seasonal", badge: "seasonal",
    rating: 5.0, reviews: 231,
    desc: "Heart-shaped luxury box filled with romance-inspired flavours.",
    features: ["Heart-shaped gift box","Rose & raspberry truffles","Gold-leaf finishing","20 pieces"],
    sizes: ["10 Pieces","20 Pieces"],
    colors: ["linear-gradient(135deg,#5a0a1a,#a0203a)"],
    featured: false
  },
  {
    id: 12, name: "Coffee Chocolate Infusion", emoji: "☕",
    price: 23.99, category: "artisanal", badge: "",
    rating: 4.8, reviews: 97,
    desc: "Bold espresso-infused chocolates for the coffeeholic.",
    features: ["Single-origin espresso","Dark and milk chocolate blend","12 pieces","Compostable packaging"],
    sizes: ["12 Pieces","24 Pieces"],
    colors: ["linear-gradient(135deg,#2a1a0a,#5a3a2a)"],
    featured: false
  }
];

const BLOG_POSTS = [
  { id:1, title:"How to Pair Chocolate with Wine", emoji:"🍷", category:"Lifestyle", date:"Feb 10, 2025", read:"5 min", excerpt:"Discover the perfect wine and chocolate pairings to elevate your tasting experience.", color:"linear-gradient(135deg,#4a1a2a,#8b3050)" },
  { id:2, title:"Easy Homemade Chocolate Recipes", emoji:"🍳", category:"Recipes", date:"Jan 28, 2025", read:"7 min", excerpt:"From truffles to hot cocoa, our test kitchen shares favourite at-home chocolate recipes.", color:"linear-gradient(135deg,#3b1a08,#6b3a2a)" },
  { id:3, title:"The Art of Gift-Worthy Chocolates", emoji:"🎨", category:"Gifting", date:"Jan 15, 2025", read:"4 min", excerpt:"Learn how professional chocolatiers design gift boxes that wow every recipient.", color:"linear-gradient(135deg,#1a0e05,#5c3317)" },
  { id:4, title:"Vegan Chocolate Delights", emoji:"🌱", category:"Lifestyle", date:"Dec 20, 2024", read:"6 min", excerpt:"Busting myths about vegan chocolate — it's richer, smoother, and more ethical.", color:"linear-gradient(135deg,#1a3a1a,#2d5a27)" },
  { id:5, title:"Holiday Chocolate Ideas & Gifting Guides", emoji:"🎄", category:"Gifting", date:"Dec 5, 2024", read:"5 min", excerpt:"Our top holiday chocolate ideas, from advent calendars to premium gift sets.", color:"linear-gradient(135deg,#2c1200,#7a4a10)" },
  { id:6, title:"Benefits of Dark Chocolate", emoji:"❤️", category:"Wellness", date:"Nov 18, 2024", read:"4 min", excerpt:"Science-backed reasons why a piece of premium dark chocolate a day is good for you.", color:"linear-gradient(135deg,#1a0800,#5c2a0e)" },
  { id:7, title:"Chocolate Tasting: A Beginner's Guide", emoji:"🍫", category:"Education", date:"Nov 1, 2024", read:"8 min", excerpt:"Develop your palate and learn to identify cocoa origins, flavour notes, and textures.", color:"linear-gradient(135deg,#3d1a00,#6b3010)" },
  { id:8, title:"Seasonal Flavors to Try This Year", emoji:"🍂", category:"Trends", date:"Oct 22, 2024", read:"4 min", excerpt:"Autumn spice, winter berry, spring citrus — our seasonal flavour calendar revealed.", color:"linear-gradient(135deg,#3a1a00,#7a3a0a)" },
  { id:9, title:"Behind the Scenes: Crafting CocoaJoy", emoji:"🏭", category:"Story", date:"Oct 10, 2024", read:"6 min", excerpt:"A rare look inside our artisan kitchen where every truffle is made by hand.", color:"linear-gradient(135deg,#1a0800,#4a1a0a)" }
];
