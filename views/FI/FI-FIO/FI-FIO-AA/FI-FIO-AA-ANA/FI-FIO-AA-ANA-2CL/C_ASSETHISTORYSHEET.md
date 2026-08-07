---
name: C_ASSETHISTORYSHEET
description: With this CDS view, you can form the asset history sheet that shows value changes to the fixed asset balances in a fiscal year for a depreciation area. The asset history sheet enables you to document and explain the balances on fixed assets for every accounting principle, any local regulation, and for management purposes. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisitions, retirements, transfers, and depreciation. Certain key figure groups can be used to display key figures in a hierarchy. This CDS view provides the prerequisites for answering the following business questions: What are the balances at fiscal year start? What are the balances of the current year? What are the balances at the reporting date? What are the balances of my APC balance sheet accounts? What are the balances drilled down by the asset?
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ASSETHISTORYSHEET')/$value
semantic_en: With this CDS view, you can form the asset history sheet that shows value changes to the fixed asset balances in a fiscal year for a depreciation area. The asset history sheet enables you to document and explain the balances on fixed assets for every accounting principle, any local regulation, and for management purposes. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisitions, retirements, transfers, and depreciation. Certain key figure groups can be used to display key figures in a hierarchy. This CDS view provides the prerequisites for answering the following business questions: What are the balances at fiscal year start? What are the balances of the current year? What are the balances at the reporting date? What are the balances of my APC balance sheet accounts? What are the balances drilled down by the asset?
semantic_vi: Asset History Sheet — CDS view tiêu dùng dựa trên I_AssetHistorySheetCube.
keywords:
  - Asset History Sheet
  - asset
  - history
  - sheet
  - account
  - determination
  - class
  - accounting
  - figure
  - display
  - currency
  - amount
tags:
  - FI
  - account
  - bo:asset
  - component:FI-FIO-AA-ANA-2CL
  - consumption-view
  - document
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - lob:finance
---
# C_ASSETHISTORYSHEET

