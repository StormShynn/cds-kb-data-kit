---
name: C_CNTRLCONTRCNSMPNQRY
description: Query view for central contract consumption
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNTRLCONTRCNSMPNQRY')/$value
semantic_en: Query view for central contract consumption
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
# C_CNTRLCONTRCNSMPNQRY

**Query view for central contract consumption**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNTRLCONTRCNSMPNQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralPurchaseContract` |  | |  |  | `CHAR(10)` | Central Purchase Contract |
| `CentralPurchaseContractItem` |  | |  |  | `NUMC(5)` | Central Purchase Contract Item |
| `DistributionKey` |  | |  |  | `NUMC(4)` | Distribution Number of Central Purchasing Document |
| `PurchaseContractType` |  | |  |  | `CHAR(4)` | Purchasing Document Type |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ProcmtHubPurchasingOrg` |  | |  |  | `CHAR(4)` | Connected Purchasing Organization |
| `ProcmtHubPurchasingGroup` |  | |  |  | `CHAR(3)` | Back-End Purchasing Group |
| `ProcmtHubPlant` |  | |  |  | `CHAR(4)` | Connected Plant |
| `ProcmtHubCompanyCode` |  | |  |  | `CHAR(4)` | Connected Company Code |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialName` |  | |  |  | `CHAR(40)` | Product Description |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialGroupName` |  | |  |  | `CHAR(20)` | Product Group Description |
| `PurchasingDocumentCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Start of Validity Period |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | End of Validity Period |
| `PurgDocChangeRequestStatus` |  | |  |  | `CHAR(2)` | Change Request Status |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TargetQuantity` |  | |  |  | `QUAN(13)` | Target Quantity |
| `TargetAmount` |  | |  |  | `CURR(21)` | Target Amount |
| `ReleaseOrderItemNetAmount` |  | |  |  | `CURR(15)` | Release Net Amount |
| `ReleaseOrderItemOrderQuantity` |  | |  |  | `QUAN(13)` | Release Order Quantity |
| `ContractConsumptionRatio` |  | |  |  | `INT1(3)` |  |
| `ContractConsumptionInPct` |  | |  |  | `INT1(3)` |  |
