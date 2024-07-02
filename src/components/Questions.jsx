import Accordion from "react-bootstrap/Accordion";

function Questions() {
  return (
    <>
      <div className="container faq-height w-50">
        <h3 className="text-center">FAQ's</h3>
        <Accordion>
          <Accordion.Item className="bg-transparent" eventKey="0">
            <Accordion.Header>
              Will I receive the same product that I see in the photo?
            </Accordion.Header>
            <Accordion.Body>
              Photos of the products are merely illustrative. All images are
              designed to represent the product in its best aesthetic version.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="bg-transparent" eventKey="1">
            <Accordion.Header>How can I return an item?</Accordion.Header>
            <Accordion.Body>
              Products can be returned if there is any problem, but only within
              the first 24 hours after purchase.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="bg-transparent" eventKey="2">
            <Accordion.Header>
              Do you ship to the entire country?
            </Accordion.Header>
            <Accordion.Body>
              We ship to all of Uruguay. The shipping cost will depend on the
              total purchase and the destination location.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="bg-transparent" eventKey="3">
            <Accordion.Header>
              Can I use reusable grocery bags to carry items while I shop?
            </Accordion.Header>
            <Accordion.Body>
              Although we encourage our customers to use reusable bags, we ask
              that you wait to use them until checkout. You may use our shopping
              carts or baskets to carry items while shopping in store.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="bg-transparent" eventKey="4">
            <Accordion.Header>What is Bigwave’s sustainability philosophy?</Accordion.Header>
            <Accordion.Body>
            Bigwave is dedicated to being a responsible business with a focus on the environment, product quality and supply chain transparency.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default Questions;
