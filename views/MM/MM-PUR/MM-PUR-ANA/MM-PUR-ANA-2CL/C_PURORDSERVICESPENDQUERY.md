---
name: C_PURORDSERVICESPENDQUERY
description: Service Spend
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURORDSERVICESPENDQUERY')/$value
semantic_en: Service Spend
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
# C_PURORDSERVICESPENDQUERY

**Service Spend**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURORDSERVICESPENDQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchase Order |
| `Supplier` | `CHAR(10)` | Supplier |
| `SupplierName` | `CHAR(80)` | Name of Supplier |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingOrganizationName` | `CHAR(20)` | Purchasing Organization Name |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `PurchasingGroupName` | `CHAR(18)` | Purchasing Group Name |
| `PurchasingDocumentStatus` | `CHAR(2)` |  |
| `PurchasingDocumentStatusName` | `CHAR(60)` | Purchasing Document Status Name |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialName` | `CHAR(40)` | Product Description |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `MaterialGroupName` | `CHAR(20)` | Product Group Description |
| `SupplierCountry` | `CHAR(3)` | Country/Region Key |
| `CountryName` | `CHAR(50)` | Country/Region Name |
| `Plant` | `CHAR(4)` | Plant |
| `PlantName` | `CHAR(30)` | Plant Name |
| `ProductType` | `CHAR(4)` | Product Type |
| `ProductTypeCode` | `CHAR(2)` | Product Type Group |
| `ServicePerformer` | `CHAR(10)` | Service Performer |
| `PurchaseOrderDate` | `DATS(8)` | Purchase Order Date |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `PurchaseOrderItemCategory` | `CHAR(1)` | Item category in purchasing document |
| `PurgDocItemCategoryName` | `CHAR(20)` | Text for Item Category |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `PurOrdNetAmountInDisplayCrcy` | `CURR(21)` | Purchase Order Net Amount |
| `TotalNetAmount` | `CURR(21)` | Confirmed Amount of Service Entry Sheet |
| `InvoiceAmtInDisplayCurrency` | `CURR(18)` | Invoice Amount |
| `ExpectedOverallLimitAmount` | `CURR(13)` | Expected Value of Overall Limit |
| `OverallLimitAmount` | `CURR(13)` | Overall Limit |
