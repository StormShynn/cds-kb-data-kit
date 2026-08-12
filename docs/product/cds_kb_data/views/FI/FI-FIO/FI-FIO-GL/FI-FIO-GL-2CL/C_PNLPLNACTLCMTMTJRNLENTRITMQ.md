---
name: C_PNLPLNACTLCMTMTJRNLENTRITMQ
description: "P&L – Plan/Actual/Committed"
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PNLPLNACTLCMTMTJRNLENTRITMQ')/$value
semantic_en: "P&L – Plan/Actual/Committed"
semantic_vi: "P&L – Plan/Actual/Committed — CDS view tiêu dùng dựa trên I_ActualPlanJournalEntryItem."
keywords:
  - "P&L – Plan/Actual/Committed"
  - "p&l"
  - "plan/actual/committed"
  - "planning"
  - "category"
  - "controlling"
  - "area"
  - "company"
  - "code"
  - "calendar"
  - "year"
  - "date"
tags:
  - FI
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - plan
---
# C_PNLPLNACTLCMTMTJRNLENTRITMQ

**P&L – Plan/Actual/Committed**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PNLPLNACTLCMTMTJRNLENTRITMQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CalendarYear` |  | | `_CalendarDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarDate` |  | | `_CalendarDate` | `CalendarDate` | `DATS(8)` | Calendar Date |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `ActualValue` |  | |  | `case when ( ActualPlanCode = 'A' and Ledger = $parameters.P_Ledger ) then 1 end` | `INT1(3)` |  |
| `PlanValue` |  | |  | `case when ( ActualPlanCode = 'P' and Ledger = $parameters.P_Ledger and PlanningCategory = $parameters.P_PlanningCategory) then 1 end` | `INT1(3)` |  |
| `CommitmentValue` |  | |  | `case when ( IsCommitment = 'X' and ActualPlanCode = 'A' and Ledger = '0E' ) then 1 end` | `INT1(3)` |  |
| `PlanActualCommitmentDeltaValue` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PNLPLNACTLCMTMTJRNLENTRITMQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PNLPLNACTLCMTMTJRNLENTRITMQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIPNLPLNACTCMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.query: true
@VDM.viewType: #CONSUMPTION

@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@EndUserText.label: 'P&L – Plan/Actual/Committed'

@ObjectModel.supportedCapabilities:[#ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
define view C_PnLPlnActlCmtmtJrnlEntrItmQ
  with parameters
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [{
    entity: {
        name:    'I_PlanningCategory',
        element: 'PlanningCategory'
            }
   }]
   @AnalyticsDetails.query.variableSequence: 10
    P_PlanningCategory : fcom_category,
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser     : syuname,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language         : sylangu,
    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
          resultElement: 'ControllingArea',
          binding: [ { targetElement : 'BusinessUser' , type : #PARAMETER, value : 'P_BusinessUser' } ] }
    //@AnalyticsDetails.query.variableSequence: 5
    P_ControllingArea  : kokrs,

    @Consumption.derivation: { lookupEntity: 'F_LeadingLedger', resultElement: 'Ledger'}
    @AnalyticsDetails.query.variableSequence: 5
    P_Ledger           : fins_ledger,
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
     @AnalyticsDetails.query.variableSequence: 130
    P_KeyDate    : vdm_v_key_date
  as select from I_ActualPlanJournalEntryItem as I_ActualPlanJournalEntryItem

  //association [0..*] to I_GLAccountHierarchy  as _GLAccountHierarchy on  _GLAccountHierarchy.GLAccountHierarchy = :P_GLAccountHierarchy


{

  PlanningCategory,
  ControllingArea,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 30
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,
  
  @AnalyticsDetails.query.hidden: true
  _CalendarDate.CalendarYear as CalendarYear,
    @AnalyticsDetails.query.hidden: true
  _CalendarDate.CalendarDate as CalendarDate,
   @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearVariant,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Ledger,
  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: true }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
            resultElement: 'CalendarYear', binding: [
            { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
           }
  @AnalyticsDetails.query.variableSequence: 15
  LedgerFiscalYear,

  @AnalyticsDetails.query.variableSequence: 25
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                                        hierarchyBinding : [  { type: #USER_INPUT, value: 'GLAccountHierarchy', variableSequence: 24 } ] }
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,
  //  @Consumption.derivation: { lookupEntity: 'I_Ledger',
  //    resultElement: 'Ledger', binding: [
  //    { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
  //   }
  //  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  //  @AnalyticsDetails.query.variableSequence : 90
  //  @AnalyticsDetails.query.display: #KEY
  //  Ledger,
//  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
//  @AnalyticsDetails.query.variableSequence : 20
//  @AnalyticsDetails.query.display: #KEY
//  FiscalYear,
  @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 20
  @AnalyticsDetails.query.display: #KEY
  FiscalPeriod,
  @AnalyticsDetails.query.variableSequence : 35
  @Consumption.filter: {  selectionType: #INTERVAL, multipleSelections: true, mandatory: false}
  //@Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
  //                      hierarchyBinding : [{type : #USER_INPUT, value : 'P_CostCenterHierarchyName', variableSequence: 35} ] }
  CostCenter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  @Consumption.filter: {  selectionType: #INTERVAL, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 40
 // @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
 //                       hierarchyBinding : [{type : #USER_INPUT, value : 'P_ProfitCenterHierarchyName', variableSequence: 49} ] }
  //@AnalyticsDetails.query.display: #KEY
  //   @Consumption.valueHelpDefinition: [{
  //     entity: {
  //         name:    'I_ProfitCenterVH',
  //         element: 'ProfitCenter'
  //             }
  //    }]
  ProfitCenter,

//  @AnalyticsDetails.query.variableSequence: 70
//  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
//  @AnalyticsDetails.query.totals: #SHOW
//  @AnalyticsDetails.query.axis: #FREE
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  FunctionalArea,
 // @AnalyticsDetails.query.display: #KEY
  //FiscalYearPeriod,

    @AnalyticsDetails.query.axis: #FREE
    @AnalyticsDetails.query.totals: #SHOW
    @AnalyticsDetails.query.display: #KEY_TEXT
    ProjectExternalID,
    @AnalyticsDetails.query.totals: #SHOW
    @AnalyticsDetails.query.axis: #FREE
    @AnalyticsDetails.query.display: #KEY_TEXT
    PartnerProjectExternalID,
    @AnalyticsDetails.query.totals: #SHOW
    @AnalyticsDetails.query.axis: #FREE
    @AnalyticsDetails.query.display: #KEY_TEXT
    PartnerWBSElementExternalID,
    @AnalyticsDetails.query.variableSequence : 45
    @Consumption.filter: {  selectionType: #INTERVAL, multipleSelections: true, mandatory: false}
    @AnalyticsDetails.query.axis: #FREE
    @AnalyticsDetails.query.display: #KEY_TEXT
    @AnalyticsDetails.query.totals: #SHOW
    WBSElementExternalID,
//  WBSElement,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 55
  @AnalyticsDetails.query.axis: #FREE
  WBSIsStatisticalWBSElement,
  
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #FREE
  PostingDate,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 50
  @AnalyticsDetails.query.axis: #FREE
  IsStatisticalCostCenter,
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @Consumption.semanticObject: 'CostCenter'
  PartnerCostCenter,
    @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @Consumption.semanticObject: 'ProfitCenter'
  PartnerProfitCenter,


  //@AnalyticsDetails.query.display: #KEY
  //GlobalCurrency,
  @AnalyticsDetails.query.display: #KEY
  CompanyCodeCurrency,
  @AnalyticsDetails.query.display: #KEY
  FreeDefinedCurrency1,




  //@Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true, hidden: true }
  //@Consumption.derivation: { lookupEntity: 'I_ControllingArea',
  //  resultElement: 'ChartOfAccounts',
  //  binding:
  //  [
  //    {
  //      targetElement : 'ControllingArea' ,
  //      type : #PARAMETER,
  //      value : 'P_ControllingArea'
  //    }
  //  ]
  //}
  //@AnalyticsDetails.query.variableSequence: 45
  //@AnalyticsDetails.query.axis: #FREE
  //@AnalyticsDetails.query.display: #KEY_TEXT
  //@AnalyticsDetails.query.hidden: true
  //@Consumption.hidden: true
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  ChartOfAccounts,

  //@AnalyticsDetails.query.display: #KEY_TEXT
 // @AnalyticsDetails.query.hidden: true
  //IsCommitment,
  //ActualPlanCode,
  TransactionCurrency,
  GlobalCurrency,
  
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.hidden: true
  @DefaultAggregation: #SUM
  AmountInTransactionCurrency,

 
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  AmountInCompanyCodeCurrency,

  
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  AmountInGlobalCurrency,


  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  AmountInFreeDefinedCurrency1,
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Actual'
  @AnalyticsDetails.query.axis: #COLUMNS
  @Consumption.semanticObject: 'GLAccount' 
  //@AnalyticsDetails.query.elementHierarchy.parent: 'PlanActualCommitmentDeltaValue'
  case when ( ActualPlanCode = 'A' and Ledger = $parameters.P_Ledger ) then 1 end        as ActualValue,
  //case when ( ActualPlanCode = 'A') then 1 end                                 as ActualValue,
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Plan'
  @AnalyticsDetails.query.axis: #COLUMNS
  //@AnalyticsDetails.query.elementHierarchy.parent: 'PlanActualCommitmentDeltaValue'
  case when ( ActualPlanCode = 'P' and Ledger = $parameters.P_Ledger and PlanningCategory = $parameters.P_PlanningCategory) then 1 end         as PlanValue,
  //and Ledger = $parameters.P_Ledge
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Commitment'
  @AnalyticsDetails.query.axis: #COLUMNS
  // @AnalyticsDetails.query.elementHierarchy.parent: 'PlanActualCommitmentDeltaValue'
  case when ( IsCommitment = 'X' and ActualPlanCode = 'A' and Ledger = '0E' ) then 1 end as CommitmentValue,
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Delta'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PlanValue - $projection.ActualValue - $projection.CommitmentValue'
  1                                                                                      as PlanActualCommitmentDeltaValue



}
where
  //GLAccountHierarchy = $parameters.P_GLAccountHierarchy
  //and
  (
       ControllingArea  = :P_ControllingArea
  )
  //and Ledger             = :P_Ledger or Ledger = :P_CommLedger



  and(
       PlanningCategory = 'ACT01'
    or PlanningCategory = $parameters.P_PlanningCategory
  )
 and(
      Ledger           = :P_Ledger
   or Ledger           = '0E'
  )
```
