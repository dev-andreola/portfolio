import {
  BlogBlockquote,
  BlogCode,
  BlogHeader,
  BlogHighlight,
  BlogList,
  BlogListItem,
  BlogTitle,
} from "../text-components";

export default function HTTPDeepDive() {
  return (
    <div className="container mx-auto max-w-4xl py-6 md:py-12">
      <BlogHeader
        title="HTTP: A Linguagem da Web"
        date="2 de Abr de 2025"
        image="/posts/http-a-linguagem-da-web.webp"
      />
      <div className="prose my-8 max-w-none">
        <div className="mt-8 space-y-4">
          <BlogTitle title="Introdução" />
          <p>
            O <BlogHighlight>HTTP (Hypertext Transfer Protocol)</BlogHighlight>{" "}
            é o alicerce invisível que sustenta toda comunicação na web moderna.
            Desde que você digitou este endereço até o carregamento desta
            página, uma série complexa de requisições HTTP ocorreu nos
            bastidores.
          </p>
          <BlogBlockquote>
            &quot;O HTTP não é apenas um protocolo, mas um contrato social
            digital que permite a interoperabilidade global entre sistemas
            heterogêneos.&quot; — Tim Berners-Lee (adaptado)
          </BlogBlockquote>
          <p>
            Neste artigo, desvendaremos a anatomia do protocolo que movimenta{" "}
            <BlogHighlight>5.3 bilhões de usuários</BlogHighlight> na internet,
            segundo a ITU (2024).
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="O que é HTTP?" />
          <p>
            O HTTP é um{" "}
            <BlogHighlight>protocolo de camada de aplicação</BlogHighlight> que
            opera sobre TCP/IP, seguindo um modelo{" "}
            <BlogHighlight>cliente-servidor stateless</BlogHighlight>:
          </p>
          <BlogList>
            <BlogListItem>
              <span className="font-semibold">Cliente</span>: Normalmente um
              navegador (Chrome, Firefox), mas pode ser qualquer aplicação (como
              apps mobile)
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">Servidor</span>: Máquina que
              hospeda recursos (páginas web, APIs, arquivos)
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">Stateless</span>: Cada requisição
              é independente - o servidor não mantém memória de interações
              anteriores
            </BlogListItem>
          </BlogList>
          <p>
            Desenvolvido inicialmente por Tim Berners-Lee em 1989, o HTTP/1.1
            (RFC 2616) permanece como versão estável desde 1997, com o HTTP/2
            (2015) e HTTP/3 (2022) trazendo otimizações de performance.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="Anatomia de Requisições e Respostas" />
          <p>Uma transação HTTP consiste em dois elementos fundamentais:</p>

          <BlogTitle title="Requisição HTTP" level={3} className="pt-4" />
          <p>Estrutura básica:</p>
          <BlogCode>
            GET /artigos/http HTTP/1.1 Host: www.exemplo.com User-Agent:
            <br />
            Mozilla/5.0 Accept: text/html,application/xhtml+xml Accept-Language:
            <br />
            pt-BR
          </BlogCode>
          <BlogList>
            <BlogListItem>
              <span className="font-semibold">Linha de Requisição</span>: Método
              + URI + Versão HTTP
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">Cabeçalhos (Headers)</span>:
              Metadados sobre a requisição (formato aceito, idioma, etc.)
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">Corpo (Body)</span>: Opcional
              (usado em POST/PUT)
            </BlogListItem>
          </BlogList>

          <BlogTitle title="Resposta HTTP" level={3} className="pt-4" />
          <BlogCode>
            {`HTTP/1.1 200 OK
  Content-Type: text/html; charset=UTF-8
  Content-Length: 1532
  Date: Wed, 02 Apr 2025 10:00:00 GMT
  
  <!DOCTYPE html>
  <html>
    <head>
      <title>vt-code</title>
    </head>
    ...
  </html>`}
          </BlogCode>
          <BlogList>
            <BlogListItem>
              <span className="font-semibold">Linha de Status</span>: Versão
              HTTP + Código de Status + Mensagem
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">Cabeçalhos de Resposta</span>:
              Metadados sobre o conteúdo
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">Corpo da Resposta</span>: Conteúdo
              solicitado (HTML, JSON, etc.)
            </BlogListItem>
          </BlogList>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="Métodos HTTP: O Verbo da Comunicação" />
          <p>
            Os métodos HTTP definem a{" "}
            <BlogHighlight>intenção da requisição</BlogHighlight> em relação ao
            recurso identificado:
          </p>

          <table className="min-w-full border">
            <thead>
              <tr className="bg-background">
                <th className="border px-4 py-2">Método</th>
                <th className="border px-4 py-2">Idempotente</th>
                <th className="border px-4 py-2">Seguro</th>
                <th className="border px-4 py-2">Uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-semibold">GET</td>
                <td className="border px-4 py-2">✔️</td>
                <td className="border px-4 py-2">✔️</td>
                <td className="border px-4 py-2">
                  Recuperar dados (sem efeitos colaterais)
                </td>
              </tr>
              <tr className="bg-background/60">
                <td className="border px-4 py-2 font-semibold">POST</td>
                <td className="border px-4 py-2">❌</td>
                <td className="border px-4 py-2">❌</td>
                <td className="border px-4 py-2">
                  Enviar dados para processamento (criar recursos)
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 font-semibold">PUT</td>
                <td className="border px-4 py-2">✔️</td>
                <td className="border px-4 py-2">❌</td>
                <td className="border px-4 py-2">
                  Substituir recurso existente ou criar se não existir
                </td>
              </tr>
              <tr className="bg-background/60">
                <td className="border px-4 py-2 font-semibold">DELETE</td>
                <td className="border px-4 py-2">✔️</td>
                <td className="border px-4 py-2">❌</td>
                <td className="border px-4 py-2">Remover recurso específico</td>
              </tr>
            </tbody>
          </table>

          {/* Nova explicação adicionada aqui */}
          <div className="rounded-md border p-4">
            <p>
              <span className="font-semibold">Idempotência</span>: Um método é
              idempotente quando múltiplas requisições idênticas têm o mesmo
              efeito que uma única requisição.
            </p>
            <p>
              Exemplo: Enviar 5x <code>DELETE /produtos/123</code> só remove o
              recurso uma vez.
            </p>
            <p className="mt-2">
              <span className="font-semibold">Segurança</span>: Métodos seguros
              não alteram o estado do servidor. <code>GET</code> é seguro por
              definição, enquanto <code>POST</code> pode criar recursos e
              alterar dados.
            </p>
            <p>
              Métodos não-seguros exigem cuidados com CSRF (Cross-Site Request
              Forgery) e validação no backend.
            </p>
          </div>

          <BlogBlockquote>
            RESTful APIs utilizam esses métodos para operações CRUD (Create,
            Read, Update, Delete) seguindo princípios arquiteturais definidos
            por Roy Fielding.
          </BlogBlockquote>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="Códigos de Status: A Semântica das Respostas" />
          <p>
            Os códigos de status HTTP são divididos em classes, as principais
            são:
          </p>

          <BlogTitle title="2xx - Sucesso" level={3} />
          <BlogList>
            <BlogListItem>
              <span className="font-semibold">200 OK</span>: Requisição
              bem-sucedida
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">201 Created</span>: Recurso criado
              com sucesso (comum em POST)
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">204 No Content</span>: Sucesso sem
              corpo de resposta
            </BlogListItem>
          </BlogList>

          <BlogTitle title="4xx - Erro do Cliente" level={3} />
          <BlogList>
            <BlogListItem>
              <span className="font-semibold">400 Bad Request</span>: Sintaxe
              inválida
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">401 Unauthorized</span>:
              Autenticação necessária
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">403 Forbidden</span>: Acesso
              proibido (mesmo autenticado)
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">404 Not Found</span>: Recurso não
              existe
            </BlogListItem>
          </BlogList>

          <BlogTitle title="5xx - Erro do Servidor" level={3} />
          <BlogList>
            <BlogListItem>
              <span className="font-semibold">500 Internal Server Error</span>:
              Erro genérico no servidor
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">502 Bad Gateway</span>: Servidor
              intermediário recebeu resposta inválida
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">503 Service Unavailable</span>:
              Servidor sobrecarregado ou em manutenção
            </BlogListItem>
          </BlogList>
          <p>
            Segundo dados da Cloudflare (2024), códigos{" "}
            <BlogHighlight>4xx representam 22%</BlogHighlight> e{" "}
            <BlogHighlight>5xx apenas 0.3%</BlogHighlight> do tráfego web
            global.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="HTTPS: A Evolução Segura" />
          <p>
            O <BlogHighlight>HTTPS (HTTP Secure)</BlogHighlight> é a versão
            criptografada do HTTP, implementando:
          </p>
          <BlogList>
            <BlogListItem>
              <span className="font-semibold">Criptografia</span>: TLS/SSL
              protege dados contra interceptação
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">Autenticação</span>: Certificados
              digitais verificam a identidade do servidor
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">Integridade</span>: Previne
              modificação não detectada dos dados
            </BlogListItem>
          </BlogList>
          <p>
            Em 2025, <BlogHighlight>98.7% dos sites</BlogHighlight> já utilizam
            HTTPS por padrão (Fonte: Let&apos;s Encrypt). Navegadores modernos
            marcam sites sem HTTPS como &quot;Não seguros&quot;.
          </p>
          <BlogBlockquote>
            O handshake TLS envolve troca de chaves assimétricas,
            estabelecimento de chave simétrica e autenticação - tudo em
            milissegundos.
          </BlogBlockquote>
        </div>

        <div className="mt-8 space-y-4">
          <BlogTitle title="Conclusão" />
          <p>
            Dominar o HTTP é essencial para desenvolvedores, arquitetos de
            sistemas e profissionais de segurança. Este protocolo aparentemente
            simples esconde complexidades que impactam:
          </p>
          <BlogList>
            <BlogListItem>
              <span className="font-semibold">Performance</span>: Headers como
              Cache-Control e ETag otimizam carregamento
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">Segurança</span>: Headers como CSP
              e HSTS mitigam vulnerabilidades
            </BlogListItem>
            <BlogListItem>
              <span className="font-semibold">SEO</span>: Códigos de status e
              semântica HTTP afetam indexação
            </BlogListItem>
          </BlogList>
          <p>
            À medida que evoluímos para HTTP/3 com QUIC (baseado em UDP), o core
            semântico do protocolo permanece - prova de seu design robusto e
            adaptável.
          </p>
          <BlogBlockquote>
            &quot;O HTTP é como a eletricidade da web - invisível quando
            funciona perfeitamente, mas essencial para tudo que construímos
            sobre ela.&quot;
          </BlogBlockquote>
        </div>
      </div>
    </div>
  );
}
