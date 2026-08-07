---
name: C_NONMNGDPURGSPEND
description: Non Managed Purchasing Spend
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_NONMNGDPURGSPEND')/$value
semantic_en: Non Managed Purchasing Spend
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
# C_NONMNGDPURGSPEND

**Non Managed Purchasing Spend**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_NONMNGDPURGSPEND')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Accounting Document Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `WBSElement` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountName` |  | |  |  | `CHAR(20)` | G/L Account Name |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterDescription` |  | |  |  | `CHAR(40)` | Description of Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialName` |  | |  |  | `CHAR(40)` | Product Description |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialGroupName` |  | |  |  | `CHAR(20)` | Product Group Description |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `TotalSpendAmount` |  | |  |  | `CURR(24)` | Total Spend Amount |
| `NonManagedSpendAmount` |  | |  |  | `CURR(24)` | Non Managed Spend Amount in Display Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NonManagedSpendInPct` |  | |  |  | `DEC(13)` |  |
| `NonManagedSpendRatio` |  | |  |  | `DEC(13)` |  |
