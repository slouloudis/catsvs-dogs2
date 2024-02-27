import Link from "next/link"
export const metadata = {
    title: 'Dogs!',
    description: 'This is a page about dogs | Cats vs Dogs',
    openGraph: {
        title: 'Dogs!',
        type: "website",
        url: "https://catsvs-dogs2.vercel.app/dogs",
        image: "https://catsvs-dogs2.vercel.app/opengraph-image.jpg",
    }
}


export default async function Dogs() {
    const request = await fetch(`https://dogapi.dog/api/v2/breeds
    `)
    const dogsData = await request.json()
    const dogs = dogsData.data

    return (
        <div>
            <h2>Dogs are very cute. But they can be loud</h2>
            {dogs.map(dog => (
               <div key={dog.id}>
                 <h2>{dog.attributes.name}</h2>
                <Link href={`/dogs/${dog.id}`}>Read more</Link>
               </div>
            ))}
        </div>
    )
}