import { useQuery } from "react-query";
import { Table } from "react-daisyui";
import { getCart } from "../api/carts";
import CartItem from "@/components/CartItem";
export default function Cart() {
  const { data, isLoading } = useQuery("cart", getCart, {
    refetchOnMount: false,
  });

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="overflow-x-auto">
      <Table className="mx-auto">
        <Table.Head>
          <span>Name</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </Table.Head>
        <Table.Body>
          {data &&
            data.items.map((item) => <CartItem key={item._id} item={item} />)}
        </Table.Body>
      </Table>
    </div>
  );
}
