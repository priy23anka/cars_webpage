import React from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import useStyles from "./styles";
import CarCard from "./CarCard";

const Stepper = ({ carsData }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (carsData.length > 0) {
    return (
      <>
        <CarCard
          bodyType={carsData[activeStep].bodyType}
          imageUrl={carsData[activeStep].imageUrl}
          modelName={carsData[activeStep].modelName}
          id={carsData[activeStep].id}
          modelType={carsData[activeStep].modelType}
        />

        <MobileStepper
          variant="dots"
          steps={carsData.length}
          position="static"
          activeStep={activeStep}
          className={classes.root}
          nextButton={
            <Button
              size="small"
              aria-label="stepper"
              onClick={handleNext}
              disabled={activeStep === carsData.length - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft aria-label="left icon" />
              ) : (
                <KeyboardArrowRight aria-label="right icon" />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              aria-label="navigation"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight aria-label="left icon" />
              ) : (
                <KeyboardArrowLeft aria-label="right icon" />
              )}
              Back
            </Button>
          }
        />
      </>
    );
  } else return <p>Loading cars...</p>;
};
export default Stepper;
