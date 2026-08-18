type PageHeaderProps = {
  title: string;
  intro?: string;
};

export function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <>
      <h1>{title}</h1>
      {intro ? <p className="content-text lede">{intro}</p> : null}
    </>
  );
}
