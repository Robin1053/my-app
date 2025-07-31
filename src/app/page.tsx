import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <div className='m-2'>
      <Stack spacing={2} direction="row">
        <h1>Basic Buttons Example</h1>
        <Button variant="text">Text Button</Button>
        <Button variant="contained">Contained Button</Button>
        <Button variant="outlined">Outlined Button</Button>
      </Stack>
    </div>

  );
}
