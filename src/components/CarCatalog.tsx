import Link from "next/link";
import ProductCard from "./ProductCard";

export default async function CarCatalog ({carJson} : {carJson:Object}) {

    const carLsonReady = await carJson
    return (
        <>
        Explore {carLsonReady.count} models of in our CarCatalog
        <div style={{margin: "20px", display:"flex",flexDirection:"row",
                flexWrap:"wrap", justifyContent: "space-around", alignContent: "space-around"
            }}>
                {
                    carLsonReady.data.map((carItem:Object)=>(
                        <Link href={`/car/${carItem.id}`}
                                className="w-1/5" key={carItem.id}>
                            <ProductCard  carName={carItem.model} imgSrc={carItem.picture}
                            />
                        </Link>
                    ))
                }
            </div>
        </>
    );
}