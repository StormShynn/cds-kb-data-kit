---
name: ZDD_ITEMS.DDLS
description: Posiciones
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Herygzz/ABAP-CDS/blob/9b5ab06b27a3d147162849984bfaec2912960305/src/zdd_items.ddls.asddls
semantic_en: Posiciones — CDS view based on zta_vbap.
semantic_vi: Posiciones — CDS view dựa trên zta_vbap.
keywords:
  - posiciones
  - vbeln
  - posnr
  - matnr
  - arktx
  - meins
tags:
  - AP
  - bo:purchaseorder
  - component:AP
---
# ZDD_ITEMS.DDLS

**Posiciones**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Herygzz/ABAP-CDS/blob/9b5ab06b27a3d147162849984bfaec2912960305/src/zdd_items.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Vbeln` | ✓ | |  | `vbeln` |
| `Posnr` | ✓ | |  | `posnr` |
| `Matnr` |  | |  | `matnr` |
| `Arktx` |  | |  | `arktx` |
| `Meins` |  | |  | `meins` |
| `Netwr` |  | |  | `netwr` |
| `Waerk` |  | |  | `waerk` |
| `Kwmeng` |  | |  | `kwmeng` |
| `Vrkme` |  | |  | `vrkme` |
| `Werks` |  | |  | `werks` |
| `Netpr` |  | |  | `netpr` |
| `_Header` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Header` | `zdd_head` | [1..1] |

## Source Code

*Source: [https://github.com/Herygzz/ABAP-CDS/blob/9b5ab06b27a3d147162849984bfaec2912960305/src/zdd_items.ddls.asddls](https://github.com/Herygzz/ABAP-CDS/blob/9b5ab06b27a3d147162849984bfaec2912960305/src/zdd_items.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Posiciones'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
define view entity zdd_items
  as select from zta_vbap
  association [1..1] to zdd_head as _Header on $projection.Vbeln = _Header.Vbeln
{
      @UI.hidden: true
  key vbeln  as Vbeln,
      @UI.lineItem: [{ position: 10, importance: #HIGH }]
  key posnr  as Posnr,
      @UI.lineItem: [{ position: 20, importance: #HIGH }]
      matnr  as Matnr,
      @UI.lineItem: [{ position: 30, importance: #HIGH }]
      arktx  as Arktx,
      @UI.lineItem: [{ position: 40, importance: #HIGH }]
      meins  as Meins,
      @UI.lineItem: [{ position: 50, importance: #HIGH }]
      @Semantics.amount.currencyCode: 'waerk'
      netwr  as Netwr,
      @UI.lineItem: [{ position: 60, importance: #HIGH }]
      waerk  as Waerk,
      @UI.lineItem: [{ position: 70, importance: #HIGH }]
      @Semantics.quantity.unitOfMeasure: 'vrkme'
      kwmeng as Kwmeng,
      @UI.lineItem: [{ position: 80, importance: #HIGH }]
      vrkme  as Vrkme,
      @UI.lineItem: [{ position: 90, importance: #HIGH }]
      werks  as Werks,
      @UI.lineItem: [{ position: 100, importance: #HIGH }]
      @Semantics.amount.currencyCode: 'waerk'
      netpr  as Netpr,

      _Header
}
```
