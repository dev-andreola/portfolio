import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section id="hero" className="bg-muted">
        <div className="mx-auto w-full max-w-6xl border-y py-6 md:py-24 lg:py-32">
          <div className="container space-y-10 px-4 md:px-6 xl:space-y-16">
            <div className="grid gap-4 px-4 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col items-center space-y-4 md:items-end">
                <div className="relative h-[250px] w-full">
                  <Image
                    src={"/art.png"}
                    fill
                    alt="Vitor Andreola"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Vitor Andreola
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  nobis ratione expedita nemo incidunt molestiae iusto
                  reiciendis omnis, ea qui.
                </p>
                <div className="mt-6">
                  <Button variant={"default"}>
                    <Link href="#" prefetch={false}>
                      Ver Projetos
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
