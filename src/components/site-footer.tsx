import { footer } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="date-text">
        © {footer.year} {footer.copyright}. {footer.line}
      </p>
    </footer>
  );
}
