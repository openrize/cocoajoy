// ==========================================
// CocoaJoy – Product Data
// ==========================================

const PRODUCTS = [
{
    id: 1, name: "Dark Chocolate Truffle Box", emoji: "🍫",
    price: 52.18, category: "artisanal", badge: "bestseller",
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
    price: 41.38, category: "artisanal", badge: "new",
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
    price: 48.58, category: "vegan", badge: "vegan",
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
    price: 62.98, category: "seasonal", badge: "seasonal",
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
    price: 89.98, category: "gift-boxes", badge: "bestseller",
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
    price: 57.58, category: "artisanal", badge: "new",
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
    price: 44.98, category: "artisanal", badge: "",
    rating: 4.7, reviews: 121,
    desc: "Crunchy hazelnut pralines wrapped in rich dark chocolate.",
    features: ["Roasted hazelnuts","Dark chocolate coating","Sea salt finish","18 pieces"],
    sizes: ["9 Pieces","18 Pieces"],
    colors: ["linear-gradient(135deg,#3d1a00,#7a3a10)"],
    featured: false
  },
  {
    id: 8, name: "Gluten-Free Chocolate Bark", emoji: "🍃",
    price: 34.18, category: "vegan", badge: "vegan",
    rating: 4.6, reviews: 64,
    desc: "Rich dark chocolate bark with fruits, nuts, and seeds.",
    features: ["Gluten-free","Mixed nuts and dried fruits","Dark chocolate base","200g slab"],
    sizes: ["200g","400g"],
    colors: ["linear-gradient(135deg,#1a3a1a,#4a7a3a)"],
    featured: false
  },
  {
    id: 9, name: "Mini Chocolate Birthday Box", emoji: "🎂",
    price: 70.18, category: "gift-boxes", badge: "bestseller",
    rating: 4.9, reviews: 189,
    desc: "Celebrate with a curated birthday box of premium chocolates.",
    features: ["Birthday themed packaging","Assorted chocolates","Add-on candle available","Free personalisation"],
    sizes: ["16 Pieces","24 Pieces"],
    colors: ["linear-gradient(135deg,#3b0a3b,#7a2a6a)"],
    featured: false
  },
  {
    id: 10, name: "Spiced Chilli Dark Chocolate", emoji: "🌶️",
    price: 35.98, category: "artisanal", badge: "limited",
    rating: 4.5, reviews: 44,
    desc: "Bold dark chocolate with a warming chilli kick.",
    features: ["85% cocoa dark chocolate","Natural chilli extract","Limited edition","8 pieces per box"],
    sizes: ["8 Pieces"],
    colors: ["linear-gradient(135deg,#4a0000,#8b1a00)"],
    featured: false
  },
  {
    id: 11, name: "Valentine's Heart Box", emoji: "❤️",
    price: 80.98, category: "seasonal", badge: "seasonal",
    rating: 5.0, reviews: 231,
    desc: "Heart-shaped luxury box filled with romance-inspired flavours.",
    features: ["Heart-shaped gift box","Rose & raspberry truffles","Gold-leaf finishing","20 pieces"],
    sizes: ["10 Pieces","20 Pieces"],
    colors: ["linear-gradient(135deg,#5a0a1a,#a0203a)"],
    featured: false
  },
  {
    id: 12, name: "Coffee Chocolate Infusion", emoji: "☕",
    price: 43.18, category: "artisanal", badge: "",
    rating: 4.8, reviews: 97,
    desc: "Bold espresso-infused chocolates for the coffeeholic.",
    features: ["Single-origin espresso","Dark and milk chocolate blend","12 pieces","Compostable packaging"],
    sizes: ["12 Pieces","24 Pieces"],
    colors: ["linear-gradient(135deg,#2a1a0a,#5a3a2a)"],
    featured: false
  },
  {
    id: 13,
    name: "Rose Vibrator for Women Wholesale Custom logo Clitoralis Stimulator Sucking Adult Toys Rose Sucking Vibrator Sex Toys for Woman",
    price: 4.59,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5de8f956cb324f8da075ff75d317714fA.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 14,
    name: "USB Charging 10 Vibration Vibrating Sleeve Vagina G Spot Clitoral Massager Couple Flirting Lesbian Woman Finger Vibrators",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0253f16c0bf5478d83905f0bc10b68dec.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 15,
    name: "Adult Sex Toys Dildo Sex Toy OEM Male Penis Delay Ring Ejaculation Long Time Lasting Silicone Vibrating Cock Ring for Men",
    price: 7.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/HTB16VhuajLuK1Rjy0Fhq6xpdFXag.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 16,
    name: "Adult Products Female Adult Products Sex Toys Vibration Massage Heating Multi-frequency Vibration Female Care",
    price: 14.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1e125a12057b491294bd9ab08f9e2a63x.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 17,
    name: "AI Intelligent Robot Real Solid Silicone Body Remote Control Lifelike First-hand Source",
    price: 1179,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd2ea88e34dba4074b640d919ee573915X.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 18,
    name: "Adult Women Sex Toys Vibrators Random Naughty Items and Fun Designs in Blind Boxes for Exciting Spicy Surprises",
    price: 50.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H749b86c736ca4b8fad7ba942848c49f8B.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 19,
    name: "Hot Sale Fashion Simple Fresh Flexible Head Adult Toys AV Wand Massage Sex Adult Vibrator for Women",
    price: 11.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H50764e3ea7ff4ea59fe676b367802365S.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 20,
    name: "Sex Sofa Chair Inflatable BDSM Bondage Automatic Air Pump for Position Support Bed Pillow Sex Toys Ramp Couples SM Games Adults",
    price: 89.98,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H61cfb1976c5b46c39d3eb5bfafdc86aaF.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 21,
    name: "Men's Gifts Male Chastity Cage Sex Toys Cock Cage Bondage Gear for Penis Exercise Control, Adult Toys for Men Beginners (Pink)",
    price: 43.88,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0a06f9039c244aabbadcf46b7a654fae3.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 22,
    name: "Cactus Shape Vibrator Massager for Women Waterproof Adult Massage Wand with Multiple Vibration Modes for Personal and Couple Use",
    price: 6.3,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H05c4243a61d54e3b90428c6d887366faO.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 23,
    name: "OEM Hot Sale Adult Vibrator Sex Toys Big Sex Machine Anal Plug Dildos for Women Vibrating Thrusting",
    price: 5.83,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4e66e166268a48f49b4d68bfb04f0650Y.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 24,
    name: "10 Modes Electric Nipple Clamp Breast Massage Vibrator Enhancer Bondage Adult Stimulator Sex Toys for Women Couples Female",
    price: 15.05,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0499656f631844568d938b963c70e429c.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 25,
    name: "Wholesale Sex Toy for Women Clitoral Vibrator love Toys Adult Toy Wand Massager Sextoys Adult Products Juguetes Sexuales Massage",
    price: 3.55,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf83fcd4c78f142b1b2735ae3db90ddcbh.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 26,
    name: "Adult Toys Dildo Vibrator Sex Toy Double Rod Masturbation Rabbit Vibrator Utensils Adult Sex Product Vibrator for Women",
    price: 3.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Af15b84c6a6d9439e9aeb8fbb5709bec1q.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 27,
    name: "Hot Selling Female Massage Vibrator Adult Sex Product USB Rechargeable 20 Frequency Vibration 8 Speed Adjustment Masturbation",
    price: 3.15,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3fbd977622154399ba904e71b26acbd3v.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 28,
    name: "Goods for Adults Products Sextoy for Women 2 in 1 Dildo Lesbian Sucking Wand Vibrator Sex Toys for Woman",
    price: 14.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb574ec4719764334850263496cd1b87ep.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 29,
    name: "Rechargeable Adult Toys Adult Sensory Toys for Women - Female Sex Pleasure Devices Powerful Tongue and Licking G Toys",
    price: 7.02,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3115a4e74ed547e2a6f756696ebfa30dJ.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 30,
    name: "Wireless Adult Sex Toys 10 Speeds Shine Flirting Cushion for Egg Massager Underwear Panty Vibrator Sex Toy for Lover Games",
    price: 4.61,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha61ac763255743cdbae0e4bf4c8ab1e6J.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 31,
    name: "Hot Toys Adult Sex Toy Women Silicone Vagina Massage Vibrator with 10-Speed Vibration USB Rechargeable",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4b1d5fefde0f4d47b28e7023510321f5U.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 32,
    name: "Wholesale Adult Sex Toys Clitoral Vibrator Adult Toy Silicone Sextoys AV Wand Massager Adult Products Juguetes Sexuales Vibrator",
    price: 10.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha9893f78c0984b149fcb0c456efa464eX.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 33,
    name: "Wholesale Adult Fun Toys Erotic Magic Wand Massager Silicone Vibrator Sex Toys for Woman",
    price: 11.18,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Habdcf9445fa0454eaf23e688dfe2dff1f.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 34,
    name: "Adult Products for Women Full Body Massager Rabbit Vibrator Sex Masturbator",
    price: 11.16,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5b64e43c23a44a9894a3fc1250569f8dK.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 35,
    name: "Adult Game SM Sex Toys 7-26 Set Restraint Handcuffs & Plush Bondage BDSM Couple Sex Dildo & Anal Plug for Women",
    price: 7.18,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8705e08dc3f44e2cbfead4b9b45ea825m.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 36,
    name: "Factory Wholesale Sexy Erotic Multi Power Long-term Operation Strong Vibration Adult Sex Toy Vibrator",
    price: 24.3,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H361be2a92cce44e08079b32c83834f75V.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 37,
    name: "Men Masturbation Toys Adult Product Adult Toy Realistic Skin-like Butt Model Silicone Masturbation Sex Toys",
    price: 7.25,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H14fc46cec8724194b132c832002f99074.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 38,
    name: "USB Charging Adult Sex Vibrator Toy for Women 12 Vibration Levels",
    price: 23.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H54d4d013cda74b0d9054cbeff2d459e5s.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 39,
    name: "Bestselling Adult Toys Model Silicone Sexy Women Adult Toys Lightweight Ergonomic for Solo or Partner Use",
    price: 26.32,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb3fc4e4cdf0a4e1da27bd77ef728121bF.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 40,
    name: "High Quality Adult Sex Toys 12 Frequency Female Dildo Massager Breast Vagina Masturbator G-spot Vibrator Licking Vibrator",
    price: 7.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He6d8f5da14644ff2933ef43b3a4cff7ft.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 41,
    name: "Sex Toy Customize Adult Products G-spot Vibrator Sextoy Vaginal Vibrator Adult Toy Big Dildo Juguetes Sexuales Artificial Penis",
    price: 18.32,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H85eb731ba5ab481896511a49fd5e57baH.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 42,
    name: "Adult Sex Toys, Rose Sex Toy Couples Adult Toys Clitoral Stimulator, Sexual Pleasure Tools Clit Vibrators Womens Sex Toys",
    price: 7.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5bd70a552fc2434ab943c80787ce4527B.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 43,
    name: "Powerful Adult Masturbators AV Wand Vibrator Clitoris Stimulator Vibrator Massager Sex Toys Adult Vibrator Sex Toys for Women",
    price: 9.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H68632bc8f2194515a8b02dadc31c00288.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 44,
    name: "Ergonomic Design Adult Sex Toys Massager Anal Beads Vibrator 10 Frequency Vibrations Silicone Anal Plugs for Couples",
    price: 15.03,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1b2a93de5eed4d5a844df4da4ba85a2dP.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 45,
    name: "Adult Soft Silicone Sex Toys With 10 Functions Rabbit Vibrator for Woman Vagina G Spot Masturbation",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/HTB1ntd9LQPoK1RjSZKbq6x1IXXas.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 46,
    name: "Wholesale Adult Supplies Female Heating Rocking Dildo Masturbator Sex Toys Plug & Silicone ABS Material Penis Gun Adult Sex Toys",
    price: 23.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H24962ba3596e48a39f3329a98b83ac89H.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 47,
    name: "Smart Wearable Adult Anal Vibrator Adult Sex Toys App Controlled Silicone Big Butt Plug Sex Toys for Couples",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb07ab7be0df34921ba67a0e91b6e53a8X.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 48,
    name: "Remote Controlled Adult Sex Toy Clitoris Vaginal Stimulator Female Masturbator Adult Toys Wearing Vibrator for Woman",
    price: 23.38,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H972424158f4e44f5abd3fc65554dca8e8.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 49,
    name: "Adult Toys Sex Toys for Women with 10 Sucking 10 Thrusting Dildo G Spot Vibrators, Adult Sex Toys Games for Couples Pleasure",
    price: 21.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1801d1450a884b36830cd7bca41b2ed8e.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 50,
    name: "High Quality Adult Sex Silicone USB Rechargeable Penis Dildos G-Spot Vaginal Vibrators 10 Frequencies Daily Waterproof Female",
    price: 15.3,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha45d8904c51345ba90bb472980366de2Y.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 51,
    name: "Buy Exotic Wholesale Sex Adult Toys for Woman Couples Women Vagina OEM AV 2021 Sex Toy Vibrator Vibrating Massage Wand Massager",
    price: 6.62,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H38f8020339e34d0085bd4f08961f7059w.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 52,
    name: "Hot-selling Sex Toys for Adults Pocket Adult Toys Japanese Male Masturbator Vagina Toy for Man Sex Pussy",
    price: 3.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H27fa3f2e240e4eaa9fa440721855d89di.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 53,
    name: "Adult Products Sex Toys Female Masturbation Products Lesbian Vibrator Masturbator Dual Head Usable Stimulating Orgasmic Toys",
    price: 19.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H290ff4f9efa14dd69197605e13a051c0a.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 54,
    name: "Adult Novelty Sex Toys Clitoral Vibrator Sextoy Remote Control Vibrating Panties Adult Toy Vibrating Underwear",
    price: 15.66,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5e642fe6e1864df9afc2675f00ebc64a1.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 55,
    name: "Vibrator Adult Sex Toys for Women - Mouth Rose Vibrator New Design Finger Snapping Vibrator G Spot Clit Stimulator Pleasure Toy",
    price: 22.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2d8576df11834dc4b01dd28f98d8c0b9l.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 56,
    name: "Adult Products Vibrator Toys for Women G-Spot Rabbit Vibrator Dildo Vibrating Girl Masturbation",
    price: 9.36,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He7bc4aa254d644088e15e86e83e1d642A.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 57,
    name: "Adult Sex Toys Silicone Sx Sex Toy Vibrator For Women Category Of Vibrators",
    price: 19.08,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0366cb8ac0a4482aba06c4b685678b07k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 58,
    name: "Purple Sucking Adult Toy with 7 Sucking and Licking Modes for Women and Men",
    price: 7.79,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H324bb08e68764cb79da7b67982d14fffX.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 59,
    name: "Adult Sex Toys Vibrator, Adult Sex Toys & Games Couples Female Sex Toys for Womens Man",
    price: 18,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5db476fe381c4213813f550b1f5f9a12n.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 60,
    name: "Hot Selling 3 in 1 Double-Headed Tongue Licking Vibrators Silicone Rabbit Wand Powerful Female Dildo Vibrator Sex Toys for Women",
    price: 14.15,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H640d334e173d4f0baa9bc7c606c69c3b6.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 61,
    name: "Realistic Adult Masturbator Sex Toy for Men Premium Anal Gel Soft for Sexual Pleasure",
    price: 2.83,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4855b4138148440fb6b8c972ee0385f3I.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 62,
    name: "Medical Silicone Toy Thrusting G Spot Vagina Clitoral Thrusting Dildo Sex Toy for Couple Rabbit Vibrator Sex Toy for Women",
    price: 21.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/HTB1IQ2RajDuK1RjSszdq6xGLpXaW.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 63,
    name: "WholesaleToys for Adult Sex Vibrating Ring Cock Ring Vibrator Sex Toys for Male and Female Adult Sex Men Toy Masturbation",
    price: 1.75,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H82190cf1fec442a18999a9e857b6d60aB.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 64,
    name: "Sex Products Erotic Toys for Adults BDSM Sex Bondage Set Handcuffs Nipple Clamps Gag Whip Rope Sex Toys for Couples",
    price: 4.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6b0d69a04e5f4da284c6d645ca3b191e0.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 65,
    name: "AIERSHA Luxury Packaging Custom Logo Adult Sex Toy Vibrator Gift Set Valentine's Day Gift Set for Couples",
    price: 35.82,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1c667a5bb9d344fa80d57a02b733bce80.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 66,
    name: "New Hot Selling Adult Entertainment G-Spot Vibrator Toy Self-Stimulation Device for Women Couples SM Foreplay Sex Toys",
    price: 20.48,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3a4fc150215e433ab1bbca1a35e7d92cj.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 67,
    name: "New Adult Toys 20 Modes Vibration G-spot Vibrator Dildo Massager Clitoris Stimulator AV Wand Vibrator for Women",
    price: 7.18,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H073ee55365304b78a7228195a0a74775r.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 68,
    name: "Vibrating Sex Toy for Couples Discreet Wireless Vibrator for Women for Outdoor Intimate Play",
    price: 17.37,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/A6553d4da512f423e935dd4c98ac7cc75i.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 69,
    name: "Realistic Vibrating Retractable Heated Dildo Adult Sex Toys Female Massage Thrusting Silicone Huge Realistic Dildo for Women",
    price: 19.76,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb2852f0d7e074e009faf56f819cb5c41j.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 70,
    name: "2 In1 Rose Sex Toy Stimulator Adult Toys Clitoral Tongue Licking G Spot Vibrators Thrusting Dildo Vibrator for Women",
    price: 9.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H278201957ca0463eb315fd4e895119a5G.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 71,
    name: "Hot-Selling Rechargeable Adult Vibrator Cross-Border Female Masturbator Sex Toy USB Power Supply Tongue Licking Stick Design",
    price: 7.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H55069c87a2cf4fdf8f08b5e48fc950f2c.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 72,
    name: "Remote control style Push-slide Toy Adult Metal Relief Toy Finger Push Rotating Relief Toy Gift for Adult and Children",
    price: 3.82,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H524c1ef7604040c092ef1f88efd8f2f5b.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 73,
    name: "Women Laurus Octopus Electric Shock Breast Massager Masturbation Adult Sex Toy Box for Female Waterproof 10 Frequencies Product",
    price: 12.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H84ebb2a11dd14ca5aba0c90563ea32adW.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 74,
    name: "OEM 3 in 1 Hollow Flapping G Spot Vibrator Dildo Tongue Licking Bite & Slap Clitoris Stimulation Sex Toy",
    price: 13.3,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8874a5f2588e4baba0eae8af06e80a54M.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 75,
    name: "Female Masturbation Half Body 8.5inch Dildo Big Penis Realistic Anal Hole Muscle Abs Male Torso Sex Love Doll for Women Gay Men",
    price: 143.1,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha4c523610be24f10b793c2a1904aa6a10.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 76,
    name: "Automatic Male Masturbator Cup Glans Trainer Penis Massage Sex Toys Blow Job Sucking Masturbation Artificial Pussy Anal",
    price: 44.1,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H9fb8617736c24b72b6e51a97bea56ae4l.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 77,
    name: "7.8Inch Male Penis Realistic Dildo Female Masturbation Stimulation Vagina Sex Toys for Woman and Couples",
    price: 9.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H82b92a4f00144b32b9833d764bab8fc3I.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 78,
    name: "Powerful Automatic Sex Machine Gun 20 Attachments Speed-Adjustable Vibrators Dildo Adult Toys for Women & Men Sex Products",
    price: 31.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc5da3fc1e7434ffc9b8ca5de560eee87H.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 79,
    name: "Clitoral Sucker Vibrator Nipple G Spot Sucking Clitoris Erotic Stimulator Female Masturbator Sex Toys for Women Adult 18",
    price: 7.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7167c303bb1f4564b6d0b6ff8b397c74z.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 80,
    name: "Romance Intimate Fun Bondage Pleasure Overload Trilogy Box Set with Sex Toys Collection for Sexual Intrigue Play Couples Kit",
    price: 6.39,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6db0f8eba22d4fa1826018076a3c7225g.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 81,
    name: "Sex Machine SM Trojans Adult Sex Saddle for Couple Dildo Machine Pommeled Horse Gun Sex Furniture for Bedroom",
    price: 178.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He8fc802f5613457aa0ff62d64f2cd6c2S.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 82,
    name: "Wholesale Luxury Adult G Spot & Clitoral Vibrator Adult Sex Toy for Women Juguetes Sexuales Masturbators Sex Toys for Women",
    price: 8.64,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hade62b34c6dd477ebe1b329750c7b81bC.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 83,
    name: "Little Dinosaur Fun Jumping Egg Vibrator 12 Modes Sucking Tongue Licking Private Masturbation Adult Women's Products",
    price: 15.43,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1b3e97701c664668a5f5b5de08df2711K.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 84,
    name: "Male Penis Pump Penis Enlarge Longer Device Powerful Sucking Penis Pump Sex Toys for Men Extender Sex Product",
    price: 16.02,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Had6c92f96a04470eaf92552b4717f4d4A.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 85,
    name: "20 Frequency 8 Speed Private Label Silicone Magic Adult Sex Toys AV Stick G-Spot Massager Product Wand Vibrator Women USB Power",
    price: 5.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5758fd97ea4c444b9c092a2d9940c74bC.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 86,
    name: "Colorful Medium 3-in-1 Male Masturbator Oral Anal Sex Realistic Lifelike Pocket Pussy for Man Masturbation Sex Toys",
    price: 5.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H28d6665e00c641a08ec2953a604792ffO.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 87,
    name: "Couple Sex Black Gloves Toy Masturbation Massage Products for Adult Flirting Erotic Games Masturbation Sex Toy Glove",
    price: 1.26,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc9d956f03aa14318942cd6b136c07d48s.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 88,
    name: "New Adult Sex Products Bullet Silicone Vibrator Sex Toys Electric Penis Massager Sex Tool Machine Dildos for Women",
    price: 11.79,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1a78836c921c455f892b2295459aedbe2.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 89,
    name: "Realistic Dildo Adult Toys for , Thrusting Dildo Vibrator 10 Patterns Sex Toy, Adult Toy Clitoral Vibrator Female",
    price: 14.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0b5060560d9c4934ad02a3293b38addcE.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 90,
    name: "Adult Sex Toys for Men Prostate Massager Games Vibrators Remote Control Adult Toys Anal Plug Vibrating Butt Plug Vibrating",
    price: 12.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H9e100d96f7cb43d0ab13305a19e579a1i.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 91,
    name: "Adult Men Women Sex Toys Silicone Dildo Shape Dual Clitoris Anal Sex Vibrator",
    price: 11.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H74eae197321943348589a99e841f65acA.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 92,
    name: "Vibrator Adult Sex Toys for Women 3 in 1 Tongue Pulse Vibrators Dildo Clit Stimulator for Female Couples Adult Games",
    price: 15.21,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8ddaf51def344242ac6aef268f8189afC.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 93,
    name: "Mini Adult Anal Vibrator & Clitoral G-Spot Stimulator Sex Toy for Men & Women",
    price: 12.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H145db9e746d04ec8813fc3600edbd064G.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 94,
    name: "High Quality Adult Sex Toys 12 Frequency Vibration Portable Design Safe Material for Personal Wellness and Private Relaxation",
    price: 2.92,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6a19ceea0076423e9e0404685e4583f9U.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 95,
    name: "USB Power Adult Toys for Men and Women G Spot Vibrator Fun Vibrating Dildo with Bullet Vibrator",
    price: 6.48,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5aec92e7fbd54f4da7c812929598440ez.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 96,
    name: "Adult Sex Toys App Remote Control 10-Speed Vibration USB-Powered Electric Masturbator with ABS & Silicone Material and Latex",
    price: 12.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/A873811b7ddd542a58b225cb8e44314a19.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 97,
    name: "Vagina G Spot Massager Rabbit Vibrator Adult Toy for Old Women Masturbation Sex Toy",
    price: 12.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/HTB1NjxvbRWD3KVjSZKPq6yp7FXac.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 98,
    name: "Sex Toys for Adult Products Imitate Finger Tapping to Stimulate Vagina Vibrating Clitoris Female Masturbation Vibrator",
    price: 9.52,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd9a62cbf82984ff299fcfddb6fe16d946.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 99,
    name: "Sucking Rose Big Mouth Vibrator Anal Toys Clit Stimulator Nipple G Spot Tongue Licking Vibrator Adult Female Sex Toys for Women",
    price: 23.02,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7e23247b56624a83a6a7c25912ff42aam.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 100,
    name: "Soft Suction Adult Sex Toys for Men Automatic Adult Masturbator with Penis Stimulation Feature",
    price: 12.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf8f52434df4444c5be102843238c5533D.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 101,
    name: "Masturbator Cup Adult Men's Masturbation Toys and Fun Products Masturbator-for-man",
    price: 7.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc03c95a822c04ad69b57efa1f8567eeb6.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 102,
    name: "Wholesale Adult Toys Long Thread AV Wand Vibrator G Spot Massage Stick Anal Dildo for Women Massage",
    price: 2.81,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H34dc361e1c14440d94f77a6dbfc8eea4W.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 103,
    name: "Adult Sex Toys Mini Wand G-Spot Stimulator & 2 AA Battery Vibrator for Women",
    price: 5.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0f61859493d74719b2ada020e264e85eQ.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 104,
    name: "Women's Anal Play Adult Products Adult Masturbation Tool Liquid Silicone Dildo Sex Toy Soft Feature",
    price: 18.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6f634626167a4565bd86088ef7b75f31w.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 105,
    name: "Popular Best Sex Toy Manufacturer Adult Sex Model Toy for Women Adult Sex Toys for Men and Women Masturbators",
    price: 34.38,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf05ce0f8c0494c1b92622162007613153.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 106,
    name: "Male Masturbator Vibration Pocket Pussy Real Vagina Oral Masturbation Cup Flashlight Shape Man Adult Vagina Sex Toy for Men",
    price: 27.79,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd46502fdfe6944b08ed0f75ac7f7a7104.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 107,
    name: "Rabbit Vibrator with 7 Sucking 7 Thrust Modes , G Spot Vibrator Clitoral Vibrators Adult Sex Toys for Couples Games Adult Toys",
    price: 22.09,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfd1d7269749b41e2ab783f22e7ffaecdV.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 108,
    name: "Libo Juguetes Sexuales Sex Toy for Women Box Massager Vibrator Couples Sucking Toy Adult Product Female Clitoral Stimulator",
    price: 15.48,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb6d6856a5db64d18acd50bd0161b0dcag.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 109,
    name: "G-Spot Master Rechargeable Massage Stick Wave Messenger Adult Silicone & Gel Female Masturbator Wholesale Av Stick for Sex Use",
    price: 8.23,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0f787d5e7d9746328b5027d77c71abf6T.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 110,
    name: "Hot Selling Rabbit Vibrator Adult Personal Massager G-Spot Toys Clitoris Stimulation Flapping Vibrating Dildo for Women Sex Toys",
    price: 11.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcf3300c416af4cffa9b994f060a251f80.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 111,
    name: "Best Hot Toy Vibrator Realistic Dildo Massage Women Wearable for Female and Male Adult",
    price: 8.82,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H20ee6d01c2e8454ba75936b6f7e8b7ceE.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 112,
    name: "Adult Vibrator Products Hot Sale Toy Pleasure Couple Sharing Clitoral Stimulation Passion Lock Fine Ring Vibration",
    price: 15.82,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hac7d0ee7954c45be902ee5a088acec0eI.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 113,
    name: "Powerful 10 Suction Vibrator for Women Adult Sex Toy with Clitoralis Stimulator Rose Sucking Vibrator",
    price: 3.28,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0b989b3de4df4919ad9f84ebe65ae8f3Q.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 114,
    name: "Top Selling Silicone Powerful Adult Sex Toy Av Magic Personal Full Body Wand Massager Women Clitoris Stimulation Vagina Vibrator",
    price: 15.84,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7fe384f0a7e744f2b78ddb03974c7e26y.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 115,
    name: "Lesbian Sex Toys Double Dildo Harness Strapons Penis Dildo Vaginal Massage Adult Game Strap on Dildos Sex Bondage Belt",
    price: 8.82,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc6cd14fd73aa41f8b4139a87e1b24e94Q.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 116,
    name: "Top Selling Adult Toys Products Sex Toys for Women Vagina Vibrator",
    price: 17.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1c8f0598544c4486a892e3fa7d392104b.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 117,
    name: "Hot Selling Rabbit Vibrator Toy G Spot Clitoris Stimulator Female Masturbation Adult Sex Toy AV Wand Vibrator Sex Toys for Women",
    price: 10.69,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfea9dd5cf7434f1e818b36a791cdf9fao.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 118,
    name: "New Arrival Silicone Vaginal Stimulator Funny Adult Toys Clit Sucker Clitoris Vibrator Sex Toys for Woman",
    price: 13.32,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4a94b35baed849579235000216fb16cbz.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 119,
    name: "Adult Products Whole Body Safety Silicone Sex Bullet Dildo Masturbation Vibrator",
    price: 31.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha1fc3179c4204479bbb1e751c9192dfaE.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 120,
    name: "Full-automatic Telescopic Swing Heating Vibration Men Women Anal Electric Resonance Masturbation Device Adult Sex Toys",
    price: 19.31,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb361e59bceab4a0f9549570f2f60a969d.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 121,
    name: "Sex Pillow Couples Sex Toys, Inflatable Lounge Velvety Anti-Leak Valve Sex Bed Things Cushion for Couple Female",
    price: 17.98,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf17e662e49704f639f1296049675b940R.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 122,
    name: "Factory Direct Hot Sell Realistic Big Dildo Soft TPE Penis Adult Sex Toy for Women Lifelike Male Masturbator",
    price: 41.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H49852ef791f94c3cb902eb69afd5c385o.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 123,
    name: "11pcs/sets Sexy Flirting BDSM Fetish PU Leather Erotic Adult Games Items",
    price: 17.82,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H58e7ac6a465b46bebf4e3ad744fd8e3cv.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 124,
    name: "Male Electric Masturbation Cup Simulation Vaginal Pocket Pussy Massage Masturbator Penile Exercise Device Male Adult Sex Toys",
    price: 18,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfb6e7374d4e44525b3580fb589eed1e3u.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 125,
    name: "Women's Realistic Vibrator Adult Sex Toys Artificial Silicone Cock Massager G-Spot Stimulator TPE Material Dildos",
    price: 23.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He06d99d173d84fd5b6a95ecf8acc79beC.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 126,
    name: "Silicone Dildo for Women Manual Simulation Dildo Penis Masturbation Stick Adult Sexual Products Dildo for Women Anal Plug Toys",
    price: 3.31,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H65981f7064d64bfea10bf2151f900b67q.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 127,
    name: "Sexbay Adult Sex Toys Realistic Silicon Mouth Masturbation Hands-Free Inflatable Tongue Products Sex Dolls Pocket Pussy Man",
    price: 3.11,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc381a8507a0a4338bcce3334b63297c5x.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 128,
    name: "Wholesale High Quality LCD Display Octopus Tentacles Shape 9 Vibration Modes Vibrators G Spot Vagina Clit Massage",
    price: 17.48,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3dd189e1c88a4637afbc25c38ba036c6Q.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 129,
    name: "OEM Hot Selling Games Sexual Position Play Paper Cards Adult Sexy Game Cards Sets for Couple Game Sex Position Sex Toys",
    price: 4.48,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4e495344288c47a9b71333cb682236d1u.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 130,
    name: "Anal Plug Sex Toys Vibrator Silicone Anal Toys Butt Plug Training Kit Vibrating Anal Plug and Prostate Massager Adult Sex Toys",
    price: 7.15,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H086cc731332d40b98cb9b5345e9a5cdae.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 131,
    name: "Adult Sex Toys Suckion Tapping Vibration G-spot Clitoris Stimulator Nipples Clit Sucker Sexy Toys for Women",
    price: 16.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2d2acfedf71f445c9ca0c95782096735l.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 132,
    name: "Wholesale Price 100% Waterproof Octopus Tentacle Simulation Silicone Dildo Adult Sex Toys",
    price: 54.18,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Habd7d9a5097f45d392bfa395ddb768f7E.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 133,
    name: "Wholesale 36 Piece SM Sex Toys Erotic Juguetes Eroticos Adult Couples Leather Bondage Bdsm Belts Adult Sex Toys",
    price: 8.26,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1c7937f8874649f6b5d839105376c4a3M.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 134,
    name: "Automatic TPE Male Masturbation Toy - Strong Sucking Machine Realistic Feel Vagina Penis Sextoys Wholesale Discreet Packaging",
    price: 20.34,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd60723104a7145e48cb67a845fcac5fcF.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 135,
    name: "Set of 3Pcs S M L Stainless Metal Anal Plug Heart Crystal Jewelry Butt Plug Fetish Adult Sex Toys for Men and Women",
    price: 1.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0f3b201e4e964587b55b5698ca8750b75.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 136,
    name: "Rabbit Vibrators Factory Clitoral Stimulator Rechargeable G-Spot Vibrator Massager Adult Sex Toys",
    price: 7.18,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H43512c05fdce4e17bb5b2e7392b3dc6cm.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 137,
    name: "Adult Shop Wholesale Anal Tpe Masturbators Latex Male Dual-Channel Toys Masturbation Aircraft Cup Male Masturbation for Man",
    price: 3.35,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd9b3377bf27c4bff9bdf1273269cf1014.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 138,
    name: "TT FOREST Adult Products Hands-Free Automatic Male Masturbator Cup Sucking Telescopic Heating Bluetooth Sex Toys",
    price: 64.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1aceef1e75fc46b79c772f8c4d0221edo.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 139,
    name: "Male Glans Testicle Vibrator Vibrating Penis Cock Rings Scrotum Ball Stretcher Glans Massager Chastity Adults Sex Toys for Men",
    price: 20.52,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4c700a962f2d4ca3a8814381a76020177.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 140,
    name: "High Quality Real Life Half Body Sex Love Doll Realistic Women Masturbation Sex Toys Human Male Doll Torso with Dildo and Butt",
    price: 81.23,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H9535d4fce5834f298b160b6961ec6ddav.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 141,
    name: "20 Frequncy Mode and 8 Speed Massage Wand Vibrators Adult Toy Vibrator Sex Toy for Women",
    price: 10.98,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H98a134c766214fa9a6ff391f675a51a67.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 142,
    name: "Female Vibrator Masturbators Adult Product Adult Toys Rabbit-shaped G-spot Vibration Clitoral Stimulator Sex Toys",
    price: 14.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdacc0c5b696245d88f12a405dbebfd62a.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 143,
    name: "New Valentine's Rose Toys Gift USA Popular Women's Intimates Vibrator Adult Sex Toys Roses Watercolor Style Rose Vibrators",
    price: 6.3,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H20371e745caf4dccbf5eec46063d8c36V.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 144,
    name: "Sex Toy for Men New Magic Claw Penis Trainer Massage Training Machine Male Masturbation Cup Vibrators Adult Sex Products Model",
    price: 10.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfc3f108b047a4cdc97a4b08f6ef6d5abk.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 145,
    name: "Sexy Vibrator Artificial Vagina Doll Silicone Rubber Pussy Penis Toy Enlarger Oil Enlargement Spray Women Adult Sex Toys for Men",
    price: 4.84,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hac346b0e19054aceaa81266119da45c9P.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 146,
    name: "Automatic Adult Male Masturbator Toy TPE Sucking Cup Machine for Men's Cup Masturbation",
    price: 38.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H117cf0cfa7054a6b9c1add822a312ff29.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 147,
    name: "Wholesale Adult Toys 2 in 1 Vagina & Clitoris 10 Frequencies Sex Toys Rabbit Vibrator for Women",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H013dfd0771cb49ed8f31aa19c9c32a0dz.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 148,
    name: "Customize Adult Novelty Sex Toys Vaginal Vibrator Juguetes Sexuales G-spot Vibrator Adult Toy Suction Vibrator Toy Sextoys",
    price: 16.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H76ee35369f5e482db1b6e5fcbf5e46b75.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 149,
    name: "2 in 1 Vibrator for Women Soft Silicone Sex Toy Rechargeable Adult Wand Massager",
    price: 15.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H045ef4bdbd8a41d490df59ce1dcacd89E.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 150,
    name: "Adult Woman Av Heating 10 Mode Dual-head Vibrating Remote Control ABS/Silicone Sex Products Massager G Spot Sex Toys Vibrator",
    price: 12.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/S1e7e3a2c50a549b2aac6729883a228adj.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 151,
    name: "Wholesale Male Penis Enlarger ABS Plastic Adult Sex Toys Massager Penis Extender Trainer for Male Masturbation & Sexual Wellness",
    price: 9.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf0c53d5855fb4b1f80b1ead84075ebecv.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 152,
    name: "New Clitoris Roses Toy Sexy 10 Speed Adult Clit Sucker Rose Vibrator and Sucking for Women",
    price: 6.3,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcf06ffbb8ecb42beb444a1482f9bfe7cY.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 153,
    name: "Naughty but Dice/Noctilucent Dice Sex Game for Adult Couples Sex Toys & Games for Adults, Beautifully Velvet Packaged to Make",
    price: 1.37,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1a5f4fffc7bc49a683d19345addd49e5t.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 154,
    name: "Thrusting Vibrator Adult Sex Toys for Women, G Spot Anal Clitoral Stimulation, Adult Toys Vibrators for Female Couples Play",
    price: 15.88,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H70c6fd930738481dab32687421faee84M.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 155,
    name: "Warehouse Direct Delivery Bdsm Kit for Couples Door Sex Swing With Seat Sex Toys for Woman",
    price: 9.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hbd797c54c9474070bd85507b0d24b832O.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 156,
    name: "Silicone Big Thrusting Dildo Vibrator Anal Plug Vibration with Suction Cup and Remote Control Electric Adult Sex Toys for Women",
    price: 19.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5f2093815920418cba26585e80922bf9w.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 157,
    name: "OEM Remote Control Vibration Large Size Heated Adult Sex Toy Automatic Telescopic Dildo Vibrator",
    price: 46.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He89a5ffc54ea4fbcaa09b47dd047592ea.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 158,
    name: "12 Speed G Spot Vibrator Adult Toy Sex Sucking Clit Stimulator Sucker Sex Toys Vibrator for Women",
    price: 20.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hbd3926fa2aa148c2be9a19e2b2ab03bfO.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 159,
    name: "Automatic Male Masturbator Penis Pump Male Sex Toys for Men with Upgrade 10 Vibrating Sucking Adult Toys",
    price: 21.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6de055c9ab244a4c9d386493801c72072.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 160,
    name: "Realistic Pocket Pussy with Lifelike Vagina Texture Soft TPE Male Masturbation Stroker Portable Adult Toy for Men Self Pleasure",
    price: 3.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H59efe8a3d81448d38acaa26692f0113dj.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 161,
    name: "Innovative Adult Toy Features Dual Stimulation with Suction and Vibration for Versatile Pleasure",
    price: 11.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2ecc2031b232444f809ac21c2d8942b1k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 162,
    name: "High Quality Suck Vibrator Adult Toys Shop Adult Masturbators Women's Toys",
    price: 15.84,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4f40a4bb772b46ea8426d20afb26ed16K.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 163,
    name: "Rechargeable G Spot Bullet Vibrator 10 Mode Vibration Beauty Makeup Brush Adult Sex Toys for Women",
    price: 10.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hff3aaf3e48d249289944182ee2cf10d4d.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 164,
    name: "Magic Wand Vibrator Powerful AV Massager Deep Muscle Relaxation Full Body Clitoral Massage Quiet Motor Silicone Adult Sex Toys",
    price: 11.92,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0369e646a4534c85ba577ace20b339efx.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 165,
    name: "Sextoy Tongue Licking Rose Vibrator Clitoris Stimulator Sexual Products Toys Adult Masturbating Vibrator Sex Toys for Woman",
    price: 11.45,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He9c91e7005954b2b89ed502883394cb8g.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 166,
    name: "Best-Selling Cross-Border Tower for Couples' Dates Fun-Stacking Adventures SM Game Play Electric Wood Color Sex Toy",
    price: 5.29,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H73a26cc1d638499aaef369fd76c3b5b4f.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 167,
    name: "Hot Sale Realistic Vagina 3 in 1 Male Masturbator Sex Toy Mouth and Vagina Pocket Pussy Masturbation Cup Adult Sex Toys for Men",
    price: 7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb34c59d6a7224e7788df6c0e637b2d14o.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 168,
    name: "OEM Adult Products Remote Control G-spot Vibrator Female Massager Teasing Vibrator Adult Sex Toy Multi Speeds Vibration",
    price: 9.36,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb230ba9241d2467e899322b990db3596h.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 169,
    name: "New Adult Clitoral Vibrators Rabbit AV Stick Massager Wholesale Factory Dildo Vibrator for Women Sex Toys",
    price: 15.82,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hab3a395a1cbd4b7a9a637fa5056fea55l.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 170,
    name: "Adults Toys for Women Lovers Clitoris Sucking Vibrator 10 Speed Vibration+10 Frequency Vibrating+10 Panting Sucking",
    price: 12.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H591c3cce6b7e4db9a1a377b82897f2deR.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 171,
    name: "4 in 1 Sex Toys for Mens Vibrator Vibrating Cock Ring Bunny Ear Penis Ring Clit G Spot Vibrators Adult Sex Toys for Couples",
    price: 14.18,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H487a95805bc4420f901ec9aad4f3812eu.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 172,
    name: "Adult Four-Claw Magic Hand Male Sex Toy TPE Material Penis Massager Masturbator Premium Adult Products",
    price: 5.62,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha7ccbafbea7b4436bc09432fba1f44c1W.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 173,
    name: "Finger Model Funny Vibrators Adult Toys Electric dildo Vibrator vibrator Toys For Ladies",
    price: 12.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd31445ae3edc4ac7a9e7da9d84700b4bu.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 174,
    name: "Adult SM Sex Products Women Sex Toys Bdsm Kits Bondage Set Collar Whip Anal Plug Erotic Adult Games Handcuffs Toys for Couples",
    price: 6.84,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H748cc85e71064ff7abca021052a5a4aas.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 175,
    name: "Flash Sale Women Adult Vibrator Sex Toy G Spot Adult Sex Toys Vibrator Female Masturbator",
    price: 15.48,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2d35105d722b468486312616d0698c882.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 176,
    name: "Amazon Hot Sale Male Massage Masturbator 10-Speed Penis Exerciser Adult Sex Supplies Wholesale APP Trainer",
    price: 11.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H37dcfed335e54e44a1222031519fc2ccP.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 177,
    name: "Male Libido Boost Chocolate Natural Energy & Vitality Support OEM ODM Private Label Bulk Supplier",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdd9cfa0b4c1c4b989f742c0cf3bfa51bQ.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 178,
    name: "Royal Chocolate VIP Male Enhancement - Custom Packaging 2 Year Shelf Life OEM ODM Services",
    price: 8.98,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Sb98e0937db534c3e96342bb22103ec5by.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 179,
    name: "Hot Selling Chocolate for Men Choco Royal Wholesale Gift Boxes for Choco Royal Chocolate Vip Male Sexual Enhancement",
    price: 16.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H60fc36cf2ca24196a2cc09849808aec3f.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 180,
    name: "Wholesale Royal Chocolate Organic Enhancement Power Energy Persistence Desire Chocolate for Male",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hed2c77e80df74899ae24b1b07d93a100h.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 181,
    name: "Hot Selling Label Design Shilajit Chocolate Dietary Supplement Boost Strength and Masculinity",
    price: 12.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb2e61d4b995b4b52bcd49579e6f1f2f4g.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 182,
    name: "Best Selling Dragon Power Candy Honey for Women Rh Choco Vip Chocolate Outer Packaging Oem Packages",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc26b84f958ba463182a4049154155ebcZ.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 183,
    name: "Men's Maca Chocolate Coffee with Royal Honey Herbal Male Enhancer and Prostate Care Product - Boxed Sweet Ready-to-Drink Energy",
    price: 9.81,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf46476ed1c104243be2a2880b9453d60t.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 184,
    name: "Abink Coconut Palm Soft Ice Cream Powder Children's Chocolate with Aphrodisiac Flavor Dubai Ikolatasi Bag Packaging",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfa8ce960d03c4398982d9d7e9b42addeD.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 185,
    name: "Customized Adult Use Male Enhancement Supplement with Ginseng-Natural Libido Booster Firmer Erections-Male Performance Capsules",
    price: 11.75,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf643aed47cf545f593dd7b76fae99c9aS.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 186,
    name: "Wholesale Hot Selling Packing Gift Boxes for Royal Choco Vip Sexual' Chocolate for Men Herbal Supplemen",
    price: 8.1,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdbdee9f0154f44bfb3a3239c28dc408fy.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 187,
    name: "Wholesale Saleslibido Enhancer for Man R-Hino Chocolate Box, 12ct-packaged Solid Chocolate, Time-adding Box",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H018c0f21a90b4a61800993714f1427fcZ.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 188,
    name: "Natural Herbal Exciting Enhancement Libido Aphrodisiac Chocolate - Custom OEM Supplement Formula for Adult",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H471dcb1a8f864b94a62f6d07e93374830.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 189,
    name: "OEM Functional Lovers Chocolate Supplement for Energy & Performance Support Chocolate with Maca Chocolate Manufacturer",
    price: 7.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hca75b9189ab2410faad4f97e94c586c2E.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 190,
    name: "Hot Selling High Quality 20ft Container Supply Vip Rhin'o Chocolate Outer Packaging Box Sexual Enhancement Products",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H9e5f25283c404f5791eaddad772aa899x.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 191,
    name: "Hot Selling OEM with Label Design Shilajit Chocolate Dietary Supplement Boost Strength and Masculinity for Women",
    price: 12.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He628735633e24ca6ac3d055c9a43f5d0d.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 192,
    name: "Rhino-Choco VIP Dark Chocolate Gift Box for Men Extra Strength",
    price: 0.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H021a5264791a42b8b51c9cce4d0836adh.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 193,
    name: "Best Selling Dragon Power Candy Honey for Women Rh Choco Vip Chocolate Outer Packaging Oem Packages for Men",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha78d8cd629674280b281815c54ea33dbK.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 194,
    name: "Maca Chocolate Coffee with Royal Honey for Men-Herbal Male Enhancer & Prostate Support-Sweet Instant Energy Coffee in Box",
    price: 9.81,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcfd2d7cc94b0474eac78ce897d2a4b28V.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 195,
    name: "Private Label Enhancement Pleasuret Gummies Horny Goat Weed Epimedium Maca Root Herbs Supplements",
    price: 36,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0a94420ea8494c62aec205f47a2786feu.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 196,
    name: "OEM Male Enlarger Thicken Longer Bigger 3 Inch Growth Ashwagandha Root Enlargement 60 Gummies Male Enhancement Gummies for Men",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3a872b0cc0854e1baaea9ecef277b840l.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 197,
    name: "USA Stock 1200K Rhino Magnum 188K Zipper Pouch for Male Sexual Enhancement Herbal Extract Bags for Honey Sexual Pills",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H84a3f39adfb84ff1bba37144e0f40edae.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 198,
    name: "OEM/ODM Power Sexual Enhancement love Maca Sexual Men Power Energy Male Fertility Tea",
    price: 1.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb50deb99a2684ee98368493bc1798fe7S.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 199,
    name: "Vitadiscovery OEM Multivitamin Made Enhancement Pleasure Gummies Maca Gummies Horny Goat Gummies Kidney Nutritons",
    price: 6.84,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd9b05109d2c74bc4966238597ce7134bU.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 200,
    name: "OEM Private Label Female Arousal Gummies Libido Booster Ashwagandha Maca Gummies for Men Women",
    price: 4.75,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H67c19496fb6145479b49579e818c4f0cr.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 201,
    name: "Men's Power Organic Energy Coffee Sexual Desire Enhancement Coffee",
    price: 5.94,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd9936ec791e94ad5bd9b31c1d8bd500dY.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 202,
    name: "Factory Direct Sale 100% Natural Ingredients Yoni Candy Stimulates Female Sexual Desire Yoni Candy",
    price: 1.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb9c56d245e65430abc781b9dab9bbe586.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 203,
    name: "Male Enlargement Adult Tablets Erectile Booster 10pcs Ginseng Oyster Maca Long-lasting Endurance",
    price: 2.34,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf19b089433f64b8a86241a6dcedbd7488.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 204,
    name: "Private Label 100% Natural Maca Sexual Enhancement Flavored Tea for Men's Energy & Libido Daily Health Drink",
    price: 6.93,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H81a787595b10477682c79a81f2214b21B.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 205,
    name: "See Results in 30 Minutes Male Enlargement PillsTablet Erectile Booster, Natural Herbal Supplement, Long-lasting Endurance",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hec988b8627cc4ccd92ab36de8bc69284E.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 206,
    name: "Hot Selling X Power Energy Maca Mellow Taste Instant Coffee in Bag for Men's Stamina & Sexual Enhancement",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H60167c791501449895bbd3f81e47d56dl.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 207,
    name: "Hot Sale 100% Natural 100g Yoni Sugar Lumps Candies Female Sexual Enhancement Candies From Feminine Hygiene Products Line",
    price: 1.71,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hca593a7c46824fc1ba1828e0e9c01f26F.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 208,
    name: "OEM ODM Private Label Horny Goat Weed Gummies for Men Enhance Energy Endurance Gummies",
    price: 7.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H47223e2504a34846add817e66d796911x.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 209,
    name: "Wholesale Best Quality Deer Whip Gel Gummy Long Lasting Male Libido Enhancement for Adults Energy Desire Enhancement Product",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6fc88b1e450840b58e1f8b4bf0ad7febo.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 210,
    name: "Private Label ODM/OEM Gummy Male Enhancement Gummies Pleasure Gummies",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd315507ad58c4142bd949998452ada83U.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 211,
    name: "High Quality Ashwagandha Make Wholesale Price Ashwagandha Gummy Candy Male Supplements Male Enhancement",
    price: 2.88,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2d44bc92a33a450a8720fb06b99799f3V.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 212,
    name: "2025 Hot Selling Spanish Sexual Desire Enhancer Chewing Gum Exciting Liquid Orgasm Gel Sex Drops Gold Fly",
    price: 5.38,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5ea45e1a181d49a399af3df3b029cfdcy.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 213,
    name: "Wholesale High Quality Sexual Enhancement for Men Royal Honey",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd2edd1a76cfd42fd988c936ed286f3dbp.jpeg_300x300.jpeg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 214,
    name: "Yoni Sugar Candies Organic Sugarcane Sweetener Candy Lumps Natural Sex Enhancement 100g",
    price: 1.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf578c27881c142d68fa87ade986f1b88Q.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 215,
    name: "Private Label Pure Natural Sugar Lump Yoni Candy Yoni Sugar Candy Libido Enhancer Feminine Yoni Sweet Lump Candy",
    price: 1.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8d07fa50fe5f4b4785d39dbed6dbd6eec.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 216,
    name: "OEM/ODM Private Label Men's Maca Plus Gummies Natural Herbal Supplement Libido Enhancer for Male Energy Enhancement Maca Root",
    price: 2.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hecd75d640162424494dc19426aa2d5c8p.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 217,
    name: "WXW Men Mint Film Boxes Boosts Vitality Energy Healthcare Supplement Candy Male Enhancement Mint Candy Packaging in Stock",
    price: 0.79,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H030bc005e555498c936a8e46fb16562c0.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 218,
    name: "Male Power Enhancement Ashwagandha Gummies Adult Libido Enhancer Energy Herbal Supplement Ashwagandha Gummy",
    price: 3.69,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf0a08d20dc4f4e8d9bbb44ff68bd2b44j.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 219,
    name: "WELLBODY Horny Goat Weed Gummies OEM/ODM Private Label Factory Supply Improve Sexual Feeling Men Women for Adults MACA Root",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H59d05eeded584253a01c26f3d200e718J.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 220,
    name: "OEM Safe Male Sexual Health Libido Gummies Increase Stamina Fertility Reduce Fatigue Maca Root Gummy Candy",
    price: 4.14,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8fbc5ca75a8a4c808c596b110a76604ce.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 221,
    name: "Male Enhancement Supplements Gummies with Maca Ginseng Improved Performance Kidney Function Libido Booster for Men",
    price: 5.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4c2e6e6a2d6644f6a4ad64da8de3bc50v.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 222,
    name: "Customize Your Signature Libido Boosters: Gummies for Men and Women, and Herbal Gummies With Saw Palmetto As a Natural Female Li",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3e5e935dc0844b9bbb8875fc86e1fd66l.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 223,
    name: "OEM Male Strength Enhancement Maca Gummy Adult Libido Enhancer Herbal Supplements for Male Enlargement Pills",
    price: 5.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H67794874f4ad4ab79b154405328e929bv.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 224,
    name: "OEM/ODM Pure Natural Herbal Sexual Enhance Black Powder Maca Coffee for Men",
    price: 3.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H50f8dc48448c4ad2a24e37022acb8e93F.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 225,
    name: "Wholesale Hot Sale Men Maca Energy Tea Sexual Prostate Tea Strong Sex Tea",
    price: 1.62,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6f818309c5c847b6b2fbbad415413742r.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 226,
    name: "Private Label Aphrodisiac for Adults Boosts Sexual Vitality and Love for Both Men and Women Maca Energy Gummies",
    price: 3.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H725906808ced4157a56f6715312fd12aF.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 227,
    name: "Hot Sale OEM Dragon Candy Power Strawberry Female Libido Booster for Women Supplement",
    price: 21.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Aee28e9c376c549b98b80884b0311e7e2Y.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 228,
    name: "Customized Libido Booster Capsules with Horny Goat Weed Extract with Maca Epimedium Icariin for Women",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H935a9c446dda45bd893f0e4cbb145eeaX.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 229,
    name: "Rhino Energy Chocolate - Boosts Time, Size & Stamina",
    price: 16.74,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfaf7258c0f9546df90af3bb5777f2f89u.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 230,
    name: "Hot Sell Rhin'o Choco Vip With Dark Chocolate Vip Chocolate Sex Product for Male for Supplier",
    price: 12.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2020edd979004f88b4b19eb3d1d5461f8.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 231,
    name: "Hot Selling USA Stock Enhancement Chocolate for Men Field Mint Flavor Choco",
    price: 13.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8cdca4b522494e8e933fe4ddc308d545F.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 232,
    name: "Cross Border Foreign Trade Raspberry Flavor Libido Booster Women Herbal Supplements Enhances Female Sexual Desire Supports OE M",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfdcdffa83d7e4f728bd47a6d7d661a7bc.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 233,
    name: "Male Enhancement Gummies Improves Energy & Strength Gummies Men's Health Supplement",
    price: 5.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha862adee0c1b4439bc0d49aa842ba01b5.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 234,
    name: "Private Label Male Enhancement Products OEM/ODM Energy Enhancer Male Vitality Men Health Food Supplement",
    price: 3.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdc2e252f374249c8ac17e5c07ac523aaL.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 235,
    name: "Private Label Male Enlargement Pills Tablet Erectile Booster, Natural Herbal Supplement, Long-lasting Endurance See Results",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H06de15804ab24de882c0df2d9df3c9865.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 236,
    name: "Custom Wholesale Horny Goat Weed Gummies Herbal Supplement Energy Booster Male Enhancement Gummy",
    price: 4.84,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha964b17cb7564afa90616ca28205ad6a3.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 237,
    name: "Gentle Irritation-Free Female Desire Enhancer Coloured Yoni Sweetener Candy Pleasure Yoni Sweet Lump Candy-Feminine Hygiene",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H98772d5bbdf347afad10782480f244deb.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 238,
    name: "Aphrodisiac Maca Energy Gummies for Adults Boosts Sexual Vitality and Love for Both Men and Women Kidney Health Promoting Gummie",
    price: 1.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H697ab33f55ea48a3996551c29f276f36H.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 239,
    name: "Flourisher Nutrient's Gift Male Enhancing Antioxidant Gummy Candy (Strawberry Flavor)",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hef772f7ffc6f4aa383388f7922693197k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 240,
    name: "Men's Erotic Enhancement Erection Cream Penis Growth Gel for Longer Thicker Sexual Massage Personal Care Sex Product",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb924edbb47bf4e38a9d87d0546b61b5b7.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 241,
    name: "Wholesale Male Enhancing Supplement Gummies with Horny Goat Weed, Tribulus & Maca Root Boost Energy for Men",
    price: 3.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7cb6a086f2dd4332b6aae144ff0d56e2n.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 242,
    name: "Hot Selling USA Stock Enhancement Chocolate for Men Mint Flavor Choco",
    price: 13.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6dfba080af2f471482ec52f5bb49efa7A.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 243,
    name: "Men's Custom Royal Chocolate - 100% Pure Aphrodisiac Chocolate OEM ODM Packaging",
    price: 3.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/S0c61577ac48843beb4937e2999e2fff4T.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 244,
    name: "Private Label Herbal Vitality Blend Maca Herbal Chocolate Men Energy Stamina & Vitality Support Supplement OEM",
    price: 5.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha854c83d96e940d78fd368ed50cd46097.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 245,
    name: "High Quality Wholesale Enhancement Power Energy Persistence Desire for Royal Choco Rhinoceros Chocolate Black Bull",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd941283064af4a518ac4589c297c1bf2C.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 246,
    name: "OEM Energy Chocolate Rapid Refreshment Enhances Focus Energy Booster Men Energy Supplements Chocolate Supplements",
    price: 14.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Heac13018c008448b81cf747e7598f0fbz.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 247,
    name: "OEM Male Power Enhancement Maca Gummies Adult Libido Enhancer Gummy Candy Herbal Supplement Male Enlargement Pills",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H02577f52e3004708a701dbf53282ba46Z.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 248,
    name: "Sexual Desire Rhino Choco Vip Chocolate Package Box Packaging Box Printing",
    price: 0.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc16940877e3541eaaf471957f6a0848cF.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 249,
    name: "Female Exciting Sexual Desire Enhancer Chewing Gum",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0750729946a842349d1462e2d0a9435an.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 250,
    name: "OEM/ODM Male Power Enhancement Maca Gummies Adult Libido Enhancer Herbal Vitamin Supplement Male Enlargement",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf50197c50ec3412ea7be034fec0d8e97P.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 251,
    name: "Private Label Men Enlargement Natural Herb Man Film Candy Male Energy Supplements Increase Libido extra Strength Mint Strips",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He699bca67011471194c197e529c113808.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 252,
    name: "Booster for Men Gummies Enhances Strength Stamina Optimizes Physical Performance Male Enhancement Gummies",
    price: 7.38,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb3a23062a8fa44f0bb08ee180756656fI.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 253,
    name: "Hot Selling Power Capsule Sexual Enhancement Rhino 24K VIP Royal Pills 2 Capsules Single Card Blister Packaging",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H46c44fd1b48540cca048c8f3be47d996l.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 254,
    name: "OEM Wholesale Horny Goat Weed Strength Enhancer for Men Vitamins Powder Gummies Candy Oral Liquid Dosage for Adults",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6654fc15cd814f7b948d4a28e5060231O.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 255,
    name: "OEM/ODM Fertility Enhancement love Maca Male Sexual Energy Tea for Men and Women",
    price: 1.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc3bb77bf215c418b930e67b5e43021ef4.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 256,
    name: "Hot Selling Maca Coffee Men's Maca Health Care Energy Product Fertility Men Energy Coffee Sexual Enhancement Solid Drink",
    price: 82.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc0ebc8e09d6e46b6bc6b1a5fe1dea4f4K.jpeg_300x300.jpeg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 257,
    name: "Pure Natural Herbal Maca White Coffee for Men Sexual Enhancer in Neutral Taste Box Packaged with Sugar Flavored Instant Coffee",
    price: 2.34,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hce467637dc2f40238b2b95fa558c33daj.jpeg_300x300.jpeg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 258,
    name: "Female Pleasure Enhancement Capsules Dual-Action Libido Enhancer with Natural Herbal Ingredients for Enhanced Intimacy",
    price: 0.14,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6554039017cd44d9aa546ba739d1b97fK.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 259,
    name: "Maca Capsule Adult Desire Enhancement Energy Booster Powerful Herbal Supplement Soft Candy Male Enhancement of Strength",
    price: 3.71,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H79128d8324954ae381b04b199a8b22f7k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 260,
    name: "Hot Selling Women's Pleasure Enhancer Female Climax Liquid Lubrication Spray to Help Sexual Adult Sex Products Sex Toy for Women",
    price: 3.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1271ac17d84b46028568d0eb3e7df9d9m.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 261,
    name: "Factory Price Organic Maca 100% Natural Herbs Sexual Enhancement Power Energy Male Fertility Health Tea Bags",
    price: 5.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7b05162eac3f4564add4334c4ee81bb6N.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 262,
    name: "Private Label Libido Booster Gummies With Saw Palmetto Natural Female Libido Booster Herb Gummies for Men Women",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb4336a055d754cd4ac3752cb3ade655dN.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 263,
    name: "Private Label Saw Palmetto Natural Female Libido Booster Herb Gummies Gummy Candy Dosage for Men and Women",
    price: 7.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H432a4ab932874c41b79835cc69e4f8b26.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 264,
    name: "Male Enhancement Gummies Raspberry Flavor Booster for Men Supports Energy, Strength, Stamina, Libido &",
    price: 3.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5c82a94968904f7d83fb51400efff8a1V.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 265,
    name: "Women's Sexual Stimulant Liquid Orgasm Vagina Tightening Enhanced Libido Sex Product for Female Enhancement",
    price: 2.79,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H20b2c859ce8b474a9429606d303a8f017.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 266,
    name: "High Quality Private Label/OEM/ODM Male Gummy Male Enhanced Gummies Male Enchanced Chews Candy for Boost Stamina",
    price: 2.52,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8a46be2eccba4371a1bfea8f500bb8d77.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 267,
    name: "Ready to Ship Natural Female Libido Booster Juicy Honey for Women Energy Miel Aphrodisiaque Supplement",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc6a9d4042dc24ccab05d90c4bf7e223di.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 268,
    name: "2025 Hot Sale: Enhancing Erectile Hardness, Extending Sexual Life Time, Premature Ejaculation Solution for Adults",
    price: 1.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha3dc889a1678470989bd5bdb1f18677c6.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 269,
    name: "Hot Sale Dragon Candy Power Strawberry Female Libido Booster for Women Supplement",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hae67ba9da07046b680a0ab5590491d00E.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 270,
    name: "100% Natural Yoni Candy 100g Female Aphrodisiac Yoni Sugar Increase Female Pleasure Candy Lumps",
    price: 1.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H04da28b45641483f8cbf5b6651c74aa7a.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 271,
    name: "Male & Female Enhancement Gummies Horny Goat Male Support Vitality Herbal Supplements",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Habd98fa2eab44d74a98fde1aa3e55baay.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 272,
    name: "Hot Sale Strong Man Sex Products Increase Timing Delay Organ Enlargement Cream Lastin Erection Gel Lotion",
    price: 7.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfb09b69c4d5c437b813d6478d95d0b26q.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 273,
    name: "Biochealth OEM Male Power Enhancement Maca Gummies Adult Libido Enhancer Gummy Candy Herbal Supplement Male Enlargement Pills",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd7c28d2eb5a7403cba9f4bb05bfe3e89I.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 274,
    name: "OEM Plant Extract Supports Sexual Health and Libido Bone Health and Osteoporosis Support 60 Horny Goat Weed Max Gummies",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7d41a77a69c7486c8a5374631fd6ebe6K.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 275,
    name: "Adult Natural Maca Gummy Candies Male Sexual Wellness and Energy Boost Gummies for Desire Arousal and Pleasure",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcde2bff1903e439ca74d583a8b1f3e870.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 276,
    name: "OEM/ODM Horny Goat Weed Sexual Benefits Gummy for Male Enhancement JT Epimedium Herb Shilajit Mixed Gummies for Sale",
    price: 4.73,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Aea473e3df4144afcba073788cf91ba0cI.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 277,
    name: "High Quality Men's Libido Booster Energy and Muscular Support Gummy Candy for Men",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb3fbbf7af6114654979af962ae1db983h.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 278,
    name: "High Quality Female Libido Increase Cream Aphrodisiac Climax Stimulating Gel Orgasm Enhancement Product Sex Toys for Adult Women",
    price: 3.35,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hac9037481dc146578d20a6e6d8ae09c09.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 279,
    name: "WXW Stock Male Power Enhancement Maca Gummies Adult Energy Gummy Candy Herbal Supplement Male Enlargement Gummies",
    price: 2.88,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc9d4a8c39f4d44e0a41bbd4d0e3b91aeF.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 280,
    name: "OEM/ODM Herbal Sexual Libido Enhance Sweet Sugar Instant Coffee for Men in Bag",
    price: 2.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6231205bb48b4ea68392b05386497519q.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 281,
    name: "Factory Supply OEM Horny Goat Weed Maca Epimedium Icariin Herbal Supplement Gummies Libido Support for Women Adult Dosage",
    price: 3.69,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5c919d2443854fdeb16baac85dd3b5923.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 282,
    name: "Bulk Men's Health Supplement Male Enhancement Gummies Natural Vitality & Stamina Support with Ginseng Men's Vitality Gummy Candy",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd6671a53c45d4850861c5ace9dff0f92l.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 283,
    name: "Sweet Men's Power Coffee Herbal Sexual Enhancement Powder with Sugar Flavor Packaged in a Bag",
    price: 3.08,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H10dd3ee3b23f45f2b628ae0b53e07a7au.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 284,
    name: "Aromlife Factory Directly Hot Selling Gorontula Yoni Sugar Candy Women Increase Pleasure Libido Pour Homme From Factory",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0cb9e11a0e474ef9ab55e78fb9ab211fv.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 285,
    name: "OEM Libido Booster for Women With Horny Goat Weed Extract With Maca Epimedium Icariin Herbal Supplement Gummies",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6cb275d25e674361a99e44a1f30adc0b4.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 286,
    name: "Best Selling Libido Booster Gummies for Men with Ginseng and Maca Root Extract Male Sexual Health Gummies",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hbfc1022c0be34f298b1e3832de7fcc27n.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 287,
    name: "OEM Natural Herbal Sex Life Enhancement Penis Essential Erection Extender Lasting Libido Tea Box Packaging",
    price: 45,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Aaeb32fe1220f496b8aab71a75960c40cp.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 288,
    name: "Male Energy Coffee Powder Instant Boost Male Enhancement Coffee Maca Extract Sexual Enhance Instant Coffee for Man",
    price: 3.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H66cb07adf5864d8ab212e8d091ad341eZ.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 289,
    name: "Wholesale Natural Organic Shilajit Gummies With Ashwagandha Black Seed Oil Mushroom Honey Sea Moss Supplement for Libido Booster",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H663037aa6db24fefa2183a92a2653f4cU.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 290,
    name: "Female Libido Support Vitamin Gummies with Horny Goat Weed Extract 60-count for Adult Women Energy Booster",
    price: 3.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H34e0de4e6fc04f0bbc23cf57e55647cfz.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 291,
    name: "Golden Cool Bar Natural Men's Energy Support Premium Herbal Candy Tablets-American Ginseng Sea Cucumber Oyster Peptide",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0c5990e782e342f1addb86aba2bd7f6fX.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 292,
    name: "The Private Label Aphrodisiac Is a Maca Energy Peeling Gummy for Men and Women who Enhance Sexual Vitality and love in Adults",
    price: 2.29,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5ff3a09366564e2ca330ee19dd8b985fa.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 293,
    name: "Factory Direct Sales Libido Increase Cream Aphrodisiac Climax Stimulating Gel Orgasm Enhancement Product Sex Toys for Women",
    price: 8.1,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H984fb82bae194528a595e254326f0eb57.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 294,
    name: "OEM Male Power Enhancement Maca Gummies Adult Libido Enhancer Gummy Candy Herbal Supplement",
    price: 4.68,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc8d85696bf294314ac72bfebf512bb3f7.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 295,
    name: "Male Function Support Maca Everlasting Unyielding Virility Potency Enhancer Supports Erections Increases Hardness",
    price: 2.11,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc42f91ab186f402abcaf8e439d2678c0O.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 296,
    name: "Male Enhancement Candy Erection Enhancer Male Enhancement Capsules Can Improve Stamina See Results in 30 Minutes",
    price: 10.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H694f81bba9344ef4b49fb924a78a213aJ.jpeg_300x300.jpeg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 297,
    name: "Fast Shipping Maca-Based Libido Booster Gummies for Men and Women Not for Pregnant Women",
    price: 2.34,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He5e953fa940d4eef9889774ee57e143bL.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 298,
    name: "Hot Sale 100% Natural Yoni Candy 100g Female Yoni Candy Increase Female Pleasure Candy Lumps",
    price: 1.17,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H55d58f77a6cb41ff885bbd8ff7fd0144D.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 299,
    name: "Women Sex Enhancement Liquid for Women Orgasm Vagina Tightening Increase Female Libido Sexual Stimulant",
    price: 2.79,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfc21cda404fa42568c8a0bd03e929327T.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 300,
    name: "Wholesale Hot Selling Packing Gift Boxes for Royal Choco Vip Sexual' Chocolate for Men Herbal Supplemen't for Male",
    price: 8.1,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H96a0eb766fc34d62a5294fc95ad7888bm.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 301,
    name: "Hot Sell Choco Vip With Dark Chocolate & Packing Vip Chocolate for Supplier Sex Product Oem",
    price: 12.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6dfa8468d1c44c87914b2a663f5a94ffy.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 302,
    name: "OEM Pure Natural Herbal Extract Libido Enhancer Premium Male Sexual Performance Product",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/S2ff9b4ef952746ee97c03d732b842ff97.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 303,
    name: "OEM Royal Chocolate with Ginseng for Male Potency - 2 Year Shelf Life, Custom Chocolate Supplement",
    price: 3.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/S14dd969d5b2c4d9682a97c9fbf9b99300.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 304,
    name: "Wholesale Hot Selling Private Label ODM/OEM Gummy Male Enhancement Gummies Pleasure Gummies",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H27893d49b5524d2985b89ccc75495895T.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 305,
    name: "Custom Formula Natural Adult Male Herbal Supplement Makagan Dongge Ali Epimedium Maca Ginseng Exciting Chocolate Only Couple",
    price: 9.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfb5fd5a6f901473a93f8c302851b3de5k.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 306,
    name: "Hot Selling High Quality for Vip Rhin'o Chocolate 20ft Container Supply Sexual Enhancement Products for Men",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H10b3c02699454050a153c31c894dd4b46.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 307,
    name: "High Quality Ashwagandha Root Gummies for Adults Male Enhancement Gummies Candy Naturally Grow Energy and Stamina Support",
    price: 7.38,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H9bc527c67ae9468982eca0b920a3a4dc3.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 308,
    name: "WELLBODY Tongkat Ali Gummies for Men Sexual Enhancement OEM/ODM Factory Supply with Maca Root for Adults",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Had3f963ee78741ad912576864842c000k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 309,
    name: "LUVVITA Custom Wholesale Male Enhanced Gummy Candy Supports Intensity Physical Strength Natural Sports Nutrition for Men's",
    price: 4.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3c5a035b73934b65b9ddc6276b9bba41F.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 310,
    name: "Private Label Nutrition Enhancers for Men-Massive Girth & Libido Booster Long Lasting Gummies",
    price: 0.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd51e5dfd462e4325ab64aaf9e6673bfaX.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 311,
    name: "Best Ales Explosive Oral Sex Candy Adult Sex Toys Foreplay Edible for Both Men and Women Enhances Orgasm Oral Sex Candy",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7e486541481d43709bfb6dd73bd91585f.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 312,
    name: "LongtimeX Male Mint Candy Stamina Booster Male Enhancement Secual Health Libido Vitality Toys Rhino Sec Pills Improve Supplement",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H9004c82bc80e4153a9cba32b1ad9056e1.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 313,
    name: "OEM/ODM Private Label Factory Supply Natural Vegan Products Herbal Libido Booster 7 Days Energy Tea for Men Sexual Libido Tea",
    price: 5.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Heb7a8064a8434308a0b38f80f4f469d6L.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 314,
    name: "WXW Stock Vitamin Ginseng Male Enhancement Gummy Male Enhancement Gummies Longer Male Enhancement Increase Intimacy Gummies",
    price: 3.1,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5fa95aef01db49c7aa8ccf6cd3b49eb3Z.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 315,
    name: "Men's Sexual Enhancement Product Ginseng Matsutake Deer Antler Yellow Essence Custom Black Coffee Flavored for Energy Stamina",
    price: 124.18,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H534d489a03f24588a7c3a6ad7c866d0bA.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 316,
    name: "Private Label Wholesale Horny Goat Weed Gummies with Maca L-arginine Boost Stamina Energy Performance Complex Gummy Candy",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5a8865ccc4824c339983b100e97c0d33Q.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 317,
    name: "OEM/ODM Hot Selling Rhino Chocolate - Male Enhancement Supplement, Significant Girth Increase Rhino 69 Male Enhancement Pills",
    price: 8.28,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc4ac91849b324d9fbdea188a40e156c83.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 318,
    name: "S-Tongkat Ali Tribulus Terrestris MACA Gummy Pectin Candy Gummy Energy and Stamina Libido Gummy Vegan Gummy for Adults Men Women",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H607fb3cbb4d54fb694b185c7afbc886aq.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 319,
    name: "7 in 1 Herbal Energy Supplement Gummies for Male Performance Enhancement Tongkat Ali Maca Horny Goat Weed Extract 30 Servings",
    price: 2.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H91ff48d9b9d848c285598793d17c78e5V.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 320,
    name: "Customizable Men's Horny Goat Weed Energy Gummies Horny Goat Weed Epimedium Gummies Tongkat ali Gummies",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H79b351146ccd44c5927d12140486845ac.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 321,
    name: "Hot Selling Male Enhancement Gummies Osterone Booster Supplement for Men Supports Stronger Drive Muscle Growth Not for Pregnant",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He770760bdaf14f82bacfc1161a130f3ea.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 322,
    name: "USA-Origin Premium Quality Horny Goat Weed Saw Palmetto Boron Male Libido Enhancing Gummy OEM Private Label Herbal Supplements",
    price: 7.51,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/A7dc871b97b504885bb4078e15e0a07dad.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 323,
    name: "Wholesale Horny Goat Weed and L-Arginine Blend Gummies Men's Performance Enhancer Gummies Sexual Health and Energy Soft Candies",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H15a631cb72df4523ad2860ba7fed85e0N.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 324,
    name: "Hot Selling Maca Extract Powder Boost Energy Male Enhance Vitality Black Maca Gummies",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/S56ed4be92224439fbe4fea030fda8a0fp.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 325,
    name: "OEM/ODM for Boosts Sexual Health Provide Energy Gummies Enhance Sexual Function 60 Gummies",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf0fc76ba219043768128b9d420f779f6E.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 326,
    name: "Private Label Horny Goat Weed Gummies for Men Enhance Energy",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc3ab8cf6c0924dd8988ef722bbbea79bz.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 327,
    name: "OEM Food Grade Maca Gummies Herbal Extract Reproductive Health and Hormone Balance Maca Gummies Male Libido Enhancement",
    price: 4.68,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H57489d0b5daa418faef029d27a19a13e2.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 328,
    name: "Male Support Soft Candy Daily Full of Vitality Supplement Gentle Care Boost Energy with Maca Root Muir Puama Horny Goat Extract",
    price: 6.64,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4719ce4910914ff7aa61d96e027c8ebe8.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 329,
    name: "ODM/OEM Multivitamin Made Enhancement Pleasure Gummies Maca Gummies Horny Goat Gummies Kidney Nutritons",
    price: 5.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5ebbd6e09d6d42ac90466c9de433adabj.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 330,
    name: "Usa Hot Selling Royal Honey Dragon Choco Powder for Men Chocolate for Male Power Men's Energy Mixed Container",
    price: 10.15,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H37054159ee5e4de1b3f15786f7016bbdy.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 331,
    name: "WXW Stock Male Enhancement Dominator Energy Gummies Male&female Enhancement Gummy Male Enhancement Rhodiola Panax Ginseng Gummy",
    price: 3.1,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc5176c1bec364204afb6116b3a6cd547O.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 332,
    name: "Men's Extract Gummies Dietary Nutrition Supplements MASSIVEGIRTH Gummies Enlargement and Enhancement Lasting Longer and Stronger",
    price: 4.12,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8ff3c8a8900a484089bc6557d4843d44g.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 333,
    name: "Custom Men's Libido Enhancement Gummies - OEM/ODM, Natural Extracts",
    price: 1.19,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha9d412cd2b09479ba2e0defba0d96279C.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 334,
    name: "Hot Selling Men's Delay Cream & Spray Long Time Sex Enhancement Product",
    price: 8.69,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcf816cb02bcc477ea7a89e01d7017618f.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 335,
    name: "Women's Libido Booster Tea Sexual Desire Health Natural Organic Herbs for Enhanced Intimacy and Desire",
    price: 3.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha1c26e58be0e4b3b9f95ca6d4c17a861W.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 336,
    name: "OEM Male Boost Stamina Supplement Horny Goat Weed Gummies Boost Energy Male Enhancement Gummies",
    price: 5.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H50afa808512a4128a67cc07e8819c56es.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 337,
    name: "Private Label Maca Capsules for Men Supplement Booster Power Energy Support Natural Maca Extract Capsules",
    price: 0.63,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/A1ecf71d761da40eca6b9d7dee504de24E.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 338,
    name: "OEM Vitamin Energy Drink Male Natural Libido Enhancer Adult Nutritional Honey Bar",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3aac5ae1f0554c81b8f450057900c699n.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 339,
    name: "Male Power Enhancement Maca Gummies Adult Libido Enhancer Gummy Candy Herbal Vitamin Supplement Male Enlargement",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6f3caa5b0a864642b62bef6db33c2ca5k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 340,
    name: "Japanese Health Supplement for Night Life Love Liquid Desire Enhancement and Sensitivity Improvement 20ml Unisex Sex Products",
    price: 27,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/U3873bbfe60084be6bcd08f0c14052562v.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 341,
    name: "Increase Female Pleasure Vagina Sweetener Aphrodisiac Yoni Sweet Lump Candy 100% Natural Sexy Crystal Yoni Candy",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd307c3b7c0704b359050b5cb33eb1c89e.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 342,
    name: "OEM/ODM Horny Goat Weed Strawberry Gummies for Adults Energy Stamina Libido Support Natural Herbal Male Enhancement Supplement",
    price: 5.74,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfc45a78210fe40e39df26c7c780c25118.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 343,
    name: "Best selling OEM Male Enhancement Gummies Men's Herbal Erection Support and Sexual Health Gummies",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0ad0920e041a4291abf1f989c7f57645q.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 344,
    name: "OEM Ashwagandha Male Enhancement Gummies Power Energy Boost Herbal Supplements",
    price: 6.66,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7933010fe5ac4eec8a83995ed5f76d55A.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 345,
    name: "Horny Goat Weed Men Power Maca Tribulus Terrestris Gummies Male Enhancement Energy Stamina Vitality Support",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb8aee99527a84c2c9eb557f15b5131ffg.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 346,
    name: "OEM Private Label Mellow-Taste Maca Extract Coffee Supplement Instant Boost Male Enhancement in Bag Packaging with Sugar Flavor",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd8e118a071a64256869244862609fa91t.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 347,
    name: "Oyster Male Adult Flower See Results in 30 Minutes Natural Herbal Erectile Booster Tablets Long Lasting Stamina Strength",
    price: 28.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H33a356147bee4156bed5c47e03e2054ah.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 348,
    name: "Aphrodisiac for Adults Boosts Sexual Vitality and Love for Both Men and Women Maca Gummy Candy",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd1b6c3cdde9946a09760cad54b9be2bbk.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 349,
    name: "OEM Private Label Organic 100% Pure Himalayan Shilajit Resin Gold Gummy Supplement with Fulvic & Humic Acid for Men and Women",
    price: 2.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb40e2bf41e4d49848fea7c5bd97f9525H.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 350,
    name: "Oyster Extract Male Enlargement Tablets Erectile Booster Herbal Energy & Stamina Support OEM Factory Supply",
    price: 4.16,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8b8c79b4984242319f775ecf11570f409.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 351,
    name: "MACA Capsules Women Butt Booster Hips Men Strong Maca Root Capsules Herbal Supplement Power",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Sebad234c86454fe3b5004a583ad64b34f.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 352,
    name: "Vigo Pure Natural Herbal Maca White Coffee for Men Sexual Enhancer in Neutral Taste Box Packaged with Sugar Flavored Bag",
    price: 5.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H293ad67d9f994b889d7045fca1e9dadbf.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 353,
    name: "Labels Men Supplement Horny Goat Weed Capsules 100% Natural Booster Health Herbal Support Stamina",
    price: 6.3,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/A26f1e0de65fa48ff979561429237c517E.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 354,
    name: "Natural Male Enhancement Herbal Supplements for Erections and Libido Intimacy Wellness Product",
    price: 34.85,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H9a83fa0d0ac743ffa7ed6177cad039ceH.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 355,
    name: "OEM Boost Stamina Supplement with Horny Goat Weed Tribulus Maca Root Boost Energy Male Enhancement Gummies",
    price: 5.26,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H31cbf5545f474cbdaa843f153fe5a8b4V.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 356,
    name: "Private Label ODM/OEM Gummy Male Enhancement Gummies Pleasure Gummies Used for Emotional and Energy Growth",
    price: 2.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H529f3c25cfaa4c0fba537da94bae2240i.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 357,
    name: "Private Label Male Power Enhancement Capsules Ginseng & Horny Goat Weed Energy Pills in Gummy Candy Dosage Enhance Male Ability",
    price: 2.75,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H73915f8e313448fb916dd1308b23f3f73.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 358,
    name: "Custom 1200K Rhino Magnum 188K Zipper Pouch for Male Sexual Enhancement 100% Natural Herbal Extract Bags for Honey Sexual Pills",
    price: 0.07,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8fa88e9fb57e49108c2f12c5f953a1b5w.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 359,
    name: "OEM Nutritional Supplement Horny Goat Weed Gummies Tribulus Terrestris Support Male Health Enhance Energy",
    price: 4.77,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdb6eba0eac5a4c91b5ffda60bb35cc49d.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 360,
    name: "Private Brand Natural Herbs Extracted to Improve Blood Circulation, Enhance Body Function, Sexual Desire and Soft Gummies",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdb7c68ae801c435c8395f613a3ce1b103.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 361,
    name: "Factory Wholesale Horny Goat Weed Maca Root Powder Male Wellness Support for Men Horny Goat Weed Candy",
    price: 4.19,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdc028c689c1c4f81baf34998794b7506S.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 362,
    name: "Private Label Libido Booster Gummies for Men Women Hormone Balance With Saw Palmetto Natural Female Libido Booster Herb Gummies",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H218c49014ad342d8bdde7566dcd9c739d.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 363,
    name: "Herbal Libido Booster for Enhanced Sexual Drive Stamina and Intimacy Support Promotes Healthy Sexual Wellness Naturally",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc922e2a969b346b5a3e30b6ab3238546m.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 364,
    name: "Aeglewell Direct Supply Horny Goat Weed Gummies One Time Use Customizable Enhancing Sexual Both Men and Women",
    price: 4.14,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha384899f999f4d5799048858dfaf2c28K.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 365,
    name: "Chinaherbs 100% Natural Herbal Libido Enhancement Male Fertility Tea Bag Style Libido Booster Tea for Men and Women",
    price: 3.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hac9e42c6172b481c8147f36aadfee6b6M.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 366,
    name: "Customize Brand Black Maca Plus Gummy Candy Ashwagandha Root Male Enhancement Maca Root Gummies",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcfe8aae63dad4e66a52f05a3fd37f226k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 367,
    name: "Quality Certification Tribulus Terrestris Saponin Ginseng Extract Male Libido Enhancer Energy Gummies 5g",
    price: 0.72,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha77c6c3b326d412da698376a17f1806cB.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 368,
    name: "Gummy Private Label Drop Shipping Horny Goat Weed Gummy Energy Booster Gummies for Men",
    price: 2.97,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6504e0f2f6a44e17aa06b834cffeb7e0p.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 369,
    name: "Female Pineapple Libido Booster Herb Gummies Male Women Libido Support Gummies Gummy Candy Libido",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6708b9d9c01f411085cfc09295cd333eC.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 370,
    name: "In Stock Oyster Eucommia Male Flower Pressed Candy Increase Libido Oyster Eucommia Male Enhancement Sexnal Mint Strips",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4e1c43191bff4575be07207b679f7fa1y.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 371,
    name: "Premium Herbal Peruvian Maca Tribulus Extract Essence Male Libido Enhancer Coffee",
    price: 12.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb30861bcb114459e8246f190e5258339l.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 372,
    name: "OEM Men Enlargement Gummy Candy for Energy Performance Ashwagandha Herbal Supplements for Male Fertility Natural Libido Vitality",
    price: 3.06,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb5037aa3634847ffab15793910ef3b0ed.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 373,
    name: "GMP Certified Men's Sexual Health Enhancer Energy and Vitality Boost 3g Herbal Gummies",
    price: 0.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4d234b9fec1c46808ae8296dae2fa3565.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 374,
    name: "ODM/OEM Gummy Male Enhancement Gummies Pleasure Gummies",
    price: 3.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc7c3cdd807a64376ae8bdb58ba0be2cdQ.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 375,
    name: "Effective Herbal Libido Booster Tea for Men Sexual Libido Enhancement Tea",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7c0f8b8c32434624acbd9a7c9f48e4f4e.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 376,
    name: "Private Label Male Sea Cucumber Deer Whip Ginseng Candy Boost Energy Strengthen Stamina Improve Excitement Men Deer Whip Tablet",
    price: 10.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb5867d701105495cb5c3214ef2837de9R.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 377,
    name: "Male Sexual Power Enhancement Tea Bag Improve Fertility and Nourish the Kidney Energy Male Fertility Tea for Men Sexual",
    price: 2.88,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7fa80259526c47a7b7e3f378a6a14322P.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 378,
    name: "Pure Natural Herbal Maca White Coffee for Men Sexual Enhancer in Neutral Taste Box Packaged with Sugar Flavored Bag",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H79ef7103aa2b43c4a62987a8700d1bacT.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 379,
    name: "Power Sexual Enhancement love Maca Sexual Men Power Energy Male Fertility Tea",
    price: 3.06,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H76200cb382514285b9d6b606da0eea3bf.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 380,
    name: "Vitahealthy OEM ODM Private Label Horny Goat Weed Gummies for Men Enhance Energy Endurance Gummies",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc004a715a2974624afe2607fcf7806afl.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 381,
    name: "Sexual Enhancement Chocolate for Men Choco Royal Wholesale Gift Boxes for Choco Royal Chocolate Vip Uv Coated Embossing",
    price: 9.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5aca7c31dd7e4cd9a4f75dde2087c2c8d.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 382,
    name: "Wholesale Rhino Choco Royal Chocolate VIP Male Enhancement - Custom Packaging OEM",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7178769129c44697840192d914ca6793z.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 383,
    name: "Male Enlargement Chocolate Herbal Supplement Aphrodisiac Exciting Chocolate Long-lasting Endurance",
    price: 3.69,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hbe6cb4dca53f4fa3aa22fd7e50a3b06fz.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 384,
    name: "Hot Sale Royal Choco Black Chocolate Enhance Sexual Function for Men Herbal Extract Large Pack of 12 Pieces 10Gram Each",
    price: 8.82,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H578db35621b1404f82ad6713bf57a0efc.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 385,
    name: "Wholesale Enhancement Men's Energy Rhino Chocolate for Men Royal Choco",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1315c5ae5a024cce9d3f85bce6c18f89N.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 386,
    name: "Premium Male Performance Chocolate Libido Boost & Stamina Enhancement Delicious Cocoa-Based Supplement Custom Formula Bulk",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H47427e1f2bcb4190b51289a165808975u.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 387,
    name: "Black Royal VIP Maca Chocolate Bars Supports Male Prostate Health Boosts Energy & Vitality Enhances Libido Customizable Gift Box",
    price: 10.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7f2758a3f8774ec6bd678d85a2f5fe38L.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 388,
    name: "OEM Custom Formula Men's Natural Adult Male Herbal Supplement Exciting Chocolate Aphrodisiac Herbal Chocolate",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H420a484953b74b84a3295135c2a99450X.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 389,
    name: "Herbal Supplement Aphrodisiac Exciting Chocolate OEM Custom Formula Men's Natural Adult Male Chocolate",
    price: 12.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H220dd2a997154803bdd4b9dbc10c2cbev.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 390,
    name: "Wholesale Hot Sale High Quality Rhino Chocolate for Men Enhancement",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd45e1546dbce440bac7bd8caed578018v.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 391,
    name: "Wholesale Sexual Supplements Rhino Choco Vip Chocolate",
    price: 0.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3cf66b4b109f44c49f94fd732c5e59bci.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 392,
    name: "OEM Hot Sale Shilajit Chocolate Pure Himalayan Shilajit With 85+ Trace Minerals Men's Supplement Boost Stamina Libido Chocolate",
    price: 9.36,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He94ebfa87c034c9cb8105821ca9e673a3.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 393,
    name: "Customize OEM Male Function Chocolate Man Enhancement Supplement Epimedium and Maca Root Extract Chocolate Candies",
    price: 7.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7a1f8f5d1f92471b99f99f4c52a6ab12v.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 394,
    name: "Hot-selling Royal Choco Male Enhancement Royal Rhino Chocolate Outer Packaging Box",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H41390e364a4c4b7b98d0a8a6371f12efl.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 395,
    name: "Newest Design High Quality Vip Rhin'o Chocolate Outer Packaging Box Sexual Enhancement honey 20ft Container Supply",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6bd21f52c93e4a808ca5aad57d98323a2.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 396,
    name: "Hot Selling High Quality for Vip Rhin'o Chocolate Outer Packaging Box Sexual Enhancement Products for Men",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Abb94ea10da8d4822ac4690080cfbf3c38.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 397,
    name: "Hot Selling Royal Choco VIP Chocolate Premium Products Outer Packing Box Rhino Choco Vip Royal Chocolate Sexual Desire Package",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5e2866497b564d62bf82fd3a1d9b4893U.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 398,
    name: "Private Label Premium Pure Shilajit Resin 75% Fulvic Acid 3000mg Pure Himalayan Shilajit Gummy Candy Immune Support",
    price: 3.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ab50dd51ce55b4766b69c51a6fd82589cI.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 399,
    name: "Male Vitality Boosting Chocolate Natural Aphrodisiac Extracts Energy & Endurance Support Flexible MOQ ODM Wholesale",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc1e35e31271e41c5ba247a8cfca01d67s.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 400,
    name: "Private Label Support Strength Energy and Immune Pills Supplement Organic Vegan Men Power Tongkat Ali Capsules Extract",
    price: 4.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd8c913bbe9104d9b9f1bc62e88ab56a92.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 401,
    name: "Premium Quality Wholesale Gift for BlueBerry Rhino Chocolate Enhancement for Men",
    price: 13.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1375d3f46744445785c9cfc264c79ae7I.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 402,
    name: "Exciting Aphrodisiacs Chocolate Tab Chocolate Sex Sexual Aphrodisiacs Products for Men in Chocolate Bars Sexual",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc521afe6df0f4d76a6a304357291774du.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 403,
    name: "Foodmate Secret Weapon Creatine Gummies Hidden Potential",
    price: 7.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc2c39310708d4b4a80b594d71015cf21o.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 404,
    name: "China Manufacture Hard Steel for Men Enhancement Chocolate Paper Packages Box",
    price: 0.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2dd0f46880ec49b083df087dd34eb3f45.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 405,
    name: "OEM Custom Formula Men's Natural Adult Male Chocolate Herbal Supplement Aphrodisiac Exciting Chocolate",
    price: 4.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H67d9a03b5c684d4bb467cdf9ee6ad2d1r.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 406,
    name: "Royal Maca Chocolate, Enhance Male Vitality - Customized Color Box, 2-Year Shelf Life, OEM Service",
    price: 3.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Sbfc6c09dbf4e4a3798390bc9f2dfa28cr.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 407,
    name: "mr beast chocolate",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/A86bb389ed41d4f7b842c8e5aa45a221a7.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 408,
    name: "Adult Male Booster Enhancement Capsules Wholesale Nutritional Supplements",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2d650b3e37924ef8b1cf1f94258e2791Y.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 409,
    name: "Private Label Shilajit Chocolate Boost Energy & Vitality Pure Himalayan Shilajit for Woman",
    price: 11.32,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb80358aa265147479863d8521dcd01d4E.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 410,
    name: "OEM Shilajit Chewy Chocolate Bars 12 Chocolates Male Energy Immune Support Adult Herbal Supplements",
    price: 4.68,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hef54639497994161a518e754bb9e8525Y.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 411,
    name: "Private Label Factory Wholesale Himalayan Shilajit Chocolate Boost Energy & Vitality Shilajit Supplement for Women",
    price: 6.57,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfcfec3a5d76343c1a4f32250e84bd4672.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 412,
    name: "Natural Instant Chocolate Premium Mushroom Extract Powder Cocoa Drink 4 in 1 Cordyceps Chaga Reishi Lions Mane Mushroom Cocoa",
    price: 7.88,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0fbce3ceab744cf791e2a8edbbea55eec.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 413,
    name: "Shilajit Chocolate for Men Energy Supplement Ashwagandha 100% Pure SHILAJIT 100mg No Added Sugar Reduce Symptoms Levels",
    price: 12.85,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H78831f9aa1954990abf3f2810c1c3fb7z.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 414,
    name: "Private Customization Men's Energy Booster Libido Support Formula Maca Soft Candy",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Aa0773ae4d5474316af714159164c5c00N.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 415,
    name: "VIP Honey Chocolate Libido Enhancer - Herbal Supplement for Men & Women (US Best-Selling)",
    price: 11.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H49917b7d720d42608116f57d0351d4b1H.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 416,
    name: "Hot Selling Popular Chocolate Candy Couple Chocolate to Enhance the Stamina Portable Packaging for Easy Sharing",
    price: 3.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Heee13aeffaea4b969b83a3895694da91N.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 417,
    name: "Wholesale High Quality Luxury Gold Foil Process Folding Magnetic Box for Male Power Chocolate Outer Packaging",
    price: 12.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H016d6516841648069543c9b56fd9ca0ah.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 418,
    name: "New Arrivals Wholesale Sliding Drawer Box for Chocolate Rhino VIP Sexual Liquid Choco Pack",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H200d31a38ef64ac5a889278103fff059B.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 419,
    name: "Hot Selling Chocolate Glossy Matt Lamination Sponge for Sexual Enhancement Embossing Custom Food Packaging Paper Box for Gift",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1cb5febd7b0b4e5fa4cbe80f024fdba4b.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 420,
    name: "OEM/ODM Shilajit Chocolate for Men Pure Shilajit & Ashwagandha Energy & Stamina Support 12 Pieces Athletic Performance Support",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3a719a0df3304d4cab59675b8b0ab6dcA.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 421,
    name: "Chocolate Box,rhino Choco,vip Choco",
    price: 12.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H07ac4988d81d4a8cac50ded1a77489d1D.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 422,
    name: "Hot Sell Rhino Choco Vip With Dark Chocolate Outer Packaging Vip Chocolate for Supplier Sex Product Packages",
    price: 8.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H406cb390945346cc815da421cfdb5fde1.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 423,
    name: "Hot Supplier High Quality Chocolate for Men Chocolate Box Mystery Box Men's Product Sexton Box for Male",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3c163862a27b43b9929f6e7e72b9458dj.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 424,
    name: "New Arrivals Wholesale for Chocolate Rhin'o Vip Sexual Liquid Choco Pack Chocolate Rhin'o Vip Chocolate 20ft Container Supply",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8d3e9892ebed4b159ceb7125d1c9f0ddV.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 425,
    name: "Sex Sexual Aphrodisiacs Products for Couple & Husband and Wife in Chocolate Sexual Exciting Aphrodisiacs Chocolate",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H75656e4391a3486bbb8b0dee22c9cadbt.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 426,
    name: "Natural Desire Enhancement Chocolate for Men - Supports Marital Harmony & Vitality with Herbal Ingredients - Ignites Inner Drive",
    price: 10.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcd806f45792c4a73a84eba72346a3d75z.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 427,
    name: "Epimedium Tongkat Ali Chocolate for Enhancing Male Women Desire for Conjugal Life Chocolate Suitable for Active Sexual in Adult",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H48afd29f077c462294d97bd4130a2bfdk.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 428,
    name: "Hot Selling OEM Himalayan Dietary Supplement Boost Shilajit Chocolate with Label Design for Man",
    price: 12.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H025aca014b4f4c73849bd3f5e6a1439bT.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 429,
    name: "Hot Selling Royal R-hino Choco VIP Chocolate Outer Packing Box Premium Sex Products Packaging",
    price: 12.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0786c37a55344cf78b7f4f3c73a5d512N.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 430,
    name: "Wholesale Rose Vibrator Manufacturer Cheap Price Rose Toys Nipple Clitoral Sucking Rose Vibrator Sex Toys for Woman",
    price: 5.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H26c041b2c24a472c940a0243e76a7590L.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 431,
    name: "Women Rose Vibrators Sucking Masturbation Vagina Nipple Massager Clitoris Stimulation Licking Tongue Vibrator",
    price: 9.72,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb3976ae861fd4aa3a34038aa71429469s.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 432,
    name: "Rose Clitoral Sucking Vibrator for Women Nipple Stimulator Silicone Rose Sex Toy Female Masturbator Adult Toys Wholesale",
    price: 4.05,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Heb85837001e0453081332df650b38e1e2.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 433,
    name: "Gelances Waterproof Adult Toys Multi-Frequency Bullet Vibrator for Women G-Spot Clitoral Stimulation Waterproof Wand Massager",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf1440bd2f06d47b2b8013774527ad609W.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 434,
    name: "Adult Sex Dice Lover Flirt Dice Adult Sexy Game Sex Toys Couple Party Funny Toys Novelty Products",
    price: 0.52,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H02fbdb35ecd84aa7a2b9b8cce194941cg.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 435,
    name: "Small Mini Size Clitoral Sucker Vibrator Nipple G Spot Sucking Clitoris Erotic Stimulator Female Masturbator Sex Toys",
    price: 5.76,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3115a4e74ed547e2a6f756696ebfa30dJ.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 436,
    name: "2025 Factory Wholesale Hot Selling Men's Sex Toys Adult Toys",
    price: 3.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdd316929a4a2471aa7e38e1538d7b071o.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 437,
    name: "Sexy Flirting Fetish 13pcs/set PU Leather Erotic Adult Games Items",
    price: 17.98,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hac21d2be440f43b69bd44b597dcfe332p.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 438,
    name: "Smart Counting Adult Soft Male Masturbation Cup TPE Material Sex Toy Features Vibrating Sucking",
    price: 99,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hacf7343eb254450b8ca4adef0c6e85b9w.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 439,
    name: "Pocket Pussy Male Masturbator Realistic Stroker Textured Portable Discreet Silicone Sex Toy Easy to Clean for Solo Pleasure",
    price: 7.72,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H533970a0fa214f3a9e6213fe92a13466t.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 440,
    name: "Remote Control Great Simulation Penis 10 Modes Telescopic Rotating Shaking Heating Liquid Silicone Dildos Vibrator Adult Sex Toy",
    price: 14.74,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb2660ee7dead482688fc8f50ddf2a5d6t.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 441,
    name: "Cheap Adult Toys Masturbation Pocket Juguetes Sexuales Artificial Pussy Vagina Anus Man Sex Toys Masturbators for Male",
    price: 5.76,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He036cf56c3b341a89ce710857700d132t.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 442,
    name: "12 Speeds Thrusting Anal Vibrator Men Butt Plug Masturbation g Spot Vibrating Thrust Climax Feeling Adult Toy Anal Plug for Man",
    price: 17.98,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2ead9533be40484ebe6c36337b2e06c8f.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 443,
    name: "OEM Customized Sucking Male Masturbator Sex Toys Sex Toy Box for Male Sex Toy Box Dildo Masturbators",
    price: 19.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5d01dd77cd7c499ca2178fb6a22caccfH.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 444,
    name: "Rose-Shaped Vibrator Adult Toys Stimulation Waterproof 10 Powerful Vibration Massager for Women",
    price: 16.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc350813b9a7b4e91bede752d498a720fH.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 445,
    name: "Premium Smart Electric Multi-Function Male Masturbation Cup, High-Grade Adult Sex Toy for Men",
    price: 27,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3806985d9e034fdea9ef327f1992666cG.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 446,
    name: "Rose Sucking Vibrator Wholesale Custom Female Sucking Clitoral Adult Rose Vibrator Sex Toy for Women Couples Custom Manufacture",
    price: 4.48,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3f74a5171e364afab43abf3bda6c6258n.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 447,
    name: "Female Adult Sex Supplies Tadpole Jumping Eggs with APP Remote Control USB Powered Wearable Dildo Vibrator for Masturbator",
    price: 7.18,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H205499a288af4f0f91d891a3fb02cb00J.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 448,
    name: "2023 10 Mode Vibrator Double Penetration Sex Toy Prostate Massager Motor Real Dildos for Women Couple Sex Toys",
    price: 7.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H243c060e60b54643a07cb9ec1c083eb35.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 449,
    name: "Noctilucence Slave Leather Couple Sex Toys Sex Women Leather Restrain Fetish Slave Games Adult Sex Toys",
    price: 16.92,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He2877b12f42342028f695864757b5e426.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 450,
    name: "Sex Toy Box Wholesale Premium 4 in 1 Clitoral and G Spot Rechargeable Vibrator Adult Products for Women",
    price: 41.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He91b9a5ee67f4e2786f99fa620195681f.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 451,
    name: "2024 Hot Sell Multi Model Silicone Gel Women's Hip Plane Cup Adult Men's Masturbation Toys",
    price: 5.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H361afca970684331adf5e746ce9b4737o.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 452,
    name: "Female Huge Realistic PVC Dildo Soft Adult Sex Toys for Woman Masturbation Black Brown Flesh Dildos Hardcore Adult Devices",
    price: 27.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3fe7f09ac6dd4ff6ad72263fec4f8459Z.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 453,
    name: "Couple Game Night Cards 18+ Board Game Adult Date Prop Sex Noctilucent Erotic Lovers Position Foreplay Romantic Toy",
    price: 3.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0f3666e7e7414922ac9c9bd1a607ed60y.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 454,
    name: "Adult Products Manufacturer Direct Supply Sexy Female Masturbation Vibrator Bestsellers on AliExpress and Amazon",
    price: 6.35,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb6c65d534b2b4a13bd888747905aa873t.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 455,
    name: "Wearable Dildo Vibration for Woman Remote Control Penis Vibrator Women Masturbation Stimulator Thrusting Sex Toy Female Outdoor",
    price: 2.97,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcaecdc77cbbd4f0a8b98d516ee0621f3T.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 456,
    name: "Wholesale Adult Sex Products Juguete Sexuale Vibrator Sex Toys Women Female Mini Bullet Vibrator",
    price: 1.76,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H03d3cae3e9fc48b7a26e4e1df5c6d024u.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 457,
    name: "3 Pcs/Set Luxury Jewelry Design Fetish Anal Butt Plug Pink SM Adult Gay Anal Plugs Woman Men Sex Toys",
    price: 7.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1077a0dd27bd4476ae4a74da2821bfb7L.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 458,
    name: "High Quality Silicone Dildos and Condom Sleeves Long-lasting Reusable Washable Men's Penis Enlargement Sex Toys",
    price: 3.67,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H75f6d377a0794658b9ab56b394a55f9b5.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 459,
    name: "Florya Soft Double Layer Silicone Big Dildo Realistic Long Dick Penis Butt Plug Vagina Anal Massage Adult Sex Toys for Women Men",
    price: 6.08,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6dd68b7f80ce45de84f736169dbe92e6w.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 460,
    name: "TT FOREST Adult BDSM Female Sex Toy Clitoral Stimulator Couples Rose App Remote Control Wearable Vibrator Hand-Free Panty Ring",
    price: 13.84,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4bae1072c62b437b9ad62b714b7efaa6z.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 461,
    name: "Clit Sucker Vibrator for Women Sucking Clitoris Stimulator Adult Couple Sex Toy for Women",
    price: 21.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb610d24ac09046bb812b7386370363c6Y.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 462,
    name: "Christmas Gifts Adult Products Wholesale Rechargeable Lipstick Vibrating Egg Massage Vibrating Masturbation AV Stick",
    price: 8.41,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H489ef07df6e54b9aadf1714ea1a7e420L.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 463,
    name: "Wholesale Cheap Sex Toys Juguetes Sexuales Sex Adult Factory Customized Saxy Toys Rose Vibrator Body Massager Wand Vibrator",
    price: 4.61,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd54d56c1871c45209178c9af30a83de9N.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 464,
    name: "Rechargeable Powerful Adult Toy Shape Airplane Men's Masturbator Cup Automatic Heating Electric Sex Device Made TPE Material",
    price: 73.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H9d03d879918940898ca4409d10ebeb76k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 465,
    name: "Powerful Wand Massager Adult Sex Toy Wholesale Strong Vibration Full Body USB Rechargeable Electric Massager for Women Couples",
    price: 3.98,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2ea9c0ac81e04ca78f410c79cddd1d05J.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 466,
    name: "OEM 10 Modes Generic Waterproof Adult Toys Easily Thrusting Functions Most USB Rechargeable Waterproof Gifts Soft Toys for Women",
    price: 18.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfffcdaeff9af45b5ae4bee1025a7de92v.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 467,
    name: "Realistic Dildos for Men Small Medium Large Double-Layer Female Masturbator Anal Plug Soft Material Sucker for Adult Sex",
    price: 17.32,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1787eb9247d74183bb349b51b8b72728d.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 468,
    name: "Amazon Best Seller Adult Vibrator & Penis Ring Remote Control Prostate Massager for Delay Ejaculation Best Sex Toy for Men",
    price: 16.72,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1655c70312964cf3b15589ab63afce98M.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 469,
    name: "YFSJ Customized Female Masturbation Flexible Glass Dildo Large G-spot Adult Sex Toys",
    price: 2.32,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1327378b7fa147c29e2b14292545997dX.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 470,
    name: "3 in 1 Pocket Pussy Male Masturbator Adult Sex Toys for Men Penis Stimulation Stroker Realistic Textured Anus Vagina",
    price: 6.98,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H30dc017373964a04af45c72a761cddb7j.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 471,
    name: "Wholesale Sexual Adult Product Massager Consoladores Para Mujer Vibradores Dildo AV Wand Massage Vibrator Sex Toy for Women",
    price: 4.41,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H945cad4307a34951a87615c52fdf01ee9.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 472,
    name: "Adult Sex Toys High Quality Adult Toys Vibrating Wand Sex Toy for Couple Sex Massage Best Private Erotic Adult Personal Sexy SM",
    price: 4.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha66b3bf7e47a49bb9be4321dbd860e19M.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 473,
    name: "Adult Sex Toys New Color Line a Word Split Leg Handcuffs with SM Bundle Adjustment Props SM Binding Toys",
    price: 7.47,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Had30af1e72f049deb45e5e34f161fc03X.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 474,
    name: "Bluetooths Dildo Vibrator Egg for Women Female Wireless APP Remote Control Wear Vibrating Egg Panties Toy Sex for Adults Shop",
    price: 5.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H653b04ca3ed24d7c949315a0d37478b7s.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 475,
    name: "Adult Tongue Couple Masturbation Sex Toys Wireless Silicone Clitoris Nipple Stimulation G-spot 3-in-1 Double Tongue Vibrator",
    price: 14.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2e46def8f3c44fe4a4901fdedf82c3ace.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 476,
    name: "Netphi Male TPE Masturbation Cup Realistic Penis Massage Real Skin Feeling Pocket Pussy 18+ Vagina Waterproof Adult Sex Toys Men",
    price: 3.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc4303dc2867c4c5db17cff92615ee956l.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 477,
    name: "Amazon Adult Toy Huge Soft Liquid Silicone Dildo for Women Anal Plug Big Dildo Massage Masturbation for Female",
    price: 16.83,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ae5eb5383c18549108cfaef60c8655cd1h.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 478,
    name: "Male Masturbator Sex Toy Mouth and Vagina Pocket Pussy Masturbation Cup Adult Sex Toys for Gay and Lesbian",
    price: 14.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4b19484863784c5ea9ef176eec8b4e156.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 479,
    name: "Silicone Adult Sex Toys Masturbation Toys Female Silicone Models Boy Sex Toys",
    price: 20.3,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6a4b5a94847d45b7881dee9cefc99e14u.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 480,
    name: "Usa Warehouse Stock Amazon Hot Sale Sex Toys Adult G Spot Red Rose Vibrator for Women Clitoral Sucking Vibrator",
    price: 6.12,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf0e6cd19181043b08fca9fffabc18d4ch.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 481,
    name: "Remote Control Adult Toy Sex Vibrating Dildo Thrusting Heating G Spot Realistic Dildo Penis Women Vibrator for Vagina and Anus",
    price: 16.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb1ac4d2301d344e3bad6c19eb38c42ac4.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
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
