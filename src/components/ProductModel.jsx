import { Link } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";

function ProductModel({ product }) {
  return (
    <>
      <Card sx={{ width: 320, background: "#d0d88a" }}>
        <Link to={`/products/${product.slug}`}>
          <div>
            <Typography level="h4">{product.name}</Typography>
            <Typography sx={{ marginBottom: 2 }} level="body-sm">
              April 24 to May 02, 2024
            </Typography>
          </div>
          <CardOverflow>
            <AspectRatio minHeight="300px" maxHeight="300px">
              <img
                src={product.image}
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </CardOverflow>
        </Link>
        <CardContent orientation="vertical">
          <div>
            <Typography level="body-xs">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              $ {product.price}
            </Typography>
          </div>
          <Button
            variant="solid"
            size="md"
            color="primary"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductModel;
