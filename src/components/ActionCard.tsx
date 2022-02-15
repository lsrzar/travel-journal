import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Link, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
      <CardMedia
        width='125px'
        height='168px'
        component='img'
        image={info.imageUrl}
        alt={info.title.toLowerCase()}
        sx={styles.img}
      />
      <CardContent>
        <Box sx={styles.locationBox}>
          <LocationOnIcon sx={styles.locationIcon} />
          <Typography sx={styles.locationTitle}>{info.location}</Typography>
          <Link
            href={info.googleMapsUrl}
            underline='always'
            sx={styles.locationLink}
          >
            View on Google Maps
          </Link>
        </Box>
        <Box>
          <Typography sx={styles.title}>{info.title}</Typography>
          <Typography sx={styles.date}>
            {info.startDate} - {info.endDate}
          </Typography>
          <Typography sx={styles.description}>{info.description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ActionCard;
