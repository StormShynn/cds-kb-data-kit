---
name: I_RETAILCHARACTERISTICVALUE
description: Retail Characteristic Value
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTICVALUE')/$value
semantic_en: Retail Characteristic Value
tags:
  - LO
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
  - metadata-only
---
# I_RETAILCHARACTERISTICVALUE

**Retail Characteristic Value**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTICVALUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharacteristicInternalID` |  | |  |  | `NUMC(10)` | Internal Characteristic Number |
| `RetailCharacteristicValue` |  | |  |  | `CHAR(18)` | Characteristic Value |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
