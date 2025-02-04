import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    let products = [
      {
        id: 1,
        name: "boAt Airdropes 131",
        image: "/images/boAtAirdropes131.jpg",
        price: 849,
        orignalPrice: 2990,
        mvp: "60 Hours Playback",
        mvp2: "IWP Technology",
        bestSeller: "BestSeller",
        rating: 4.8,
        sales: 1447,
        qty: 1,
      },
      {
        id: 2,
        name: "boAt Airdropes 161",
        image: "/images/boAtAirdropes161.jpg",
        price: 949,
        orignalPrice: 2490,
        mvp: "40 Hours Playback",
        mvp2: "IWP Technology",
        bestSeller: "",
        rating: 4.8,
        sales: 439,
        qty: 1,
      },
      {
        id: 3,
        name: "boAt Airdropes 141 ANC",
        image: "/images/boAtAirdropes141ANC.jpg",
        price: 1199,
        orignalPrice: 5990,
        mvp: "Noice Cancellation",
        mvp2: "IWP Technology",
        bestSeller: "",
        rating: 4.7,
        sales: 34,
        qty: 1,
      },
      {
        id: 4,
        name: "boAt Airdropes 800",
        image: "/images/boAtAirdropes800.jpg",
        price: 1599,
        orignalPrice: 6490,
        mvp: "Dolby Audio",
        mvp2: "IWP Technology",
        bestSeller: "",
        rating: 4.7,
        sales: 102,
        qty: 1,
      },
      {
        id: 5,
        name: "boAt Airdropes ProGear",
        image: "/images/boAtAirdropesProGear.jpg",
        price: 1799,
        orignalPrice: 6990,
        mvp: "100 Hours Playback",
        mvp2: "IWP Technology",
        bestSeller: "",
        rating: 4.7,
        sales: 26,
        qty: 1,
      },
      {
        id: 6,
        name: "boAt Airdropes Supreme",
        image: "/images/boAtAirdropesSupreme.jpg",
        price: 1399,
        orignalPrice: 5990,
        mvp: "50 Hours Playback",
        mvp2: "IWP Technology",
        bestSeller: "",
        rating: 4.8,
        sales: 114,
        qty: 1,
      },
      {
        id: 7,
        name: "boAt Enigma Gem",
        image: "/images/boAtEnigmaGem.jpg",
        price: 2999,
        orignalPrice: 8499,
        mvp: "AMOLED Display",
        mvp2: "IWP Technology",
        bestSeller: "",
        rating: 4.9,
        sales: 439,
        qty: 1,
      },
      {
        id: 8,
        name: "boAt Stone 180",
        image: "/images/boAtStone180.jpg",
        price: 1299,
        orignalPrice: 2490,
        mvp: "08 Hours Playback",
        mvp2: "IWP Technology",
        bestSeller: "",
        rating: 4.8,
        sales: 27,
        qty: 1,
      },
      {
        id: 9,
        name: "boAt Stone 358 Pro",
        image: "/images/boAtStone358Pro.jpg",
        price: 1999,
        orignalPrice: 4990,
        mvp: "12 Hours Playback",
        mvp2: "IWP Technology",
        bestSeller: "",
        rating: 5.0,
        sales: 1,
        qty: 1,
      },
      {
        id: 10,
        name: "boAt Stone Spinx Pro",
        image: "/images/boAtStoneSpinxPro.jpg",
        price: 2499,
        orignalPrice: 9999,
        mvp: "8 Hours Playback",
        mvp2: "IWP Technology",
        bestSeller: "",
        rating: 4.8,
        sales: 56,
        qty: 1,
      },
    ];

    // Route for all products
    this.get("/products", () => {
      return products;
    });

    // ✅ Route for fetching a single product by ID
    this.get("/products/:id", (schema, request) => {
      let id = request.params.id;
      let product = products.find((p) => p.id === Number(id));
      return product ? product : { error: "Product not found" };
    });
  },
});
