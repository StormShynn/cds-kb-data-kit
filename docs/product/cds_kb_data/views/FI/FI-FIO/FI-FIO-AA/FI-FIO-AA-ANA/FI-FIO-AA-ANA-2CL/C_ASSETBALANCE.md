---
name: C_ASSETBALANCE
description: "With this view, you can form balances of various dimensions of the fixed asset and the journal entry including the most important business entities, such as company code, depreciation area, segment, APC balance sheet account or profit center. The report enables you to understand the net book value of fixed assets derived from acquisition and production costs (APC) and depreciation. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisition and production cost, cumulative depreciation and netbook value at reporting date This CDS view provides the prerequisites for answering the following business questions: What are my acquisition and production costs (APC) at the reporting date? What is my planned accumulated depreciation for each depreciation type at the reporting date? What Is my accumulated depreciation for each depreciation type posted in the general ledger at the reporting date? What is my net book value at the reporting date? What are the balances drilled down by the asset?"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ASSETBALANCE')/$value
semantic_en: "With this view, you can form balances of various dimensions of the fixed asset and the journal entry including the most important business entities, such as company code, depreciation area, segment, APC balance sheet account or profit center. The report enables you to understand the net book value of fixed assets derived from acquisition and production costs (APC) and depreciation. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisition and production cost, cumulative depreciation and netbook value at reporting date This CDS view provides the prerequisites for answering the following business questions: What are my acquisition and production costs (APC) at the reporting date? What is my planned accumulated depreciation for each depreciation type at the reporting date? What Is my accumulated depreciation for each depreciation type posted in the general ledger at the reporting date? What is my net book value at the reporting date? What are the balances drilled down by the asset?"
semantic_vi: "Asset Balances — CDS view tiêu dùng dựa trên I_AssetBalanceCube."
keywords:
  - "Asset Balances"
  - "asset"
  - "balances"
  - "account"
  - "determination"
  - "class"
  - "accounting"
  - "figure"
  - "display"
  - "currency"
  - "amount"
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
---
# C_ASSETBALANCE

