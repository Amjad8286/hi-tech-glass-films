import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon — the Hi-Tech mark rebuilt with plain divs, because Satori cannot
 * take the SVG in src/components/Logo.tsx. Keep the two in step: two panes of
 * glass as the uprights of an "H", joined by a beam of light.
 */
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        position: "relative",
        display: "flex",
        background: "linear-gradient(135deg, #0B265F 0%, #2F75F2 58%, #59D2E6 100%)",
      }}
    >
      {/* Rear pane — carries the film, so it reads back a shade. */}
      <div
        style={{
          position: "absolute",
          left: 8,
          top: 7,
          width: 5,
          height: 18,
          borderRadius: 1.5,
          background: "rgba(255, 255, 255, 0.62)",
          display: "flex",
        }}
      />
      {/* Front pane — clear. */}
      <div
        style={{
          position: "absolute",
          left: 19,
          top: 7,
          width: 5,
          height: 18,
          borderRadius: 1.5,
          background: "#FFFFFF",
          display: "flex",
        }}
      />
      {/* Light beam crossing both panes. */}
      <div
        style={{
          position: "absolute",
          left: 8,
          top: 14,
          width: 16,
          height: 4,
          borderRadius: 2,
          background: "rgba(255, 255, 255, 0.92)",
          display: "flex",
        }}
      />
    </div>,
    { ...size },
  );
}
