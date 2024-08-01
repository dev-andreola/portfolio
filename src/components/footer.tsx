import { cn } from "@/lib/utils";

interface FooterProps {
  isMuted?: boolean;
}

export default function Footer({ isMuted }: FooterProps) {
  return (
    <footer
      className={cn(
        "bordet-t py-6 text-center text-sm text-muted-foreground",
        isMuted ? "bg-muted" : "bg-background",
      )}
    >
      <div className="container">&copy; 2024 vt-code. All rights reserved.</div>
    </footer>
  );
}
