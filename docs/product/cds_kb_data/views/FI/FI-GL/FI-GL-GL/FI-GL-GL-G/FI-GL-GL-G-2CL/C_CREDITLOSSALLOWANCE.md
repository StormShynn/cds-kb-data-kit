---
name: C_CREDITLOSSALLOWANCE
description: "Analyze Credit Loss Allowances"
app_component: FI-GL-GL-G-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLOSSALLOWANCE')/$value
semantic_en: "Analyze Credit Loss Allowances"
semantic_vi: "Analyze Credit Loss Allowances — CDS view tiêu dùng dựa trên I_GeneralLedgerImpairment."
keywords:
  - "analyze"
  - "credit"
  - "loss"
  - "allowances"
  - "ledger"
  - "company"
  - "code"
  - "name"
  - "fiscal"
  - "year"
  - "period"
tags:
  - FI
  - component:FI-GL-GL-G-2CL
  - consumption-view
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-G
  - FI-GL-GL-G-2CL
  - lob:finance
---
# C_CREDITLOSSALLOWANCE

**Analyze Credit Loss Allowances**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-G-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLOSSALLOWANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `GeneralLedgerAgingIncrement` |  | |  |  | `CHAR(15)` | Aging Increment |
| `GLAccount` |  | |  |  | `CHAR(10)` | Account Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `LossAllowanceSortSequenceValue` |  | |  |  | `NUMC(3)` | Sorting Order of Key Figures in a Layout |
| `LossAllowanceKeyFigure` |  | |  |  | `CHAR(30)` | Key Figure |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `AmountInDisplayCurrency` |  | |  | `cast ( GLImpairment.AmountInDisplayCurrency as fis_balance_amount preserving type)` | `CURR(23)` | Balance Amount |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLOSSALLOWANCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLOSSALLOWANCE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCREDITLOSSALLW'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #CONSUMPTION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: { usageType.serviceQuality: #D,
                usageType.sizeCategory: #XXL,
                usageType.dataClass: #MIXED,
                supportedCapabilities: #ANALYTICAL_QUERY
                 }

