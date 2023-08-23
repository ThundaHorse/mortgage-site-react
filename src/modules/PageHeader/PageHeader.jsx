import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '../../components/Button/Button';
import Link from '@mui/material/Link';
import AppBar from '../../components/AppBar/AppBar';
import Toolbar from '../../components/ToolBar/ToolBar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  mr: 3,
};

export const PageHeader = () => {
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Link
              variant='h6'
              underline='none'
              color='inherit'
              href='/'
              sx={{ fontSize: 16, mr: 3 }}
            >
              {'Home'}
            </Link>
            <Link
              variant='h6'
              underline='none'
              href='/reviews'
              sx={{ ...rightLink }}
            >
              {'Reviews'}
            </Link>
          </Box>

          <Box sx={{ flex: 1 }} />
          <Button
            color='secondary'
            variant='contained'
            size='small'
            component='a'
            href='https://www.blink.mortgage/app/signup/p/bcefinancialcorporation/dannypark?campaign=dannypark'
            target='_blank'
            sx={{ minWidth: 100 }}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
