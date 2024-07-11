import React, { useEffect, useState } from "react";
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
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (!location.state) {
      console.log("No state or order found");
      navigate("/");
    } else {
      console.log("State and order found");
      setOrder(location.state.order);
    }
  }, [location, navigate]);

  if (!order) {
    return null;
  }

  return (
    <Container>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>
        Order Information
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Order ID: {order.id}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Status: {order.status}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Address: {order.address}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Products:
          </Typography>
          <List>
            {order.products.map((product, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${product.name} - ${product.quantity} x $${product.price}`}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Typography variant="h6" gutterBottom>
            Total Amount: ${order.totalAmount.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
