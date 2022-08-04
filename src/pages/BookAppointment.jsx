import React, { useState } from "react";
import Maply from "../components/map/Map";
import SearchBar from "../components/map/SearchBar";
import centerList from "../components/map/CenterList";

const location = {
  address:
    "43 mambolo street wuse zone 2 zone 2 Mambolo St, Wuse 904101, Abuja, Nigeria",
  lat: 9.058291384251444,
  lng: 7.462374396610043,
};

const BookAppointment = () => {
  const [CenterList, setCenterList] = useState(centerList);
  return (
    <div className="w-full">
      <SearchBar CenterList={CenterList} setCenterList={setCenterList} centerList={centerList} />

      <Maply location={location} zoomLevel={17} CenterList={CenterList} />
    </div>
  );
};

export default BookAppointment;
