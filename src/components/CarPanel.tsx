'use client'
import ProductCard from "./ProductCard";
import { useReducer } from "react";

export default function CarPanel(){

    const CompareReducer = (compareList:Set<string>, action:{type:string, carName:string}) => {
        switch(action.type){
            case 'add':{
                return new Set(compareList.add(action.carName))
            }
            case 'remove' : {
                compareList.delete(action.carName)
                return new Set(compareList)
            }
            default: return compareList
        }
    }

    const [ compareList, dispatchCampare] = useReducer(CompareReducer, new Set<string>())

    return(
        <div>
            <div style={{margin: "20px", display:"flex",flexDirection:"row",
                flexWrap:"wrap", justifyContent: "space-around", alignContent: "space-around"
        }}>
                <ProductCard carName="Honda  Civic" imgSrc="/img/civic.jpg" 
                        onCompare={(car:string)=>dispatchCampare({type:'add',carName:car})}/>
                <ProductCard carName="Honda  Accord" imgSrc="/img/accord.jpg"
                        onCompare={(car:string)=>dispatchCampare({type:'add',carName:car})}/>
                <ProductCard carName="Toyota Fortuner" imgSrc="/img/fortuner.jpg"
                        onCompare={(car:string)=>dispatchCampare({type:'add',carName:car})}/>
                <ProductCard carName="Tesla Model 3" imgSrc="/img/tesla.jpg"
                        onCompare={(car:string)=>dispatchCampare({type:'add',carName:car})}/>
            </div>

            <div className="w-full text-xl font-medium">
                Compare List:{compareList.size}
            </div>

            { Array.from(compareList).map( (car) => <div key={car} 
                    onClick={()=>dispatchCampare({type:'remove', carName:car})}>
                {car}</div>) }
        </div>
    );
}