import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { Link } from "react-router-dom";
import { Typography } from "@mui/joy";

function BreadcrumbApp({ product }) {
  return (
    product && (
      <>
        <Breadcrumbs sx={{ paddingLeft: 0 }} aria-label="breadcrumbs">
          <Link to={"/products"} color="neutral">
            All Categories
          </Link>
          <Link to={`/categories/${product.Category.slug}`} color="neutral">
            {product.Category.name}
          </Link>

          <Typography>{product.name}</Typography>
        </Breadcrumbs>
      </>
    )
  );
}

export default BreadcrumbApp;
