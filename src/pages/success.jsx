import Link from "next/link";

export default function Success() {
  return (
    <div>
      <h2>Checkout Successfully!</h2>
      <Link href="/">Go back shopping</Link>
    </div>
  );
}
