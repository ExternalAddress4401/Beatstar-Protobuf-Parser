import { CMSField } from "../interfaces/CMSField";

export interface LangConfigProto {
  languages: {
    id: string;
    nativeName: string;
    enabled: boolean;
    defaultCulture: string;
    exportToTransifex: boolean;
    transifexId: string;
  };
  version: string;
  settings: {};
  bakeSettings: {};
}

export const proto: Record<number, CMSField> = {
  1: {
    name: "translations",
    type: "group",
    fields: {
      1: {
        name: "id",
        type: "string",
      },
      2: {
        name: "translations",
        type: "group",
        fields: {
          1: {
            name: "key",
            type: "string",
          },
          2: {
            name: "value",
            type: "string",
          },
        },
      },
    },
  },
  2: {
    name: "languages",
    type: "group",
    fields: {
      1: {
        name: "id",
        type: "string",
      },
      2: {
        name: "nativeName",
        type: "string",
      },
      3: {
        name: "enabled",
        type: "boolean",
      },
      4: {
        name: "defaultCulture",
        type: "string",
      },
      5: {
        name: "exportToTransifex",
        type: "varint",
      },
      6: {
        name: "transifexId",
        type: "string",
      },
    },
  },
  100: {
    name: "version",
    type: "string",
  },
  102: {
    name: "settings",
    type: "group",
    fields: [],
  },
  105: {
    name: "bakeSettings",
    type: "group",
    fields: [],
  },
};
