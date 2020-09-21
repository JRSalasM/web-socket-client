import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from './Slider';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  actions: {
    padding: '1rem 2rem',
  },
});

export default function SmartCard({ handleChange, name, state }) {
  const classes = useStyles();

  // const handleSwitch = (event) => {
  //   const { checked } = event.target;

  //   if (!checked) {
  //     handleChange(name, 0);
  //   } else {
  //     handleChange(name, 4);
  //   }
  // };
  const handleSlide = (evt, newValue) => {
    handleChange(name, newValue);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Keyboard Light
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        {/* <Switch
          checked={state ? true : false}
          onChange={handleSwitch}
          name={name}
        /> */}
        <Slider value={state} handleSlide={handleSlide} />
      </CardActions>
    </Card>
  );
}
