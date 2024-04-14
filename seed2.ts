// const { PrismaClient } = require("@prisma/client")


// const db = new PrismaClient();


//   async function main() {

//     const cities = [
//       "Mumbai",
//       "Delhi",
//       "Bangalore",
//       "Kolkata",
//       "Chennai",
//       "Hyderabad",
//       "Ahmedabad",
//       "Pune",
//       "Surat",
//       "Jaipur",
//     ];

//     const eventsData = [
//       {
//         organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
//         image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww",
//         name: "Importance of free speech",
//         location: "free speech",
//         city: cities[0], // Mumbai
//         hostedBy: "Shakti's house",
//         description: "Description for Event 1",
//         price: 20,
//         dateTime: new Date(),
//         totalTickets: 100,
//         categoryId: categories[Math.floor(Math.random() * categories.length)],
//       },
//       // {
//       //   organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
//       //   image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
//       //   name: "Travel expedition",
//       //   location: "near India Gate",
//       //   city: cities[1], // Delhi
//       //   hostedBy: "Host 2",
//       //   description: "Description for Event 2",
//       //   price: 30,
//       //   dateTime: new Date(),
//       //   totalTickets: 150,
//       //   categoryId: categories[Math.floor(Math.random() * categories.length)],
//       // },
//       // {
//       //   organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
//       //   image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
//       //   name: "plant tree",
//       //   location: "Location 3",
//       //   city: cities[2], // Bangalore
//       //   hostedBy: "Host 3",
//       //   description: "Description for Event 3",
//       //   price: 25,
//       //   dateTime: new Date(),
//       //   totalTickets: 120,
//       //   categoryId: categories[Math.floor(Math.random() * categories.length)],
//       // },
//       // {
//       //   organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
//       //   image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
//       //   name: "sea cost",
//       //   location: "Location 3",
//       //   city: cities[2], // Bangalore
//       //   hostedBy: "Host 3",
//       //   description: "Description for Event 3",
//       //   price: 25,
//       //   dateTime: new Date(),
//       //   totalTickets: 120,
//       //   categoryId: categories[Math.floor(Math.random() * categories.length)],
//       // },
//       // {
//       //   organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
//       //   image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
//       //   name: "Event 3",
//       //   location: "Location 3",
//       //   city: cities[2], // Bangalore
//       //   hostedBy: "Host 3",
//       //   description: "Description for Event 3",
//       //   price: 25,
//       //   dateTime: new Date(),
//       //   totalTickets: 120,
//       //   categoryId: categories[Math.floor(Math.random() * categories.length)],
//       // },
//       // {
//       //   organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
//       //   image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
//       //   name: "Event 3",
//       //   location: "Location 3",
//       //   city: cities[2], // Bangalore
//       //   hostedBy: "Host 3",
//       //   description: "Description for Event 3",
//       //   price: 25,
//       //   dateTime: new Date(),
//       //   totalTickets: 120,
//       //   categoryId: categories[Math.floor(Math.random() * categories.length)],
//       // },
//       // {
//       //   organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
//       //   image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
//       //   name: "Event 3",
//       //   location: "Location 3",
//       //   city: cities[2], // Bangalore
//       //   hostedBy: "Host 3",
//       //   description: "Description for Event 3",
//       //   price: 25,
//       //   dateTime: new Date(),
//       //   totalTickets: 120,
//       //   categoryId: categories[Math.floor(Math.random() * categories.length)],
//       // },
//       // Add more events as needed
//     ];

//     for (const eventData of eventsData) {
//       await db.event.create({
//         data: eventData,
//       });
//     }

//     console.log('Seed data inserted successfully.');
//   }
//   main();


