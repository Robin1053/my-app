'use client';
import Card from '@mui/material/Card';
import * as React from 'react';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const ConfettiWrapper = dynamic(() => import('./components/ConfettiWrapper'), {
    ssr: false,
  });

const handleYesClick = () => {
  localStorage.setItem('showConfetti', 'true');
  router.push('/booking');
};


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <Card variant="outlined" className='flex flex-col items-center content-center h-2/6 w-1/6 justify-center'>
        <CardContent>
          <Typography variant="h5" component="div" className='mb-2 text-center'>
            Liebst du mich?
          </Typography>
          <Typography color="text.secondary" className='text-center m-2'>
            Ja oder Nein
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='text' onClick={handleYesClick}>
            Ja
          </Button>
          <Button size="small" color='error'>Nein</Button>
        </CardActions>
      </Card>
    </div>
  );
}


