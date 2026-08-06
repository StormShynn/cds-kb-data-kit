---
name: C_PURGSPENDOFFCONTRACT
description: Off Contract Spend
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURGSPENDOFFCONTRACT')/$value
semantic_en: Off Contract Spend
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - contract
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - metadata-only
---
# C_PURGSPENDOFFCONTRACT

**Off Contract Spend**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURGSPENDOFFCONTRACT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchase Order |
| `AccountAssignmentNumber` | `NUMC(2)` | Sequential Number of Account Assignment |
| `PurgDocMigrtnIsCmpltdForAnlyts` | `CHAR(1)` | Indicator for Data Migration of Schedule Line |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `SupplierName` | `CHAR(80)` | Name of Supplier |
| `SupplierCountry` | `CHAR(3)` | Supplier Country/Region |
| `CountryName` | `CHAR(50)` | Country/Region Name |
| `PurchaseOrderDate` | `DATS(8)` | Purchasing Document Date |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingOrganizationName` | `CHAR(20)` | Purchasing Organization Name |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `PurchasingGroupName` | `CHAR(18)` | Purchasing Group Name |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `ReceivingCompanyCode` | `CHAR(25)` | Name of Company Code or Company |
| `PurgDocHdrCompanyCode` | `CHAR(4)` | Company Code |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `PurchaseOrderType` | `CHAR(4)` | Order Type (Purchasing) |
| `PurchasingDocumentTypeName` | `CHAR(20)` | Short Description of Purchasing Document Type |
| `PurchaseOrderItemCategory` | `CHAR(1)` | Item category in purchasing document |
| `PurgDocItemCategoryName` | `CHAR(20)` | Text for Item Category |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialName` | `CHAR(40)` | Material Description |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `MaterialGroupName` | `CHAR(20)` | Product Group Description |
| `Plant` | `CHAR(4)` | Plant |
| `PlantName` | `CHAR(30)` | Plant Name |
| `PurchasingCategory` | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` | `CHAR(60)` | Name of Purchasing Category |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `WBSElementInternalID` | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `PurchaseOrderAmount` | `CURR(21)` | Purchase Order Net Amount |
| `AmtWithContractRefInDspCrcy` | `CURR(21)` | Amount with Contract Reference |
| `AmtWithoutContractRefInDspCrcy` | `CURR(21)` | Amount without Contract Reference |
| `NonContractPurchaseRatio` | `INT1(3)` |  |
| `NonContractPurchaseRateInPct` | `INT1(3)` |  |
