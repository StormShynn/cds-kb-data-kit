---
name: I_ASSETHISTORYSHEETCUBE
description: With this CDS view you can form the asset history sheet that shows value changes to the fixed asset balances in a fiscal year for a depreciation area. The asset history sheet enables you to document and explain the balances on fixed assets for every accounting principle, any local regulation, and for management purposes. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisitions, retirements, transfers, and depreciation. Certain key figure groups can be used to display key figures in a hierarchy. In contrast to the Asset History Sheet CDS view, in this Asset History Sheet Cube CDS view you can select multiple company codes, ledgers, and depreciation areas that have the same currency type. This CDS view provides the prerequisites for answering the following business questions: What are the balances at fiscal year start? What are the balances of the current year? What are the balances at the reporting date? What are the balances of my APC balance sheet accounts? What are the balances drilled down by the asset?
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETHISTORYSHEETCUBE')/$value
semantic_en: With this CDS view you can form the asset history sheet that shows value changes to the fixed asset balances in a fiscal year for a depreciation area. The asset history sheet enables you to document and explain the balances on fixed assets for every accounting principle, any local regulation, and for management purposes. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisitions, retirements, transfers, and depreciation. Certain key figure groups can be used to display key figures in a hierarchy. In contrast to the Asset History Sheet CDS view, in this Asset History Sheet Cube CDS view you can select multiple company codes, ledgers, and depreciation areas that have the same currency type. This CDS view provides the prerequisites for answering the following business questions: What are the balances at fiscal year start? What are the balances of the current year? What are the balances at the reporting date? What are the balances of my APC balance sheet accounts? What are the balances drilled down by the asset?
keywords:
  - Asset History Sheet - Cube
tags:
  - FI
  - account
  - bo:asset
  - component:FI-FIO-AA-ANA-2CL
  - document
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_ASSETHISTORYSHEETCUBE

