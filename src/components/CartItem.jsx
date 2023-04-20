import { Mask, Table } from "react-daisyui";
export default function CartItem({ item }) {
  console.log(item);
  return (
    <Table.Row>
      <div className="flex items-center space-x-3 truncate">
        <Mask
          className="w-32 h-32 object-cover"
          variant="squircle"
          src={`http://localhost:1111/${item.product.image.replace(
            "public",
            ""
          )}`}
        />
        <div>
          <div className="font-bold">{item.product.name}</div>
        </div>
      </div>
      <div>Price</div>
      <div>{item.quantity}</div>
      <div>{item.subtotal}</div>
    </Table.Row>
  );
}
