import { prisma } from "@/lib/prisma"
import React from "react"

const getTrips = async () => {
   const trips = await prisma.trip.findMany({});

   return trips;
}

const Trips = async () => {
   //const data = await getTrips();

   // Essa requisição só é feita uma vez, e nas  próximas não, irá pegar do cache.
   const data = await fetch("http://jsonplaceholder.typicode.com/posts", {
      next: {
         revalidate: 10 // Vai revalidar o cache a cada 10 segundos, pode desativar colocando como 0 ou false.
      }
   }).then((res) => res.json());


   return <div>
      {data.map((i: any) => (
         <p key={i.id}>{i.title}</p>
      ))}
   </div>
}

export default Trips;
