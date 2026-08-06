---
name: C_PURCHASEORDERVALUE
description: Purchase Order Value
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURCHASEORDERVALUE')/$value
semantic_en: Purchase Order Value
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - order
  - purchase-order
  - metadata-only
---
# C_PURCHASEORDERVALUE

**Purchase Order Value**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURCHASEORDERVALUE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchase Order |
| `AccountAssignmentNumber` | `NUMC(2)` | Sequential Number of Account Assignment |
| `PurgDocMigrtnIsCmpltdForAnlyts` | `CHAR(1)` | Indicator for Data Migration of Schedule Line |
| `PurgCatUUID` | `RAW(16)` | Purchasing Category UUID |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `SupplierName` | `CHAR(80)` | Name of Supplier |
| `SupplierCountry` | `CHAR(3)` | Supplier Country/Region |
| `CountryName` | `CHAR(50)` | Country/Region Name |
| `Country` | `CHAR(3)` | Supplier Country/Region |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `PurchaseOrderDate` | `DATS(8)` | Purchasing Document Date |
| `IsCompletelyDelivered` | `CHAR(1)` | "Delivery Completed" Indicator |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `PostingMonth` | `NUMC(2)` | Calendar Month |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `YearQuarter` | `NUMC(5)` | Year Quarter |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingOrganizationName` | `CHAR(20)` | Purchasing Organization Name |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `PurchasingGroupName` | `CHAR(18)` | Purchasing Group Name |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialName` | `CHAR(40)` | Product Description |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `MaterialGroupName` | `CHAR(20)` | Product Group Description |
| `Plant` | `CHAR(4)` | Plant |
| `PlantName` | `CHAR(30)` | Plant Name |
| `ProductTypeCode` | `CHAR(2)` | Product Type Group |
| `ProductType` | `CHAR(4)` | Product Type |
| `ServicePerformer` | `CHAR(10)` | Service Performer |
| `PurchasingCategory` | `CHAR(20)` | Purchasing Category ID |
| `PurgCatRelatedToMaterialGroup` | `CHAR(20)` |  |
| `PurgCatName` | `CHAR(60)` | Name of Purchasing Category |
| `WBSElementInternalID` | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) |
| `CustomerProjectName` | `CHAR(40)` | Customer Project Name |
| `CustProjWorkPackageName` | `CHAR(60)` | Plan Item Description |
| `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `PurOrdNetAmountInDisplayCrcy` | `CURR(21)` | Purchase Order Net Amount |
| `NumberOfPurchaseOrders` | `INT4(10)` |  |
| `NmbrOfCmpltlyDlvrdPurOrdItms` | `INT4(10)` |  |
| `NumberOfPurchaseOrderItems` | `INT4(10)` |  |
