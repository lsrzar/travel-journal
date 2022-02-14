import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';
import styles from './styles';

interface CardProps {
  key: number;
  info: {
    title: string;
    location: string;
    googleMapsUrl: string;
    startDate: string;
    endDate: string;
    description: string;
    imageUrl: string;
  };
}

const ActionCard: React.FC<CardProps> = ({ info }) => {
  return (
    <Card sx={styles.card}>
      <CardActionArea sx={styles.area}>
        <CardMedia
          component='img'
          image={info.imageUrl}
          alt={info.title.toLowerCase()}
          sx={styles.img}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h6'
            component='div'
            sx={styles.title}
          >
            {info.title}
          </Typography>
          <Typography sx={styles.description}>{info.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionCard;
