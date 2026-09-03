import { ImageResponse } from "next/og";

export const alt = "CMD Studios - Digital mit Charakter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f9f8f4",
          color: "#1c1b1a",
          padding: "68px 76px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28 }}>
          <strong>CMD Studios</strong>
          <span style={{ color: "#ff4d00" }}>Web. App. Content.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.86, letterSpacing: "-7px" }}>
          <span style={{ fontSize: 126, fontWeight: 700 }}>DIGITAL MIT</span>
          <span style={{ fontSize: 152, fontWeight: 700, color: "#ff4d00" }}>CHARAKTER</span>
        </div>
        <div style={{ width: "100%", height: 8, borderRadius: 999, background: "#ff4d00" }} />
      </div>
    ),
    size,
  );
}
