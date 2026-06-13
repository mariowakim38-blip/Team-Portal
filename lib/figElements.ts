export type FigElement = {
  id: string
  apparatus: 'VT' | 'UB' | 'BB' | 'FX'
  code: string
  name: string
  element_group: string
  value_letter: string
  dv: number
  tags: string[]
  note?: string
}

export const FIG_ELEMENTS: FigElement[] = [
  {
    "id": "FIG-VT-1-00-60",
    "apparatus": "VT",
    "code": "1.00",
    "name": "Handspring fwd",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "1.60",
    "dv": 1.6,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 60"
  },
  {
    "id": "FIG-VT-1-01-60",
    "apparatus": "VT",
    "code": "1.01",
    "name": "Handspring fwd on – ½ turn (180°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "2.00",
    "dv": 2.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 60"
  },
  {
    "id": "FIG-VT-1-02-60",
    "apparatus": "VT",
    "code": "1.02",
    "name": "Handspring fwd on – 1/1 turn (360°) off 360°",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "1.12",
    "dv": 1.12,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 60"
  },
  {
    "id": "FIG-VT-1-03-60",
    "apparatus": "VT",
    "code": "1.03",
    "name": "Handspring fwd on – 1½ turn (540°) off (Kim)",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "2.60",
    "dv": 2.6,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 60"
  },
  {
    "id": "FIG-VT-1-04-60",
    "apparatus": "VT",
    "code": "1.04",
    "name": "Handspring fwd on – 2/1 turn (720°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "3.20",
    "dv": 3.2,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 60"
  },
  {
    "id": "FIG-VT-1-05-60",
    "apparatus": "VT",
    "code": "1.05",
    "name": "Handspring fwd on – 2½ turn (900°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "3.60",
    "dv": 3.6,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 60"
  },
  {
    "id": "FIG-VT-1-10-60",
    "apparatus": "VT",
    "code": "1.10",
    "name": "Yamashita",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "2.00",
    "dv": 2.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "handspring",
      "ring",
      "round-off",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 60"
  },
  {
    "id": "FIG-VT-1-11-60",
    "apparatus": "VT",
    "code": "1.11",
    "name": "Yamashita with ½ turn (180°)",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "2.40",
    "dv": 2.4,
    "tags": [
      "Group",
      "acro",
      "dance",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 60"
  },
  {
    "id": "FIG-VT-1-12-60",
    "apparatus": "VT",
    "code": "1.12",
    "name": "WITH OR LA off Yamashita with 1/1 turn (360°)",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 60"
  },
  {
    "id": "FIG-VT-2-40-60",
    "apparatus": "VT",
    "code": "2.40",
    "name": "180°",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "handspring",
      "ring",
      "round-off",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 60"
  },
  {
    "id": "FIG-VT-2-80-60",
    "apparatus": "VT",
    "code": "2.80",
    "name": "TURN IN 1ST 2ND",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 60"
  },
  {
    "id": "FIG-VT-1-20-61",
    "apparatus": "VT",
    "code": "1.20",
    "name": "Handspring fwd with ½ turn on – repulsion off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "1.30",
    "dv": 1.3,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 61"
  },
  {
    "id": "FIG-VT-1-21-61",
    "apparatus": "VT",
    "code": "1.21",
    "name": "(180°) Handspring fwd with ½ turn (180°) on – ½ turn (180°) either direction)",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "1.60",
    "dv": 1.6,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 61"
  },
  {
    "id": "FIG-VT-1-22-61",
    "apparatus": "VT",
    "code": "1.22",
    "name": "off (in Handspring fwd with ½ (180°) on – 1/1 turn (360°)",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "2.40",
    "dv": 2.4,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 61"
  },
  {
    "id": "FIG-VT-1-23-61",
    "apparatus": "VT",
    "code": "1.23",
    "name": "turn off Handspring fwd with ½ (180°) on – 1½ turn (540°)",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "2.60",
    "dv": 2.6,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 61"
  },
  {
    "id": "FIG-VT-1-24-61",
    "apparatus": "VT",
    "code": "1.24",
    "name": "turn off Handspring fwd with ½ (180°) on – 2/1 turn (720°)",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "3.20",
    "dv": 3.2,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 61"
  },
  {
    "id": "FIG-VT-1-30-61",
    "apparatus": "VT",
    "code": "1.30",
    "name": "Handspring fwd with 1/1 turn on – Handspring fwd off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 61"
  },
  {
    "id": "FIG-VT-1-31-61",
    "apparatus": "VT",
    "code": "1.31",
    "name": "(360°) Handspring fwd with 1/1 turn (360°) on – 1/1 turn (360°) (Korbut)",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "3.20",
    "dv": 3.2,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 61"
  },
  {
    "id": "FIG-VT-1-40-62",
    "apparatus": "VT",
    "code": "1.40",
    "name": "Round-off, flic-flac on – repulsion",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "1.50",
    "dv": 1.5,
    "tags": [
      "Group",
      "acro",
      "dance",
      "flic",
      "handspring",
      "ring",
      "round-off",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 62"
  },
  {
    "id": "FIG-VT-1-50-62",
    "apparatus": "VT",
    "code": "1.50",
    "name": "Round-off, flic-flac with ½ turn on – Handspring fwd off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "1.60",
    "dv": 1.6,
    "tags": [
      "Group",
      "acro",
      "dance",
      "flic",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 62"
  },
  {
    "id": "FIG-VT-1-51-62",
    "apparatus": "VT",
    "code": "1.51",
    "name": "(180°) Round-off, flic-flac with on –½ turn (180°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "2.20",
    "dv": 2.2,
    "tags": [
      "Group",
      "acro",
      "dance",
      "flic",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 62"
  },
  {
    "id": "FIG-VT-1-52-62",
    "apparatus": "VT",
    "code": "1.52",
    "name": "½ turn (180°) Round-off, flic-flac on – 1/1 turn (360°)",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "2.60",
    "dv": 2.6,
    "tags": [
      "Group",
      "acro",
      "dance",
      "flic",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 62"
  },
  {
    "id": "FIG-VT-1-53-62",
    "apparatus": "VT",
    "code": "1.53",
    "name": "with ½ turn (180°) off Round-off, (180°) on",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "3.00",
    "dv": 3.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 62"
  },
  {
    "id": "FIG-VT-1-54-62",
    "apparatus": "VT",
    "code": "1.54",
    "name": "flic-flac with ½ turn 1½ turn (540°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "3.40",
    "dv": 3.4,
    "tags": [
      "Group",
      "acro",
      "dance",
      "flic",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 62"
  },
  {
    "id": "FIG-VT-1-60-62",
    "apparatus": "VT",
    "code": "1.60",
    "name": "Round-off, flic-flac with 1/1 on – repulsion off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "flic",
      "handspring",
      "ring",
      "round-off",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 62"
  },
  {
    "id": "FIG-VT-1-61-62",
    "apparatus": "VT",
    "code": "1.61",
    "name": "turn (360°) Round-off, flic-flac with on – ½ turn (180°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "2.40",
    "dv": 2.4,
    "tags": [
      "Group",
      "acro",
      "dance",
      "flic",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 62"
  },
  {
    "id": "FIG-VT-1-62-62",
    "apparatus": "VT",
    "code": "1.62",
    "name": "1/1 turn (360°) Round-off, flic-flac (360°) on –1/1 turn",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "2.80",
    "dv": 2.8,
    "tags": [
      "Group",
      "acro",
      "dance",
      "flic",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 62"
  },
  {
    "id": "FIG-VT-1-63-62",
    "apparatus": "VT",
    "code": "1.63",
    "name": "with 1/1 turn (360°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "3.20",
    "dv": 3.2,
    "tags": [
      "Group",
      "acro",
      "dance",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 62"
  },
  {
    "id": "FIG-VT-2-10-63",
    "apparatus": "VT",
    "code": "2.10",
    "name": "Handspring fwd on – tucked salto fwd off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "3.60",
    "dv": 3.6,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "salto",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 63"
  },
  {
    "id": "FIG-VT-2-11-63",
    "apparatus": "VT",
    "code": "2.11",
    "name": "Handspring fwd on – tucked with ½ twist (180°) off, also – (180°) and tucked salto bwd",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "2.21",
    "dv": 2.21,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "salto",
      "twist",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 63"
  },
  {
    "id": "FIG-VT-2-12-63",
    "apparatus": "VT",
    "code": "2.12",
    "name": "salto fwd ½ turn off Handspring fwd on – tucked fwd with 1/1 twist (360°)",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "3.80",
    "dv": 3.8,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "salto",
      "turn",
      "twist",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 63"
  },
  {
    "id": "FIG-VT-2-13-63",
    "apparatus": "VT",
    "code": "2.13",
    "name": "salto off Handspring fwd on – tucked salto fwd with 1½ twist",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "4.20",
    "dv": 4.2,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "ring",
      "round-off",
      "salto",
      "twist",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 63"
  },
  {
    "id": "FIG-VT-2-14-63",
    "apparatus": "VT",
    "code": "2.14",
    "name": "(540°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "4.60",
    "dv": 4.6,
    "tags": [
      "Group",
      "acro",
      "dance",
      "handspring",
      "ring",
      "round-off",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 63"
  },
  {
    "id": "FIG-VT-2-20-63",
    "apparatus": "VT",
    "code": "2.20",
    "name": "Handspring fwd on – piked fwd off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "3.80",
    "dv": 3.8,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "pike",
      "ring",
      "round-off",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 63"
  },
  {
    "id": "FIG-VT-2-21-63",
    "apparatus": "VT",
    "code": "2.21",
    "name": "FWD salto Handspring fwd on – piked salto with ½ twist (180°) off, also – (180°) and piked salto bwd off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "dance",
      "fwd",
      "handspring",
      "pike",
      "ring",
      "round-off",
      "salto",
      "twist",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 63"
  },
  {
    "id": "FIG-VT-2-22-63",
    "apparatus": "VT",
    "code": "2.22",
    "name": "fwd ½ turn Handspring fwd on – piked fwd with 1/1 twist (360°) (Chusovitina)",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "4.00",
    "dv": 4.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "fwd",
      "handspring",
      "pike",
      "ring",
      "round-off",
      "turn",
      "twist",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 63"
  },
  {
    "id": "FIG-VT-2-23-63",
    "apparatus": "VT",
    "code": "2.23",
    "name": "salto off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "4.40",
    "dv": 4.4,
    "tags": [
      "Group",
      "acro",
      "dance",
      "handspring",
      "ring",
      "round-off",
      "salto",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 63"
  },
  {
    "id": "FIG-VT-2-25-63",
    "apparatus": "VT",
    "code": "2.25",
    "name": "TWIST IN 2ND PHASE",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "handspring",
      "ring",
      "round-off",
      "twist",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 63"
  },
  {
    "id": "FIG-VT-4-00-63",
    "apparatus": "VT",
    "code": "4.00",
    "name": "1/1 TURN (360°) IN 1ST",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "handspring",
      "ring",
      "round-off",
      "turn",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 63"
  },
  {
    "id": "FIG-VT-4-40-63",
    "apparatus": "VT",
    "code": "4.40",
    "name": "PHASE – SALTO",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "handspring",
      "ring",
      "round-off",
      "salto",
      "vt",
      "yamashita"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 63"
  },
  {
    "id": "FIG-VT-2-30-64",
    "apparatus": "VT",
    "code": "2.30",
    "name": "Handspring fwd on – stretched salto fwd off (Evdokimova)",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "2.40",
    "dv": 2.4,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "fwd",
      "handspring",
      "ring",
      "salto",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 64"
  },
  {
    "id": "FIG-VT-2-31-64",
    "apparatus": "VT",
    "code": "2.31",
    "name": "Handspring fwd on – stretched fwd with ½ twist (180°) off (Wang)",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "4.40",
    "dv": 4.4,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "fwd",
      "handspring",
      "ring",
      "salto",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 64"
  },
  {
    "id": "FIG-VT-2-32-64",
    "apparatus": "VT",
    "code": "2.32",
    "name": "salto Handspring fwd on – fwd with 1/1 twist (360°)",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "4.60",
    "dv": 4.6,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "fwd",
      "handspring",
      "ring",
      "salto",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 64"
  },
  {
    "id": "FIG-VT-2-33-64",
    "apparatus": "VT",
    "code": "2.33",
    "name": "stretched salto off Handspring fwd on fwd with 1½ twist (Chusovitina)",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "5.00",
    "dv": 5.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "fwd",
      "handspring",
      "ring",
      "salto",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 64"
  },
  {
    "id": "FIG-VT-2-34-64",
    "apparatus": "VT",
    "code": "2.34",
    "name": "stretched salto (540°) off Handspring salto fwd with (Yeo)",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "5.40",
    "dv": 5.4,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "fwd",
      "handspring",
      "ring",
      "salto",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 64"
  },
  {
    "id": "FIG-VT-2-35-64",
    "apparatus": "VT",
    "code": "2.35",
    "name": "fwd on – stretched 2/1 twist (720°) off",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "5.80",
    "dv": 5.8,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "fwd",
      "handspring",
      "ring",
      "salto",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 64"
  },
  {
    "id": "FIG-VT-2-40-64",
    "apparatus": "VT",
    "code": "2.40",
    "name": "Handspring fwd with 1/1 turn on – tucked salto fwd off (Davydova)",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "2.50",
    "dv": 2.5,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "fwd",
      "handspring",
      "ring",
      "salto",
      "turn",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 64"
  },
  {
    "id": "FIG-VT-2-41-64",
    "apparatus": "VT",
    "code": "2.41",
    "name": "(360°) Handspring fwd with 1/1 on – piked salto fwd off",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "4.80",
    "dv": 4.8,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "fwd",
      "handspring",
      "pike",
      "ring",
      "salto",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 64"
  },
  {
    "id": "FIG-VT-2-42-64",
    "apparatus": "VT",
    "code": "2.42",
    "name": "turn (360°)",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "5.20",
    "dv": 5.2,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "turn",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 64"
  },
  {
    "id": "FIG-VT-2-50-64",
    "apparatus": "VT",
    "code": "2.50",
    "name": "Handspring fwd on – tucked salto fwd off (Produnova)",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "fwd",
      "handspring",
      "ring",
      "salto",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 64"
  },
  {
    "id": "FIG-VT-2-51-64",
    "apparatus": "VT",
    "code": "2.51",
    "name": "double",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "6.00",
    "dv": 6.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "double",
      "forward",
      "handspring",
      "ring",
      "salto",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 64"
  },
  {
    "id": "FIG-VT-3-10-65",
    "apparatus": "VT",
    "code": "3.10",
    "name": "Tsukahara tucked (Tourischeva)",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "3.20",
    "dv": 3.2,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "tsukahara",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-3-11-65",
    "apparatus": "VT",
    "code": "3.11",
    "name": "Tsukahara tucked with ½ twist (180°) off",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "3.40",
    "dv": 3.4,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "tsukahara",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-3-12-65",
    "apparatus": "VT",
    "code": "3.12",
    "name": "Tsukahara tucked with 1/1 twist (360°) off (Kim)",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "3.22",
    "dv": 3.22,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "tsukahara",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-3-13-65",
    "apparatus": "VT",
    "code": "3.13",
    "name": "Tsukahara tucked with 1½ (540°) off",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "3.80",
    "dv": 3.8,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "tsukahara",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-3-14-65",
    "apparatus": "VT",
    "code": "3.14",
    "name": "twist Tsukahara tucked with (720°) off",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "4.20",
    "dv": 4.2,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "tsukahara",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-3-15-65",
    "apparatus": "VT",
    "code": "3.15",
    "name": "2/1 twist",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "4.60",
    "dv": 4.6,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-3-20-65",
    "apparatus": "VT",
    "code": "3.20",
    "name": "Tsukahara piked",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "3.40",
    "dv": 3.4,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "pike",
      "ring",
      "salto",
      "tsukahara",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-3-30-65",
    "apparatus": "VT",
    "code": "3.30",
    "name": "Tsukahara stretched",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "3.80",
    "dv": 3.8,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "tsukahara",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-3-31-65",
    "apparatus": "VT",
    "code": "3.31",
    "name": "Tsukahara stretched with ½ twist (180°) off",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "4.00",
    "dv": 4.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "tsukahara",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-3-32-65",
    "apparatus": "VT",
    "code": "3.32",
    "name": "(90°-180°) IN 1ST Tsukahara stretched with 1/1 (360°) off (Kim)",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "tsukahara",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-3-33-65",
    "apparatus": "VT",
    "code": "3.33",
    "name": "twist Tsukahara stretched with (540°) off",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "4.40",
    "dv": 4.4,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "tsukahara",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-3-34-65",
    "apparatus": "VT",
    "code": "3.34",
    "name": "1½ twist Tsukahara stretched with twist (720°) off (Zamolodchikova)",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "4.80",
    "dv": 4.8,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "tsukahara",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-3-35-65",
    "apparatus": "VT",
    "code": "3.35",
    "name": "2/1 Tsukahara stretched with 2½ twist (900°) off",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "5.20",
    "dv": 5.2,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "tsukahara",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-4-00-65",
    "apparatus": "VT",
    "code": "4.00",
    "name": "WITH ¼ - ½ TURN",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "turn",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-4-80-65",
    "apparatus": "VT",
    "code": "4.80",
    "name": "BWD TWIST",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-5-20-65",
    "apparatus": "VT",
    "code": "5.20",
    "name": "IN 2ND PHASE",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-5-60-65",
    "apparatus": "VT",
    "code": "5.60",
    "name": "IN 2ND PHASE",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "dance",
      "forward",
      "handspring",
      "ring",
      "salto",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 65"
  },
  {
    "id": "FIG-VT-4-10-66",
    "apparatus": "VT",
    "code": "4.10",
    "name": "Round-off, flic-flac on – tucked salto bwd off (Yurchenko)",
    "element_group": "Group 3 - Tsukahara",
    "value_letter": "3.00",
    "dv": 3.0,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "tsukahara",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 66"
  },
  {
    "id": "FIG-VT-4-11-66",
    "apparatus": "VT",
    "code": "4.11",
    "name": "Round-off, flic-flac on – tucked salto bwd with ½ twist (180°)",
    "element_group": "Group 3 - Tsukahara",
    "value_letter": "3.20",
    "dv": 3.2,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "tsukahara",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 66"
  },
  {
    "id": "FIG-VT-4-12-66",
    "apparatus": "VT",
    "code": "4.12",
    "name": "off Round-off, flic-flac on - tucked bwd with 1/1 twist (360°) off",
    "element_group": "Group 3 - Tsukahara",
    "value_letter": "4.22",
    "dv": 4.22,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "tsukahara",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 66"
  },
  {
    "id": "FIG-VT-4-13-66",
    "apparatus": "VT",
    "code": "4.13",
    "name": "salto Round-off, flic-flac on – salto bwd with 1½ twist",
    "element_group": "Group 3 - Tsukahara",
    "value_letter": "3.60",
    "dv": 3.6,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "tsukahara",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 66"
  },
  {
    "id": "FIG-VT-4-14-66",
    "apparatus": "VT",
    "code": "4.14",
    "name": "tucked (540°) off Round-off, flic-flac on – tucked salto bwd with 2/1 twist (720°) (Dungelova)",
    "element_group": "Group 3 - Tsukahara",
    "value_letter": "4.00",
    "dv": 4.0,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "tsukahara",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 66"
  },
  {
    "id": "FIG-VT-4-21-66",
    "apparatus": "VT",
    "code": "4.21",
    "name": "salto",
    "element_group": "Group 3 - Tsukahara",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "salto",
      "tsukahara",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 66"
  },
  {
    "id": "FIG-VT-4-22-66",
    "apparatus": "VT",
    "code": "4.22",
    "name": "¾ TURN (270°) IN",
    "element_group": "Group 3 - Tsukahara",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "tsukahara",
      "turn",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 66"
  },
  {
    "id": "FIG-VT-4-23-66",
    "apparatus": "VT",
    "code": "4.23",
    "name": "1ST PHASE – SALTO",
    "element_group": "Group 3 - Tsukahara",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "salto",
      "tsukahara",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 66"
  },
  {
    "id": "FIG-VT-4-24-66",
    "apparatus": "VT",
    "code": "4.24",
    "name": "BWD TWIST",
    "element_group": "Group 3 - Tsukahara",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "bwd",
      "tsukahara",
      "twist",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 66"
  },
  {
    "id": "FIG-VT-4-25-66",
    "apparatus": "VT",
    "code": "4.25",
    "name": "IN 2ND PHASE",
    "element_group": "Group 3 - Tsukahara",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "tsukahara",
      "vt"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 66"
  },
  {
    "id": "FIG-VT-4-30-67",
    "apparatus": "VT",
    "code": "4.30",
    "name": "Round-off, flic-flac on – stretched salto bwd off",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "3.60",
    "dv": 3.6,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 67"
  },
  {
    "id": "FIG-VT-4-31-67",
    "apparatus": "VT",
    "code": "4.31",
    "name": "Round-off, flic-flac on – stretched salto bwd with ½ twist (180°)",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "3.80",
    "dv": 3.8,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 67"
  },
  {
    "id": "FIG-VT-4-32-67",
    "apparatus": "VT",
    "code": "4.32",
    "name": "off Round-off, flic-flac on – stretched salto bwd with 1/1 twist (360°)",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.20",
    "dv": 4.2,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 67"
  },
  {
    "id": "FIG-VT-4-33-67",
    "apparatus": "VT",
    "code": "4.33",
    "name": "off Round-off, flic-flac on – stretched salto bwd with 1½ twist (540°)",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.60",
    "dv": 4.6,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 67"
  },
  {
    "id": "FIG-VT-4-34-67",
    "apparatus": "VT",
    "code": "4.34",
    "name": "off Round-off, flic-flac on – stretched salto bwd with 2/1 twist (720°) (Baitova)",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "5.00",
    "dv": 5.0,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 67"
  },
  {
    "id": "FIG-VT-4-35-67",
    "apparatus": "VT",
    "code": "4.35",
    "name": "off Round-off, flic-flac on –stretched salto bwd with 2½ twist (900°) off (Amanar)",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "5.40",
    "dv": 5.4,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 67"
  },
  {
    "id": "FIG-VT-4-40-67",
    "apparatus": "VT",
    "code": "4.40",
    "name": "Round-off, flic-flac with ¾ turn (270°) on – tucked salto bwd (Luconi)",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "3.60",
    "dv": 3.6,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "turn",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 67"
  },
  {
    "id": "FIG-VT-4-41-67",
    "apparatus": "VT",
    "code": "4.41",
    "name": "off Round-off, flic-flac with ¾ turn (270°) on – tucked salto bwd ½ twist (180°) off",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.00",
    "dv": 4.0,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "turn",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 67"
  },
  {
    "id": "FIG-VT-4-42-67",
    "apparatus": "VT",
    "code": "4.42",
    "name": "with Round-off, flic-flac with ¾ turn (270°) on – tucked salto bwd 1/1 twist (360°) off",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.20",
    "dv": 4.2,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "turn",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 67"
  },
  {
    "id": "FIG-VT-4-43-67",
    "apparatus": "VT",
    "code": "4.43",
    "name": "with",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "round-off",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 67"
  },
  {
    "id": "FIG-VT-4-50-68",
    "apparatus": "VT",
    "code": "4.50",
    "name": "Round-off, flic-flac with ¾ turn (270°) on – piked salto bwd",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "3.80",
    "dv": 3.8,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "pike",
      "round-off",
      "salto",
      "turn",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 68"
  },
  {
    "id": "FIG-VT-4-51-68",
    "apparatus": "VT",
    "code": "4.51",
    "name": "off Round-off, flic-flac with ¾ turn (270°) on – stretched salto bwd",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.20",
    "dv": 4.2,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "turn",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 68"
  },
  {
    "id": "FIG-VT-4-52-68",
    "apparatus": "VT",
    "code": "4.52",
    "name": "off Round-off, flic-flac with ¾ (270°) on – stretched salto with ½ twist (180°) off",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.62",
    "dv": 4.62,
    "tags": [
      "Group",
      "acro",
      "flic",
      "round-off",
      "salto",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 68"
  },
  {
    "id": "FIG-VT-4-53-68",
    "apparatus": "VT",
    "code": "4.53",
    "name": "turn bwd Round-off, flic-flac with ¾ (270°) on – stretched salto with 1/1 twist (360°) off",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.60",
    "dv": 4.6,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "round-off",
      "salto",
      "turn",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 68"
  },
  {
    "id": "FIG-VT-4-54-68",
    "apparatus": "VT",
    "code": "4.54",
    "name": "turn bwd",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "5.00",
    "dv": 5.0,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "round-off",
      "turn",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 68"
  },
  {
    "id": "FIG-VT-4-62-68",
    "apparatus": "VT",
    "code": "4.62",
    "name": "Round-off, flic-flac on –double piked salto bwd off (Biles)",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "double",
      "flic",
      "pike",
      "round-off",
      "salto",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 68"
  },
  {
    "id": "FIG-VT-5-10-69",
    "apparatus": "VT",
    "code": "5.10",
    "name": "Round-off, flic-flac with ½ turn (180°) on – tucked salto fwd (Ivantcheva)",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "3.80",
    "dv": 3.8,
    "tags": [
      "Group",
      "acro",
      "flic",
      "fwd",
      "round-off",
      "salto",
      "turn",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 69"
  },
  {
    "id": "FIG-VT-5-11-69",
    "apparatus": "VT",
    "code": "5.11",
    "name": "off Round-off, flic-flac with ½ turn (180°) on – tucked salto fwd ½ twist (180°) off, also – ½ turn (180°) and tucked salto bwd (Servente)",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.00",
    "dv": 4.0,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "fwd",
      "round-off",
      "salto",
      "turn",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 69"
  },
  {
    "id": "FIG-VT-5-12-69",
    "apparatus": "VT",
    "code": "5.12",
    "name": "with off Round-off, flic-flac with ½ (180°) on – tucked salto fwd 1/1 twist (360°) off",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "5.22",
    "dv": 5.22,
    "tags": [
      "Group",
      "acro",
      "flic",
      "fwd",
      "round-off",
      "salto",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 69"
  },
  {
    "id": "FIG-VT-5-13-69",
    "apparatus": "VT",
    "code": "5.13",
    "name": "turn with Round-off flic-flac with ½ (180°) on - tucked salto fwd 1½ twist (540°) off (Khorkina)",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.40",
    "dv": 4.4,
    "tags": [
      "Group",
      "acro",
      "flic",
      "fwd",
      "round-off",
      "salto",
      "turn",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 69"
  },
  {
    "id": "FIG-VT-5-14-69",
    "apparatus": "VT",
    "code": "5.14",
    "name": "turn with",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.80",
    "dv": 4.8,
    "tags": [
      "Group",
      "acro",
      "round-off",
      "turn",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 69"
  },
  {
    "id": "FIG-VT-5-20-69",
    "apparatus": "VT",
    "code": "5.20",
    "name": "Round-off, flic-flac with ½ turn (180°) on – piked salto fwd (Omelianchik)",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.00",
    "dv": 4.0,
    "tags": [
      "Group",
      "acro",
      "flic",
      "fwd",
      "pike",
      "round-off",
      "salto",
      "turn",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 69"
  },
  {
    "id": "FIG-VT-5-21-69",
    "apparatus": "VT",
    "code": "5.21",
    "name": "off Round-off, flic-flac with ½ turn (180°) on – piked salto fwd with twist (180°) off, also – ½ turn (180°) and piked salto bwd off (Podkopayeva)",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.20",
    "dv": 4.2,
    "tags": [
      "Group",
      "acro",
      "bwd",
      "flic",
      "fwd",
      "pike",
      "round-off",
      "salto",
      "turn",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 69"
  },
  {
    "id": "FIG-VT-5-22-69",
    "apparatus": "VT",
    "code": "5.22",
    "name": "½ Round-off, flic-flac with ½ (180°) on – piked salto fwd twist (360°) off",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "VT",
    "dv": 0.0,
    "tags": [
      "Group",
      "acro",
      "flic",
      "fwd",
      "pike",
      "round-off",
      "salto",
      "twist",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 69"
  },
  {
    "id": "FIG-VT-5-23-69",
    "apparatus": "VT",
    "code": "5.23",
    "name": "turn with 1/1",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "4.60",
    "dv": 4.6,
    "tags": [
      "Group",
      "acro",
      "round-off",
      "turn",
      "vt",
      "yurchenko"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 69"
  },
  {
    "id": "FIG-UB-1-101-72",
    "apparatus": "UB",
    "code": "1.101",
    "name": "Glide kip to support on LB, glide with ½ turn (180°) kip support on LB",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "kip",
      "mount",
      "support",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 72"
  },
  {
    "id": "FIG-UB-1-102-72",
    "apparatus": "UB",
    "code": "1.102",
    "name": "Jump with ½ turn (180°) kip support on LB Jump with ½ turn (180°) stoop through to rear support on LB (back kip)",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "jump",
      "kip",
      "mount",
      "support",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 72"
  },
  {
    "id": "FIG-UB-1-202-72",
    "apparatus": "UB",
    "code": "1.202",
    "name": "to Jump with 1/1 turn (360°) and Glide kip to support on LB",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "jump",
      "kip",
      "mount",
      "support",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 72"
  },
  {
    "id": "FIG-UB-1-103-73",
    "apparatus": "UB",
    "code": "1.103",
    "name": "Glide on LB (or swing fwd on and stoop through to rear support (back kip); or straddle cut bwd hang on same bar",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "bwd",
      "fwd",
      "kip",
      "mount",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 73"
  },
  {
    "id": "FIG-UB-1-203-73",
    "apparatus": "UB",
    "code": "1.203",
    "name": "HB) to Reverse kip from: – glide fwd LB – swing fwd on HB – stoop through to kip hang, back kip swing, seat (pike) circle bwd rear support",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bwd",
      "circle",
      "fwd",
      "kip",
      "mount",
      "pike",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 73"
  },
  {
    "id": "FIG-UB-1-303-73",
    "apparatus": "UB",
    "code": "1.303",
    "name": "on to",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 73"
  },
  {
    "id": "FIG-UB-1-104-73",
    "apparatus": "UB",
    "code": "1.104",
    "name": "Jump to hang on HB – also reverse grip – kip to support",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "jump",
      "kip",
      "mount",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 73"
  },
  {
    "id": "FIG-UB-1-204-73",
    "apparatus": "UB",
    "code": "1.204",
    "name": "with Facing HB – Jump with ½ turn (180°) – kip to support on HB Free jump with ½ turn (180°) LB to hang on HB",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "jump",
      "kip",
      "mount",
      "support",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 73"
  },
  {
    "id": "FIG-UB-1-304-73",
    "apparatus": "UB",
    "code": "1.304",
    "name": "Jump with ½ turn (180°) over kip to support on HB over",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "jump",
      "kip",
      "mount",
      "support",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 73"
  },
  {
    "id": "FIG-UB-1-105-74",
    "apparatus": "UB",
    "code": "1.105",
    "name": "Facing HB – Jump with 1/1 (360°) to hang on HB",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "jump",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 74"
  },
  {
    "id": "FIG-UB-1-205-74",
    "apparatus": "UB",
    "code": "1.205",
    "name": "turn",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "mount",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 74"
  },
  {
    "id": "FIG-UB-1-106-74",
    "apparatus": "UB",
    "code": "1.106",
    "name": "Straddle vault with hand repulsion over LB to catch HB",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 74"
  },
  {
    "id": "FIG-UB-1-206-74",
    "apparatus": "UB",
    "code": "1.206",
    "name": "Free straddle jump over LB on HB Hecht jump (legs together) hand repulsion over LB to hang HB",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "jump",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 74"
  },
  {
    "id": "FIG-UB-1-306-74",
    "apparatus": "UB",
    "code": "1.306",
    "name": "to hang Free stretch jump over LB together to hang on HB (Makhautsova) with on",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "jump",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 74"
  },
  {
    "id": "FIG-UB-1-406-74",
    "apparatus": "UB",
    "code": "1.406",
    "name": "with legs Hecht jump (legs together) hand repulsion and 1/1 (360°) over LB to hang (Gebeshian) Free stretch jump (legs with 1/1 turn (360°) over hang on HB (Petrova)",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "dance",
      "jump",
      "mount",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 74"
  },
  {
    "id": "FIG-UB-1-506-74",
    "apparatus": "UB",
    "code": "1.506",
    "name": "with turn on HB together) LB to",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "mount",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 74"
  },
  {
    "id": "FIG-UB-1-207-75",
    "apparatus": "UB",
    "code": "1.207",
    "name": "Salto fwd tucked, piked or straddled over LB into L hang on LB",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "acro",
      "fwd",
      "mount",
      "pike",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 75"
  },
  {
    "id": "FIG-UB-1-307-75",
    "apparatus": "UB",
    "code": "1.307",
    "name": "Facing HB – salto fwd to HB Roll fwd piked with hand repulsion over LB with flight to hang",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "acro",
      "flight",
      "fwd",
      "mount",
      "pike",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 75"
  },
  {
    "id": "FIG-UB-1-407-75",
    "apparatus": "UB",
    "code": "1.407",
    "name": "hang on Salto fwd tucked over LB on HB without touching on HB",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "acro",
      "fwd",
      "mount",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 75"
  },
  {
    "id": "FIG-UB-1-507-75",
    "apparatus": "UB",
    "code": "1.507",
    "name": "to hang LB",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 75"
  },
  {
    "id": "FIG-UB-1-208-75",
    "apparatus": "UB",
    "code": "1.208",
    "name": "Round-off in front of LB – flight (straddled) through clear straddle support on LB",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "acro",
      "flight",
      "mount",
      "round-off",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 75"
  },
  {
    "id": "FIG-UB-1-308-75",
    "apparatus": "UB",
    "code": "1.308",
    "name": "bwd Round-off in front of LB – over LB with legs together straddled to hang on HB",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "acro",
      "bwd",
      "mount",
      "round-off",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 75"
  },
  {
    "id": "FIG-UB-1-408-75",
    "apparatus": "UB",
    "code": "1.408",
    "name": "flight bwd or Round-off in front of LB bwd over LB with 1/1 turn to hang on HB",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "acro",
      "bwd",
      "flight",
      "mount",
      "round-off",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 75"
  },
  {
    "id": "FIG-UB-1-508-75",
    "apparatus": "UB",
    "code": "1.508",
    "name": "flight (360°)",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "flight",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 75"
  },
  {
    "id": "FIG-UB-1-409-76",
    "apparatus": "UB",
    "code": "1.409",
    "name": "Round-off in front of LB salto bwd over LB to hang (Jentsch) Round-off in front of LB, through hstd phase on (González)",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "acro",
      "bwd",
      "hstd",
      "mount",
      "round-off",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 76"
  },
  {
    "id": "FIG-UB-1-509-76",
    "apparatus": "UB",
    "code": "1.509",
    "name": "tucked on LB Round-off in front of LB, with 1/1 turn (360°) to clear support or through hstd LB (Gurova) flic-flac LB",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "acro",
      "flic",
      "hstd",
      "mount",
      "round-off",
      "support",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 76"
  },
  {
    "id": "FIG-UB-1-609-76",
    "apparatus": "UB",
    "code": "1.609",
    "name": "flic-flac phase on Round-off in front of LB – tucked arabian salto over LB to hang HB without touching the LB Round-off in front of LB – piked arabian salto over LB to hang on HB without touching the LB",
    "element_group": "1.000 Mounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "acro",
      "arabian",
      "flic",
      "mount",
      "pike",
      "round-off",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 76"
  },
  {
    "id": "FIG-UB-1-210-77",
    "apparatus": "UB",
    "code": "1.210",
    "name": "Jump to hstd on LB with hips then extended, also with ½ (180°) in hstd phase, legs together or straddle",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "hstd",
      "jump",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 77"
  },
  {
    "id": "FIG-UB-1-310-77",
    "apparatus": "UB",
    "code": "1.310",
    "name": "bent, turn Jump to hstd on LB with hips then extended and 1/1 turn in hstd phase, legs together straddle Jump with extended body on LB also with ½ turn (180°) or",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "hstd",
      "jump",
      "mount",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 77"
  },
  {
    "id": "FIG-UB-1-410-77",
    "apparatus": "UB",
    "code": "1.410",
    "name": "bent, (360°) or Jump with extended body on LB with 1/1 turn (360°) phase (Maaranen) to hdst",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "dance",
      "jump",
      "mount",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 77"
  },
  {
    "id": "FIG-UB-1-510-77",
    "apparatus": "UB",
    "code": "1.510",
    "name": "to hstd in hstd",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "hstd",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 77"
  },
  {
    "id": "FIG-UB-1-411-77",
    "apparatus": "UB",
    "code": "1.411",
    "name": "Jump to clear support on clear hip circle to hstd on also with ½ turn (180°) phase on HB (McNamara)",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "circle",
      "clear-hip",
      "dance",
      "hstd",
      "jump",
      "mount",
      "support",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 77"
  },
  {
    "id": "FIG-UB-1-511-77",
    "apparatus": "UB",
    "code": "1.511",
    "name": "HB – HB, in hstd",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "hstd",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 77"
  },
  {
    "id": "FIG-UB-2-101-78",
    "apparatus": "UB",
    "code": "2.101",
    "name": "Cast to hstd with legs straddled or with hips bent; also with grip change",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "cast",
      "hstd",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 78"
  },
  {
    "id": "FIG-UB-2-201-78",
    "apparatus": "UB",
    "code": "2.201",
    "name": "hop- Cast to hstd with legs together and hips extended; also with grip change, also with ½ turn (180°) legs together or straddled",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "cast",
      "dance",
      "hop",
      "hstd",
      "mount",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 78"
  },
  {
    "id": "FIG-UB-2-301-78",
    "apparatus": "UB",
    "code": "2.301",
    "name": "hop- Cast with 1/1 turn (360°) to",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "cast",
      "dance",
      "hop",
      "mount",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 78"
  },
  {
    "id": "FIG-UB-2-401-78",
    "apparatus": "UB",
    "code": "2.401",
    "name": "hstd Cast with 1½ turn (540°) (Reeder)",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "cast",
      "hstd",
      "mount",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 78"
  },
  {
    "id": "FIG-UB-2-501-78",
    "apparatus": "UB",
    "code": "2.501",
    "name": "to hstd",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "hstd",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 78"
  },
  {
    "id": "FIG-UB-2-102-78",
    "apparatus": "UB",
    "code": "2.102",
    "name": "CASTS AND CLEAR",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "cast",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 78"
  },
  {
    "id": "FIG-UB-2-202-78",
    "apparatus": "UB",
    "code": "2.202",
    "name": "HIP Front support on HB – stoop flight or free straddle fwd over and ½ turn (180°) to hang on",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "flight",
      "fwd",
      "mount",
      "support",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 78"
  },
  {
    "id": "FIG-UB-2-302-78",
    "apparatus": "UB",
    "code": "2.302",
    "name": "with HB HB Hip circle bwd hecht with flight ½ turn (180°) passing over hang on same bar – also from clear hip circle bwd",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "bwd",
      "circle",
      "clear-hip",
      "flight",
      "mount",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 78"
  },
  {
    "id": "FIG-UB-2-402-78",
    "apparatus": "UB",
    "code": "2.402",
    "name": "and bar to",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 78"
  },
  {
    "id": "FIG-UB-2-303-79",
    "apparatus": "UB",
    "code": "2.303",
    "name": "From front support on HB with release and 1/1 turn (360°) hang on HB (Caslavska)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "support",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 79"
  },
  {
    "id": "FIG-UB-2-403-79",
    "apparatus": "UB",
    "code": "2.403",
    "name": "cast to From inner front support cast with salto roll fwd to on HB (Radochla roll) (Brause/Radochla)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "acro",
      "cast",
      "circle",
      "clear-hip",
      "fwd",
      "salto",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 79"
  },
  {
    "id": "FIG-UB-2-503-79",
    "apparatus": "UB",
    "code": "2.503",
    "name": "on LB – hang Front support on HB – cast salto fwd straddled to hang HB (Comaneci salto) (Comaneci)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "acro",
      "cast",
      "circle",
      "clear-hip",
      "fwd",
      "salto",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 79"
  },
  {
    "id": "FIG-UB-2-603-79",
    "apparatus": "UB",
    "code": "2.603",
    "name": "with on",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 79"
  },
  {
    "id": "FIG-UB-2-104-79",
    "apparatus": "UB",
    "code": "2.104",
    "name": "Hip circle fwd (hips touching",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "fwd",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 79"
  },
  {
    "id": "FIG-UB-2-204-79",
    "apparatus": "UB",
    "code": "2.204",
    "name": "bar)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 79"
  },
  {
    "id": "FIG-UB-2-404-79",
    "apparatus": "UB",
    "code": "2.404",
    "name": "Clear hip circle fwd to hstd, also with ½ turn (180°) in phase (Weiler-kip)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "fwd",
      "hstd",
      "kip",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 79"
  },
  {
    "id": "FIG-UB-2-504-79",
    "apparatus": "UB",
    "code": "2.504",
    "name": "hstd Clear hip circle fwd to hstd 1/1 turn (360°) in hstd phase (Godwin) Clear hip circle forward into salto fwd straddled on HB (Comaneci salto) (Adalsteinsdottir)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "acro",
      "cast",
      "circle",
      "clear-hip",
      "forward",
      "fwd",
      "hstd",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 79"
  },
  {
    "id": "FIG-UB-2-604-79",
    "apparatus": "UB",
    "code": "2.604",
    "name": "with (Weiler) to hang",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 79"
  },
  {
    "id": "FIG-UB-2-105-80",
    "apparatus": "UB",
    "code": "2.105",
    "name": "Hip circle bwd (hips touching Clear hip circle bwd or hip circle bwd on LB – hip repulsion (“false- pop”) – with regrasp on LB",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "2",
      "bwd",
      "cast",
      "circle",
      "clear-hip",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 80"
  },
  {
    "id": "FIG-UB-2-205-80",
    "apparatus": "UB",
    "code": "2.205",
    "name": "bar)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 80"
  },
  {
    "id": "FIG-UB-2-305-80",
    "apparatus": "UB",
    "code": "2.305",
    "name": "Clear hip circle to hstd, also hop-grip change in hstd phase, with ½ turn (180°) to hstd",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "dance",
      "hop",
      "hstd",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 80"
  },
  {
    "id": "FIG-UB-2-405-80",
    "apparatus": "UB",
    "code": "2.405",
    "name": "with or Clear hip circle with 1/1 to hstd",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "hstd",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 80"
  },
  {
    "id": "FIG-UB-2-505-80",
    "apparatus": "UB",
    "code": "2.505",
    "name": "turn (360°) Clear hip circle with 1½ turn (540°) to hstd",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "hstd",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 80"
  },
  {
    "id": "FIG-UB-2-206-81",
    "apparatus": "UB",
    "code": "2.206",
    "name": "Clear underswing on LB, release and counter movement fwd to hang on HB.",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "fwd",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 81"
  },
  {
    "id": "FIG-UB-2-306-81",
    "apparatus": "UB",
    "code": "2.306",
    "name": "in flight Clear hip circle bwd on HB hecht to clear support on LB (Pedrick)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "bwd",
      "cast",
      "circle",
      "clear-hip",
      "flight",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 81"
  },
  {
    "id": "FIG-UB-2-406-81",
    "apparatus": "UB",
    "code": "2.406",
    "name": "with Inner front support on LB hip circle through hstd with to hang on HB (Shaposhnikova)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "hstd",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 81"
  },
  {
    "id": "FIG-UB-2-506-81",
    "apparatus": "UB",
    "code": "2.506",
    "name": "clear flight Clear hip circle on HB, counter straddle over HB to hang (Hindorff) Clear hip circle on HB with counter straddle over the with ½ turn (180°) to hang mixed L grip (Martins) Clear hip circle through ½ turn (180°) in flight to HB (Khorkina)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "flight",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 81"
  },
  {
    "id": "FIG-UB-2-606-81",
    "apparatus": "UB",
    "code": "2.606",
    "name": "on HB Clear hip circle on HB, counter pike over HB to hang on HB (Shang) HB in Clear hip circle on HB, counter pike over HB with ½ turn (180°) to hang in mixed L grip (Black) hstd with hang on Clear hip circle on HB, with counter stretched -reverse hecht in layout position over HB to hang (Zhang)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "hstd",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 81"
  },
  {
    "id": "FIG-UB-2-307-82",
    "apparatus": "UB",
    "code": "2.307",
    "name": "Outer front support – clear circle bwd on LB with hecht on HB (Yarotska)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "bwd",
      "cast",
      "circle",
      "clear-hip",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 82"
  },
  {
    "id": "FIG-UB-2-407-82",
    "apparatus": "UB",
    "code": "2.407",
    "name": "hip to hang Outer front support – clear circle bwd on LB with hecht ½ turn (180°) to hang on (legs together or straddled)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bwd",
      "cast",
      "circle",
      "clear-hip",
      "support",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 82"
  },
  {
    "id": "FIG-UB-2-507-82",
    "apparatus": "UB",
    "code": "2.507",
    "name": "hip with HB",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 82"
  },
  {
    "id": "FIG-UB-3-201-83",
    "apparatus": "UB",
    "code": "3.201",
    "name": "Giant circle bwd in regular grip, on one arm (Liu), also with (180°) to hstd",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "bwd",
      "cast",
      "circle",
      "clear-hip",
      "giant",
      "hstd",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 83"
  },
  {
    "id": "FIG-UB-3-301-83",
    "apparatus": "UB",
    "code": "3.301",
    "name": "or ½ turn Giant circle bwd with 1/1 turn (360°) to hstd",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "bwd",
      "cast",
      "circle",
      "clear-hip",
      "giant",
      "hstd",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 83"
  },
  {
    "id": "FIG-UB-3-401-83",
    "apparatus": "UB",
    "code": "3.401",
    "name": "Giant circle bwd with 1½ turn (540° or 720°) to hstd, with hop 1/1 turn (360°) (Chusovitina)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bwd",
      "cast",
      "circle",
      "clear-hip",
      "dance",
      "giant",
      "hop",
      "hstd",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 83"
  },
  {
    "id": "FIG-UB-3-501-83",
    "apparatus": "UB",
    "code": "3.501",
    "name": "or 2/1 also to hstd",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "hstd",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 83"
  },
  {
    "id": "FIG-UB-3-402-83",
    "apparatus": "UB",
    "code": "3.402",
    "name": "Hang on HB – Swing fwd turn (180°) and flight to hstd LB",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "flight",
      "fwd",
      "hstd",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 83"
  },
  {
    "id": "FIG-UB-3-502-83",
    "apparatus": "UB",
    "code": "3.502",
    "name": "with ½ on Hang on HB – Swing fwd 1½ turn (540°) and flight to hang on LB (Strong)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "flight",
      "fwd",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 83"
  },
  {
    "id": "FIG-UB-3-602-83",
    "apparatus": "UB",
    "code": "3.602",
    "name": "with over LB",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 83"
  },
  {
    "id": "FIG-UB-3-403-84",
    "apparatus": "UB",
    "code": "3.403",
    "name": "Long swing fwd, counter straddle-reverse hecht to hang (Tkatchev) (Davydova) Tkatchev with ½ turn (180°) (Kononenko) Swing fwd with ½ turn (180°), pike vault over HB to hang (Monckton)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "fwd",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 84"
  },
  {
    "id": "FIG-UB-3-503-84",
    "apparatus": "UB",
    "code": "3.503",
    "name": "over HB Tkatchev piked Long swing fwd with ½ (180°) - ½ turn (180°) to straddle in flight over HB (Shushunova)",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "flight",
      "fwd",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 84"
  },
  {
    "id": "FIG-UB-3-603-84",
    "apparatus": "UB",
    "code": "3.603",
    "name": "turn counter to hang",
    "element_group": "2.000 Casts and clear hip circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "cast",
      "circle",
      "clear-hip",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 84"
  },
  {
    "id": "FIG-UB-3-304-85",
    "apparatus": "UB",
    "code": "3.304",
    "name": "Hang on HB, facing LB – and roll bwd (legs straddled) clear support on LB",
    "element_group": "3.000 Giant circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "bwd",
      "circle",
      "giant",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 85"
  },
  {
    "id": "FIG-UB-3-404-85",
    "apparatus": "UB",
    "code": "3.404",
    "name": "swing fwd to Hang on HB, facing LB fwd, salto bwd stretched bars to clear support on (Pak)",
    "element_group": "3.000 Giant circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "acro",
      "bwd",
      "circle",
      "fwd",
      "giant",
      "salto",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 85"
  },
  {
    "id": "FIG-UB-3-504-85",
    "apparatus": "UB",
    "code": "3.504",
    "name": "swing between LB Pak Salto with 1/1 turn (Bhardwaj)",
    "element_group": "3.000 Giant circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "acro",
      "circle",
      "giant",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 85"
  },
  {
    "id": "FIG-UB-3-604-85",
    "apparatus": "UB",
    "code": "3.604",
    "name": "(360°) Facing outward on HB - swing fwd and counter salto fwd with legs straddled to hang on in reverse grip (Kim)",
    "element_group": "3.000 Giant circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "3",
      "acro",
      "circle",
      "fwd",
      "giant",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 85"
  },
  {
    "id": "FIG-UB-3-405-86",
    "apparatus": "UB",
    "code": "3.405",
    "name": "Swing fwd with ½ turn (180°) salto fwd straddled to hang HB (Deltchev Salto), or (Moreno/Nakamura) or swing fwd and salto bwd with ½ turn (180°) to hang (Gienger Salto)",
    "element_group": "3.000 Giant circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "acro",
      "bwd",
      "circle",
      "fwd",
      "giant",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 86"
  },
  {
    "id": "FIG-UB-3-505-86",
    "apparatus": "UB",
    "code": "3.505",
    "name": "and on piked Swing fwd and salto bwd ½ turn (180°) stretched on HB piked on HB",
    "element_group": "3.000 Giant circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "acro",
      "bwd",
      "circle",
      "fwd",
      "giant",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 86"
  },
  {
    "id": "FIG-UB-3-605-86",
    "apparatus": "UB",
    "code": "3.605",
    "name": "with to hang Swing fwd and salto bwd stretched with 1½ turn (540°) hang on HB (Hristakieva)",
    "element_group": "3.000 Giant circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "3",
      "acro",
      "bwd",
      "circle",
      "fwd",
      "giant",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 86"
  },
  {
    "id": "FIG-UB-3-206-87",
    "apparatus": "UB",
    "code": "3.206",
    "name": "Giant circle fwd in reverse, regular or mix grip, also with legs straddled or hips bent in upswing phase; also with ½ turn (180°) to hstd.",
    "element_group": "3.000 Giant circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "3",
      "circle",
      "fwd",
      "giant",
      "hstd",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 87"
  },
  {
    "id": "FIG-UB-3-306-87",
    "apparatus": "UB",
    "code": "3.306",
    "name": "Giant circle fwd with 1/1 turn to hstd",
    "element_group": "3.000 Giant circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "circle",
      "fwd",
      "giant",
      "hstd",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 87"
  },
  {
    "id": "FIG-UB-3-406-87",
    "apparatus": "UB",
    "code": "3.406",
    "name": "(360°)",
    "element_group": "3.000 Giant circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "circle",
      "giant",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 87"
  },
  {
    "id": "FIG-UB-3-506-87",
    "apparatus": "UB",
    "code": "3.506",
    "name": "Giant circle fwd in reverse hstd with initiation of 1/1 (360°) on one arm before phase, or giant circle fwd reverse grip with 1½ turn to hstd",
    "element_group": "3.000 Giant circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "circle",
      "fwd",
      "giant",
      "hstd",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 87"
  },
  {
    "id": "FIG-UB-3-606-87",
    "apparatus": "UB",
    "code": "3.606",
    "name": "grip to turn hstd in (540°)",
    "element_group": "3.000 Giant circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "3",
      "circle",
      "giant",
      "hstd",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 87"
  },
  {
    "id": "FIG-UB-3-307-87",
    "apparatus": "UB",
    "code": "3.307",
    "name": "Swing bwd – straddle flight over LB to hstd on LB",
    "element_group": "3.000 Giant circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "bwd",
      "circle",
      "flight",
      "giant",
      "hstd",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 87"
  },
  {
    "id": "FIG-UB-3-407-87",
    "apparatus": "UB",
    "code": "3.407",
    "name": "bwd Swing bwd release and (180°) in flight between to clear support on LB (Ejova)",
    "element_group": "3.000 Giant circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "bwd",
      "circle",
      "flight",
      "giant",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 87"
  },
  {
    "id": "FIG-UB-3-507-87",
    "apparatus": "UB",
    "code": "3.507",
    "name": "½ turn the bars",
    "element_group": "3.000 Giant circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "circle",
      "giant",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 87"
  },
  {
    "id": "FIG-UB-3-308-88",
    "apparatus": "UB",
    "code": "3.308",
    "name": "Swing bwd salto fwd tucked hang on HB (Jaeger-Salto)",
    "element_group": "3.000 Giant circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "acro",
      "bwd",
      "circle",
      "fwd",
      "giant",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 88"
  },
  {
    "id": "FIG-UB-3-408-88",
    "apparatus": "UB",
    "code": "3.408",
    "name": "to Jaeger Salto straddled to on HB Jaeger Salto straddled with turn (180°) to hang on HB (Li Ya) Jaeger Salto piked to hang HB",
    "element_group": "3.000 Giant circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "acro",
      "circle",
      "giant",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 88"
  },
  {
    "id": "FIG-UB-3-508-88",
    "apparatus": "UB",
    "code": "3.508",
    "name": "hang ½ on",
    "element_group": "3.000 Giant circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "circle",
      "giant",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 88"
  },
  {
    "id": "FIG-UB-3-608-88",
    "apparatus": "UB",
    "code": "3.608",
    "name": "Jaeger Salto stretched to hang HB (Capuccitti) Jaeger Salto piked with 1/1turn (360°), to hang on HB (Minamino) Swing bwd with salto fwd tucked over HB to hang on HB (Mo) Jaeger Salto stretched with 1/1turn (360°), to hang on HB (Yang)",
    "element_group": "3.000 Giant circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "3",
      "acro",
      "bwd",
      "circle",
      "fwd",
      "giant",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 88"
  },
  {
    "id": "FIG-UB-3-309-89",
    "apparatus": "UB",
    "code": "3.309",
    "name": "Swing bwd with free stoop vault and ½ turn (180°) over hang (Zhang/Volpi)",
    "element_group": "3.000 Giant circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "bwd",
      "circle",
      "giant",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 89"
  },
  {
    "id": "FIG-UB-3-409-89",
    "apparatus": "UB",
    "code": "3.409",
    "name": "or straddle HB to Swing bwd with ½ turn and straddle flight bwd to hang (Khorkina)",
    "element_group": "3.000 Giant circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "bwd",
      "circle",
      "flight",
      "giant",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 89"
  },
  {
    "id": "FIG-UB-3-509-89",
    "apparatus": "UB",
    "code": "3.509",
    "name": "(180°) over HB",
    "element_group": "3.000 Giant circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "circle",
      "giant",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 89"
  },
  {
    "id": "FIG-UB-3-310-89",
    "apparatus": "UB",
    "code": "3.310",
    "name": "Giant circle fwd in L grip with stretched body (L grip giant), with ½ turn (180°) to hstd (Zaytseva) OR",
    "element_group": "3.000 Giant circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "circle",
      "fwd",
      "giant",
      "hstd",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 89"
  },
  {
    "id": "FIG-UB-3-410-89",
    "apparatus": "UB",
    "code": "3.410",
    "name": "piked or also Giant circle fwd in L grip turn (360°) to hstd",
    "element_group": "3.000 Giant circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "circle",
      "fwd",
      "giant",
      "hstd",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 89"
  },
  {
    "id": "FIG-UB-3-510-89",
    "apparatus": "UB",
    "code": "3.510",
    "name": "with 1/1 Giant circle fwd in L grip initiation of 1/1 turn (360°) arm before hstd phase, completed to hstd, or Giant circle fwd in L grip with (540˚) to hstd (any technique accepted)",
    "element_group": "3.000 Giant circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "circle",
      "fwd",
      "giant",
      "hstd",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 89"
  },
  {
    "id": "FIG-UB-3-610-89",
    "apparatus": "UB",
    "code": "3.610",
    "name": "with on 1½ turn",
    "element_group": "3.000 Giant circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "3",
      "circle",
      "giant",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 89"
  },
  {
    "id": "FIG-UB-4-101-90",
    "apparatus": "UB",
    "code": "4.101",
    "name": "Clear straddle circle fwd to support",
    "element_group": "3.000 Giant circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "3",
      "circle",
      "fwd",
      "giant",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 90"
  },
  {
    "id": "FIG-UB-4-201-90",
    "apparatus": "UB",
    "code": "4.201",
    "name": "clear Kip on HB, passing through straddle support – swing/press hstd and ½ turn (180°) in hstd phase",
    "element_group": "3.000 Giant circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "3",
      "circle",
      "giant",
      "hstd",
      "kip",
      "support",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 90"
  },
  {
    "id": "FIG-UB-4-301-90",
    "apparatus": "UB",
    "code": "4.301",
    "name": "clear to",
    "element_group": "3.000 Giant circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "circle",
      "giant",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 90"
  },
  {
    "id": "FIG-UB-4-401-90",
    "apparatus": "UB",
    "code": "4.401",
    "name": "Stalder fwd to hstd, also with ½ turn (180°) to",
    "element_group": "3.000 Giant circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "circle",
      "fwd",
      "giant",
      "hstd",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 90"
  },
  {
    "id": "FIG-UB-4-501-90",
    "apparatus": "UB",
    "code": "4.501",
    "name": "hstd Stalder fwd with 1/1 turn to hstd",
    "element_group": "3.000 Giant circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "circle",
      "fwd",
      "giant",
      "hstd",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 90"
  },
  {
    "id": "FIG-UB-4-601-90",
    "apparatus": "UB",
    "code": "4.601",
    "name": "(360°)",
    "element_group": "3.000 Giant circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "3",
      "circle",
      "giant",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 90"
  },
  {
    "id": "FIG-UB-4-302-90",
    "apparatus": "UB",
    "code": "4.302",
    "name": "— Clear straddle circle bwd with flight to clear support",
    "element_group": "3.000 Giant circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "bwd",
      "circle",
      "flight",
      "giant",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 90"
  },
  {
    "id": "FIG-UB-4-402-90",
    "apparatus": "UB",
    "code": "4.402",
    "name": "on HB on LB Clear straddle circle bwd with flight fwd to hstd on",
    "element_group": "3.000 Giant circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "bwd",
      "circle",
      "flight",
      "fwd",
      "giant",
      "hstd",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 90"
  },
  {
    "id": "FIG-UB-4-502-90",
    "apparatus": "UB",
    "code": "4.502",
    "name": "on HB LB Stalder bwd on HB with straddle - reverse hecht to hang (Ricna) Stalder bwd on HB with straddle reverse hecht over with ½ (180°) turn to hang mixed L grip (Derwael / Fenton)",
    "element_group": "3.000 Giant circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "bwd",
      "circle",
      "giant",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 90"
  },
  {
    "id": "FIG-UB-4-602-90",
    "apparatus": "UB",
    "code": "4.602",
    "name": "counter over HB Stalder bwd on HB with counter pike - reverse hecht over HB to hang (Downie) counter HB in",
    "element_group": "3.000 Giant circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "3",
      "bwd",
      "circle",
      "giant",
      "pike",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 90"
  },
  {
    "id": "FIG-UB-4-103-91",
    "apparatus": "UB",
    "code": "4.103",
    "name": "Clear straddle circle fwd in to clear support",
    "element_group": "4.000 Stalder circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "circle",
      "fwd",
      "stalder",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 91"
  },
  {
    "id": "FIG-UB-4-203-91",
    "apparatus": "UB",
    "code": "4.203",
    "name": "L grip",
    "element_group": "4.000 Stalder circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "circle",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 91"
  },
  {
    "id": "FIG-UB-4-403-91",
    "apparatus": "UB",
    "code": "4.403",
    "name": "Stalder fwd in L grip to hstd, also with ½ turn (180°) to (White)",
    "element_group": "4.000 Stalder circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "circle",
      "fwd",
      "hstd",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 91"
  },
  {
    "id": "FIG-UB-4-503-91",
    "apparatus": "UB",
    "code": "4.503",
    "name": "hstd Stalder fwd in L grip with (360°) to hstd (any technique accepted)",
    "element_group": "4.000 Stalder circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "4",
      "circle",
      "fwd",
      "hstd",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 91"
  },
  {
    "id": "FIG-UB-4-603-91",
    "apparatus": "UB",
    "code": "4.603",
    "name": "1/1 turn",
    "element_group": "4.000 Stalder circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "4",
      "circle",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 91"
  },
  {
    "id": "FIG-UB-4-104-91",
    "apparatus": "UB",
    "code": "4.104",
    "name": "Clear straddle circle bwd to support",
    "element_group": "4.000 Stalder circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "bwd",
      "circle",
      "stalder",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 91"
  },
  {
    "id": "FIG-UB-4-204-91",
    "apparatus": "UB",
    "code": "4.204",
    "name": "clear",
    "element_group": "4.000 Stalder circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "circle",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 91"
  },
  {
    "id": "FIG-UB-4-304-91",
    "apparatus": "UB",
    "code": "4.304",
    "name": "Stalder bwd to hstd, also with hop-grip change in hstd phase with ½ turn (180°) to hstd",
    "element_group": "4.000 Stalder circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "bwd",
      "circle",
      "dance",
      "hop",
      "hstd",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 91"
  },
  {
    "id": "FIG-UB-4-404-91",
    "apparatus": "UB",
    "code": "4.404",
    "name": "or Stalder bwd with 1/1 turn to hstd (Frederick)",
    "element_group": "4.000 Stalder circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "bwd",
      "circle",
      "hstd",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 91"
  },
  {
    "id": "FIG-UB-4-504-91",
    "apparatus": "UB",
    "code": "4.504",
    "name": "(360°) Stalder bwd with 1½ turn hstd",
    "element_group": "4.000 Stalder circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "4",
      "bwd",
      "circle",
      "hstd",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 91"
  },
  {
    "id": "FIG-UB-4-604-91",
    "apparatus": "UB",
    "code": "4.604",
    "name": "(540°) to",
    "element_group": "4.000 Stalder circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "4",
      "circle",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 91"
  },
  {
    "id": "FIG-UB-4-205-92",
    "apparatus": "UB",
    "code": "4.205",
    "name": "Facing inward – Stalder bwd release and counter movement in flight to hang on HB",
    "element_group": "4.000 Stalder circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "bwd",
      "circle",
      "flight",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 92"
  },
  {
    "id": "FIG-UB-4-305-92",
    "apparatus": "UB",
    "code": "4.305",
    "name": "with fwd Facing inward – Stalder bwd hecht flight to hang on HB",
    "element_group": "4.000 Stalder circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "bwd",
      "circle",
      "flight",
      "fwd",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 92"
  },
  {
    "id": "FIG-UB-4-405-92",
    "apparatus": "UB",
    "code": "4.405",
    "name": "with Facing outward – Stalder through hstd with flight to on HB",
    "element_group": "4.000 Stalder circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "circle",
      "flight",
      "hstd",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 92"
  },
  {
    "id": "FIG-UB-4-505-92",
    "apparatus": "UB",
    "code": "4.505",
    "name": "bwd hang Stalder bwd through hstd flight and ½ turn (180°), on HB",
    "element_group": "4.000 Stalder circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "4",
      "bwd",
      "circle",
      "flight",
      "hstd",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 92"
  },
  {
    "id": "FIG-UB-4-605-92",
    "apparatus": "UB",
    "code": "4.605",
    "name": "with to hang",
    "element_group": "4.000 Stalder circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "4",
      "circle",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 92"
  },
  {
    "id": "FIG-UB-4-106-92",
    "apparatus": "UB",
    "code": "4.106",
    "name": "Rear support – seat (pike) circle fwd to rear support",
    "element_group": "4.000 Stalder circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "circle",
      "fwd",
      "pike",
      "stalder",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 92"
  },
  {
    "id": "FIG-UB-4-406-92",
    "apparatus": "UB",
    "code": "4.406",
    "name": "Clear pike circle fwd to hstd, with ½ turn (180°) to hstd",
    "element_group": "4.000 Stalder circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "circle",
      "fwd",
      "hstd",
      "pike",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 92"
  },
  {
    "id": "FIG-UB-4-506-92",
    "apparatus": "UB",
    "code": "4.506",
    "name": "also Clear pike circle fwd with (360°) to hstd",
    "element_group": "4.000 Stalder circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "4",
      "circle",
      "fwd",
      "hstd",
      "pike",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 92"
  },
  {
    "id": "FIG-UB-4-606-92",
    "apparatus": "UB",
    "code": "4.606",
    "name": "1/1 turn",
    "element_group": "4.000 Stalder circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "4",
      "circle",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 92"
  },
  {
    "id": "FIG-UB-4-107-93",
    "apparatus": "UB",
    "code": "4.107",
    "name": "Rear support – seat (pike) circle bwd to rear support",
    "element_group": "4.000 Stalder circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "bwd",
      "circle",
      "pike",
      "stalder",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 93"
  },
  {
    "id": "FIG-UB-4-407-93",
    "apparatus": "UB",
    "code": "4.407",
    "name": "Clear pike circle bwd to also with ½ turn (180°) to",
    "element_group": "4.000 Stalder circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "bwd",
      "circle",
      "pike",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 93"
  },
  {
    "id": "FIG-UB-4-507-93",
    "apparatus": "UB",
    "code": "4.507",
    "name": "hstd, hstd Clear pike circle bwd with turn (360°) to hstd.",
    "element_group": "4.000 Stalder circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "4",
      "bwd",
      "circle",
      "hstd",
      "pike",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 93"
  },
  {
    "id": "FIG-UB-4-208-93",
    "apparatus": "UB",
    "code": "4.208",
    "name": "Clear pike circle bwd on LB counter flight to hang on HB",
    "element_group": "4.000 Stalder circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "bwd",
      "circle",
      "flight",
      "pike",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 93"
  },
  {
    "id": "FIG-UB-4-308-93",
    "apparatus": "UB",
    "code": "4.308",
    "name": "with Clear pike circle bwd on LB hecht flight to hang on HB (Zgoba) Clear pike circle bwd on HB flight to clear support on LB (Sayer)",
    "element_group": "4.000 Stalder circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "bwd",
      "circle",
      "flight",
      "pike",
      "stalder",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 93"
  },
  {
    "id": "FIG-UB-4-408-93",
    "apparatus": "UB",
    "code": "4.408",
    "name": "with with",
    "element_group": "4.000 Stalder circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "circle",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 93"
  },
  {
    "id": "FIG-UB-4-508-93",
    "apparatus": "UB",
    "code": "4.508",
    "name": "Clear pike circle bwd through hstd with flight to hang on also with ½ turn (180°) (Komova) Clear pike circle bwd with counter straddle (open hip flight) – reverse hecht over hang (Galante)",
    "element_group": "4.000 Stalder circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "4",
      "bwd",
      "circle",
      "flight",
      "hstd",
      "pike",
      "stalder",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 93"
  },
  {
    "id": "FIG-UB-4-608-93",
    "apparatus": "UB",
    "code": "4.608",
    "name": "HB, Clear pike circle bwd with counter pike – reverse hecht over HB to hang before HB to Clear pike circle bwd with counter stretched - reverse hecht in layout position over HB to hang (Nemour)",
    "element_group": "4.000 Stalder circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "4",
      "bwd",
      "circle",
      "pike",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 93"
  },
  {
    "id": "FIG-UB-5-101-94",
    "apparatus": "UB",
    "code": "5.101",
    "name": "Rear support on LB or HB – (pike) circle fwd with straddle bwd to hang on same bar",
    "element_group": "4.000 Stalder circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "bwd",
      "circle",
      "fwd",
      "pike",
      "stalder",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 94"
  },
  {
    "id": "FIG-UB-5-201-94",
    "apparatus": "UB",
    "code": "5.201",
    "name": "seat cut",
    "element_group": "4.000 Stalder circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "circle",
      "stalder",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 94"
  },
  {
    "id": "FIG-UB-5-301-94",
    "apparatus": "UB",
    "code": "5.301",
    "name": "Outer rear support on HB fall bwd to inverted pike swing or seat (pike) circle fwd – cut bwd with flight over LB Rear support on LB - seat circle fwd with straddle cut grip change to hang on HB.",
    "element_group": "4.000 Stalder circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "bwd",
      "circle",
      "flight",
      "fwd",
      "pike",
      "stalder",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 94"
  },
  {
    "id": "FIG-UB-5-501-94",
    "apparatus": "UB",
    "code": "5.501",
    "name": "Stoop in to Adler-seat (pike) circle fwd through clear extended support to finish in L grip (deviation up to 30° allowed), also with ½ turn (180°) (Luo)",
    "element_group": "4.000 Stalder circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "4",
      "circle",
      "fwd",
      "pike",
      "stalder",
      "support",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 94"
  },
  {
    "id": "FIG-UB-5-202-95",
    "apparatus": "UB",
    "code": "5.202",
    "name": "Rear support on HB – seat bwd with release to hang on",
    "element_group": "5.000 Pike circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "bwd",
      "circle",
      "pike",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 95"
  },
  {
    "id": "FIG-UB-5-302-95",
    "apparatus": "UB",
    "code": "5.302",
    "name": "circle LB Clear rear pike support on together) – full circle swing finish in clear rear support (Steinemann circle)",
    "element_group": "5.000 Pike circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "circle",
      "pike",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 95"
  },
  {
    "id": "FIG-UB-5-402-95",
    "apparatus": "UB",
    "code": "5.402",
    "name": "HB (legs bwd to on HB Clear rear pike support (legs together) – full circle bwd – continuing through rear pike support bwd over into hang (Mirgoradskaja) From hstd clear pike circle to rear inverted pike support (Krasnyanska)",
    "element_group": "5.000 Pike circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "bwd",
      "circle",
      "hstd",
      "pike",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 95"
  },
  {
    "id": "FIG-UB-5-502-95",
    "apparatus": "UB",
    "code": "5.502",
    "name": "on HB swing clear HB Clear rear pike support (legs together) – circle swing bwd and continue to salto bwd stretched between bars clear support on LB (Teza) circle swing bwd and ½ (180°) with flight to hstd bwd",
    "element_group": "5.000 Pike circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "bwd",
      "circle",
      "flight",
      "hstd",
      "pike",
      "salto",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 95"
  },
  {
    "id": "FIG-UB-5-602-95",
    "apparatus": "UB",
    "code": "5.602",
    "name": "on HB to turn on LB",
    "element_group": "5.000 Pike circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "circle",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 95"
  },
  {
    "id": "FIG-UB-5-303-95",
    "apparatus": "UB",
    "code": "5.303",
    "name": "Clear rear pike support (legs together) on HB – full circle bwd with stoop out bwd to HB (Li Li)",
    "element_group": "5.000 Pike circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "bwd",
      "circle",
      "pike",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 95"
  },
  {
    "id": "FIG-UB-5-403-95",
    "apparatus": "UB",
    "code": "5.403",
    "name": "swing hang on Clear rear pike support together) on HB – full circle bwd with counter flight bwd straddled (Li Li)",
    "element_group": "5.000 Pike circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "bwd",
      "circle",
      "flight",
      "pike",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 95"
  },
  {
    "id": "FIG-UB-5-503-95",
    "apparatus": "UB",
    "code": "5.503",
    "name": "(legs swing",
    "element_group": "5.000 Pike circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "circle",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 95"
  },
  {
    "id": "FIG-UB-5-104-96",
    "apparatus": "UB",
    "code": "5.104",
    "name": "Underswing bwd (inverted pike swing), dislocate (Schleudern) hang on HB",
    "element_group": "5.000 Pike circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "5",
      "bwd",
      "circle",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 96"
  },
  {
    "id": "FIG-UB-5-304-96",
    "apparatus": "UB",
    "code": "5.304",
    "name": "Schleudern to near hstd with hop-change to regular grip Stoop through on HB, dislocate release with ½ (180°) turn between the bars to catch hang (Alt)",
    "element_group": "5.000 Pike circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "circle",
      "dance",
      "hop",
      "hstd",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 96"
  },
  {
    "id": "FIG-UB-5-404-96",
    "apparatus": "UB",
    "code": "5.404",
    "name": "on HB Underswing bwd (inverted swing) on HB – dislocate flight to hstd on LB (Zuchold-Schleudern) also from stoop through and in flight LB in",
    "element_group": "5.000 Pike circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "bwd",
      "circle",
      "flight",
      "hstd",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 96"
  },
  {
    "id": "FIG-UB-5-504-96",
    "apparatus": "UB",
    "code": "5.504",
    "name": "pike with etc...",
    "element_group": "5.000 Pike circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "circle",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 96"
  },
  {
    "id": "FIG-UB-5-105-97",
    "apparatus": "UB",
    "code": "5.105",
    "name": "Sole circle forward (piked or straddle)",
    "element_group": "5.000 Pike circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "5",
      "circle",
      "forward",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 97"
  },
  {
    "id": "FIG-UB-5-305-97",
    "apparatus": "UB",
    "code": "5.305",
    "name": "Pike sole circle fwd in reverse to hstd, also with ½ turn (180°) hstd",
    "element_group": "5.000 Pike circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "circle",
      "fwd",
      "hstd",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 97"
  },
  {
    "id": "FIG-UB-5-405-97",
    "apparatus": "UB",
    "code": "5.405",
    "name": "grip to Pike sole circle fwd in reverse grip with 1/1 turn (360°) (Hoefnagel)",
    "element_group": "5.000 Pike circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "circle",
      "fwd",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 97"
  },
  {
    "id": "FIG-UB-5-505-97",
    "apparatus": "UB",
    "code": "5.505",
    "name": "to hstd",
    "element_group": "5.000 Pike circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "circle",
      "hstd",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 97"
  },
  {
    "id": "FIG-UB-5-106-97",
    "apparatus": "UB",
    "code": "5.106",
    "name": "Sole circle forward in L grip (piked or straddle)",
    "element_group": "5.000 Pike circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "5",
      "circle",
      "forward",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 97"
  },
  {
    "id": "FIG-UB-5-306-97",
    "apparatus": "UB",
    "code": "5.306",
    "name": "Pike sole circle fwd in L grip hstd, also with ½ turn (180°)",
    "element_group": "5.000 Pike circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "circle",
      "fwd",
      "hstd",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 97"
  },
  {
    "id": "FIG-UB-5-406-97",
    "apparatus": "UB",
    "code": "5.406",
    "name": "to Pike sole circle fwd in L 1/1 turn (360°) to hstd",
    "element_group": "5.000 Pike circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "circle",
      "fwd",
      "hstd",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 97"
  },
  {
    "id": "FIG-UB-5-506-97",
    "apparatus": "UB",
    "code": "5.506",
    "name": "grip with",
    "element_group": "5.000 Pike circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "circle",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 97"
  },
  {
    "id": "FIG-UB-5-207-98",
    "apparatus": "UB",
    "code": "5.207",
    "name": "Underswing on LB (support with counter movement fwd to hang on HB",
    "element_group": "5.000 Pike circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "circle",
      "fwd",
      "pike",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 98"
  },
  {
    "id": "FIG-UB-5-307-98",
    "apparatus": "UB",
    "code": "5.307",
    "name": "of feet) in flight Underswing on HB or LB release and 1½ turn (540°) (Burda)",
    "element_group": "5.000 Pike circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "circle",
      "flight",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 98"
  },
  {
    "id": "FIG-UB-5-407-98",
    "apparatus": "UB",
    "code": "5.407",
    "name": "with hand to hang",
    "element_group": "5.000 Pike circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "circle",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 98"
  },
  {
    "id": "FIG-UB-5-607-98",
    "apparatus": "UB",
    "code": "5.607",
    "name": "Facing outward on HB – underswing with support of feet- counter salto fwd straddled to hang on HB in reverse grip",
    "element_group": "5.000 Pike circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "acro",
      "circle",
      "fwd",
      "pike",
      "salto",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 98"
  },
  {
    "id": "FIG-UB-5-108-98",
    "apparatus": "UB",
    "code": "5.108",
    "name": "Sole circle bwd (piked or straddle)",
    "element_group": "5.000 Pike circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "5",
      "bwd",
      "circle",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 98"
  },
  {
    "id": "FIG-UB-5-308-98",
    "apparatus": "UB",
    "code": "5.308",
    "name": "Pike sole circle bwd to hstd, with hop-grip change to reverse grip in hstd phase, also with (180°)",
    "element_group": "5.000 Pike circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "bwd",
      "circle",
      "dance",
      "hop",
      "hstd",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 98"
  },
  {
    "id": "FIG-UB-5-408-98",
    "apparatus": "UB",
    "code": "5.408",
    "name": "also ½ turn Pike sole circle bwd with (360°) to hstd",
    "element_group": "5.000 Pike circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "bwd",
      "circle",
      "hstd",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 98"
  },
  {
    "id": "FIG-UB-5-508-98",
    "apparatus": "UB",
    "code": "5.508",
    "name": "1/1 turn Pike sole circle bwd with (540°) to hstd (Lucke)",
    "element_group": "5.000 Pike circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "bwd",
      "circle",
      "hstd",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 98"
  },
  {
    "id": "FIG-UB-5-609-98",
    "apparatus": "UB",
    "code": "5.609",
    "name": "1½ turn",
    "element_group": "5.000 Pike circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "circle",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 98"
  },
  {
    "id": "FIG-UB-5-409-99",
    "apparatus": "UB",
    "code": "5.409",
    "name": "Inner front support on LB sole circle bwd through flight to hang on HB (Maloney)",
    "element_group": "5.000 Pike circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "bwd",
      "circle",
      "flight",
      "pike",
      "support",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 99"
  },
  {
    "id": "FIG-UB-5-509-99",
    "apparatus": "UB",
    "code": "5.509",
    "name": "pike hstd with Facing outward on LB – sole circle bwd through hstd flight and ½ turn (180°) (Van Leeuwen), or 1/1 turn (360°) to hang (Seitz)",
    "element_group": "5.000 Pike circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "bwd",
      "circle",
      "flight",
      "hstd",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 99"
  },
  {
    "id": "FIG-UB-5-609-99",
    "apparatus": "UB",
    "code": "5.609",
    "name": "pike with on HB",
    "element_group": "5.000 Pike circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "circle",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 99"
  },
  {
    "id": "FIG-UB-5-410-99",
    "apparatus": "UB",
    "code": "5.410",
    "name": "Pike sole circle bwd counter straddle-reverse hecht over to hang (Ray) Pike sole circle bwd with straddle hecht over HB with turn (180°) to hang in mixed grip (Tweddle)",
    "element_group": "5.000 Pike circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "bwd",
      "circle",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 99"
  },
  {
    "id": "FIG-UB-5-510-99",
    "apparatus": "UB",
    "code": "5.510",
    "name": "HB Pike sole circle bwd counter hecht over HB to hang (Church) counter ½ L Pike sole circle bwd with pike hecht over HB with (180°) to hang in mixed L (Fenton)",
    "element_group": "5.000 Pike circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "bwd",
      "circle",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 99"
  },
  {
    "id": "FIG-UB-5-610-99",
    "apparatus": "UB",
    "code": "5.610",
    "name": "pike Pike sole circle bwd with counter stretched – reverse hecht in layout position over HB to hang (Nabieva) counter ½ turn grip Pike sole circle bwd with counter stretched – reverse hecht in layout position over HB, with ½ turn (180°) to hang in mixed L grip (Derwael)",
    "element_group": "5.000 Pike circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "bwd",
      "circle",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 99"
  },
  {
    "id": "FIG-UB-6-101-100",
    "apparatus": "UB",
    "code": "6.101",
    "name": "From HB – underswing with turn (180°) or 1/1 turn (360°) stand",
    "element_group": "5.000 Pike circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "5",
      "circle",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 100"
  },
  {
    "id": "FIG-UB-6-201-100",
    "apparatus": "UB",
    "code": "6.201",
    "name": "½ to From HB – underswing with fwd tucked or piked",
    "element_group": "5.000 Pike circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "circle",
      "fwd",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 100"
  },
  {
    "id": "FIG-UB-6-301-100",
    "apparatus": "UB",
    "code": "6.301",
    "name": "salto From HB – underswing with fwd tucked or piked with ½ (180°) or 1/1 turn (360°)",
    "element_group": "5.000 Pike circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "circle",
      "fwd",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 100"
  },
  {
    "id": "FIG-UB-6-401-100",
    "apparatus": "UB",
    "code": "6.401",
    "name": "salto turn From HB – underswing fwd tucked with 1½ turn From HB – underswing fwd stretched with ½ turn (Moors)",
    "element_group": "5.000 Pike circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "circle",
      "fwd",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 100"
  },
  {
    "id": "FIG-UB-6-501-100",
    "apparatus": "UB",
    "code": "6.501",
    "name": "with salto (540°) with salto (180°)",
    "element_group": "5.000 Pike circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "circle",
      "pike",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 100"
  },
  {
    "id": "FIG-UB-6-102-100",
    "apparatus": "UB",
    "code": "6.102",
    "name": "From HB – clear underswing ½ turn (180°) or 1/1 turn (360°) to stand",
    "element_group": "5.000 Pike circles",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "5",
      "circle",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 100"
  },
  {
    "id": "FIG-UB-6-202-100",
    "apparatus": "UB",
    "code": "6.202",
    "name": "with",
    "element_group": "5.000 Pike circles",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "circle",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 100"
  },
  {
    "id": "FIG-UB-6-302-100",
    "apparatus": "UB",
    "code": "6.302",
    "name": "From HB – clear underswing salto fwd tucked or piked; also with ½ turn (180°) Clear straddle circle with salto tucked (Plichta) also with ½ turn (180°) (Alt)",
    "element_group": "5.000 Pike circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "circle",
      "fwd",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 100"
  },
  {
    "id": "FIG-UB-6-402-100",
    "apparatus": "UB",
    "code": "6.402",
    "name": "with From HB – clear underswing salto fwd tucked with 1/1 (360°) Clear pike underswing to forward stretched with ½ (180°) fwd (Brunner) From HB – clear straddle with salto fwd tucked with turn (360°) (Petz)",
    "element_group": "5.000 Pike circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "circle",
      "forward",
      "fwd",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 100"
  },
  {
    "id": "FIG-UB-6-502-100",
    "apparatus": "UB",
    "code": "6.502",
    "name": "with turn From HB – clear underswing salto fwd tucked with 1½ (540°) salto turn circle 1/1",
    "element_group": "5.000 Pike circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "circle",
      "fwd",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 100"
  },
  {
    "id": "FIG-UB-6-602-100",
    "apparatus": "UB",
    "code": "6.602",
    "name": "with turn",
    "element_group": "5.000 Pike circles",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "circle",
      "pike",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 100"
  },
  {
    "id": "FIG-UB-6-303-101",
    "apparatus": "UB",
    "code": "6.303",
    "name": "From HB – underswing with clear underswing with ½ turn (180°) to salto bwd tucked (Comaneci)",
    "element_group": "5.000 Pike circles",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "bwd",
      "circle",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 101"
  },
  {
    "id": "FIG-UB-6-403-101",
    "apparatus": "UB",
    "code": "6.403",
    "name": "½ or or piked From HB – underswing turn (180°) to salto bwd stretched From HB – clear underswing ½ turn (180°) to salto bwd stretched (Okino) From HB – underswing turn (180°) to salto bwd with 1/1 turn (360°) (Kraeker)",
    "element_group": "5.000 Pike circles",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "bwd",
      "circle",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 101"
  },
  {
    "id": "FIG-UB-6-503-101",
    "apparatus": "UB",
    "code": "6.503",
    "name": "with ½ with with ½ tucked",
    "element_group": "5.000 Pike circles",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "circle",
      "pike",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 101"
  },
  {
    "id": "FIG-UB-6-104-102",
    "apparatus": "UB",
    "code": "6.104",
    "name": "Swing fwd to salto bwd tucked, piked or stretched (flyaway)",
    "element_group": "6.000 Dismounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "fwd",
      "mount",
      "pike",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 102"
  },
  {
    "id": "FIG-UB-6-204-102",
    "apparatus": "UB",
    "code": "6.204",
    "name": "Swing fwd to salto bwd tucked, stretched with ½ turn (180°) turn (360°) (flyaway)",
    "element_group": "6.000 Dismounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "fwd",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 102"
  },
  {
    "id": "FIG-UB-6-304-102",
    "apparatus": "UB",
    "code": "6.304",
    "name": "or or 1/1 Swing fwd to salto bwd stretched with 1½ turn (540°) or 2/1 (720°)",
    "element_group": "6.000 Dismounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "fwd",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 102"
  },
  {
    "id": "FIG-UB-6-404-102",
    "apparatus": "UB",
    "code": "6.404",
    "name": "turn Swing fwd to salto bwd with 2½ turn (900°) (Ji)",
    "element_group": "6.000 Dismounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "fwd",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 102"
  },
  {
    "id": "FIG-UB-6-504-102",
    "apparatus": "UB",
    "code": "6.504",
    "name": "stretched Swing fwd to salto bwd with 3/1 turn (1080°) (Bar)",
    "element_group": "6.000 Dismounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "fwd",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 102"
  },
  {
    "id": "FIG-UB-6-604-102",
    "apparatus": "UB",
    "code": "6.604",
    "name": "stretched",
    "element_group": "6.000 Dismounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "6",
      "dismount",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 102"
  },
  {
    "id": "FIG-UB-6-205-103",
    "apparatus": "UB",
    "code": "6.205",
    "name": "Swing fwd to double salto bwd tucked",
    "element_group": "6.000 Dismounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "double",
      "fwd",
      "mount",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 103"
  },
  {
    "id": "FIG-UB-6-305-103",
    "apparatus": "UB",
    "code": "6.305",
    "name": "Swing fwd to double salto piked",
    "element_group": "6.000 Dismounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "6",
      "acro",
      "dismount",
      "double",
      "fwd",
      "mount",
      "pike",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 103"
  },
  {
    "id": "FIG-UB-6-405-103",
    "apparatus": "UB",
    "code": "6.405",
    "name": "bwd Swing fwd to double salto tucked or piked with 1/1 (360°) in first or second (Morio / Chusovitina)",
    "element_group": "6.000 Dismounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "double",
      "fwd",
      "mount",
      "pike",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 103"
  },
  {
    "id": "FIG-UB-6-505-103",
    "apparatus": "UB",
    "code": "6.505",
    "name": "bwd turn salto Swing fwd to double salto tucked with 1½ turn (540°) (Mustafina)",
    "element_group": "6.000 Dismounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "double",
      "fwd",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 103"
  },
  {
    "id": "FIG-UB-6-605-103",
    "apparatus": "UB",
    "code": "6.605",
    "name": "bwd Swing fwd to double salto bwd tucked with 2/1 turn (720°) (Fabrichnova)",
    "element_group": "6.000 Dismounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "double",
      "fwd",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 103"
  },
  {
    "id": "FIG-UB-6-406-103",
    "apparatus": "UB",
    "code": "6.406",
    "name": "Swing fwd to double salto stretched",
    "element_group": "6.000 Dismounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "6",
      "acro",
      "dismount",
      "double",
      "fwd",
      "mount",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 103"
  },
  {
    "id": "FIG-UB-6-606-103",
    "apparatus": "UB",
    "code": "6.606",
    "name": "Swing fwd to double salto bwd stretched with 1/1 turn (360°) first or second salto Swing fwd to double salto bwd stretched with 2/1 turn (720°) (Ray)",
    "element_group": "6.000 Dismounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "double",
      "fwd",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 103"
  },
  {
    "id": "FIG-UB-6-407-104",
    "apparatus": "UB",
    "code": "6.407",
    "name": "Swing fwd to salto bwd tucked with ½ turn (180°) – into fwd tucked (Fontaine) Swing fwd with ½ turn (180°) double salto fwd tucked",
    "element_group": "6.000 Dismounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "double",
      "fwd",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 104"
  },
  {
    "id": "FIG-UB-6-507-104",
    "apparatus": "UB",
    "code": "6.507",
    "name": "salto Swing fwd to salto bwd stretched with ½ turn (180°) – into fwd stretched (Blanco) to Swing fwd with ½ turn (180°) double salto fwd piked (Giovannini / Li Ya)",
    "element_group": "6.000 Dismounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "double",
      "fwd",
      "mount",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 104"
  },
  {
    "id": "FIG-UB-6-607-104",
    "apparatus": "UB",
    "code": "6.607",
    "name": "salto Swing fwd to triple salto bwd tucked (Magaña) to",
    "element_group": "6.000 Dismounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "fwd",
      "mount",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 104"
  },
  {
    "id": "FIG-UB-6-108-105",
    "apparatus": "UB",
    "code": "6.108",
    "name": "Swing bwd to salto fwd tucked, piked or stretched or clear straddle circle fwd on salto fwd tucked",
    "element_group": "6.000 Dismounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "6",
      "acro",
      "bwd",
      "circle",
      "dismount",
      "fwd",
      "mount",
      "pike",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 105"
  },
  {
    "id": "FIG-UB-6-208-105",
    "apparatus": "UB",
    "code": "6.208",
    "name": "HB to Swing bwd to salto fwd tucked stretched with ½ turn (180°) turn (360°)",
    "element_group": "6.000 Dismounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "fwd",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 105"
  },
  {
    "id": "FIG-UB-6-308-105",
    "apparatus": "UB",
    "code": "6.308",
    "name": "or or 1/1 Swing bwd to salto fwd stretched with 1½ turn (540°) or 2/1 (720°) (Pechstein) From L grip, swing bwd, ½ turn, to double salto bwd tucked (Fan)",
    "element_group": "6.000 Dismounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "double",
      "fwd",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 105"
  },
  {
    "id": "FIG-UB-6-408-105",
    "apparatus": "UB",
    "code": "6.408",
    "name": "turn Swing bwd to double salto tucked From L grip, swing bwd (180°), to double salto bwd (Okamura) (180°)",
    "element_group": "6.000 Dismounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "double",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 105"
  },
  {
    "id": "FIG-UB-6-508-105",
    "apparatus": "UB",
    "code": "6.508",
    "name": "fwd Swing bwd to double salto tucked with ½ turn (180°) also salto fwd with ½ turn into salto bwd tucked (Arai) ½ turn piked Swing bwd to double salto piked (Stewart)",
    "element_group": "6.000 Dismounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "double",
      "fwd",
      "mount",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 105"
  },
  {
    "id": "FIG-UB-6-608-105",
    "apparatus": "UB",
    "code": "6.608",
    "name": "fwd (180°) Swing bwd to double salto fwd piked with ½ turn (180°) (Pentek) fwd",
    "element_group": "6.000 Dismounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "double",
      "fwd",
      "mount",
      "pike",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 105"
  },
  {
    "id": "FIG-UB-6-209-106",
    "apparatus": "UB",
    "code": "6.209",
    "name": "Hip circle bwd (also clear) on HB – hecht",
    "element_group": "6.000 Dismounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "6",
      "bwd",
      "circle",
      "dismount",
      "mount",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 106"
  },
  {
    "id": "FIG-UB-6-309-106",
    "apparatus": "UB",
    "code": "6.309",
    "name": "LB or Hip circle bwd (also clear) HB – hecht with 1/1 turn (360°)",
    "element_group": "6.000 Dismounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "6",
      "bwd",
      "circle",
      "dismount",
      "mount",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 106"
  },
  {
    "id": "FIG-UB-6-409-106",
    "apparatus": "UB",
    "code": "6.409",
    "name": "on LB or Hip circle bwd (also clear) or HB – hecht with salto tucked (Mukhina)",
    "element_group": "6.000 Dismounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "6",
      "acro",
      "bwd",
      "circle",
      "dismount",
      "mount",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 106"
  },
  {
    "id": "FIG-UB-6-509-106",
    "apparatus": "UB",
    "code": "6.509",
    "name": "on LB bwd Hip circle bwd (also clear) or HB – hecht with ½ turn to salto fwd tucked",
    "element_group": "6.000 Dismounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "6",
      "acro",
      "bwd",
      "circle",
      "dismount",
      "fwd",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 106"
  },
  {
    "id": "FIG-UB-6-609-106",
    "apparatus": "UB",
    "code": "6.609",
    "name": "on LB (180°) Hip circle bwd (also clear) on LB or HB – hecht with 1/1 turn (360°) to salto bwd tucked (Ma)",
    "element_group": "6.000 Dismounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "6",
      "acro",
      "bwd",
      "circle",
      "dismount",
      "mount",
      "salto",
      "turn",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 106"
  },
  {
    "id": "FIG-UB-6-210-106",
    "apparatus": "UB",
    "code": "6.210",
    "name": "On HB - salto fwd tucked",
    "element_group": "6.000 Dismounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "6",
      "acro",
      "dismount",
      "fwd",
      "mount",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 106"
  },
  {
    "id": "FIG-UB-6-310-106",
    "apparatus": "UB",
    "code": "6.310",
    "name": "On HB – salto fwd piked or bwd tucked or piked (Delladio / Parolari)",
    "element_group": "6.000 Dismounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "6",
      "acro",
      "bwd",
      "dismount",
      "fwd",
      "mount",
      "pike",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 106"
  },
  {
    "id": "FIG-UB-6-410-106",
    "apparatus": "UB",
    "code": "6.410",
    "name": "salto",
    "element_group": "6.000 Dismounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "6",
      "acro",
      "dismount",
      "mount",
      "salto",
      "ub"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 106"
  },
  {
    "id": "FIG-BB-1-101-108",
    "apparatus": "BB",
    "code": "1.101",
    "name": "Leap - on landing must show arabesque position (leg min. at horizontal)",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "bb",
      "dance",
      "leap",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-201-108",
    "apparatus": "BB",
    "code": "1.201",
    "name": "Split leap (180°) leg – free leap over beam, one leg approach to beam, or sit on thigh – diagonal approach",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bb",
      "dance",
      "leap",
      "mount",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-401-108",
    "apparatus": "BB",
    "code": "1.401",
    "name": "Leap fwd with leg change leg swing to 45°) to cross",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "bb",
      "dance",
      "fwd",
      "leap",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-501-108",
    "apparatus": "BB",
    "code": "1.501",
    "name": "(free split (D) = To be counted",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "bb",
      "dance",
      "mount",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-601-108",
    "apparatus": "BB",
    "code": "1.601",
    "name": "as Dance element",
    "element_group": "1.000 Mounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "bb",
      "dance",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-102-108",
    "apparatus": "BB",
    "code": "1.102",
    "name": "Thief vault – take-off from one another to rear support – 90° Scissor leap over beam to cross beam",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "bb",
      "dance",
      "leap",
      "mount",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-302-108",
    "apparatus": "BB",
    "code": "1.302",
    "name": "after to Straight Jump with ½ turn (180°) flight phase to stand",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "bb",
      "dance",
      "flight",
      "jump",
      "mount",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-402-108",
    "apparatus": "BB",
    "code": "1.402",
    "name": "in Jump with 1/1 turn (360°) phase to stand – approach end or diagonal to beam",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "bb",
      "dance",
      "jump",
      "mount",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-502-108",
    "apparatus": "BB",
    "code": "1.502",
    "name": "in flight from",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "bb",
      "flight",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-103-108",
    "apparatus": "BB",
    "code": "1.103",
    "name": "Flank to rear support, also with ½ turn (180°) Jump with hand support, ¾ (270˚) in support to cross sit thigh",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "bb",
      "dance",
      "jump",
      "mount",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-203-108",
    "apparatus": "BB",
    "code": "1.203",
    "name": "turn on",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bb",
      "mount",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-303-108",
    "apparatus": "BB",
    "code": "1.303",
    "name": "Two flying flairs",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "bb",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-403-108",
    "apparatus": "BB",
    "code": "1.403",
    "name": "flying flairs (Homma) Two flank circles followed “Flair” (Baitova)",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "bb",
      "circle",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-503-108",
    "apparatus": "BB",
    "code": "1.503",
    "name": "by leg",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "bb",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 108"
  },
  {
    "id": "FIG-BB-1-204-109",
    "apparatus": "BB",
    "code": "1.204",
    "name": "Jump with ½ turn (180°) to clear straddle support, or jump bwd through straddle position over beam to front support, or to split – 90° approach to beam",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bb",
      "bwd",
      "dance",
      "jump",
      "mount",
      "split",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 109"
  },
  {
    "id": "FIG-BB-1-304-109",
    "apparatus": "BB",
    "code": "1.304",
    "name": "the side Straddle pike jump bwd over from round-off into immediate circle bwd – 90° approach",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "acro",
      "bb",
      "bwd",
      "circle",
      "dance",
      "jump",
      "mount",
      "pike",
      "round-off"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 109"
  },
  {
    "id": "FIG-BB-1-404-109",
    "apparatus": "BB",
    "code": "1.404",
    "name": "beam hip to beam",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "bb",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 109"
  },
  {
    "id": "FIG-BB-1-105-109",
    "apparatus": "BB",
    "code": "1.105",
    "name": "— Jump with hand support to split sit or straddle position show split without hands touching the beam as final position; in straddle position trunk must touch the beam) Jump or leap to cross split sit – diagonal approach to beam (with hand support)",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "bb",
      "dance",
      "jump",
      "leap",
      "mount",
      "split",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 109"
  },
  {
    "id": "FIG-BB-1-205-109",
    "apparatus": "BB",
    "code": "1.205",
    "name": "side (must the",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bb",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 109"
  },
  {
    "id": "FIG-BB-1-305-109",
    "apparatus": "BB",
    "code": "1.305",
    "name": "Free jump to cross split sit take-off from two feet – diagonal approach to beam Change leg leap to free cross sit – diagonal approach to (Dick)",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "bb",
      "dance",
      "jump",
      "leap",
      "mount",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 109"
  },
  {
    "id": "FIG-BB-1-405-109",
    "apparatus": "BB",
    "code": "1.405",
    "name": "Leap with leg change and (180˚) away from beam to cross split sit – diagonal approach to beam (Dick) split beam",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "bb",
      "dance",
      "leap",
      "mount",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 109"
  },
  {
    "id": "FIG-BB-1-505-109",
    "apparatus": "BB",
    "code": "1.505",
    "name": "½ turn free",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "bb",
      "mount",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 109"
  },
  {
    "id": "FIG-BB-1-106-110",
    "apparatus": "BB",
    "code": "1.106",
    "name": "From side stand - squat or stoop through to rear support",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "bb",
      "mount",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 110"
  },
  {
    "id": "FIG-BB-1-207-110",
    "apparatus": "BB",
    "code": "1.207",
    "name": "Jump to roll fwd at end or middle beam to sit position or tuck Jump to clear straddle support end of beam – swing bwd to fwd to sit position or tuck stand",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bb",
      "bwd",
      "dance",
      "fwd",
      "jump",
      "mount",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 110"
  },
  {
    "id": "FIG-BB-1-307-110",
    "apparatus": "BB",
    "code": "1.307",
    "name": "of stand on roll",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "bb",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 110"
  },
  {
    "id": "FIG-BB-1-108-110",
    "apparatus": "BB",
    "code": "1.108",
    "name": "Cartwheel with bending of both arms through chest stand to swing down Stand at side of beam and jump to chest stand with both arms bent",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "bb",
      "dance",
      "jump",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 110"
  },
  {
    "id": "FIG-BB-1-208-110",
    "apparatus": "BB",
    "code": "1.208",
    "name": "Jump with ½ turn (180°) over shoulder to neck stand, ½ turn (180°) to chest stand",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bb",
      "dance",
      "jump",
      "mount",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 110"
  },
  {
    "id": "FIG-BB-1-308-110",
    "apparatus": "BB",
    "code": "1.308",
    "name": "Jump with ½ turn (180°) over shoulder to neck stand, 1/1 1½ turn (360° - 540˚) to neck",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "bb",
      "dance",
      "jump",
      "mount",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 110"
  },
  {
    "id": "FIG-BB-1-408-110",
    "apparatus": "BB",
    "code": "1.408",
    "name": "or stand",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "bb",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 110"
  },
  {
    "id": "FIG-BB-1-309-111",
    "apparatus": "BB",
    "code": "1.309",
    "name": "From cross stand facing end beam – head kip From cross stand facing end beam – jump to hstd with hip (pike) to front walkover From cross stand facing end beam – jump to hstd with hip (pike) to handspring fwd with step-out or land on feet",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "acro",
      "bb",
      "dance",
      "fwd",
      "handspring",
      "hstd",
      "jump",
      "kip",
      "mount",
      "pike",
      "ring",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 111"
  },
  {
    "id": "FIG-BB-1-409-111",
    "apparatus": "BB",
    "code": "1.409",
    "name": "of of angle of angle",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "bb",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 111"
  },
  {
    "id": "FIG-BB-1-609-111",
    "apparatus": "BB",
    "code": "1.609",
    "name": "Round-off at end of beam – flic- flac with ½ turn (180°) and walkover fwd (Dunn)",
    "element_group": "1.000 Mounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "acro",
      "bb",
      "flic",
      "fwd",
      "mount",
      "round-off",
      "turn",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 111"
  },
  {
    "id": "FIG-BB-1-210-112",
    "apparatus": "BB",
    "code": "1.210",
    "name": "Jump, press, or swing to hstd (2 sec.) – lower to end position touching beam, also with ½ turn (180°) in hstd",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bb",
      "dance",
      "hstd",
      "jump",
      "mount",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 112"
  },
  {
    "id": "FIG-BB-1-310-112",
    "apparatus": "BB",
    "code": "1.310",
    "name": "Jump, press, or swing to cross side hstd with 1/1 - 1½ turn (360°- 540°) – lower to end position touching beam 360° 360° 360°",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "bb",
      "dance",
      "hstd",
      "jump",
      "mount",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 112"
  },
  {
    "id": "FIG-BB-1-111-113",
    "apparatus": "BB",
    "code": "1.111",
    "name": "Planche with support on one or both bent arms (2 sec.), also legs in cross split position",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "bb",
      "dance",
      "mount",
      "split",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 113"
  },
  {
    "id": "FIG-BB-1-211-113",
    "apparatus": "BB",
    "code": "1.211",
    "name": "Jump with bent hips to clear support above horizontal minimum at 45° (planche) (2 sec.) - lower to optional end position",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bb",
      "dance",
      "jump",
      "mount",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 113"
  },
  {
    "id": "FIG-BB-1-311-113",
    "apparatus": "BB",
    "code": "1.311",
    "name": "front Jump with stretched hips to planche (2 sec.) (Shushunova) Jump, press, or swing to hstd lower to planche (2 sec.), also with ½ turn (180°) in hstd Jump, press, or swing to hstd lower to clear pike support legs together (2 sec.), also with ½ turn (180°) in hstd From hstd (2 sec.) release hand",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "bb",
      "dance",
      "hstd",
      "jump",
      "mount",
      "pike",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 113"
  },
  {
    "id": "FIG-BB-1-411-113",
    "apparatus": "BB",
    "code": "1.411",
    "name": "Jump, press or swing to hstd – 1/1 turn (360°) in hstd – planche (2 sec.), – or to clear pike support with together (2 sec.) – with Jump, press, or swing to 1/1 turn (360°) in hstd – release one hand with swing down rear support one to rear",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "bb",
      "dance",
      "hstd",
      "jump",
      "mount",
      "pike",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 113"
  },
  {
    "id": "FIG-BB-1-511-113",
    "apparatus": "BB",
    "code": "1.511",
    "name": "lower to legs hstd – swd to",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "bb",
      "hstd",
      "mount",
      "swd"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 113"
  },
  {
    "id": "FIG-BB-1-312-114",
    "apparatus": "BB",
    "code": "1.312",
    "name": "Hstd in cross position with arch span, also piked with vertical, other leg bent (2 sec.) - lower to optional end position Hstd with horizontal leg hold (2 sec.) – reverse planche different variations - lower optional end position",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "bb",
      "hstd",
      "mount",
      "pike"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 114"
  },
  {
    "id": "FIG-BB-1-412-114",
    "apparatus": "BB",
    "code": "1.412",
    "name": "large one leg Jump or press to side hstd walkover fwd to side stand both legs (Phillips) in to",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "acro",
      "bb",
      "dance",
      "fwd",
      "hstd",
      "jump",
      "mount",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 114"
  },
  {
    "id": "FIG-BB-1-512-114",
    "apparatus": "BB",
    "code": "1.512",
    "name": "on to hstd lower to optional end position, to hstd – shift weight to side hstd on straddle support on one arm,",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "bb",
      "hstd",
      "mount",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 114"
  },
  {
    "id": "FIG-BB-1-213-114",
    "apparatus": "BB",
    "code": "1.213",
    "name": "Press to side hstd, with bending stretching of legs – hop with ¼ turn (90°) to cross hstd - to optional end position",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bb",
      "dance",
      "hop",
      "hstd",
      "mount",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 114"
  },
  {
    "id": "FIG-BB-1-313-114",
    "apparatus": "BB",
    "code": "1.313",
    "name": "lower Jump, press, or swing to hstd weight to one arm hstd (2 sec.) – lower to optional end position",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "bb",
      "dance",
      "hstd",
      "jump",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 114"
  },
  {
    "id": "FIG-BB-1-413-114",
    "apparatus": "BB",
    "code": "1.413",
    "name": "shift Jump or press on one arm also jump, press, or swing arm (2 sec.), lowering to clear also with ¼ turn (90°) (Rankin)",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "bb",
      "dance",
      "jump",
      "mount",
      "ring",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 114"
  },
  {
    "id": "FIG-BB-1-114-115",
    "apparatus": "BB",
    "code": "1.114",
    "name": "Jump to hstd with bent or straight legs – lower to optional end position",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "bb",
      "dance",
      "hstd",
      "jump",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 115"
  },
  {
    "id": "FIG-BB-1-214-115",
    "apparatus": "BB",
    "code": "1.214",
    "name": "Cartwheel on one or both arms",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bb",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 115"
  },
  {
    "id": "FIG-BB-1-314-115",
    "apparatus": "BB",
    "code": "1.314",
    "name": "Jump with ¼ turn (90°) and extended hips through a momentary hstd on one arm immediate ¼ turn (90°) and support on second arm to side hstd – lower to optional end position - 90° approach to beam From rear stand (back towards beam), flic flac over beam candle position, ending in front support",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "acro",
      "bb",
      "dance",
      "flic",
      "hstd",
      "jump",
      "mount",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 115"
  },
  {
    "id": "FIG-BB-1-414-115",
    "apparatus": "BB",
    "code": "1.414",
    "name": "with Round-off in front of beam with ½ twist (180°) to near hstd – lower to optional position (Gurova) to (180°) front beam",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "acro",
      "bb",
      "hstd",
      "mount",
      "round-off",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 115"
  },
  {
    "id": "FIG-BB-1-514-115",
    "apparatus": "BB",
    "code": "1.514",
    "name": "jump side Round-off in front of beam flac with1/1 twist (360°) to circle bwd (Zamolodchikova)",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "acro",
      "bb",
      "bwd",
      "circle",
      "dance",
      "jump",
      "mount",
      "round-off",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 115"
  },
  {
    "id": "FIG-BB-1-614-115",
    "apparatus": "BB",
    "code": "1.614",
    "name": "flic- hip",
    "element_group": "1.000 Mounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "acro",
      "bb",
      "flic",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 115"
  },
  {
    "id": "FIG-BB-1-215-116",
    "apparatus": "BB",
    "code": "1.215",
    "name": "Handspring fwd with hand repulsion from springboard support – or with ¼ turn (90°) cross sit on thigh – 90° approach to beam Cartwheel, grasping the beam, front support – 90° approach beam",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "acro",
      "bb",
      "dance",
      "fwd",
      "handspring",
      "mount",
      "ring",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 116"
  },
  {
    "id": "FIG-BB-1-315-116",
    "apparatus": "BB",
    "code": "1.315",
    "name": "to rear to Free (aerial) walkover fwd support – or with ¼ turn (90°) cross sit on thigh – 90° approach to beam to to",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "acro",
      "aerial",
      "bb",
      "fwd",
      "mount",
      "support",
      "turn",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 116"
  },
  {
    "id": "FIG-BB-1-415-116",
    "apparatus": "BB",
    "code": "1.415",
    "name": "to rear to",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "bb",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 116"
  },
  {
    "id": "FIG-BB-1-615-116",
    "apparatus": "BB",
    "code": "1.615",
    "name": "Aerial walkover fwd to cross stand – approach from end of beam, take off from both feet",
    "element_group": "1.000 Mounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "acro",
      "aerial",
      "bb",
      "fwd",
      "mount",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 116"
  },
  {
    "id": "FIG-BB-1-416-117",
    "apparatus": "BB",
    "code": "1.416",
    "name": "Salto fwd tucked to stand approach from end of beam",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "acro",
      "bb",
      "fwd",
      "mount",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 117"
  },
  {
    "id": "FIG-BB-1-516-117",
    "apparatus": "BB",
    "code": "1.516",
    "name": "Salto fwd piked to stand approach from end of beam",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "acro",
      "bb",
      "fwd",
      "mount",
      "pike",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 117"
  },
  {
    "id": "FIG-BB-1-616-117",
    "apparatus": "BB",
    "code": "1.616",
    "name": "Salto fwd tucked with ½ twist (180°) (Wong Hiu Ying Angel) Round-off at end of beam – take off bwd with ½ turn (180°) – tucked salto fwd to stand (Erceg)",
    "element_group": "1.000 Mounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "acro",
      "bb",
      "bwd",
      "fwd",
      "mount",
      "round-off",
      "salto",
      "turn",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 117"
  },
  {
    "id": "FIG-BB-1-317-117",
    "apparatus": "BB",
    "code": "1.317",
    "name": "Round-off at end of beam – through hstd with swing down cross straddle sit",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "acro",
      "bb",
      "hstd",
      "mount",
      "round-off"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 117"
  },
  {
    "id": "FIG-BB-1-417-117",
    "apparatus": "BB",
    "code": "1.417",
    "name": "flic-flac to Round-off at end of beam flac through hstd – support or both arms – to stand Round-off at end of beam flac with 1/1 twist (360°) into down to cross straddle sit (Tsavdaridou)",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "acro",
      "bb",
      "flic",
      "hstd",
      "mount",
      "round-off",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 117"
  },
  {
    "id": "FIG-BB-1-517-117",
    "apparatus": "BB",
    "code": "1.517",
    "name": "flic- on one Round-off at end of beam flac with ¾ twist (270˚) to – flic- swing",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "acro",
      "bb",
      "flic",
      "mount",
      "round-off",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 117"
  },
  {
    "id": "FIG-BB-1-617-117",
    "apparatus": "BB",
    "code": "1.617",
    "name": "flic- stand",
    "element_group": "1.000 Mounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "acro",
      "bb",
      "flic",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 117"
  },
  {
    "id": "FIG-BB-1-518-118",
    "apparatus": "BB",
    "code": "1.518",
    "name": "Round-off at end of beam bwd tucked, piked or stretched with step-out to stand",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "acro",
      "bb",
      "bwd",
      "mount",
      "pike",
      "round-off"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 118"
  },
  {
    "id": "FIG-BB-1-618-118",
    "apparatus": "BB",
    "code": "1.618",
    "name": "salto Round-off at end of beam – salto bwd tucked with 1/1 twist (360°) to stand (Garrison) Round-off at end of beam – salto bwd stretched to stand Round-off at end of beam – salto bwd stretched with 1/1 twist (360°) to stand",
    "element_group": "1.000 Mounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "acro",
      "bb",
      "bwd",
      "mount",
      "round-off",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 118"
  },
  {
    "id": "FIG-BB-1-619-119",
    "apparatus": "BB",
    "code": "1.619",
    "name": "Jump fwd with ½ twist (180°) – salto bwd piked to stand",
    "element_group": "1.000 Mounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "acro",
      "bb",
      "bwd",
      "dance",
      "fwd",
      "jump",
      "mount",
      "pike",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 119"
  },
  {
    "id": "FIG-BB-2-101-120",
    "apparatus": "BB",
    "code": "2.101",
    "name": "Split leap fwd (leg separation 180°)",
    "element_group": "1.000 Mounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "bb",
      "dance",
      "fwd",
      "leap",
      "mount",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 120"
  },
  {
    "id": "FIG-BB-2-301-120",
    "apparatus": "BB",
    "code": "2.301",
    "name": "Split leap fwd with ½ turn (180°)",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "bb",
      "dance",
      "fwd",
      "leap",
      "mount",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 120"
  },
  {
    "id": "FIG-BB-2-202-120",
    "apparatus": "BB",
    "code": "2.202",
    "name": "JUMPS AND HOPS Split jump (leg separation 180°) from cross position",
    "element_group": "1.000 Mounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bb",
      "dance",
      "hop",
      "jump",
      "mount",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 120"
  },
  {
    "id": "FIG-BB-2-302-120",
    "apparatus": "BB",
    "code": "2.302",
    "name": "Split jump with ½ turn (180°) cross position",
    "element_group": "1.000 Mounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "bb",
      "dance",
      "jump",
      "mount",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 120"
  },
  {
    "id": "FIG-BB-2-402-120",
    "apparatus": "BB",
    "code": "2.402",
    "name": "from Split jump with 1/1 turn (360°) from cross position",
    "element_group": "1.000 Mounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "bb",
      "dance",
      "jump",
      "mount",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 120"
  },
  {
    "id": "FIG-BB-2-502-120",
    "apparatus": "BB",
    "code": "2.502",
    "name": "Jumps from side position position, or vice versa elements performed (additional 90° does different)",
    "element_group": "1.000 Mounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "bb",
      "dance",
      "jump",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 120"
  },
  {
    "id": "FIG-BB-2-602-120",
    "apparatus": "BB",
    "code": "2.602",
    "name": "finishing in cross – consider as in cross position not make element",
    "element_group": "1.000 Mounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "bb",
      "mount"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 120"
  },
  {
    "id": "FIG-BB-2-203-121",
    "apparatus": "BB",
    "code": "2.203",
    "name": "Straddle pike jump (both legs above horizontal), or side split jump from cross position",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "pike",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 121"
  },
  {
    "id": "FIG-BB-2-303-121",
    "apparatus": "BB",
    "code": "2.303",
    "name": "Straddle pike jump with ½ (180°) from cross position",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "pike"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 121"
  },
  {
    "id": "FIG-BB-2-403-121",
    "apparatus": "BB",
    "code": "2.403",
    "name": "turn Straddle pike jump with 1/1 (360°) from cross position",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "pike",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 121"
  },
  {
    "id": "FIG-BB-2-503-121",
    "apparatus": "BB",
    "code": "2.503",
    "name": "turn (*) in the with an asterisk only once in chronological Jumps from side position position, or vice versa elements performed (additional 90° does different)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 121"
  },
  {
    "id": "FIG-BB-2-603-121",
    "apparatus": "BB",
    "code": "2.603",
    "name": "same box (*) receive credit order finishing in cross – consider as in cross position not make element",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 121"
  },
  {
    "id": "FIG-BB-2-204-122",
    "apparatus": "BB",
    "code": "2.204",
    "name": "Fouetté hop with ½ turn (180°) land in arabesque (free leg horizontal)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-304-122",
    "apparatus": "BB",
    "code": "2.304",
    "name": "to above",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-404-122",
    "apparatus": "BB",
    "code": "2.404",
    "name": "Fouetté hop with leg change cross split (leg separation (tour jeté)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-504-122",
    "apparatus": "BB",
    "code": "2.504",
    "name": "to 180°) Tour jeté with additional (180°)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-604-122",
    "apparatus": "BB",
    "code": "2.604",
    "name": "½ turn",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-105-122",
    "apparatus": "BB",
    "code": "2.105",
    "name": "Stride leap fwd with change legs to wolf position (hip angle at 45°)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "2",
      "bb",
      "dance",
      "fwd",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-305-122",
    "apparatus": "BB",
    "code": "2.305",
    "name": "Leap fwd with leg change (free swing to 45˚) to cross split separation < after leg change) (Switch leap)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "bb",
      "dance",
      "fwd",
      "hop",
      "jump",
      "leap",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-405-122",
    "apparatus": "BB",
    "code": "2.405",
    "name": "leg (180° Switch leap with ½ turn (180°)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-505-122",
    "apparatus": "BB",
    "code": "2.505",
    "name": "Switch leap to ring position (leg separation 180°)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "ring"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-206-122",
    "apparatus": "BB",
    "code": "2.206",
    "name": "Leap with ¼ turn (90°) into straddle pike position (both above horizontal), to land on or both feet",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "pike",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-306-122",
    "apparatus": "BB",
    "code": "2.306",
    "name": "legs one Leap fwd with leg change and ¼ turn (90°) to side split (180°) straddle pike position (Johnson)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "bb",
      "dance",
      "fwd",
      "hop",
      "jump",
      "leap",
      "pike",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-506-122",
    "apparatus": "BB",
    "code": "2.506",
    "name": "Johnson with additional (180°)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-606-122",
    "apparatus": "BB",
    "code": "2.606",
    "name": "½ turn",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 122"
  },
  {
    "id": "FIG-BB-2-107-123",
    "apparatus": "BB",
    "code": "2.107",
    "name": "Pike jump from cross position (legs above horizontal)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "pike"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 123"
  },
  {
    "id": "FIG-BB-2-207-123",
    "apparatus": "BB",
    "code": "2.207",
    "name": "Pike jump with ½ turn (180°) cross position",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "pike",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 123"
  },
  {
    "id": "FIG-BB-2-307-123",
    "apparatus": "BB",
    "code": "2.307",
    "name": "from",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 123"
  },
  {
    "id": "FIG-BB-2-407-123",
    "apparatus": "BB",
    "code": "2.407",
    "name": "Pike jump with 1/1 turn (360°) from cross position",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "pike",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 123"
  },
  {
    "id": "FIG-BB-2-507-123",
    "apparatus": "BB",
    "code": "2.507",
    "name": "Jumps from side position position, or vice versa elements performed (additional 90° does different)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 123"
  },
  {
    "id": "FIG-BB-2-607-123",
    "apparatus": "BB",
    "code": "2.607",
    "name": "finishing in cross – consider as in cross position not make element",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 123"
  },
  {
    "id": "FIG-BB-2-108-123",
    "apparatus": "BB",
    "code": "2.108",
    "name": "Sissone (leg separation 180° the diagonal / 45° to the floor) take off from both feet, land one foot Stag jump (leg separation 180°, back leg straight or bent)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 123"
  },
  {
    "id": "FIG-BB-2-208-123",
    "apparatus": "BB",
    "code": "2.208",
    "name": "on on Sissone to ring position (rear at head height, body arched head dropped bwd, leg separation 180°) to land on one foot, or ring jump",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "bb",
      "bwd",
      "dance",
      "hop",
      "jump",
      "leap",
      "ring"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 123"
  },
  {
    "id": "FIG-BB-2-308-123",
    "apparatus": "BB",
    "code": "2.308",
    "name": "foot and stag- Jump with upper back arch head release with feet to head height/closed ring (Sheep jump)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "ring"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 123"
  },
  {
    "id": "FIG-BB-2-408-123",
    "apparatus": "BB",
    "code": "2.408",
    "name": "and Split jump to ring position separation 180°) to land on Split ring leap (leg separation Jump to cross over split with arched and head dropped (Yang Bo)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "ring",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 123"
  },
  {
    "id": "FIG-BB-2-508-123",
    "apparatus": "BB",
    "code": "2.508",
    "name": "(leg two feet 180°) body bwd (*) with an asterisk only once in",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "bb",
      "bwd",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 123"
  },
  {
    "id": "FIG-BB-2-608-123",
    "apparatus": "BB",
    "code": "2.608",
    "name": "in the same box (*) receive credit chronological order",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 123"
  },
  {
    "id": "FIG-BB-2-209-124",
    "apparatus": "BB",
    "code": "2.209",
    "name": "Hop with ½ turn (180°) free extended fwd at horizontal throughout Stretched jump or hop with 1/1turn (360°) from cross position 360°",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "bb",
      "dance",
      "fwd",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 124"
  },
  {
    "id": "FIG-BB-2-409-124",
    "apparatus": "BB",
    "code": "2.409",
    "name": "Stretched jump or hop with turn (540°) from cross position",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 124"
  },
  {
    "id": "FIG-BB-2-509-124",
    "apparatus": "BB",
    "code": "2.509",
    "name": "1½ (*) in the with an asterisk (*) only once in chronological",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 124"
  },
  {
    "id": "FIG-BB-2-609-124",
    "apparatus": "BB",
    "code": "2.609",
    "name": "same box receive credit order",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 124"
  },
  {
    "id": "FIG-BB-2-110-125",
    "apparatus": "BB",
    "code": "2.110",
    "name": "Cat leap (knees above horizontal alternately) Scissors leap fwd (legs above horizontal)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "2",
      "bb",
      "dance",
      "fwd",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 125"
  },
  {
    "id": "FIG-BB-2-210-125",
    "apparatus": "BB",
    "code": "2.210",
    "name": "Cat leap with ½ turn (180°) (*) in the same with an asterisk (*) receive only once in chronological",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 125"
  },
  {
    "id": "FIG-BB-2-310-125",
    "apparatus": "BB",
    "code": "2.310",
    "name": "Cat leap with 1/1 turn (360°) box credit order",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 125"
  },
  {
    "id": "FIG-BB-2-211-126",
    "apparatus": "BB",
    "code": "2.211",
    "name": "Tuck hop or jump with ½ turn (180°) from cross position (hip & knee angle at 45°) 180°",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 126"
  },
  {
    "id": "FIG-BB-2-311-126",
    "apparatus": "BB",
    "code": "2.311",
    "name": "Tuck hop or jump with 1/1 turn (360°) from cross position 360°",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 126"
  },
  {
    "id": "FIG-BB-2-411-126",
    "apparatus": "BB",
    "code": "2.411",
    "name": "Tuck hop or jump with 1½ (540°) from cross position",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 126"
  },
  {
    "id": "FIG-BB-2-511-126",
    "apparatus": "BB",
    "code": "2.511",
    "name": "turn Jumps from side position position, or vice versa elements performed (additional 90° does different)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 126"
  },
  {
    "id": "FIG-BB-2-611-126",
    "apparatus": "BB",
    "code": "2.611",
    "name": "finishing in cross – consider as in cross position not make element",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 126"
  },
  {
    "id": "FIG-BB-2-112-126",
    "apparatus": "BB",
    "code": "2.112",
    "name": "Wolf hop or jump from cross position (hip angle at 45°, knees together)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 126"
  },
  {
    "id": "FIG-BB-2-212-126",
    "apparatus": "BB",
    "code": "2.212",
    "name": "Wolf hop or jump with ½ turn (180°) from cross position 180°",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 126"
  },
  {
    "id": "FIG-BB-2-412-126",
    "apparatus": "BB",
    "code": "2.412",
    "name": "Wolf hop or jump with 1/1 (360°) from cross position 360°",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 126"
  },
  {
    "id": "FIG-BB-2-512-126",
    "apparatus": "BB",
    "code": "2.512",
    "name": "turn Wolf hop or jump with 1½ (540°) from cross position 540°",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 126"
  },
  {
    "id": "FIG-BB-2-612-126",
    "apparatus": "BB",
    "code": "2.612",
    "name": "turn",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 126"
  },
  {
    "id": "FIG-BB-3-101-127",
    "apparatus": "BB",
    "code": "3.101",
    "name": "1/1 turn (360°) on one leg – leg optional below horizontal",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 127"
  },
  {
    "id": "FIG-BB-3-201-127",
    "apparatus": "BB",
    "code": "3.201",
    "name": "free 1½ turn (540°) on one leg – leg optional below horizontal",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 127"
  },
  {
    "id": "FIG-BB-3-301-127",
    "apparatus": "BB",
    "code": "3.301",
    "name": "free",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 127"
  },
  {
    "id": "FIG-BB-3-401-127",
    "apparatus": "BB",
    "code": "3.401",
    "name": "2/1 turn (720°) on one leg leg optional below horizontal",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 127"
  },
  {
    "id": "FIG-BB-3-501-127",
    "apparatus": "BB",
    "code": "3.501",
    "name": "free 3/1 turn (1080°) on one leg free leg optional below horizontal (Okino)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 127"
  },
  {
    "id": "FIG-BB-3-402-127",
    "apparatus": "BB",
    "code": "3.402",
    "name": "TURNS back 1½ turn (540°) on one leg attitude (thigh of free leg at horizontal, throughout turn)",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 127"
  },
  {
    "id": "FIG-BB-3-502-127",
    "apparatus": "BB",
    "code": "3.502",
    "name": "in back",
    "element_group": "2.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "bb",
      "dance",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 127"
  },
  {
    "id": "FIG-BB-3-403-128",
    "apparatus": "BB",
    "code": "3.403",
    "name": "1/1 turn (360°) with free leg bwd with both hands (Preziosa)",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "bb",
      "bwd",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 128"
  },
  {
    "id": "FIG-BB-3-503-128",
    "apparatus": "BB",
    "code": "3.503",
    "name": "held",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 128"
  },
  {
    "id": "FIG-BB-3-304-128",
    "apparatus": "BB",
    "code": "3.304",
    "name": "1/1 turn (360°) with heel of extended free leg fwd at horizontal throughout turn (support leg be straight or bent)",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "bb",
      "fwd",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 128"
  },
  {
    "id": "FIG-BB-3-404-128",
    "apparatus": "BB",
    "code": "3.404",
    "name": "may 1½ turn (540°) with heel of extended free leg fwd at horizontal throughout turn (support leg be straight or bent)",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "bb",
      "fwd",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 128"
  },
  {
    "id": "FIG-BB-3-504-128",
    "apparatus": "BB",
    "code": "3.504",
    "name": "may 2/1 turn (720°) with heel extended free leg fwd at horizontal throughout turn (support leg may be straight bent) (Wevers)",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "bb",
      "fwd",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 128"
  },
  {
    "id": "FIG-BB-3-604-128",
    "apparatus": "BB",
    "code": "3.604",
    "name": "of or",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 128"
  },
  {
    "id": "FIG-BB-3-305-129",
    "apparatus": "BB",
    "code": "3.305",
    "name": "1/1 turn (360°) with free leg upward in 180° split position throughout turn",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "bb",
      "dance",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 129"
  },
  {
    "id": "FIG-BB-3-405-129",
    "apparatus": "BB",
    "code": "3.405",
    "name": "held 1½ turn (540°) with free leg upward in 180° split position throughout turn (Galante)",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "bb",
      "dance",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 129"
  },
  {
    "id": "FIG-BB-3-505-129",
    "apparatus": "BB",
    "code": "3.505",
    "name": "held 2/1 turn (720°) with free upward in 180° split position throughout turn (Sugihara)",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "bb",
      "dance",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 129"
  },
  {
    "id": "FIG-BB-3-605-129",
    "apparatus": "BB",
    "code": "3.605",
    "name": "leg held",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 129"
  },
  {
    "id": "FIG-BB-3-206-129",
    "apparatus": "BB",
    "code": "3.206",
    "name": "½ illusion turn (180°) through standing split (180° legs separation) with/without brief touching of beam with one hand",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "3",
      "bb",
      "dance",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 129"
  },
  {
    "id": "FIG-BB-3-406-129",
    "apparatus": "BB",
    "code": "3.406",
    "name": "1/1 illusion turn (360°) through standing split (180° legs separation) with/without brief touching of beam with one",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "bb",
      "dance",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 129"
  },
  {
    "id": "FIG-BB-3-506-129",
    "apparatus": "BB",
    "code": "3.506",
    "name": "hand",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 129"
  },
  {
    "id": "FIG-BB-3-107-130",
    "apparatus": "BB",
    "code": "3.107",
    "name": "(*) in the same box with an asterisk (*) receive credit only once chronological order",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 130"
  },
  {
    "id": "FIG-BB-3-207-130",
    "apparatus": "BB",
    "code": "3.207",
    "name": "1/1 turn (360°) in tuck stand one leg – free leg straight throughout turn in",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 130"
  },
  {
    "id": "FIG-BB-3-307-130",
    "apparatus": "BB",
    "code": "3.307",
    "name": "on 1½ turn (540°) in tuck stand one leg – free leg straight throughout turn",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 130"
  },
  {
    "id": "FIG-BB-3-407-130",
    "apparatus": "BB",
    "code": "3.407",
    "name": "on 2/1 turn (720°) or 2½ turn tuck stand on one leg – free straight throughout turn (Humphrey)",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 130"
  },
  {
    "id": "FIG-BB-3-507-130",
    "apparatus": "BB",
    "code": "3.507",
    "name": "(900°) in leg 3/1 turn (1080°) in tuck stand one leg – free leg straight throughout turn (Mitchell)",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 130"
  },
  {
    "id": "FIG-BB-3-208-130",
    "apparatus": "BB",
    "code": "3.208",
    "name": "1/1 turn or 1½ turn (360° or in prone position – alternate support of hands permitted",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "3",
      "bb",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 130"
  },
  {
    "id": "FIG-BB-3-308-130",
    "apparatus": "BB",
    "code": "3.308",
    "name": "540°)",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 130"
  },
  {
    "id": "FIG-BB-3-408-130",
    "apparatus": "BB",
    "code": "3.408",
    "name": "1¼ turn (450°) on back in position (hip-leg angle closed) (Li Li)",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 130"
  },
  {
    "id": "FIG-BB-4-101-131",
    "apparatus": "BB",
    "code": "4.101",
    "name": "From kneeling sit position, rise upward with body wave through toe-balance stand",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "3",
      "bb",
      "toe",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 131"
  },
  {
    "id": "FIG-BB-4-401-131",
    "apparatus": "BB",
    "code": "4.401",
    "name": "(D) To be counted",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 131"
  },
  {
    "id": "FIG-BB-4-501-131",
    "apparatus": "BB",
    "code": "4.501",
    "name": "as dance element",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "bb",
      "dance",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 131"
  },
  {
    "id": "FIG-BB-4-102-131",
    "apparatus": "BB",
    "code": "4.102",
    "name": "Standing split fwd with hand support in front of support leg (leg separation 180°) – Needle scale (2 sec.) or Stand on one leg with foot of leg in fwd hold above head sec.) Scale fwd, support leg extended (leg separation 180°) (2 sec.)",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "3",
      "bb",
      "dance",
      "fwd",
      "split",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 131"
  },
  {
    "id": "FIG-BB-4-202-131",
    "apparatus": "BB",
    "code": "4.202",
    "name": "free (2 Clear pike support with legs together (2 sec.)",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "3",
      "bb",
      "pike",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 131"
  },
  {
    "id": "FIG-BB-4-402-131",
    "apparatus": "BB",
    "code": "4.402",
    "name": "(*) in asterisk (*) receive chronological order",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 131"
  },
  {
    "id": "FIG-BB-4-502-131",
    "apparatus": "BB",
    "code": "4.502",
    "name": "the same box with an credit only once in",
    "element_group": "3.000 Gymnastic turns",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "bb",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 131"
  },
  {
    "id": "FIG-BB-4-103-132",
    "apparatus": "BB",
    "code": "4.103",
    "name": "Kick to side or cross hstd (2 lower to end position touching beam",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight",
      "hstd"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 132"
  },
  {
    "id": "FIG-BB-4-203-132",
    "apparatus": "BB",
    "code": "4.203",
    "name": "sec.), Kick to cross hstd – roll fwd or without hand support to sit position or to tuck stand",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight",
      "fwd",
      "hstd",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 132"
  },
  {
    "id": "FIG-BB-4-303-132",
    "apparatus": "BB",
    "code": "4.303",
    "name": "with",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 132"
  },
  {
    "id": "FIG-BB-4-204-132",
    "apparatus": "BB",
    "code": "4.204",
    "name": "Roll fwd without hand support sit position or to tuck stand From cross sit, swing bwd to shoulder roll fwd with hip extension and hand support to sit position to tuck stand",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "bb",
      "bwd",
      "flight",
      "fwd",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 132"
  },
  {
    "id": "FIG-BB-4-304-132",
    "apparatus": "BB",
    "code": "4.304",
    "name": "to Free shoulder roll fwd with extension and without hand support to sit position or tuck or",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight",
      "fwd",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 132"
  },
  {
    "id": "FIG-BB-4-404-132",
    "apparatus": "BB",
    "code": "4.404",
    "name": "hip stand",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 132"
  },
  {
    "id": "FIG-BB-4-105-133",
    "apparatus": "BB",
    "code": "4.105",
    "name": "Roll bwd with hand support top of the beam – landing on or both feet",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "acro",
      "bb",
      "bwd",
      "flight",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 133"
  },
  {
    "id": "FIG-BB-4-205-133",
    "apparatus": "BB",
    "code": "4.205",
    "name": "on one",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 133"
  },
  {
    "id": "FIG-BB-4-305-133",
    "apparatus": "BB",
    "code": "4.305",
    "name": "Roll bwd to hstd - lower to position touching beam",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "acro",
      "bb",
      "bwd",
      "flight",
      "hstd"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 133"
  },
  {
    "id": "FIG-BB-4-206-133",
    "apparatus": "BB",
    "code": "4.206",
    "name": "Roll swd, body tucked, straddle stretched through neck stand, also with ½ turn (180°) over shoulder",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight",
      "swd",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 133"
  },
  {
    "id": "FIG-BB-4-306-133",
    "apparatus": "BB",
    "code": "4.306",
    "name": "or Roll swd, body stretched without hand support",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight",
      "support",
      "swd"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 133"
  },
  {
    "id": "FIG-BB-4-107-133",
    "apparatus": "BB",
    "code": "4.107",
    "name": "Cartwheel, also with support one arm, or Cartwheel with phase before or after hand support",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 133"
  },
  {
    "id": "FIG-BB-4-207-133",
    "apparatus": "BB",
    "code": "4.207",
    "name": "on flight Roll swd, piked straddle with support – end position optional",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight",
      "pike",
      "support",
      "swd"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 133"
  },
  {
    "id": "FIG-BB-4-307-133",
    "apparatus": "BB",
    "code": "4.307",
    "name": "hand From cross sit or side split swd straddle or stretched without hand support – end position optional",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "acro",
      "bb",
      "dance",
      "flight",
      "split",
      "support",
      "swd"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 133"
  },
  {
    "id": "FIG-BB-4-407-133",
    "apparatus": "BB",
    "code": "4.407",
    "name": "roll",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 133"
  },
  {
    "id": "FIG-BB-4-108-134",
    "apparatus": "BB",
    "code": "4.108",
    "name": "Walkover fwd, with/without alternate hand support (Tinsica) Walkover fwd, bwd (Tic-Toc)",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "acro",
      "bb",
      "bwd",
      "flight",
      "fwd",
      "support",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 134"
  },
  {
    "id": "FIG-BB-4-208-134",
    "apparatus": "BB",
    "code": "4.208",
    "name": "Walkover fwd, with support arm",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight",
      "fwd",
      "support",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 134"
  },
  {
    "id": "FIG-BB-4-308-134",
    "apparatus": "BB",
    "code": "4.308",
    "name": "on one Kick to cross hdst with ½ turn (180°) to walkover fwd Walkover fwd in side position side stand",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight",
      "fwd",
      "turn",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 134"
  },
  {
    "id": "FIG-BB-4-109-135",
    "apparatus": "BB",
    "code": "4.109",
    "name": "Walkover bwd, with/without alternate hand support, also swing down to cross sit",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "acro",
      "bb",
      "bwd",
      "flight",
      "support",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 135"
  },
  {
    "id": "FIG-BB-4-209-135",
    "apparatus": "BB",
    "code": "4.209",
    "name": "with Walkover bwd, with support one arm",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "bb",
      "bwd",
      "flight",
      "support",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 135"
  },
  {
    "id": "FIG-BB-4-309-135",
    "apparatus": "BB",
    "code": "4.309",
    "name": "on Walkover bwd with ½ turn to walkover fwd Walkover bwd in side position side stand Walkover bwd with stoop through of one leg to cross split sit",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "acro",
      "bb",
      "bwd",
      "dance",
      "flight",
      "fwd",
      "split",
      "turn",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 135"
  },
  {
    "id": "FIG-BB-4-409-135",
    "apparatus": "BB",
    "code": "4.409",
    "name": "(180°) to",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 135"
  },
  {
    "id": "FIG-BB-4-210-135",
    "apparatus": "BB",
    "code": "4.210",
    "name": "From extended tuck sit – walkover bwd (Valdez) Kick over bwd through horizontal plane with support on one arm (Garrison)",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "bb",
      "bwd",
      "flight",
      "support",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 135"
  },
  {
    "id": "FIG-BB-4-310-135",
    "apparatus": "BB",
    "code": "4.310",
    "name": "Valdez with 1/1 turn (360°) to end position touching beam",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 135"
  },
  {
    "id": "FIG-BB-4-410-135",
    "apparatus": "BB",
    "code": "4.410",
    "name": "lower",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 135"
  },
  {
    "id": "FIG-BB-5-201-136",
    "apparatus": "BB",
    "code": "5.201",
    "name": "Handspring fwd with flight to on one or both feet (same element), also with support one arm",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "bb",
      "dance",
      "flight",
      "fwd",
      "handspring",
      "ring",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 136"
  },
  {
    "id": "FIG-BB-5-301-136",
    "apparatus": "BB",
    "code": "5.301",
    "name": "land on Handspring fwd with leg change flight phase",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "acro",
      "bb",
      "dance",
      "flight",
      "fwd",
      "handspring",
      "ring"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 136"
  },
  {
    "id": "FIG-BB-5-401-136",
    "apparatus": "BB",
    "code": "5.401",
    "name": "in Jump bwd (flic-flac take-off) ½ twist (180°) through hstd walkover fwd (Onodi) also with support on one to tic-toc",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "acro",
      "bb",
      "bwd",
      "dance",
      "flic",
      "flight",
      "fwd",
      "hstd",
      "jump",
      "support",
      "twist",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 136"
  },
  {
    "id": "FIG-BB-5-501-136",
    "apparatus": "BB",
    "code": "5.501",
    "name": "with to arm, or Jump bwd (flic-flac take-off) ½ twist (180°) to handspring to land on both feet (Worley)",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "4",
      "acro",
      "bb",
      "bwd",
      "dance",
      "flic",
      "flight",
      "handspring",
      "jump",
      "ring",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 136"
  },
  {
    "id": "FIG-BB-5-601-136",
    "apparatus": "BB",
    "code": "5.601",
    "name": "with fwd",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight",
      "fwd"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 136"
  },
  {
    "id": "FIG-BB-5-202-136",
    "apparatus": "BB",
    "code": "5.202",
    "name": "Flic-flac to land on both feet",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "bb",
      "flic",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 136"
  },
  {
    "id": "FIG-BB-5-402-136",
    "apparatus": "BB",
    "code": "5.402",
    "name": "to hstd end Flic-flac from side position twist (180°) to side hstd lower optional end position (Kolesnikova)",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "acro",
      "bb",
      "flic",
      "flight",
      "hstd",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 136"
  },
  {
    "id": "FIG-BB-5-502-136",
    "apparatus": "BB",
    "code": "5.502",
    "name": "with ½ to",
    "element_group": "4.000 Holds and acrobatic non-flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "4",
      "acro",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 136"
  },
  {
    "id": "FIG-BB-5-303-137",
    "apparatus": "BB",
    "code": "5.303",
    "name": "Flic-flac with ¼ twist (90°) to (2 sec.) – lower to optional position",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "bb",
      "flic",
      "flight",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 137"
  },
  {
    "id": "FIG-BB-5-403-137",
    "apparatus": "BB",
    "code": "5.403",
    "name": "hstd end Flic-flac with ¾ twist (270°) hstd (2 sec.) – lower to optional end position (Omelianchik)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "bb",
      "flic",
      "flight",
      "hstd",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 137"
  },
  {
    "id": "FIG-BB-5-503-137",
    "apparatus": "BB",
    "code": "5.503",
    "name": "to side",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 137"
  },
  {
    "id": "FIG-BB-5-204-137",
    "apparatus": "BB",
    "code": "5.204",
    "name": "Flic-flac with step out, also with support on one arm",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "acro",
      "bb",
      "flic",
      "flight",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 137"
  },
  {
    "id": "FIG-BB-5-304-137",
    "apparatus": "BB",
    "code": "5.304",
    "name": "Flic-flac with ½ twist (180°) hand support",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "bb",
      "flic",
      "flight",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 137"
  },
  {
    "id": "FIG-BB-5-404-137",
    "apparatus": "BB",
    "code": "5.404",
    "name": "after Flic-flac with min. ¾ twist before hand support (Kochetkova)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "bb",
      "flic",
      "flight",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 137"
  },
  {
    "id": "FIG-BB-5-504-137",
    "apparatus": "BB",
    "code": "5.504",
    "name": "(270°)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 137"
  },
  {
    "id": "FIG-BB-5-405-138",
    "apparatus": "BB",
    "code": "5.405",
    "name": "Flic-flac with step out from position (Tousek) Flic-flac from side position front support or with hip circle bwd",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "bb",
      "bwd",
      "circle",
      "flic",
      "flight",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 138"
  },
  {
    "id": "FIG-BB-5-505-138",
    "apparatus": "BB",
    "code": "5.505",
    "name": "side Flic-flac from side position 1/1 twist (360°) to hip circle (Teza) to",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "bb",
      "circle",
      "flic",
      "flight",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 138"
  },
  {
    "id": "FIG-BB-5-605-138",
    "apparatus": "BB",
    "code": "5.605",
    "name": "with bwd",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "acro",
      "bb",
      "bwd",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 138"
  },
  {
    "id": "FIG-BB-5-206-138",
    "apparatus": "BB",
    "code": "5.206",
    "name": "Gainer flic-flac also with support on one arm",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "acro",
      "bb",
      "flic",
      "flight",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 138"
  },
  {
    "id": "FIG-BB-5-306-138",
    "apparatus": "BB",
    "code": "5.306",
    "name": "Gainer flic-flac with ¼ twist hstd (2 sec.) – lower to optional end position (Kitti)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "bb",
      "flic",
      "flight",
      "hstd",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 138"
  },
  {
    "id": "FIG-BB-5-406-138",
    "apparatus": "BB",
    "code": "5.406",
    "name": "(90°) to Gainer flic-flac with min. ¾ (270°) before hand support (Khorkina)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "bb",
      "flic",
      "flight",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 138"
  },
  {
    "id": "FIG-BB-5-506-138",
    "apparatus": "BB",
    "code": "5.506",
    "name": "twist",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 138"
  },
  {
    "id": "FIG-BB-5-207-139",
    "apparatus": "BB",
    "code": "5.207",
    "name": "Flic-flac or Gainer flic-flac – high flight phase, and swing to cross straddle sit",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "acro",
      "bb",
      "flic",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 139"
  },
  {
    "id": "FIG-BB-5-307-139",
    "apparatus": "BB",
    "code": "5.307",
    "name": "with down Flic-flac or Gainer flic-flac – piking and stretching of hips flight phase and swing down cross straddle sit (Rueda)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "bb",
      "flic",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 139"
  },
  {
    "id": "FIG-BB-5-407-139",
    "apparatus": "BB",
    "code": "5.407",
    "name": "with in to Flic-flac with 1/1 twist (360°) swing down to cross straddle (Rulfova)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "bb",
      "flic",
      "flight",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 139"
  },
  {
    "id": "FIG-BB-5-208-139",
    "apparatus": "BB",
    "code": "5.208",
    "name": "Round-off",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "round-off"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 139"
  },
  {
    "id": "FIG-BB-5-408-139",
    "apparatus": "BB",
    "code": "5.408",
    "name": "Free (aerial) cartwheel – on one or both feet, in cross side position, also with leg",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "aerial",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 139"
  },
  {
    "id": "FIG-BB-5-508-139",
    "apparatus": "BB",
    "code": "5.508",
    "name": "landing or change Free (aerial) round-off tucked piked – take off from both Free (aerial) cartwheel in position (Colussi)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "aerial",
      "bb",
      "flight",
      "pike",
      "round-off"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 139"
  },
  {
    "id": "FIG-BB-5-609-139",
    "apparatus": "BB",
    "code": "5.609",
    "name": "or feet side",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 139"
  },
  {
    "id": "FIG-BB-5-409-140",
    "apparatus": "BB",
    "code": "5.409",
    "name": "Free (aerial) walkover fwd, on one or both feet",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "aerial",
      "bb",
      "flight",
      "fwd",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 140"
  },
  {
    "id": "FIG-BB-5-509-140",
    "apparatus": "BB",
    "code": "5.509",
    "name": "landing",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 140"
  },
  {
    "id": "FIG-BB-5-310-140",
    "apparatus": "BB",
    "code": "5.310",
    "name": "Salto fwd tucked, take-off from leg to stand on one or both (Liukin)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "fwd",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 140"
  },
  {
    "id": "FIG-BB-5-410-140",
    "apparatus": "BB",
    "code": "5.410",
    "name": "one feet Salto fwd tucked to cross",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "fwd",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 140"
  },
  {
    "id": "FIG-BB-5-510-140",
    "apparatus": "BB",
    "code": "5.510",
    "name": "stand Salto fwd piked to cross",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "fwd",
      "pike",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 140"
  },
  {
    "id": "FIG-BB-5-610-140",
    "apparatus": "BB",
    "code": "5.610",
    "name": "stand",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 140"
  },
  {
    "id": "FIG-BB-5-411-141",
    "apparatus": "BB",
    "code": "5.411",
    "name": "Salto swd tucked take off leg to side stand",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "salto",
      "swd"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 141"
  },
  {
    "id": "FIG-BB-5-511-141",
    "apparatus": "BB",
    "code": "5.511",
    "name": "from one Salto swd tucked with ½ (180°) take off from one side stand (Schaefer)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "salto",
      "swd"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 141"
  },
  {
    "id": "FIG-BB-5-611-141",
    "apparatus": "BB",
    "code": "5.611",
    "name": "twist leg to Arabian salto tucked (take-off bwd with ½ twist [180°], salto fwd) (Lobaznyuk)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "acro",
      "arabian",
      "bb",
      "bwd",
      "flight",
      "fwd",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 141"
  },
  {
    "id": "FIG-BB-5-312-141",
    "apparatus": "BB",
    "code": "5.312",
    "name": "Salto bwd tucked, piked or stretched (step out)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "bb",
      "bwd",
      "flight",
      "pike",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 141"
  },
  {
    "id": "FIG-BB-5-512-141",
    "apparatus": "BB",
    "code": "5.512",
    "name": "Salto bwd stretched with together",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "bb",
      "bwd",
      "flight",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 141"
  },
  {
    "id": "FIG-BB-5-612-141",
    "apparatus": "BB",
    "code": "5.612",
    "name": "legs Salto bwd tucked with 1/1 twist (360°) (Shishova) Salto bwd stretched with 1/1 twist (360°) (Shishova)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "acro",
      "bb",
      "bwd",
      "flight",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 141"
  },
  {
    "id": "FIG-BB-5-313-142",
    "apparatus": "BB",
    "code": "5.313",
    "name": "Gainer salto bwd tucked, piked stretched step out",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "bb",
      "bwd",
      "flight",
      "pike",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 142"
  },
  {
    "id": "FIG-BB-5-613-142",
    "apparatus": "BB",
    "code": "5.613",
    "name": "Jump fwd with ½ twist (180°) – salto bwd tucked – piked (Produnova)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "acro",
      "bb",
      "bwd",
      "dance",
      "flight",
      "fwd",
      "jump",
      "pike",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 142"
  },
  {
    "id": "FIG-BB-6-101-143",
    "apparatus": "BB",
    "code": "6.101",
    "name": "Free (aerial) walkover fwd with ½ twist (180°)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "5",
      "acro",
      "aerial",
      "bb",
      "flight",
      "fwd",
      "twist",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 143"
  },
  {
    "id": "FIG-BB-6-201-143",
    "apparatus": "BB",
    "code": "6.201",
    "name": "Free (aerial) walkover fwd with 1/1 twist (360°) Free (aerial) cartwheel with ½ twist (180°)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "acro",
      "aerial",
      "bb",
      "flight",
      "fwd",
      "twist",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 143"
  },
  {
    "id": "FIG-BB-6-301-143",
    "apparatus": "BB",
    "code": "6.301",
    "name": "Free (aerial) walkover fwd with 1½ twist (540°)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "aerial",
      "bb",
      "flight",
      "fwd",
      "twist",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 143"
  },
  {
    "id": "FIG-BB-6-501-143",
    "apparatus": "BB",
    "code": "6.501",
    "name": "Free (aerial) cartwheel into salto bwd tucked (Kim)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "aerial",
      "bb",
      "bwd",
      "flight",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 143"
  },
  {
    "id": "FIG-BB-6-102-143",
    "apparatus": "BB",
    "code": "6.102",
    "name": "Salto fwd tucked or piked, also with ½ twist (180°)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "fwd",
      "pike",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 143"
  },
  {
    "id": "FIG-BB-6-202-143",
    "apparatus": "BB",
    "code": "6.202",
    "name": "Salto fwd stretched, also with ½ twist (180°) Salto fwd tucked with 1/1 twist (360°)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "fwd",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 143"
  },
  {
    "id": "FIG-BB-6-302-143",
    "apparatus": "BB",
    "code": "6.302",
    "name": "Salto fwd stretched with 1/1 (360°) or 1½ twist (540°)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "fwd",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 143"
  },
  {
    "id": "FIG-BB-6-402-143",
    "apparatus": "BB",
    "code": "6.402",
    "name": "twist Salto fwd stretched with 2/1 (720°) (Araujo)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "fwd",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 143"
  },
  {
    "id": "FIG-BB-6-502-143",
    "apparatus": "BB",
    "code": "6.502",
    "name": "twist",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 143"
  },
  {
    "id": "FIG-BB-6-602-143",
    "apparatus": "BB",
    "code": "6.602",
    "name": "Double salto fwd tucked",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "acro",
      "bb",
      "double",
      "flight",
      "fwd",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 143"
  },
  {
    "id": "FIG-BB-6-203-144",
    "apparatus": "BB",
    "code": "6.203",
    "name": "Jump bwd, with ½ twist (180°), salto fwd tucked or piked (Arabian salto)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "acro",
      "arabian",
      "bb",
      "bwd",
      "dance",
      "flight",
      "fwd",
      "jump",
      "pike",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 144"
  },
  {
    "id": "FIG-BB-6-303-144",
    "apparatus": "BB",
    "code": "6.303",
    "name": "Stretched jump fwd with 1/1 (360°) and salto fwd tucked piked",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "bb",
      "dance",
      "flight",
      "fwd",
      "jump",
      "pike",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 144"
  },
  {
    "id": "FIG-BB-6-403-144",
    "apparatus": "BB",
    "code": "6.403",
    "name": "twist or Stretched jump fwd with 1/1 (360°) and salto fwd stretched",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "bb",
      "dance",
      "flight",
      "fwd",
      "jump",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 144"
  },
  {
    "id": "FIG-BB-6-503-144",
    "apparatus": "BB",
    "code": "6.503",
    "name": "twist",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 144"
  },
  {
    "id": "FIG-BB-6-603-144",
    "apparatus": "BB",
    "code": "6.603",
    "name": "Arabian double salto fwd tucked (Patterson)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "acro",
      "arabian",
      "bb",
      "double",
      "flight",
      "fwd",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 144"
  },
  {
    "id": "FIG-BB-6-104-144",
    "apparatus": "BB",
    "code": "6.104",
    "name": "Salto bwd tucked, piked, or stretched, also with ½ twist (tucked or stretched)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "5",
      "acro",
      "bb",
      "bwd",
      "flight",
      "pike",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 144"
  },
  {
    "id": "FIG-BB-6-204-144",
    "apparatus": "BB",
    "code": "6.204",
    "name": "(180°) Salto bwd tucked or stretched with 1/1 twist (360°)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "acro",
      "bb",
      "bwd",
      "flight",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 144"
  },
  {
    "id": "FIG-BB-6-304-144",
    "apparatus": "BB",
    "code": "6.304",
    "name": "Salto bwd tucked or stretched 1½ twist (540°) (Domingues) Salto bwd tucked or stretched 2/1 twist (720°) (Mordenti)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "bb",
      "bwd",
      "flight",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 144"
  },
  {
    "id": "FIG-BB-6-404-144",
    "apparatus": "BB",
    "code": "6.404",
    "name": "with Salto bwd stretched with (900°) with",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "bb",
      "bwd",
      "flight",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 144"
  },
  {
    "id": "FIG-BB-6-504-144",
    "apparatus": "BB",
    "code": "6.504",
    "name": "2½ twist",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "5",
      "acro",
      "bb",
      "flight",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 144"
  },
  {
    "id": "FIG-BB-6-604-144",
    "apparatus": "BB",
    "code": "6.604",
    "name": "Salto bwd stretched with 3/1 twist (1080°)",
    "element_group": "5.000 Acrobatic flight",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "acro",
      "bb",
      "bwd",
      "flight",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 144"
  },
  {
    "id": "FIG-BB-6-405-145",
    "apparatus": "BB",
    "code": "6.405",
    "name": "Double salto bwd tucked",
    "element_group": "6.000 Dismounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "6",
      "acro",
      "bb",
      "bwd",
      "dismount",
      "double",
      "mount",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 145"
  },
  {
    "id": "FIG-BB-6-505-145",
    "apparatus": "BB",
    "code": "6.505",
    "name": "Double salto bwd piked",
    "element_group": "6.000 Dismounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "6",
      "acro",
      "bb",
      "bwd",
      "dismount",
      "double",
      "mount",
      "pike",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 145"
  },
  {
    "id": "FIG-BB-6-605-145",
    "apparatus": "BB",
    "code": "6.605",
    "name": "Double salto bwd tucked or piked with 1/1 twist (360°) Double salto bwd tucked with 2/1 twist (720°) (Biles)",
    "element_group": "6.000 Dismounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "6",
      "acro",
      "bb",
      "bwd",
      "dismount",
      "double",
      "mount",
      "pike",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 145"
  },
  {
    "id": "FIG-BB-6-106-146",
    "apparatus": "BB",
    "code": "6.106",
    "name": "Gainer salto tucked, piked, stretched to side of beam, also with ½ twist (180°) (tucked or stretched)",
    "element_group": "6.000 Dismounts",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "6",
      "acro",
      "bb",
      "dismount",
      "mount",
      "pike",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 146"
  },
  {
    "id": "FIG-BB-6-206-146",
    "apparatus": "BB",
    "code": "6.206",
    "name": "or Gainer salto tucked or stretched with 1/1 twist (360°) to side beam",
    "element_group": "6.000 Dismounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "6",
      "acro",
      "bb",
      "dismount",
      "mount",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 146"
  },
  {
    "id": "FIG-BB-6-306-146",
    "apparatus": "BB",
    "code": "6.306",
    "name": "of Gainer salto bwd tucked or stretched with 1½ twist (540˚) (Bohmerova) or 2/1 twist (720°) to side of beam",
    "element_group": "6.000 Dismounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "6",
      "acro",
      "bb",
      "bwd",
      "dismount",
      "mount",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 146"
  },
  {
    "id": "FIG-BB-6-406-146",
    "apparatus": "BB",
    "code": "6.406",
    "name": "Gainer salto bwd stretched with 2½ twist (900°) to side beam (Khorkina)",
    "element_group": "6.000 Dismounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "6",
      "acro",
      "bb",
      "bwd",
      "dismount",
      "mount",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 146"
  },
  {
    "id": "FIG-BB-6-606-146",
    "apparatus": "BB",
    "code": "6.606",
    "name": "Gainer salto bwd stretched with 3/1 twist (1080°) to side of beam",
    "element_group": "6.000 Dismounts",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "6",
      "acro",
      "bb",
      "bwd",
      "dismount",
      "mount",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 146"
  },
  {
    "id": "FIG-BB-6-207-147",
    "apparatus": "BB",
    "code": "6.207",
    "name": "Gainer salto tucked or piked end of beam",
    "element_group": "6.000 Dismounts",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "6",
      "acro",
      "bb",
      "dismount",
      "mount",
      "pike",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 147"
  },
  {
    "id": "FIG-BB-6-307-147",
    "apparatus": "BB",
    "code": "6.307",
    "name": "at Gainer salto stretched with together at end of beam Gainer salto tucked with 1/1 (360°) at end of beam (Kim)",
    "element_group": "6.000 Dismounts",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "6",
      "acro",
      "bb",
      "dismount",
      "mount",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 147"
  },
  {
    "id": "FIG-BB-6-407-147",
    "apparatus": "BB",
    "code": "6.407",
    "name": "legs Gainer salto stretched with twist (360°) at end of beam (Steingruber) twist Gainer salto tucked with 1½ (540°) at end of beam (Olafsdottir)",
    "element_group": "6.000 Dismounts",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "6",
      "acro",
      "bb",
      "dismount",
      "mount",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 147"
  },
  {
    "id": "FIG-BB-6-507-147",
    "apparatus": "BB",
    "code": "6.507",
    "name": "1/1 Gainer salto stretched with twist (720°) at end of beam (Jurkowska-Kowalska) twist",
    "element_group": "6.000 Dismounts",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "6",
      "acro",
      "bb",
      "dismount",
      "mount",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 147"
  },
  {
    "id": "FIG-FX-1-101-149",
    "apparatus": "FX",
    "code": "1.101",
    "name": "Split leap fwd (leg separation 180°)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fwd",
      "fx",
      "hop",
      "jump",
      "leap",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 149"
  },
  {
    "id": "FIG-FX-1-201-149",
    "apparatus": "FX",
    "code": "1.201",
    "name": "JUMPS AND HOPS Split leap with ½ turn (180°)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 149"
  },
  {
    "id": "FIG-FX-1-301-149",
    "apparatus": "FX",
    "code": "1.301",
    "name": "Split leap with 1/1 turn (360°)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 149"
  },
  {
    "id": "FIG-FX-1-102-150",
    "apparatus": "FX",
    "code": "1.102",
    "name": "(*) in asterisk (*) receive in chronological",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 150"
  },
  {
    "id": "FIG-FX-1-202-150",
    "apparatus": "FX",
    "code": "1.202",
    "name": "Fouetté hop with leg change cross split (leg separation 180°), also to ring position (tour jeté) the same box with an credit only once order",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "ring",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 150"
  },
  {
    "id": "FIG-FX-1-302-150",
    "apparatus": "FX",
    "code": "1.302",
    "name": "to Tour jeté with additional ½ (180°), landing on one or both or in split sit position (Produnova) Leap fwd, through tour jeté technique, with ¾ turn (270°) straddle pike position with additional ¼ turn (90°), landing one or both feet (Csillag)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "fwd",
      "fx",
      "hop",
      "jump",
      "leap",
      "pike",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 150"
  },
  {
    "id": "FIG-FX-1-402-150",
    "apparatus": "FX",
    "code": "1.402",
    "name": "turn feet, Tour jeté with additional 1/1 (360°), landing on one or (Gogean) into on",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 150"
  },
  {
    "id": "FIG-FX-1-502-150",
    "apparatus": "FX",
    "code": "1.502",
    "name": "turn both feet",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 150"
  },
  {
    "id": "FIG-FX-1-103-151",
    "apparatus": "FX",
    "code": "1.103",
    "name": "Tuck jump with separation of legs to cross split (180°) during flight phase",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "flight",
      "fx",
      "hop",
      "jump",
      "leap",
      "ring",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 151"
  },
  {
    "id": "FIG-FX-1-203-151",
    "apparatus": "FX",
    "code": "1.203",
    "name": "Butterfly fwd torso parallel to slightly arched, legs straddled feet above hip height during Butterfly bwd torso parallel to floor, slightly arched, legs straddled and feet at or slightly below hip height during flight, landing in front lying support",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bwd",
      "dance",
      "flight",
      "fwd",
      "fx",
      "hop",
      "jump",
      "leap",
      "ring",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 151"
  },
  {
    "id": "FIG-FX-1-303-151",
    "apparatus": "FX",
    "code": "1.303",
    "name": "floor, and flight also (*) asterisk in chronological",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "flight",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 151"
  },
  {
    "id": "FIG-FX-1-403-151",
    "apparatus": "FX",
    "code": "1.403",
    "name": "in the same box with an (*) receive credit only once order",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 151"
  },
  {
    "id": "FIG-FX-1-104-152",
    "apparatus": "FX",
    "code": "1.104",
    "name": "Leap fwd with ¼ turn (90°) into straddle pike position (both above horizontal) or side split land on one or both feet",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fwd",
      "fx",
      "hop",
      "jump",
      "leap",
      "pike",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 152"
  },
  {
    "id": "FIG-FX-1-204-152",
    "apparatus": "FX",
    "code": "1.204",
    "name": "legs to Switch leap with ¼ turn (90°) side split or to straddle pike position (both legs above horizontal) (Johnson)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "pike",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 152"
  },
  {
    "id": "FIG-FX-1-304-152",
    "apparatus": "FX",
    "code": "1.304",
    "name": "to Switch leap with ½ turn (180°) flight phase (Frolova) Johnson with additional ½ (180°)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "flight",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 152"
  },
  {
    "id": "FIG-FX-1-404-152",
    "apparatus": "FX",
    "code": "1.404",
    "name": "in Switch leap with 1/1 turn (360°) flight phase turn Johnson with additional 1/1 (360°) (Bulimar)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "dance",
      "flight",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 152"
  },
  {
    "id": "FIG-FX-1-504-152",
    "apparatus": "FX",
    "code": "1.504",
    "name": "in turn (*) with an only once",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 152"
  },
  {
    "id": "FIG-FX-1-604-152",
    "apparatus": "FX",
    "code": "1.604",
    "name": "in the same box asterisk (*) receive credit in chronological order",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 152"
  },
  {
    "id": "FIG-FX-1-105-152",
    "apparatus": "FX",
    "code": "1.105",
    "name": "Stride leap fwd with change legs to wolf position",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fwd",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 152"
  },
  {
    "id": "FIG-FX-1-205-152",
    "apparatus": "FX",
    "code": "1.205",
    "name": "of Leap fwd with leg change (free swing to 45°) to cross split (180° separation after leg change) (Switch leap)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fwd",
      "fx",
      "hop",
      "jump",
      "leap",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 152"
  },
  {
    "id": "FIG-FX-1-305-152",
    "apparatus": "FX",
    "code": "1.305",
    "name": "leg Switch leap to ring position separation of legs)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "ring"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 152"
  },
  {
    "id": "FIG-FX-1-405-152",
    "apparatus": "FX",
    "code": "1.405",
    "name": "(180° Switch leap to ring position turn (180°) (Sankova)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "ring",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 152"
  },
  {
    "id": "FIG-FX-1-505-152",
    "apparatus": "FX",
    "code": "1.505",
    "name": "with ½",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 152"
  },
  {
    "id": "FIG-FX-1-106-153",
    "apparatus": "FX",
    "code": "1.106",
    "name": "Pike jump (legs above horizontal)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "pike"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 153"
  },
  {
    "id": "FIG-FX-1-206-153",
    "apparatus": "FX",
    "code": "1.206",
    "name": "Jump with upper back arch head release with feet almost touching head (Sheep jump)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 153"
  },
  {
    "id": "FIG-FX-1-306-153",
    "apparatus": "FX",
    "code": "1.306",
    "name": "and Pike jump (legs above horizontal) with 1/1 turn (360°), also landing front lying support (Moerz)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "pike",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 153"
  },
  {
    "id": "FIG-FX-1-107-153",
    "apparatus": "FX",
    "code": "1.107",
    "name": "Straddle pike jump (both legs above horizontal), or side split jump (180° separation of legs)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "pike",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 153"
  },
  {
    "id": "FIG-FX-1-207-153",
    "apparatus": "FX",
    "code": "1.207",
    "name": "Straddle pike or side split jump with ½ turn (180°) Split Jump with ½ turn (180°)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "pike",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 153"
  },
  {
    "id": "FIG-FX-1-307-153",
    "apparatus": "FX",
    "code": "1.307",
    "name": "Straddle pike or side split jump with 1/1 turn (360°) (Popa) Split Jump with 1/1 turn (360°)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "pike",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 153"
  },
  {
    "id": "FIG-FX-1-407-153",
    "apparatus": "FX",
    "code": "1.407",
    "name": "Straddle pike or side split with 1½ turn (540°) Split Jump with 1½ turn (540°)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "pike",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 153"
  },
  {
    "id": "FIG-FX-1-507-153",
    "apparatus": "FX",
    "code": "1.507",
    "name": "jump (*) in with an asterisk only once in chronological",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 153"
  },
  {
    "id": "FIG-FX-1-607-153",
    "apparatus": "FX",
    "code": "1.607",
    "name": "the same box (*) receive credit order",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 153"
  },
  {
    "id": "FIG-FX-1-108-154",
    "apparatus": "FX",
    "code": "1.108",
    "name": "Straddle pike (both legs above horizontal), or side split jump landing in front lying support, also with ½ turn (180°) Hop with 1/1 turn (360°) to straddle and land in front lying support",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "pike",
      "split",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 154"
  },
  {
    "id": "FIG-FX-1-208-154",
    "apparatus": "FX",
    "code": "1.208",
    "name": "Straddle pike (both legs above horizontal), or side split jump 1/1 turn (360°) landing in front lying support Hop with 1½ turn (540°) in horizontal plane to land in front lying support",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "pike",
      "split",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 154"
  },
  {
    "id": "FIG-FX-1-308-154",
    "apparatus": "FX",
    "code": "1.308",
    "name": "with",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 154"
  },
  {
    "id": "FIG-FX-1-109-155",
    "apparatus": "FX",
    "code": "1.109",
    "name": "Split jump (180° separation legs), back leg straight or bent) Stag jump (180° separation legs), back leg straight or bent) Stag jump with ½ turn (180°) Sissone (180° separation of legs) on the diagonal/45°to floor) take off two feet, to land one foot",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 155"
  },
  {
    "id": "FIG-FX-1-209-155",
    "apparatus": "FX",
    "code": "1.209",
    "name": "of Sissone to ring position (rear head height, body arched and dropped bwd, 180° separation legs), to land on one foot of Stag ring jump (rear foot at height, body arched and head dropped bwd,), to land on both feet Split jump to ring position (180° separation of legs) to land on feet the on Split",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "bwd",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "ring",
      "split"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 155"
  },
  {
    "id": "FIG-FX-1-309-155",
    "apparatus": "FX",
    "code": "1.309",
    "name": "foot at head of Split leap to ring ring leap (180° separation of legs) head Split jump to ring position with turn (360°) (Jurkowska-Kowalska) both ½",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "ring",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 155"
  },
  {
    "id": "FIG-FX-1-409-155",
    "apparatus": "FX",
    "code": "1.409",
    "name": "Tour jeté, to ring position additional ½ turn (180°) (Ferrari) 1/1 Split leap to ring position ½ turn (180°) (Ting)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "ring",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 155"
  },
  {
    "id": "FIG-FX-1-509-155",
    "apparatus": "FX",
    "code": "1.509",
    "name": "with Split leap to ring position 1/1 turn (360°) (Prat) with",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "ring",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 155"
  },
  {
    "id": "FIG-FX-1-609-155",
    "apparatus": "FX",
    "code": "1.609",
    "name": "with",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 155"
  },
  {
    "id": "FIG-FX-1-110-156",
    "apparatus": "FX",
    "code": "1.110",
    "name": "Stretched hop or jump with turn (360°) 360°",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 156"
  },
  {
    "id": "FIG-FX-1-310-156",
    "apparatus": "FX",
    "code": "1.310",
    "name": "Stretched hop or jump with turn (720°)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 156"
  },
  {
    "id": "FIG-FX-1-111-156",
    "apparatus": "FX",
    "code": "1.111",
    "name": "Leap with alternate leg change (knees above horizontal) (Cat leap) Scissors leap fwd (legs above horizontal)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fwd",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 156"
  },
  {
    "id": "FIG-FX-1-211-156",
    "apparatus": "FX",
    "code": "1.211",
    "name": "Cat leap with 1/1 turn (360º)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 156"
  },
  {
    "id": "FIG-FX-1-311-156",
    "apparatus": "FX",
    "code": "1.311",
    "name": "Cat leap with 2/1 turn (720°)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 156"
  },
  {
    "id": "FIG-FX-1-112-157",
    "apparatus": "FX",
    "code": "1.112",
    "name": "Hop with ½ turn (180˚) to land arabesque with free leg above horizontal (Fouetté hop) Hop with ½ turn (180°) free extended fwd at horizontal throughout",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fwd",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 157"
  },
  {
    "id": "FIG-FX-1-212-157",
    "apparatus": "FX",
    "code": "1.212",
    "name": "in Hop with 1/1 turn (360°), free extended fwd at horizontal throughout leg",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fwd",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 157"
  },
  {
    "id": "FIG-FX-1-213-157",
    "apparatus": "FX",
    "code": "1.213",
    "name": "Tuck hop or jump with 1/1 turn 360°",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 157"
  },
  {
    "id": "FIG-FX-1-313-157",
    "apparatus": "FX",
    "code": "1.313",
    "name": "(360º) Tuck hop or jump with 2/1 turn (720°) also landing in front support",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 157"
  },
  {
    "id": "FIG-FX-1-413-157",
    "apparatus": "FX",
    "code": "1.413",
    "name": "lying (*) in asterisk (*) receive in chronological",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 157"
  },
  {
    "id": "FIG-FX-1-513-157",
    "apparatus": "FX",
    "code": "1.513",
    "name": "the same box with an credit only once order",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 157"
  },
  {
    "id": "FIG-FX-1-114-158",
    "apparatus": "FX",
    "code": "1.114",
    "name": "Hop or Jump with one leg bent and the other – extended straight, fwd above horizontal with knees together (Wolf hop or jump)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fwd",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 158"
  },
  {
    "id": "FIG-FX-1-214-158",
    "apparatus": "FX",
    "code": "1.214",
    "name": "Wolf hop or jump with 1/1 turn also landing in front lying support",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 158"
  },
  {
    "id": "FIG-FX-1-314-158",
    "apparatus": "FX",
    "code": "1.314",
    "name": "(360°), (*) in the asterisk (*) receive in chronological order",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 158"
  },
  {
    "id": "FIG-FX-1-414-158",
    "apparatus": "FX",
    "code": "1.414",
    "name": "same box with an credit only once",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 158"
  },
  {
    "id": "FIG-FX-1-514-158",
    "apparatus": "FX",
    "code": "1.514",
    "name": "Wolf hop or jump with 2/1 (720°)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 158"
  },
  {
    "id": "FIG-FX-1-614-158",
    "apparatus": "FX",
    "code": "1.614",
    "name": "turn",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 158"
  },
  {
    "id": "FIG-FX-2-101-159",
    "apparatus": "FX",
    "code": "2.101",
    "name": "1/1 turn (360°) on one leg – leg optional below horizontal 360°",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 159"
  },
  {
    "id": "FIG-FX-2-201-159",
    "apparatus": "FX",
    "code": "2.201",
    "name": "free 2/1 turn (720°) on one leg – leg optional below horizontal",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 159"
  },
  {
    "id": "FIG-FX-2-301-159",
    "apparatus": "FX",
    "code": "2.301",
    "name": "free 3/1 turn (1080°) on one leg leg optional below horizontal",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 159"
  },
  {
    "id": "FIG-FX-2-401-159",
    "apparatus": "FX",
    "code": "2.401",
    "name": "free",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 159"
  },
  {
    "id": "FIG-FX-2-501-159",
    "apparatus": "FX",
    "code": "2.501",
    "name": "4/1 turn (1440°) on one leg free leg optional below horizontal (Gomez) 1440° x4",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "1",
      "dance",
      "fx",
      "hop",
      "jump",
      "leap",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 159"
  },
  {
    "id": "FIG-FX-2-202-159",
    "apparatus": "FX",
    "code": "2.202",
    "name": "1/1 turn (360°) with heel of extended free leg fwd at horizontal throughout turn (support leg be straight or bent)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "1",
      "dance",
      "fwd",
      "fx",
      "hop",
      "jump",
      "leap",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 159"
  },
  {
    "id": "FIG-FX-2-402-159",
    "apparatus": "FX",
    "code": "2.402",
    "name": "2/1 turn (720°) with heel of extended free leg fwd at horizontal throughout turn (support leg be straight or bent)",
    "element_group": "1.000 Gymnastic leaps, jumps and hops",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "1",
      "dance",
      "fwd",
      "fx",
      "hop",
      "jump",
      "leap",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 159"
  },
  {
    "id": "FIG-FX-2-203-160",
    "apparatus": "FX",
    "code": "2.203",
    "name": "1/1 turn (360°) with free leg upward in 180° split position throughout turn",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "dance",
      "fx",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 160"
  },
  {
    "id": "FIG-FX-2-303-160",
    "apparatus": "FX",
    "code": "2.303",
    "name": "held",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 160"
  },
  {
    "id": "FIG-FX-2-403-160",
    "apparatus": "FX",
    "code": "2.403",
    "name": "2/1 turn (720°) with free leg upward in 180° split position throughout turn (Memmel)",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "dance",
      "fx",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 160"
  },
  {
    "id": "FIG-FX-2-503-160",
    "apparatus": "FX",
    "code": "2.503",
    "name": "held 3/1 turn (1080°) with free held upward in 180° split throughout turn (Mustafina)",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "dance",
      "fx",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 160"
  },
  {
    "id": "FIG-FX-2-603-160",
    "apparatus": "FX",
    "code": "2.603",
    "name": "leg position",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 160"
  },
  {
    "id": "FIG-FX-2-204-160",
    "apparatus": "FX",
    "code": "2.204",
    "name": "1/1 turn (360°) in back attitude (thigh of free leg at horizontal throughout turn) 360°",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 160"
  },
  {
    "id": "FIG-FX-2-404-160",
    "apparatus": "FX",
    "code": "2.404",
    "name": "2/1 turn (720°) in back attitude (thigh of free leg at horizontal throughout turn) (Semenova) 2/1 turn (720°) with free leg with both hands bwd/upward throughout turn (Berar)",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "bwd",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 160"
  },
  {
    "id": "FIG-FX-2-504-160",
    "apparatus": "FX",
    "code": "2.504",
    "name": "held (*) asterisk (*) in chronological",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 160"
  },
  {
    "id": "FIG-FX-2-604-160",
    "apparatus": "FX",
    "code": "2.604",
    "name": "in the same box with an receive credit only once order",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 160"
  },
  {
    "id": "FIG-FX-2-205-160",
    "apparatus": "FX",
    "code": "2.205",
    "name": "1/1 turn (360°) in scale fwd free leg above horizontal throughout turn",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "fwd",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 160"
  },
  {
    "id": "FIG-FX-2-305-160",
    "apparatus": "FX",
    "code": "2.305",
    "name": "with",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 160"
  },
  {
    "id": "FIG-FX-2-206-161",
    "apparatus": "FX",
    "code": "2.206",
    "name": "1/1 illusion turn (360°) through standing split without touching floor with hand",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "dance",
      "fx",
      "split",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 161"
  },
  {
    "id": "FIG-FX-2-207-161",
    "apparatus": "FX",
    "code": "2.207",
    "name": "1/1 turn (360°) in tuck stand one leg – free leg straight throughout turn 360°",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 161"
  },
  {
    "id": "FIG-FX-2-307-161",
    "apparatus": "FX",
    "code": "2.307",
    "name": "on 2/1 turn (720°) starting with leg at horizontal, lowering to complete the turn in wolf position (Nguyen)",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "dance",
      "fx",
      "ring",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 161"
  },
  {
    "id": "FIG-FX-2-407-161",
    "apparatus": "FX",
    "code": "2.407",
    "name": "free 2/1 turn (720°) in tuck stand one leg – free leg straight throughout (no turn initiation with a push hands on floor)",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "2",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 161"
  },
  {
    "id": "FIG-FX-2-507-161",
    "apparatus": "FX",
    "code": "2.507",
    "name": "on turn from 3/1 turn (1080°) in tuck stand one leg – free leg straight throughout turn (no turn with a push from hands on (Mitchell)",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "2",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 161"
  },
  {
    "id": "FIG-FX-2-607-161",
    "apparatus": "FX",
    "code": "2.607",
    "name": "on initiation floor)",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "2",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 161"
  },
  {
    "id": "FIG-FX-2-208-161",
    "apparatus": "FX",
    "code": "2.208",
    "name": "2/1 turn (720°) or more on back kip position (hip-leg angle closed)",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "fx",
      "kip",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 161"
  },
  {
    "id": "FIG-FX-3-101-162",
    "apparatus": "FX",
    "code": "3.101",
    "name": "Jump kick or press to hstd – return movement optional, also with ½ or 1/1 turn (180° or 360°) in hstd",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "2",
      "dance",
      "fx",
      "hstd",
      "jump",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 162"
  },
  {
    "id": "FIG-FX-3-201-162",
    "apparatus": "FX",
    "code": "3.201",
    "name": "Jump kick or press to hstd with 1½ or 2/1 turn (540° or 720°) hstd – return movement optional 540°",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "2",
      "dance",
      "fx",
      "hstd",
      "jump",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 162"
  },
  {
    "id": "FIG-FX-3-301-162",
    "apparatus": "FX",
    "code": "3.301",
    "name": "HAND in",
    "element_group": "2.000 Gymnastic turns",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "2",
      "fx",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 162"
  },
  {
    "id": "FIG-FX-3-102-163",
    "apparatus": "FX",
    "code": "3.102",
    "name": "Hecht roll",
    "element_group": "3.000 Hand support elements",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "3",
      "fx",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 163"
  },
  {
    "id": "FIG-FX-3-103-163",
    "apparatus": "FX",
    "code": "3.103",
    "name": "Roll bwd to hstd with ½ or 1/1 turn (180° or 360°) in hstd",
    "element_group": "3.000 Hand support elements",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "3",
      "bwd",
      "fx",
      "hstd",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 163"
  },
  {
    "id": "FIG-FX-3-203-163",
    "apparatus": "FX",
    "code": "3.203",
    "name": "Roll bwd to hstd with 1½ or turn (540° or 720°) in hstd",
    "element_group": "3.000 Hand support elements",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "3",
      "bwd",
      "fx",
      "hstd",
      "support",
      "turn"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 163"
  },
  {
    "id": "FIG-FX-3-104-163",
    "apparatus": "FX",
    "code": "3.104",
    "name": "Walkover bwd from stand or extended tuck-sit to hstd with turn (360°) in hstd – return movement optional",
    "element_group": "3.000 Hand support elements",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "3",
      "acro",
      "bwd",
      "fx",
      "hstd",
      "support",
      "turn",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 163"
  },
  {
    "id": "FIG-FX-3-105-164",
    "apparatus": "FX",
    "code": "3.105",
    "name": "Handspring fwd, take-off from one leg or Flyspring fwd, take-off from both legs – with or without hecht phase before hand support – landing optional Jump bwd with ½ twist (180°) handspring fwd – landing optional",
    "element_group": "3.000 Hand support elements",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "3",
      "acro",
      "bwd",
      "dance",
      "fwd",
      "fx",
      "handspring",
      "jump",
      "ring",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 164"
  },
  {
    "id": "FIG-FX-3-305-164",
    "apparatus": "FX",
    "code": "3.305",
    "name": "Handspring fwd with 1/1 twist (360°) after hand support or (Mostepanova)",
    "element_group": "3.000 Hand support elements",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "acro",
      "dance",
      "fwd",
      "fx",
      "handspring",
      "ring",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 164"
  },
  {
    "id": "FIG-FX-3-405-164",
    "apparatus": "FX",
    "code": "3.405",
    "name": "before",
    "element_group": "3.000 Hand support elements",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "fx",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 164"
  },
  {
    "id": "FIG-FX-3-106-164",
    "apparatus": "FX",
    "code": "3.106",
    "name": "Round-off",
    "element_group": "3.000 Hand support elements",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "3",
      "acro",
      "fx",
      "round-off",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 164"
  },
  {
    "id": "FIG-FX-3-107-165",
    "apparatus": "FX",
    "code": "3.107",
    "name": "All flic-flac and gainer flic-flac variations, also with support of one arm Arabian (bwd take-off) with twist (90°) – free (aerial) cartwheel – continuing with twist (90°) to front lying support (Tsavdaridou)",
    "element_group": "3.000 Hand support elements",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "3",
      "acro",
      "aerial",
      "arabian",
      "bwd",
      "flic",
      "fx",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 165"
  },
  {
    "id": "FIG-FX-3-207-165",
    "apparatus": "FX",
    "code": "3.207",
    "name": "Flic-flac with 1/1 twist (360°) before hand support ¼ ¼ 360°",
    "element_group": "3.000 Hand support elements",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "3",
      "acro",
      "flic",
      "fx",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 165"
  },
  {
    "id": "FIG-FX-4-101-166",
    "apparatus": "FX",
    "code": "4.101",
    "name": "Salto fwd tucked or piked",
    "element_group": "3.000 Hand support elements",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "3",
      "acro",
      "fwd",
      "fx",
      "pike",
      "salto",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 166"
  },
  {
    "id": "FIG-FX-4-201-166",
    "apparatus": "FX",
    "code": "4.201",
    "name": "Salto fwd tucked with ½ or 1/1 twist (180° or 360°), also Salto fwd piked with ½ twist",
    "element_group": "3.000 Hand support elements",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "3",
      "acro",
      "fwd",
      "fx",
      "pike",
      "salto",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 166"
  },
  {
    "id": "FIG-FX-4-301-166",
    "apparatus": "FX",
    "code": "4.301",
    "name": "(180°)",
    "element_group": "3.000 Hand support elements",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "fx",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 166"
  },
  {
    "id": "FIG-FX-4-501-166",
    "apparatus": "FX",
    "code": "4.501",
    "name": "Double salto fwd tucked (Podkopayeva)",
    "element_group": "3.000 Hand support elements",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "acro",
      "double",
      "fwd",
      "fx",
      "salto",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 166"
  },
  {
    "id": "FIG-FX-4-601-166",
    "apparatus": "FX",
    "code": "4.601",
    "name": "Double salto fwd tucked with ½ twist (180°) (Podkopayeva) Double salto fwd piked (Dowell)",
    "element_group": "3.000 Hand support elements",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "3",
      "acro",
      "double",
      "fwd",
      "fx",
      "pike",
      "salto",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 166"
  },
  {
    "id": "FIG-FX-4-202-166",
    "apparatus": "FX",
    "code": "4.202",
    "name": "Salto fwd stretched, also with ½ twist (180°) 180°",
    "element_group": "3.000 Hand support elements",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "3",
      "acro",
      "fwd",
      "fx",
      "salto",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 166"
  },
  {
    "id": "FIG-FX-4-302-166",
    "apparatus": "FX",
    "code": "4.302",
    "name": "Salto fwd stretched with 1/1 twist (360° or 540°)",
    "element_group": "3.000 Hand support elements",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "3",
      "acro",
      "fwd",
      "fx",
      "salto",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 166"
  },
  {
    "id": "FIG-FX-4-402-166",
    "apparatus": "FX",
    "code": "4.402",
    "name": "& or 1½ Salto fwd stretched with 2/1 (720°) (Tarasevich)",
    "element_group": "3.000 Hand support elements",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "3",
      "acro",
      "fwd",
      "fx",
      "salto",
      "support"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 166"
  },
  {
    "id": "FIG-FX-4-502-166",
    "apparatus": "FX",
    "code": "4.502",
    "name": "twist Salto fwd stretched with (900°) (Cojocar)",
    "element_group": "3.000 Hand support elements",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "3",
      "acro",
      "fwd",
      "fx",
      "salto",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 166"
  },
  {
    "id": "FIG-FX-4-602-166",
    "apparatus": "FX",
    "code": "4.602",
    "name": "2½ twist Salto fwd stretched with 3/1 twist (1080°) (Maldonado)",
    "element_group": "3.000 Hand support elements",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "3",
      "acro",
      "fwd",
      "fx",
      "salto",
      "support",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 166"
  },
  {
    "id": "FIG-FX-4-103-167",
    "apparatus": "FX",
    "code": "4.103",
    "name": "Free (aerial) walkover fwd",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "acro",
      "aerial",
      "forward",
      "fwd",
      "fx",
      "salto",
      "sideward",
      "walkover"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 167"
  },
  {
    "id": "FIG-FX-4-203-167",
    "apparatus": "FX",
    "code": "4.203",
    "name": "(aerial) round-off",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "aerial",
      "forward",
      "fx",
      "round-off",
      "salto",
      "sideward"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 167"
  },
  {
    "id": "FIG-FX-4-104-167",
    "apparatus": "FX",
    "code": "4.104",
    "name": "Free (aerial) cartwheel or free",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "acro",
      "aerial",
      "forward",
      "fx",
      "salto",
      "sideward"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 167"
  },
  {
    "id": "FIG-FX-4-105-167",
    "apparatus": "FX",
    "code": "4.105",
    "name": "From take-off fwd from one both legs – salto swd tucked piked",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "acro",
      "forward",
      "fwd",
      "fx",
      "pike",
      "salto",
      "sideward",
      "swd"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 167"
  },
  {
    "id": "FIG-FX-4-205-167",
    "apparatus": "FX",
    "code": "4.205",
    "name": "or or Arabian salto tucked or piked, (take-off bwd with ½ twist [180°], salto fwd) – landing optional 180°",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "arabian",
      "bwd",
      "forward",
      "fwd",
      "fx",
      "pike",
      "salto",
      "sideward",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 167"
  },
  {
    "id": "FIG-FX-4-505-167",
    "apparatus": "FX",
    "code": "4.505",
    "name": "Arabian double salto tucked (Andreasen/Jentsch)",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "4",
      "acro",
      "arabian",
      "double",
      "forward",
      "fx",
      "salto",
      "sideward"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 167"
  },
  {
    "id": "FIG-FX-4-605-167",
    "apparatus": "FX",
    "code": "4.605",
    "name": "Arabian double salto piked (Dos Santos) Arabian double salto stretched (Dos Santos) 180°",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "4",
      "acro",
      "arabian",
      "double",
      "forward",
      "fx",
      "pike",
      "salto",
      "sideward"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 167"
  },
  {
    "id": "FIG-FX-5-101-168",
    "apparatus": "FX",
    "code": "5.101",
    "name": "Salto bwd tucked, piked, or stretched",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "4",
      "acro",
      "bwd",
      "forward",
      "fx",
      "pike",
      "salto",
      "sideward"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 168"
  },
  {
    "id": "FIG-FX-5-201-168",
    "apparatus": "FX",
    "code": "5.201",
    "name": "Salto bwd stretched with ½, salto bwd tucked or stretched 1/1 twist (180° or 360°) 180°",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "4",
      "acro",
      "bwd",
      "forward",
      "fx",
      "salto",
      "sideward",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 168"
  },
  {
    "id": "FIG-FX-5-301-168",
    "apparatus": "FX",
    "code": "5.301",
    "name": "or with Salto bwd stretched with 1½ twist (540° or 720°)",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "4",
      "acro",
      "bwd",
      "forward",
      "fx",
      "salto",
      "sideward",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 168"
  },
  {
    "id": "FIG-FX-5-401-168",
    "apparatus": "FX",
    "code": "5.401",
    "name": "or 2/1 Salto bwd stretched with 2½ twist (900°)",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "acro",
      "bwd",
      "forward",
      "fx",
      "salto",
      "sideward",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 168"
  },
  {
    "id": "FIG-FX-5-501-168",
    "apparatus": "FX",
    "code": "5.501",
    "name": "Salto bwd stretched with twist (1080°)",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "4",
      "acro",
      "bwd",
      "forward",
      "fx",
      "salto",
      "sideward",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 168"
  },
  {
    "id": "FIG-FX-5-601-168",
    "apparatus": "FX",
    "code": "5.601",
    "name": "3/1 Salto bwd stretched with 3½ twist (1260°)",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "4",
      "acro",
      "bwd",
      "forward",
      "fx",
      "salto",
      "sideward",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 168"
  },
  {
    "id": "FIG-FX-5-402-168",
    "apparatus": "FX",
    "code": "5.402",
    "name": "Double salto bwd tucked (Kim) Double salto bwd piked",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "4",
      "acro",
      "bwd",
      "double",
      "forward",
      "fx",
      "pike",
      "salto",
      "sideward"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 168"
  },
  {
    "id": "FIG-FX-5-502-168",
    "apparatus": "FX",
    "code": "5.502",
    "name": "Double salto bwd tucked with 1/1 twist (360°) (any technique) (Mukhina) (Oliveira)",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "E",
    "dv": 0.5,
    "tags": [
      "4",
      "acro",
      "bwd",
      "double",
      "forward",
      "fx",
      "salto",
      "sideward",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 168"
  },
  {
    "id": "FIG-FX-5-602-168",
    "apparatus": "FX",
    "code": "5.602",
    "name": "or piked Double salto bwd tucked with 1½ twist (540°) (Heron) Double salto bwd tucked with 2/1 twist (720°) (Silivas) 5.1002 Double salto bwd tucked with 3/1 twist (1080°) (Biles) 720°",
    "element_group": "4.000 Saltos forward and sideward",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "4",
      "acro",
      "bwd",
      "double",
      "forward",
      "fx",
      "pike",
      "salto",
      "sideward",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 168"
  },
  {
    "id": "FIG-FX-5-603-169",
    "apparatus": "FX",
    "code": "5.603",
    "name": "Double salto bwd stretched Double salto bwd stretched with ½ twist (180°) (Biles) Double salto bwd stretched with 1/1 twist (360°) (Chusovitina/Touzhikova) Double Salto bwd stretched with 2/1 twist (720°) (Moors)",
    "element_group": "5.000 Saltos backward",
    "value_letter": "F",
    "dv": 0.6,
    "tags": [
      "5",
      "acro",
      "backward",
      "bwd",
      "double",
      "fx",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 169"
  },
  {
    "id": "FIG-FX-5-104-169",
    "apparatus": "FX",
    "code": "5.104",
    "name": "Whip salto bwd",
    "element_group": "5.000 Saltos backward",
    "value_letter": "A",
    "dv": 0.1,
    "tags": [
      "5",
      "acro",
      "backward",
      "bwd",
      "fx",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 169"
  },
  {
    "id": "FIG-FX-5-204-169",
    "apparatus": "FX",
    "code": "5.204",
    "name": "Whip salto bwd with ½ twist 180°",
    "element_group": "5.000 Saltos backward",
    "value_letter": "B",
    "dv": 0.2,
    "tags": [
      "5",
      "acro",
      "backward",
      "bwd",
      "fx",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 169"
  },
  {
    "id": "FIG-FX-5-304-169",
    "apparatus": "FX",
    "code": "5.304",
    "name": "(180°) Whip salto bwd with 1/1 twist 360°",
    "element_group": "5.000 Saltos backward",
    "value_letter": "C",
    "dv": 0.3,
    "tags": [
      "5",
      "acro",
      "backward",
      "bwd",
      "fx",
      "salto",
      "twist"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 169"
  },
  {
    "id": "FIG-FX-5-404-169",
    "apparatus": "FX",
    "code": "5.404",
    "name": "(360°)",
    "element_group": "5.000 Saltos backward",
    "value_letter": "D",
    "dv": 0.4,
    "tags": [
      "5",
      "acro",
      "backward",
      "fx",
      "salto"
    ],
    "note": "Extracted from WAG COP 2025-2028 page 169"
  },
  {
    "id": "FIG-VT-1-00-CUR",
    "apparatus": "VT",
    "code": "1.00",
    "name": "Handspring forward",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 1.6,
    "tags": [
      "vault",
      "handspring",
      "forward"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-1-01-CUR",
    "apparatus": "VT",
    "code": "1.01",
    "name": "Handspring forward on - 1/2 turn (180°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 2.0,
    "tags": [
      "vault",
      "handspring",
      "turn",
      "forward"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-1-02-CUR",
    "apparatus": "VT",
    "code": "1.02",
    "name": "Handspring forward on - 1/1 turn (360°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 2.6,
    "tags": [
      "vault",
      "handspring",
      "turn",
      "forward"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-1-03-CUR",
    "apparatus": "VT",
    "code": "1.03",
    "name": "Handspring forward on - 1 1/2 turn (540°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 3.2,
    "tags": [
      "vault",
      "handspring",
      "turn",
      "forward"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-1-04-CUR",
    "apparatus": "VT",
    "code": "1.04",
    "name": "Handspring forward on - 2/1 turn (720°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 3.6,
    "tags": [
      "vault",
      "handspring",
      "turn",
      "forward"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-1-05-CUR",
    "apparatus": "VT",
    "code": "1.05",
    "name": "Handspring forward on - 2 1/2 turn (900°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 4.0,
    "tags": [
      "vault",
      "handspring",
      "turn",
      "forward"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-1-11-CUR",
    "apparatus": "VT",
    "code": "1.11",
    "name": "Yamashita with 1/2 turn (180°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 2.4,
    "tags": [
      "vault",
      "yamashita",
      "turn"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-1-12-CUR",
    "apparatus": "VT",
    "code": "1.12",
    "name": "Yamashita with 1/1 turn (360°) off",
    "element_group": "Group 1 - Handspring, Yamashita, Round-off",
    "value_letter": "VT",
    "dv": 2.8,
    "tags": [
      "vault",
      "yamashita",
      "turn"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-2-10-CUR",
    "apparatus": "VT",
    "code": "2.10",
    "name": "Handspring forward on - tucked salto forward off",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "VT",
    "dv": 3.6,
    "tags": [
      "vault",
      "handspring",
      "salto",
      "forward"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-2-20-CUR",
    "apparatus": "VT",
    "code": "2.20",
    "name": "Handspring forward on - piked salto forward off",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "VT",
    "dv": 3.8,
    "tags": [
      "vault",
      "handspring",
      "salto",
      "forward"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-2-30-CUR",
    "apparatus": "VT",
    "code": "2.30",
    "name": "Handspring forward on - stretched salto forward off",
    "element_group": "Group 2 - Handspring forward salto",
    "value_letter": "VT",
    "dv": 4.4,
    "tags": [
      "vault",
      "handspring",
      "salto",
      "forward"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-3-10-CUR",
    "apparatus": "VT",
    "code": "3.10",
    "name": "Tsukahara tucked",
    "element_group": "Group 3 - Tsukahara",
    "value_letter": "VT",
    "dv": 3.8,
    "tags": [
      "vault",
      "tsukahara",
      "salto",
      "backward"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-4-10-CUR",
    "apparatus": "VT",
    "code": "4.10",
    "name": "Yurchenko tucked",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "VT",
    "dv": 3.8,
    "tags": [
      "vault",
      "yurchenko",
      "salto",
      "backward"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  },
  {
    "id": "FIG-VT-5-10-CUR",
    "apparatus": "VT",
    "code": "5.10",
    "name": "Round-off half-on tucked salto forward off",
    "element_group": "Group 4/5 - Yurchenko and round-off entries",
    "value_letter": "VT",
    "dv": 4.0,
    "tags": [
      "vault",
      "round-off",
      "half-on",
      "salto",
      "forward"
    ],
    "note": "Curated from WAG COP 2025-2028 vault table"
  }
]
