import Image from "next/image";
import Link from "next/link";
import { NavList } from "@/components/nav-list";
import { getNavigationItems, siteConfig } from "@/data/portfolio";

export function SiteRail() {
  const items = getNavigationItems();

  return (
    <header className="rail">
      {siteConfig.profileImage ? (
        <Link href="/" className="rail-avatar-link" aria-hidden="true" tabIndex={-1}>
          <Image
            className="rail-avatar"
            src={siteConfig.profileImage}
            alt=""
            width={72}
            height={72}
            priority
          />
        </Link>
      ) : null}
      <h1 className="site-name-heading">
        <Link href="/" className="site-name">
          {siteConfig.name}
        </Link>
      </h1>
      <span className="site-role">{siteConfig.roleSubtitle}</span>
      <details className="site-nav">
        <summary>Menu</summary>
        <NavList items={items} />
      </details>
    </header>
  );
}
