import Image from "next/image"
import getCar
 from "@/libs/getcar";

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
                </div>
            </div>
        </main>
    );
}
