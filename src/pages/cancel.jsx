import Link from "next/link";

export default function Cancel() {
  return (
    <div>
      <h2>Oops something went wrong...</h2>
      <Link href="/">Go back</Link>
    </div>
  );
}
