import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const marks = [
  { label: 'Min', value: 0 },
  { label: 'Max', value: 4 },
];

export default function DiscreteSlider({ value, handleSlide }) {
  const classes = useStyles();

  const handleChange = (event, value) => {
    handleSlide(event, value);
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Level
      </Typography>
      <Slider
        value={value}
        // getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={1}
        marks={marks}
        min={0}
        max={4}
        onChange={handleChange}
      />
    </div>
  );
}
