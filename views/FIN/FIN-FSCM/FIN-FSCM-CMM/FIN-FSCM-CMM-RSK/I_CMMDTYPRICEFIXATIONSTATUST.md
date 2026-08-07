---
name: I_CMMDTYPRICEFIXATIONSTATUST
description: "Commodity Price Fixation Status - Text"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPRICEFIXATIONSTATUST')/$value
semantic_en: "Commodity Price Fixation Status - Text"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CMM-RSK
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-RSK
  - interface-view
  - lob:finance
  - lob:sourcing & procurement
  - metadata-only
---
# I_CMMDTYPRICEFIXATIONSTATUST

**Commodity Price Fixation Status - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPRICEFIXATIONSTATUST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityPriceFixationStatus` |  | |  |  | `CHAR(1)` | Fixation Status (OBSOLETE) |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CmmdtyPriceFixationStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
