import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="font-display text-[9rem] font-bold leading-none text-gold sm:text-[12rem]">
          404
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
          Oops! This page has wandered off.
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-7 text-ink/70">
          The page you’re looking for does not exist or may have moved. Let’s
          take you back somewhere familiar.
        </p>
        <Link className="btn-primary mt-8" to="..">
          <Home className="mr-2" size={18} />
          Back to home
        </Link>
      </div>
    </main>
  );
}
