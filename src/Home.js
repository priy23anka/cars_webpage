import "./App.css";
import React, { useEffect, useState } from "react";
import { Box, Button } from "@material-ui/core";
import axios from "axios";
import { Block, Card, CardContent, Text } from "vcc-ui";

import useStyles from "./styles";
import Stepper from "./Stepper";
import CarCard from "./CarCard";

const Home = () => {
  const classes = useStyles();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [carsData, setCarsData] = useState([]);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const isMobile = screenWidth <= 500;

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  const slideClick = () => {
    const container = document.getElementById("container");
    container.scrollTo(0, 0);
    setLeft(false);
  };

  const slideBackClick = () => {
    const container = document.getElementById("container");
    container.scrollTo(1700, 0);
    setRight(false);
  };

  useEffect(() => {
    if (left) {
      slideBackClick();
    }
    if (right) {
      slideClick();
    }
  }, [right, left]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/cars.json")
      .then((res) => {
        setCarsData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCars(
      carsData.filter((car) =>
        car.bodyType.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, carsData]);

  if (loading) {
    return <p>Loading cars...</p>;
  } else
    return (
      <Block extend={{ paddingTop: 20 }}>
        <Card>
          <CardContent className={classes.wrapper}>
            <Box className={classes.headers}>
              <Text variant="ootah" className={classes.pageTitle}>
                Volvo Cars Showcase
              </Text>

              <input
                aria-label="seach cars"
                className={classes.search}
                type="text"
                placeholder="Search cars by body type..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </Box>
            {!isMobile ? (
              <Box className={classes.carDisplay} id="container">
                {filteredCars.map((car) => (
                  <CarCard
                    bodyType={car.bodyType}
                    imageUrl={car.imageUrl}
                    modelName={car.modelName}
                    id={car.id}
                    modelType={car.modelType}
                  />
                ))}
              </Box>
            ) : (
              <Stepper carsData={filteredCars} />
            )}
          </CardContent>
        </Card>
        <Box className={classes.navs}>
          <Button aria-label="navigation left" onClick={() => setRight(true)}>
            <img
              src="images/chevron-circled.svg"
              className={classes.leftNav}
              alt="chveron"
            />
          </Button>
          <Button aria-label="navigation right" onClick={() => setLeft(true)}>
            <img
              src="images/chevron-circled.svg"
              className={classes.rightNav}
              alt="chveron"
            />
          </Button>
        </Box>
      </Block>
    );
};
export default Home;
