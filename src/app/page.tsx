import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-100 flex justify-end">
        <ThemeToggle />
      </div>
     <h1 className="fon-bold text-blue-500">Welcome to Nsmah!</h1>
     <Button>Click Here</Button>
    </div>
  );
}
