import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt = "MoneySystem — Sua empresa em ordem";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.svg"));
  const logoData = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 82px",
          background: "#111411",
          color: "#fafbf8",
        }}
      >
        <img
          src={logoData}
          alt=""
          width={254}
          height={88}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            display: "flex",
            maxWidth: 900,
            fontSize: 74,
            lineHeight: 1.02,
            letterSpacing: "-3px",
            fontWeight: 650,
          }}
        >
          Sua empresa em ordem. Sua cabeça tranquila.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 28,
            color: "#c7cdc4",
          }}
        >
          <span
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#5ab334",
            }}
          />
          Gestão empresarial com atendimento humano
        </div>
      </div>
    ),
    size,
  );
}
