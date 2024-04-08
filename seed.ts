const { PrismaClient } = require("@prisma/client")


const prismadb = new PrismaClient();

async function main() {
  await prismadb.event.createMany({
    data: [
      {
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww',
        name: 'Music Concert',
        location: 'Concert Hall',
        hostedBy: 'Music Events LLC',
        description: 'A spectacular music concert featuring top artists.',
        price: 50,
        dateTime: new Date('2024-04-10T18:00:00Z'),
        totalTickets: 500,
        ticketSold: 200,
      },
      {
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww',
        name: 'Art Exhibition',
        location: 'Art Gallery',
        hostedBy: 'Creative Events Agency',
        description: 'An exquisite display of contemporary art pieces.',
        price: 20,
        dateTime: new Date('2024-04-15T10:00:00Z'),
        totalTickets: 200,
        ticketSold: 50,
      },
      {
        image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww',
        name: 'Food Festival',
        location: 'City Park',
        hostedBy: 'Culinary Events Inc.',
        description: 'A celebration of food with delicious offerings from around the world.',
        price: 30,
        dateTime: new Date('2024-04-20T12:00:00Z'),
        totalTickets: 300,
        ticketSold: 100,
      },
      {
        image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Tech Conference',
        location: 'Convention Center',
        hostedBy: 'InnovateTech',
        description: 'Explore the latest trends and innovations in technology.',
        price: 100,
        dateTime: new Date('2024-04-25T09:00:00Z'),
        totalTickets: 1000,
        ticketSold: 300,
      },
      {
        image: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
        name: 'Music Concert',
        location: 'Concert Hall',
        hostedBy: 'Music Events LLC',
        description: 'A spectacular music concert featuring top artists.',
        price: 50,
        dateTime: new Date('2023-04-10T18:00:00Z'),
        totalTickets: 500,
        ticketSold: 200,
      }
    ],
  });




  //  main()


  async function main() {
    const categories = [
      "451b7491-7d79-4586-a6ef-5ae384d2b0ab",
      "4d181a94-7238-4af5-9592-a45c08f2907e",
      "8f840e57-493f-42a9-8c0f-38e58aa7075b",
      "b3e85fad-6392-43f3-9460-e4a0ef223d61",
      "be0b099a-9acc-4a46-bd68-8375c090b654",
      "c1773cca-8b86-47ea-be8b-309b960b0563",
      "d02316fe-0544-4c4d-b2ad-070fdb6ab1de",
      "e3b205a5-0e98-4668-9aff-228481f1e836",
      "e906ee2f-30b6-463c-89c9-8276fccba2e7",
      "fd21af38-a4fc-43ad-a8f1-c34db86f361d",
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
      await prismadb.event.create({
        data: eventData,
      });
    }

    console.log('Seed data inserted successfully.');
  }
}
  // main();




  async function categories() {
    const categories = [
      "Tech",
      "Fitness & Wellness",
      "Outdoor Adventures",
      "Food & Dining",
      "Arts & Culture",
      "Music & Performing Arts",
      "Career & Business",
      "Socializing & Networking",
      "Personal Growth & Self-Improvement",
      "Hobbies & Crafts"
    ];

    // for (const categoryName of categories) {
    //   await prismadb.category.create({
    //     data: {
    //       name: categoryName
    //     }
    //   });
    //   console.log(`Category '${categoryName}' seeded successfully.`);
    // }

    const categoriesid = await prismadb.category.findMany();
    console.log(categoriesid);
    
  }
categories()

{/*
[
  {
    id: '66923de2-ad07-4118-bc46-db44b4126073',
    name: 'Socializing & Networking'
  },
  {
    id: '6c291f8d-d456-4003-8222-cce53198a0f4',
    name: 'Outdoor Adventures'
  },
  {
    id: '6cf02d2b-36e6-4bbc-8aa6-d86190febc9e',
    name: 'Music & Performing Arts'
  },
  {
    id: '8f08e56c-643f-4e92-84fb-1eb27ba2e86f',
    name: 'Hobbies & Crafts'
  },
  { id: 'a5fd99fc-fa82-4d4d-a233-53b74b9b133c', name: 'Food & Dining' },
  {
    id: 'b085245d-e6a3-4107-ae74-0dba46d8d735',
    name: 'Personal Growth & Self-Improvement'
  },
  {
    id: 'bcfe5369-f94d-4454-98cc-4069dfdbe828',
    name: 'Fitness & Wellness'
  },
  {
    id: 'ca236f28-2250-4c18-9bee-1b673a656fdb',
    name: 'Career & Business'
  },
  {
    id: 'eedf1730-6426-427c-9ac7-fd634bd2c0a3',
    name: 'Arts & Culture'
  },
  { id: 'f03c74b2-d8ab-463f-8a01-049ef53185a7', name: 'Tech' }
]
*/}