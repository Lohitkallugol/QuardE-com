const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://lohit:admin@cluster0.a0y7djn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then((res)=>console.log("Db Rx connection established"))
.catch((err)=>console.log(err,"error in connection"))


// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://lohit:admin@cluster0.a0y7djn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Db Rx connection established");
//     // insertData(); // Call the function to insert data after connection is established
//   })
//   .catch((err) => console.log(err, "error in connection"));

// // Assuming that you've already defined and exported the Shoe model elsewhere
// // const Shoe = require('./path_to_your_shoe_model'); // Adjust the path as needed
// const productModel = require("./Models/products.model");
// const prods = [
//   {
//     id: 109,
//     img: "./images1/sneakers1.jpg",
//     img2: "./images1/sneakers1.jpg",
//     img3: "./images1/sneakers1.jpg",
//     img4: "./images1/sneakers14.jpg",
//     img5: "./images1/sneakers14.jpg",
//     company: "Nike",
//     title: "Nike SuperSonic",
//     color: "Green",
//     category: "sneakers",
//     prevPrice: "2000",
//     newPrice: "1700",
//   },
//   {
//     id: 110,
//     img: "./images/shoes1.jpg",
//     img2: "./images/shoes1a.webp",
//     img3: "./images/shoes1b.jpg",
//     img4: "./images/shoes1c.jpg",
//     img5: "./images/shoes1d.jpg",
//     img6: "./images/shoes1e.jpg",
//     company: "Campus",
//     title: "Sports Running",
//     color: "white",
//     category: "sports",
//     prevPrice: "1500",
//     newPrice: "700",
//   },
//   {
//     id: 111,
//     img: "./images1/sports11.jpg",
//     img2: "./images1/sports12.jpg",
//     img3: "./images1/sports13.jpg",
//     img4: "./images1/sports14.jpg",
//     img5: "./images1/sports15.jpg",
//     company: "Adidas",
//     title: "snaple shoes",
//     color: "gray",
//     category: "sports",
//     prevPrice: "1500",
//     newPrice: "9999",
//   },
//   {
//     id: 112,
//     img: "./images1/sports21.jpg",
//     img2: "./images1/sports22.jpg",
//     img3: "./images1/sports23.jpg",
//     img4: "./images1/sports24.jpg",
//     company: "Puma",
//     title: "Reveal shoes",
//     color: "white",
//     category: "sports",
//     prevPrice: "9999",
//     newPrice: "599",
//   },
//   {
//     id: 113,
//     img: "./images1/sports31.jpg",
//     img2: "./images1/sports32.jpg",
//     img3: "./images1/sports33.jpg",
//     img4: "./images1/sports34.jpg",
//     img5: "./images1/sports35.jpg",
//     company: "Wood land",
//     title: "Campus blue shoes",
//     color: "blue",
//     category: "sports",
//     prevPrice: "1500",
//     newPrice: "9999",
//   },
//   {
//     id: 114,
//     img: "./images1/sports41.jpg",
//     img2: "./images1/sports42.jpg",
//     img3: "./images1/sports43.jpg",
//     img4: "./images1/sports44.jpg",
//     img5: "./images1/sports45.jpg",
//     company: "Nike",
//     title: "Nike running shoes",
//     color: "white",
//     category: "sports",
//     prevPrice: "1500",
//     newPrice: "9999",
//   },
//   {
//     id: 115,
//     img: "./images1/sports51.jpg",
//     img2: "./images1/sports52.jpg",
//     img3: "./images1/sports53.jpg",
//     img4: "./images1/sports54.jpg",
//     img5: "./images1/sports55.jpg",
//     company: "Woodland",
//     title: "Army sports shoes",
//     color: "gray",
//     category: "sports",
//     prevPrice: "1500",
//     newPrice: "9999",
//   },
//   {
//     id: 116,
//     img: "./images1/formals11.jpg",
//     img2: "./images1/formals12.jpg",
//     img3: "./images1/formals13.jpg",
//     img4: "./images1/formals14.jpg",
//     img5: "./images1/formals15.jpg",
//     company: "Adidas",
//     title: "Formal office shoes",
//     color: "red",
//     category: "formals",
//     prevPrice: "1500",
//     newPrice: "9999",
//   },
//   {
//     id: 117,
//     img: "./images1/formals21.jpg",
//     img2: "./images1/formals22.jpg",
//     img3: "./images1/formals23.jpg",
//     img4: "./images1/formals24.jpg",
//     img5: "./images1/formals25.jpg",
//     company: "Puma",
//     title: "Formal casual shoes",
//     color: "red",
//     category: "formals",
//     prevPrice: "1500",
//     newPrice: "9999",
//   },
//   {
//     id: 118,
//     img: "./images1/formals31.jpg",
//     img2: "./images1/formals32.jpg",
//     img3: "./images1/formals33.jpg",
//     img4: "./images1/formals34.jpg",
//     img5: "./images1/formals35.jpg",
//     company: "Woodland",
//     title: "Mytaco Formal shoes",
//     color: "gray",
//     category: "formals",
//     prevPrice: "1500",
//     newPrice: "9999",
//   },
// ];

// async function insertData() {
//   try {
//     await productModel.insertMany(prods);
//     console.log("Data inserted successfully");
//   } catch (err) {
//     console.error("Error inserting data: ", err);
//   } finally {
//     mongoose.connection.close(); // Close the connection after data insertion
//   }
// }

