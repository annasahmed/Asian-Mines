import { ImageResponse } from "next/og";

export const alt = "Asian Mines and Minerals — chrome ore from Muslim Bagh, exported to China, Oman, and Europe";
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
          backgroundColor: "#2e5a72",
          color: "#f7f9fb",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8ad8f5",
          }}
        >
          Pakistan · Chrome ore
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            Asian Mines and Minerals
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 32,
              color: "#efe6d4",
            }}
          >
            Exported to China, Oman, and Europe
          </div>
        </div>
      </div>
    ),
    size,
  );
}
