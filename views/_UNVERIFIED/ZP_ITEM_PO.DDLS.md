---
name: ZP_ITEM_PO.DDLS
description: projection view for item po
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Praveen2987/RAP/blob/83651614e4ba30c672618ac888e52d60b639bccf/src/zp_item_po.ddls.asddls
semantic_en: projection view for item po — CDS view.
semantic_vi: projection view for item po — CDS view dựa trên projection view for item po.
keywords:
  - projection
  - for
  - item
  - pono
  - poitem
  - quantity
  - unit
tags:
  - bo:project
  - project
---
# ZP_ITEM_PO.DDLS

**projection view for item po**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Praveen2987/RAP/blob/83651614e4ba30c672618ac888e52d60b639bccf/src/zp_item_po.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `Pono` | `Pono` |
| key `Poitem` | `Poitem` |
| `Quantity` | `Quantity` |
| `Unit` | `Unit` |
| `_header` | *Association* |

## Source Code

*Source: [https://github.com/Praveen2987/RAP/blob/83651614e4ba30c672618ac888e52d60b639bccf/src/zp_item_po.ddls.asddls](https://github.com/Praveen2987/RAP/blob/83651614e4ba30c672618ac888e52d60b639bccf/src/zp_item_po.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'projection view for item po'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
define view entity zp_item_po
  as projection on zc_item_po
{
  key Pono,
  key Poitem,
      @Semantics.quantity.unitOfMeasure : 'Unit'
      Quantity,
      Unit,
      /* Associations */
      _header : redirected to parent zp_header_po
}
```