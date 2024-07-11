import React, { useEffect, useState } from "react";
import {
  CssBaseline,
  Container,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Divider,
  Box,
  Grid,
  Button,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function OrderInfo() {
  const { orderId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null); // Inicialmente null

  useEffect(() => {
    if (!location.state || !location.state.order) {
      console.log("No state or order found");
      navigate("/"); // Redirige si no hay estado
    } else {
      console.log("State and order found");
      setOrder(location.state.order); // Actualiza el estado con la orden
    }
  }, [location, navigate]);

  if (!order) {
    return null; // Evita errores de renderizado hasta que order sea válido
  }

  return (
    <Container>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>
        Order Information
      </Typography>
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          {/* Encabezado de la Orden */}
          <Box mb={3}>
            <Typography variant="h5" gutterBottom>
              Order ID: {order.id}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Date: {new Date(order.createdAt).toLocaleDateString()}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Status: {order.status}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Address: {order.address}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Lista de Productos */}
      <List>
        {order.products.map((product, index) => (
          <ListItem key={index} disableGutters>
            <Card variant="outlined" sx={{ width: "100%", mb: 2 }}>
              <CardActionArea>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.name}
                      sx={{ height: "100%", objectFit: "contain", p: 2 }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <CardContent>
                      <Typography variant="body1">{product.name}</Typography>
                      <Typography variant="body2">
                        Quantity: {product.quantity}
                      </Typography>
                      <Typography variant="body2">
                        Price: ${product.price.toFixed(2)}
                      </Typography>
                      <Typography variant="body2">
                        Total: ${(product.price * product.quantity).toFixed(2)}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* Precio Total */}
      <Box mt={3}>
        <Typography variant="h6" gutterBottom>
          Total Amount: ${order.totalAmount.toFixed(2)}
        </Typography>
      </Box>
    </Container>
  );
}
