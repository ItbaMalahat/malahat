const SAFETY_KEYWORDS = ["ai safety", "digital safety", "trustworthy ai"];

function isSafetyTag(tag: string) {
  return SAFETY_KEYWORDS.includes(tag.toLowerCase());
}

type TagsProps = {
  tags: string[];
  variant?: "chip" | "pill";
};

export function Tags({ tags, variant = "chip" }: TagsProps) {
  const className = variant === "pill" ? "tag-pills" : "tags-chip-row";

  return (
    <ul className={className}>
      {tags.map((tag) => (
        <li key={tag} className={isSafetyTag(tag) ? "tag-safety" : undefined}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
