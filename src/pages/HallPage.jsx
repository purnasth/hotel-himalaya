import React from "react";
import EnquiryNow from "../components/ui/EnquiryNow";
import Banner from "../components/Banner";

const HallPage = () => {
  return (
    <>
      <Banner
        banner="https://s3-alpha-sig.figma.com/img/4e1d/2131/7f8b9696b68e3c854fbc935f98175f3d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IfqHj9kfHZoaYjo7IzhKxyNWC4OvkhivogJYUW2IysDdUzA2jTblBUW~7-2ff6rBbZ61aYoaNh3JYI7-IXghL6Jg366LMXfLoomjfJJ0wg7BhyAwMtvfVI~Z30fwKoJo9KochbMEkeOZOaOUK3iVRweaAtZkbMz3IBXZg2Gsp4aUKMzkXhj2tQ9yrBBr8J5GgswtIa1Tll1DfDoZUwf6I0g7QwC75oK8zfUpNJU92TAZhZvSlVnbXrn~M66sLUojoNpqVO7fpCdev1WFZ9p7oKUKplG3u~H5930U29Z3XkeWdRFZGAmnaAn0X~jjXdMYllnZdDdIR5dsqVxfYAGoTA__"
        title="Auspicious Convention Center"
        description="Comfortable accommodation directly in the hotel with extensive 
        Wellness and exceptional gastronomy."
        page="Events"
      />
      <EnquiryNow />
    </>
  );
};

export default HallPage;
