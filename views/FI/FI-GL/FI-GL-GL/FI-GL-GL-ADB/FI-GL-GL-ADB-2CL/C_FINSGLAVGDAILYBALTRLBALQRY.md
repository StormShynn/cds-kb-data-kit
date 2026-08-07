---
name: C_FINSGLAVGDAILYBALTRLBALQRY
description: Finsglavgdailybaltrlbalqry
app_component: FI-GL-GL-ADB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - consumption-view
  - component:FI-GL-GL-ADB-2CL
  - lob:Finance
---
# C_FINSGLAVGDAILYBALTRLBALQRY

**Finsglavgdailybaltrlbalqry**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-ADB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` |  |  |
| `GLAccount` |  | |  |  |  |  |
| `localized` |  | |  | `_GLAccountInChartOfAccounts._Text.GLAccountName : localized` |  |  |
| `PostingDate` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `LedgerFiscalYear` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ControllingAreaName` |  | | `_ControllingArea` | `ControllingAreaName` |  |  |
| `Segment` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `PartnerProfitCenter` |  | |  |  |  |  |
| `PartnerFunctionalArea` |  | |  |  |  |  |
| `PartnerCompany` |  | |  |  |  |  |
| `PartnerSegment` |  | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `FinancialServicesProductGroup` |  | |  |  |  |  |
| `FinancialServicesBranch` |  | |  |  |  |  |
| `FinancialDataSource` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `CustomerSupplierCountry` |  | |  |  |  |  |
| `CustomerSupplierIndustry` |  | |  |  |  |  |
| `cuky` |  | |  | `virtual BalanceTransactionCurrency : abap.cuky` |  |  |
| `AmountInBalanceTransacCrcy` |  | |  | `curr_to_decfloat_amount( AmountInBalanceTransacCrcy )` |  |  |
| `PriorDayBalInBalTransCrcy` |  | |  |  |  |  |
| `CurDayActyAmtInBalTransCrcy` |  | |  |  |  |  |
| `PriorMonthBalInBalTransCrcy` |  | |  |  |  |  |
| `CurMonthActyAmtInBalTransCrcy` |  | |  |  |  |  |
| `YTDBalInBalTransCrcy` |  | |  |  |  |  |
| `MTDAvgDailyBalInBalTransCrcy` |  | |  |  |  |  |
| `QTDAvgDailyBalInBalTransCrcy` |  | |  |  |  |  |
| `YTDAvgDailyBalInBalTransCrcy` |  | |  |  |  |  |
| `MTDAvgActyAmtInBalTransCrcy` |  | |  |  |  |  |
| `QTDActyAmtInBalTransCrcy` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  | `curr_to_decfloat_amount( AmountInCompanyCodeCurrency )` |  |  |
| `PriorDayBalInCCCrcy` |  | |  |  |  |  |
| `CurDayActyAmtInCCCrcy` |  | |  |  |  |  |
| `PriorMonthBalInCCCrcy` |  | |  |  |  |  |
| `CurMonthActyAmtInCCCrcy` |  | |  |  |  |  |
| `YTDBalInCCCrcy` |  | |  |  |  |  |
| `MTDAvgDailyBalInCCCrcy` |  | |  |  |  |  |
| `QTDAvgDailyBalInCCCrcy` |  | |  |  |  |  |
| `YTDAvgDailyBalInCCCrcy` |  | |  |  |  |  |
| `MTDAvgActyAmtInCCCrcy` |  | |  |  |  |  |
| `QTDActyAmtInCCCrcy` |  | |  |  |  |  |
| `AmountInGlobalCurrency` |  | |  | `curr_to_decfloat_amount( AmountInGlobalCurrency )` |  |  |
| `PriorDayBalInGlobCrcy` |  | |  |  |  |  |
| `CurDayActyAmtInGlobCrcy` |  | |  |  |  |  |
| `PriorMonthBalInGlobCrcy` |  | |  |  |  |  |
| `CurMonthActyAmtInGlobCrcy` |  | |  |  |  |  |
| `YTDBalInGlobCrcy` |  | |  |  |  |  |
| `MTDAvgDailyBalInGlobCrcy` |  | |  |  |  |  |
| `QTDAvgDailyBalInGlobCrcy` |  | |  |  |  |  |
| `YTDAvgDailyBalInGlobCrcy` |  | |  |  |  |  |
| `MTDAvgActyAmtInGlobCrcy` |  | |  |  |  |  |
| `QTDActyAmtInGlobCrcy` |  | |  |  |  |  |
| `AmountInFunctionalCurrency` |  | |  | `curr_to_decfloat_amount( AmountInFunctionalCurrency )` |  |  |
| `PriorDayBalInFuncnlCrcy` |  | |  |  |  |  |
| `CurDayActyAmtInFuncnlCrcy` |  | |  |  |  |  |
| `PriorMonthBalInFuncnlCrcy` |  | |  |  |  |  |
| `CurMonthActyAmtInFuncnlCrcy` |  | |  |  |  |  |
| `YTDBalInFuncnlCrcy` |  | |  |  |  |  |
| `MTDAvgDailyBalInFuncnlCrcy` |  | |  |  |  |  |
| `QTDAvgDailyBalInFuncnlCrcy` |  | |  |  |  |  |
| `YTDAvgDailyBalInFuncnlCrcy` |  | |  |  |  |  |
| `MTDAvgActyAmtInFuncnlCrcy` |  | |  |  |  |  |
| `QTDActyAmtInFuncnlCrcy` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency1` |  | |  | `curr_to_decfloat_amount( AmountInFreeDefinedCurrency1 )` |  |  |
| `PriorDayBalInFDCrcy1` |  | |  |  |  |  |
| `CurDayActyAmtInFDCrcy1` |  | |  |  |  |  |
| `PriorMonthBalInFDCrcy1` |  | |  |  |  |  |
| `CurMonthActyAmtInFDCrcy1` |  | |  |  |  |  |
| `YTDBalInFDCrcy1` |  | |  |  |  |  |
| `MTDAvgDailyBalInFDCrcy1` |  | |  |  |  |  |
| `QTDAvgDailyBalInFDCrcy1` |  | |  |  |  |  |
| `YTDAvgDailyBalInFDCrcy1` |  | |  |  |  |  |
| `MTDAvgActyAmtInFDCrcy1` |  | |  |  |  |  |
| `QTDActyAmtInFDCrcy1` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency2` |  | |  | `curr_to_decfloat_amount( AmountInFreeDefinedCurrency2 )` |  |  |
| `PriorDayBalInFDCrcy2` |  | |  |  |  |  |
| `CurDayActyAmtInFDCrcy2` |  | |  |  |  |  |
| `PriorMonthBalInFDCrcy2` |  | |  |  |  |  |
| `CurMonthActyAmtInFDCrcy2` |  | |  |  |  |  |
| `YTDBalInFDCrcy2` |  | |  |  |  |  |
| `MTDAvgDailyBalInFDCrcy2` |  | |  |  |  |  |
| `QTDAvgDailyBalInFDCrcy2` |  | |  |  |  |  |
| `YTDAvgDailyBalInFDCrcy2` |  | |  |  |  |  |
| `MTDAvgActyAmtInFDCrcy2` |  | |  |  |  |  |
| `QTDActyAmtInFDCrcy2` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@Analytics.technicalName : 'CADBKFCTRIALBAL'
@Metadata:    { ignorePropagatedAnnotations: true,
                allowExtensions: true }
