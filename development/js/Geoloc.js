import { useEffect, useState } from "react";

const useCoords = () => {
  const [coordLong, setCoordLong] = useState();
  const [coordLati, setCoordLati] = useState();
  useEffect(() => {
    function position(pos) {
      const crd = pos.coords;

      setCoordLong(crd.longitude);
      setCoordLati(crd.latitude);
    }
    navigator.geolocation.getCurrentPosition(position);
  }, []);

  return [coordLong, coordLati];
};

export default useCoords;
