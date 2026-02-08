import { prisma } from "../src/database/prisma-client";

async function main() {
  console.log("Cleaning existing data...");

  await prisma.review.deleteMany();
  await prisma.productColor.deleteMany();
  await prisma.storageOption.deleteMany();
  await prisma.smartphoneSpecs.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  console.log("Database cleaned successfully!");

  const categories = await prisma.category.createMany({
    data: [
      {
        name: "Phones",
        description: "Latest smartphones and mobile devices",
        url_icon: "https://i.postimg.cc/yYR1KBZg/Phones.png",
      },
      {
        name: "Smart Watches",
        description: "Smart watches and wearables",
        url_icon: "https://i.postimg.cc/qR7BH3s4/Smart-Watches.png",
      },
      {
        name: "Cameras",
        description: "Digital cameras and photography equipment",
        url_icon: "https://i.postimg.cc/Z5kqv0Sx/Cameras.png",
      },
      {
        name: "Headphones",
        description: "Headphones, earbuds and audio accessories",
        url_icon: "https://i.postimg.cc/QCHM1TC0/Headphones.png",
      },
      {
        name: "Computers",
        description: "Laptops, desktops and computer accessories",
        url_icon: "https://i.postimg.cc/cHdggCfb/Computers.png",
      },
      {
        name: "Gaming",
        description: "Gaming consoles and accessories",
        url_icon: "https://i.postimg.cc/Y0nWw7Gy/Gaming.png",
      },
      {
        name: "Tablets",
        description: "Tablets and iPads",
        url_icon: "https://i.postimg.cc/yYR1KBZg/Phones.png",
      },
      {
        name: "TV & Home Theater",
        description: "Televisions and home entertainment systems",
        url_icon: "https://i.postimg.cc/cHdggCfb/Computers.png",
      },
      {
        name: "Smart Home",
        description: "Smart home devices and automation",
        url_icon: "https://i.postimg.cc/qR7BH3s4/Smart-Watches.png",
      },
      {
        name: "Audio Systems",
        description: "Speakers and audio systems",
        url_icon: "https://i.postimg.cc/QCHM1TC0/Headphones.png",
      },
      {
        name: "Accessories",
        description: "Electronics accessories and cables",
        url_icon: "https://i.postimg.cc/Y0nWw7Gy/Gaming.png",
      },
      {
        name: "Drones",
        description: "Drones and aerial photography equipment",
        url_icon: "https://i.postimg.cc/Z5kqv0Sx/Cameras.png",
      },
    ],
    skipDuplicates: true,
  });

  console.log(`Created ${categories.count} categories`);

  const phonesCategory = await prisma.category.findFirst({
    where: { name: "Phones" },
  });
  const watchesCategory = await prisma.category.findFirst({
    where: { name: "Smart Watches" },
  });
  const headphonesCategory = await prisma.category.findFirst({
    where: { name: "Headphones" },
  });
  const tabletsCategory = await prisma.category.findFirst({
    where: { name: "Tablets" },
  });
  const camerasCategory = await prisma.category.findFirst({
    where: { name: "Cameras" },
  });
  const computersCategory = await prisma.category.findFirst({
    where: { name: "Computers" },
  });
  const gamingCategory = await prisma.category.findFirst({
    where: { name: "Gaming" },
  });

  const iphone14Specs = await prisma.smartphoneSpecs.create({
    data: {
      screen_size: '6.7"',
      cpu: "A16 Bionic",
      total_cores: "6",
      main_camera: "48MP",
      front_camera: "12MP",
      battery: "4323mAh",
    },
  });

  const iphone11Specs = await prisma.smartphoneSpecs.create({
    data: {
      screen_size: '6.1"',
      cpu: "A11 Bionic",
      total_cores: "4",
      main_camera: "16MP",
      front_camera: "12MP",
      battery: "4200mAh",
    },
  });

  const iphone13Specs = await prisma.smartphoneSpecs.create({
    data: {
      screen_size: '6.1"',
      cpu: "A13 Bionic",
      total_cores: "4",
      main_camera: "16MP",
      front_camera: "12MP",
      battery: "3560mAh",
    },
  });

  const iphone14ProSpecs = await prisma.smartphoneSpecs.create({
    data: {
      screen_size: '6.1"',
      cpu: "A16 Bionic",
      total_cores: "6",
      main_camera: "48MP",
      front_camera: "12MP",
      battery: "3200mAh",
    },
  });

  const iphone15ProSpecs = await prisma.smartphoneSpecs.create({
    data: {
      screen_size: '6.1"',
      cpu: "A17 Bionic",
      total_cores: "6",
      main_camera: "48MP",
      front_camera: "12MP",
      battery: "3400mAh",
    },
  });

  const iphone16ProSpecs = await prisma.smartphoneSpecs.create({
    data: {
      screen_size: '6.3"',
      cpu: "A18 Bionic",
      total_cores: "6",
      main_camera: "48MP",
      front_camera: "12MP",
      battery: "3700mAh",
    },
  });

  const galaxyS23Specs = await prisma.smartphoneSpecs.create({
    data: {
      screen_size: '6.8"',
      cpu: "Snapdragon 8",
      total_cores: "8",
      main_camera: "200MP",
      front_camera: "12MP",
      battery: "5000mAh",
    },
  });

  const galaxyZFoldSpecs = await prisma.smartphoneSpecs.create({
    data: {
      screen_size: '6.8"',
      cpu: "Snapdragon 8",
      total_cores: "8",
      main_camera: "200MP",
      front_camera: "12MP",
      battery: "4000mAh",
    },
  });

  const pixel9Specs = await prisma.smartphoneSpecs.create({
    data: {
      screen_size: '6.2"',
      cpu: "Snapdragon 8",
      total_cores: "8",
      main_camera: "50MP",
      front_camera: "16MP",
      battery: "4100mAh",
    },
  });

  const pixel8ProSpecs = await prisma.smartphoneSpecs.create({
    data: {
      screen_size: '6.8"',
      cpu: "Snapdragon 8",
      total_cores: "8",
      main_camera: "50MP",
      front_camera: "12MP",
      battery: "4200mAh",
    },
  });

  const xiaomi14ProSpecs = await prisma.smartphoneSpecs.create({
    data: {
      screen_size: '6.9"',
      cpu: "Snapdragon 8",
      total_cores: "8",
      main_camera: "100MP",
      front_camera: "24MP",
      battery: "5000mAh",
    },
  });

  const iphone14Product = await prisma.product.create({
    data: {
      name: "Apple iPhone 14 Pro Max",
      description:
        "The ultimate iPhone experience with Pro camera system, Dynamic Island, and all-day battery life",
      brand: "Apple",
      price: 900,
      discounted_price: 849,
      stock: 25,
      url_image: "https://i.postimg.cc/k4ZQwWxB/phone1.png",
      tag: "discount_up_to_50",
      id_category: phonesCategory!.id,
      id_specs_smartphone: iphone14Specs.id,
    },
  }); 

  const iphone13Product = await prisma.product.create({
    data: {
      name: "Apple iPhone 13",
      description:
        "The ultimate iPhone experience with Pro camera system, Dynamic Island, and all-day battery life",
      brand: "Apple",
      price: 869,
      discounted_price: 829,
      stock: 25,
      url_image: "https://i.postimg.cc/bwN6Bq2V/Iphone-14-pro-1-2.png",
      tag: "featured_products",
      id_category: phonesCategory!.id,
      id_specs_smartphone: iphone13Specs.id,
    },
  });

  const iphone11Product = await prisma.product.create({
    data: {
      name: "Apple iPhone 11",
      description:
        "The ultimate iPhone experience with Pro camera system, Dynamic Island, and all-day battery life",
      brand: "Apple",
      price: 520,
      discounted_price: 500,
      stock: 25,
      url_image: "https://i.postimg.cc/HLktBzRq/Iphone-14-pro-1.png",
      tag: "discount_up_to_50",
      id_category: phonesCategory!.id,
      id_specs_smartphone: iphone11Specs.id,
    },
  });

  const iphone14ProProduct = await prisma.product.create({
    data: {
      name: "Apple iPhone 14 Pro",
      description:
        "Premium iPhone with massive storage, professional camera capabilities, and stunning gold finish",
      brand: "Apple",
      price: 1499,
      stock: 15,
      url_image: "https://i.postimg.cc/YqpbDzFs/phone2.png",
      tag: "bestseller",
      id_category: phonesCategory!.id,
      id_specs_smartphone: iphone14ProSpecs.id,
    },
  });

  const iphone15ProProduct = await prisma.product.create({
    data: {
      name: "Apple iPhone 15 Pro",
      description:
        "Premium iPhone with massive storage, professional camera capabilities, and stunning gold finish",
      brand: "Apple",
      price: 1799,
      stock: 15,
      url_image: "https://i.postimg.cc/TwkjmxhB/Iphone-14-pro-1-1.png",
      tag: "new_arrival",
      id_category: phonesCategory!.id,
      id_specs_smartphone: iphone15ProSpecs.id,
    },
  });

  const iphone16ProProduct = await prisma.product.create({
    data: {
      name: "Apple iPhone 16 Pro",
      description:
        "Premium iPhone with massive storage, professional camera capabilities, and stunning gold finish",
      brand: "Apple",
      price: 2089,
      stock: 15,
      url_image: "https://i.postimg.cc/3xcZfmhW/Iphone-14-pro-1-3.png",
      tag: "new_arrival",
      id_category: phonesCategory!.id,
      id_specs_smartphone: iphone16ProSpecs.id,
    },
  });

  const galaxyS23Product = await prisma.product.create({
    data: {
      name: "Samsung Galaxy S23 Ultra",
      description:
        "Powerful Android smartphone with S Pen, advanced camera system, and premium performance",
      brand: "Samsung",
      price: 1299,
      discounted_price: 1199,
      stock: 30,
      url_image: "https://i.postimg.cc/T1b0NsbD/phone-01.png",
      tag: "discount_up_to_50",
      id_category: phonesCategory!.id,
      id_specs_smartphone: galaxyS23Specs.id,
    },
  });

  const galaxyZFoldProduct = await prisma.product.create({
    data: {
      name: "Samsung Galaxy Z Fold",
      description:
        "Powerful Android smartphone with S Pen, advanced camera system, and premium performance",
      brand: "Samsung",
      price: 1499,
      discounted_price: 1489,
      stock: 30,
      url_image: "https://i.postimg.cc/KY3D6jcf/Iphone-14-pro-1-4.png",
      tag: "featured_products",
      id_category: phonesCategory!.id,
      id_specs_smartphone: galaxyZFoldSpecs.id,
    },
  });

  const pixel9Product = await prisma.product.create({
    data: {
      name: "Google Pixel 9",
      description:
        "Powerful Android smartphone with S Pen, advanced camera system, and premium performance",
      brand: "Google",
      price: 1300,
      discounted_price: 1249,
      stock: 30,
      url_image: "https://i.postimg.cc/FKX8X69T/pixel9.png",
      tag: "new_arrival",
      id_category: phonesCategory!.id,
      id_specs_smartphone: pixel9Specs.id,
    },
  });

  const pixel8ProProduct = await prisma.product.create({
    data: {
      name: "Google Pixel 8 Pro",
      description:
        "Premium iPhone with massive storage, professional camera capabilities, and stunning gold finish",
      brand: "Google",
      price: 1049,
      stock: 15,
      url_image: "https://i.postimg.cc/vmmqywJL/Google-Pixel-8-Pro-Bay-azul.png",
      tag: "bestseller",
      id_category: phonesCategory!.id,
      id_specs_smartphone: pixel8ProSpecs.id,
    },
  });

  const xiaomi14ProProduct = await prisma.product.create({
    data: {
      name: "Xiaomi 14 Pro",
      description:
        "Premium iPhone with massive storage, professional camera capabilities, and stunning gold finish",
      brand: "Xiaomi",
      price: 930,
      stock: 15,
      url_image: "https://i.postimg.cc/QCpCdP20/xiaomi-14-pro-branco.png",
      tag: "featured_products",
      id_category: phonesCategory!.id,
      id_specs_smartphone: xiaomi14ProSpecs.id,
    },
  });

  const appleWatchProduct = await prisma.product.create({
    data: {
      name: "Apple Watch Series 9 GPS 41mm",
      description:
        "Advanced smartwatch with health monitoring, fitness tracking, and seamless iPhone integration",
      brand: "Apple",
      price: 399,
      stock: 40,
      url_image: "https://i.postimg.cc/0QThJMHq/smartwatch.png",
      tag: "bestseller",
      id_category: watchesCategory!.id,
    },
  });

  const galaxyWatchProduct = await prisma.product.create({
    data: {
      name: "Samsung Galaxy Watch6 Classic 47mm",
      description:
        "Elegant smartwatch with rotating bezel, comprehensive health tracking, and long battery life",
      brand: "Samsung",
      price: 369,
      stock: 35,
      url_image: "https://i.postimg.cc/28FJpb4S/Iphone-14-pro-1-3.png",
      tag: "new_arrival",
      id_category: watchesCategory!.id,
    },
  });

  const xiaomiSmartBandProduct = await prisma.product.create({
    data: {
      name: "Xiaomi Smart Band 9",
      description:
        "Elegant smartwatch with rotating bezel, comprehensive health tracking, and long battery life",
      brand: "Xiaomi",
      price: 149,
      stock: 35,
      url_image: "https://i.postimg.cc/3NrVk06V/xiaomi-smart-band-9.png",
      tag: "bestseller",
      id_category: watchesCategory!.id,
    },
  });

  const airpodsProduct = await prisma.product.create({
    data: {
      name: "AirPods Pro 2nd Generation",
      description:
        "Wireless headphones with active noise cancellation and premium sound quality",
      brand: "Apple",
      price: 549,
      stock: 50,
      url_image: "https://i.postimg.cc/cHYCy3pK/headphone.png",
      tag: "new_arrival",
      id_category: headphonesCategory!.id,
    },
  });

  const galaxyBudsProduct = await prisma.product.create({
    data: {
      name: "Galaxy Buds FE",
      description:
        "True wireless earbuds with excellent sound quality and comfortable fit",
      brand: "Samsung",
      price: 99,
      stock: 60,
      url_image: "https://i.postimg.cc/KYKJYRgL/Iphone-14-pro-1-1.png",
      tag: "bestseller",
      id_category: headphonesCategory!.id,
    },
  });

  const ipadProduct = await prisma.product.create({
    data: {
      name: 'Apple iPad 9 10.2" Wi-Fi',
      description:
        "Versatile tablet perfect for work, entertainment, and creativity with powerful A13 Bionic chip",
      brand: "Apple",
      price: 398,
      stock: 20,
      url_image: "https://i.postimg.cc/LXKB6vSK/Iphone-14-pro-1.png",
      tag: "new_arrival",
      id_category: tabletsCategory!.id,
    },
  });

  const galaxyTabProduct = await prisma.product.create({
    data: {
      name: 'Samsung Galaxy Tab S9 Ultra 14.6"',
      description:
        "Premium Android tablet with massive screen, S Pen support, and desktop-level performance",
      brand: "Samsung",
      price: 1199,
      discounted_price: 1099,
      stock: 15,
      url_image: "https://i.postimg.cc/GhkzkZd0/tablet-01.png",
      tag: "featured_products",
      id_category: tabletsCategory!.id,
    },
  });

  const cameraProducts = await prisma.product.createMany({
    data: [
      {
        name: "Sony Alpha A7III Mirrorless Camera",
        description:
          "Professional full-frame mirrorless camera with exceptional image quality and 4K video",
        brand: "Sony",
        price: 1999,
        stock: 10,
        url_image: "https://i.postimg.cc/Df4xzSNw/camera-02.png",
        tag: "bestseller",
        id_category: camerasCategory!.id,
      },
      {
        name: "Canon EOS R5 Mirrorless Camera",
        description:
          "High-performance mirrorless camera with 45MP sensor and 8K video recording",
        brand: "Canon",
        price: 3899,
        stock: 8,
        url_image: "https://i.postimg.cc/sD99B74s/camera-01.png",
        tag: "featured_products",
        id_category: camerasCategory!.id,
      },
      {
        name: "Blackmagic Pocket Cinema Camera 6k",
        description:
          "Professional full-frame mirrorless camera with exceptional image quality and 4K video",
        brand: "Blackmagic",
        price: 2349,
        stock: 9,
        url_image: "https://i.postimg.cc/P5kXWwGn/camera-blackmagic.png",
        tag: "new_arrival",
        id_category: camerasCategory!.id,
      }
    ],
    skipDuplicates: true,
  });

  const computerProducts = await prisma.product.createMany({
    data: [
      {
        name: 'MacBook Pro 16" M2 Pro',
        description:
          "Professional laptop with stunning display, powerful performance, and all-day battery",
        brand: "Apple",
        price: 2499,
        stock: 12,
        url_image: "https://i.postimg.cc/V6dDnvL4/macbook.png",
        tag: "bestseller",
        id_category: computersCategory!.id,
      },
      {
        name: "Dell XPS 15 Laptop",
        description:
          "Premium Windows laptop with 4K display and powerful Intel processors",
        brand: "Dell",
        price: 1899,
        discounted_price: 1699,
        stock: 18,
        url_image: "https://i.postimg.cc/ydtnPKDK/laptop-01.png",
        tag: "discount_up_to_50",
        id_category: computersCategory!.id,
      },
      {
        name: "Dell Inspiron 13 Laptop",
        description:
          "Premium Windows laptop with 4K display and powerful Intel processors",
        brand: "Dell",
        price: 1499,
        stock: 18,
        url_image: "https://i.postimg.cc/MGkLyFNy/pngtree-dell-laptops-png-image-12894568.png",
        tag: "bestseller",
        id_category: computersCategory!.id,
      },
      {
        name: "Asus Vivobook 15 Laptop",
        description:
          "Premium Windows laptop with 4K display and powerful Intel processors",
        brand: "Asus",
        price: 1349,
        stock: 18,
        url_image: "https://i.postimg.cc/Sx9TNGRj/asus-vivobook-15.png",
        tag: "featured_products",
        id_category: computersCategory!.id,
      },
    ],
    skipDuplicates: true,
  });

  const gamingProducts = await prisma.product.createMany({
    data: [
      {
        name: "PlayStation 5 Console",
        description:
          "Next-generation gaming console with ultra-high speed SSD and immersive gaming experiences",
        brand: "Sony",
        price: 499,
        stock: 5,
        url_image: "https://i.postimg.cc/qMfj6kfX/ps5.png",
        tag: "featured_products",
        id_category: gamingCategory!.id,
      },
      {
        name: "Xbox Series X Console",
        description:
          "Powerful gaming console with 4K gaming, high frame rates, and quick resume feature",
        brand: "Microsoft",
        price: 499,
        stock: 7,
        url_image: "https://i.postimg.cc/htcsMptX/xbox.png",
        tag: "featured_products",
        id_category: gamingCategory!.id,
      },
      {
        name: "Apple Vision Pro",
        description:
          "Next-generation gaming console with ultra-high speed SSD and immersive gaming experiences",
        brand: "Apple",
        price: 499,
        stock: 5,
        url_image: "https://i.postimg.cc/vZ3mGZjR/image-36.png",
        tag: "new_arrival",
        id_category: gamingCategory!.id,
      },
    ],
    skipDuplicates: true,
  });

  console.log("Products created successfully!");

  const products = await prisma.product.findMany();
  const colors = [
    { hex_code: "#8A2BE2", name: "Deep Purple" },
    { hex_code: "#000000", name: "Black" },
    { hex_code: "#FFFFFF", name: "White" },
    { hex_code: "#FFD700", name: "Gold" },
    { hex_code: "#C0C0C0", name: "Silver" },
    { hex_code: "#FF0000", name: "Red" },
    { hex_code: "#0000FF", name: "Blue" },
    { hex_code: "#008000", name: "Green" },
  ];

  for (const product of products) {
    const randomColors = colors
      .sort(() => 0.5 - Math.random())
      .slice(0, 3 + Math.floor(Math.random() * 2));

    for (const color of randomColors) {
      await prisma.productColor.create({
        data: {
          hex_code: color.hex_code,
          name: color.name,
          id_product: product.id,
        },
      });
    }
  }

  const storageProducts = await prisma.product.findMany({
    where: {
      OR: [
        { id_category: phonesCategory!.id },
        { id_category: tabletsCategory!.id },
        { name: { contains: "MacBook" } },
        { name: { contains: "XPS" } },
      ],
    },
  });

  const storageOptions = ["128GB", "256GB", "512GB", "1TB", "2TB"];

  for (const product of storageProducts) {
    const applicableOptions = storageOptions.slice(
      0,
      2 + Math.floor(Math.random() * 2)
    );

    for (const size of applicableOptions) {
      await prisma.storageOption.create({
        data: {
          size: size,
          id_product: product.id,
        },
      });
    }
  }

  interface ReviewTemplate {
    rating: number;
    message: string;
    name_user: string;
  }

  const reviewTemplates: ReviewTemplate[] = [
    {
      rating: 5,
      message: "Excellent product! Highly recommended.",
      name_user: "John Smith",
    },
    {
      rating: 4,
      message: "Very good quality, but a bit expensive.",
      name_user: "Maria Johnson",
    },
    {
      rating: 5,
      message: "Absolutely love it! Worth every penny.",
      name_user: "David Wilson",
    },
    {
      rating: 3,
      message: "Good product, but could be better.",
      name_user: "Sarah Brown",
    },
    {
      rating: 5,
      message: "Best purchase I've made this year!",
      name_user: "Michael Taylor",
    },
    {
      rating: 4,
      message: "Great features and performance.",
      name_user: "Emily Davis",
    },
    {
      rating: 2,
      message: "Not what I expected, disappointed.",
      name_user: "Robert Miller",
    },
    {
      rating: 5,
      message: "Perfect for my needs, very satisfied.",
      name_user: "Jennifer Anderson",
    },
  ];

  const userImages: (string | null)[] = [
    "https://i.postimg.cc/wTsQ9n7y/female-1.png",
    "https://i.postimg.cc/Dz7rdZ5L/female-2.png",
    "https://i.postimg.cc/kg3FGwbj/female-3.png",
    "https://i.postimg.cc/vZr7V97G/female-4.png",
    "https://i.postimg.cc/vmXWPsSj/male-1.png",
    "https://i.postimg.cc/tTTFwMKg/male-2.png",
    "https://i.postimg.cc/Y9sQHx7z/male-3.png",
    "https://i.postimg.cc/mk1C2F2f/male-4.png"
  ];

  for (const product of products) {
    const numReviews = 3 + Math.floor(Math.random() * 4);
    const shuffledReviews = [...reviewTemplates]
      .sort(() => 0.5 - Math.random())
      .slice(0, numReviews);

    for (let i = 0; i < shuffledReviews.length; i++) {
      const review = shuffledReviews[i];

      if (!review) continue;

      await prisma.review.create({
        data: {
          rating: review.rating,
          message: review.message,
          name_user: review.name_user,
          url_image_user: userImages[i % userImages.length] ?? null,
          id_product: product.id,
        },
      });
    }
  }

  console.log("Colors, storage options, and reviews added successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
