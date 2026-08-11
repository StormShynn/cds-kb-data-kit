---
name: I_TRDGCONTRSCHEDULELINE
description: "Trading Contract Schedule Line"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRSCHEDULELINE')/$value
semantic_en: "Trading Contract Schedule Line"
keywords:
  - "Trading Contract Schedule Line"
tags:
  - LO
  - component:LO-GT
  - contract
  - interface-view
  - LO-GT
  - lob:logistics general
  - metadata-only
---
# I_TRDGCONTRSCHEDULELINE

**Trading Contract Schedule Line**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRSCHEDULELINE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradingContract` |  | |  |  | `CHAR(10)` | Trading Contract |
| `TradingContractItem` |  | |  |  | `NUMC(6)` | Item Number of Trading Contract |
| `TradingContractScheduleLine` |  | |  |  | `NUMC(4)` | Schedule Line Number in Trading Contract |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Created At |
| `TrdgContrSalesQuantity` |  | |  |  | `QUAN(15)` | Cumulative Order Quantity in Sales Units |
| `TrdgContrSlsQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `TrdgContrPurgQuantity` |  | |  |  | `QUAN(13)` | Quantity ordered against this purchase requisition |
| `TrdgContrPurgQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `TrdgContrSlsSchedLineDelivDte` |  | |  |  | `DATS(8)` | Sales Schedule Line Delivery Date |
| `TrdgContrPurgSchedLineDelivDte` |  | |  |  | `DATS(8)` | Purchasing Schedule line delivery date |
| `TrdgContrSlsDelivDteCat` |  | |  |  | `CHAR(1)` | Sales Delivery Date Category |
| `TrdgContrPurgDelivDteCat` |  | |  |  | `CHAR(1)` | Purchasing Delivery Date Category |
| `TrdgContrSlsReqdDelivTme` |  | |  |  | `TIMS(6)` | Sales Requested Delivery Time |
| `TrdgContrPurgReqdDelivTme` |  | |  |  | `TIMS(6)` | Purchasing Requested Delivery Time |
| `TrdgContrInbLglCtrlChkSts` |  | |  |  | `CHAR(1)` | Legal Control Check Status (Inbound) |
| `TrdgContrOutbLglCtrlChkSts` |  | |  |  | `CHAR(1)` | Legal Control Check Status (Outbound) |
