import Link from "next/link";
import { Icon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="not-found container">
      <span className="not-found-number">404</span>
      <p className="eyebrow">We can help you find your way</p>
      <h1>This page has wandered off.</h1>
      <p>
        The page you’re looking for may have moved. Let’s take you somewhere
        familiar.
      </p>
      <Link href="/" className="button">
        Back to home <Icon name="arrow" size={18} />
      </Link>
    </section>
  );
}
