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
    name: "Male Libido Boost Chocolate Natural Energy & Vitality Support OEM ODM Private Label Bulk Supplier",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdd9cfa0b4c1c4b989f742c0cf3bfa51bQ.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 14,
    name: "Royal Chocolate VIP Male Enhancement - Custom Packaging 2 Year Shelf Life OEM ODM Services",
    price: 8.98,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Sb98e0937db534c3e96342bb22103ec5by.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 15,
    name: "Hot Selling Chocolate for Men Choco Royal Wholesale Gift Boxes for Choco Royal Chocolate Vip Male Sexual Enhancement",
    price: 16.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H60fc36cf2ca24196a2cc09849808aec3f.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 16,
    name: "Wholesale Royal Chocolate Organic Enhancement Power Energy Persistence Desire Chocolate for Male",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hed2c77e80df74899ae24b1b07d93a100h.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 17,
    name: "Hot Selling Label Design Shilajit Chocolate Dietary Supplement Boost Strength and Masculinity",
    price: 12.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb2e61d4b995b4b52bcd49579e6f1f2f4g.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 18,
    name: "Best Selling Dragon Power Candy Honey for Women Rh Choco Vip Chocolate Outer Packaging Oem Packages",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc26b84f958ba463182a4049154155ebcZ.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 19,
    name: "Men's Maca Chocolate Coffee with Royal Honey Herbal Male Enhancer and Prostate Care Product - Boxed Sweet Ready-to-Drink Energy",
    price: 9.81,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf46476ed1c104243be2a2880b9453d60t.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 20,
    name: "Abink Coconut Palm Soft Ice Cream Powder Children's Chocolate with Aphrodisiac Flavor Dubai Ikolatasi Bag Packaging",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfa8ce960d03c4398982d9d7e9b42addeD.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 21,
    name: "Customized Adult Use Male Enhancement Supplement with Ginseng-Natural Libido Booster Firmer Erections-Male Performance Capsules",
    price: 11.75,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf643aed47cf545f593dd7b76fae99c9aS.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 22,
    name: "Wholesale Hot Selling Packing Gift Boxes for Royal Choco Vip Sexual' Chocolate for Men Herbal Supplemen",
    price: 8.1,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdbdee9f0154f44bfb3a3239c28dc408fy.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 23,
    name: "Wholesale Saleslibido Enhancer for Man R-Hino Chocolate Box, 12ct-packaged Solid Chocolate, Time-adding Box",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H018c0f21a90b4a61800993714f1427fcZ.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 24,
    name: "Natural Herbal Exciting Enhancement Libido Aphrodisiac Chocolate - Custom OEM Supplement Formula for Adult",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H471dcb1a8f864b94a62f6d07e93374830.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 25,
    name: "OEM Functional Lovers Chocolate Supplement for Energy & Performance Support Chocolate with Maca Chocolate Manufacturer",
    price: 7.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hca75b9189ab2410faad4f97e94c586c2E.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 26,
    name: "Hot Selling High Quality 20ft Container Supply Vip Rhin'o Chocolate Outer Packaging Box Sexual Enhancement Products",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H9e5f25283c404f5791eaddad772aa899x.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 27,
    name: "Hot Selling OEM with Label Design Shilajit Chocolate Dietary Supplement Boost Strength and Masculinity for Women",
    price: 12.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He628735633e24ca6ac3d055c9a43f5d0d.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 28,
    name: "Rhino-Choco VIP Dark Chocolate Gift Box for Men Extra Strength",
    price: 0.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H021a5264791a42b8b51c9cce4d0836adh.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 29,
    name: "Best Selling Dragon Power Candy Honey for Women Rh Choco Vip Chocolate Outer Packaging Oem Packages for Men",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha78d8cd629674280b281815c54ea33dbK.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 30,
    name: "Maca Chocolate Coffee with Royal Honey for Men-Herbal Male Enhancer & Prostate Support-Sweet Instant Energy Coffee in Box",
    price: 9.81,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcfd2d7cc94b0474eac78ce897d2a4b28V.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 31,
    name: "Private Label Enhancement Pleasuret Gummies Horny Goat Weed Epimedium Maca Root Herbs Supplements",
    price: 36,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0a94420ea8494c62aec205f47a2786feu.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 32,
    name: "OEM Male Enlarger Thicken Longer Bigger 3 Inch Growth Ashwagandha Root Enlargement 60 Gummies Male Enhancement Gummies for Men",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3a872b0cc0854e1baaea9ecef277b840l.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 33,
    name: "USA Stock 1200K Rhino Magnum 188K Zipper Pouch for Male Sexual Enhancement Herbal Extract Bags for Honey Sexual Pills",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H84a3f39adfb84ff1bba37144e0f40edae.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 34,
    name: "OEM/ODM Power Sexual Enhancement love Maca Sexual Men Power Energy Male Fertility Tea",
    price: 1.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb50deb99a2684ee98368493bc1798fe7S.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 35,
    name: "Vitadiscovery OEM Multivitamin Made Enhancement Pleasure Gummies Maca Gummies Horny Goat Gummies Kidney Nutritons",
    price: 6.84,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd9b05109d2c74bc4966238597ce7134bU.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 36,
    name: "OEM Private Label Female Arousal Gummies Libido Booster Ashwagandha Maca Gummies for Men Women",
    price: 4.75,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H67c19496fb6145479b49579e818c4f0cr.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 37,
    name: "Men's Power Organic Energy Coffee Sexual Desire Enhancement Coffee",
    price: 5.94,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd9936ec791e94ad5bd9b31c1d8bd500dY.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 38,
    name: "Factory Direct Sale 100% Natural Ingredients Yoni Candy Stimulates Female Sexual Desire Yoni Candy",
    price: 1.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb9c56d245e65430abc781b9dab9bbe586.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 39,
    name: "Male Enlargement Adult Tablets Erectile Booster 10pcs Ginseng Oyster Maca Long-lasting Endurance",
    price: 2.34,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf19b089433f64b8a86241a6dcedbd7488.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 40,
    name: "Private Label 100% Natural Maca Sexual Enhancement Flavored Tea for Men's Energy & Libido Daily Health Drink",
    price: 6.93,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H81a787595b10477682c79a81f2214b21B.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 41,
    name: "See Results in 30 Minutes Male Enlargement PillsTablet Erectile Booster, Natural Herbal Supplement, Long-lasting Endurance",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hec988b8627cc4ccd92ab36de8bc69284E.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 42,
    name: "Hot Selling X Power Energy Maca Mellow Taste Instant Coffee in Bag for Men's Stamina & Sexual Enhancement",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H60167c791501449895bbd3f81e47d56dl.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 43,
    name: "Hot Sale 100% Natural 100g Yoni Sugar Lumps Candies Female Sexual Enhancement Candies From Feminine Hygiene Products Line",
    price: 1.71,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hca593a7c46824fc1ba1828e0e9c01f26F.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 44,
    name: "OEM ODM Private Label Horny Goat Weed Gummies for Men Enhance Energy Endurance Gummies",
    price: 7.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H47223e2504a34846add817e66d796911x.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 45,
    name: "Wholesale Best Quality Deer Whip Gel Gummy Long Lasting Male Libido Enhancement for Adults Energy Desire Enhancement Product",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6fc88b1e450840b58e1f8b4bf0ad7febo.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 46,
    name: "Private Label ODM/OEM Gummy Male Enhancement Gummies Pleasure Gummies",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd315507ad58c4142bd949998452ada83U.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 47,
    name: "High Quality Ashwagandha Make Wholesale Price Ashwagandha Gummy Candy Male Supplements Male Enhancement",
    price: 2.88,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2d44bc92a33a450a8720fb06b99799f3V.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 48,
    name: "2025 Hot Selling Spanish Sexual Desire Enhancer Chewing Gum Exciting Liquid Orgasm Gel Sex Drops Gold Fly",
    price: 5.38,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5ea45e1a181d49a399af3df3b029cfdcy.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 49,
    name: "Wholesale High Quality Sexual Enhancement for Men Royal Honey",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd2edd1a76cfd42fd988c936ed286f3dbp.jpeg_300x300.jpeg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 50,
    name: "Yoni Sugar Candies Organic Sugarcane Sweetener Candy Lumps Natural Sex Enhancement 100g",
    price: 1.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf578c27881c142d68fa87ade986f1b88Q.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 51,
    name: "Private Label Pure Natural Sugar Lump Yoni Candy Yoni Sugar Candy Libido Enhancer Feminine Yoni Sweet Lump Candy",
    price: 1.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8d07fa50fe5f4b4785d39dbed6dbd6eec.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 52,
    name: "OEM/ODM Private Label Men's Maca Plus Gummies Natural Herbal Supplement Libido Enhancer for Male Energy Enhancement Maca Root",
    price: 2.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hecd75d640162424494dc19426aa2d5c8p.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 53,
    name: "WXW Men Mint Film Boxes Boosts Vitality Energy Healthcare Supplement Candy Male Enhancement Mint Candy Packaging in Stock",
    price: 0.79,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H030bc005e555498c936a8e46fb16562c0.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 54,
    name: "Male Power Enhancement Ashwagandha Gummies Adult Libido Enhancer Energy Herbal Supplement Ashwagandha Gummy",
    price: 3.69,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf0a08d20dc4f4e8d9bbb44ff68bd2b44j.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 55,
    name: "WELLBODY Horny Goat Weed Gummies OEM/ODM Private Label Factory Supply Improve Sexual Feeling Men Women for Adults MACA Root",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H59d05eeded584253a01c26f3d200e718J.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 56,
    name: "OEM Safe Male Sexual Health Libido Gummies Increase Stamina Fertility Reduce Fatigue Maca Root Gummy Candy",
    price: 4.14,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8fbc5ca75a8a4c808c596b110a76604ce.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 57,
    name: "Male Enhancement Supplements Gummies with Maca Ginseng Improved Performance Kidney Function Libido Booster for Men",
    price: 5.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4c2e6e6a2d6644f6a4ad64da8de3bc50v.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 58,
    name: "Customize Your Signature Libido Boosters: Gummies for Men and Women, and Herbal Gummies With Saw Palmetto As a Natural Female Li",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3e5e935dc0844b9bbb8875fc86e1fd66l.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 59,
    name: "OEM Male Strength Enhancement Maca Gummy Adult Libido Enhancer Herbal Supplements for Male Enlargement Pills",
    price: 5.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H67794874f4ad4ab79b154405328e929bv.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 60,
    name: "OEM/ODM Pure Natural Herbal Sexual Enhance Black Powder Maca Coffee for Men",
    price: 3.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H50f8dc48448c4ad2a24e37022acb8e93F.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 61,
    name: "Wholesale Hot Sale Men Maca Energy Tea Sexual Prostate Tea Strong Sex Tea",
    price: 1.62,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6f818309c5c847b6b2fbbad415413742r.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 62,
    name: "Private Label Aphrodisiac for Adults Boosts Sexual Vitality and Love for Both Men and Women Maca Energy Gummies",
    price: 3.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H725906808ced4157a56f6715312fd12aF.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 63,
    name: "Hot Sale OEM Dragon Candy Power Strawberry Female Libido Booster for Women Supplement",
    price: 21.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Aee28e9c376c549b98b80884b0311e7e2Y.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 64,
    name: "Customized Libido Booster Capsules with Horny Goat Weed Extract with Maca Epimedium Icariin for Women",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H935a9c446dda45bd893f0e4cbb145eeaX.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 65,
    name: "Rhino Energy Chocolate - Boosts Time, Size & Stamina",
    price: 16.74,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfaf7258c0f9546df90af3bb5777f2f89u.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 66,
    name: "Hot Sell Rhin'o Choco Vip With Dark Chocolate Vip Chocolate Sex Product for Male for Supplier",
    price: 12.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2020edd979004f88b4b19eb3d1d5461f8.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 67,
    name: "Hot Selling USA Stock Enhancement Chocolate for Men Field Mint Flavor Choco",
    price: 13.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8cdca4b522494e8e933fe4ddc308d545F.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 68,
    name: "Cross Border Foreign Trade Raspberry Flavor Libido Booster Women Herbal Supplements Enhances Female Sexual Desire Supports OE M",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfdcdffa83d7e4f728bd47a6d7d661a7bc.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 69,
    name: "Male Enhancement Gummies Improves Energy & Strength Gummies Men's Health Supplement",
    price: 5.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha862adee0c1b4439bc0d49aa842ba01b5.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 70,
    name: "Private Label Male Enhancement Products OEM/ODM Energy Enhancer Male Vitality Men Health Food Supplement",
    price: 3.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdc2e252f374249c8ac17e5c07ac523aaL.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 71,
    name: "Private Label Male Enlargement Pills Tablet Erectile Booster, Natural Herbal Supplement, Long-lasting Endurance See Results",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H06de15804ab24de882c0df2d9df3c9865.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 72,
    name: "Custom Wholesale Horny Goat Weed Gummies Herbal Supplement Energy Booster Male Enhancement Gummy",
    price: 4.84,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha964b17cb7564afa90616ca28205ad6a3.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 73,
    name: "Gentle Irritation-Free Female Desire Enhancer Coloured Yoni Sweetener Candy Pleasure Yoni Sweet Lump Candy-Feminine Hygiene",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H98772d5bbdf347afad10782480f244deb.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 74,
    name: "Aphrodisiac Maca Energy Gummies for Adults Boosts Sexual Vitality and Love for Both Men and Women Kidney Health Promoting Gummie",
    price: 1.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H697ab33f55ea48a3996551c29f276f36H.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 75,
    name: "Flourisher Nutrient's Gift Male Enhancing Antioxidant Gummy Candy (Strawberry Flavor)",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hef772f7ffc6f4aa383388f7922693197k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 76,
    name: "Men's Erotic Enhancement Erection Cream Penis Growth Gel for Longer Thicker Sexual Massage Personal Care Sex Product",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb924edbb47bf4e38a9d87d0546b61b5b7.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 77,
    name: "Wholesale Male Enhancing Supplement Gummies with Horny Goat Weed, Tribulus & Maca Root Boost Energy for Men",
    price: 3.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7cb6a086f2dd4332b6aae144ff0d56e2n.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 78,
    name: "Hot Selling USA Stock Enhancement Chocolate for Men Mint Flavor Choco",
    price: 13.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6dfba080af2f471482ec52f5bb49efa7A.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 79,
    name: "Men's Custom Royal Chocolate - 100% Pure Aphrodisiac Chocolate OEM ODM Packaging",
    price: 3.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/S0c61577ac48843beb4937e2999e2fff4T.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 80,
    name: "Private Label Herbal Vitality Blend Maca Herbal Chocolate Men Energy Stamina & Vitality Support Supplement OEM",
    price: 5.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha854c83d96e940d78fd368ed50cd46097.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 81,
    name: "High Quality Wholesale Enhancement Power Energy Persistence Desire for Royal Choco Rhinoceros Chocolate Black Bull",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd941283064af4a518ac4589c297c1bf2C.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 82,
    name: "OEM Energy Chocolate Rapid Refreshment Enhances Focus Energy Booster Men Energy Supplements Chocolate Supplements",
    price: 14.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Heac13018c008448b81cf747e7598f0fbz.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 83,
    name: "OEM Male Power Enhancement Maca Gummies Adult Libido Enhancer Gummy Candy Herbal Supplement Male Enlargement Pills",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H02577f52e3004708a701dbf53282ba46Z.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 84,
    name: "Sexual Desire Rhino Choco Vip Chocolate Package Box Packaging Box Printing",
    price: 0.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc16940877e3541eaaf471957f6a0848cF.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 85,
    name: "Female Exciting Sexual Desire Enhancer Chewing Gum",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0750729946a842349d1462e2d0a9435an.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 86,
    name: "OEM/ODM Male Power Enhancement Maca Gummies Adult Libido Enhancer Herbal Vitamin Supplement Male Enlargement",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf50197c50ec3412ea7be034fec0d8e97P.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 87,
    name: "Private Label Men Enlargement Natural Herb Man Film Candy Male Energy Supplements Increase Libido extra Strength Mint Strips",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He699bca67011471194c197e529c113808.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 88,
    name: "Booster for Men Gummies Enhances Strength Stamina Optimizes Physical Performance Male Enhancement Gummies",
    price: 7.38,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb3a23062a8fa44f0bb08ee180756656fI.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 89,
    name: "Hot Selling Power Capsule Sexual Enhancement Rhino 24K VIP Royal Pills 2 Capsules Single Card Blister Packaging",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H46c44fd1b48540cca048c8f3be47d996l.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 90,
    name: "OEM Wholesale Horny Goat Weed Strength Enhancer for Men Vitamins Powder Gummies Candy Oral Liquid Dosage for Adults",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6654fc15cd814f7b948d4a28e5060231O.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 91,
    name: "OEM/ODM Fertility Enhancement love Maca Male Sexual Energy Tea for Men and Women",
    price: 1.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc3bb77bf215c418b930e67b5e43021ef4.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 92,
    name: "Hot Selling Maca Coffee Men's Maca Health Care Energy Product Fertility Men Energy Coffee Sexual Enhancement Solid Drink",
    price: 82.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc0ebc8e09d6e46b6bc6b1a5fe1dea4f4K.jpeg_300x300.jpeg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 93,
    name: "Pure Natural Herbal Maca White Coffee for Men Sexual Enhancer in Neutral Taste Box Packaged with Sugar Flavored Instant Coffee",
    price: 2.34,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hce467637dc2f40238b2b95fa558c33daj.jpeg_300x300.jpeg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 94,
    name: "Female Pleasure Enhancement Capsules Dual-Action Libido Enhancer with Natural Herbal Ingredients for Enhanced Intimacy",
    price: 0.14,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6554039017cd44d9aa546ba739d1b97fK.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 95,
    name: "Maca Capsule Adult Desire Enhancement Energy Booster Powerful Herbal Supplement Soft Candy Male Enhancement of Strength",
    price: 3.71,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H79128d8324954ae381b04b199a8b22f7k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 96,
    name: "Hot Selling Women's Pleasure Enhancer Female Climax Liquid Lubrication Spray to Help Sexual Adult Sex Products Sex Toy for Women",
    price: 3.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1271ac17d84b46028568d0eb3e7df9d9m.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 97,
    name: "Factory Price Organic Maca 100% Natural Herbs Sexual Enhancement Power Energy Male Fertility Health Tea Bags",
    price: 5.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7b05162eac3f4564add4334c4ee81bb6N.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 98,
    name: "Private Label Libido Booster Gummies With Saw Palmetto Natural Female Libido Booster Herb Gummies for Men Women",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb4336a055d754cd4ac3752cb3ade655dN.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 99,
    name: "Private Label Saw Palmetto Natural Female Libido Booster Herb Gummies Gummy Candy Dosage for Men and Women",
    price: 7.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H432a4ab932874c41b79835cc69e4f8b26.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 100,
    name: "Male Enhancement Gummies Raspberry Flavor Booster for Men Supports Energy, Strength, Stamina, Libido &",
    price: 3.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5c82a94968904f7d83fb51400efff8a1V.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 101,
    name: "Women's Sexual Stimulant Liquid Orgasm Vagina Tightening Enhanced Libido Sex Product for Female Enhancement",
    price: 2.79,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H20b2c859ce8b474a9429606d303a8f017.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 102,
    name: "High Quality Private Label/OEM/ODM Male Gummy Male Enhanced Gummies Male Enchanced Chews Candy for Boost Stamina",
    price: 2.52,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8a46be2eccba4371a1bfea8f500bb8d77.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 103,
    name: "Ready to Ship Natural Female Libido Booster Juicy Honey for Women Energy Miel Aphrodisiaque Supplement",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc6a9d4042dc24ccab05d90c4bf7e223di.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 104,
    name: "2025 Hot Sale: Enhancing Erectile Hardness, Extending Sexual Life Time, Premature Ejaculation Solution for Adults",
    price: 1.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha3dc889a1678470989bd5bdb1f18677c6.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 105,
    name: "Hot Sale Dragon Candy Power Strawberry Female Libido Booster for Women Supplement",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hae67ba9da07046b680a0ab5590491d00E.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 106,
    name: "100% Natural Yoni Candy 100g Female Aphrodisiac Yoni Sugar Increase Female Pleasure Candy Lumps",
    price: 1.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H04da28b45641483f8cbf5b6651c74aa7a.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 107,
    name: "Male & Female Enhancement Gummies Horny Goat Male Support Vitality Herbal Supplements",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Habd98fa2eab44d74a98fde1aa3e55baay.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 108,
    name: "Hot Sale Strong Man Sex Products Increase Timing Delay Organ Enlargement Cream Lastin Erection Gel Lotion",
    price: 7.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfb09b69c4d5c437b813d6478d95d0b26q.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 109,
    name: "Biochealth OEM Male Power Enhancement Maca Gummies Adult Libido Enhancer Gummy Candy Herbal Supplement Male Enlargement Pills",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd7c28d2eb5a7403cba9f4bb05bfe3e89I.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 110,
    name: "OEM Plant Extract Supports Sexual Health and Libido Bone Health and Osteoporosis Support 60 Horny Goat Weed Max Gummies",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7d41a77a69c7486c8a5374631fd6ebe6K.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 111,
    name: "Adult Natural Maca Gummy Candies Male Sexual Wellness and Energy Boost Gummies for Desire Arousal and Pleasure",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcde2bff1903e439ca74d583a8b1f3e870.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 112,
    name: "OEM/ODM Horny Goat Weed Sexual Benefits Gummy for Male Enhancement JT Epimedium Herb Shilajit Mixed Gummies for Sale",
    price: 4.73,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Aea473e3df4144afcba073788cf91ba0cI.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 113,
    name: "High Quality Men's Libido Booster Energy and Muscular Support Gummy Candy for Men",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb3fbbf7af6114654979af962ae1db983h.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 114,
    name: "High Quality Female Libido Increase Cream Aphrodisiac Climax Stimulating Gel Orgasm Enhancement Product Sex Toys for Adult Women",
    price: 3.35,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hac9037481dc146578d20a6e6d8ae09c09.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 115,
    name: "WXW Stock Male Power Enhancement Maca Gummies Adult Energy Gummy Candy Herbal Supplement Male Enlargement Gummies",
    price: 2.88,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc9d4a8c39f4d44e0a41bbd4d0e3b91aeF.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 116,
    name: "OEM/ODM Herbal Sexual Libido Enhance Sweet Sugar Instant Coffee for Men in Bag",
    price: 2.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6231205bb48b4ea68392b05386497519q.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 117,
    name: "Factory Supply OEM Horny Goat Weed Maca Epimedium Icariin Herbal Supplement Gummies Libido Support for Women Adult Dosage",
    price: 3.69,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5c919d2443854fdeb16baac85dd3b5923.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 118,
    name: "Bulk Men's Health Supplement Male Enhancement Gummies Natural Vitality & Stamina Support with Ginseng Men's Vitality Gummy Candy",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd6671a53c45d4850861c5ace9dff0f92l.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 119,
    name: "Sweet Men's Power Coffee Herbal Sexual Enhancement Powder with Sugar Flavor Packaged in a Bag",
    price: 3.08,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H10dd3ee3b23f45f2b628ae0b53e07a7au.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 120,
    name: "Aromlife Factory Directly Hot Selling Gorontula Yoni Sugar Candy Women Increase Pleasure Libido Pour Homme From Factory",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0cb9e11a0e474ef9ab55e78fb9ab211fv.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 121,
    name: "OEM Libido Booster for Women With Horny Goat Weed Extract With Maca Epimedium Icariin Herbal Supplement Gummies",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6cb275d25e674361a99e44a1f30adc0b4.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 122,
    name: "Best Selling Libido Booster Gummies for Men with Ginseng and Maca Root Extract Male Sexual Health Gummies",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hbfc1022c0be34f298b1e3832de7fcc27n.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 123,
    name: "OEM Natural Herbal Sex Life Enhancement Penis Essential Erection Extender Lasting Libido Tea Box Packaging",
    price: 45,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Aaeb32fe1220f496b8aab71a75960c40cp.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 124,
    name: "Male Energy Coffee Powder Instant Boost Male Enhancement Coffee Maca Extract Sexual Enhance Instant Coffee for Man",
    price: 3.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H66cb07adf5864d8ab212e8d091ad341eZ.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 125,
    name: "Wholesale Natural Organic Shilajit Gummies With Ashwagandha Black Seed Oil Mushroom Honey Sea Moss Supplement for Libido Booster",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H663037aa6db24fefa2183a92a2653f4cU.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 126,
    name: "Female Libido Support Vitamin Gummies with Horny Goat Weed Extract 60-count for Adult Women Energy Booster",
    price: 3.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H34e0de4e6fc04f0bbc23cf57e55647cfz.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 127,
    name: "Golden Cool Bar Natural Men's Energy Support Premium Herbal Candy Tablets-American Ginseng Sea Cucumber Oyster Peptide",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0c5990e782e342f1addb86aba2bd7f6fX.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 128,
    name: "The Private Label Aphrodisiac Is a Maca Energy Peeling Gummy for Men and Women who Enhance Sexual Vitality and love in Adults",
    price: 2.29,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5ff3a09366564e2ca330ee19dd8b985fa.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 129,
    name: "Factory Direct Sales Libido Increase Cream Aphrodisiac Climax Stimulating Gel Orgasm Enhancement Product Sex Toys for Women",
    price: 8.1,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H984fb82bae194528a595e254326f0eb57.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 130,
    name: "OEM Male Power Enhancement Maca Gummies Adult Libido Enhancer Gummy Candy Herbal Supplement",
    price: 4.68,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc8d85696bf294314ac72bfebf512bb3f7.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 131,
    name: "Male Function Support Maca Everlasting Unyielding Virility Potency Enhancer Supports Erections Increases Hardness",
    price: 2.11,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc42f91ab186f402abcaf8e439d2678c0O.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 132,
    name: "Male Enhancement Candy Erection Enhancer Male Enhancement Capsules Can Improve Stamina See Results in 30 Minutes",
    price: 10.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H694f81bba9344ef4b49fb924a78a213aJ.jpeg_300x300.jpeg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 133,
    name: "Fast Shipping Maca-Based Libido Booster Gummies for Men and Women Not for Pregnant Women",
    price: 2.34,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He5e953fa940d4eef9889774ee57e143bL.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 134,
    name: "Hot Sale 100% Natural Yoni Candy 100g Female Yoni Candy Increase Female Pleasure Candy Lumps",
    price: 1.17,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H55d58f77a6cb41ff885bbd8ff7fd0144D.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 135,
    name: "Women Sex Enhancement Liquid for Women Orgasm Vagina Tightening Increase Female Libido Sexual Stimulant",
    price: 2.79,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfc21cda404fa42568c8a0bd03e929327T.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 136,
    name: "Wholesale Hot Selling Packing Gift Boxes for Royal Choco Vip Sexual' Chocolate for Men Herbal Supplemen't for Male",
    price: 8.1,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H96a0eb766fc34d62a5294fc95ad7888bm.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 137,
    name: "Hot Sell Choco Vip With Dark Chocolate & Packing Vip Chocolate for Supplier Sex Product Oem",
    price: 12.42,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6dfa8468d1c44c87914b2a663f5a94ffy.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 138,
    name: "OEM Pure Natural Herbal Extract Libido Enhancer Premium Male Sexual Performance Product",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/S2ff9b4ef952746ee97c03d732b842ff97.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 139,
    name: "OEM Royal Chocolate with Ginseng for Male Potency - 2 Year Shelf Life, Custom Chocolate Supplement",
    price: 3.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/S14dd969d5b2c4d9682a97c9fbf9b99300.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 140,
    name: "Wholesale Hot Selling Private Label ODM/OEM Gummy Male Enhancement Gummies Pleasure Gummies",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H27893d49b5524d2985b89ccc75495895T.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 141,
    name: "Custom Formula Natural Adult Male Herbal Supplement Makagan Dongge Ali Epimedium Maca Ginseng Exciting Chocolate Only Couple",
    price: 9.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfb5fd5a6f901473a93f8c302851b3de5k.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 142,
    name: "Hot Selling High Quality for Vip Rhin'o Chocolate 20ft Container Supply Sexual Enhancement Products for Men",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H10b3c02699454050a153c31c894dd4b46.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 143,
    name: "High Quality Ashwagandha Root Gummies for Adults Male Enhancement Gummies Candy Naturally Grow Energy and Stamina Support",
    price: 7.38,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H9bc527c67ae9468982eca0b920a3a4dc3.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 144,
    name: "WELLBODY Tongkat Ali Gummies for Men Sexual Enhancement OEM/ODM Factory Supply with Maca Root for Adults",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Had3f963ee78741ad912576864842c000k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 145,
    name: "LUVVITA Custom Wholesale Male Enhanced Gummy Candy Supports Intensity Physical Strength Natural Sports Nutrition for Men's",
    price: 4.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3c5a035b73934b65b9ddc6276b9bba41F.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 146,
    name: "Private Label Nutrition Enhancers for Men-Massive Girth & Libido Booster Long Lasting Gummies",
    price: 0.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd51e5dfd462e4325ab64aaf9e6673bfaX.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 147,
    name: "Best Ales Explosive Oral Sex Candy Adult Sex Toys Foreplay Edible for Both Men and Women Enhances Orgasm Oral Sex Candy",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7e486541481d43709bfb6dd73bd91585f.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 148,
    name: "LongtimeX Male Mint Candy Stamina Booster Male Enhancement Secual Health Libido Vitality Toys Rhino Sec Pills Improve Supplement",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H9004c82bc80e4153a9cba32b1ad9056e1.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 149,
    name: "OEM/ODM Private Label Factory Supply Natural Vegan Products Herbal Libido Booster 7 Days Energy Tea for Men Sexual Libido Tea",
    price: 5.04,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Heb7a8064a8434308a0b38f80f4f469d6L.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 150,
    name: "WXW Stock Vitamin Ginseng Male Enhancement Gummy Male Enhancement Gummies Longer Male Enhancement Increase Intimacy Gummies",
    price: 3.1,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5fa95aef01db49c7aa8ccf6cd3b49eb3Z.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 151,
    name: "Men's Sexual Enhancement Product Ginseng Matsutake Deer Antler Yellow Essence Custom Black Coffee Flavored for Energy Stamina",
    price: 124.18,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H534d489a03f24588a7c3a6ad7c866d0bA.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 152,
    name: "Private Label Wholesale Horny Goat Weed Gummies with Maca L-arginine Boost Stamina Energy Performance Complex Gummy Candy",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5a8865ccc4824c339983b100e97c0d33Q.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 153,
    name: "OEM/ODM Hot Selling Rhino Chocolate - Male Enhancement Supplement, Significant Girth Increase Rhino 69 Male Enhancement Pills",
    price: 8.28,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc4ac91849b324d9fbdea188a40e156c83.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 154,
    name: "S-Tongkat Ali Tribulus Terrestris MACA Gummy Pectin Candy Gummy Energy and Stamina Libido Gummy Vegan Gummy for Adults Men Women",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H607fb3cbb4d54fb694b185c7afbc886aq.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 155,
    name: "7 in 1 Herbal Energy Supplement Gummies for Male Performance Enhancement Tongkat Ali Maca Horny Goat Weed Extract 30 Servings",
    price: 2.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H91ff48d9b9d848c285598793d17c78e5V.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 156,
    name: "Customizable Men's Horny Goat Weed Energy Gummies Horny Goat Weed Epimedium Gummies Tongkat ali Gummies",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H79b351146ccd44c5927d12140486845ac.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 157,
    name: "Hot Selling Male Enhancement Gummies Osterone Booster Supplement for Men Supports Stronger Drive Muscle Growth Not for Pregnant",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He770760bdaf14f82bacfc1161a130f3ea.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 158,
    name: "USA-Origin Premium Quality Horny Goat Weed Saw Palmetto Boron Male Libido Enhancing Gummy OEM Private Label Herbal Supplements",
    price: 7.51,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/A7dc871b97b504885bb4078e15e0a07dad.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 159,
    name: "Wholesale Horny Goat Weed and L-Arginine Blend Gummies Men's Performance Enhancer Gummies Sexual Health and Energy Soft Candies",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H15a631cb72df4523ad2860ba7fed85e0N.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 160,
    name: "Hot Selling Maca Extract Powder Boost Energy Male Enhance Vitality Black Maca Gummies",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/S56ed4be92224439fbe4fea030fda8a0fp.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 161,
    name: "OEM/ODM for Boosts Sexual Health Provide Energy Gummies Enhance Sexual Function 60 Gummies",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hf0fc76ba219043768128b9d420f779f6E.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 162,
    name: "Private Label Horny Goat Weed Gummies for Men Enhance Energy",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc3ab8cf6c0924dd8988ef722bbbea79bz.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 163,
    name: "OEM Food Grade Maca Gummies Herbal Extract Reproductive Health and Hormone Balance Maca Gummies Male Libido Enhancement",
    price: 4.68,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H57489d0b5daa418faef029d27a19a13e2.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 164,
    name: "Male Support Soft Candy Daily Full of Vitality Supplement Gentle Care Boost Energy with Maca Root Muir Puama Horny Goat Extract",
    price: 6.64,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4719ce4910914ff7aa61d96e027c8ebe8.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 165,
    name: "ODM/OEM Multivitamin Made Enhancement Pleasure Gummies Maca Gummies Horny Goat Gummies Kidney Nutritons",
    price: 5.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5ebbd6e09d6d42ac90466c9de433adabj.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 166,
    name: "Usa Hot Selling Royal Honey Dragon Choco Powder for Men Chocolate for Male Power Men's Energy Mixed Container",
    price: 10.15,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H37054159ee5e4de1b3f15786f7016bbdy.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 167,
    name: "WXW Stock Male Enhancement Dominator Energy Gummies Male&female Enhancement Gummy Male Enhancement Rhodiola Panax Ginseng Gummy",
    price: 3.1,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc5176c1bec364204afb6116b3a6cd547O.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 168,
    name: "Men's Extract Gummies Dietary Nutrition Supplements MASSIVEGIRTH Gummies Enlargement and Enhancement Lasting Longer and Stronger",
    price: 4.12,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8ff3c8a8900a484089bc6557d4843d44g.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 169,
    name: "Custom Men's Libido Enhancement Gummies - OEM/ODM, Natural Extracts",
    price: 1.19,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha9d412cd2b09479ba2e0defba0d96279C.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 170,
    name: "Hot Selling Men's Delay Cream & Spray Long Time Sex Enhancement Product",
    price: 8.69,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcf816cb02bcc477ea7a89e01d7017618f.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 171,
    name: "Women's Libido Booster Tea Sexual Desire Health Natural Organic Herbs for Enhanced Intimacy and Desire",
    price: 3.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha1c26e58be0e4b3b9f95ca6d4c17a861W.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 172,
    name: "OEM Male Boost Stamina Supplement Horny Goat Weed Gummies Boost Energy Male Enhancement Gummies",
    price: 5.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H50afa808512a4128a67cc07e8819c56es.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 173,
    name: "Private Label Maca Capsules for Men Supplement Booster Power Energy Support Natural Maca Extract Capsules",
    price: 0.63,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/A1ecf71d761da40eca6b9d7dee504de24E.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 174,
    name: "OEM Vitamin Energy Drink Male Natural Libido Enhancer Adult Nutritional Honey Bar",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3aac5ae1f0554c81b8f450057900c699n.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 175,
    name: "Male Power Enhancement Maca Gummies Adult Libido Enhancer Gummy Candy Herbal Vitamin Supplement Male Enlargement",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6f3caa5b0a864642b62bef6db33c2ca5k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 176,
    name: "Japanese Health Supplement for Night Life Love Liquid Desire Enhancement and Sensitivity Improvement 20ml Unisex Sex Products",
    price: 27,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/U3873bbfe60084be6bcd08f0c14052562v.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 177,
    name: "Increase Female Pleasure Vagina Sweetener Aphrodisiac Yoni Sweet Lump Candy 100% Natural Sexy Crystal Yoni Candy",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd307c3b7c0704b359050b5cb33eb1c89e.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 178,
    name: "OEM/ODM Horny Goat Weed Strawberry Gummies for Adults Energy Stamina Libido Support Natural Herbal Male Enhancement Supplement",
    price: 5.74,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfc45a78210fe40e39df26c7c780c25118.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 179,
    name: "Best selling OEM Male Enhancement Gummies Men's Herbal Erection Support and Sexual Health Gummies",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0ad0920e041a4291abf1f989c7f57645q.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 180,
    name: "OEM Ashwagandha Male Enhancement Gummies Power Energy Boost Herbal Supplements",
    price: 6.66,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7933010fe5ac4eec8a83995ed5f76d55A.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 181,
    name: "Horny Goat Weed Men Power Maca Tribulus Terrestris Gummies Male Enhancement Energy Stamina Vitality Support",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb8aee99527a84c2c9eb557f15b5131ffg.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 182,
    name: "OEM Private Label Mellow-Taste Maca Extract Coffee Supplement Instant Boost Male Enhancement in Bag Packaging with Sugar Flavor",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd8e118a071a64256869244862609fa91t.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 183,
    name: "Oyster Male Adult Flower See Results in 30 Minutes Natural Herbal Erectile Booster Tablets Long Lasting Stamina Strength",
    price: 28.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H33a356147bee4156bed5c47e03e2054ah.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 184,
    name: "Aphrodisiac for Adults Boosts Sexual Vitality and Love for Both Men and Women Maca Gummy Candy",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd1b6c3cdde9946a09760cad54b9be2bbk.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 185,
    name: "OEM Private Label Organic 100% Pure Himalayan Shilajit Resin Gold Gummy Supplement with Fulvic & Humic Acid for Men and Women",
    price: 2.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb40e2bf41e4d49848fea7c5bd97f9525H.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 186,
    name: "Oyster Extract Male Enlargement Tablets Erectile Booster Herbal Energy & Stamina Support OEM Factory Supply",
    price: 4.16,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8b8c79b4984242319f775ecf11570f409.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 187,
    name: "MACA Capsules Women Butt Booster Hips Men Strong Maca Root Capsules Herbal Supplement Power",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Sebad234c86454fe3b5004a583ad64b34f.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 188,
    name: "Vigo Pure Natural Herbal Maca White Coffee for Men Sexual Enhancer in Neutral Taste Box Packaged with Sugar Flavored Bag",
    price: 5.22,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H293ad67d9f994b889d7045fca1e9dadbf.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 189,
    name: "Labels Men Supplement Horny Goat Weed Capsules 100% Natural Booster Health Herbal Support Stamina",
    price: 6.3,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/A26f1e0de65fa48ff979561429237c517E.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 190,
    name: "Natural Male Enhancement Herbal Supplements for Erections and Libido Intimacy Wellness Product",
    price: 34.85,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H9a83fa0d0ac743ffa7ed6177cad039ceH.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 191,
    name: "OEM Boost Stamina Supplement with Horny Goat Weed Tribulus Maca Root Boost Energy Male Enhancement Gummies",
    price: 5.26,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H31cbf5545f474cbdaa843f153fe5a8b4V.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 192,
    name: "Private Label ODM/OEM Gummy Male Enhancement Gummies Pleasure Gummies Used for Emotional and Energy Growth",
    price: 2.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H529f3c25cfaa4c0fba537da94bae2240i.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 193,
    name: "Private Label Male Power Enhancement Capsules Ginseng & Horny Goat Weed Energy Pills in Gummy Candy Dosage Enhance Male Ability",
    price: 2.75,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H73915f8e313448fb916dd1308b23f3f73.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 194,
    name: "Custom 1200K Rhino Magnum 188K Zipper Pouch for Male Sexual Enhancement 100% Natural Herbal Extract Bags for Honey Sexual Pills",
    price: 0.07,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8fa88e9fb57e49108c2f12c5f953a1b5w.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 195,
    name: "OEM Nutritional Supplement Horny Goat Weed Gummies Tribulus Terrestris Support Male Health Enhance Energy",
    price: 4.77,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdb6eba0eac5a4c91b5ffda60bb35cc49d.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 196,
    name: "Private Brand Natural Herbs Extracted to Improve Blood Circulation, Enhance Body Function, Sexual Desire and Soft Gummies",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdb7c68ae801c435c8395f613a3ce1b103.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 197,
    name: "Factory Wholesale Horny Goat Weed Maca Root Powder Male Wellness Support for Men Horny Goat Weed Candy",
    price: 4.19,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hdc028c689c1c4f81baf34998794b7506S.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 198,
    name: "Private Label Libido Booster Gummies for Men Women Hormone Balance With Saw Palmetto Natural Female Libido Booster Herb Gummies",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H218c49014ad342d8bdde7566dcd9c739d.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 199,
    name: "Herbal Libido Booster for Enhanced Sexual Drive Stamina and Intimacy Support Promotes Healthy Sexual Wellness Naturally",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc922e2a969b346b5a3e30b6ab3238546m.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 200,
    name: "Aeglewell Direct Supply Horny Goat Weed Gummies One Time Use Customizable Enhancing Sexual Both Men and Women",
    price: 4.14,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha384899f999f4d5799048858dfaf2c28K.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 201,
    name: "Chinaherbs 100% Natural Herbal Libido Enhancement Male Fertility Tea Bag Style Libido Booster Tea for Men and Women",
    price: 3.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hac9e42c6172b481c8147f36aadfee6b6M.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 202,
    name: "Customize Brand Black Maca Plus Gummy Candy Ashwagandha Root Male Enhancement Maca Root Gummies",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcfe8aae63dad4e66a52f05a3fd37f226k.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 203,
    name: "Quality Certification Tribulus Terrestris Saponin Ginseng Extract Male Libido Enhancer Energy Gummies 5g",
    price: 0.72,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ha77c6c3b326d412da698376a17f1806cB.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 204,
    name: "Gummy Private Label Drop Shipping Horny Goat Weed Gummy Energy Booster Gummies for Men",
    price: 2.97,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6504e0f2f6a44e17aa06b834cffeb7e0p.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 205,
    name: "Female Pineapple Libido Booster Herb Gummies Male Women Libido Support Gummies Gummy Candy Libido",
    price: 2.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6708b9d9c01f411085cfc09295cd333eC.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 206,
    name: "In Stock Oyster Eucommia Male Flower Pressed Candy Increase Libido Oyster Eucommia Male Enhancement Sexnal Mint Strips",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4e1c43191bff4575be07207b679f7fa1y.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 207,
    name: "Premium Herbal Peruvian Maca Tribulus Extract Essence Male Libido Enhancer Coffee",
    price: 12.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb30861bcb114459e8246f190e5258339l.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 208,
    name: "OEM Men Enlargement Gummy Candy for Energy Performance Ashwagandha Herbal Supplements for Male Fertility Natural Libido Vitality",
    price: 3.06,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb5037aa3634847ffab15793910ef3b0ed.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 209,
    name: "GMP Certified Men's Sexual Health Enhancer Energy and Vitality Boost 3g Herbal Gummies",
    price: 0.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H4d234b9fec1c46808ae8296dae2fa3565.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 210,
    name: "ODM/OEM Gummy Male Enhancement Gummies Pleasure Gummies",
    price: 3.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc7c3cdd807a64376ae8bdb58ba0be2cdQ.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 211,
    name: "Effective Herbal Libido Booster Tea for Men Sexual Libido Enhancement Tea",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7c0f8b8c32434624acbd9a7c9f48e4f4e.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 212,
    name: "Private Label Male Sea Cucumber Deer Whip Ginseng Candy Boost Energy Strengthen Stamina Improve Excitement Men Deer Whip Tablet",
    price: 10.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb5867d701105495cb5c3214ef2837de9R.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 213,
    name: "Male Sexual Power Enhancement Tea Bag Improve Fertility and Nourish the Kidney Energy Male Fertility Tea for Men Sexual",
    price: 2.88,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7fa80259526c47a7b7e3f378a6a14322P.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 214,
    name: "Pure Natural Herbal Maca White Coffee for Men Sexual Enhancer in Neutral Taste Box Packaged with Sugar Flavored Bag",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H79ef7103aa2b43c4a62987a8700d1bacT.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 215,
    name: "Power Sexual Enhancement love Maca Sexual Men Power Energy Male Fertility Tea",
    price: 3.06,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H76200cb382514285b9d6b606da0eea3bf.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 216,
    name: "Vitahealthy OEM ODM Private Label Horny Goat Weed Gummies for Men Enhance Energy Endurance Gummies",
    price: 3.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc004a715a2974624afe2607fcf7806afl.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 217,
    name: "Sexual Enhancement Chocolate for Men Choco Royal Wholesale Gift Boxes for Choco Royal Chocolate Vip Uv Coated Embossing",
    price: 9.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5aca7c31dd7e4cd9a4f75dde2087c2c8d.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 218,
    name: "Wholesale Rhino Choco Royal Chocolate VIP Male Enhancement - Custom Packaging OEM",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7178769129c44697840192d914ca6793z.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 219,
    name: "Male Enlargement Chocolate Herbal Supplement Aphrodisiac Exciting Chocolate Long-lasting Endurance",
    price: 3.69,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hbe6cb4dca53f4fa3aa22fd7e50a3b06fz.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 220,
    name: "Hot Sale Royal Choco Black Chocolate Enhance Sexual Function for Men Herbal Extract Large Pack of 12 Pieces 10Gram Each",
    price: 8.82,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H578db35621b1404f82ad6713bf57a0efc.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 221,
    name: "Wholesale Enhancement Men's Energy Rhino Chocolate for Men Royal Choco",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1315c5ae5a024cce9d3f85bce6c18f89N.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 222,
    name: "Premium Male Performance Chocolate Libido Boost & Stamina Enhancement Delicious Cocoa-Based Supplement Custom Formula Bulk",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H47427e1f2bcb4190b51289a165808975u.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 223,
    name: "Black Royal VIP Maca Chocolate Bars Supports Male Prostate Health Boosts Energy & Vitality Enhances Libido Customizable Gift Box",
    price: 10.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7f2758a3f8774ec6bd678d85a2f5fe38L.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 224,
    name: "OEM Custom Formula Men's Natural Adult Male Herbal Supplement Exciting Chocolate Aphrodisiac Herbal Chocolate",
    price: 4.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H420a484953b74b84a3295135c2a99450X.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 225,
    name: "Herbal Supplement Aphrodisiac Exciting Chocolate OEM Custom Formula Men's Natural Adult Male Chocolate",
    price: 12.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H220dd2a997154803bdd4b9dbc10c2cbev.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 226,
    name: "Wholesale Hot Sale High Quality Rhino Chocolate for Men Enhancement",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd45e1546dbce440bac7bd8caed578018v.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 227,
    name: "Wholesale Sexual Supplements Rhino Choco Vip Chocolate",
    price: 0.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3cf66b4b109f44c49f94fd732c5e59bci.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 228,
    name: "OEM Hot Sale Shilajit Chocolate Pure Himalayan Shilajit With 85+ Trace Minerals Men's Supplement Boost Stamina Libido Chocolate",
    price: 9.36,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/He94ebfa87c034c9cb8105821ca9e673a3.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 229,
    name: "Customize OEM Male Function Chocolate Man Enhancement Supplement Epimedium and Maca Root Extract Chocolate Candies",
    price: 7.56,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H7a1f8f5d1f92471b99f99f4c52a6ab12v.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 230,
    name: "Hot-selling Royal Choco Male Enhancement Royal Rhino Chocolate Outer Packaging Box",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H41390e364a4c4b7b98d0a8a6371f12efl.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 231,
    name: "Newest Design High Quality Vip Rhin'o Chocolate Outer Packaging Box Sexual Enhancement honey 20ft Container Supply",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H6bd21f52c93e4a808ca5aad57d98323a2.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 232,
    name: "Hot Selling High Quality for Vip Rhin'o Chocolate Outer Packaging Box Sexual Enhancement Products for Men",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Abb94ea10da8d4822ac4690080cfbf3c38.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 233,
    name: "Hot Selling Royal Choco VIP Chocolate Premium Products Outer Packing Box Rhino Choco Vip Royal Chocolate Sexual Desire Package",
    price: 10.78,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H5e2866497b564d62bf82fd3a1d9b4893U.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 234,
    name: "Private Label Premium Pure Shilajit Resin 75% Fulvic Acid 3000mg Pure Himalayan Shilajit Gummy Candy Immune Support",
    price: 3.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Ab50dd51ce55b4766b69c51a6fd82589cI.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 235,
    name: "Male Vitality Boosting Chocolate Natural Aphrodisiac Extracts Energy & Endurance Support Flexible MOQ ODM Wholesale",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc1e35e31271e41c5ba247a8cfca01d67s.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 236,
    name: "Private Label Support Strength Energy and Immune Pills Supplement Organic Vegan Men Power Tongkat Ali Capsules Extract",
    price: 4.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hd8c913bbe9104d9b9f1bc62e88ab56a92.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 237,
    name: "Premium Quality Wholesale Gift for BlueBerry Rhino Chocolate Enhancement for Men",
    price: 13.5,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1375d3f46744445785c9cfc264c79ae7I.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 238,
    name: "Exciting Aphrodisiacs Chocolate Tab Chocolate Sex Sexual Aphrodisiacs Products for Men in Chocolate Bars Sexual",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc521afe6df0f4d76a6a304357291774du.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 239,
    name: "Foodmate Secret Weapon Creatine Gummies Hidden Potential",
    price: 7.2,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hc2c39310708d4b4a80b594d71015cf21o.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 240,
    name: "China Manufacture Hard Steel for Men Enhancement Chocolate Paper Packages Box",
    price: 0.54,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2dd0f46880ec49b083df087dd34eb3f45.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 241,
    name: "OEM Custom Formula Men's Natural Adult Male Chocolate Herbal Supplement Aphrodisiac Exciting Chocolate",
    price: 4.86,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H67d9a03b5c684d4bb467cdf9ee6ad2d1r.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 242,
    name: "Royal Maca Chocolate, Enhance Male Vitality - Customized Color Box, 2-Year Shelf Life, OEM Service",
    price: 3.58,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Sbfc6c09dbf4e4a3798390bc9f2dfa28cr.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 243,
    name: "mr beast chocolate",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/A86bb389ed41d4f7b842c8e5aa45a221a7.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 244,
    name: "Adult Male Booster Enhancement Capsules Wholesale Nutritional Supplements",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H2d650b3e37924ef8b1cf1f94258e2791Y.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 245,
    name: "Private Label Shilajit Chocolate Boost Energy & Vitality Pure Himalayan Shilajit for Woman",
    price: 11.32,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hb80358aa265147479863d8521dcd01d4E.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 246,
    name: "OEM Shilajit Chewy Chocolate Bars 12 Chocolates Male Energy Immune Support Adult Herbal Supplements",
    price: 4.68,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hef54639497994161a518e754bb9e8525Y.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 247,
    name: "Private Label Factory Wholesale Himalayan Shilajit Chocolate Boost Energy & Vitality Shilajit Supplement for Women",
    price: 6.57,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hfcfec3a5d76343c1a4f32250e84bd4672.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 248,
    name: "Natural Instant Chocolate Premium Mushroom Extract Powder Cocoa Drink 4 in 1 Cordyceps Chaga Reishi Lions Mane Mushroom Cocoa",
    price: 7.88,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0fbce3ceab744cf791e2a8edbbea55eec.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 249,
    name: "Shilajit Chocolate for Men Energy Supplement Ashwagandha 100% Pure SHILAJIT 100mg No Added Sugar Reduce Symptoms Levels",
    price: 12.85,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H78831f9aa1954990abf3f2810c1c3fb7z.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 250,
    name: "Private Customization Men's Energy Booster Libido Support Formula Maca Soft Candy",
    price: 1.44,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Aa0773ae4d5474316af714159164c5c00N.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 251,
    name: "VIP Honey Chocolate Libido Enhancer - Herbal Supplement for Men & Women (US Best-Selling)",
    price: 11.7,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H49917b7d720d42608116f57d0351d4b1H.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 252,
    name: "Hot Selling Popular Chocolate Candy Couple Chocolate to Enhance the Stamina Portable Packaging for Easy Sharing",
    price: 3.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Heee13aeffaea4b969b83a3895694da91N.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 253,
    name: "Wholesale High Quality Luxury Gold Foil Process Folding Magnetic Box for Male Power Chocolate Outer Packaging",
    price: 12.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H016d6516841648069543c9b56fd9ca0ah.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 254,
    name: "New Arrivals Wholesale Sliding Drawer Box for Chocolate Rhino VIP Sexual Liquid Choco Pack",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H200d31a38ef64ac5a889278103fff059B.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 255,
    name: "Hot Selling Chocolate Glossy Matt Lamination Sponge for Sexual Enhancement Embossing Custom Food Packaging Paper Box for Gift",
    price: 0.9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H1cb5febd7b0b4e5fa4cbe80f024fdba4b.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 256,
    name: "OEM/ODM Shilajit Chocolate for Men Pure Shilajit & Ashwagandha Energy & Stamina Support 12 Pieces Athletic Performance Support",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3a719a0df3304d4cab59675b8b0ab6dcA.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 257,
    name: "Chocolate Box,rhino Choco,vip Choco",
    price: 12.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H07ac4988d81d4a8cac50ded1a77489d1D.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 258,
    name: "Hot Sell Rhino Choco Vip With Dark Chocolate Outer Packaging Vip Chocolate for Supplier Sex Product Packages",
    price: 8.96,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H406cb390945346cc815da421cfdb5fde1.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 259,
    name: "Hot Supplier High Quality Chocolate for Men Chocolate Box Mystery Box Men's Product Sexton Box for Male",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H3c163862a27b43b9929f6e7e72b9458dj.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 260,
    name: "New Arrivals Wholesale for Chocolate Rhin'o Vip Sexual Liquid Choco Pack Chocolate Rhin'o Vip Chocolate 20ft Container Supply",
    price: 9,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H8d3e9892ebed4b159ceb7125d1c9f0ddV.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 261,
    name: "Sex Sexual Aphrodisiacs Products for Couple & Husband and Wife in Chocolate Sexual Exciting Aphrodisiacs Chocolate",
    price: 5.4,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H75656e4391a3486bbb8b0dee22c9cadbt.png_300x300.png",
    emoji: "💎",
    isNew: true
  },
  {
    id: 262,
    name: "Natural Desire Enhancement Chocolate for Men - Supports Marital Harmony & Vitality with Herbal Ingredients - Ignites Inner Drive",
    price: 10.8,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/Hcd806f45792c4a73a84eba72346a3d75z.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 263,
    name: "Epimedium Tongkat Ali Chocolate for Enhancing Male Women Desire for Conjugal Life Chocolate Suitable for Active Sexual in Adult",
    price: 3.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H48afd29f077c462294d97bd4130a2bfdk.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 264,
    name: "Hot Selling OEM Himalayan Dietary Supplement Boost Shilajit Chocolate with Label Design for Man",
    price: 12.24,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H025aca014b4f4c73849bd3f5e6a1439bT.jpg_300x300.jpg",
    emoji: "💎",
    isNew: true
  },
  {
    id: 265,
    name: "Hot Selling Royal R-hino Choco VIP Chocolate Outer Packing Box Premium Sex Products Packaging",
    price: 12.6,
    description: "Exclusive luxury item from our new premium collection. Hand-selected for quality and indulgence.",
    category: "Premium Lifestyle",
    image: "https://s.alicdn.com/@sc04/kf/H0786c37a55344cf78b7f4f3c73a5d512N.jpg_300x300.jpg",
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
