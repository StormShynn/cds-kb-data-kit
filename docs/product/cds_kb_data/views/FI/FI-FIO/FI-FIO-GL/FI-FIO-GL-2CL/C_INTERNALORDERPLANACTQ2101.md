---
name: C_INTERNALORDERPLANACTQ2101
description: "This CDS view provides the prerequisites for answering the following business questions: What are the actual and plan amounts per order and G/L account in company code currency or global currency? What are the absolute and relative differences of the actual and the plan amounts in company code currency and global currency? Optional: What are the actual and plan amounts per order and G/L account in transaction currency? What are the absolute and relative differences of the actual and the plan amounts in transaction currency? For all three currency types, you can drill down for further relevant characteristics."
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTERNALORDERPLANACTQ2101')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the actual and plan amounts per order and G/L account in company code currency or global currency? What are the absolute and relative differences of the actual and the plan amounts in company code currency and global currency? Optional: What are the actual and plan amounts per order and G/L account in transaction currency? What are the absolute and relative differences of the actual and the plan amounts in transaction currency? For all three currency types, you can drill down for further relevant characteristics."
semantic_vi: "Internal Order Plan Actual — CDS view tiêu dùng dựa trên I_ActualPlanJrnlEntryItemCube."
keywords:
  - "Internal Order Plan Actual"
  - "internal"
  - "order"
  - "plan"
  - "actual"
  - "statistical"
  - "account"
  - "cost"
  - "activity"
  - "type"
  - "business"
  - "transaction"
tags:
  - FI
  - account
  - bo:plant
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - order
  - plan
  - transaction
---
# C_INTERNALORDERPLANACTQ2101

**This CDS view provides the prerequisites for answering the following business questions: What are the actual and plan amounts per order and G/L account in company code currency or global currency? What are the absolute and relative differences of the actual and the plan amounts in company code currency and global currency? Optional: What are the actual and plan amounts per order and G/L account in transaction currency? What are the absolute and relative differences of the actual and the plan amounts in transaction currency? For all three currency types, you can drill down for further relevant characteristics.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTERNALORDERPLANACTQ2101')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerOrder` |  | |  | `PartnerOrder_2` | `CHAR(12)` | Partner Order |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `YearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `YearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `YearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `ActualAmountInTransactionCrcy` |  | |  | `case when PlanningCategory = 'ACT01' then ActualAmountInTransactionCrcy else cast( 0 as fins_vkcur12) end` | `CURR(23)` | Amount in Global Currency |
| `PlanAmountInTransactionCrcy` |  | |  | `case when PlanningCategory = :P_PlanningCategory then PlanAmountInTransactionCrcy else cast( '0' as fins_vhcur12) end` | `CURR(23)` | Amount in Company Code Currency |
| `DifferenceAmtInTransCrcy` |  | |  | `1` | `INT1(3)` |  |
| `TransCrcyDifferencePct` |  | |  | `1` | `INT1(3)` |  |
| `ActualAmountInCompanyCodeCrcy` |  | |  | `case when PlanningCategory = 'ACT01' then ActualAmountInCompanyCodeCrcy else cast( 0 as fins_vhcur12) end` | `CURR(23)` | Amount in Company Code Currency |
| `PlanAmountInCompanyCodeCrcy` |  | |  | `case when PlanningCategory = :P_PlanningCategory then PlanAmountInCompanyCodeCrcy else cast( '0' as fins_vhcur12) end` | `CURR(23)` | Amount in Company Code Currency |
| `DifferenceAmtInCoCodeCrcy` |  | |  | `1` | `INT1(3)` |  |
| `CoCodeCrcyDifferencePct` |  | |  | `1` | `INT1(3)` |  |
| `ActualAmountInGlobalCurrency` |  | |  | `case when PlanningCategory = 'ACT01' then ActualAmountInGlobalCurrency else cast( 0 as fins_vkcur12) end` | `CURR(23)` | Amount in Global Currency |
| `PlanAmountInGlobalCurrency` |  | |  | `case when PlanningCategory = :P_PlanningCategory then PlanAmountInGlobalCurrency else cast( '0' as fins_vkcur12) end` | `CURR(23)` | Amount in Global Currency |
| `DifferenceAmtInGlobalCrcy` |  | |  | `0` | `INT1(3)` |  |
| `GlobalCrcyDifferencePct` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTERNALORDERPLANACTQ2101')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_INTERNALORDERPLANACTQ2101')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIIOPLANACT2101'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Internal Order Plan Actual'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED


