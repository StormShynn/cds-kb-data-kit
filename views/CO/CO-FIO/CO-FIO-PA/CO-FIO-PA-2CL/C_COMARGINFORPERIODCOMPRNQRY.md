---
name: C_COMARGINFORPERIODCOMPRNQRY
description: Company Margin Comparison Query Template
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMARGINFORPERIODCOMPRNQRY')/$value
semantic_en: Company Margin Comparison Query Template
keywords:
  - Company Margin Comparison Query Template
tags:
  - CO
  - bo:salesorder
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# C_COMARGINFORPERIODCOMPRNQRY

**Company Margin Comparison Query Template**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMARGINFORPERIODCOMPRNQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
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
| `RatioUnit` | `UNIT(3)` |  |
| `CurrentFiscalYearValue` | `DEC(23)` |  |
| `PrevFiscalYearValue` | `DEC(23)` |  |
| `CurrentFYPeriodValue` | `DEC(23)` |  |
| `PreviousFYPeriodValue` | `DEC(23)` |  |
| `DeltaCurPrevFYPeriodValue` | `DEC(23)` |  |
| `DeltaCurPrevFYPeriodRatio` | `DECF(34)` |  |
| `CurrentFYYearToDateValue` | `DEC(23)` |  |
| `PreviousFYYearToDateValue` | `DEC(23)` |  |
| `DeltaCurYTDPrevYTDValue` | `DEC(23)` |  |
| `DeltaCurYTDPrevYTDRatio` | `DECF(34)` |  |
| `CurrentFiscalQuarterValue` | `DEC(23)` |  |
| `PrevFiscalQuarterValue` | `DEC(23)` |  |
| `DeltaCurPrevFiscalQtrValue` | `DEC(23)` |  |
| `DeltaCurPrevFiscalQtrRatio` | `DECF(34)` |  |
| `PrevYearCurrentFYQuarterValue` | `DEC(23)` |  |
| `DeltaCurPrevFYQuarterValue` | `DEC(23)` |  |
| `DeltaCurPrevFYQuarterRatio` | `DECF(34)` |  |
| `CurrencyField` | `CHAR(4)` | Currency Role Field |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `NetRevenueAmountInCoCodeCrcy` | `CURR(23)` | Net Revenue in Company Code Currency |
| `RevenueAmountInCompanyCodeCrcy` | `CURR(23)` | Net Revenue in Company Code Currency |
| `BilledRevenueAmtInCoCodeCrcy` | `CURR(23)` | Actual Revenue |
| `RevenueAdjustmentAmtInCCCrcy` | `CURR(23)` | Net Revenue in Company Code Currency |
| `SalesDeductionAmtInCoCodeCrcy` | `CURR(23)` | Sales Deduction |
| `VarblCOGSAmtInCCCrcy` | `CURR(23)` | Cost of Goods Sold - Total |
| `ContrbnMargin1AmtInCoCodeCrcy` | `CURR(23)` | Contribution Margin I |
| `VarblMaterialCostInCoCodeCrcy` | `CURR(23)` | Variable Material Cost In Company Code Currency |
| `VarblActivityCostInCoCodeCrcy` | `CURR(23)` | Variable Activity Cost in Company Code Currency |
| `VarblPersonnelTimeCostInCCCrcy` | `CURR(23)` | Variable Personnel Time Cost in Company Code Currency |
| `VarblMachineTimeCostInCCCrcy` | `CURR(23)` | Variable Machine Time Cost in Company Code Currency |
| `VarblOverheadCostInCCCrcy` | `CURR(23)` | Variable Overhead Cost in Company Code Currency |
| `TravelCostInCoCodeCrcy` | `CURR(23)` | Travel Cost Amount in Company Code Currency |
| `PurchasedMaterialCostInCCCrcy` | `CURR(23)` | Purchased Material Cost in Company Code Currency |
| `VarblOtherCostInCoCodeCrcy` | `CURR(23)` | Variable Other Cost in Company Code Currency |
| `FxdCOGSAmtInCCCrcy` | `CURR(23)` | COGS - Fixed Amount in Company Code Currency |
| `FixedMaterialCostInCoCodeCrcy` | `CURR(23)` | Fixed Material Cost In Company Code Currency |
| `FixedActivityCostInCoCodeCrcy` | `CURR(23)` | Fixed Activity Cost in Company Code Currency |
| `FxdPersonnelTimeCostInCCCrcy` | `CURR(23)` | Fixed Personnel Time Cost in Company Code Currency |
| `FxdMachineTimeCostInCCCrcy` | `CURR(23)` | Fixed Machine Time Cost in Company Code Currency |
| `FixedOverheadCostInCCCrcy` | `CURR(23)` | Fixed Overhead Cost in Company Code Currency |
| `FixedOtherCostInCoCodeCrcy` | `CURR(23)` | Fixed Other Cost In Company Code Currency |
| `PriceDifferenceAmtInCCCrcy` | `CURR(23)` | COGS - Price Differences Amount in Company Code Currency |
| `InptPriceVarcAmtInCoCodeCrcy` | `CURR(23)` | Input Price Variance Amount In Company Code Currency |
| `InptQtyVarcAmtInCoCodeCrcy` | `CURR(23)` | Input Quantity Variance Amount In Company Code Currency |
| `RsceUsgeVarcAmtInCoCodeCrcy` | `CURR(23)` | Resource Usage Variance Amount In Company Code Currency |
| `LotSizeVarcAmtInCoCodeCrcy` | `CURR(23)` | Lot Size  Variance Amount In Company Code Currency |
| `OutpPrVarcAmtInCoCodeCrcy` | `CURR(23)` | Output Price  Variance Amount In Company Code Currency |
| `InputRmngVarcAmtInCoCodeCrcy` | `CURR(23)` | Input Remaining  Variance Amount In Company Code Currency |
| `WarrantyCostInCoCodeCrcy` | `CURR(23)` | Warranty Cost in Company Code Currency |
| `ContrbnMargin2AmtInCoCodeCrcy` | `CURR(23)` | Contribution Margin II |
| `PeriodicCostInCoCodeCrcy` | `CURR(23)` | Periodic Cost in Company Code Currency |
| `MarketingOvhdAmtInCoCodeCrcy` | `CURR(23)` | Marketing Overhead |
| `SalesOverheadAmtInCoCodeCrcy` | `CURR(23)` | Sales Overhead |
| `AdminOverheadAmtInCoCodeCrcy` | `CURR(23)` | Administration Overhead |
| `RnDOverheadAmtInCCCrcy` | `CURR(23)` | COGS - Research and Dev Overhead Amount in Company Code Crcy |
| `ContrbnMargin3AmtInCoCodeCrcy` | `CURR(23)` | Contribution Margin III |
