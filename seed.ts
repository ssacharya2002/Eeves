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


  await prismadb.city.createMany({
    data:[
      {
        name:"Mumbai"
      },
      {
        name:"Delhi"
      },
      {
        name:"Bangalore"
      },
      {
        name:"Kolkata"
      },
    ]
  })
}

 main()
