import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Typography } from '@mui/material';

const HomePage = () => {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{
      backgroundColor: isDarkMode ? theme.palette.background.default : theme.palette.background.paper,
      color: isDarkMode ? theme.palette.text.primary : theme.palette.text.secondary,
      minHeight: '100vh',
      padding: '20px',
    }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src='/logo.png' alt='Logo' style={{ height: '50px' }} />
        <Button variant='contained' onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </header>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={4}>
          <div style={{ border: '1px solid', padding: '10px', borderRadius: '5px' }}>
            <Typography variant='h5'>信頼のネットワーク</Typography>
            <Typography variant='body1'>Description of the first feature.</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div style={{ border: '1px solid', padding: '10px', borderRadius: '5px' }}>
            <Typography variant='h5'>アイテム管理</Typography>
            <Typography variant='body1'>Description of the second feature.</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div style={{ border: '1px solid', padding: '10px', borderRadius: '5px' }}>
            <Typography variant='h5'>スムーズなコミュニケーション</Typography>
            <Typography variant='body1'>Description of the third feature.</Typography>
          </div>
        </Grid>
      </Grid>
      <footer style={{ marginTop: '20px', textAlign: 'center' }}>
        <Typography variant='body2'>© 2026 Your Company. All rights reserved.</Typography>
      </footer>
    </div>
  );
};

export default HomePage;
