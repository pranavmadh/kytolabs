import { ImageResponse } from "next/og";

export const alt = "KytoLabs global website development services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 75% 20%, #4c1d95 0%, #160725 34%, #030208 72%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "70px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div style={{ color: "#c084fc", display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
          KYTOLABS
        </div>
        <div style={{ display: "flex", fontSize: 70, fontWeight: 800, lineHeight: 1.05, marginTop: 30 }}>
          Website Development
        </div>
        <div style={{ color: "#c084fc", display: "flex", fontSize: 58, fontWeight: 800, marginTop: 10 }}>
          for Brands Worldwide
        </div>
        <div style={{ color: "#a1a1aa", display: "flex", fontSize: 25, marginTop: 30 }}>
          Fast. Responsive. Built to Convert.
        </div>
      </div>
    ),
    size,
  );
}
