---
name: C_CHMLCMPLNCINFODEX
description: "Chemical Compliance Info"
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCINFODEX')/$value
semantic_en: "Chemical Compliance Info"
tags:
  - EHS
  - component:EHS-SUS-FND-PC
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-PC
  - metadata-only
---
# C_CHMLCMPLNCINFODEX

**Chemical Compliance Info**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHMLCMPLNCINFODEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChmlCmplncInfoUUID` |  | |  |  | `RAW(16)` | Chemical Compliance Information |
| `ChemicalComplianceInfo` |  | |  |  | `CHAR(12)` | Internal Number |
| `ChmlCmplncInternalName` |  | |  |  | `CHAR(132)` | Internal Name |
| `ChmlCmplncInfoType` |  | |  |  | `CHAR(2)` | CCI Type |
| `ResponsibleUnit` |  | |  |  | `CHAR(10)` | Responsible Unit |
| `DngrsGdsRespUnit` |  | |  |  | `CHAR(10)` | Responsible Unit for Dangerous Goods |
| `ProdStewardshipRespUnit` |  | |  |  | `CHAR(10)` | Responsible Unit |
| `MaterialIsSold` |  | |  |  | `CHAR(1)` | Product is Sold |
| `MaterialIsTransported` |  | |  |  | `CHAR(1)` | Product is Transported |
| `MaterialIsSourced` |  | |  |  | `CHAR(1)` | Product is Sourced |
| `MaterialIsProduced` |  | |  |  | `CHAR(1)` | Product is Produced |
| `ChmlCmplncProdIsResearched` |  | |  |  | `CHAR(1)` | Research and Development Sample |
| `SftyDataShtIsNotRequired` |  | |  |  | `CHAR(1)` | Product is not relevant for product safety |
| `MaterialIsDisposed` |  | |  |  | `CHAR(1)` | Product is Disposed |
| `MaterialIsEmissionRelevant` |  | |  |  | `CHAR(1)` | Product is Emission Relevant |
