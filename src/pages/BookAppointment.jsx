import React from "react";
import Maply from "../components/map/Map";
import SearchBar from "../components/map/SearchBar";

const location = {
  address:
    "43 mambolo street wuse zone 2 zone 2 Mambolo St, Wuse 904101, Abuja, Nigeria",
  lat: 9.058291384251444,
  lng: 7.462374396610043,
};
// , 7.462374396610043
const BookAppointment = () => {
  return (
    <div className="w-full">
      <SearchBar />

      <Maply location={location} zoomLevel={17} />
    </div>
  );
};

export default BookAppointment;