@ObjectModel: { supportedCapabilities: [ #ANALYTICAL_QUERY ],
                modelingPattern: #ANALYTICAL_QUERY,
                usageType: { sizeCategory: #XXL,
                             serviceQuality: #D,
                             dataClass: #MIXED } }
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'ADB Key Figures - Query'

define transient view entity C_FinSGLAvgDailyBalTrlBalQry
  provider contract analytical_query
  with parameters
    @Consumption.derivation: { lookupEntity: 'I_MySessionContext',
    resultElement: 'UserLocalDate', binding: [
    { targetElement : 'UserID' , type : #SYSTEM_FIELD, value : '#USER' } ]
    }
    @EndUserText.label: 'Key Date'
    P_ReportingDate : sydate,

    @Environment.systemField: #SYSTEM_DATE
    @EndUserText.label: 'Created Until (Date)'
    P_CreationDate  : sydate,

    @Environment.systemField: #SYSTEM_TIME
    @EndUserText.label: 'Created Until (Time)'
    P_CreationTime  : syuzeit,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate       : sydate

  as projection on I_FinSGLAvgDailyBalKeyFigC(
                   P_ReportingDate: $parameters.P_ReportingDate,
                   P_CreationDate: $parameters.P_CreationDate,
                   P_CreationTime: $parameters.P_CreationTime
                   ) as I_FinSGLAvgDailyBalKeyFig
{

          //***************************************************************
          // Dimensions
          //***************************************************************

          // Filter/ Fixed Rows
          @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
          @Consumption.derivation: { lookupEntity: 'I_Ledger',
                resultElement: 'Ledger', binding: [
                { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
               }
          @AnalyticsDetails.query.variableSequence : 10
          Ledger,

          @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
          @AnalyticsDetails.query.variableSequence : 20
          @AnalyticsDetails.query.axis: #ROWS
          @AnalyticsDetails.query.totals: #SHOW
          CompanyCode,
          _CompanyCode.CompanyCodeName,

          @AnalyticsDetails.query.variableSequence : 30
          @AnalyticsDetails.query.axis: #ROWS
          @AnalyticsDetails.query.totals: #SHOW
          GLAccount,
          @Semantics.text:true
          @ObjectModel.text.element: ['GLAccountName' ]
          @UI.textArrangement: #TEXT_LAST
          _GLAccountInChartOfAccounts._Text.GLAccountName                                                                      : localized,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @UI.hidden: true
          @AnalyticsDetails.query.hidden: true
          PostingDate,

          @AnalyticsDetails.query.variableSequence : 40
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @Semantics.fiscal.year: true
          FiscalYear,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @UI.hidden: true
          LedgerFiscalYear,

          ////////////////////////////////////////////////////////////////////////////////////
          // .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
          ////////////////////////////////////////////////////////////////////////////////////

          @AnalyticsDetails.query.variableSequence : 50
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @UI.hidden: true
          ProfitCenter,
          @Semantics.text:true
          @ObjectModel.text.element: [ 'ProfitCenterName' ]
          _ProfitCenter[1:ValidityEndDate   >= $parameters.P_KeyDate and
                          ValidityStartDate <= $parameters.P_KeyDate]._Text.ProfitCenterName        as ProfitCenterName               : localized,

          @AnalyticsDetails.query.variableSequence : 60
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          ControllingArea,
          @Semantics.text:true
          @ObjectModel.text.element: [ 'ControllingAreaName' ]
          _ControllingArea.ControllingAreaName                                                      as ControllingAreaName,

          @AnalyticsDetails.query.variableSequence : 70
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @Consumption.hidden: true
          Segment,
          @Semantics.text:true
          @ObjectModel.text.element: [ 'SegmentName' ]
          _Segment._Text.SegmentName                                                                as SegmentName                                                                            : localized,

          @AnalyticsDetails.query.variableSequence : 80
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @AnalyticsDetails.query.hidden: true
          @UI.hidden: true
          CostCenter,
          @Semantics.text:true
          @ObjectModel.text.element: [ 'CostCenterName' ]
          _CostCenter[1:ValidityEndDate   >= $parameters.P_KeyDate and
                        ValidityStartDate <= $parameters.P_KeyDate]._Text.CostCenterName            as CostCenterName                     : localized,
          @AnalyticsDetails.query.variableSequence : 90
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @AnalyticsDetails.query.hidden: true
          @UI.hidden: true
          PartnerProfitCenter,
          @Semantics.text:true
          @ObjectModel.text.element: [ 'PartnerProfitCenterName' ]
          _PartnerProfitCenter[1:ValidityEndDate   >= $parameters.P_KeyDate and
                                 ValidityStartDate <= $parameters.P_KeyDate]._Text.ProfitCenterName as PartnerProfitCenterName : localized,
          @AnalyticsDetails.query.variableSequence : 100
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @AnalyticsDetails.query.hidden: true
          @UI.hidden: true
          PartnerFunctionalArea,
          @Semantics.text:true
          @ObjectModel.text.element: [ 'PartnerFunctionalAreaName' ]
          _PartnerFunctionalArea._Text.FunctionalAreaName                                           as PartnerFunctionalAreaName                                         : localized,

          @AnalyticsDetails.query.variableSequence : 110
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @AnalyticsDetails.query.hidden: true
          @UI.hidden: true
          PartnerCompany,

          @AnalyticsDetails.query.variableSequence : 120
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @AnalyticsDetails.query.hidden: true
          @UI.hidden: true
          PartnerSegment,

          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          FiscalYearVariant,

          @AnalyticsDetails.query.variableSequence : 130
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @AnalyticsDetails.query.hidden: true
          @UI.hidden: true
          ChartOfAccounts,

          ///////////////////////////////////////////////////////////////////////
          // .INCLUDE ACDOC_SI_JVA  Universal Journal Entry: Fields for Financial Services
          ///////////////////////////////////////////////////////////////////////
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @Consumption.switched: [{id: [ 'FINS_FS_ACCDIM' ]}]
          FinancialServicesProductGroup,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @Consumption.switched: [{id: [ 'FINS_FS_ACCDIM' ]}]
          FinancialServicesBranch,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @Consumption.switched: [{id: [ 'FINS_FS_ACCDIM' ]}]
          FinancialDataSource,

          //////////////////////////////////////////////////////////////////////
          //  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
          //////////////////////////////////////////////////////////////////////
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @Consumption.switched: [{id: [ 'FINS_FS_ACCDIM' ]}]
          CustomerGroup,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @Consumption.switched: [{id: [ 'FINS_FS_ACCDIM' ]}]
          CustomerSupplierCountry,
          @AnalyticsDetails.query.axis: #FREE
          @AnalyticsDetails.query.totals: #SHOW
          @Consumption.switched: [{id: [ 'FINS_FS_ACCDIM' ]}]
          CustomerSupplierIndustry,

          //*******************************************************************
          // Measures
          //*******************************************************************

          //-------------------------------------------------------------------
          // Calculate Key Figures in Balance Transaction Currency
          //-------------------------------------------------------------------
  virtual BalanceTransactionCurrency : abap.cuky,

          //---------------------------------------------
          // Amount in Transaction Currency
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
          curr_to_decfloat_amount( AmountInBalanceTransacCrcy )                                     as AmountInBalanceTransacCrcy,

          //---------------------------------------------
          // Prior Day Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
          @EndUserText.label: 'PD Bal BalTransCrcy'
          PriorDayBalInBalTransCrcy,

          //---------------------------------------------
          // Current Day Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
          @EndUserText.label: 'CD Acty BalTansCrcy'
          CurDayActyAmtInBalTransCrcy,

          //---------------------------------------------
          // Prior Month Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
          @EndUserText.label: 'PM Bal BalTansCrcy'
          PriorMonthBalInBalTransCrcy,

          //---------------------------------------------
          // Current Month Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
          @EndUserText.label: 'CM Acty BalTansCrcy'
          CurMonthActyAmtInBalTransCrcy,

          //---------------------------------------------
          // Year-to-Date Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
          @EndUserText.label: 'YTD Bal BalTansCrcy'
          YTDBalInBalTransCrcy,

          //---------------------------------------------
          // Month-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
          @EndUserText.label: 'MTD ADB BalTransCrcy'
          MTDAvgDailyBalInBalTransCrcy,

          //---------------------------------------------
          // Quarter-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
          @EndUserText.label: 'QTD ADB BalTransCrcy'
          QTDAvgDailyBalInBalTransCrcy,

          //---------------------------------------------
          // Year-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
          @EndUserText.label: 'YTD ADB BalTransCrcy'
          YTDAvgDailyBalInBalTransCrcy,

          //---------------------------------------------
          // Month-to-Date Average Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
          @EndUserText.label: 'MTD Avg Acty BalTans'
          MTDAvgActyAmtInBalTransCrcy,

          //---------------------------------------------
          // Quarter-to-Date Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
          @EndUserText.label: 'QTD Acty BalTans'
          QTDActyAmtInBalTransCrcy,


          //-------------------------------------------------------------------
          // Calculate Key Figures in Company Code Currency
          //-------------------------------------------------------------------

  virtual CompanyCodeCurrency        : abap.cuky,

          //---------------------------------------------
          // Amount in Company Code Currency
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
          curr_to_decfloat_amount( AmountInCompanyCodeCurrency )                                    as AmountInCompanyCodeCurrency,

          //---------------------------------------------
          // Prior Day Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
          @EndUserText.label: 'PD Bal CompCoCrcy'
          PriorDayBalInCCCrcy,

          //---------------------------------------------
          // Current Day Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
          @EndUserText.label: 'CD Acty CompCoCrcy'
          CurDayActyAmtInCCCrcy,

          //---------------------------------------------
          // Prior Month Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
          @EndUserText.label: 'PM Bal CompCoCrcy'
          PriorMonthBalInCCCrcy,

          //---------------------------------------------
          // Current Month Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
          @EndUserText.label: 'CM Acty CompCoCrcy'
          CurMonthActyAmtInCCCrcy,

          //---------------------------------------------
          // Year-to-Date Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
          @EndUserText.label: 'YTD Bal CompCoCrcy'
          YTDBalInCCCrcy,

          //---------------------------------------------
          // Month-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
          @EndUserText.label: 'MTD ADB CompCoCrcy'
          MTDAvgDailyBalInCCCrcy,

          //---------------------------------------------
          // Quarter-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
          @EndUserText.label: 'QTD ADB CompCoCrcy'
          QTDAvgDailyBalInCCCrcy,

          //---------------------------------------------
          // Year-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
          @EndUserText.label: 'YTD ADB CompCoCrcy'
          YTDAvgDailyBalInCCCrcy,

          //---------------------------------------------
          // Month-to-Date Average Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
          @EndUserText.label: 'MTD Avg Acty CompCoC'
          MTDAvgActyAmtInCCCrcy,

          //---------------------------------------------
          // Quarter-to-Date Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
          @EndUserText.label: 'QTD Acty CompCoC'
          QTDActyAmtInCCCrcy,


          //-------------------------------------------------------------------
          // Calculate Key Figures in Global Currency
          //-------------------------------------------------------------------

  virtual GlobalCurrency             : abap.cuky,

          //---------------------------------------------
          // Amount in Global Currency
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'GlobalCurrency'
          curr_to_decfloat_amount( AmountInGlobalCurrency )                                         as AmountInGlobalCurrency,

          //---------------------------------------------
          // Prior Day Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'GlobalCurrency'
          @EndUserText.label: 'PD Bal Global Crcy'
          PriorDayBalInGlobCrcy,

          //---------------------------------------------
          // Current Day Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'GlobalCurrency'
          @EndUserText.label: 'CD Activity GC'
          CurDayActyAmtInGlobCrcy,

          //---------------------------------------------
          // Prior Month Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'GlobalCurrency'
          @EndUserText.label: 'PM Bal Global Crcy'
          PriorMonthBalInGlobCrcy,

          //---------------------------------------------
          // Current Month Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'GlobalCurrency'
          @EndUserText.label: 'CM Activity GC'
          CurMonthActyAmtInGlobCrcy,

          //---------------------------------------------
          // Year-to-Date Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'GlobalCurrency'
          @EndUserText.label: 'YTD Bal Global Crcy'
          YTDBalInGlobCrcy,

          //---------------------------------------------
          // Month-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'GlobalCurrency'
          @EndUserText.label: 'MTD ADB GlobalCrcy'
          MTDAvgDailyBalInGlobCrcy,

          //---------------------------------------------
          // Quarter-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'GlobalCurrency'
          @EndUserText.label: 'QTD ADB GlobalCrcy'
          QTDAvgDailyBalInGlobCrcy,

          //---------------------------------------------
          // Year-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'GlobalCurrency'
          @EndUserText.label: 'YTD ADB GlobalCrcy'
          YTDAvgDailyBalInGlobCrcy,

          //---------------------------------------------
          // Month-to-Date Average Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'GlobalCurrency'
          @EndUserText.label: 'MTD Avg Ac Global Cr'
          MTDAvgActyAmtInGlobCrcy,

          //---------------------------------------------
          // Quarter-to-Date Average Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'GlobalCurrency'
          @EndUserText.label: 'QTD Ac Global Cr'
          QTDActyAmtInGlobCrcy,


          //-------------------------------------------------------------------
          // Calculate Key Figures in Functional Currency
          //-------------------------------------------------------------------

  virtual FunctionalCurrency         : abap.cuky,

          //---------------------------------------------
          // Amount in Functional Currency
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FunctionalCurrency'
          curr_to_decfloat_amount( AmountInFunctionalCurrency )                                         as AmountInFunctionalCurrency,

          //---------------------------------------------
          // Prior Day Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FunctionalCurrency'
          @EndUserText.label: 'PD Bal Functional Crcy'
          PriorDayBalInFuncnlCrcy,

          //---------------------------------------------
          // Current Day Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FunctionalCurrency'
          @EndUserText.label: 'CD Activity FC'
          CurDayActyAmtInFuncnlCrcy,

          //---------------------------------------------
          // Prior Month Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FunctionalCurrency'
          @EndUserText.label: 'PM Bal Functional Crcy'
          PriorMonthBalInFuncnlCrcy,

          //---------------------------------------------
          // Current Month Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FunctionalCurrency'
          @EndUserText.label: 'CM Activity FC'
          CurMonthActyAmtInFuncnlCrcy,

          //---------------------------------------------
          // Year-to-Date Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FunctionalCurrency'
          @EndUserText.label: 'YTD Bal Functional Crcy'
          YTDBalInFuncnlCrcy,

          //---------------------------------------------
          // Month-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FunctionalCurrency'
          @EndUserText.label: 'MTD ADB FunctionalCrcy'
          MTDAvgDailyBalInFuncnlCrcy,

          //---------------------------------------------
          // Quarter-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FunctionalCurrency'
          @EndUserText.label: 'QTD ADB FunctionalCrcy'
          QTDAvgDailyBalInFuncnlCrcy,

          //---------------------------------------------
          // Year-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FunctionalCurrency'
          @EndUserText.label: 'YTD ADB FunctionalCrcy'
          YTDAvgDailyBalInFuncnlCrcy,

          //---------------------------------------------
          // Month-to-Date Average Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FunctionalCurrency'
          @EndUserText.label: 'MTD Avg Ac Functional Cr'
          MTDAvgActyAmtInFuncnlCrcy,

          //---------------------------------------------
          // Quarter-to-Date Average Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FunctionalCurrency'
          @EndUserText.label: 'QTD Ac Functional Cr'
          QTDActyAmtInFuncnlCrcy,

          //-------------------------------------------------------------------
          // Calculate Key Figures in Freely Defined Currency 1
          //-------------------------------------------------------------------

  virtual FreeDefinedCurrency1       : abap.cuky,

          //---------------------------------------------
          // Amount in Freely Defined Currency 1 (FreeDefinedCurrency1)
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
          curr_to_decfloat_amount( AmountInFreeDefinedCurrency1 )                                   as AmountInFreeDefinedCurrency1,

          //---------------------------------------------
          // Prior Day Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
          @EndUserText.label: 'PD Bal FreeDefCrcy1'
          PriorDayBalInFDCrcy1,

          //---------------------------------------------
          // Current Day Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
          @EndUserText.label: 'CD Acty FreeDefCrcy1'
          CurDayActyAmtInFDCrcy1,

          //---------------------------------------------
          // Prior Month Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
          @EndUserText.label: 'PM Bal FreeDefCrcy1'
          PriorMonthBalInFDCrcy1,

          //---------------------------------------------
          // Current Month Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
          @EndUserText.label: 'CM Acty FreeDefCrcy1'
          CurMonthActyAmtInFDCrcy1,

          //---------------------------------------------
          // Year-to-Date Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
          @EndUserText.label: 'YTD Bal FreeDefCrcy1'
          YTDBalInFDCrcy1,

          //---------------------------------------------
          // Month-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
          @EndUserText.label: 'MTD ADB FreeDefCrcy1'
          MTDAvgDailyBalInFDCrcy1,

          //---------------------------------------------
          // Quarter-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
          @EndUserText.label: 'QTD ADB FreeDefCrcy1'
          QTDAvgDailyBalInFDCrcy1,

          //---------------------------------------------
          // Year-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
          @EndUserText.label: 'YTD ADB FreeDefCrcy1'
          YTDAvgDailyBalInFDCrcy1,

          //---------------------------------------------
          // Month-to-Date Average Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
          @EndUserText.label: 'MTD Avg Acty FreeDf1'
          MTDAvgActyAmtInFDCrcy1,

          //---------------------------------------------
          // Quarter-to-Date Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
          @EndUserText.label: 'QTD Acty FreeDf1'
          QTDActyAmtInFDCrcy1,

          //-------------------------------------------------------------------
          // Calculate Key Figures in Freely Defined Currency 2
          //-------------------------------------------------------------------

  virtual FreeDefinedCurrency2       : abap.cuky,

          //---------------------------------------------
          // Amount in Freely Defined Currency 2 (FreeDefinedCurrency2)
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
          curr_to_decfloat_amount( AmountInFreeDefinedCurrency2 )                                   as AmountInFreeDefinedCurrency2,

          //---------------------------------------------
          // Prior Day Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
          @EndUserText.label: 'PD Bal FreeDefCrcy2'
          PriorDayBalInFDCrcy2,

          //---------------------------------------------
          // Current Day Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
          @EndUserText.label: 'CD Acty FreeDefCrcy2'
          CurDayActyAmtInFDCrcy2,

          //---------------------------------------------
          // Prior Month Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
          @EndUserText.label: 'PM Bal FreeDefCrcy2'
          PriorMonthBalInFDCrcy2,

          //---------------------------------------------
          // Current Month Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
          @EndUserText.label: 'CM Acty FreeDefCrcy2'
          CurMonthActyAmtInFDCrcy2,

          //---------------------------------------------
          // Year-to-Date Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
          @EndUserText.label: 'YTD Bal FreeDefCrcy2'
          YTDBalInFDCrcy2,

          //---------------------------------------------
          // Month-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
          @EndUserText.label: 'MTD ADB FreeDefCrcy2'
          MTDAvgDailyBalInFDCrcy2,

          //---------------------------------------------
          // Quarter-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
          @EndUserText.label: 'QTD ADB FreeDefCrcy2'
          QTDAvgDailyBalInFDCrcy2,

          //---------------------------------------------
          // Year-to-Date Average Balance
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
          @EndUserText.label: 'YTD ADB FreeDefCrcy2'
          YTDAvgDailyBalInFDCrcy2,

          //---------------------------------------------
          // Month-to-Date Average Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
          @EndUserText.label: 'MTD Avg Acty FreeDf2'
          MTDAvgActyAmtInFDCrcy2,

          //---------------------------------------------
          // Quarter-to-Date Activity
          //---------------------------------------------
          @Aggregation.default: #SUM
          @AnalyticsDetails.query.axis: #COLUMNS
          @AnalyticsDetails.query.hidden: true
          @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
          @EndUserText.label: 'QTD Acty FreeDf2'
          QTDActyAmtInFDCrcy2
}
```
