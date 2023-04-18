import { Card, Button } from "react-daisyui";
export default function Product({ product }) {
  return (
    <div>
      <Card>
        <Card.Image
          src={`http://localhost:1111/${product.image.replace("public", "")}`}
          alt={product.name}
        />
        <Card.Body>
          <Card.Title tag="h2">{product.name}</Card.Title>
          <p>{product.description}</p>
          <Card.Actions className="justify-end">
            <Button color="primary">Buy Now</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  );
}
