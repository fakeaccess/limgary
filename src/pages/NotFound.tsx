import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="container flex flex-col items-center py-40 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">Page not found</h1>
      <Button asChild className="mt-8">
        <Link to="/">Back home</Link>
      </Button>
    </div>
  );
}
