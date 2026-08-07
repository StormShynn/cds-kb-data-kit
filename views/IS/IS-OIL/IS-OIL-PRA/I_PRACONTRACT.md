---
name: I_PRACONTRACT
description: Production Revenue Accounting Contract
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACT')/$value
semantic_en: Production Revenue Accounting Contract
tags:
  - IS
  - account
  - bo:material
  - component:IS-OIL-PRA
  - contract
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
  - metadata-only
---
# I_PRACONTRACT

**Production Revenue Accounting Contract**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACONTRACT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PRAContract` |  | |  |  | `CHAR(10)` | Contract Number |
| `PRAContractDesc` |  | |  |  | `CHAR(40)` | Contract Description |
| `PRAContractDate` |  | |  |  | `DATS(8)` | Document Date (Date Received/Sent) |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PRAContractType` |  | |  |  | `CHAR(2)` | Contract Type |
| `IsApproved` |  | |  |  | `CHAR(1)` | Approval indicator |
| `PreviousPRAContract` |  | |  |  | `CHAR(10)` | Old / Previous Contract Number |
| `CustomerOrSupplierType` |  | |  |  | `CHAR(1)` | Customer/Vendor Indicator |
| `MarketingRep` |  | |  |  | `CHAR(10)` | Marketing Representative No |
| `MarketingRepIntrstSequNmbr` |  | |  |  | `CHAR(2)` | Marketing Representative Interest Sequence No |
| `MarketingRepName` |  | |  |  | `CHAR(35)` | Marketing Representative Name |
| `MarketingRepCustomer` |  | |  |  | `CHAR(10)` | Marketing Representative Customer |
| `MarketingRepSupplier` |  | |  |  | `CHAR(10)` | Marketing Representative Supplier |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Creation Time |
