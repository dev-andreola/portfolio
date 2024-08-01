import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section id="hero" className="bg-muted pt-[62px]">
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
      <section id="about" className="w-full">
        <div className="mx-auto max-w-6xl py-12 md:py-24">
          <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sobre Mim
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique ipsa commodi quae minus cum ratione est quibusdam
                magni sunt amet. Molestias voluptate molestiae consequatur ut
                blanditiis ipsa iure nesciunt illum?
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Habilidades</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">HTML/CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Experiência</h3>
                <p className="text-muted-foreground">
                  1+ ano de experiência como desenvolvedor web freelancer,
                  desenvolvendo websites para profissionais autônomos.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Formação</h3>
                <p className="text-muted-foreground">
                  Cursando Análise e Desenvolvimento de Sistemas na FIAP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
