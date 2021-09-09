import React, { useEffect, useState } from 'react'
import axios from "axios";
function ProductsView() {
    
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
      getEventData();
    }, []);
  
    function getEventData() {
      const url = "http://localhost:8000/products/";
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          console.log(data);
          setEventData(data);
          console.log("data has been received");
        })
        .catch(() => {
          console.log("error retreiving data");
        });
    }



    return (
        <div>
            Products Page is Hit
        </div>
    )
}

export default ProductsView
