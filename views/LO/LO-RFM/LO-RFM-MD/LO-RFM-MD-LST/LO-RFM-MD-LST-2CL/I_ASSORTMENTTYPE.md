---
name: I_ASSORTMENTTYPE
description: Assortment Type
app_component: LO-RFM-MD-LST-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTTYPE')/$value
semantic_en: Assortment Type
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-MD-LST-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-LST
  - LO-RFM-MD-LST-2CL
  - lob:logistics general
  - metadata-only
---
# I_ASSORTMENTTYPE

**Assortment Type**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-LST-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSORTMENTTYPE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AssortmentType` | `CHAR(4)` | Assortment Type |
| `AssortmentDimension1` | `CHAR(2)` | Assortment Dimension |
| `AssortmentDimension2` | `CHAR(2)` | Assortment Dimension |
| `AssortmentDimension3` | `CHAR(2)` | Assortment Dimension |
| `AsrtAsgtToLaytMdlIsPosbl` | `CHAR(1)` | Flag: Assortment Can Be Assigned Layout Module |
| `LaytMdlIsCrtedAutomly` | `CHAR(1)` | Flag: Create Layout Module Automatically |
| `LaytMdlIsNotRdyForInpt` | `CHAR(1)` | Indicator: Field Layout Module Not Ready for Input |
