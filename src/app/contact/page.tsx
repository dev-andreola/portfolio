import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import ContactCard from "./contact-card";

export default function Contact() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center bg-muted px-4 md:px-6">
        <div className="my-12 w-full max-w-md flex-1 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Entre em Contato</h1>
            <p className="mt-2 text-muted-foreground">
              Tem alguma pergunta ou quer trabalhar comigo? Preencha o
              formulário abaixo ou entre em contato nas mídias sociais.
            </p>
          </div>
          <ContactCard />
          <div className="flex justify-center gap-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/dev-andreola/"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <SiLinkedin className="size-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              target="_blank"
              href="https://github.com/dev-andreola"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <SiGithub className="size-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
