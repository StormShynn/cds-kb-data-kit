---
name: I_ASSETHISTORYSHEETCUBE
description: With this CDS view you can form the asset history sheet that shows value changes to the fixed asset balances in a fiscal year for a depreciation area. The asset history sheet enables you to document and explain the balances on fixed assets for every accounting principle, any local regulation, and for management purposes. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisitions, retirements, transfers, and depreciation. Certain key figure groups can be used to display key figures in a hierarchy. In contrast to the Asset History Sheet CDS view, in this Asset History Sheet Cube CDS view you can select multiple company codes, ledgers, and depreciation areas that have the same currency type. This CDS view provides the prerequisites for answering the following business questions: What are the balances at fiscal year start? What are the balances of the current year? What are the balances at the reporting date? What are the balances of my APC balance sheet accounts? What are the balances drilled down by the asset?
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETHISTORYSHEETCUBE')/$value
semantic_en: With this CDS view you can form the asset history sheet that shows value changes to the fixed asset balances in a fiscal year for a depreciation area. The asset history sheet enables you to document and explain the balances on fixed assets for every accounting principle, any local regulation, and for management purposes. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisitions, retirements, transfers, and depreciation. Certain key figure groups can be used to display key figures in a hierarchy. In contrast to the Asset History Sheet CDS view, in this Asset History Sheet Cube CDS view you can select multiple company codes, ledgers, and depreciation areas that have the same currency type. This CDS view provides the prerequisites for answering the following business questions: What are the balances at fiscal year start? What are the balances of the current year? What are the balances at the reporting date? What are the balances of my APC balance sheet accounts? What are the balances drilled down by the asset?
semantic_vi: Asset History Sheet - Cube — CDS view giao diện dựa trên P_AssetHistorySheetCube1.
keywords:
  - Asset History Sheet - Cube
  - asset
  - history
  - sheet
  - cube
  - company
  - code
  - depreciation
  - area
  - master
  - fixed
  - ledger
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
---
# I_ASSETHISTORYSHEETCUBE

