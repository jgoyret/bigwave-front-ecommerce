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
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function OrderInfo() {
  const { orderId } = useParams();
  const location = useLocation();
  // const [order, setOrder] = Reakct.useState();
  const order = location.state?.order;
  const previousPath = location.state?.from;
  const navigate = useNavigate();

  // console.log("previous", previousPath);
  console.log("location", location);

  React.useEffect(() => {
    if (!location.state) {
      console.log("no state");
      navigate("/");
    }
  }, []);

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
