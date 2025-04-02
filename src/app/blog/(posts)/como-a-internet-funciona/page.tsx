import {
  BlogBlockquote,
  BlogHeader,
  BlogHighlight,
  BlogList,
  BlogListItem,
  BlogNumberListItem,
  BlogTitle,
} from "../text-components";

export default function HowInternetWorks() {
  return (
    <div className="container mx-auto max-w-4xl py-6 md:py-12">
      <BlogHeader
        title="Como a internet funciona?"
        date="28 de Fev de 2025"
        image="/posts/como-a-internet-funciona.jpg"
      />
      <div className="prose my-8 max-w-none">
        <div className="mt-8 space-y-4">
          <BlogTitle title="O que é uma rede?" />
          <p>
            Para entender a internet, é fundamental começar pelo conceito de
            rede. Uma rede de computadores é um
            <BlogHighlight>conjunto de dispositivos interligados</BlogHighlight>
            (como computadores, servidores, celulares) que trocam dados entre si
            por meio de
            <BlogHighlight>conexões físicas ou sem fio</BlogHighlight>.
          </p>
          <BlogBlockquote>
            Imagine uma rede como um grupo de amigos: cada um pode se comunicar,
            compartilhar recursos e colaborar em atividades, desde que sigam as
            mesmas &quot;regras&quot; de interação.
          </BlogBlockquote>
        </div>
        <div className="mt-8 space-y-4">
          <BlogTitle title="O que é a internet?" />
          <p>
            A internet é uma <BlogHighlight>rede global de redes</BlogHighlight>
            , interconectadas por protocolos padronizados. O termo vem de
            interconnected networks (redes interligadas), refletindo sua
            essência: integrar redes menores em um sistema único.
          </p>
          <p>
            Ela opera com <BlogHighlight>comutação de pacotes</BlogHighlight>:
            os dados são fragmentados, transmitidos por rotas variadas e
            remontados no destino. Essa estrutura permite que dispositivos em
            redes distintas se comuniquem, usando infraestruturas como cabos de
            fibra óptica, satélites e redes móveis.
          </p>
          <p>
            Os dados trafegam como sinais elétricos ou pulsos de luz (bits),
            transportados em alta velocidade. A capacidade de transmissão
            simultânea de bits define a eficiência: quanto mais bits por
            segundo, mais rápida a conexão.
          </p>
          <BlogBlockquote>
            Mapa de cabos submarinos (como o{" "}
            <a
              className="underline hover:text-muted-foreground"
              href="https://submarinecablemap.com/"
              target="_blank"
            >
              submarinecablemap.com
            </a>
            ) revela a infraestrutura física por trás da internet global.
          </BlogBlockquote>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="Uma rede distribuída" />
          <p>
            A internet não tem um núcleo central de controle. É um sistema
            <BlogHighlight>descentralizado</BlogHighlight>, onde qualquer
            dispositivo compatível com protocolos de rede (como TCP/IP) pode
            participar.
          </p>
          <p>
            Essa arquitetura garante <BlogHighlight>resiliência</BlogHighlight>:
            falhas em dispositivos individuais não comprometem o todo.
            Servidores, roteadores e usuários conectam-se e desconectam-se
            constantemente, sem interromper o fluxo global.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="Como a internet funciona?" />
          <p>
            A comunicação ocorre através de{" "}
            <BlogHighlight>protocolos</BlogHighlight>, regras universais que
            permitem a interpretação correta dos dados.
          </p>
          <p>Os principais são:</p>
          <BlogList>
            <BlogListItem>
              <span className="font-semibold">TCP/IP</span>: divide informações
              em pacotes, assegura entrega e ordenação.
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">HTTP/HTTPS</span>: gerencia a
              troca de dados entre navegadores e servidores (com criptografia no
              HTTPS).
            </BlogListItem>
          </BlogList>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="Endereços IP e DNS" />
          <p>
            Cada dispositivo na internet tem um{" "}
            <BlogHighlight>IP único</BlogHighlight> (ex: 192.168.1.1).
          </p>
          <p>
            Sites usam <BlogHighlight>domínios</BlogHighlight> (como
            &quot;google.com&quot;) para facilitar o acesso.
          </p>
          <p>
            O <BlogHighlight>DNS</BlogHighlight> traduz domínios em IPs
            correspondentes.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="Pacotes: a unidade básica" />
          <p>
            Ao enviar um arquivo, ele é dividido em{" "}
            <BlogHighlight>pacotes</BlogHighlight> – blocos menores com dados e
            metadados (cabeçalho).
          </p>
          <p>
            Cada pacote segue rotas independentes pela rede, otimizando o uso
            dos canais disponíveis. No destino, os pacotes são reorganizados.
          </p>
          <BlogBlockquote>
            Imagine desmontar um quebra-cabeça, enviar as peças por caminhos
            diferentes e remontá-las no final.
          </BlogBlockquote>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="Protocolos: a linguagem universal" />
          <p>
            Diferentes hardwares e softwares precisam &quot;falar a mesma
            língua&quot;. Protocolos resolvem isso:
          </p>
          <BlogList>
            <BlogListItem>
              <span className="font-semibold">TCP</span> (Transmission Control
              Protocol):
              <p>
                Garante a entrega ordenada e confiável de pacotes. Age como um
                &quot;correio registrado&quot; digital, confirmando o
                recebimento de cada parte dos dados.
              </p>
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">IP</span> (Internet Protocol):
              <p>
                Responsável pelo roteamento entre redes. Atribui endereços
                únicos (IPs) e determina o caminho dos pacotes através da
                internet.
              </p>
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">HTTP/HTTPS</span> (Hypertext
              Transfer Protocol/Secure):
              <p>
                Define como navegadores e servidores trocam informações web. O
                HTTPS adiciona criptografia via TLS/SSL para segurança.
              </p>
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">UDP</span> (User Datagram
              Protocol):
              <p>
                Alternativa mais rápida ao TCP para streaming ao vivo e jogos
                online, prioriza velocidade sobre confiabilidade.
              </p>
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">DNS</span> (Domain Name System):
              <p>
                Traduz domínios (ex: &quot;google.com&quot;) para endereços IP
                numéricos, funcionando como uma &quot;agenda telefônica&quot; da
                internet.
              </p>
            </BlogListItem>
          </BlogList>
          <BlogBlockquote>
            Assim como uma orquestra precisa de partituras comuns para
            harmonizar instrumentos diversos, os protocolos sincronizam
            dispositivos distintos na internet.
          </BlogBlockquote>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="Etapas de uma conexão web" />
          <ol className="space-y-4">
            <BlogNumberListItem number={1}>
              <span className="font-semibold">DNS</span>: O navegador converte
              &quot;exemplo.com&quot; em um endereço IP.
            </BlogNumberListItem>
            <BlogNumberListItem number={2}>
              <span className="font-semibold">TCP Handshake</span>: Estabelece
              conexão entre seu dispositivo e o servidor.
            </BlogNumberListItem>
            <BlogNumberListItem number={3}>
              <span className="font-semibold">TLS Handshake (HTTPS)</span>:
              Configura criptografia para segurança.
            </BlogNumberListItem>
            <BlogNumberListItem number={4}>
              <span className="font-semibold">Requisição HTTP</span>: Seu
              navegador solicita o conteúdo do site.
            </BlogNumberListItem>
            <BlogNumberListItem number={5}>
              <span className="font-semibold">Resposta HTTP</span>: O servidor
              envia dados em pacotes (HTML, CSS, JavaScript), interpretados pelo
              navegador para exibir a página.
            </BlogNumberListItem>
          </ol>
          <p>Todo o processo ocorre em questão de segundos.</p>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="Front-end: a interface visível" />
          <p>O front-end é a parte do site que interage com o usuário.</p>
          <p>
            O navegador baixa arquivos HTML (estrutura), CSS (estilo) e
            JavaScript (interatividade), processando-os para renderizar páginas
            de forma coerente.
          </p>
        </div>
      </div>
    </div>
  );
}
