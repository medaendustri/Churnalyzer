import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import React from "react";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Churnalyzer";
  const category = searchParams.get("category") || "Business Failure";
  const date = searchParams.get("date") || "";

  return new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #1e293b 0%, #ef4444 100%)",
          color: "white",
          fontFamily: "Inter, sans-serif",
          padding: "60px",
          position: "relative",
        },
      },
      [
        React.createElement(
          "div",
          {
            key: "title",
            style: {
              fontSize: 48,
              fontWeight: "bold",
              marginBottom: 32,
              textAlign: "center",
              lineHeight: 1.1,
            },
          },
          title
        ),
        React.createElement(
          "div",
          {
            key: "category",
            style: { fontSize: 32, marginBottom: 16 },
          },
          category
        ),
        date
          ? React.createElement(
              "div",
              {
                key: "date",
                style: { fontSize: 24, color: "#fbbf24" },
              },
              date
            )
          : null,
        React.createElement(
          "div",
          {
            key: "brand",
            style: {
              position: "absolute",
              bottom: 40,
              right: 60,
              fontSize: 28,
              opacity: 0.7,
            },
          },
          "Churnalyzer.com"
        ),
      ]
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
