"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

import Image from "next/image";
import Button from "./components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Something went wrong!</h2>

      <div style={{ marginTop: "2rem" }}>
        <Image src="/error.svg" alt="404" width={100} height={100} />
      </div>

      <Button
        variant="reset"
        size="large"
        style={{ marginTop: "5rem" }}
        onClick={() => reset()}
      >
        Return Home
      </Button>
    </div>
  );
}