**With this CDS view you can form the asset history sheet that shows value changes to the fixed asset balances in a fiscal year for a depreciation area. The asset history sheet enables you to document and explain the balances on fixed assets for every accounting principle, any local regulation, and for management purposes. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisitions, retirements, transfers, and depreciation. Certain key figure groups can be used to display key figures in a hierarchy. In contrast to the Asset History Sheet CDS view, in this Asset History Sheet Cube CDS view you can select multiple company codes, ledgers, and depreciation areas that have the same currency type. This CDS view provides the prerequisites for answering the following business questions: What are the balances at fiscal year start? What are the balances of the current year? What are the balances at the reporting date? What are the balances of my APC balance sheet accounts? What are the balances drilled down by the asset?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETHISTORYSHEETCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `AssetDepreciationArea` | ✓ | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` | ✓ | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` | ✓ | |  |  | `CHAR(4)` | Asset Subnumber |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Fiscal Period |
| `SubLedgerAcctLineItemType` | ✓ | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AssetAcctTransClassfctn` | ✓ | |  |  | `CHAR(2)` | Transaction Type Category |
| `AssetAccountingKeyFigure` | ✓ | |  |  | `CHAR(10)` | Key Figure for Asset Accounting |
| `AssetAccountingKeyFigureSet` | ✓ | |  |  | `CHAR(10)` | Key Figure Group |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `TransactionSubitem` | ✓ | |  |  | `NUMC(6)` | Partial Document to be balanced to zero |
| `DebitCreditCode` | ✓ | |  |  | `CHAR(1)` | Debit/Credit Code |
| `CurrencyRole` | ✓ | |  |  | `CHAR(2)` | Currency Type |
| `KeyFigureIsZeroBalance` | ✓ | |  |  | `CHAR(1)` | Boolean Variable (X = True, - = False, Space = Unknown) |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FiscalYearStartDate` |  | | `_FiscalYear` | `FiscalYearStartDate` | `DATS(8)` | Start Date of Fiscal Year |
| `AssetAccountingSortedKeyFigure` |  | |  |  | `CHAR(17)` | Key Figure Box Number for Asset Accounting |
| `LedgerGroup` |  | |  |  | `CHAR(4)` | Target Ledger Group (Deprecated) |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `AcqnProdnCostGLAccount` |  | | `_BalanceSheetAccount` | `AcqnProdnCostGLAccount` | `CHAR(10)` | Bal. Sheet Account: Acquisition and Production Costs |
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
| `AssetCapitalizationDate` |  | | `_FixedAssetForLedger` | `AssetCapitalizationDate` | `DATS(8)` | Asset Capitalization Date |
| `FirstAcquisitionFiscalYear` |  | | `_FixedAssetForLedger` | `FirstAcquisitionFiscalYear` | `NUMC(4)` | Fiscal Year in Which First Acquisition Was Posted |
| `FirstAcquisitionFiscalPeriod` |  | | `_FixedAssetForLedger` | `FirstAcquisitionFiscalPeriod` | `NUMC(3)` | Period in Which First Acquisition Was Posted |
| `AssetDeactivationDate` |  | | `_FixedAssetForLedger` | `AssetDeactivationDate` | `DATS(8)` | Deactivation Date |
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
| `WBSElementInternalID_2` |  | |  | `InvestmentProjectWBSElement_2` | `NUMC(8)` | Asset WBS Element (Internal ID) |
| `WBSElementInternalID` |  | |  | `InvestmentProjectWBSElement` | `NUMC(8)` | WBS Element of Investment Project |
| `AssetAdditionalDescription` |  | |  | `cast(FixedAsset.AssetAdditionalDescription as fis_txa50_more)` | `CHAR(50)` | Additional Asset Description |
| `AssetAuthorizationContext` |  | |  |  | `CHAR(10)` | Asset Authorization Context |
| `AssetCostCenter` |  | |  | `cast(_FixedAssetAssgmt.CostCenter as faa_kostl)` | `CHAR(10)` | Asset Cost Center |
| `AssetWBSElementInternalID` |  | |  | `cast(_FixedAssetAssgmt.WBSElementInternalID_2 as faa_wbs_element_int )` | `NUMC(8)` | Asset WBS Element (Internal ID) |
| `AssetBusinessArea` |  | |  | `cast(_FixedAssetAssgmt.BusinessArea as faa_gsber)` | `CHAR(4)` | Asset Business Area |
| `AssetFund` |  | |  | `cast(_FixedAssetAssgmt.Fund as faa_bp_geber)` | `CHAR(10)` | Fund of Fixed Asset Master |
| `AssetProfitCenter` |  | |  | `cast(_FixedAssetAssgmt.ProfitCenter as faa_prctr)` | `CHAR(10)` | Asset Profit Center |
| `AssetSegment` |  | |  | `cast(_FixedAssetAssgmt.Segment as faa_fb_segment)` | `CHAR(10)` | Segment for Segmental Reporting |
| `AssetPlant` |  | |  | `cast(_FixedAssetAssgmt.Plant as faa_werks)` | `CHAR(4)` | Asset Plant |
| `AssetBudgetPeriod` |  | |  | `cast(_FixedAssetAssgmt.BudgetPeriod as faa_budget_period)` | `CHAR(10)` | Budget Period of a Fixed Asset |
| `AssetGrant` |  | |  | `cast(_FixedAssetAssgmt.GrantID as faa_gm_grant_nbr)` | `CHAR(20)` | Grant of Fixed Asset Master |
| `AssetCostCtrActivityType` |  | |  | `cast(_FixedAssetAssgmt.CostCtrActivityType as faa_lstar)` | `CHAR(6)` | Asset Activity Type |
| `AssetPersonnelNumber` |  | |  | `cast(_FixedAssetAssgmt.PersonnelNumber as faa_pernr_d)` | `NUMC(8)` | Personnel Number of Fixed Asset Master |
| `AssetFunctionalArea` |  | |  | `cast(_FixedAssetAssgmt.FunctionalArea as faa_fkber)` | `CHAR(16)` | Functional Area of Fixed Asset Master |
| `AssetLocation` |  | | `_FixedAssetAssgmt` | `AssetLocation` | `CHAR(10)` | Asset location |
| `REInternalFinNumber` |  | | `_FixedAssetAssgmt` | `REInternalFinNumber` | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `RealEstateObject` |  | | `_FixedAssetAssgmt` | `RealEstateObject` | `CHAR(8)` | Internal Key of Real Estate Object (Deprecated) |
| `AssetFundsCenter` |  | |  | `cast(_FixedAssetAssgmt.FundsCenter as faa_fistl)` | `CHAR(16)` | Asset Funds Center |
| `Room` |  | | `_FixedAssetAssgmt` | `Room` | `CHAR(8)` | Room |
| `VehicleLicensePlateNumber` |  | | `_FixedAssetAssgmt` | `VehicleLicensePlateNumber` | `CHAR(15)` | License Plate No. of Vehicle |
| `TaxJurisdiction` |  | | `_FixedAssetAssgmt` | `TaxJurisdiction` | `CHAR(15)` | Tax Jurisdiction |
| `InvestmentSupportMeasure` |  | | `_AssetValuationForLedger` | `InvestmentSupportMeasure` | `CHAR(2)` | Investment Support Key |
| `DepreciationStartDate` |  | | `_AssetValuationForLedger` | `DepreciationStartDate` | `DATS(8)` | Depreciation Calculation Start Date |
| `SpecialDeprStartDate` |  | | `_AssetValuationForLedger` | `SpecialDeprStartDate` | `DATS(8)` | Start Date for Special Depreciation |
| `DepreciationKey` |  | | `_AssetValuationForLedger` | `DepreciationKey` | `CHAR(4)` | Depreciation Key |
| `PlannedUsefulLifeInYears` |  | | `_AssetValuationForLedger` | `PlannedUsefulLifeInYears` | `NUMC(3)` | Planned Useful Life in Years |
| `PlannedUsefulLifeInPeriods` |  | | `_AssetValuationForLedger` | `PlannedUsefulLifeInPeriods` | `NUMC(3)` | Planned Useful Life in Periods |
| `OriglAstUsefulLifeInYears` |  | | `_AssetValuationForLedger` | `OriglAstUsefulLifeInYears` | `NUMC(3)` | Original Useful Life in Years |
| `OriglAstUsefulLifeInPerds` |  | | `_AssetValuationForLedger` | `OriglAstUsefulLifeInPerds` | `NUMC(3)` | Original Useful Life in Periods |
| `DeprKeyChangeoverYear` |  | | `_AssetValuationForLedger` | `DeprKeyChangeoverYear` | `NUMC(4)` | Changeover Year of Depreciation Key |
| `DeprKeyChangeoverPeriod` |  | | `_AssetValuationForLedger` | `DeprKeyChangeoverPeriod` | `NUMC(3)` | Changeover Period of Depreciation Key |
| `VintageYear` |  | | `_AssetValuationForLedger` | `VintageYear` | `NUMC(4)` | Acquisition Year |
| `VintageMonth` |  | | `_AssetValuationForLedger` | `VintageMonth` | `NUMC(3)` | Acquisition Month |
| `ReplacementValueIndexSers` |  | | `_AssetValuationForLedger` | `ReplacementValueIndexSers` | `CHAR(5)` | Index Series for Replacement Values |
| `RplcmtValueAgingIndexSers` |  | | `_AssetValuationForLedger` | `RplcmtValueAgingIndexSers` | `CHAR(5)` | Age-Dependent Index Series |
| `FixedAssetUsageObject` |  | | `_AssetValuationForLedger` | `FixedAssetUsageObject` | `NUMC(12)` | Usage Object |
| `AssetRevaluationIndex` |  | | `_AssetValuationForLedger` | `AssetRevaluationIndex` | `CHAR(10)` | Asset Revaluation: Index ID |
| `NationalClassification` |  | | `_FixedAssetCountryData` | `NationalClassification` | `CHAR(12)` | National Classification Code |
| `TaxDepreciationGroup` |  | | `_FixedAssetCountryData` | `TaxDepreciationGroup` | `CHAR(4)` | Tax Depreciation Group |
| `JP_PrptyTxRptCity` |  | | `_FixedAssetCountryData` | `JP_PrptyTxRptCity` | `CHAR(8)` | Japan: City Code of Property Tax Report |
| `JP_PrptyTxRptClassfctnKey` |  | | `_FixedAssetCountryData` | `JP_PrptyTxRptClassfctnKey` | `CHAR(4)` | Japan: Classification Key of Property Tax Report |
| `RU_AssetOKOF` |  | | `_GlobAssetAssignment` | `RU_AssetOKOF` | `CHAR(16)` | OKOF Code |
| `RU_AssetDepreciationGroup` |  | | `_GlobAssetAssignment` | `RU_AssetDepreciationGroup` | `CHAR(4)` | Depreciation Group |
| `WBSElementExternalID` |  | |  | `cast( _WBSElement_2.WBSElementExternalID as faa_inv_wbs_element )` | `CHAR(24)` | Investment WBS Element |
| `AssetWBSElementExternalID` |  | |  | `cast( _FixedAssetAssgmt._WBSElement.WBSElementExternalID as faa_wbs_element )` | `CHAR(24)` | Asset WBS Element |
| `_CompanyCode` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAssetCountryData` | | ✓ | | | | |
| `_FixedAssetGroup` | | ✓ | | | | |
| `_InvestmentOrder` | | ✓ | | | | |
| `_Group1AssetEvaluationKey` | | ✓ | | | | |
| `_Group2AssetEvaluationKey` | | ✓ | | | | |
| `_Group3AssetEvaluationKey` | | ✓ | | | | |
| `_Group4AssetEvaluationKey` | | ✓ | | | | |
| `_Group5AssetEvaluationKey` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_LedgerGroup` | | ✓ | | | | |
| `_AssetKeyFigure` | | ✓ | | | | |
| `_AssetKeyFigureSet` | | ✓ | | | | |
| `_AssetSortedKeyFigureSetSpec` | | ✓ | | | | |
| `_DepreciationArea` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SubLedgerAccLineItemType` | | ✓ | | | | |
| `_AssetAcctTransClassfctn` | | ✓ | | | | |
| `_ChartOfDepreciation` | | ✓ | | | | |
| `_AssetClass` | | ✓ | | | | |
| `_AssetAccountDetermination` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_BusinessTransactionCategory` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_AssetCostCenter` | | ✓ | | | | |
| `_AssetCostCenterActivityType` | | ✓ | | | | |
| `_AssetWBSElement` | | ✓ | | | | |
| `_AssetBusinessArea` | | ✓ | | | | |
| `_AssetProfitCenter` | | ✓ | | | | |
| `_AssetFunctionalArea` | | ✓ | | | | |
| `_AssetSegment` | | ✓ | | | | |
| `_AssetLocation` | | ✓ | | | | |
| `_AssetPlant` | | ✓ | | | | |
| `_AssetRealEstateObject` | | ✓ | | | | |
| `_DepreciationKey` | | ✓ | | | | |
| `_FixedAssetUsageObject` | | ✓ | | | | |
| `_AssetRevaluationIndex` | | ✓ | | | | |
| `_InvestmentSupportMeasure` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_CountryChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_AlternativeGLAccount` | | ✓ | | | | |
| `_AcqnProdnCostGLAccount` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CurrencyRole` | | ✓ | | | | |
| `_SelectedCurrencyBranch` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_FiscalYearPeriodForVariant` | | ✓ | | | | |
| `_FiscalPeriodForVariant` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_FixedAssetNatlClfn` | | ✓ | | | | |
| `_TaxDepreciationGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_JP_PrptyTxRptCity` | | ✓ | | | | |
| `_JP_PrptyTxRptClassfctnKey` | | ✓ | | | | |
| `_RU_AssetDepreciationGroup` | | ✓ | | | | |
| `_RU_AssetOKOF` | | ✓ | | | | |
| `_AssetRedesignSwitchStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1] |
| `_FixedAsset` | `I_FixedAsset` | [1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAssetCountryData` | `I_FixedAssetCountryData` | [0..1] |
| `_FixedAssetGroup` | `I_FixedAssetGroup` | [0..1] |
| `_InvestmentOrder` | `I_InternalOrder` | [0..1] |
| `_Group1AssetEvaluationKey` | `I_Group1AssetEvaluationKey` | [0..1] |
| `_Group2AssetEvaluationKey` | `I_Group2AssetEvaluationKey` | [0..1] |
| `_Group3AssetEvaluationKey` | `I_Group3AssetEvaluationKey` | [0..1] |
| `_Group4AssetEvaluationKey` | `I_Group4AssetEvaluationKey` | [0..1] |
| `_Group5AssetEvaluationKey` | `I_Group5AssetEvaluationKey` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_LedgerGroup` | `I_LedgerGroup` | [0..1] |
| `_AssetKeyFigure` | `I_AssetKeyFigure` | [0..1] |
| `_AssetKeyFigureSet` | `I_AssetKeyFigureSet` | [0..1] |
| `_AssetSortedKeyFigureSetSpec` | `I_AssetSortedKeyFigureSetSpec` | [1] |
| `_DepreciationArea` | `I_DepreciationAreaForLedger` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_SubLedgerAccLineItemType` | `I_SubLedgerAccLineItemType` | [0..1] |
| `_AssetAcctTransClassfctn` | `I_MovementCategory` | [0..1] |
| `_ChartOfDepreciation` | `I_ChartOfDepreciation` | [0..1] |
| `_AssetClass` | `I_AssetClass` | [0..1] |
| `_AssetAccountDetermination` | `I_AssetAcctDetermination` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [1] |
| `_AssetTransactionType` | `I_AssetTransactionType` | [0..1] |
| `_BusinessTransactionCategory` | `I_BusinessTransactionCategory` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_Segment` | `I_Segment` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_AssetCostCenter` | `I_CostCenter` | [0..*] |
| `_AssetCostCenterActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_AssetWBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_AssetBusinessArea` | `I_BusinessArea` | [0..1] |
| `_AssetProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_AssetFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_AssetSegment` | `I_Segment` | [0..1] |
| `_AssetLocation` | `I_Location` | [0..1] |
| `_AssetPlant` | `I_Plant` | [0..1] |
| `_AssetRealEstateObject` | `I_REObjectByIntFinNumber` | [0..1] |
| `_DepreciationKey` | `I_DepreciationKey` | [0..1] |
| `_FixedAssetUsageObject` | `I_FixedAssetUsageObject` | [0..1] |
| `_AssetRevaluationIndex` | `I_AssetRevaluationIndex` | [0..1] |
| `_InvestmentSupportMeasure` | `I_InvestmentSupportMeasure` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CountryChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_AlternativeGLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_AcqnProdnCostGLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_BalanceSheetAccount` | `I_AssetBalanceSheetAccount` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CurrencyRole` | `I_CurrencyRole` | [0..1] |
| `_SelectedCurrencyBranch` | `I_SelectedCurrencyBranch` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1..1] |
| `_FiscalYearPeriodForVariant` | `I_FiscalYearPeriodForVariant` | [0..1] |
| `_FiscalPeriodForVariant` | `I_FiscalPeriodForVariant` | [0..1] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |
| `_Fund` | `I_Fund` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElement_2` | `I_WBSElementBasicData` | [0..1] |
| `_FixedAssetNatlClfn` | `I_FixedAssetNatlClfn` | [0..1] |
| `_TaxDepreciationGroup` | `I_TaxDepreciationGroup` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_JP_PrptyTxRptCity` | `I_JP_PrptyTxRptCity` | [0..1] |
| `_JP_PrptyTxRptClassfctnKey` | `I_JP_PrptyTxRptClassfctnKey` | [0..1] |
| `_RU_AssetDepreciationGroup` | `I_RU_AssetDepreciationGroup` | [0..1] |
| `_RU_AssetOKOF` | `I_RU_AssetOKOF` | [0..1] |
| `_AssetRedesignSwitchStatus` | `I_AssetRedesignSwitchStatus` | [1] |
| `_FixedAssetForLedger` | `I_FixedAssetForLedger` | [0..1] |
| `_FixedAssetAssgmt` | `I_FixedAssetAssgmt` | [0..1] |
| `_AssetValuationForLedger` | `I_AssetValuationForLedger` | [0..1] |
| `_GlobAssetAssignment` | `I_GlobAssetAssignment` | [0..1] |
| `_Extension` | `E_FixedAsset` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETHISTORYSHEETCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETHISTORYSHEETCUBE')/$value)*

```abap
@AccessControl.auditFilter: #ENABLED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: { dataCategory: #CUBE, internalName: #LOCAL }
@EndUserText.label: 'Asset History Sheet - Cube'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: { usageType.serviceQuality: #D,
                usageType.sizeCategory: #XXL,
                usageType.dataClass: #MIXED,
                supportedCapabilities: [ #ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata: {ignorePropagatedAnnotations: true, allowExtensions:true}
@Consumption.dbHints: [ 'JOIN_THRU_AGGR', 'USE_HEX_PLAN' ]
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'AHS',
  allowNewDatasources: false,
  quota: {
    maximumFields: 250,
    maximumBytes: 2500
  }
}

define view entity I_AssetHistorySheetCube
  with parameters
    P_AssetAccountingKeyFigureSet : faa_key_figure_set,
    P_FiscalYear                  : fis_gjahr,
    P_FiscalPeriod                : fis_poper,
    P_KeyDate                     : fagl_keydate

  as select from           P_AssetHistorySheetCube1( P_AssetAccountingKeyFigureSet: $parameters.P_AssetAccountingKeyFigureSet, P_FiscalYear: $parameters.P_FiscalYear, P_FiscalPeriod: $parameters.P_FiscalPeriod )
    left outer to one join I_FixedAsset as FixedAsset on  FixedAsset.CompanyCode      = P_AssetHistorySheetCube1.CompanyCode
                                                      and FixedAsset.MasterFixedAsset = P_AssetHistorySheetCube1.MasterFixedAsset
                                                      and FixedAsset.FixedAsset       = P_AssetHistorySheetCube1.FixedAsset

  association [1]    to I_CompanyCode                 as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1]    to I_FixedAsset                  as _FixedAsset                  on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                                      and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                      and $projection.FixedAsset       = _FixedAsset.FixedAsset
  association [0..1] to I_MasterFixedAsset            as _MasterFixedAsset            on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                      and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [0..1] to I_FixedAssetCountryData       as _FixedAssetCountryData       on  $projection.CompanyCode      = _FixedAssetCountryData.CompanyCode
                                                                                      and $projection.MasterFixedAsset = _FixedAssetCountryData.MasterFixedAsset
                                                                                      and $projection.FixedAsset       = _FixedAssetCountryData.FixedAsset
  association [0..1] to I_FixedAssetGroup             as _FixedAssetGroup             on  $projection.FixedAssetGroup = _FixedAssetGroup.FixedAssetGroup
  association [0..1] to I_InternalOrder               as _InvestmentOrder             on  $projection.InvestmentOrder = _InvestmentOrder.InternalOrder
  association [0..1] to I_Group1AssetEvaluationKey    as _Group1AssetEvaluationKey    on  $projection.Group1AssetEvaluationKey = _Group1AssetEvaluationKey.Group1AssetEvaluationKey
  association [0..1] to I_Group2AssetEvaluationKey    as _Group2AssetEvaluationKey    on  $projection.Group2AssetEvaluationKey = _Group2AssetEvaluationKey.Group2AssetEvaluationKey
  association [0..1] to I_Group3AssetEvaluationKey    as _Group3AssetEvaluationKey    on  $projection.Group3AssetEvaluationKey = _Group3AssetEvaluationKey.Group3AssetEvaluationKey
  association [0..1] to I_Group4AssetEvaluationKey    as _Group4AssetEvaluationKey    on  $projection.Group4AssetEvaluationKey = _Group4AssetEvaluationKey.Group4AssetEvaluationKey
  association [0..1] to I_Group5AssetEvaluationKey    as _Group5AssetEvaluationKey    on  $projection.Group5AssetEvaluationKey = _Group5AssetEvaluationKey.Group5AssetEvaluationKey
  association [0..1] to I_UnitOfMeasure               as _UnitOfMeasure               on  $projection.BaseUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_LedgerGroup                 as _LedgerGroup                 on  $projection.LedgerGroup = _LedgerGroup.LedgerGroup

  association [0..1] to I_AssetKeyFigure              as _AssetKeyFigure              on  $projection.AssetAccountingKeyFigure = _AssetKeyFigure.AssetAccountingKeyFigure
  association [0..1] to I_AssetKeyFigureSet           as _AssetKeyFigureSet           on  $projection.AssetAccountingKeyFigureSet = _AssetKeyFigureSet.AssetAccountingKeyFigureSet
  association [1]    to I_AssetSortedKeyFigureSetSpec as _AssetSortedKeyFigureSetSpec on  $projection.AssetAccountingKeyFigureSet    = _AssetSortedKeyFigureSetSpec.AssetAccountingKeyFigureSet
                                                                                      and $projection.AssetAccountingSortedKeyFigure = _AssetSortedKeyFigureSetSpec.AssetAccountingSortedKeyFigure
  association [0..1] to I_DepreciationAreaForLedger   as _DepreciationArea            on  $projection.CompanyCode           = _DepreciationArea.CompanyCode
                                                                                      and $projection.Ledger                = _DepreciationArea.Ledger
                                                                                      and $projection.AssetDepreciationArea = _DepreciationArea.AssetDepreciationArea
  association [0..1] to I_Ledger                      as _Ledger                      on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_SubLedgerAccLineItemType    as _SubLedgerAccLineItemType    on  $projection.SubLedgerAcctLineItemType = _SubLedgerAccLineItemType.SubLedgerAcctLineItemType
  association [0..1] to I_MovementCategory            as _AssetAcctTransClassfctn     on  $projection.AssetAcctTransClassfctn = _AssetAcctTransClassfctn.AssetAcctTransClassfctn
  association [0..1] to I_ChartOfDepreciation         as _ChartOfDepreciation         on  $projection.ChartOfDepreciation = _ChartOfDepreciation.ChartOfDepreciation
  association [0..1] to I_AssetClass                  as _AssetClass                  on  $projection.AssetClass = _AssetClass.AssetClass
  association [0..1] to I_AssetAcctDetermination      as _AssetAccountDetermination   on  $projection.AssetAccountDetermination = _AssetAccountDetermination.AssetAccountDetermination
  association [0..1] to I_ControllingArea             as _ControllingArea             on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_FinancialAccountType        as _FinancialAccountType        on  $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
  association [1]    to I_AccountingPrinciple         as _AccountingPrinciple         on  $projection.AccountingPrinciple = _AccountingPrinciple.AccountingPrinciple
  association [0..1] to I_AssetTransactionType        as _AssetTransactionType        on  $projection.AssetTransactionType = _AssetTransactionType.AssetTransactionType
  association [0..1] to I_BusinessTransactionCategory as _BusinessTransactionCategory on  $projection.BusinessTransactionCategory = _BusinessTransactionCategory.BusinessTransactionCategory
  association [0..1] to I_BusinessTransactionType     as _BusinessTransactionType     on  $projection.BusinessTransactionType = _BusinessTransactionType.BusinessTransactionType
  association [0..*] to I_CostCenter                  as _CostCenter                  on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                                      and $projection.ControllingArea = _CostCenter.ControllingArea
  association [0..1] to I_Plant                       as _Plant                       on  $projection.Plant = _Plant.Plant
  association [0..1] to I_BusinessArea                as _BusinessArea                on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..*] to I_ProfitCenter                as _ProfitCenter                on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                                      and $projection.ControllingArea = _ProfitCenter.ControllingArea
  association [0..1] to I_Segment                     as _Segment                     on  $projection.Segment = _Segment.Segment
  association [0..1] to I_FunctionalArea              as _FunctionalArea              on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_JournalEntry                as _JournalEntry                on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                      and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                      and $projection.AccountingDocument = _JournalEntry.AccountingDocument
  association [0..*] to I_CostCenter                  as _AssetCostCenter             on  $projection.ControllingArea = _AssetCostCenter.ControllingArea
                                                                                      and $projection.AssetCostCenter = _AssetCostCenter.CostCenter
  association [0..*] to I_CostCenterActivityType      as _AssetCostCenterActivityType on  $projection.AssetCostCtrActivityType = _AssetCostCenterActivityType.CostCtrActivityType
                                                                                      and $projection.ControllingArea          = _AssetCostCenterActivityType.ControllingArea
  association [0..1] to I_WBSElementBasicData         as _AssetWBSElement             on  $projection.AssetWBSElementInternalID = _AssetWBSElement.WBSElementInternalID
  association [0..1] to I_BusinessArea                as _AssetBusinessArea           on  $projection.AssetBusinessArea = _AssetBusinessArea.BusinessArea
  association [0..*] to I_ProfitCenter                as _AssetProfitCenter           on  $projection.AssetProfitCenter = _AssetProfitCenter.ProfitCenter
                                                                                      and $projection.ControllingArea   = _AssetProfitCenter.ControllingArea
  association [0..1] to I_FunctionalArea              as _AssetFunctionalArea         on  $projection.AssetFunctionalArea = _AssetFunctionalArea.FunctionalArea
  association [0..1] to I_Segment                     as _AssetSegment                on  $projection.AssetSegment = _AssetSegment.Segment
  association [0..1] to I_Location                    as _AssetLocation               on  $projection.assetlocation = _AssetLocation.Location
                                                                                      and $projection.AssetPlant    = _AssetLocation.Plant
  association [0..1] to I_Plant                       as _AssetPlant                  on  $projection.AssetPlant = _AssetPlant.Plant
  association [0..1] to I_REObjectByIntFinNumber      as _AssetRealEstateObject       on  $projection.reinternalfinnumber = _AssetRealEstateObject.REInternalFinNumber
  association [0..1] to I_DepreciationKey             as _DepreciationKey             on  $projection.ChartOfDepreciation = _DepreciationKey.ChartOfDepreciation
                                                                                      and $projection.depreciationkey     = _DepreciationKey.DepreciationKey
  association [0..1] to I_FixedAssetUsageObject       as _FixedAssetUsageObject       on  $projection.CompanyCode           = _FixedAssetUsageObject.CompanyCode
                                                                                      and $projection.fixedassetusageobject = _FixedAssetUsageObject.FixedAssetUsageObject
  association [0..1] to I_AssetRevaluationIndex       as _AssetRevaluationIndex       on  $projection.assetrevaluationindex = _AssetRevaluationIndex.AssetRevaluationIndex

  association [0..1] to I_InvestmentSupportMeasure    as _InvestmentSupportMeasure    on  $projection.ChartOfDepreciation      = _InvestmentSupportMeasure.ChartOfDepreciation
                                                                                      and $projection.investmentsupportmeasure = _InvestmentSupportMeasure.InvestmentSupportMeasure
  association [0..1] to I_ChartOfAccounts             as _ChartOfAccounts             on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..1] to I_ChartOfAccounts             as _CountryChartOfAccounts      on  $projection.CountryChartOfAccounts = _CountryChartOfAccounts.ChartOfAccounts
  association [0..1] to I_GLAccountInChartOfAccounts  as _GLAccountInChartOfAccounts  on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                      and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [0..1] to I_GLAccountInChartOfAccounts  as _AlternativeGLAccount        on  $projection.CountryChartOfAccounts = _AlternativeGLAccount.ChartOfAccounts
                                                                                      and $projection.AlternativeGLAccount   = _AlternativeGLAccount.GLAccount
  association [0..1] to I_GLAccountInChartOfAccounts  as _AcqnProdnCostGLAccount      on  $projection.ChartOfAccounts        = _AcqnProdnCostGLAccount.ChartOfAccounts
                                                                                      and $projection.acqnprodncostglaccount = _AcqnProdnCostGLAccount.GLAccount
  association [0..1] to I_AssetBalanceSheetAccount    as _BalanceSheetAccount         on  $projection.CompanyCode               = _BalanceSheetAccount.CompanyCode
                                                                                      and $projection.AssetAccountDetermination = _BalanceSheetAccount.AssetAccountDetermination
                                                                                      and $projection.AssetDepreciationArea     = _BalanceSheetAccount.AssetRealDepreciationArea
  association [0..1] to I_Supplier                    as _Supplier                    on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Currency                    as _Currency                    on  $projection.DisplayCurrency = _Currency.Currency
  association [0..1] to I_CurrencyRole                as _CurrencyRole                on  $projection.CurrencyRole = _CurrencyRole.CurrencyRole
  association [0..1] to I_SelectedCurrencyBranch      as _SelectedCurrencyBranch      on  $projection.SelectedCurrencyBranch = _SelectedCurrencyBranch.SelectedCurrencyBranch

  association [0..1] to I_FiscalYearForCompanyCode    as _FiscalYear                  on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                      and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [1..1] to I_FiscalYearVariant           as _FiscalYearVariant           on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [0..1] to I_FiscalYearPeriodForVariant  as _FiscalYearPeriodForVariant  on  $projection.FiscalYearPeriod  = _FiscalYearPeriodForVariant.FiscalYearPeriod
                                                                                      and $projection.FiscalYearVariant = _FiscalYearPeriodForVariant.FiscalYearVariant
  association [0..1] to I_FiscalPeriodForVariant      as _FiscalPeriodForVariant      on  $projection.LedgerFiscalYear  = _FiscalPeriodForVariant.FiscalYear
                                                                                      and $projection.FiscalPeriod      = _FiscalPeriodForVariant.FiscalPeriod
                                                                                      and $projection.FiscalYearVariant = _FiscalPeriodForVariant.FiscalYearVariant
  association [0..1] to I_FinancialManagementArea     as _FinancialManagementArea     on  $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea
  association [0..1] to I_Fund                        as _Fund                        on  $projection.FinancialManagementArea = _Fund.FinancialManagementArea
                                                                                      and $projection.Fund                    = _Fund.Fund
  association [0..1] to I_BudgetPeriod                as _BudgetPeriod                on  $projection.BudgetPeriod = _BudgetPeriod.BudgetPeriod
  association [0..1] to I_WBSElementBasicData         as _WBSElement                  on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData         as _WBSElement_2                on  $projection.WBSElementInternalID_2 = _WBSElement_2.WBSElementInternalID
  association [0..1] to I_FixedAssetNatlClfn          as _FixedAssetNatlClfn          on  $projection.Country                = _FixedAssetNatlClfn.Country
                                                                                      and $projection.nationalclassification = _FixedAssetNatlClfn.NationalClassification
  association [0..1] to I_TaxDepreciationGroup        as _TaxDepreciationGroup        on  $projection.Country              = _TaxDepreciationGroup.Country
                                                                                      and $projection.taxdepreciationgroup = _TaxDepreciationGroup.TaxDepreciationGroup
  association [0..1] to I_Country                     as _Country                     on  $projection.Country = _Country.Country
  association [0..1] to I_JP_PrptyTxRptCity           as _JP_PrptyTxRptCity           on  $projection.jp_prptytxrptcity = _JP_PrptyTxRptCity.JP_PrptyTxRptCity
  association [0..1] to I_JP_PrptyTxRptClassfctnKey   as _JP_PrptyTxRptClassfctnKey   on  $projection.jp_prptytxrptclassfctnkey = _JP_PrptyTxRptClassfctnKey.JP_PrptyTxRptClassfctnKey
  association [0..1] to I_RU_AssetDepreciationGroup   as _RU_AssetDepreciationGroup   on  $projection.ru_assetdepreciationgroup = _RU_AssetDepreciationGroup.RU_AssetDepreciationGroup
                                                                                      and $projection.Country                   = _RU_AssetDepreciationGroup.Country
                                                                                      and $projection.ru_assetokof              = _RU_AssetDepreciationGroup.RU_AssetOKOF
  association [0..1] to I_RU_AssetOKOF                as _RU_AssetOKOF                on  $projection.ru_assetokof = _RU_AssetOKOF.RU_AssetOKOF
                                                                                      and $projection.Country      = _RU_AssetOKOF.Country
  association [1]    to I_AssetRedesignSwitchStatus   as _AssetRedesignSwitchStatus   on  _AssetRedesignSwitchStatus.AssetRedesignSwitchIsActive = ''
                                                                                      or  _AssetRedesignSwitchStatus.AssetRedesignSwitchIsActive = 'X'

  association [0..1] to I_FixedAssetForLedger         as _FixedAssetForLedger         on  $projection.CompanyCode      = _FixedAssetForLedger.CompanyCode
                                                                                      and $projection.MasterFixedAsset = _FixedAssetForLedger.MasterFixedAsset
                                                                                      and $projection.FixedAsset       = _FixedAssetForLedger.FixedAsset
                                                                                      and $projection.Ledger           = _FixedAssetForLedger.Ledger
  association [0..1] to I_FixedAssetAssgmt            as _FixedAssetAssgmt            on  _FixedAssetAssgmt.CompanyCode       = $projection.CompanyCode
                                                                                      and _FixedAssetAssgmt.MasterFixedAsset  = $projection.MasterFixedAsset
                                                                                      and _FixedAssetAssgmt.FixedAsset        = $projection.FixedAsset
                                                                                      and _FixedAssetAssgmt.ValidityStartDate <= $parameters.P_KeyDate
                                                                                      and _FixedAssetAssgmt.ValidityEndDate   >= $parameters.P_KeyDate
  association [0..1] to I_AssetValuationForLedger     as _AssetValuationForLedger     on  _AssetValuationForLedger.CompanyCode               = $projection.CompanyCode
                                                                                      and _AssetValuationForLedger.MasterFixedAsset          = $projection.MasterFixedAsset
                                                                                      and _AssetValuationForLedger.FixedAsset                = $projection.FixedAsset
                                                                                      and _AssetValuationForLedger.Ledger                    = $projection.Ledger
                                                                                      and _AssetValuationForLedger.AssetRealDepreciationArea = $projection.AssetDepreciationArea
                                                                                      and _AssetValuationForLedger.ValidityStartDate         <= $parameters.P_KeyDate
                                                                                      and _AssetValuationForLedger.ValidityEndDate           >= $parameters.P_KeyDate
  association [0..1] to I_GlobAssetAssignment         as _GlobAssetAssignment         on  _GlobAssetAssignment.CompanyCode       = $projection.CompanyCode
                                                                                      and _GlobAssetAssignment.MasterFixedAsset  = $projection.MasterFixedAsset
                                                                                      and _GlobAssetAssignment.FixedAsset        = $projection.FixedAsset
                                                                                      and _GlobAssetAssignment.ValidityStartDate <= $parameters.P_KeyDate
                                                                                      and _GlobAssetAssignment.ValidityEndDate   >= $parameters.P_KeyDate
  // Association to Extension View
  association [1..1] to E_FixedAsset                  as _Extension                   on  $projection.MasterFixedAsset = _Extension.MasterFixedAsset
                                                                                      and $projection.FixedAsset       = _Extension.FixedAsset
                                                                                      and $projection.CompanyCode      = _Extension.CompanyCode
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key P_AssetHistorySheetCube1.CompanyCode,
      @ObjectModel.foreignKey.association: '_DepreciationArea'
  key P_AssetHistorySheetCube1.AssetDepreciationArea,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
  key P_AssetHistorySheetCube1.MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
  key P_AssetHistorySheetCube1.FixedAsset,
      @ObjectModel.foreignKey.association: '_Ledger'
  key P_AssetHistorySheetCube1.Ledger,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key P_AssetHistorySheetCube1.FiscalYear,
      @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
      @Semantics.fiscal.period: true
  key P_AssetHistorySheetCube1.FiscalPeriod,
      @ObjectModel.foreignKey.association: '_SubledgerAccLineItemType'
  key P_AssetHistorySheetCube1.SubLedgerAcctLineItemType,
      @ObjectModel.foreignKey.association: '_AssetAcctTransClassfctn'
  key P_AssetHistorySheetCube1.AssetAcctTransClassfctn,
      @ObjectModel.foreignKey.association: '_AssetKeyFigure'
  key P_AssetHistorySheetCube1.AssetAccountingKeyFigure,
      @ObjectModel.foreignKey.association: '_AssetKeyFigureSet'
  key P_AssetHistorySheetCube1.AssetAccountingKeyFigureSet,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key P_AssetHistorySheetCube1.AccountingDocument,
  key P_AssetHistorySheetCube1.LedgerGLLineItem,
  key P_AssetHistorySheetCube1.TransactionSubitem,
  key P_AssetHistorySheetCube1.DebitCreditCode,
      @ObjectModel.foreignKey.association: '_CurrencyRole'
  key P_AssetHistorySheetCube1.CurrencyRole,
  key P_AssetHistorySheetCube1.KeyFigureIsZeroBalance,

      @Semantics.fiscal.year: true
      @ObjectModel.foreignKey.association: null
      P_AssetHistorySheetCube1.LedgerFiscalYear,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      P_AssetHistorySheetCube1.FiscalYearVariant,
      @Semantics.fiscal.yearPeriod: true
      P_AssetHistorySheetCube1.FiscalYearPeriod,
      P_AssetHistorySheetCube1.DepreciationFiscalPeriod,
      P_AssetHistorySheetCube1.PostingDate,
      _FiscalYear.FiscalYearStartDate,

      @ObjectModel.foreignKey.association: '_AssetSortedKeyFigureSetSpec'
      P_AssetHistorySheetCube1.AssetAccountingSortedKeyFigure,

      @VDM.lifecycle: {status: #DEPRECATED}
      @ObjectModel.foreignKey.association: '_LedgerGroup'
      P_AssetHistorySheetCube1.LedgerGroup,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      P_AssetHistorySheetCube1.ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_AcqnProdnCostGLAccount'
      _BalanceSheetAccount.AcqnProdnCostGLAccount,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      P_AssetHistorySheetCube1.GLAccount,
      @ObjectModel.foreignKey.association: '_AlternativeGLAccount'
      P_AssetHistorySheetCube1.AlternativeGLAccount,
      P_AssetHistorySheetCube1.GroupMasterFixedAsset,
      P_AssetHistorySheetCube1.GroupFixedAsset,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      P_AssetHistorySheetCube1.FinancialAccountType,
      @Semantics.businessDate.at: true
      P_AssetHistorySheetCube1.AccountingDocumentCreationDate,
      P_AssetHistorySheetCube1.CreationTime,
      P_AssetHistorySheetCube1.JointVentureCostRecoveryCode,
      @ObjectModel.foreignKey.association: '_ChartOfDepreciation'
      P_AssetHistorySheetCube1.ChartOfDepreciation,

      @ObjectModel.foreignKey.association: '_CostCenter'
      P_AssetHistorySheetCube1.CostCenter,
      @ObjectModel.foreignKey.association: '_Plant'
      P_AssetHistorySheetCube1.Plant,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      P_AssetHistorySheetCube1.BusinessArea,
      P_AssetHistorySheetCube1.PersonnelNumber,
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      P_AssetHistorySheetCube1.FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_Fund'
      P_AssetHistorySheetCube1.Fund,
      P_AssetHistorySheetCube1.GrantID,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      P_AssetHistorySheetCube1.FunctionalArea,
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      P_AssetHistorySheetCube1.BudgetPeriod,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      P_AssetHistorySheetCube1.ProfitCenter,
      @ObjectModel.foreignKey.association: '_Segment'
      P_AssetHistorySheetCube1.Segment,
      P_AssetHistorySheetCube1.FundsCenter,
      @ObjectModel.foreignKey.association: '_AssetTransactionType'
      P_AssetHistorySheetCube1.AssetTransactionType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      P_AssetHistorySheetCube1.BusinessTransactionCategory,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      P_AssetHistorySheetCube1.BusinessTransactionType,
      P_AssetHistorySheetCube1.FinancialClosingStep,
      
      P_AssetHistorySheetCube1.PartnerCompanyCode,
      P_AssetHistorySheetCube1.PartnerMasterFixedAsset,
      P_AssetHistorySheetCube1.PartnerFixedAsset,

      @ObjectModel.foreignKey.association: '_Country'
      P_AssetHistorySheetCube1.Country,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      P_AssetHistorySheetCube1.ControllingArea,
      @ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
      P_AssetHistorySheetCube1.CountryChartOfAccounts,

      P_AssetHistorySheetCube1.FinancialStatementVariant,
      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
      P_AssetHistorySheetCube1.AccountingPrinciple,

      @ObjectModel.foreignKey.association: '_SelectedCurrencyBranch'
      @Environment.sql.passValue : true
      P_AssetHistorySheetCube1.SelectedCurrencyBranch,
      P_AssetHistorySheetCube1.DisplayCurrency,

      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      P_AssetHistorySheetCube1.AmountInDisplayCurrency,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      FixedAsset.BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      @VDM.lifecycle: {status: #DEPRECATED}
      P_AssetHistorySheetCube1.Quantity,

      /* Fields from Fixed Asset */
      @ObjectModel.foreignKey.association: '_AssetAccountDetermination'
      FixedAsset.AssetAccountDetermination,
      @ObjectModel.foreignKey.association: '_AssetClass'
      FixedAsset.AssetClass,
      _FixedAssetForLedger.AssetCapitalizationDate,
      _FixedAssetForLedger.FirstAcquisitionFiscalYear,
      _FixedAssetForLedger.FirstAcquisitionFiscalPeriod,
      _FixedAssetForLedger.AssetDeactivationDate,
      @ObjectModel.foreignKey.association: '_FixedAssetGroup'
      FixedAsset.FixedAssetGroup,
      @ObjectModel.foreignKey.association: '_Supplier'
      FixedAsset.Supplier,
      @VDM.lifecycle: {status: #DEPRECATED}
      FixedAsset.AssetSupplierName,
      @ObjectModel.foreignKey.association: '_InvestmentOrder'
      FixedAsset.InvestmentOrder,
      FixedAsset.InventoryIsCounted,
      FixedAsset.LastInventoryDate,
      FixedAsset.Inventory,
      @ObjectModel.foreignKey.association: '_Group1AssetEvaluationKey'
      @VDM.lifecycle: {status: #DEPRECATED}
      FixedAsset.Group1AssetEvaluationKey,
      @ObjectModel.foreignKey.association: '_Group2AssetEvaluationKey'
      @VDM.lifecycle: {status: #DEPRECATED}
      FixedAsset.Group2AssetEvaluationKey,
      @ObjectModel.foreignKey.association: '_Group3AssetEvaluationKey'
      @VDM.lifecycle: {status: #DEPRECATED}
      FixedAsset.Group3AssetEvaluationKey,
      @ObjectModel.foreignKey.association: '_Group4AssetEvaluationKey'
      @VDM.lifecycle: {status: #DEPRECATED}
      FixedAsset.Group4AssetEvaluationKey,
      @ObjectModel.foreignKey.association: '_Group5AssetEvaluationKey'
      @VDM.lifecycle: {status: #DEPRECATED}
      FixedAsset.Group5AssetEvaluationKey,
      FixedAsset.AssetSerialNumber,
      @Consumption.hidden: true
      FixedAsset.InvestmentProjectWBSElement_2                                      as WBSElementInternalID_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'WBSElementInternalID_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementInternalID_2'
      @Consumption.hidden: true
      FixedAsset.InvestmentProjectWBSElement                                        as WBSElementInternalID,
      @Semantics.text
      cast(FixedAsset.AssetAdditionalDescription as fis_txa50_more)                 as AssetAdditionalDescription,
      @Consumption.hidden: true
      @VDM.lifecycle: {status: #DEPRECATED}
      FixedAsset.AssetAuthorizationContext,

      /* Fields from Fixed Asset (Time-Dependent Data) */
      @ObjectModel.foreignKey.association: '_AssetCostCenter'
      cast(_FixedAssetAssgmt.CostCenter as faa_kostl)                               as AssetCostCenter,
      @ObjectModel.foreignKey.association: '_AssetWBSElement'
      cast(_FixedAssetAssgmt.WBSElementInternalID_2 as faa_wbs_element_int )        as AssetWBSElementInternalID,
      @ObjectModel.foreignKey.association: '_AssetBusinessArea'
      cast(_FixedAssetAssgmt.BusinessArea as faa_gsber)                             as AssetBusinessArea,
      cast(_FixedAssetAssgmt.Fund as faa_bp_geber)                                  as AssetFund,
      @ObjectModel.foreignKey.association: '_AssetProfitCenter'
      cast(_FixedAssetAssgmt.ProfitCenter as faa_prctr)                             as AssetProfitCenter,
      @ObjectModel.foreignKey.association: '_AssetSegment'
      cast(_FixedAssetAssgmt.Segment as faa_fb_segment)                             as AssetSegment,
      @ObjectModel.foreignKey.association: '_AssetPlant'
      cast(_FixedAssetAssgmt.Plant as faa_werks)                                    as AssetPlant,
      cast(_FixedAssetAssgmt.BudgetPeriod as faa_budget_period)                     as AssetBudgetPeriod,
      cast(_FixedAssetAssgmt.GrantID as faa_gm_grant_nbr)                           as AssetGrant,
      @ObjectModel.foreignKey.association: '_AssetCostCenterActivityType'
      cast(_FixedAssetAssgmt.CostCtrActivityType as faa_lstar)                      as AssetCostCtrActivityType,
      cast(_FixedAssetAssgmt.PersonnelNumber as faa_pernr_d)                        as AssetPersonnelNumber,
      @ObjectModel.foreignKey.association: '_AssetFunctionalArea'
      cast(_FixedAssetAssgmt.FunctionalArea as faa_fkber)                           as AssetFunctionalArea,
      @ObjectModel.foreignKey.association: '_AssetLocation'
      _FixedAssetAssgmt.AssetLocation,
      _FixedAssetAssgmt.REInternalFinNumber,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'REInternalFinNumber'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'REInternalFinNumber'
      _FixedAssetAssgmt.RealEstateObject,
      cast(_FixedAssetAssgmt.FundsCenter as faa_fistl)                              as AssetFundsCenter,
      _FixedAssetAssgmt.Room,
      _FixedAssetAssgmt.VehicleLicensePlateNumber,
      _FixedAssetAssgmt.TaxJurisdiction,

      /* Fields from Fixed Asset Valuation */
//      _AssetValuationForLedger.DepreciationProfile,
      @ObjectModel.foreignKey.association: '_InvestmentSupportMeasure'
      _AssetValuationForLedger.InvestmentSupportMeasure,
      _AssetValuationForLedger.DepreciationStartDate,
      _AssetValuationForLedger.SpecialDeprStartDate,
      @ObjectModel.foreignKey.association: '_DepreciationKey'
      _AssetValuationForLedger.DepreciationKey,
      _AssetValuationForLedger.PlannedUsefulLifeInYears,
      _AssetValuationForLedger.PlannedUsefulLifeInPeriods,
      _AssetValuationForLedger.OriglAstUsefulLifeInYears,
      _AssetValuationForLedger.OriglAstUsefulLifeInPerds,
      _AssetValuationForLedger.DeprKeyChangeoverYear,
      _AssetValuationForLedger.DeprKeyChangeoverPeriod,
      _AssetValuationForLedger.VintageYear,
      _AssetValuationForLedger.VintageMonth,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'AssetRevaluationIndex'
      @VDM.lifecycle: {status: #DEPRECATED}
      @VDM.lifecycle.successor: 'AssetRevaluationIndex'
      _AssetValuationForLedger.ReplacementValueIndexSers,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'AssetRevaluationIndex'
      @VDM.lifecycle: {status: #DEPRECATED}
      @VDM.lifecycle.successor: 'AssetRevaluationIndex'
      _AssetValuationForLedger.RplcmtValueAgingIndexSers,
      @ObjectModel.foreignKey.association: '_FixedAssetUsageObject'
      _AssetValuationForLedger.FixedAssetUsageObject,
      @ObjectModel.foreignKey.association: '_AssetRevaluationIndex'
      _AssetValuationForLedger.AssetRevaluationIndex,

      /* Fields from Fixed Asset Country Data */
      @ObjectModel.foreignKey.association: '_FixedAssetNatlClfn'
      _FixedAssetCountryData.NationalClassification,
      @ObjectModel.foreignKey.association: '_TaxDepreciationGroup'
      _FixedAssetCountryData.TaxDepreciationGroup,
      @ObjectModel.foreignKey.association: '_JP_PrptyTxRptCity'
      _FixedAssetCountryData.JP_PrptyTxRptCity,
      @ObjectModel.foreignKey.association: '_JP_PrptyTxRptClassfctnKey'
      _FixedAssetCountryData.JP_PrptyTxRptClassfctnKey,

      @ObjectModel.foreignKey.association: '_RU_AssetOKOF'
      _GlobAssetAssignment.RU_AssetOKOF,
      @ObjectModel.foreignKey.association: '_RU_AssetDepreciationGroup'
      _GlobAssetAssignment.RU_AssetDepreciationGroup,

      cast( _WBSElement_2.WBSElementExternalID as faa_inv_wbs_element )             as WBSElementExternalID,
      cast( _FixedAssetAssgmt._WBSElement.WBSElementExternalID as faa_wbs_element ) as AssetWBSElementExternalID,

      /*Associations */
      _CompanyCode,
      _CountryChartOfAccounts,
      _DepreciationArea,
      _ChartOfAccounts,
      _ControllingArea,
      _MasterFixedAsset,
      _FixedAsset,
      _AssetAccountDetermination,
      _AssetClass,
      _Ledger,
      _FiscalYear,
      _JournalEntry,
      _SubLedgerAccLineItemType,
      _LedgerGroup,
      _GLAccountInChartOfAccounts,
      _AlternativeGLAccount,
      _AssetAcctTransClassfctn,
      _FinancialAccountType,
      _ChartOfDepreciation,
      _AccountingPrinciple,
      _CostCenter,
      _Plant,
      _BusinessArea,
      _ProfitCenter,
      _Segment,
      _FunctionalArea,
      _AssetTransactionType,
      _BusinessTransactionCategory,
      _BusinessTransactionType,
      _AssetCostCenter,
      _AssetWBSElement,
      _AssetBusinessArea,
      _AssetProfitCenter,
      _AssetSegment,
      _AssetPlant,
      _AssetRealEstateObject,
      _AssetCostCenterActivityType,
      _AssetFunctionalArea,
      _AssetLocation,
      _AssetKeyFigure,
      _AssetKeyFigureSet,
      _AssetSortedKeyFigureSetSpec,
      _Currency,
      _CurrencyRole,
      _FixedAssetGroup,
      _InvestmentOrder,
      _UnitOfMeasure,
      _Group1AssetEvaluationKey,
      _Group2AssetEvaluationKey,
      _Group3AssetEvaluationKey,
      _Group4AssetEvaluationKey,
      _Group5AssetEvaluationKey,
      _InvestmentSupportMeasure,
      _DepreciationKey,
      _FixedAssetUsageObject,
      _AssetRevaluationIndex,
      _AcqnProdnCostGLAccount,
      _FiscalYearVariant,
      _FiscalYearPeriodForVariant,
      _FiscalPeriodForVariant,
      _FixedAssetCountryData,
      _FixedAssetNatlClfn,
      _TaxDepreciationGroup,
      _Country,
      _FinancialManagementArea,
      _Fund,
      _BudgetPeriod,
      _Supplier,
      _SelectedCurrencyBranch,
      _JP_PrptyTxRptCity,
      _JP_PrptyTxRptClassfctnKey,
      _RU_AssetDepreciationGroup,
      _RU_AssetOKOF,
      @Consumption.hidden: true
      _AssetRedesignSwitchStatus //for DCL
}
where
  P_AssetHistorySheetCube1.AssetAccountingKeyFigureSet = $parameters.P_AssetAccountingKeyFigureSet
```
