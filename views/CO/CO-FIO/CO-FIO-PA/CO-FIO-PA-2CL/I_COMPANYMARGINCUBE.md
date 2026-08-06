---
name: I_COMPANYMARGINCUBE
description: Company Margin - Cube
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYMARGINCUBE')/$value
semantic_en: Company Margin - Cube
keywords:
  - Company Margin - Cube
tags:
  - CO
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# I_COMPANYMARGINCUBE

**Company Margin - Cube**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYMARGINCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | `DATS(8)` | Valid To Date |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `BusinessSolutionOrder` | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` | `NUMC(6)` | Solution Order Item |
| `ProviderContract` | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` | `NUMC(6)` | Provider Contract Item |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `Product` | `CHAR(40)` | Product |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `Quantity` | `QUAN(23)` | Quantity |
| `BillableControl` | `CHAR(2)` | Billable Control |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `Equipment` | `CHAR(18)` | Equipment Number |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerCompanyCode` | `CHAR(4)` | Partner Company Code |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `Plant` | `CHAR(4)` | Plant |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `WBSElement` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ServicesRenderedDate` | `DATS(8)` | Date on which services are rendered |
| `TimeSheetOvertimeCategory` | `CHAR(4)` | Overtime Category |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `OrderID` | `CHAR(12)` | Order ID |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `Supplier` | `CHAR(10)` | Supplier |
| `PostingDate` | `DATS(8)` | Posting Date |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `AccountingDocCreatedByUser` | `CHAR(12)` | User that created the journal entry |
| `SubLedgerAcctLineItemType` | `NUMC(5)` | Subledger-Specific Line Item Type |
| `CurrencyField` | `CHAR(4)` | Currency Role Field |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `VariableAmountInCoCodeCrcy` | `CURR(23)` | Inverted Amount in Company Code Currency |
| `InvertedAmtInCoCodeCurrency` | `CURR(23)` | Inverted Amount in Company Code Currency |
| `InvertedFixedAmtInCoCodeCrcy` | `CURR(23)` | Fixed Amount in Company Currency |
| `InvertedVarblAmtInCoCodeCrcy` | `CURR(23)` | Inverted Amount in Company Code Currency |
