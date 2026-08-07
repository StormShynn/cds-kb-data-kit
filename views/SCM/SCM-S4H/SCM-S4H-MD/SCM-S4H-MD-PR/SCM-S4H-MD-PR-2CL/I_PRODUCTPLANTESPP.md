---
name: I_PRODUCTPLANTESPP
description: This CDS view provides the consumer with list of Extended Service Parts Planning Specific details of the product-plant records. Description: Product Plant ESPP active core entity
app_component: SCM-S4H-MD-PR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTPLANTESPP')/$value
semantic_en: This CDS view provides the consumer with list of Extended Service Parts Planning Specific details of the product-plant records. Description: Product Plant ESPP active core entity
tags:
  - SCM
  - bo:companycode
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
# I_PRODUCTPLANTESPP

**This CDS view provides the consumer with list of Extended Service Parts Planning Specific details of the product-plant records. Description: Product Plant ESPP active core entity**

| Property | Value |
|---|---|
| App Component | `SCM-S4H-MD-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTPLANTESPP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ESPPIsUsed` |  | |  |  | `CHAR(1)` | Usage in Extended Service Parts Planning |
| `ProductAlertRelevanceCode` |  | |  |  | `CHAR(1)` | Alert Relevance of Product |
| `LocProdGoodsReceiptProcHours` |  | |  |  | `DEC(11)` | Goods Receipt Processing Time |
| `LocProdGoodsIssueProcHours` |  | |  |  | `DEC(11)` | Goods Issue Processing Time |
| `SrvcPartsThroughputTimeDurn` |  | |  |  | `DEC(11)` | Service Parts Throughput Time |
| `ThirdPartyOrderProcessing` |  | |  |  | `CHAR(2)` | Third-Party Order Processing |
| `ParLocSafetyStockQuantity` |  | |  |  | `QUAN(13)` | Safety Stock at Parent Location |
| `RepairSafetyStockQuantity` |  | |  |  | `QUAN(13)` | Repair Safety Stock |
| `VCLSafetyStockQuantity` |  | |  |  | `QUAN(13)` | Safety Stock for Virtual Child Location |
| `VCLParLocSafetyStockQuantity` |  | |  |  | `QUAN(13)` | Safety Stock of Parent Location Virtual Child Location |
| `VCLRepairSafetyStockQuantity` |  | |  |  | `QUAN(13)` | Repair Safety Stock for Virtual Child Location |
| `VCLReorderPointQuantity` |  | |  |  | `QUAN(13)` | Reorder Point for Virtual Child Location |
| `VCLMaximumStockQuantity` |  | |  |  | `QUAN(13)` | Maximum Stock Level for Virtual Child Locations |
| `CostFactorForStockHoldingVal` |  | |  |  | `DEC(3)` | Cost Factor for Stockholding Costs |
| `ProductProcurementCostsVal` |  | |  |  | `DEC(13)` | Procurement Costs for Product |
| `GoodsReceiptHandlingCost` |  | |  |  | `DEC(13)` | Goods Receiving Costs |
| `GoodsIssueHandlingCost` |  | |  |  | `DEC(13)` | Goods Issue Costs |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
