interface BaseCMSField {
  name: string;
}

interface PlainCMSField extends BaseCMSField {
  type: "varint" | "boolean" | "string";
}

export interface CMSFieldGroupOrPacked extends BaseCMSField {
  type: "group" | "packed";
  fields: Record<number, CMSField>;
}

export type CMSField = PlainCMSField | CMSFieldGroupOrPacked;
