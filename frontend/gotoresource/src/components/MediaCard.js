import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../static/media.css"

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
       component="img"
       alt="green iguana"
       height="180"
       image="./work.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           Technical
        </Typography>
      </CardContent>
      <CardActions className = "right">
        <Button size="small">Share</Button>
        <Button size="small"><a className = "links" target="_blank" href={props.link}> Learn more </a></Button>
      </CardActions>
    </Card>
  );
}