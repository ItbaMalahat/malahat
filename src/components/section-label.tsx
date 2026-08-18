type SectionLabelProps = {
  id?: string;
  title: string;
};

export function SectionLabel({ id, title }: SectionLabelProps) {
  return <h2 id={id}>{title}</h2>;
}
