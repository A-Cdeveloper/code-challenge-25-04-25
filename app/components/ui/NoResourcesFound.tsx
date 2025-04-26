import Link from "next/link";
import React from "react";
import Button from "./Button";

const NoResourcesFound = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <p>{children}</p>
      <Link href="/">
        <Button size="medium" style={{ marginTop: "1rem" }}>
          Go to homepage
        </Button>
      </Link>
    </>
  );
};

export default NoResourcesFound;
