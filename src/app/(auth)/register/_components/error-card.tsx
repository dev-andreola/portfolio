import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleX } from "lucide-react";
import Link from "next/link";

export default function ErrorCard({
  errorMessage,
  reset,
}: {
  errorMessage: string;
  reset: () => void;
}) {
  return (
    <div className="mt-12">
      <Card className="mx-auto max-w-96 border-red-900 shadow-shape">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircleX className="text-red-900" />
            <h1 className="text-lg text-red-900">Ops...</h1>
          </CardTitle>
          <CardDescription>Ocorreu um erro no cadastro</CardDescription>
        </CardHeader>
        <CardContent className="bg-muted py-2 text-center">
          {errorMessage}
        </CardContent>
        <CardFooter className="flex justify-center gap-2 pt-6">
          <Link href={"/"}>
            <Button variant={"outline"}>Página Inicial</Button>
          </Link>
          <Button onClick={reset}>Tentar novamente</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
