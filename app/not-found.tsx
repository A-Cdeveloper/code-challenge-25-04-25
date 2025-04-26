import Link from "next/link";

import Image from "next/image";
import Button from "./components/ui/Button";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Not Found</h2>
      <p>The page you are trying to view cannot be found.</p>
      <div style={{ marginTop: "2rem" }}>
        <Image src="/404.svg" alt="404" width={100} height={100} />
      </div>

      <Link href="/">
        <Button variant="reset" size="large" style={{ marginTop: "5rem" }}>
          Return Home
        </Button>
      </Link>
    </div>
  );
}
