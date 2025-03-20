'use client'

import { AppDispatch, useAppSelector } from "@/redux/store"
import { removeReservation } from "@/redux/feature/cartSlice"
import { useDispatch } from "react-redux"

export default function ReservationCart() {

    const carItems = useAppSelector( (state) => state.cart.carItems)
    const dispath = useDispatch<AppDispatch>()
    return (
        <>
        {
            carItems.map((reservationItem) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                        key={reservationItem.carId}>
                    <div className="text-xl">{reservationItem.carModel}</div>
                    <div className="text-sm">Pick-up: {reservationItem.pickupDate} from {reservationItem.pickupLocation}</div>
                    <div className="text-sm">Pick-up: {reservationItem.returnDate} from {reservationItem.returnLocation}</div>
                    <div className="text-md">Duration: {reservationItem.numOfDays}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1
                                        text-white shadow-sm" onClick={()=>dispath(removeReservation(reservationItem))}>
                    Remove from Cart
                    </button>
                </div>
            ))
        }
        </>
    )
}