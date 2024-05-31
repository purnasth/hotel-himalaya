import React, { useState, useEffect } from "react";

function Nearby() {
  const nearbyLocations = [
    {
      name: "Tribhuvan International Airport",
      distance: "6.8km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Patan Museum",
      distance: "1.8km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d113698.23358256779!2d84.89524728553098!3d27.059544645031096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eca934d6b2d40b%3A0xbd0542d8b9c9c42d!2sGadhimai%20Temple%2C%20Mahagadhimai%2044405!3m2!1d26.993407299999998!2d85.047285!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325470591!5m2!1sen!2snp",
    },
    {
      name: "Patan Museum Cafe",
      distance: "1.8km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Krisha Mandir",
      distance: "1.6km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Golden Temple",
      distance: "1.5km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Mahaboudha Temple",
      distance: "2.3km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Patko Durbar Square",
      distance: "1.9km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Kathmandu Durbar Square",
      distance: "3.6km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Bhaktapur Durbar Square",
      distance: "13.3km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Swayambhunath Stupa",
      distance: "5.5km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Boudhanath Stupa",
      distance: "8.7km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Pasupatinath Temple",
      distance: "6.3km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Thamel",
      distance: "4.1km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
    {
      name: "Narayan Hiti Palace Museum",
      distance: "4.1km",
      map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
    },
  ];
  const [isMapOpen, setIsMapOpen] = useState(true);
  const [mapUrl, setMapUrl] = useState(nearbyLocations[0]?.map || "");
  const [selectedLocation, setSelectedLocation] = useState(
    nearbyLocations[0] || null
  );

  const openMapModal = (url, location) => {
    setMapUrl(url);
    setSelectedLocation(location);
    setIsMapOpen(true);
    const mapSection = document.getElementById("mapSection");
    mapSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    openMapModal(location.map, location);
  };

  useEffect(() => {
    if (selectedLocation) {
      setMapUrl(selectedLocation.map);
    }
  }, [selectedLocation]);

  return (
    <div className="flex justify-between items-center flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/5 pl-6 lg:h-[90vh] overflow-y-auto">
        <ul>
          {nearbyLocations.map((location) => (
            <li
              key={location.name}
              className="mb-4 cursor-pointer"
              onClick={() => handleLocationClick(location)}
            >
              <span className="font-bold">{location.name}</span>
              <span className="ml-2">{location.distance}</span>
              <br />
              <button
                className="text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
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
      <div
        className="w-full lg:w-4/5 my-8 lg:m-0 lg:p-8"
        // ref={mapRef}
      >
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

export default Nearby;
