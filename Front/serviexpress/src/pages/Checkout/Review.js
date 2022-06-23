import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


const addresses = ['123', 'Fake Street', 'Springfield'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Marge Simpson' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  let myOrder = JSON.parse(localStorage.getItem('order'))
  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText>
              <Typography variant="h6">{myOrder.title}</Typography>
              <Typography variant="subtitle1">{myOrder.detail_resume}</Typography>
            </ListItemText>
            <Typography variant="h6">${myOrder.price}</Typography>
          </ListItem>
      

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText>
            <Typography variant="h6">Total</Typography>
          </ListItemText>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
           ${myOrder.price}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
            Adress
          </Typography>
          <Typography variant='h6' gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography variant='h6' gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}