**With this CDS view you can form the asset history sheet that shows value changes to the fixed asset balances in a fiscal year for a depreciation area. The asset history sheet enables you to document and explain the balances on fixed assets for every accounting principle, any local regulation, and for management purposes. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisitions, retirements, transfers, and depreciation. Certain key figure groups can be used to display key figures in a hierarchy. In contrast to the Asset History Sheet CDS view, in this Asset History Sheet Cube CDS view you can select multiple company codes, ledgers, and depreciation areas that have the same currency type. This CDS view provides the prerequisites for answering the following business questions: What are the balances at fiscal year start? What are the balances of the current year? What are the balances at the reporting date? What are the balances of my APC balance sheet accounts? What are the balances drilled down by the asset?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETHISTORYSHEETCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `AssetAccountingKeyFigure` |  | |  |  | `CHAR(10)` | Key Figure for Asset Accounting |
| `AssetAccountingKeyFigureSet` |  | |  |  | `CHAR(10)` | Key Figure Group |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `TransactionSubitem` |  | |  |  | `NUMC(6)` | Partial Document to be balanced to zero |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency Type |
| `KeyFigureIsZeroBalance` |  | |  |  | `CHAR(1)` | Boolean Variable (X = True, - = False, Space = Unknown) |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FiscalYearStartDate` |  | |  |  | `DATS(8)` | Start Date of Fiscal Year |
| `AssetAccountingSortedKeyFigure` |  | |  |  | `CHAR(17)` | Key Figure Box Number for Asset Accounting |
| `LedgerGroup` |  | |  |  | `CHAR(4)` | Target Ledger Group (Deprecated) |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `AcqnProdnCostGLAccount` |  | |  |  | `CHAR(10)` | Bal. Sheet Account: Acquisition and Production Costs |
| `GLAccount` |  | |  |  | `CHAR(10)` | General Ledger Account |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Financial Account Type |
| `AccountingDocumentCreationDate` |  | |  |  | `DATS(8)` | Journal Entry Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Journal Entry Creation Time |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `ChartOfDepreciation` |  | |  |  | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `FinancialClosingStep` |  | |  |  | `NUMC(3)` | Financial Closing Step |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerMasterFixedAsset` |  | |  |  | `CHAR(12)` | Partner Fixed Asset (Partner Main Asset Number) |
| `PartnerFixedAsset` |  | |  |  | `CHAR(4)` | Partner Asset Subnumber |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `FinancialStatementVariant` |  | |  |  | `CHAR(4)` | Financial Statement Version |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `SelectedCurrencyBranch` |  | |  |  | `CHAR(2)` | Selected Currency Branch |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `AssetAccountDetermination` |  | |  |  | `CHAR(8)` | Account Determination |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `AssetCapitalizationDate` |  | |  |  | `DATS(8)` | Asset Capitalization Date |
| `FirstAcquisitionFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year in Which First Acquisition Was Posted |
| `FirstAcquisitionFiscalPeriod` |  | |  |  | `NUMC(3)` | Period in Which First Acquisition Was Posted |
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
| `WBSElementInternalID_2` |  | |  |  | `NUMC(8)` | Asset WBS Element (Internal ID) |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element of Investment Project |
| `AssetAdditionalDescription` |  | |  |  | `CHAR(50)` | Additional Asset Description |
| `AssetAuthorizationContext` |  | |  |  | `CHAR(10)` | Asset Authorization Context |
| `AssetCostCenter` |  | |  |  | `CHAR(10)` | Asset Cost Center |
| `AssetWBSElementInternalID` |  | |  |  | `NUMC(8)` | Asset WBS Element (Internal ID) |
| `AssetBusinessArea` |  | |  |  | `CHAR(4)` | Asset Business Area |
| `AssetFund` |  | |  |  | `CHAR(10)` | Fund of Fixed Asset Master |
| `AssetProfitCenter` |  | |  |  | `CHAR(10)` | Asset Profit Center |
| `AssetSegment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `AssetPlant` |  | |  |  | `CHAR(4)` | Asset Plant |
| `AssetBudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period of a Fixed Asset |
| `AssetGrant` |  | |  |  | `CHAR(20)` | Grant of Fixed Asset Master |
| `AssetCostCtrActivityType` |  | |  |  | `CHAR(6)` | Asset Activity Type |
| `AssetPersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number of Fixed Asset Master |
| `AssetFunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area of Fixed Asset Master |
| `AssetLocation` |  | |  |  | `CHAR(10)` | Asset location |
| `REInternalFinNumber` |  | |  |  | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `RealEstateObject` |  | |  |  | `CHAR(8)` | Internal Key of Real Estate Object (Deprecated) |
| `AssetFundsCenter` |  | |  |  | `CHAR(16)` | Asset Funds Center |
| `Room` |  | |  |  | `CHAR(8)` | Room |
| `VehicleLicensePlateNumber` |  | |  |  | `CHAR(15)` | License Plate No. of Vehicle |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `InvestmentSupportMeasure` |  | |  |  | `CHAR(2)` | Investment Support Key |
| `DepreciationStartDate` |  | |  |  | `DATS(8)` | Depreciation Calculation Start Date |
| `SpecialDeprStartDate` |  | |  |  | `DATS(8)` | Start Date for Special Depreciation |
| `DepreciationKey` |  | |  |  | `CHAR(4)` | Depreciation Key |
| `DepreciationProfile` |  | |  |  | `CHAR(12)` | Depreciation Profile |
| `PlannedUsefulLifeInYears` |  | |  |  | `NUMC(3)` | Planned Useful Life in Years |
| `PlannedUsefulLifeInPeriods` |  | |  |  | `NUMC(3)` | Planned Useful Life in Periods |
| `OriglAstUsefulLifeInYears` |  | |  |  | `NUMC(3)` | Original Useful Life in Years |
| `OriglAstUsefulLifeInPerds` |  | |  |  | `NUMC(3)` | Original Useful Life in Periods |
| `DeprKeyChangeoverYear` |  | |  |  | `NUMC(4)` | Changeover Year of Depreciation Key |
| `DeprKeyChangeoverPeriod` |  | |  |  | `NUMC(3)` | Changeover Period of Depreciation Key |
| `VintageYear` |  | |  |  | `NUMC(4)` | Acquisition Year |
| `VintageMonth` |  | |  |  | `NUMC(3)` | Acquisition Month |
| `ReplacementValueIndexSers` |  | |  |  | `CHAR(5)` | Index Series for Replacement Values |
| `RplcmtValueAgingIndexSers` |  | |  |  | `CHAR(5)` | Age-Dependent Index Series |
| `FixedAssetUsageObject` |  | |  |  | `NUMC(12)` | Usage Object |
| `AssetRevaluationIndex` |  | |  |  | `CHAR(10)` | Asset Revaluation: Index ID |
| `NationalClassification` |  | |  |  | `CHAR(12)` | National Classification Code |
| `TaxDepreciationGroup` |  | |  |  | `CHAR(4)` | Tax Depreciation Group |
| `JP_PrptyTxRptCity` |  | |  |  | `CHAR(8)` | Japan: City Code of Property Tax Report |
| `JP_PrptyTxRptClassfctnKey` |  | |  |  | `CHAR(4)` | Japan: Classification Key of Property Tax Report |
| `RU_AssetOKOF` |  | |  |  | `CHAR(16)` | OKOF Code |
| `RU_AssetDepreciationGroup` |  | |  |  | `CHAR(4)` | Depreciation Group |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Investment WBS Element |
| `AssetWBSElementExternalID` |  | |  |  | `CHAR(24)` | Asset WBS Element |
