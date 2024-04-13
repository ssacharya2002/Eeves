import Image from "next/image";
import Link from "next/link";

const PopularCities = () => {
  const cities = [
    {
      name: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/events?city=Mumbai",
    },
    {
      name: "Delhi",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/events?city=Delhi",
    },
    {
      name: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1598843531029-2d85c4ac000a?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/events?city=Bangalore",
    },
    {
      name: "Chennai",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/events?city=Chennai",
    },
    {
      name: "Kolkata",
      image:
        "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/events?city=Kolkata",
    },
  ];

  return (
    <div className="container mx-auto mt-10 ">
      <div className="flex flex-col pb-8 text-center">
        <h2 className="text-2xl font-bold  pb-1">Popular cities on Eeves</h2>
        <p className="text-sm text-muted-foreground ">
          Looking for fun things to do near you? See what event organizers are
          planning in cities around the country.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 content-center">
        {cities.map((city) => (
          <Link key={city.name} href={city.href}>
            <div className="  overflow-hidden flex flex-col items-center justify-center hover:cursor-pointer">
              <Image
                width={100}
                height={100}
                src={city.image}
                alt={city.name}
                className="object-cover h-32 w-32 rounded-full"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-white">{city.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;