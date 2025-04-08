import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { FolderIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StackIcon from "tech-stack-icons";

export default function Home() {
  return (
    <div className="">
      <section id="hero" className="border-b bg-muted">
        <div className="mx-auto w-full max-w-6xl py-6 md:py-24 lg:py-32">
          <div className="container space-y-10 px-4 md:px-6 xl:space-y-16">
            <div className="grid gap-4 md:grid-cols-2 md:gap-16 md:px-4">
              <div className="flex flex-col items-center space-y-4 md:items-end">
                <div className="relative h-[250px] w-full">
                  <Image
                    src={"/art.png"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    alt="Wallpaper"
                    className="rounded-xl object-cover shadow-shape"
                  />
                </div>
              </div>
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Vitor Andreola
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Programador React e Next.js utilizando TypeScript,
                  desenvolvendo aplicações web funcionais e eficientes.
                </p>
                <div className="mt-6 flex gap-4">
                  <Link href="/projects" prefetch={false}>
                    <Button variant={"default"}>
                      <div className="flex items-center gap-2">
                        <FolderIcon className="size-4" />
                        Ver Projetos
                      </div>
                    </Button>
                  </Link>
                  <Link href="/contact" prefetch={false}>
                    <Button variant={"outline"}>
                      <div className="flex items-center gap-2">
                        <MailIcon className="size-4" />
                        Contato
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full border-b bg-background">
        <div className="mx-auto max-w-6xl py-12 md:py-24">
          <div className="container">
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tech Stack
            </h2>
            <p className="mb-16 text-center text-muted-foreground md:text-xl">
              Tecnologias e ferramentas que domino e utilizo no meu dia a dia
            </p>
            <InfiniteSlider gap={24}>
              <StackIcon name="postgresql" grayscale className="size-14" />
              <StackIcon name="reactjs" grayscale className="size-14" />
              <StackIcon name="git" grayscale className="size-14" />
              <StackIcon name="vscode" grayscale className="size-14" />
              <StackIcon name="nextjs2" grayscale className="size-14" />
              <StackIcon name="bash" grayscale className="size-14" />
              <StackIcon name="bootstrap5" grayscale className="size-14" />
              <StackIcon name="typescript" grayscale className="size-14" />
              <StackIcon name="cloudinary" grayscale className="size-14" />
              <StackIcon name="sass" grayscale className="size-14" />
              <StackIcon name="ae" grayscale className="size-14" />
              <StackIcon name="figma" grayscale className="size-14" />
              <StackIcon name="python" grayscale className="size-14" />
              <StackIcon name="firebase" grayscale className="size-14" />
              <StackIcon name="graphql" grayscale className="size-14" />
              <StackIcon name="docker" grayscale className="size-14" />
              <StackIcon name="html5" grayscale className="size-14" />
              <StackIcon name="aws" grayscale className="size-14" />
              <StackIcon name="cypress" grayscale className="size-14" />
              <StackIcon name="tailwindcss" grayscale className="size-14" />
              <StackIcon name="github" grayscale className="size-14" />
              <StackIcon name="analytics" grayscale className="size-14" />
              <StackIcon name="ps" grayscale className="size-14" />
              <StackIcon name="mongodb" grayscale className="size-14" />
              <StackIcon name="nodejs" grayscale className="size-14" />
              <StackIcon name="css3" grayscale className="size-14" />
              <StackIcon name="mysql" grayscale className="size-14" />
              <StackIcon name="postman" grayscale className="size-14" />
              <StackIcon name="vitejs" grayscale className="size-14" />
              <StackIcon name="ai" grayscale className="size-14" />
              <StackIcon name="js" grayscale className="size-14" />
              <StackIcon name="prisma" grayscale className="size-14" />
              <StackIcon name="zod" grayscale className="size-14" />
            </InfiniteSlider>
          </div>
        </div>
      </section>

      <section id="about" className="w-full border-b bg-muted">
        <div className="mx-auto max-w-6xl py-12 md:py-24">
          <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-16 md:px-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sobre Mim
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Sou de Minas Gerais, tenho 24 anos e sempre gostei de explorar a
                criação digital, como imagens, vídeos e músicas.
              </p>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Em 2022, iniciei meus estudos em programação, focando no
                front-end e no design de interfaces.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Experiência</h3>
                <p className="text-muted-foreground">
                  • Experiência como estagiário em desenvolvimento web
                  utilizando typescript na empresa{" "}
                  <Link
                    href="https://www.appmasters.io/"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    App Masters
                  </Link>
                  .
                </p>
                <p className="text-muted-foreground">
                  • Desenvolvimento de aplicações web freelancer para clientes e
                  profissionais autônomos.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Formação</h3>
                <p className="text-muted-foreground">
                  Cursando Análise e Desenvolvimento de Sistemas na{" "}
                  <Link
                    href="https://www.fiap.com.br/"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    FIAP
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
