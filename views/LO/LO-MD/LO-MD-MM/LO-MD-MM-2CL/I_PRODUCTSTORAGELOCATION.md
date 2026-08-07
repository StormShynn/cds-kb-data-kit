---
name: I_PRODUCTSTORAGELOCATION
description: "This CDS view provides the list of Storage locations assigned for a Product and Plant."
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTORAGELOCATION')/$value
semantic_en: "This CDS view provides the list of Storage locations assigned for a Product and Plant."
keywords:
  - "Product Storage Location"
tags:
  - LO
  - bo:material
  - component:LO-MD-MM-2CL
  - interface-view
  - LO-MD
  - LO-MD-MM
  - LO-MD-MM-2CL
  - lob:logistics general
  - lob:sourcing & procurement
  - plan
  - product
  - metadata-only
---
# I_PRODUCTSTORAGELOCATION

**This CDS view provides the list of Storage locations assigned for a Product and Plant.**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTORAGELOCATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `WarehouseStorageBin` |  | |  |  | `CHAR(10)` | Storage Bin |
| `MaintenanceStatus` |  | |  |  | `CHAR(15)` | Maintenance Status |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Flag Material for Deletion at Storage Location Level |
| `PhysicalInventoryBlockInd` |  | |  |  | `CHAR(1)` | Physical Inventory Blocking Indicator |
| `CreationDate` |  | |  |  | `DATS(8)` | Created On |
| `DateOfLastPostedCntUnRstrcdStk` |  | |  |  | `DATS(8)` | Date of Last Posted Count |
| `InventoryCorrectionFactor` |  | |  |  | `FLTP(16)` | Inventory Correction Factor |
| `InvtryRestrictedUseStockInd` |  | |  |  | `CHAR(3)` | Physical inventory indicator for restricted-use stock |
| `InvtryCurrentYearStockInd` |  | |  |  | `CHAR(3)` | Physical inventory indicator for whse stock in current year |
| `InvtryQualInspCurrentYrStkInd` |  | |  |  | `CHAR(3)` | Phys. inventory ind. f. stock in qual. insp. in current year |
| `InventoryBlockStockInd` |  | |  |  | `CHAR(3)` | Physical inventory indicator for blocked stock |
| `InvtryRestStockPrevPeriodInd` |  | |  |  | `CHAR(3)` | Physical inventory ind. for restricted-use stock, prev.pd |
| `InventoryStockPrevPeriod` |  | |  |  | `CHAR(3)` | Physical inventory indicator for stock in previous year |
| `InvtryStockQltyInspPrevPeriod` |  | |  |  | `CHAR(3)` | Phys. inventory ind. f. stock in qual. insp. in prev. period |
| `HasInvtryBlockStockPrevPeriod` |  | |  |  | `CHAR(3)` | Phys. inventory indicator for blocked stock in prev. period |
| `FiscalYearCurrentPeriod` |  | |  |  | `NUMC(4)` |  |
| `FiscalMonthCurrentPeriod` |  | |  |  | `NUMC(2)` |  |
| `FiscalYearCurrentInvtryPeriod` |  | |  |  | `NUMC(4)` | Fiscal year of current physical inventory indicator |
| `IsActiveEntity` |  | |  |  | `CHAR(1)` | Draft - Indicator - Is active document |
| `LeanWrhsManagementPickingArea` |  | |  |  | `CHAR(3)` | Picking area for lean WM |
