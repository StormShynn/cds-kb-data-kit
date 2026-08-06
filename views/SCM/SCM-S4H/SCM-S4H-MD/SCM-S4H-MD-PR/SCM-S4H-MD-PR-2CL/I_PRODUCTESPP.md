---
name: I_PRODUCTESPP
description: This CDS view provides the consumer with a list of flags related to Extended Service Parts Planning. Description: Product ESPP active core entity
app_component: SCM-S4H-MD-PR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTESPP')/$value
semantic_en: This CDS view provides the consumer with a list of flags related to Extended Service Parts Planning. Description: Product ESPP active core entity
tags:
  - SCM
  - bo:material
  - component:SCM-S4H-MD-PR-2CL
  - interface-view
  - plan
  - product
  - SCM-S4H
  - SCM-S4H-MD
  - SCM-S4H-MD-PR
  - SCM-S4H-MD-PR-2CL
  - metadata-only
---
# I_PRODUCTESPP

**This CDS view provides the consumer with a list of flags related to Extended Service Parts Planning. Description: Product ESPP active core entity**

| Property | Value |
|---|---|
| App Component | `SCM-S4H-MD-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTESPP')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Product` | `CHAR(40)` | Material Number |
| `ProductIsForKitToOrder` | `CHAR(1)` | Product for Kit-to-Order |
| `ProductIsForProcureToOrder` | `CHAR(1)` | Product can be used for Procure-to-Order |
| `ProdIsForPushDplntFromSupplier` | `CHAR(1)` | Carry Out Push Deployment from Supplier |
| `InventoryBalancingIsNotAllowed` | `CHAR(1)` | Inventory Balancing Not Allowed |
| `ProdIsForGlobalStockOnEntryLoc` | `CHAR(1)` | Global Stock on Entry Location DRP |
| `ProdIsExclFromExpressShipment` | `CHAR(1)` | Exclude from Express Shipment |
| `SrvcPartsProductIsNew` | `CHAR(1)` | New Product |
| `SrvcPartsProdProdnStartDate` | `DATS(8)` | Production Start Date |
| `SrvcPartsProdProdnEndDate` | `DATS(8)` | Production End Date |
| `SrvcPartsInvtryPlngMode` | `CHAR(1)` | Inventory Planning Mode |
