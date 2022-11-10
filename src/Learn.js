import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Learn = () => {
  const { id } = useParams();
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/cars.json")
      .then((res) => {
        setCarsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (

    <>


      {
        carsData.map((ele) => {
          if (id === ele.id)
            return (
              
<div  key={ele.id}>

<p>{ele.bodyType}</p>
<p>{ele.modelName}</p>
<p>{ele.modelType}</p>
<img src={ele.imageUrl} alt="img" style={{width:"350px", height:"350px"}} />


</div>
                
              
            )
        })
      }

    </>

  )
}
export default Learn;
