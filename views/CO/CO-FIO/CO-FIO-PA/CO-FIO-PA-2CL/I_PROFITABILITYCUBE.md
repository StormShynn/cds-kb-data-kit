---
name: I_PROFITABILITYCUBE
description: General Ledger Account Line Item of Profitability - Cube
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROFITABILITYCUBE')/$value
semantic_en: General Ledger Account Line Item of Profitability - Cube
keywords:
  - GL Account Line Item of Profitability - Cube
  - GL Account Line Item of Profitability - Cube
  - GL Account Line Item of Profitability - Cube
tags:
  - CO
  - account
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# I_PROFITABILITYCUBE

**General Ledger Account Line Item of Profitability - Cube**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROFITABILITYCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `OrderID` | `CHAR(12)` | Order ID |
| `OrderCategory` | `NUMC(2)` | Order Category |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `OrderType` | `CHAR(4)` | Order Type |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `Project` | `CHAR(24)` | Project |
| `WBSElement` | `CHAR(24)` | WBS Element |
| `ProjectNetwork` | `CHAR(12)` | Network Number for Account Assignment |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `Plant` | `CHAR(4)` | Plant |
| `LineIsSemTagCalculated` | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `BilledRevenueAmtInGlobCrcy` | `CURR(23)` | Actual Revenue |
| `SalesDeductionAmountInGlobCrcy` | `CURR(23)` | Sales Deduction |
| `RevenueAdjustAmtInGlobCrcy` | `CURR(23)` | Revenue Adjustment |
| `RecognizedRevnAmtInGlobCrcy` | `CURR(23)` | Recognized Revenue |
| `VarblCOGSAmtInGlobCrcy` | `CURR(23)` | Cost of Goods Sold - Variable |
| `ContrbnMargin1AmtInGlobCrcy` | `CURR(23)` | Contribution Margin I |
| `FxdCOGSAmtInGlobCrcy` | `CURR(23)` | Cost of Goods Sold - Fixed |
| `PriceDifferenceAmtInGlobCrcy` | `CURR(23)` | Price Differences |
| `ContrbnMargin2AmtInGlobCrcy` | `CURR(23)` | Contribution Margin II |
| `AdminOverheadAmtInGlobCrcy` | `CURR(23)` | Administration Overhead |
| `SalesOverheadAmtInGlobCrcy` | `CURR(23)` | Sales Overhead |
| `MarketingOverheadAmtInGlobCrcy` | `CURR(23)` | Marketing Overhead |
| `RnDOverheadAmtInGlobCrcy` | `CURR(23)` | Research and Development Overhead |
| `ContrbnMargin3AmtInGlobCrcy` | `CURR(23)` | Contribution Margin III |
| `InptPriceVarcAmtInGlobCrcy` | `CURR(23)` | Input Price Variance Amount in Global Currency |
| `OutpPriceVarcAmtInGlobCrcy` | `CURR(23)` | Output Price Variance Amount in Global Currency |
| `InptQtyVarcAmtInGlobCrcy` | `CURR(23)` | Input Quantity Variance Amount in Global Currency |
| `RsceUsgeVarcAmtInGlobCrcy` | `CURR(23)` | Resource Usage Variance Amount in Global Currency |
| `LotSizeVarcAmtInGlobCrcy` | `CURR(23)` | Lot Size Variance Amount in Global Currency |
| `InputRmngVarcAmtInGlobCrcy` | `CURR(23)` | Remaining Variance Amount in Global Currency |
| `BilledRevenueAmtInCoCodeCrcy` | `CURR(23)` | Billed Revenue Amount in Company Code Currency |
| `SalesDeductionAmtInCoCodeCrcy` | `CURR(23)` | Sales Deduction Amount in Company Code Currency |
| `RevenueAdjustmentAmtInCCCrcy` | `CURR(23)` | Revenue Adjustment Amount in Company Code Currency |
| `RecognizedRevnAmtInCCCrcy` | `CURR(23)` | Recognized Revenue Amount in Company Code Currency |
| `VarblCOGSAmtInCCCrcy` | `CURR(23)` | COGS  - Variable Amount in Company Code Currency |
| `ContrbnMargin1AmtInCoCodeCrcy` | `CURR(23)` | COGS - Contribution Margin 1 Amount in Company Code Currency |
| `FxdCOGSAmtInCCCrcy` | `CURR(23)` | COGS - Fixed Amount in Company Code Currency |
| `PriceDifferenceAmtInCCCrcy` | `CURR(23)` | COGS - Price Differences Amount in Company Code Currency |
| `ContrbnMargin2AmtInCoCodeCrcy` | `CURR(23)` | COGS - Contribution Margin 2 Amount in Company Code Currency |
| `AdminOverheadAmtInCoCodeCrcy` | `CURR(23)` | COGS - Administration Overhead Amt in Company Code Currency |
| `SalesOverheadAmtInCoCodeCrcy` | `CURR(23)` | COGS - Sales Overhead Amount in Company Code Currency |
| `MarketingOvhdAmtInCoCodeCrcy` | `CURR(23)` | COGS - Marketing Overhead Amount in Company Code Currency |
| `RnDOverheadAmtInCCCrcy` | `CURR(23)` | COGS - Research and Dev Overhead Amount in Company Code Crcy |
| `ContrbnMargin3AmtInCoCodeCrcy` | `CURR(23)` | COGS - Contribution Margin 3 Amount in Company Code Currency |
| `InptPriceVarcAmtInCoCodeCrcy` | `CURR(23)` | Input Price Variance Amount in Company Code Currency |
| `OutpPrVarcAmtInCoCodeCrcy` | `CURR(23)` | Output Price Variance Amount in Company Code Currency |
| `InptQtyVarcAmtInCoCodeCrcy` | `CURR(23)` | Input Quantity Variance Amount in Company Code Currency |
| `RsceUsgeVarcAmtInCoCodeCrcy` | `CURR(23)` | Resource Usage Variance Amount in Company Code Currency |
| `LotSizeVarcAmtInCoCodeCrcy` | `CURR(23)` | Lot Size Variance Amount in Company Code Currency |
| `InputRmngVarcAmtInCoCodeCrcy` | `CURR(23)` | Remaining Variance Amount in Company Code Currency |
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `BilledValnQtyInCostSourceUnit` | `QUAN(23)` | Billed Quantity |
| `Supplier` | `CHAR(10)` | Supplier |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `PostingDate` | `DATS(8)` | Posting Date |
