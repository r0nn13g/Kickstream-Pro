import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src='https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/12/06/kick-header.jpg'
          alt="kick-computer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kickster
          </Typography>
          <Typography variant="body2" color="text.secondary">
           for kick live streaming...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
