---
name: I_ETOPROJECTITEMCUBE
description: Engineer To Order Project Item - Cube
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ETOPROJECTITEMCUBE')/$value
semantic_en: Engineer To Order Project Item - Cube
tags:
  - CO
  - bo:project
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - order
  - project
  - metadata-only
---
# I_ETOPROJECTITEMCUBE

**Engineer To Order Project Item - Cube**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ETOPROJECTITEMCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `CurrencyField` | `CHAR(4)` | Currency Role Field |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `AssignedOrderNumber` | `CHAR(12)` | Standing order number |
| `ETOOrdCategory` | `CHAR(2)` | Order Category |
| `ServiceContractType` | `CHAR(4)` | Service Contract Type |
| `ServiceContract` | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` | `NUMC(6)` | Solution Order Item |
| `ProviderContract` | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` | `NUMC(6)` | Provider Contract Item |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `Project` | `CHAR(24)` | Project (external ID) |
| `ProjectInternalID` | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` | `CHAR(10)` | Origin Profit Center |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `OldGLAccount` | `CHAR(10)` | G/L Account |
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `Plant` | `CHAR(4)` | Plant |
| `Product` | `CHAR(40)` | Product |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `WBSElement` | `CHAR(24)` | WBS Element |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `OrderCategory` | `NUMC(2)` | Order Category |
| `OrderID` | `CHAR(12)` | Order ID |
| `OrderType` | `CHAR(4)` | Order Type |
| `BillingWBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `Supplier` | `CHAR(10)` | Supplier |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `ProjectManager` | `CHAR(10)` | Business Partner Number |
| `PostingDate` | `DATS(8)` | Posting Date |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `IsCommitment` | `CHAR(1)` | Indicator: Is Commitment |
| `Currency` | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` | `CURR(23)` | Amount in Display Currency |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `Quantity` | `QUAN(23)` | Quantity |
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `ValuationQuantity` | `QUAN(23)` | Valuation Quantity |
| `ControllingDebitCreditCode` | `CHAR(1)` | CO Debit/Credit Indicator |
