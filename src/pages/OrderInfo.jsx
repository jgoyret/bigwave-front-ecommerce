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

const headerStyle = {
  mb: 3,
  background: "transparent",
  border: "none",
  // borderBottom: "2px solid #e0e0e0",
  borderTop: "2px solid #e0e0e0",
  display: "flex",
  flexDirection: "column",
  boxShadow: "none",
};
const cardStyle = {
  // mb: 3,
  background: "transparent",
  border: "none",
  // borderBottom: "2px solid #e0e0e0",
  borderTop: "2px solid #e0e0e0",
  width: "100%",
  boxShadow: "none",
  margin: "0px 0",
};

const totalPriceStyle = {};

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
        Order ID: {order.id}
      </Typography>
      <Card sx={headerStyle}>
        <CardContent>
          {/* Encabezado de la Orden */}
          <Box
            mb={0}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle2" gutterBottom>
              Date
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Status
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Address
            </Typography>
            <Typography sx={totalPriceStyle} variant="subtitle2" gutterBottom>
              Total Amount
            </Typography>
          </Box>
          <Box
            mb={3}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {new Date(order.createdAt).toLocaleDateString()}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {order.status}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {order.address}
            </Typography>
            <Typography sx={totalPriceStyle} variant="subtitle1" gutterBottom>
              ${order.totalAmount.toFixed(2)}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Lista de Productos */}
      <List>
        {order.products.map((product, index) => (
          <ListItem
            key={index}
            disableGutters
            sx={{ paddingTop: "0px", paddingBottom: "0px" }}
          >
            <Card sx={cardStyle}>
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
                      borderRadius: "40px",
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
    </Container>
  );
}
