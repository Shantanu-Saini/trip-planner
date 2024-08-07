"use client"
import BusBooking from "@/components/BusBooking";
import FlightBooking from "@/components/FlightBooking";
import HotelBooking from "@/components/HotelBooking";
import TrainBooking from "@/components/TrainBooking";

export default function BookingPage({ params }) {
    const { item, city } = params;
    // console.log(item + city);

    if (item === "hotels") {
        return <HotelBooking city = {city}/>
    }
    else if (item === "buses") {
        return <BusBooking city = {city}/>
    }
    else if (item === "trains") {
        return <TrainBooking city = {city}/>
    }
    else if (item === "flights") {
        return <FlightBooking city = {city}/>
    }
}
