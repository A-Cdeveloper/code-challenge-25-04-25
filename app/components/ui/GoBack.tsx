import Link from "next/link";

const GoBack = ({
  to = "/",
  label = "Homepage",
}: {
  to?: string;
  label?: string;
}) => {
  return (
    <div style={{ margin: "0 0 2rem 0", fontSize: "1.4rem" }}>
      <Link href={to}>&laquo; {label}</Link>
    </div>
  );
};

export default GoBack;
