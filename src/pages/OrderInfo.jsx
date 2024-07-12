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
    <Container className="mt-5 pt-5">
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
            <Card variant="elevation" sx={{ width: "100%" }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      p: 4,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardContent>
                    <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                      Quantity: {product.quantity}
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                      Price: ${product.price.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                      Total: ${(product.price * product.quantity).toFixed(2)}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
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
