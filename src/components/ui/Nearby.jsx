import React, { useState, useEffect } from "react";
import { withDataFetching } from "../../constants/data";

function Nearby({ data: nearbyLocations }) {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mapUrl, setMapUrl] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    if (nearbyLocations && nearbyLocations.length > 0) {
      setSelectedLocation(nearbyLocations[0]);
      setMapUrl(nearbyLocations[0].map);
      setIsMapOpen(true);
    }
  }, [nearbyLocations]);

  const openMapModal = (url, location) => {
    setMapUrl(url);
    setSelectedLocation(location);
    setIsMapOpen(true);
    setTimeout(() => {
      const mapSection = document.getElementById("mapSection");
      if (mapSection) {
        mapSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 0);
  };

  const handleLocationClick = (location) => {
    openMapModal(location.map, location);
  };

  return (
    <div className="grid grid-cols-4 items-center gap-8">
      <div className="col-span-1 lg:h-[90vh] overflow-y-auto">
        <ul>
          {nearbyLocations.map((location) => (
            <li
              key={location.name}
              className={`mx-4 my-2 cursor-pointer px-4 py-3 rounded-lg border hover:bg-goldLight transition-all duration-300 ease-linear ${
                selectedLocation === location ? "bg-goldLight text-black" : ""
              }`}
              onClick={() => handleLocationClick(location)}
            >
              <span className="text-base">{location.name}</span>
              <span className="ml-2">- {location.distance}</span>
              <br />
              <button
                className="text-blue-600"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLocationClick(location);
                }}
                title="Get Direction"
                aria-label="Get Direction"
              >
                Get Direction
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-3">
        {isMapOpen && (
          <div
            id="mapSection"
            className="relative w-full rounded-lg scroll-mt-32 md:scroll-mt-12"
          >
            <iframe
              title="Map"
              src={mapUrl}
              className="w-full h-64 md:h-96 lg:h-[90vh] rounded-lg shadow-lg"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default withDataFetching(Nearby, "/api/nearbyLocations.json");
