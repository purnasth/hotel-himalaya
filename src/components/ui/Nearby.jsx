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
    <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-y-12 sm:gap-y-24 xl:gap-8">
      <div className="xl:col-span-1 h-80 md:h-96 lg:h-[36rem] xl:h-[90vh] overflow-y-auto">
        <ul>
          {nearbyLocations.map((location) => (
            <li
              key={location.name}
              className={`md:mx-4 my-2 cursor-pointer px-2 py-1 sm:px-4 sm:py-3 rounded-lg border hover:bg-goldLight transition-all duration-300 ease-linear ${
                selectedLocation === location ? "bg-goldLight text-black" : ""
              }`}
              onClick={() => handleLocationClick(location)}
            >
              <span className="text-xs md:text-sm font-semibold">
                {location.name}
              </span>
              <span className="text-xs md:text-sm ml-2">
                - {location.distance}
              </span>
              <br />
              <button
                className="text-sm text-blue-600"
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
      <div className="lg:col-span-3">
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
