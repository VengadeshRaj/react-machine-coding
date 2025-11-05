import React, { useMemo, useState } from "react";

export default function StarRating() {
  return (
    <div>
      <button>
        <StarIcon  filled={false} />
      </button>
    </div>
  );
}

function StarIcon({
  size = 24,
  filled = false,
}: {
  size?: number;
  filled?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block" }}
    >
      <path
        d="M10 1.7l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9l-4.94 2.99.94-5.5-4-3.9 5.53-.8L10 1.7z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="0.5"
        opacity={filled ? 1 : 0.35}
      />
    </svg>
  );
}
