---
name: C_SUPLREVALBYQUALITYQRY
description: Supplier Evaluation by Quality
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQUALITYQRY')/$value
semantic_en: Supplier Evaluation by Quality
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
# C_SUPLREVALBYQUALITYQRY

**Supplier Evaluation by Quality**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQUALITYQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `InspectionLot` | `NUMC(12)` | Inspection Lot Number |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchase Order |
| `Supplier` | `CHAR(10)` | Supplier's Account Number |
| `SupplierCountry` | `CHAR(3)` | Supplier Country/Region |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `PurchasingDocumentCategory` | `CHAR(1)` | Purchasing Document Category |
| `PurchasingDocumentCategoryName` | `CHAR(60)` | Purchasing Document Category Name |
| `PurgDocMigrtnIsCmpltdForAnlyts` | `CHAR(1)` | Indicator for Data Migration of Schedule Line |
| `SuplrEvalRelevantDocCategory` | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `Plant` | `CHAR(4)` | Plant |
| `PurchasingCategory` | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` | `CHAR(60)` | Name of Purchasing Category |
| `InspectionLotQltyScoreValue` | `DEC(5)` | Variance Score |
| `NumberOfInspectionLots` | `INT4(10)` | Number of Purchase Order Items |
| `PurchaseOrderItemUniqueID` | `CHAR(15)` | Concatenation of EBELN and EBELP |
| `NumberOfPurchaseOrders` | `INT4(10)` | Number of Purchase Orders |
| `NumberOfPurchaseOrderItems` | `INT4(10)` | Number of Purchase Order Items |
| `InspectionLotQualityScore` | `DEC(5)` | Variance Score |
