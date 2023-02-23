import React from "react";

const UseLoading = () => {
  const [isLoading, setIsloading] = React.useState(false);

  const startLoading = () => {
    setIsloading(true);
  };

  const stopLoading = () => {
    setIsloading(false);
  };

  return [isLoading, startLoading, stopLoading];
};

export default UseLoading;
