import Breadcrumb from "react-bootstrap/Breadcrumb";

function BreadcrumbApp({ product }) {
 
  return (
    product && (
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={`/categories/${product.Category.slug}`}>
          {product.Category.name}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>
    )
  );
}

export default BreadcrumbApp;
