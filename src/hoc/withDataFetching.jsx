import React from "react";
import { useFetchData, Loader } from "../constants/data";

const withDataFetching = (WrappedComponent, url) => {
  return (props) => {
    const { data, loading, error } = useFetchData(url);

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return <WrappedComponent data={data} {...props} />;
  };
};

export default withDataFetching;
