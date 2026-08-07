---
name: C_ASSETBALANCE
description: With this view, you can form balances of various dimensions of the fixed asset and the journal entry including the most important business entities, such as company code, depreciation area, segment, APC balance sheet account or profit center. The report enables you to understand the net book value of fixed assets derived from acquisition and production costs (APC) and depreciation. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisition and production cost, cumulative depreciation and netbook value at reporting date This CDS view provides the prerequisites for answering the following business questions: What are my acquisition and production costs (APC) at the reporting date? What is my planned accumulated depreciation for each depreciation type at the reporting date? What Is my accumulated depreciation for each depreciation type posted in the general ledger at the reporting date? What is my net book value at the reporting date? What are the balances drilled down by the asset?
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ASSETBALANCE')/$value
semantic_en: With this view, you can form balances of various dimensions of the fixed asset and the journal entry including the most important business entities, such as company code, depreciation area, segment, APC balance sheet account or profit center. The report enables you to understand the net book value of fixed assets derived from acquisition and production costs (APC) and depreciation. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisition and production cost, cumulative depreciation and netbook value at reporting date This CDS view provides the prerequisites for answering the following business questions: What are my acquisition and production costs (APC) at the reporting date? What is my planned accumulated depreciation for each depreciation type at the reporting date? What Is my accumulated depreciation for each depreciation type posted in the general ledger at the reporting date? What is my net book value at the reporting date? What are the balances drilled down by the asset?
keywords:
  - Asset Balances
tags:
  - FI
  - account
  - bo:asset
  - component:FI-FIO-AA-ANA-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - lob:finance
  - plan
  - product
  - metadata-only
---
# C_ASSETBALANCE

