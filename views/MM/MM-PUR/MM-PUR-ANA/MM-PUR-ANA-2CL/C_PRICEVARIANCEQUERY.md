---
name: C_PRICEVARIANCEQUERY
description: Price Variance
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRICEVARIANCEQUERY')/$value
semantic_en: Price Variance
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - metadata-only
---
# C_PRICEVARIANCEQUERY

**Price Variance**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRICEVARIANCEQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchase Order |
| `PurgDocMigrtnIsCmpltdForAnlyts` | `CHAR(1)` | Indicator for Data Migration of Schedule Line |
| `SuplrEvalRelevantDocCategory` | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `PurchaseOrderDate` | `DATS(8)` | Purchase Order Date |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Supplier` | `CHAR(10)` | Supplier |
| `SupplierCountry` | `CHAR(3)` | Supplier Country/Region |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `Plant` | `CHAR(4)` | Plant |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `PurchasingCategory` | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` | `CHAR(60)` | Name of Purchasing Category |
| `PurchasingDocumentCategory` | `CHAR(1)` | Purchasing Document Category |
| `PurchasingDocumentCategoryName` | `CHAR(60)` | Purchasing Document Category Name |
| `Currency` | `CUKY(5)` | Currency Key |
| `PurchaseOrderQuantityUnit` | `UNIT(3)` | Purchase Order Unit of Measure |
| `OrderPriceUnit` | `UNIT(3)` | Order Price Unit (Purchasing) |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `PriceVarianceInPct` | `DEC(14)` | Price Variance in Percentage |
| `PriceVarianceAmount` | `CURR(13)` |  |
| `PurchaseOrderNetPriceAmount` | `CURR(13)` |  |
| `InvoicePrice` | `CURR(13)` |  |
| `PriceVarianceScore` | `DEC(5)` | Variance Score |
| `NumberOfPurchaseOrders` | `INT4(10)` | Number of Purchase Orders |
| `NumberOfPurchaseOrderItems` | `INT4(10)` | Number of Purchase Order Items |
| `SuplrEvalPriceVarcInPercent` | `DEC(14)` | Price Variance in Percentage |
| `SuplrEvalPriceVarianceAmt` | `CURR(13)` |  |
| `AmountPerPurchaseOrderPrcUnit` | `CURR(13)` |  |
| `PerInvoicePrcUnitAmount` | `CURR(13)` |  |
| `DeliveredQuantity` | `QUAN(18)` |  |
| `OrderedQuantity` | `QUAN(13)` | Purchase Order Quantity |
| `PriceVarianceScoreValue` | `DEC(5)` | Variance Score |
