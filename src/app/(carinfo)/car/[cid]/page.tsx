import Image from "next/image"
import getCar from "@/libs/getCar";
import { Link } from "@mui/material";

export default async function CarDetailPage({params} : { params: {cid:string} }) {
    
    const carDetail = await getCar(params.cid)

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{carDetail.data.model} </h1>
            <div className="flex flex-row my-5">
                <Image  src={carDetail.data.picture}
                        alt= 'Car Image'
                        width={0} height={0} sizes="100vw"
                        className="rounded-lg w-[30%]"
                />
                <div>
                    <div className="text-md mx-5 text-left">{carDetail.data.description}</div>
                    <div className="text-md mx-5 text-left">Doors: {carDetail.data.doors}</div>
                    <div className="text-md mx-5 text-left">Seats: {carDetail.data.seats}</div>
                    <div className="text-md mx-5 text-left">Large Bags: {carDetail.data.largebags}</div>
                    <div className="text-md mx-5 text-left">Small Bags: {carDetail.data.smallbags}</div>
                    <div className="text-md mx-5 text-left">Daily Rental Rate: {carDetail.data.dayRate} (insurance included)</div>

                    <Link href={`/reservations?id=${params.cid}&model=${carDetail.data.model}`}>
                    <button className="black rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
                    Make Reservation</button>
                    </Link>
                
                </div>
            </div>
        </main>
    );
}
