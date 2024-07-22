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
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import "../styles/OrderInfo.css";

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
const cardStyle2 = {
  // mb: 3,
  background: "transparent",
  border: "none",
  // borderBottom: "2px solid #e0e0e0",
  // borderTop: '2px solid #e0e0e0',
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
      navigate("/"); // Redirige si no hay estado
    } else {
      setOrder(location.state.order); // Actualiza el estado con la orden
    }
  }, [location, navigate]);

  if (!order) {
    return null; // Evita errores de renderizado hasta que order sea válido
  }

  return (
    <Container className="mt-5 pt-5">
      <CssBaseline />
      <div className="d-flex justify-content-between">
        <Typography className="mt-5 orderTitle" variant="h5" gutterBottom>
          Order ID: {order.id}
        </Typography>
        <Link to="/my-profile">
          <p className="buttonStyledDiv">
            <i class="bi bi-arrow-left"></i>
          </p>
        </Link>
      </div>
      <div className="orderHeader">
        <Card sx={headerStyle}>
          <CardContent>
            {/* Encabezado de la Orden */}
            <Grid container spacing={2}>
              <Grid
                item
                xs={6}
                sm={3}
                // sx={{
                //   display: "flex",
                //   justifyContent: "space-between",
                // }}
              >
                <Typography variant="caption" gutterBottom>
                  Date
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {new Date(order.createdAt).toLocaleDateString()}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="caption" gutterBottom>
                  Status
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {order.status}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="caption" gutterBottom>
                  Address
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {order.address}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography sx={totalPriceStyle} variant="caption" gutterBottom>
                  <strong>Total Amount</strong>
                </Typography>
                <Typography
                  sx={totalPriceStyle}
                  variant="subtitle1"
                  gutterBottom
                >
                  <strong>${order.totalAmount.toFixed(2)}</strong>
                </Typography>
              </Grid>
            </Grid>
            {/* <Box
              mb={3}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              
              
              
              
            </Box> */}
          </CardContent>
        </Card>
      </div>

      {/* Lista de Productos */}
      <div className="productsList">
        <List>
          {order.products.map((product, index) => (
            <ListItem
              key={index}
              disableGutters
              sx={{
                borderRadius: "20px",
                paddingTop: "0px",
                paddingBottom: "0px",
              }}
            >
              <Card sx={index === 0 ? cardStyle2 : cardStyle}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.name}
                      sx={{
                        marginLeft: "10px",
                        marginTop: "10px",
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        p: 0.1,
                        borderRadius: "30px",
                        backgroundColor: "lightgrey",
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
                        Total:{" "}
                        <strong>
                          ${(product.price * product.quantity).toFixed(2)}
                        </strong>
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </ListItem>
          ))}
        </List>
      </div>
      <Divider />
      {/* Precio Total */}
    </Container>
  );
}
