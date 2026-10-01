import { ImageResponse } from "next/og";
import { services, site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const domain = site.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        background: "#070D14",
        display: "flex",
        position: "relative",
        fontFamily: "sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Brand strip along the top edge */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "linear-gradient(90deg, #0B265F 0%, #2F75F2 55%, #59D2E6 100%)",
          display: "flex",
        }}
      />

      {/* Left content column */}
      <div
        style={{
          width: 730,
          height: 630,
          display: "flex",
          flexDirection: "column",
          padding: "70px 56px 64px 80px",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
          <div
            style={{ width: 8, height: 8, background: "#59D2E6", borderRadius: 4, display: "flex" }}
          />
          <span
            style={{
              fontSize: 13,
              letterSpacing: "0.22em",
              color: "#7AB0FF",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            {site.address.locality}, {site.address.city} · Window film & glass
          </span>
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 74,
            fontWeight: 700,
            color: "#F5F8FB",
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
            marginBottom: 22,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <span>{site.brand.lead}&nbsp;</span>
          <span style={{ color: "#7AB0FF" }}>{site.brand.trail}</span>
        </div>

        <div style={{ fontSize: 22, color: "#8DA0B5", lineHeight: 1.5, maxWidth: 560 }}>
          {site.tagline}
        </div>

        <div style={{ flex: 1, display: "flex" }} />

        {/* Range of work */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 26 }}>
          {services.slice(0, 6).map((s) => (
            <div
              key={s.slug}
              style={{
                padding: "5px 13px",
                border: "1px solid rgba(47, 117, 242, 0.35)",
                borderRadius: 100,
                fontSize: 12,
                color: "#8DA0B5",
                display: "flex",
              }}
            >
              {s.name}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(228, 235, 242, 0.1)",
            paddingTop: 20,
          }}
        >
          <div style={{ fontSize: 17, color: "#F5F8FB", display: "flex", fontWeight: 600 }}>
            {site.phone.display}
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#54657A",
              letterSpacing: "0.06em",
              fontFamily: "monospace",
            }}
          >
            {domain}
          </div>
        </div>
      </div>

      {/* Right artwork column — layered panes, the brand mark writ large */}
      <div
        style={{
          flex: 1,
          height: 630,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Back pane — offset 24px up-left */}
        <div
          style={{
            position: "absolute",
            top: 131,
            left: 87,
            width: 248,
            height: 320,
            border: "1px solid rgba(47, 117, 242, 0.14)",
            borderRadius: 8,
            display: "flex",
          }}
        />
        {/* Mid pane — offset 12px up-left */}
        <div
          style={{
            position: "absolute",
            top: 143,
            left: 99,
            width: 248,
            height: 320,
            border: "1px solid rgba(47, 117, 242, 0.26)",
            borderRadius: 8,
            display: "flex",
          }}
        />

        {/* Front pane carrying the H of the mark */}
        <div
          style={{
            position: "absolute",
            top: 155,
            left: 111,
            width: 248,
            height: 320,
            border: "2px solid rgba(89, 210, 230, 0.5)",
            borderRadius: 10,
            background: "rgba(47, 117, 242, 0.07)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 160,
            top: 205,
            width: 34,
            height: 220,
            borderRadius: 6,
            background: "rgba(255, 255, 255, 0.55)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 276,
            top: 205,
            width: 34,
            height: 220,
            borderRadius: 6,
            background: "#F5F8FB",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 160,
            top: 295,
            width: 150,
            height: 30,
            borderRadius: 6,
            background: "rgba(255, 255, 255, 0.9)",
            display: "flex",
          }}
        />
      </div>
    </div>,
    { ...size },
  );
}
