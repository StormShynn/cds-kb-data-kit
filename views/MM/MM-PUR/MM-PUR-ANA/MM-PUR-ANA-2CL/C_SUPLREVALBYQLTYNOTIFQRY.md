---
name: C_SUPLREVALBYQLTYNOTIFQRY
description: By Quality Notification
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQLTYNOTIFQRY')/$value
semantic_en: By Quality Notification
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - notification
  - metadata-only
---
# C_SUPLREVALBYQLTYNOTIFQRY

**By Quality Notification**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQLTYNOTIFQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchase Order |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `Supplier` | `CHAR(10)` | Supplier |
| `PurchaseOrderDate` | `DATS(8)` | Purchase Order Date |
| `Plant` | `CHAR(4)` | Plant |
| `SupplierCountry` | `CHAR(3)` | Supplier Country/Region |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingDocumentCategory` | `CHAR(1)` | Purchasing Document Category |
| `PurgDocMigrtnIsCmpltdForAnlyts` | `CHAR(1)` | Indicator for Data Migration of Schedule Line |
| `SuplrEvalRelevantDocCategory` | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `PurchasingCategory` | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` | `CHAR(60)` | Name of Purchasing Category |
| `QualityNotificationCount` | `INT4(10)` |  |
| `PurchaseOrderItemUniqueID` | `CHAR(15)` |  |
| `UniqueIntSourcingRequest` | `CHAR(15)` |  |
| `SuplrEvalCalculatedScoreValue` | `FLTP(16)` | Calculated Score |
| `NumberOfPurchaseOrders` | `INT4(10)` | Number of Purchase Orders |
| `NmbrOfPurchaseOrderItemsWithGR` | `INT4(10)` | Number of Purchase Order Items |
| `NmbrOfPOItemWithQltyNotifScr` | `INT4(10)` |  |
| `NumberOfPurchaseOrderItems` | `INT4(10)` | Number of Purchase Order Items |
| `QualityNotifVarianceScoreValue` | `DEC(15)` |  |
| `QltyNotifScrRltvToPOWthGRValue` | `FLTP(16)` | Relative score of a Supplier |
