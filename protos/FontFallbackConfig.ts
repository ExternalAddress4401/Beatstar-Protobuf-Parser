import { CMSField } from "../interfaces/CMSField";

export const proto: Record<number, CMSField> = {
  1000: {
    name: "version",
    type: "string",
  },
  1001: {
    name: "fontConfig",
    type: "group",
    fields: {
      2: {
        name: "preferredFallbackFontsMacOS",
        type: "string-repeat",
      },
      3: {
        name: "preferredFallbackFontsWindows",
        type: "string-repeat",
      },
      4: {
        name: "preferredFallbackFontsAndroid",
        type: "string-repeat",
      },
      5: {
        name: "preferredFallbackFontsiOS",
        type: "string-repeat",
      },
    },
  },
};