@Analytics.query: true
@Analytics.dataExtraction.enabled: false
@EndUserText.label: 'Analyze Credit Loss Allowances'
///*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view C_CreditLossAllowance
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language            : sylangu,
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser        : syuname,
    @AnalyticsDetails.query.variableSequence : 10
    //    @Consumption.defaultValue: 'DEFAULT'
    @Consumption.derivation: { lookupEntity: 'P_CloudDefaultLayout',
          resultElement: 'Layout'}
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_LossAllowanceLayout', element: 'LossAllowanceLayout' }
                                    } ]
    P_LossAllowanceLayout : fins_key_figure_layout,
    @AnalyticsDetails.query.variableSequence : 20
    //    @Consumption.defaultValue: '2L'
    @Consumption.derivation: { lookupEntity: 'I_Ledger',
          resultElement: 'Ledger',
          binding: [{ targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]}
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Ledger', element: 'Ledger' }
                                     } ]
    P_Ledger              : fis_rldnr,
    @AnalyticsDetails.query.variableSequence : 30
    @Consumption.derivation: { lookupEntity: 'I_UserSettingsForCompanyCode',
        resultElement: 'CompanyCode',
        binding: [ { targetElement : 'BusinessUser' , type : #PARAMETER, value : 'P_BusinessUser' } ] }
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCode', element: 'CompanyCode' }
                                     } ]
    P_CompanyCode         : fis_bukrs,
    @AnalyticsDetails.query.variableSequence : 40
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDateForLedger',
      resultElement: 'FiscalYear',
      binding: [
        { targetElement : 'CalendarDate' , type : #SYSTEM_FIELD, value : '#SYSTEM_DATE' },
        { targetElement : 'CompanyCode', type : #PARAMETER, value : 'P_CompanyCode' },
        { targetElement : 'Ledger' , type : #PARAMETER, value : 'P_Ledger' }]
    }
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' },
                                     additionalBinding:  [ { localParameter: 'P_CompanyCode', element: 'CompanyCode' } ]
                                 } ]
    P_FiscalYear          : gjahr,
    @AnalyticsDetails.query.variableSequence : 50
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDateForLedger',
       resultElement: 'FiscalPeriod',
       binding: [
         { targetElement : 'CalendarDate' , type : #SYSTEM_FIELD, value : '#SYSTEM_DATE' },
         { targetElement : 'CompanyCode', type : #PARAMETER, value : 'P_CompanyCode' },
         { targetElement : 'Ledger' , type : #PARAMETER, value : 'P_Ledger' }]
    }
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearPeriodForLedger', element: 'FiscalPeriod' },
                                     additionalBinding:  [ { localParameter: 'P_CompanyCode', element: 'CompanyCode' },
                                                           { localParameter: 'P_Ledger', element: 'Ledger' },
                                                           { localParameter: 'P_FiscalYear', element: 'FiscalYear' } ]
                                 } ]
    P_ToFiscalPeriod      : fis_period_to,
    @AnalyticsDetails.query.variableSequence : 60
    @Consumption.derivation: { lookupEntity: 'I_Ledgercompanycodecrcyroles',
          resultElement: 'CompanyCodeCurrencyRole', binding: [
          { targetElement : 'Ledger' , type : #PARAMETER, value : 'P_Ledger' },
          { targetElement : 'CompanyCode' , type : #PARAMETER, value : 'P_CompanyCode' } ]
         }
    @Consumption.valueHelpDefinition: [{ entity : { name    : 'I_LedgerCompanyCodeCrcyRolesVH',
                                                    element : 'CurrencyRole'},                                         
                                         additionalBinding  : [{ localParameter : 'P_Ledger',
                                                                 element        : 'Ledger'},
                                                               { localParameter : 'P_CompanyCode',
                                                                 element        : 'CompanyCode'
                                                              }]
                                      }]
//    @Consumption.derivation: { lookupEntity: 'I_Ledgercompanycodecrcyroles',
//          resultElement: 'CompanyCodeCurrencyRole', binding: [
//          { targetElement : 'Ledger' , type : #PARAMETER, value : 'P_Ledger' },
//          { targetElement : 'CompanyCode' , type : #PARAMETER, value : 'P_CompanyCode' } ]
//         }
//
//    @Consumption.valueHelpDefinition: {
//         entity: { name:    'I_CurrencyRole',
//                   element: 'CurrencyRole'
//                 }
//                }    
    P_CurrencyRole        : fis_curtp
  as select from I_GeneralLedgerImpairment( P_Ledger: $parameters.P_Ledger, P_CompanyCode: $parameters.P_CompanyCode, P_CurrencyRole: :P_CurrencyRole ,P_LossAllowanceLayout: :P_LossAllowanceLayout, P_FiscalYear: :P_FiscalYear, P_FiscalPeriod: :P_ToFiscalPeriod) as GLImpairment
{
  @AnalyticsDetails.query.axis: #FREE
  @ObjectModel.text.element: 'LedgerName'
  Ledger,
  @AnalyticsDetails.query.axis: #FREE
  @ObjectModel.text.element: 'CompanyCodeName'
  CompanyCode,
  @Semantics.text: true
  _Ledger._Text[1: Language = $parameters.P_Language].LedgerName,
  @Semantics.text: true
  _CompanyCode.CompanyCodeName,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  FiscalYear,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  FiscalPeriod,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  //  @ObjectModel.text.element: 'BusinessPartnerName'
  BusinessPartner,
  //  @Semantics.text: true
  //  _BusinessPartner.BusinessPartnerName,


  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  Country,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY
  CreditRiskClass,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  GeneralLedgerAgingIncrement,


  @AnalyticsDetails.query.axis: #ROWS
  @ObjectModel.text.element: 'GLAccountName'
  GLAccount,
  @Semantics.text: true
  _GLAccount._Text[1: Language = $parameters.P_Language].GLAccountName,

  @AnalyticsDetails.query.axis: #FREE
  @ObjectModel.text.element: 'CustomerName'
  Customer,
  @Semantics.text: true
  _Customer.CustomerName,

  @AnalyticsDetails.query.axis: #FREE
  @ObjectModel.text.element: 'CostCenterName'
  CostCenter,
  @Semantics.text: true
  _CostCenter._Text[1:Language = $parameters.P_Language].CostCenterName,

  @AnalyticsDetails.query.axis: #FREE
  @ObjectModel.text.element: 'ProfitCenterName'
  ProfitCenter,
  @Semantics.text: true
  _ProfitCenter._Text[1:Language = $parameters.P_Language].ProfitCenterName,

  @AnalyticsDetails.query.axis: #FREE
  @ObjectModel.text.element: 'FunctionalAreaName'
  FunctionalArea,
  @Semantics.text: true
  _FunctionalArea._Text[1:Language = $parameters.P_Language].FunctionalAreaName,

  @AnalyticsDetails.query.axis: #FREE
  @ObjectModel.text.element: 'SegmentName'
  Segment,
  @Semantics.text: true
  _Segment._Text[1:Language = $parameters.P_Language].SegmentName,

  @AnalyticsDetails.query.axis: #COLUMNS
  LossAllowanceSortSequenceValue,

  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.display: #TEXT
  @ObjectModel.text.element: 'LossAllowanceKeyFigureName'
  GLImpairment.LossAllowanceKeyFigure,

  //      @UI.hidden: true
  @Semantics.text: true
  _KeyFigure._Text[1:Language = $parameters.P_Language].LossAllowanceKeyFigureName,

  @Semantics.currencyCode:true
  @AnalyticsDetails.query.display: #KEY
  GLImpairment.DisplayCurrency,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
  cast ( GLImpairment.AmountInDisplayCurrency as fis_balance_amount preserving type) as AmountInDisplayCurrency

}
```