**With this CDS view, you can form the asset history sheet that shows value changes to the fixed asset balances in a fiscal year for a depreciation area. The asset history sheet enables you to document and explain the balances on fixed assets for every accounting principle, any local regulation, and for management purposes. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisitions, retirements, transfers, and depreciation. Certain key figure groups can be used to display key figures in a hierarchy. This CDS view provides the prerequisites for answering the following business questions: What are the balances at fiscal year start? What are the balances of the current year? What are the balances at the reporting date? What are the balances of my APC balance sheet accounts? What are the balances drilled down by the asset?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ASSETHISTORYSHEET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetAccountDetermination` |  | |  |  | `CHAR(8)` | Account Determination |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `AssetAccountingKeyFigure` |  | |  | `AssetAccountingSortedKeyFigure` | `CHAR(17)` | Key Figure Box Number for Asset Accounting |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `AmountInDisplayCurrency` |  | |  | `cast( AssetHistory.AmountInDisplayCurrency as fis_balance_amount)` | `CURR(23)` | Balance Amount |
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
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `AssetWBSElementExternalID` |  | |  |  | `CHAR(24)` | Asset WBS Element |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `GroupMasterFixedAsset` |  | |  | `cast( AssetHistory.GroupMasterFixedAsset as fis_anlgr )` | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  | `cast( AssetHistory.GroupFixedAsset as fis_anlgr2 )` | `CHAR(4)` | Group Asset Subnumber |
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
| `AssetPlant` |  | |  |  | `CHAR(4)` | Asset Plant |
| `AssetCostCenter` |  | |  |  | `CHAR(10)` | Asset Cost Center |
| `AssetProfitCenter` |  | |  |  | `CHAR(10)` | Asset Profit Center |
| `AssetSegment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `AssetFunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area of Fixed Asset Master |
| `AssetBudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period of a Fixed Asset |
| `AssetGrant` |  | |  |  | `CHAR(20)` | Grant of Fixed Asset Master |
| `AssetFund` |  | |  |  | `CHAR(10)` | Fund of Fixed Asset Master |
| `AssetLocation` |  | |  |  | `CHAR(10)` | Asset location |
| `REInternalFinNumber` |  | |  |  | `CHAR(8)` | Internal Key of Real Estate Object (FI) |
| `RealEstateObject` |  | |  |  | `CHAR(8)` | Internal Key of Real Estate Object (Deprecated) |
| `AssetFundsCenter` |  | |  |  | `CHAR(16)` | Asset Funds Center |
| `AssetCostCtrActivityType` |  | |  |  | `CHAR(6)` | Asset Activity Type |
| `FirstAcquisitionFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year in Which First Acquisition Was Posted |
| `FirstAcquisitionFiscalPeriod` |  | |  |  | `NUMC(3)` | Period in Which First Acquisition Was Posted |
| `AssetCapitalizationDate` |  | |  |  | `DATS(8)` | Asset Capitalization Date |
| `AssetDeactivationDate` |  | |  |  | `DATS(8)` | Deactivation Date |
| `FixedAssetGroup` |  | |  |  | `CHAR(12)` | Asset Super Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier (Other Key Word) |
| `AssetSupplierName` |  | |  |  | `CHAR(30)` | Name of Asset Supplier |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerMasterFixedAsset` |  | |  |  | `CHAR(12)` | Partner Fixed Asset (Partner Main Asset Number) |
| `PartnerFixedAsset` |  | |  |  | `CHAR(4)` | Partner Asset Subnumber |
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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ASSETHISTORYSHEET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ASSETHISTORYSHEET')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'CFASTHISTSHEET', compiler.compareFilter: true }
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@Analytics: {query: true, settings.maxProcessingEffort: #UNLIMITED }
@EndUserText.label: 'Asset History Sheet'
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel: { usageType.serviceQuality: #D,
                usageType.sizeCategory: #XXL,
                usageType.dataClass: #MIXED,
                supportedCapabilities: [ #ANALYTICAL_QUERY ],
                modelingPattern: #ANALYTICAL_QUERY }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view C_AssetHistorySheet
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language                    : sylangu,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate                     : fagl_keydate,
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser                : syuname,

    @AnalyticsDetails.query.variableSequence : 10
    @Consumption.valueHelpDefinition: { entity: { name: 'I_AssetHistSheetKeyFigureSetVH', element: 'AssetAccountingKeyFigureSet' } }
    @Consumption.defaultValue: 'AHS'
    P_AssetAccountingKeyFigureSet : faa_key_figure_set,

    @AnalyticsDetails.query.variableSequence : 20
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeAsset', element: 'CompanyCode' }
                                     } ]
    @Consumption.derivation: { lookupEntity: 'I_UserSettingsForCompanyCode',
          resultElement: 'CompanyCode',
          binding: [ { targetElement : 'BusinessUser' , type : #PARAMETER, value : 'P_BusinessUser' } ] }
    P_CompanyCode                 : fis_bukrs,

    @AnalyticsDetails.query.variableSequence : 30
    @Consumption.derivation: { lookupEntity: 'I_Ledger',
          resultElement: 'Ledger', binding: [
          { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
         }
    P_Ledger                      : fis_rldnr,

    @AnalyticsDetails.query.variableSequence : 40
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_DepreciationAreaForLedger', element: 'AssetDepreciationArea' },
                                         additionalBinding:  [ { localParameter: 'P_CompanyCode', element: 'CompanyCode' },
                                                               { localParameter: 'P_Ledger', element: 'Ledger'} ]
                                     } ]
    P_AssetDepreciationArea       : fis_afabe,

    @AnalyticsDetails.query.variableSequence : 50
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDateForLedger',
    resultElement: 'FiscalYear', binding: [
      { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' },
      { targetElement : 'CompanyCode', type : #PARAMETER, value : 'P_CompanyCode' },
      { targetElement : 'Ledger' , type : #PARAMETER, value : 'P_Ledger' }]
    }
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' },
                                         additionalBinding:  [ { localParameter: 'P_CompanyCode', element: 'CompanyCode' } ]
                                     } ]
    P_FiscalYear                  : fis_ryear,

    @AnalyticsDetails.query.variableSequence : 60
    @Consumption.derivation: {
      lookupEntity : 'I_FsclCalDateFsclYrLastPeriod',
      resultElement: 'FiscalPeriod', binding: [
        { targetElement : 'CompanyCode', type : #PARAMETER, value : 'P_CompanyCode' },
        { targetElement : 'Ledger' , type : #PARAMETER, value : 'P_Ledger' },
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' }]
      }
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearPeriodForLedger', element: 'FiscalPeriod' },
                                         additionalBinding:  [ { localParameter: 'P_CompanyCode', element: 'CompanyCode' },
                                                               { localParameter: 'P_Ledger', element: 'Ledger' },
                                                               { localParameter: 'P_FiscalYear', element: 'FiscalYear' } ]
                                     } ]
    P_FiscalPeriod                : fis_period_to,

    @AnalyticsDetails.query.variableSequence : 70
    @Consumption.derivation: { lookupEntity: 'I_Ledgercompanycodecrcyroles',
          resultElement: 'CompanyCodeCurrencyRole', binding: [
          { targetElement : 'Ledger' , type : #PARAMETER, value : 'P_Ledger' },
          { targetElement : 'CompanyCode' , type : #PARAMETER, value : 'P_CompanyCode' } ]
         }

    @Consumption.valueHelpDefinition: {
         entity: { name:    'I_CurrencyRoleInLedgerCoCodeVH',
                   element: 'CurrencyRole'
                 }
                }
    P_CurrencyRole                : fins_curtp,

    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_FiscalYearPeriodForLedger',
          resultElement: 'FiscalPeriodEndDate', binding: [
          { targetElement : 'Ledger' , type : #PARAMETER, value : 'P_Ledger' },
          { targetElement : 'CompanyCode' , type : #PARAMETER, value : 'P_CompanyCode' },
          { targetElement : 'FiscalYear' , type : #PARAMETER, value : 'P_FiscalYear' },
          { targetElement : 'FiscalPeriod' , type : #PARAMETER, value : 'P_FiscalPeriod' } ]
         }
    P_FiscalPeriodEndDate         : fagl_keydate,

    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_LdgrCoCodeSelectedCrcyBranch',
          resultElement: 'SelectedCurrencyBranch', binding: [
          { targetElement : 'Ledger' , type : #PARAMETER, value : 'P_Ledger' },
          { targetElement : 'CompanyCode' , type : #PARAMETER, value : 'P_CompanyCode' },
          { targetElement : 'CurrencyRole' , type : #PARAMETER, value : 'P_CurrencyRole' } ]
         }
    P_SelectedCurrencyBranch      : fis_curtp

  as select from I_AssetHistorySheetCube
                 ( P_AssetAccountingKeyFigureSet: :P_AssetAccountingKeyFigureSet, P_FiscalYear: :P_FiscalYear, P_FiscalPeriod: :P_FiscalPeriod,  P_KeyDate: :P_FiscalPeriodEndDate ) as AssetHistory
{
  //Rows:
  //=====
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetAccountDetermination,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetClass,

  // Columns (Key Figures):
  //=======================
  @AnalyticsDetails.query.axis: #COLUMNS
  //@AnalyticsDetails.query.display: #TEXT    <<<<<Do not use this annotation: sorting of the columns in the history sheet gets lost
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetAccountingSortedKeyFigure                        as AssetAccountingKeyFigure,

  @Semantics.currencyCode:true
  AssetHistory.DisplayCurrency,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
  cast( AssetHistory.AmountInDisplayCurrency as fis_balance_amount) as AmountInDisplayCurrency,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @Semantics.unitOfMeasure:true
  AssetHistory.BaseUnit,

  @AnalyticsDetails.query.hidden: true
  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
  AssetHistory.Quantity,

  //Free characteristics:
  //=====================
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AcqnProdnCostGLAccount,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.ChartOfAccounts,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.CompanyCode,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.hidden: true
  AssetHistory.LedgerGroup,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.Ledger,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetDepreciationArea,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.ChartOfDepreciation,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.FiscalYear,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.FiscalPeriod,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.FinancialStatementVariant,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.ControllingArea,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.CostCenter,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetWBSElementExternalID,
  
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.ProfitCenter,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.Segment,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.FundsCenter,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.BusinessArea,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.MasterFixedAsset,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.FixedAsset,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  cast( AssetHistory.GroupMasterFixedAsset as fis_anlgr )              as GroupMasterFixedAsset,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  cast( AssetHistory.GroupFixedAsset as fis_anlgr2 )                   as GroupFixedAsset,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.PersonnelNumber,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetPersonnelNumber,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.FinancialManagementArea,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.Fund,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.GrantID,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.FunctionalArea,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.BudgetPeriod,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.SubLedgerAcctLineItemType,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetTransactionType,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.BusinessTransactionCategory,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.BusinessTransactionType,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.FinancialClosingStep,
    
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetAcctTransClassfctn,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.FinancialAccountType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.AccountingDocumentCreationDate,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.CreationTime,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.JointVentureCostRecoveryCode,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AccountingPrinciple,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.FiscalYearVariant,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.CountryChartOfAccounts,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.GLAccount,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AlternativeGLAccount,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetBusinessArea,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetPlant,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetCostCenter,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetProfitCenter,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetSegment,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetFunctionalArea,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetBudgetPeriod,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.AssetGrant,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.AssetFund,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.AssetLocation,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.REInternalFinNumber,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:    'REInternalFinNumber'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'REInternalFinNumber'
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.RealEstateObject,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.AssetFundsCenter,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetCostCtrActivityType,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.FirstAcquisitionFiscalYear,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.FirstAcquisitionFiscalPeriod,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.AssetCapitalizationDate,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.AssetDeactivationDate,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.FixedAssetGroup,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.Supplier,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.AssetSupplierName,  
  
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.PartnerCompanyCode,
  
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.PartnerMasterFixedAsset,
  
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.PartnerFixedAsset,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.InvestmentOrder,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.InventoryIsCounted,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.LastInventoryDate,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.Inventory,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.Group1AssetEvaluationKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.Group2AssetEvaluationKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.Group3AssetEvaluationKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.Group4AssetEvaluationKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.Group5AssetEvaluationKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.AssetSerialNumber,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.InvestmentSupportMeasure,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.DepreciationStartDate,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.SpecialDeprStartDate,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.DepreciationKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.PlannedUsefulLifeInYears,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.PlannedUsefulLifeInPeriods,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.FixedAssetUsageObject,
  
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.AssetRevaluationIndex,
  
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.Country,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.NationalClassification,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetHistory.TaxDepreciationGroup,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.AccountingDocument,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.Room,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.VehicleLicensePlateNumber,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.TaxJurisdiction,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.WBSElementExternalID,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.RU_AssetOKOF,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.RU_AssetDepreciationGroup,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.JP_PrptyTxRptCity,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.JP_PrptyTxRptClassfctnKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetHistory.AssetAdditionalDescription
}
where
       CompanyCode                 = :P_CompanyCode
  and  Ledger                      = :P_Ledger
  and  AssetDepreciationArea       = :P_AssetDepreciationArea
  and  SelectedCurrencyBranch      = :P_SelectedCurrencyBranch
  //The following properties of the where clause are used to enable the value help on the parameters by the analytical engine
  and  AssetAccountingKeyFigureSet = :P_AssetAccountingKeyFigureSet
  and  LedgerFiscalYear            = :P_FiscalYear
```
