---
name: C_COMPANYMARGINQUERY_2
description: Company Margin Template Query
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPANYMARGINQUERY_2')/$value
semantic_en: Company Margin Template Query
keywords:
  - Company Margin Template Query
tags:
  - CO
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# C_COMPANYMARGINQUERY_2

**Company Margin Template Query**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPANYMARGINQUERY_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `BillableControl` | `CHAR(2)` | Billable Control |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `SubLedgerAcctLineItemType` | `NUMC(5)` | Subledger-Specific Line Item Type |
| `Product` | `CHAR(40)` | Product |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerCompanyCode` | `CHAR(4)` | Partner Company Code |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `ProviderContract` | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` | `NUMC(6)` | Provider Contract Item |
| `BusinessSolutionOrder` | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` | `NUMC(6)` | Solution Order Item |
| `Plant` | `CHAR(4)` | Plant |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `CurrencyField` | `CHAR(4)` | Currency Role Field |
| `Currency` | `CUKY(5)` | Currency Key |
| `NetRevenueAmountInDspCrcy` | `CURR(23)` | Net Revenue in Display Currency |
| `RevenueAmountInDisplayCrcy` | `CURR(23)` | Revenue Amount in Display Currency |
| `BilledRevenueAmtInDspCrcy` | `CURR(23)` | Actual Revenue |
| `RevenueAdjustmentAmtInDspCrcy` | `CURR(23)` | Net Revenue in Display Currency |
| `SalesDeductionAmountInDspCrcy` | `CURR(23)` | Sales Deduction |
| `VarblCOGSAmtInDspCrcy` | `CURR(23)` | Cost of Goods Sold - Total |
| `ContrbnMargin1AmtInDspCrcy` | `CURR(23)` | Contribution Margin I |
| `VarblMaterialCostInDspCrcy` | `CURR(23)` | Variable Material Cost In Company Code Currency |
| `VarblActivityCostInDspCrcy` | `CURR(23)` | Variable Material Cost In Company Code Currency |
| `VarblPersonnelTmeCostInDspCrcy` | `CURR(23)` | Variable Personnel Time Cost in Display Currency |
| `VarblMachineTimeCostInDspCrcy` | `CURR(23)` | Variable Machine Time Cost in Company Code Currency |
| `VarblOverheadCostInDspCrcy` | `CURR(23)` | Variable Overhead Cost in Display Currency |
| `TravelCostAmountInDspCurrency` | `CURR(23)` | Travel Cost Amount in Display Currency |
| `PurchasedMaterialCostInDspCrcy` | `CURR(23)` | Purchased Material Cost in Display Currency |
| `VarblOtherCostInDspCrcy` | `CURR(23)` | Variable Other Cost in Display Currency |
| `FxdCOGSAmtInDspCrcy` | `CURR(23)` | COGS - Fixed Amount in Display Currency |
| `FixedMaterialCostInDspCrcy` | `CURR(23)` | Fixed Material Cost In Display Currency |
| `FixedActivityCostInDspCrcy` | `CURR(23)` | Fixed Activity Cost in Display Currency |
| `FxdPersCostsAmtInDspCurrency` | `CURR(23)` | Fixed Personnel Time Cost in Display Currency |
| `FxdMchnTmeAmtInDisplayCurrency` | `CURR(23)` | Fixed Machine Time Cost in Display Currency |
| `FixedOverheadCostInDspCrcy` | `CURR(23)` | Fixed Overhead Cost in Display Currency |
| `FixedOtherCostInDspCrcy` | `CURR(23)` | Fixed Other Cost In Display Currency |
| `PriceDiffAmtInDisplayCrcy` | `CURR(23)` | COGS - Price Differences Amount in Display Currency |
| `InptPrVarcAmtInDspCrcy` | `CURR(23)` | Input Price Variance in Display Currency |
| `InptQtyVarcAmtInDspCrcy` | `CURR(23)` | Input Quantity Variance |
| `RsceUsgeVarcAmtInDspCrcy` | `CURR(23)` | Resource Usage Variance |
| `LotSizeVarcAmtInDspCrcy` | `CURR(23)` | Lot Size Variance |
| `OutpPrVarcAmtInDspCrcy` | `CURR(23)` | Output Price Variance |
| `InptRmngVarcAmtInDspCrcy` | `CURR(23)` | Remaining Input Variance |
| `WarrantyCostInDspCrcy` | `CURR(23)` | Warranty Cost in Display Currency |
| `ContrbnMargin2AmtInDspCrcy` | `CURR(23)` | Contribution Margin II |
| `PeriodicCostAmtInDspCrcy` | `CURR(23)` | Periodic Cost in Display Currency |
| `MarketingOvhdAmtInDspCrcy` | `CURR(23)` | Marketing Overhead |
| `SalesOverheadAmtInDspCrcy` | `CURR(23)` | Sales Overhead |
| `AdminOverheadAmtInDspCrcy` | `CURR(23)` | Administration Overhead |
| `RnDOverheadAmtInDspCrcy` | `CURR(23)` | COGS - Research and Dev Overhead Amount |
| `ContrbnMargin3AmtInDspCrcy` | `CURR(23)` | Contribution Margin III |
| `BilledValnQtyInCostSourceUnit` | `DEC(23)` |  |
