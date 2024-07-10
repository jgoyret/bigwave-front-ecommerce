// src/App.js

import React from "react";
import {
  CssBaseline,
  Container,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

export default function OrderInfo() {
  const { orderId } = useParams();
  const location = useLocation();
  const order = location.state?.order;

  // if (!order) {
  //   return <div>Order not found</div>;
  // }
  console.log(location);
  const { id, status, address, products, totalAmount } = order;

  return (
    <Container>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>
        Order Information
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Order ID: {id}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Status: {status}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Address: {address}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Products:
          </Typography>
          <List>
            {products.map((product, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${product.name} - ${product.quantity} x $${product.price}`}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Typography variant="h6" gutterBottom>
            Total Amount: ${totalAmount.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
