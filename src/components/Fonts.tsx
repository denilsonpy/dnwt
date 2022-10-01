import { Global } from "@emotion/react";

export function Fonts() {
  return (
    <Global
      styles={`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&family=Prompt:wght@400;500;700&display=swap');
        `}
    />
  );
}
