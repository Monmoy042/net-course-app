import React, { useEffect, useState } from "react";

const useLoadData = () => {
  const [courseInfo, setCourseInfo] = useState([]);
  useEffect(() => {
    const url = "https://monmoy042.github.io/net-school/data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourseInfo(data));
  }, []);

  return courseInfo;
};

export default useLoadData;
