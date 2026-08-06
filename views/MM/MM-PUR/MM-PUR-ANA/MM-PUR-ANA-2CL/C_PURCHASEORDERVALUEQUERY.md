---
name: C_PURCHASEORDERVALUEQUERY
description: Spend Analysis
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURCHASEORDERVALUEQUERY')/$value
semantic_en: Spend Analysis
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
# C_PURCHASEORDERVALUEQUERY

**Spend Analysis**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURCHASEORDERVALUEQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchase Order |
| `AccountAssignmentNumber` | `NUMC(2)` | Sequential Number of Account Assignment |
| `PurgDocMigrtnIsCmpltdForAnlyts` | `CHAR(1)` | Indicator for Data Migration of Schedule Line |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `PostingMonth` | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CountryName` | `CHAR(50)` | Country/Region Name |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialName` | `CHAR(40)` | Product Description |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `MaterialGroupName` | `CHAR(20)` | Product Group Description |
| `Plant` | `CHAR(4)` | Plant |
| `PlantName` | `CHAR(30)` | Plant Name |
| `ProductTypeCode` | `CHAR(2)` | Product Type Group |
| `ProductType` | `CHAR(4)` | Product Type |
| `PurchaseOrderDate` | `DATS(8)` | Purchasing Document Date |
| `IsCompletelyDelivered` | `CHAR(1)` | "Delivery Completed" Indicator |
| `PurchasingCategory` | `CHAR(20)` | Purchasing Category ID |
| `PurgCatRelatedToMaterialGroup` | `CHAR(20)` |  |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `PurchasingGroupName` | `CHAR(18)` | Purchasing Group Name |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingOrganizationName` | `CHAR(20)` | Purchasing Organization Name |
| `PurgCatName` | `CHAR(60)` | Name of Purchasing Category |
| `ServicePerformer` | `CHAR(10)` | Service Performer |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `SupplierCountry` | `CHAR(3)` | Supplier Country/Region |
| `Country` | `CHAR(3)` | Supplier Country/Region |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SupplierName` | `CHAR(80)` | Name of Supplier |
| `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementInternalID` | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) |
| `PurOrdNetAmountInDisplayCrcy` | `CURR(21)` | Purchase Order Net Amount |
| `NumberOfPurchaseOrders` | `INT4(10)` |  |
| `NmbrOfCmpltlyDlvrdPurOrdItms` | `INT4(10)` |  |
| `NumberOfPurchaseOrderItems` | `INT4(10)` |  |
