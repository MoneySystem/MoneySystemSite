"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="conteudo" className="not-found-page">
      <div className="container not-found-page__inner">
        <p className="eyebrow">Algo saiu do esperado</p>
        <h1>Não foi possível carregar esta página.</h1>
        <p>Tente novamente. Se continuar, nosso suporte humano pode ajudar.</p>
        <button className="button button--primary" type="button" onClick={reset}>
          Tentar novamente
        </button>
      </div>
    </main>
  );
}
