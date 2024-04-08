const { PrismaClient } = require("@prisma/client")


const db = new PrismaClient();


  async function main() {
    const categories = [
      "66923de2-ad07-4118-bc46-db44b4126073",
      "6c291f8d-d456-4003-8222-cce53198a0f4",
      "6cf02d2b-36e6-4bbc-8aa6-d86190febc9e",
      "b8f08e56c-643f-4e92-84fb-1eb27ba2e86f",
      "a5fd99fc-fa82-4d4d-a233-53b74b9b133c",
      "b085245d-e6a3-4107-ae74-0dba46d8d735",
      "bcfe5369-f94d-4454-98cc-4069dfdbe828",
      "ca236f28-2250-4c18-9bee-1b673a656fdb",
      "eedf1730-6426-427c-9ac7-fd634bd2c0a3",
      "f03c74b2-d8ab-463f-8a01-049ef53185a7",
    ];

    const cities = [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Kolkata",
      "Chennai",
      "Hyderabad",
      "Ahmedabad",
      "Pune",
      "Surat",
      "Jaipur",
    ];

    const eventsData = [
      {
        organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww",
        name: "nature and planting",
        location: "Location 1",
        city: cities[0], // Mumbai
        hostedBy: "Host 1",
        description: "Description for Event 1",
        price: 20,
        dateTime: new Date(),
        totalTickets: 100,
        categoryId: categories[Math.floor(Math.random() * categories.length)],
      },
      {
        organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
        name: "Travel expedition",
        location: "near India Gate",
        city: cities[1], // Delhi
        hostedBy: "Host 2",
        description: "Description for Event 2",
        price: 30,
        dateTime: new Date(),
        totalTickets: 150,
        categoryId: categories[Math.floor(Math.random() * categories.length)],
      },
      {
        organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
        image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "plant tree",
        location: "Location 3",
        city: cities[2], // Bangalore
        hostedBy: "Host 3",
        description: "Description for Event 3",
        price: 25,
        dateTime: new Date(),
        totalTickets: 120,
        categoryId: categories[Math.floor(Math.random() * categories.length)],
      },
      {
        organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
        image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "sea cost",
        location: "Location 3",
        city: cities[2], // Bangalore
        hostedBy: "Host 3",
        description: "Description for Event 3",
        price: 25,
        dateTime: new Date(),
        totalTickets: 120,
        categoryId: categories[Math.floor(Math.random() * categories.length)],
      },
      {
        organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
        image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Event 3",
        location: "Location 3",
        city: cities[2], // Bangalore
        hostedBy: "Host 3",
        description: "Description for Event 3",
        price: 25,
        dateTime: new Date(),
        totalTickets: 120,
        categoryId: categories[Math.floor(Math.random() * categories.length)],
      },
      {
        organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
        image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Event 3",
        location: "Location 3",
        city: cities[2], // Bangalore
        hostedBy: "Host 3",
        description: "Description for Event 3",
        price: 25,
        dateTime: new Date(),
        totalTickets: 120,
        categoryId: categories[Math.floor(Math.random() * categories.length)],
      },
      {
        organizerId: "e906ee2f-30b6-463c-89c9-8276fccba2e7",
        image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        name: "Event 3",
        location: "Location 3",
        city: cities[2], // Bangalore
        hostedBy: "Host 3",
        description: "Description for Event 3",
        price: 25,
        dateTime: new Date(),
        totalTickets: 120,
        categoryId: categories[Math.floor(Math.random() * categories.length)],
      },
      // Add more events as needed
    ];

    for (const eventData of eventsData) {
      await db.event.create({
        data: eventData,
      });
    }

    console.log('Seed data inserted successfully.');
  }
  main();
s

