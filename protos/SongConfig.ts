import { CMSField } from "../interfaces/CMSField";

export const proto: Record<number, CMSField> = {
  1: {
    name: "version",
    type: "string",
  },
  3: {
    name: "GameSKUs",
    type: "packed",
    fields: {
      1: {
        name: "id",
        type: "varint",
      },
      2: {
        name: "idLabel",
        type: "string",
      },
    },
  },
  4: {
    name: "Beatmaps",
    type: "group",
    fields: {
      1: {
        name: "id",
        type: "varint",
      },
      5: {
        name: "availability",
        type: "varint",
      },
      21: {
        name: "Song_id",
        type: "varint",
      },
      37: {
        name: "idLabel",
        type: "string",
      },
      46: {
        name: "BeatmapVariantReference_id",
        type: "varint",
      },
    },
  },
  5: {
    name: "BeatmapVariants",
    type: "group",
    fields: {
      1: {
        name: "id",
        type: "varint",
      },
      2: {
        name: "idLabel",
        type: "string",
      },
      3: {
        name: "Song_id",
        type: "varint",
      },
      4: {
        name: "MaxNumLanes",
        type: "varint",
      },
      5: {
        name: "MaxScore",
        type: "varint",
      },
      6: {
        name: "Difficulty_id",
        type: "varint",
      },
      9: {
        name: "isComplete",
        type: "varint",
      },
      10: {
        name: "InteractionsReference_id",
        type: "varint",
      },
      12: {
        name: "NumStars",
        type: "varint",
      },
      13: {
        name: "InteractionsAsset_id",
        type: "string",
      },
      15: {
        name: "Description",
        type: "string",
      },
    },
  },
  6: {
    name: "Songs",
    type: "group",
    fields: {
      1: {
        name: "id",
        type: "varint",
      },
      //5: {
      //  name: "BPM",
      //  type: "float",
      //},
      7: {
        name: "weightingTags",
        type: "packed",
        fields: {
          1: {
            name: "tag_id",
            type: "varint",
          },
          2: {
            name: "weight3dp",
            type: "varint",
          },
        },
      },
      19: {
        name: "CoverArtAsset_id",
        type: "string",
      },
      22: {
        name: "TimeSignature",
        type: "varint",
      },
      39: {
        name: "BaseColor",
        type: "string",
      },
      40: {
        name: "DarkColor",
        type: "string",
      },
      //45: {
      //  name: "ColorGradient",
      //  chunk: "Gradient",
      //},
      50: {
        name: "genreTagsId",
        type: "varint",
      },
      53: {
        name: "wwiseSwitch",
        type: "group",
        fields: {
          1: {
            name: "switchId",
            type: "varint",
          },
          2: {
            name: "switchState",
            type: "varint",
          },
        },
      },
      56: {
        name: "CheckpointOutlineColour",
        type: "string",
      },
      //60: {
      //  name: "ColorGradientInGame",
      //  chunk: "Gradient",
      //},
      61: {
        name: "StreakConfig",
        type: "group",
        fields: {
          2: {
            name: "glowColor",
            type: "string",
          },
          3: {
            name: "perfectBarColor",
            type: "string",
          },
          4: {
            name: "invertPerfectBarColor",
            type: "boolean",
          },
          5: {
            name: "vfxColor",
            type: "string",
          },
        },
      },
      62: {
        name: "trackIntensityGlow",
        type: "string",
      },
      63: {
        name: "vfxColor",
        type: "string",
      },
      64: {
        name: "vfxAlternativeColor",
        type: "string",
      },
      65: {
        name: "Audiobanks_id",
        type: "varint",
      },
      66: {
        name: "bibleId",
        type: "string",
      },
      67: {
        name: "idLabel",
        type: "string",
      },
      68: {
        name: "isrc",
        type: "string",
      },
      69: {
        name: "legalState",
        type: "varint",
      },
      72: {
        name: "legalAttribution",
        type: "string",
      },
      76: {
        name: "songTitleLocId",
        type: "string",
      },
      77: {
        name: "songArtistLocId",
        type: "string",
      },
      78: {
        name: "Rejected",
        type: "boolean",
      },
      79: {
        name: "musicKitDataId",
        type: "varint",
      },
      80: {
        name: "Groups_id",
        type: "varint",
      },
      83: {
        name: "removalReason",
        type: "string",
      },
      84: {
        name: "songMetaId",
        type: "varint",
      },
      85: {
        name: "sku_id",
        type: "varint",
      },
      86: {
        name: "audioAsset_id",
        type: "string",
      },
    },
  },
  7: {
    name: "SongDifficulties",
    type: "packed",
    fields: {
      1: {
        name: "id",
        type: "varint",
      },
      3: {
        name: "difficulty",
        type: "varint",
      },
      15: {
        name: "idLabel",
        type: "string",
      },
    },
  },
  8: {
    name: "SongTags",
    type: "packed",
    fields: {
      1: {
        name: "id",
        type: "varint",
      },
      14: {
        name: "idLabel",
        type: "string",
      },
      21: {
        name: "sku_id",
        type: "varint",
      },
    },
  },
  10: {
    name: "SongWeightingTags",
    type: "packed",
    fields: {
      1: {
        name: "id",
        type: "varint",
      },
      2: {
        name: "idLabel",
        type: "string",
      },
    },
  },
  11: {
    name: "BanGroups",
    type: "packed",
    fields: {
      1: {
        name: "id",
        type: "string",
      },
      4: {
        name: "blanketBanned",
        type: "boolean",
      },
    },
  },
  12: {
    name: "SongGroups",
    type: "packed",
    fields: {
      1: {
        name: "id",
        type: "varint",
      },
      2: {
        name: "idLabel",
        type: "string",
      },
    },
  },
  13: {
    name: "SongMetas",
    type: "packed",
    fields: {
      1: {
        name: "id",
        type: "varint",
      },
      2: {
        name: "idLabel",
        type: "string",
      },
    },
  },
  14: {
    name: "SongArtists",
    type: "packed",
    fields: {
      1: {
        name: "id",
        type: "string",
      },
      2: {
        name: "trivia_id",
        type: "string",
      },
      3: {
        name: "albumArtSuitableForLoadingScreen",
        type: "boolean",
      },
    },
  },
};