**With this view, you can form balances of various dimensions of the fixed asset and the journal entry including the most important business entities, such as company code, depreciation area, segment, APC balance sheet account or profit center. The report enables you to understand the net book value of fixed assets derived from acquisition and production costs (APC) and depreciation. SAP provides preconfigured key figure groups that you can use for your reporting. These key figure groups bundle key figure codes, such as acquisition and production cost, cumulative depreciation and netbook value at reporting date This CDS view provides the prerequisites for answering the following business questions: What are my acquisition and production costs (APC) at the reporting date? What is my planned accumulated depreciation for each depreciation type at the reporting date? What Is my accumulated depreciation for each depreciation type posted in the general ledger at the reporting date? What is my net book value at the reporting date? What are the balances drilled down by the asset?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ASSETBALANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetAccountDetermination` |  | |  |  | `CHAR(8)` | Account Determination |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `AssetAccountingKeyFigure` |  | |  | `AssetAccountingSortedKeyFigure` | `CHAR(17)` | Key Figure Box Number for Asset Accounting |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `AmountInDisplayCurrency` |  | |  | `cast( AssetBal.AmountInDisplayCurrency as fis_balance_amount )` | `CURR(23)` | Balance Amount |
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
| `GroupMasterFixedAsset` |  | |  | `cast( AssetBal.GroupMasterFixedAsset as fis_anlgr )` | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  | `cast( AssetBal.GroupFixedAsset as fis_anlgr2 )` | `CHAR(4)` | Group Asset Subnumber |
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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ASSETBALANCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ASSETBALANCE')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'CFASTBALANCE', compiler.compareFilter: true }
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@EndUserText.label: 'Asset Balances'
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel: { usageType.serviceQuality: #D,
                usageType.sizeCategory: #XXL,
                usageType.dataClass: #MIXED,
                supportedCapabilities: [ #ANALYTICAL_QUERY ],
                modelingPattern: #ANALYTICAL_QUERY }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view C_AssetBalance
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
    @Consumption.valueHelpDefinition: { entity: { name: 'I_AssetBalancesKeyFigureSetVH', element: 'AssetAccountingKeyFigureSet' } }
    @Consumption.defaultValue: 'ABS_DEF'
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

  as select from I_AssetBalanceCube( P_AssetAccountingKeyFigureSet: :P_AssetAccountingKeyFigureSet,  P_FiscalYear: :P_FiscalYear , P_FiscalPeriod: :P_FiscalPeriod, P_KeyDate: :P_FiscalPeriodEndDate ) as AssetBal
{
  //Rows:
  //=====
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetAccountDetermination,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetClass,

  // Columns (Key Figures):
  //=======================
  @AnalyticsDetails.query.axis: #COLUMNS
  //@AnalyticsDetails.query.display: #TEXT    <<<<<Do not use this annotation: sorting of the columns in the history sheet gets lost
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetAccountingSortedKeyFigure                        as AssetAccountingKeyFigure,

  @Semantics.currencyCode:true
  AssetBal.DisplayCurrency,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
  cast( AssetBal.AmountInDisplayCurrency as fis_balance_amount ) as AmountInDisplayCurrency,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @Semantics.unitOfMeasure:true
  AssetBal.BaseUnit,

  @AnalyticsDetails.query.hidden: true
  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
  AssetBal.Quantity,

  //Free characteristics:
  //=====================
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AcqnProdnCostGLAccount,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.ChartOfAccounts,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.CompanyCode,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.hidden: true
  AssetBal.LedgerGroup,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.Ledger,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetDepreciationArea,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.ChartOfDepreciation,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.FiscalYear,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.FiscalPeriod,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.FinancialStatementVariant,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.ControllingArea,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetPlant,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.CostCenter,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.ProfitCenter,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.Segment,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.FundsCenter,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.BusinessArea,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.MasterFixedAsset,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.FixedAsset,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  cast( AssetBal.GroupMasterFixedAsset as fis_anlgr )            as GroupMasterFixedAsset,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  cast( AssetBal.GroupFixedAsset as fis_anlgr2 )                 as GroupFixedAsset,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.PersonnelNumber,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetPersonnelNumber,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.FinancialManagementArea,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.Fund,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.GrantID,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.FunctionalArea,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.BudgetPeriod,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.SubLedgerAcctLineItemType,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetTransactionType,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.BusinessTransactionCategory,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.BusinessTransactionType,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.FinancialClosingStep,
  
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetAcctTransClassfctn,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.FinancialAccountType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.AccountingDocumentCreationDate,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.CreationTime,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.JointVentureCostRecoveryCode,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AccountingPrinciple,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.FiscalYearVariant,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.CountryChartOfAccounts,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.GLAccount,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AlternativeGLAccount,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetBusinessArea,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetCostCenter,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetWBSElementExternalID,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetProfitCenter,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetSegment,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetFunctionalArea,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetBudgetPeriod,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.AssetGrant,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.AssetFund,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.AssetLocation,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.AssetFundsCenter,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.REInternalFinNumber,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:    'REInternalFinNumber'
  //  @VDM.lifecycle.status:    #DEPRECATED
  //  @VDM.lifecycle.successor: 'REInternalFinNumber'
  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.RealEstateObject,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetCostCtrActivityType,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.FirstAcquisitionFiscalYear,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.FirstAcquisitionFiscalPeriod,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.AssetCapitalizationDate,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.AssetDeactivationDate,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.FixedAssetGroup,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.Supplier,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.AssetSupplierName,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.InvestmentOrder,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.InventoryIsCounted,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.LastInventoryDate,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.Inventory,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.Group1AssetEvaluationKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.Group2AssetEvaluationKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.Group3AssetEvaluationKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.Group4AssetEvaluationKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.Group5AssetEvaluationKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.AssetSerialNumber,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.InvestmentSupportMeasure,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.DepreciationStartDate,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.SpecialDeprStartDate,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.DepreciationKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.PlannedUsefulLifeInYears,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.PlannedUsefulLifeInPeriods,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.FixedAssetUsageObject,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.AssetRevaluationIndex,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.Country,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.NationalClassification,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AssetBal.TaxDepreciationGroup,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.AccountingDocument,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.Room,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.VehicleLicensePlateNumber,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.TaxJurisdiction,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.WBSElementExternalID,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.RU_AssetOKOF,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.RU_AssetDepreciationGroup,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.JP_PrptyTxRptCity,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.JP_PrptyTxRptClassfctnKey,

  @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  AssetBal.AssetAdditionalDescription
}
where
       CompanyCode                 = :P_CompanyCode
  and  Ledger                      = :P_Ledger
  and  AssetDepreciationArea       = :P_AssetDepreciationArea
  and(
       AssetDeactivationDate       > :P_FiscalPeriodEndDate
    or AssetDeactivationDate       = '00000000'
  )
  and  SelectedCurrencyBranch      = :P_SelectedCurrencyBranch
  //The following properties of the where clause are used to enable the value help on the parameters by the analytical engine
  and  AssetAccountingKeyFigureSet = :P_AssetAccountingKeyFigureSet
  and  LedgerFiscalYear            = :P_FiscalYear
```
