import Link from "next/link";

const GoBack = ({
  to = "/",
  label = "Homepage",
}: {
  to?: string;
  label?: string;
}) => {
  return (
    <div style={{ margin: "0 0 2rem 0" }}>
      <Link href={to}>&laquo; {label}</Link>
    </div>
  );
};

export default GoBack;
