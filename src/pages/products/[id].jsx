import { Card, Button, Input } from "react-daisyui";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addToCart } from "../api/carts";
export default function Product({ product }) {
  const [quantity, setQuantity] = useState(1);
  const onChangeHandler = (e) => {
    setQuantity(e.target.value);
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation(addToCart, {
    onSuccess: (data) => {
      alert(data.msg);
      queryClient.invalidateQueries("cart");
    },
    onError: (error) => {
      alert(error.response.data.msg);
    },
  });

  const onSubmitHandler = (e) => {
    let productId = product._id;
    e.preventDefault();
    if (quantity < 1) alert("Minimum quantity should be atleast 1");
    if (quantity > product.quantity)
      alert("Quantity should not exceed available quantity");
    mutate({ quantity, productId });
  };
  return (
    <div>
      <Card>
        <Card.Image
          src={`https://ecom-backend-service-hoaz.onrender.com/${product?.image.replace(
            "public",
            ""
          )}`}
          alt={product?.name}
        />
        <Card.Body>
          <Card.Title tag="h2">{product?.name}</Card.Title>
          <p>{product?.description}</p>
          <small>Quantity: {product?.quantity}</small>
          <Card.Actions className="justify-end">
            <form onSubmit={onSubmitHandler}>
              <div className="form-control">
                <div className="input-group">
                  {quantity}
                  <Input
                    min={1}
                    type="number"
                    name="quantity"
                    onChange={onChangeHandler}
                  />
                  <Button color="primary">Add to Cart</Button>
                </div>
              </div>
            </form>
          </Card.Actions>
        </Card.Body>
      </Card>
    </div>
  );
}
