/**
 * ExpertNote
 * -----------------------------------------------------------------------------
 * Renders an SME quote with full schema.org/Quotation + Person markup.
 *
 * No-invention guarantee:
 *   - If `quote` is null/empty/whitespace, the component renders ONLY an HTML
 *     comment annotating the slot for Agent 6 (Schema) to discover during
 *     verification. NO placeholder text reaches the rendered DOM.
 *   - Only when `quote` is a non-empty string (a real SME-approved quote) does
 *     the schema-bearing markup render.
 *
 * Slot discovery:
 *   - Each slot has a stable `slotId` (e.g., "QS-01"). Agent 6 uses these to
 *     audit which slots are filled vs. pending and to attach JSON-LD Quotation
 *     entries that match the on-page text exactly.
 *
 * Spec source:
 *   - /Users/oliyaddeyasa/Desktop/GEO Agent/Output/Phase1_Agent5_QuoteLibrary.md
 */

import React from "react";

const ExpertNote = ({
  slotId,
  quote,
  smeName,
  smeRole,
  smeOrg = "LivingStoneSolution Technologies",
  smeLocation,
  captureDate,
}) => {
  const hasQuote = typeof quote === "string" && quote.trim().length > 0;

  if (!hasQuote) {
    // Render an HTML comment placeholder so Agent 6 can locate the slot, but
    // emit nothing visible. React allows raw HTML comments via dangerouslySetInnerHTML
    // on an empty <span> wrapper; the wrapper itself takes no space.
    return (
      <span
        data-geo-quote-slot={slotId}
        data-geo-quote-status="pending-capture"
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{
          __html: `<!-- GEO QUOTE SLOT ${slotId}: pending SME capture (no placeholder shown to crawlers) -->`,
        }}
      />
    );
  }

  return (
    <aside
      className="mil-expert-note mil-mb-40"
      data-geo-quote-slot={slotId}
      data-geo-quote-status="captured"
      itemScope
      itemType="https://schema.org/Quotation"
      style={{
        background: "#f7f8fc",
        borderLeft: "4px solid #c9a961",
        padding: "20px 26px",
        borderRadius: "4px",
        margin: "0 0 40px",
      }}
    >
      <p
        className="mil-expert-note__label"
        style={{
          fontSize: "12px",
          letterSpacing: "0.16em",
          fontWeight: 700,
          color: "#c9a961",
          textTransform: "uppercase",
          margin: "0 0 8px",
        }}
      >
        Expert note
      </p>
      <blockquote
        className="mil-expert-note__quote"
        itemProp="text"
        style={{
          fontStyle: "italic",
          fontSize: "17px",
          lineHeight: 1.55,
          color: "#1a2b5e",
          margin: "0 0 10px",
          padding: 0,
          borderLeft: "none",
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <cite
        className="mil-expert-note__attribution"
        itemScope
        itemType="https://schema.org/Person"
        itemProp="creator"
        style={{
          fontStyle: "normal",
          fontSize: "13px",
          color: "#5a6378",
        }}
      >
        <span itemProp="name">{smeName}</span>
        {smeRole && (
          <>
            {", "}
            <span itemProp="jobTitle">{smeRole}</span>
          </>
        )}
        {smeOrg && (
          <>
            {", "}
            <span
              itemProp="worksFor"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <span itemProp="name">{smeOrg}</span>
            </span>
          </>
        )}
        {smeLocation && ` (${smeLocation})`}
        {captureDate && (
          <span className="mil-expert-note__date"> — {captureDate}</span>
        )}
      </cite>
    </aside>
  );
};

export default ExpertNote;
