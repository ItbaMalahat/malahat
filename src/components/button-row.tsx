import Link from "next/link";

type ButtonRowProps = {
  buttons: { label: string; href: string }[];
};

export function ButtonRow({ buttons }: ButtonRowProps) {
  return (
    <p className="button-row">
      {buttons.map((button) => (
        <Link key={button.label} href={button.href} className="button-link">
          {button.label}
        </Link>
      ))}
    </p>
  );
}