define view C_InternalOrderPlanActQ2101
  with parameters

    @EndUserText.label: 'Planning Category'
    @AnalyticsDetails.query.variableSequence: 35
    P_PlanningCategory : fcom_category,

    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : vdm_v_key_date,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language         : sylangu,

    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser     : syuname,

    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
          resultElement: 'ControllingArea',
          binding: [ { targetElement : 'BusinessUser' , type : #PARAMETER, value : 'P_BusinessUser' } ] }
    @AnalyticsDetails.query.variableSequence: 5
    P_ControllingArea  : kokrs,

    @Consumption.derivation: { lookupEntity: 'I_Ledger',
      resultElement: 'Ledger',
      binding:
      [ { targetElement : 'IsLeadingLedger' ,
          type : #CONSTANT,
          value : 'X'
        }
      ]
    }
    @AnalyticsDetails.query.variableSequence: 10
    P_Ledger           : fins_ledger

  as select from I_ActualPlanJrnlEntryItemCube as I_ActualPlanJrnlEntryItemCube
{

  //@EndUserText.label: 'Planning Category'
  //@AnalyticsDetails.query.variableSequence: 35
  //$parameters.P_PlanningCategory as InputPlanningCategory,

  //-------------------------------------------------------------------------------------------------------
  // ROWS
  //-------------------------------------------------------------------------------------------------------
  @AnalyticsDetails.query.axis: #ROWS
  IsStatisticalOrder,

  @AnalyticsDetails.query.variableSequence: 50
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  OrderID,

  @AnalyticsDetails.query.variableSequence: 86
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                                        hierarchyBinding : [  { type: #USER_INPUT, value: 'GLAccountHierarchy', variableSequence: 85 } ] }
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  GLAccount,
  //@AnalyticsDetails.query.axis: #ROWS
  //GLAccountName,
  _GLAccountInChartOfAccounts._Text[1:Language = $parameters.P_Language].GLAccountName,

  //-------------------------------------------------------------------------------------------------------
  // FREE
  //-------------------------------------------------------------------------------------------------------

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostCtrActivityType,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  BusinessTransactionType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarMonth,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarWeek,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CalendarYear,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: true, hidden: true }
  @Consumption.derivation: { lookupEntity: 'I_ControllingArea',
    resultElement: 'ChartOfAccounts',
    binding:
    [
      {
        targetElement : 'ControllingArea' ,
        type : #PARAMETER,
        value : 'P_ControllingArea'
      }
    ]
  }
  @AnalyticsDetails.query.variableSequence: 45
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  ChartOfAccounts,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  //@Consumption.derivation: {
  //    lookupEntity: 'I_UserSettingsForCompanyCode',
  //    resultElement: 'CompanyCode',
  //    binding:
  //    [
  //      {
  //        targetElement : 'BusinessUser' ,
  //        type : #PARAMETER,
  //        value : 'P_BusinessUser'
  //      }
  //    ]
  //  }
  @AnalyticsDetails.query.variableSequence: 40
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,

  @AnalyticsDetails.query.totals: #SHOW
  CompanyCodeCurrency,

  @AnalyticsDetails.query.axis: #FREE
  ControllingDebitCreditCode,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 30
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalPeriod,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalWeek,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearPeriod,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearWeek,

  //@Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: true, hidden: true}
  //@Consumption.derivation: {
  //  lookupEntity: 'I_ControllingArea',
  //  resultElement: 'FiscalYearVariant',
  //  binding:
  //  [
  //    {
  //      targetElement : 'ControllingArea' ,
  //      type : #PARAMETER,
  //      value : 'P_ControllingArea'
  //    }
  //  ]
  //}
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalYearVariant,

  @AnalyticsDetails.query.variableSequence: 70
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  FunctionalArea,

  @AnalyticsDetails.query.totals: #SHOW
  GlobalCurrency,

  @AnalyticsDetails.query.totals: #SHOW
  AccountingDocument,

  @AnalyticsDetails.query.totals: #SHOW
  LedgerGLLineItem,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: true }
  @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
          resultElement: 'CalendarYear', binding: [
          { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
         }
  @AnalyticsDetails.query.variableSequence: 20
  LedgerFiscalYear,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor:   'Product'
  //@VDM.lifecycle.status:    #DEPRECATED
  //@VDM.lifecycle.successor: 'Product'
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Material, // do not use any longer, use Product

  //@AnalyticsDetails.query.totals: #SHOW
  //@AnalyticsDetails.query.display: #KEY_TEXT
  //MaterialGroup,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountAssignmentType,

  @AnalyticsDetails.query.totals: #SHOW
  PartnerCostCtrActivityType,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerCostCenter,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerFunctionalArea,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerOrder_2 as PartnerOrder,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerProfitCenter,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerProject,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerWBSElement,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  PlanningCategory,

  @AnalyticsDetails.query.totals: #SHOW
  PostingDate,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Product,

  @AnalyticsDetails.query.variableSequence: 60
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  CostAnalysisResource,
  _CostAnalysisResource[1:ValidityEndDate >= $parameters.P_KeyDate and ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostAnalysisResourceName,

  @AnalyticsDetails.query.variableSequence: 80
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Segment,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  PartnerCompany, // = TradingPartner

  TransactionCurrency,

  @AnalyticsDetails.query.display: #KEY_TEXT
  YearMonth,
  @AnalyticsDetails.query.display: #KEY_TEXT
  YearQuarter,
  @AnalyticsDetails.query.display: #KEY_TEXT
  YearWeek,

  //-----------------------------------------------------------------------------------------------------------------
  // Key figures
  //-----------------------------------------------------------------------------------------------------------------
  //
  // Transaction Currency: WSL
  //
  @EndUserText.label: 'Actual Amount in Trans Crcy'
  @AnalyticsDetails.query.hidden: true
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  case when PlanningCategory = 'ACT01' then ActualAmountInTransactionCrcy
                        else cast( 0 as fins_vkcur12)
  end            as ActualAmountInTransactionCrcy,

  @EndUserText.label: 'Plan Amount in Trans Crcy'
  @AnalyticsDetails.query.hidden: true
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @AnalyticsDetails.query.axis: #COLUMNS
  case when PlanningCategory = :P_PlanningCategory then PlanAmountInTransactionCrcy
                        else cast( '0' as fins_vhcur12)
  end            as PlanAmountInTransactionCrcy,

  @EndUserText.label: 'Difference Actual Plan in Trans Crcy'
  @DefaultAggregation : #FORMULA
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.formula : '$projection.ActualAmountInTransactionCrcy - $projection.PlanAmountInTransactionCrcy'
  1              as DifferenceAmtInTransCrcy,

  @EndUserText.label : 'Difference (%) TC'
  @AnalyticsDetails.query.hidden: true
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInTransactionCrcy > 0 
                                   THEN ($projection.ActualAmountInTransactionCrcy - $projection.PlanAmountInTransactionCrcy) / $projection.ActualAmountInTransactionCrcy * 100 
                                   ELSE NDIV0(($projection.PlanAmountInTransactionCrcy - $projection.ActualAmountInTransactionCrcy ) / $projection.ActualAmountInTransactionCrcy) * 100 END'
  1              as TransCrcyDifferencePct,

  //
  // Company Code Currency: HSL
  //
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Actual Amount in Company Code Crcy'
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  case when PlanningCategory = 'ACT01' then ActualAmountInCompanyCodeCrcy
                        else cast( 0 as fins_vhcur12)
  end            as ActualAmountInCompanyCodeCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Plan Amount in CC Crcy'
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  case when PlanningCategory = :P_PlanningCategory then PlanAmountInCompanyCodeCrcy
                        else cast( '0' as fins_vhcur12)
  end            as PlanAmountInCompanyCodeCrcy,

  @EndUserText.label: 'Difference Actual Plan in CC Crcy'
  @DefaultAggregation : #FORMULA
  @AnalyticsDetails.query.formula : '$projection.ActualAmountInCompanyCodeCrcy - $projection.PlanAmountInCompanyCodeCrcy'
  1              as DifferenceAmtInCoCodeCrcy,

  @EndUserText.label : 'Difference (%) CC'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInCompanyCodeCrcy > 0 
                                   THEN ($projection.ActualAmountInCompanyCodeCrcy - $projection.PlanAmountInCompanyCodeCrcy) / $projection.ActualAmountInCompanyCodeCrcy * 100 
                                   ELSE NDIV0(($projection.PlanAmountInCompanyCodeCrcy - $projection.ActualAmountInCompanyCodeCrcy ) / $projection.ActualAmountInCompanyCodeCrcy) * 100 END'
  1              as CoCodeCrcyDifferencePct,

  //
  // Global Currency: KSL RKCUR
  //
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Actual Amount in Global Crcy'
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  case when PlanningCategory = 'ACT01' then ActualAmountInGlobalCurrency
                        else cast( 0 as fins_vkcur12)
  end            as ActualAmountInGlobalCurrency,

  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Plan Amount in Global Crcy'
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  case when PlanningCategory = :P_PlanningCategory then PlanAmountInGlobalCurrency
                        else cast( '0' as fins_vkcur12)
  end            as PlanAmountInGlobalCurrency,

  @EndUserText.label: 'Difference Actual Plan in Global Crcy'
  @AnalyticsDetails.query.formula : '$projection.ActualAmountInGlobalCurrency - $projection.PlanAmountInGlobalCurrency'
  0              as DifferenceAmtInGlobalCrcy,

  @EndUserText.label : 'Difference (%) GC'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula :  'CASE WHEN $projection.ActualAmountInGlobalCurrency > 0 
                                   THEN ($projection.ActualAmountInGlobalCurrency - $projection.PlanAmountInGlobalCurrency) / $projection.ActualAmountInGlobalCurrency * 100 
                                   ELSE NDIV0(($projection.PlanAmountInGlobalCurrency - $projection.ActualAmountInGlobalCurrency ) / $projection.ActualAmountInGlobalCurrency) * 100 END'
  1              as GlobalCrcyDifferencePct


}
where
      ControllingArea = :P_ControllingArea
  and Ledger          = :P_Ledger
```
