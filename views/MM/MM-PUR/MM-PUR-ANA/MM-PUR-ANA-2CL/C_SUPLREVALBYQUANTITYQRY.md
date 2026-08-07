---
name: C_SUPLREVALBYQUANTITYQRY
description: Supplier Evaluation by Quantity
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQUANTITYQRY')/$value
semantic_en: Supplier Evaluation by Quantity
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - supplier
  - metadata-only
---
# C_SUPLREVALBYQUANTITYQRY

**Supplier Evaluation by Quantity**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQUANTITYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `SuplrEvalCritraDelivCompleted` |  | |  |  | `CHAR(10)` | Delivery Completed |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  | `CHAR(1)` | Single-Character Flag |
| `SuplrEvalRelevantDocCategory` |  | |  |  | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `PurOrdItmFirstGRPostingDate` |  | |  |  | `DATS(8)` | First Goods Receipt Date |
| `PurOrdItmFinalGRPostingDate` |  | |  |  | `DATS(8)` | Final Goods Receipt Date |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PurchasingDocumentCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `PurchaseOrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `OrderedQuantity` |  | |  |  | `QUAN(13)` | Ordered Quantity |
| `GoodsReceiptQty` |  | |  |  | `QUAN(18)` |  |
| `QuantityVarianceInOrdUnit` |  | |  |  | `QUAN(13)` | Quantity Variance in Order Unit |
| `QuantityVarianceInDspCrcy` |  | |  |  | `CURR(15)` | Quantity Variance in Display Currency |
| `QuantityVarianceScore` |  | |  |  | `DEC(5)` | Variance Score |
| `QuantityVarianceInPctValue` |  | |  |  | `DEC(14)` | Percentage Variance |
| `TotalQuantityVarianceScore` |  | |  |  | `DEC(5)` | Variance Score |
| `QuantityVarianceInPct` |  | |  |  | `DEC(14)` | Percentage Variance |
| `NumberOfPurchaseOrderItems` |  | |  |  | `INT4(10)` | Number of Purchase Order Items |
| `NumberOfPurchaseOrders` |  | |  |  | `INT4(10)` | Number of Purchase Orders |
