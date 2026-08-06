---
name: I_CMMDTY
description: Commodity
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTY')/$value
semantic_en: Commodity
tags:
  - FIN
  - component:FIN-FSCM-CMM-RSK
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-RSK
  - interface-view
  - lob:finance
  - lob:sourcing & procurement
  - metadata-only
---
# I_CMMDTY

**Commodity**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Commodity` | `CHAR(18)` | Commodity |
| `CommodityUnit` | `UNIT(3)` | Unit of Measure of Commodity |
| `CommodityType` | `CHAR(3)` | Type of Commodity |
| `CommodityCategory` | `CHAR(3)` | Commodity Category |
| `FirstCustSpecificCmmdtyGroup` | `CHAR(3)` | Commodity Group1 |
| `SecondCustSpecificCmmdtyGroup` | `CHAR(3)` | Commodity Group2 |