**With this view, you can form balances of various dimensions of the fixed asset and the journal entry including the most important business entities, such as company code, depreciation area, segment, APC balance sheet account or profit center. The report enables you to understand the net book value of fixed assets derived from acquisition and production costs (APC) and depreciation. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisition and production cost, cumulative depreciation and netbook value at reporting date This CDS view provides the prerequisites for answering the following business questions: What are my acquisition and production costs (APC) at the reporting date? What is my planned accumulated depreciation for each depreciation type at the reporting date? What Is my accumulated depreciation for each depreciation type posted in the general ledger at the reporting date? What is my net book value at the reporting date? What are the balances drilled down by the asset?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ASSETBALANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetAccountDetermination` |  | |  |  | `CHAR(8)` | Account Determination |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `AssetAccountingKeyFigure` |  | |  |  | `CHAR(17)` | Key Figure Box Number for Asset Accounting |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Balance Amount |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `AcqnProdnCostGLAccount` |  | |  |  | `CHAR(10)` | Bal. Sheet Account: Acquisition and Production Costs |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `LedgerGroup` |  | |  |  | `CHAR(4)` | Target Ledger Group (Deprecated) |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `ChartOfDepreciation` |  | |  |  | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FinancialStatementVariant` |  | |  |  | `CHAR(4)` | Financial Statement Version |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `AssetPlant` |  | |  |  | `CHAR(4)` | Asset Plant |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `AssetPersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number of Fixed Asset Master |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `FinancialClosingStep` |  | |  |  | `NUMC(3)` | Financial Closing Step |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Financial Account Type |
| `AccountingDocumentCreationDate` |  | |  |  | `DATS(8)` | Journal Entry Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Journal Entry Creation Time |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `GLAccount` |  | |  |  | `CHAR(10)` | General Ledger Account |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `AssetBusinessArea` |  | |  |  | `CHAR(4)` | Asset Business Area |
| `AssetCostCenter` |  | |  |  | `CHAR(10)` | Asset Cost Center |
| `AssetWBSElementExternalID` |  | |  |  | `CHAR(24)` | Asset WBS Element |
| `AssetProfitCenter` |  | |  |  | `CHAR(10)` | Asset Profit Center |
| `AssetSegment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `AssetFunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area of Fixed Asset Master |
| `AssetBudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period of a Fixed Asset |
| `AssetGrant` |  | |  |  | `CHAR(20)` | Grant of Fixed Asset Master |
| `AssetFund` |  | |  |  | `CHAR(10)` | Fund of Fixed Asset Master |
| `AssetLocation` |  | |  |  | `CHAR(10)` | Asset location |
| `AssetFundsCenter` |  | |  |  | `CHAR(16)` | Asset Funds Center |
| `REInternalFinNumber` |  | |  |  | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `RealEstateObject` |  | |  |  | `CHAR(8)` | Internal Key of Real Estate Object (Deprecated) |
| `AssetCostCtrActivityType` |  | |  |  | `CHAR(6)` | Asset Activity Type |
| `FirstAcquisitionFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year in Which First Acquisition Was Posted |
| `FirstAcquisitionFiscalPeriod` |  | |  |  | `NUMC(3)` | Period in Which First Acquisition Was Posted |
| `AssetCapitalizationDate` |  | |  |  | `DATS(8)` | Asset Capitalization Date |
| `AssetDeactivationDate` |  | |  |  | `DATS(8)` | Deactivation Date |
| `FixedAssetGroup` |  | |  |  | `CHAR(12)` | Asset Super Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier (Other Key Word) |
| `AssetSupplierName` |  | |  |  | `CHAR(30)` | Name of Asset Supplier |
| `InvestmentOrder` |  | |  |  | `CHAR(12)` | Investment Order |
| `InventoryIsCounted` |  | |  |  | `CHAR(1)` | Inventory Indicator |
| `LastInventoryDate` |  | |  |  | `DATS(8)` | Last Inventory Date |
| `Inventory` |  | |  |  | `CHAR(25)` | Inventory Number |
| `Group1AssetEvaluationKey` |  | |  |  | `CHAR(4)` | Evaluation Group 1 |
| `Group2AssetEvaluationKey` |  | |  |  | `CHAR(4)` | Evaluation Group 2 |
| `Group3AssetEvaluationKey` |  | |  |  | `CHAR(4)` | Evaluation Group 3 |
| `Group4AssetEvaluationKey` |  | |  |  | `CHAR(4)` | Evaluation Group 4 |
| `Group5AssetEvaluationKey` |  | |  |  | `CHAR(8)` | Evaluation Group 5 |
| `AssetSerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `InvestmentSupportMeasure` |  | |  |  | `CHAR(2)` | Investment Support Key |
| `DepreciationStartDate` |  | |  |  | `DATS(8)` | Depreciation Calculation Start Date |
| `SpecialDeprStartDate` |  | |  |  | `DATS(8)` | Start Date for Special Depreciation |
| `DepreciationKey` |  | |  |  | `CHAR(4)` | Depreciation Key |
| `PlannedUsefulLifeInYears` |  | |  |  | `NUMC(3)` | Planned Useful Life in Years |
| `PlannedUsefulLifeInPeriods` |  | |  |  | `NUMC(3)` | Planned Useful Life in Periods |
| `FixedAssetUsageObject` |  | |  |  | `NUMC(12)` | Usage Object |
| `AssetRevaluationIndex` |  | |  |  | `CHAR(10)` | Asset Revaluation: Index ID |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `NationalClassification` |  | |  |  | `CHAR(12)` | National Classification Code |
| `TaxDepreciationGroup` |  | |  |  | `CHAR(4)` | Tax Depreciation Group |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `Room` |  | |  |  | `CHAR(8)` | Room |
| `VehicleLicensePlateNumber` |  | |  |  | `CHAR(15)` | License Plate No. of Vehicle |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Investment WBS Element |
| `RU_AssetOKOF` |  | |  |  | `CHAR(16)` | OKOF Code |
| `RU_AssetDepreciationGroup` |  | |  |  | `CHAR(4)` | Depreciation Group |
| `JP_PrptyTxRptCity` |  | |  |  | `CHAR(8)` | Japan: City Code of Property Tax Report |
| `JP_PrptyTxRptClassfctnKey` |  | |  |  | `CHAR(4)` | Japan: Classification Key of Property Tax Report |
| `AssetAdditionalDescription` |  | |  |  | `CHAR(50)` | Additional Asset Description |
