import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid'; 
import './Card.css';
import Online from '../Assets/Online-Food.png';
import Dine from '../Assets/Dine-Out.png';
import Night from '../Assets/Night-Life.png';

const cardData = [
  {
    imgSrc: Online,
    title: 'Order Online',
    text: 'Stay home and order to your doorstep',
  },
  {
    imgSrc: Dine,
    title: 'Dining',
    text: 'View the city\'s favourite dining venues',
  },
  {
    imgSrc: Night,
    title: 'Nightlife and Clubs',
    text: 'Explore the city’s top nightlife outlets',
  },
];

function CardComponent() {
  return (
    <Grid container spacing={2} justifyContent="center">
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.imgSrc} 
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.text} 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardComponent;
