---
name: I_GLACCOUNTLINEITEMSTDVH
description: General Ledger Account Line Item
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMSTDVH')/$value
semantic_en: General Ledger Account Line Item
tags:
  - FI
  - account
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_GLACCOUNTLINEITEMSTDVH

**General Ledger Account Line Item**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTLINEITEMSTDVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `Customer` | `CHAR(10)` | Customer Number |
| `MasterFixedAsset` | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `Supplier` | `CHAR(10)` | Supplier |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `OrderType` | `CHAR(4)` | Order Type |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `Plant` | `CHAR(4)` | Plant |
| `SalesOrderType` | `CHAR(4)` | Sales Document Type |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `OrderID` | `CHAR(12)` | Order ID |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `PostingDate` | `DATS(8)` | Posting Date |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `OrderCategory` | `NUMC(2)` | Order Category |
