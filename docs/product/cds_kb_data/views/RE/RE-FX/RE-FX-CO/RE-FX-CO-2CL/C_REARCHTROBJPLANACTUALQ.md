---
name: C_REARCHTROBJPLANACTUALQ
description: "RE Architecture Plan Actual - Qry"
app_component: RE-FX-CO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REARCHTROBJPLANACTUALQ')/$value
semantic_en: "RE Architecture Plan Actual - Qry"
semantic_vi: "RE Architecture Plan Actual - Qry — CDS view tiêu dùng dựa trên RE Architecture Plan Actual - Qry."
keywords:
  - "architecture"
  - "plan"
  - "actual"
  - "qry"
  - "fiscal"
  - "year"
  - "variant"
  - "period"
  - "quarter"
tags:
  - RE
  - component:RE-FX-CO-2CL
  - consumption-view
  - plan
  - RE-FX
  - RE-FX-CO
  - RE-FX-CO-2CL
---
# C_REARCHTROBJPLANACTUALQ

**RE Architecture Plan Actual - Qry**

| Property | Value |
|---|---|
| App Component | `RE-FX-CO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REARCHTROBJPLANACTUALQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `CompanyCode` |  | | `_ActualPlanJournalEntryItem` | `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `REArchitectureObjectNumberSite` |  | |  |  | `CHAR(20)` | Architecture Object Number of Site |
| `REArchitectureObjectParentUUID` |  | |  |  | `RAW(16)` | UUID for Real Estate Architecture Object |
| `REArchtrObjectNumberBldngLand` |  | |  |  | `CHAR(20)` | Architecture Object Number of Building/Land |
| `REArchitectureObjectUUID` |  | |  |  | `RAW(16)` | UUID for Real Estate Architecture Object |
| `REGnrcRentalObjPortfolioID` |  | |  |  | `CHAR(10)` | Generic Rental Object Portfolio ID |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AccountingDocument` |  | | `_ActualPlanJournalEntryItem` | `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | | `_ActualPlanJournalEntryItem` | `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `ActualValue` |  | |  | `cast( case when ( LedgerFiscalYear = $parameters.P_FiscalYear and FiscalPeriod between '001' and $parameters.P_FiscalPeriod and PlanningCategory = 'ACT01' ) then 1 else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PlanValue` |  | |  | `cast( case when ( LedgerFiscalYear = $parameters.P_FiscalYear and FiscalPeriod between '001' and $parameters.P_FiscalPeriod and PlanningCategory = $parameters.P_PlanningCategory ) then 1 else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DeltaActPlanFYPeriodValue` |  | |  | `$projection.ActualValue - $projection.PlanValue` | `DEC(24)` |  |
| `DeltaActPlanFYPeriodRatio` |  | |  | `ratio_of( portion=>$projection.DeltaActPlanFYPeriodValue, total=>$projection.PlanValue) * 100` | `DECF(34)` |  |
| `ActualRollingFiscalYearValue` |  | |  | `cast( case when ( FiscalYearPeriod between $parameters.P_PreviousFiscalYearPeriod and $parameters.P_FiscalYearPeriod and PlanningCategory = 'ACT01' ) then 1 else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `PrevFiscalYearValue` |  | |  | `cast( case when ( LedgerFiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod between '001' and $parameters.P_FiscalPeriod and PlanningCategory = 'ACT01' ) then 1 else null end as abap.dec( 23, 2 ) )` | `DEC(23)` |  |
| `DeltaCurPrevFiscalYearValue` |  | |  | `$projection.ActualValue - $projection.PrevFiscalYearValue` | `DEC(24)` |  |
| `DeltaCurPrevFiscalYearRatio` |  | |  | `ratio_of( portion=>$projection.DeltaCurPrevFiscalYearValue, total=>$projection.PrevFiscalYearValue) * 100` | `DECF(34)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REARCHTROBJPLANACTUALQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REARCHTROBJPLANACTUALQ')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'RE Architecture Plan Actual - Qry'
@VDM.viewType: #CONSUMPTION
@Analytics.settings.maxProcessingEffort: #HIGH
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY


@Metadata.ignorePropagatedAnnotations: true

define transient view entity C_REArchtrObjPlanActualQ
  provider contract analytical_query
  with parameters
     
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
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_LedgerStdVH', element: 'Ledger' } } ]
    P_Ledger                     : fins_ledger,

    @AnalyticsDetails.query.variableSequence : 11
    @AnalyticsDetails.variable: { usageType: #FILTER, mandatory: true, selectionType: #SINGLE, multipleSelections: true }
    @EndUserText.label:'Company Code'
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_JournalEntryCompanyCodeVH', element: 'CompanyCode' } } ]
    @Consumption.semanticObjectMapping: {
      element: 'CompanyCode',
      additionalBinding: [{
        localElement: 'CompanyCode',
        element: 'CompanyCode'
      }]
    }
    P_CompanyCode                : bukrs,

    @AnalyticsDetails.query.variableSequence : 11
    @EndUserText.label:'Reporting Date'
    @Semantics.businessDate.at: true
    @Environment.systemField : #SYSTEM_DATE
    P_ReportingDate              : vdm_v_key_date,

    @Consumption.derivation: { lookupEntity: 'F_LdgrCoCodeFsclYrVariant',
          resultElement: 'FiscalYearVariant',
          resultAggregation: #MAX,
          binding : [ { targetElement: 'Ledger',      type : #PARAMETER, value : 'P_Ledger' },
                      { targetElement: 'CompanyCode', type : #PARAMETER, value : 'P_CompanyCode' } ] }
    @AnalyticsDetails.query.variableSequence: 12
    @Consumption.hidden: true
    P_FiscalYearVariant          : fis_periv,    
    
    @AnalyticsDetails.query.variableSequence : 30
    @AnalyticsDetails.variable:{ mandatory: true }
    @EndUserText.label:'G/L Account Hierarchy'
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountHierarchyStdVH', element: 'GLAccountHierarchy' } } ]
    P_GLAccountHierarchy         : fis_hryid_glacc,
    
    @EndUserText.label: 'Plan Category'
    @Consumption.defaultValue: 'PLN'
    @AnalyticsDetails.query.variableSequence: 45
    P_PlanningCategory           : fcom_category,
    
    
    //  -------- Calculated Period values:
        @AnalyticsDetails.query.variableSequence : 51
    @Consumption.derivation: {
        lookupEntity: 'I_FiscalCalendarDate',
        resultElement: 'FiscalYear',
        binding: [
            { targetElement: 'CalendarDate', type : #PARAMETER, value: 'P_ReportingDate' },
            { targetElement: 'FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.year: true
    P_LedgerFiscalYear           : fis_gjahr_no_conv,
    
        @AnalyticsDetails.query.variableSequence : 52
    @Consumption.derivation: {
        lookupEntity: 'I_FiscalCalendarDate',
        resultElement: 'FiscalPeriod',
        binding: [
            { targetElement: 'CalendarDate', type : #PARAMETER, value: 'P_ReportingDate' },
            { targetElement: 'FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.period: true
    P_FiscalPeriod               : fins_fiscalperiod,


    //    @EndUserText.label: 'Fiscal Period based on Led Fis Yr'
    @AnalyticsDetails.query.variableSequence : 55
    @Consumption.derivation: {
    lookupEntity: 'F_FsclYearPeriodByFsclPeriod',
    resultElement: 'FiscalYearPeriod',
    binding: [
        { targetParameter: 'P_FiscalYear', type : #PARAMETER, value: 'P_LedgerFiscalYear' },
        { targetParameter: 'P_FiscalPeriod', type : #PARAMETER, value: 'P_FiscalPeriod' },
        { targetParameter: 'P_FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.yearPeriod: true
    P_FiscalYearPeriod           : fis_jahrper_conv,

    // 'Previous Period'
    //    @EndUserText.label: 'Previous Period'
    @AnalyticsDetails.query.variableSequence : 56
    @Consumption.derivation: {
         lookupEntity: 'F_FsclYearPeriodByFsclPeriod',
    resultElement: 'FiscalYearPeriod',
    binding: [
        { targetParameter: 'P_FiscalYear', type : #PARAMETER, value: 'P_PreviousFiscalYear' },
        { targetParameter: 'P_FiscalPeriod', type : #PARAMETER, value: 'P_FiscalPeriod' },
        { targetParameter: 'P_FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' } ]
    }
    @Consumption.hidden: true
    @Semantics.fiscal.yearPeriod: true
    P_PreviousFiscalYearPeriod   : fis_jahrper_conv,
    
    @Consumption.hidden: true
    @Consumption.derivation: {
      lookupEntity: 'I_FiscalCalendarDate',
        resultElement: 'FiscalYear',
        binding: [
            { targetElement: 'CalendarDate', type : #PARAMETER, value: 'P_ReportingDate' },
            { targetElement: 'FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' }
      ]
    }
    @Semantics.fiscal.year: true
    P_FiscalYear         : fis_gjahr,
    
    @Consumption.hidden: true
    @Consumption.derivation: {
      lookupEntity: 'F_FiscalYearShift',
      resultElement: 'ShiftedFiscalYear',
      binding: [
        { targetParameter: 'P_FiscalYear', type : #PARAMETER, value: 'P_FiscalYear' },
        { targetParameter: 'P_FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' },
        { targetParameter: 'P_FsclTimePeriodOffsetDuration', type : #CONSTANT, value: '-1' },
        { targetParameter: 'P_FiscalTimePeriodOffsetUnit', type : #CONSTANT, value: 'Y' }
      ]
    }
    @Semantics.fiscal.year: true
    P_PreviousFiscalYear         : fis_gjahr
    
    

  as projection on I_REArchtrObjPlnActlC as _ActualPlanJournalEntryItem
{

  ------------------------------------------------------------------------------------------
  // TIME characteristics
  ------------------------------------------------------------------------------------------

  @AnalyticsDetails.query: {axis: #FREE}
  @Semantics.fiscal.yearVariant: true
  FiscalYearVariant,

  @AnalyticsDetails.query: {axis: #FREE}
  @UI.textArrangement:#TEXT_ONLY
  @Semantics.fiscal.year: true
  FiscalYear,

  @AnalyticsDetails.query: {axis: #FREE}
  @UI.textArrangement:#TEXT_ONLY
  @Semantics.fiscal.period: true
  FiscalPeriod,

  @AnalyticsDetails.query: {axis: #FREE}
  @UI.textArrangement:#TEXT_ONLY
  @Semantics.fiscal.yearPeriod: true
  FiscalYearPeriod,

  @AnalyticsDetails.query: {axis: #FREE}
  @UI.textArrangement:#TEXT_ONLY
  @Semantics.fiscal.yearQuarter: true
  FiscalYearQuarter,

  @AnalyticsDetails.query: {axis: #FREE}
  @UI.textArrangement:#TEXT_ONLY
  @Semantics.fiscal.quarter: true
  FiscalQuarter,

  ------------------------------------------------------------------------------------------
  // ORG characteristics
  ------------------------------------------------------------------------------------------
  
  
  
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.variableSequence: 40
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  _ActualPlanJournalEntryItem.CompanyCode,

  @Consumption.filter: {
    selectionType: #HIERARCHY_NODE,
    multipleSelections: true,
    hierarchyBinding: [{type :#PARAMETER,value :'P_GLAccountHierarchy' }],
    mandatory: false }
  @AnalyticsDetails.query: {
    variableSequence : 71,
    axis: #FREE,
    displayHierarchy: #FILTER_ONLY,
    hierarchyInitialLevel: 2 }
  @UI.textArrangement:#TEXT_FIRST
  GLAccount,

  @AnalyticsDetails.query.variableSequence: 45
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  ChartOfAccounts,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  CompanyCodeCurrency,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.variableSequence: 40
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ProfitCenterVH' , element: 'ProfitCenter' },
                                                                  additionalBinding: [ { localElement: 'ControllingArea' , element: 'ControllingArea' },
                                                                                                      { localElement: 'Segment' , element: 'Segment' } ]
                                    }]
  ProfitCenter,

  @Consumption.hidden: true
  ControllingArea,

  ------------------------------------------------------------------------------------------
  //RE-characteristics
  ------------------------------------------------------------------------------------------

  @AnalyticsDetails.query.variableSequence: 43
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Site Reference'
  REArchitectureObjectNumberSite,
  
  @UI.textArrangement: #TEXT_ONLY
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Site'
  REArchitectureObjectParentUUID,

  @AnalyticsDetails.query.variableSequence: 44
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  //@AnalyticsDetails.query.totals: #SHOW
  //@ObjectModel.text.element: [ 'REArchitectureObjectName' ]
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Building/Land Reference'
  REArchtrObjectNumberBldngLand,
  
  //@Consumption.hidden: true
  @UI.textArrangement: #TEXT_ONLY
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @EndUserText.label: 'Building/Land'
  REArchitectureObjectUUID,
  

  @AnalyticsDetails.query.variableSequence: 45
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  //@AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.axis: #FREE
  REGnrcRentalObjPortfolioID,

  @AnalyticsDetails.query.variableSequence: 53
  
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.axis: #FREE
  AccountAssignmentType,

  ------------------------------------------------------------------------------------------
  // more characteristics
  ------------------------------------------------------------------------------------------

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.axis: #FREE
  BusinessTransactionType,

  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  @AnalyticsDetails.query.axis: #FREE
  CostCtrActivityType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  CostCenter,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  Customer,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  CustomerGroup,

  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  FunctionalArea,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  GlobalCurrency,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  _ActualPlanJournalEntryItem.AccountingDocument,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  _ActualPlanJournalEntryItem.LedgerGLLineItem,

  @AnalyticsDetails.query.axis: #FREE
  LedgerFiscalYear,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  OrderID,


  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  PlanningCategory,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  ProjectExternalID,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  Segment,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_LAST
  PartnerCompany, // = TradingPartner

  @AnalyticsDetails.query.axis: #FREE
  TransactionCurrency,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  WBSElementExternalID,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  IsStatisticalOrder,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  IsStatisticalCostCenter,

  @AnalyticsDetails.query.axis: #FREE
  @UI.textArrangement: #TEXT_LAST
  WBSIsStatisticalWBSElement,


          //*******************************************************************
          // Measures
          //*******************************************************************
          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #SUM
          @Semantics.amount.currencyCode: 'TransactionCurrency'
          @AnalyticsDetails.query.hidden: true
          AmountInTransactionCurrency,
          
          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #SUM
          @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
          @AnalyticsDetails.query.hidden: true
          AmountInCompanyCodeCurrency,
          
          @AnalyticsDetails.query.axis: #COLUMNS
          @Aggregation.default: #SUM
          @Semantics.amount.currencyCode: 'GlobalCurrency'
          @AnalyticsDetails.query.hidden: true
          AmountInGlobalCurrency,
          
          
          
          //*******************************************************************
          // Non-Measure Structure Members
          //*******************************************************************

          /**** Actual Year vs. Plan ******/
          @EndUserText.label: 'Actual Year'
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Actual Year &1', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActPlan', groupLabel: 'Plan Actual Comparison' }]
          cast( case when ( LedgerFiscalYear = $parameters.P_FiscalYear and FiscalPeriod between '001' and $parameters.P_FiscalPeriod and PlanningCategory = 'ACT01' ) then 1 else null end as abap.dec( 23, 2 ) )                                                                         as ActualValue,
          
          @EndUserText.label: 'Planning Year'
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Planning Year &1', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActPlan', groupLabel: 'Plan Actual Comparison' }]
          cast( case when ( LedgerFiscalYear = $parameters.P_FiscalYear and FiscalPeriod between '001' and $parameters.P_FiscalPeriod and PlanningCategory = $parameters.P_PlanningCategory ) then 1 else null end as abap.dec( 23, 2 ) )                                                  as PlanValue,
          
          @EndUserText.label: 'Act △Plan'
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Act △Plan &1', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActPlan', groupLabel: 'Plan Actual Comparison' }]
          $projection.ActualValue - $projection.PlanValue                                                                                                                                                               as DeltaActPlanFYPeriodValue,

          @EndUserText.label: '%Act △Plan'
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
          @Consumption.dynamicLabel: { label: '%Act △Plan &1', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'ActPlan', groupLabel: 'Plan Actual Comparison' }]
          @AnalyticsDetails.query.decimals:2
          ratio_of( portion=>$projection.DeltaActPlanFYPeriodValue, total=>$projection.PlanValue) * 100                                                                                                                      as DeltaActPlanFYPeriodRatio,
          
          /**** Year over Year ******/
          @EndUserText.label: 'Actual YoY'
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Actual YoY &1', binding: [{ index: 1, parameter: 'P_FiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'YoY', groupLabel: 'Year over Year Comparison' }]
          cast( case when ( FiscalYearPeriod between $parameters.P_PreviousFiscalYearPeriod and $parameters.P_FiscalYearPeriod and PlanningCategory = 'ACT01' ) then 1 else null end as abap.dec( 23, 2 ) )                                                                         as ActualRollingFiscalYearValue,
          
           /**** Previous Year ******/
          @EndUserText.label: 'Previous Year Actual'
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Previous Year &1 Actual', binding: [{ index: 1, parameter: 'P_PreviousFiscalYear'}] }
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'PreviousYear', groupLabel: 'Previous Year Comparison' }]
          cast( case when ( LedgerFiscalYear = $parameters.P_PreviousFiscalYear and FiscalPeriod between '001' and $parameters.P_FiscalPeriod and PlanningCategory = 'ACT01' ) then 1 else null end as abap.dec( 23, 2 ) )                                                                         as PrevFiscalYearValue,
          
          @EndUserText.label: 'Act △Previous'
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @Consumption.dynamicLabel: { label: 'Act &1 △Previous &2', binding: [{ index: 1, parameter: 'P_FiscalYear'}, { index: 2, parameter: 'P_PreviousFiscalYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'PreviousYear', groupLabel: 'Year over Year Comparison' }]
          $projection.ActualValue - $projection.PrevFiscalYearValue                                                                                                                                                               as DeltaCurPrevFiscalYearValue,

          @EndUserText.label: '%Act △Previous'
          @AnalyticsDetails.query.onCharacteristicStructure: true
          @AnalyticsDetails.query.collisionHandling: {formula:#THIS}
          @Consumption.dynamicLabel: { label: '%Act &1 △Previous &2', binding: [{ index: 1, parameter: 'P_FiscalYear'}, { index: 2, parameter: 'P_PreviousFiscalYear'}] }
          @Aggregation.default: #FORMULA
          @AnalyticsDetails.query.axis: #COLUMNS
          @UI.fieldGroup: [{ qualifier: 'PreviousYear', groupLabel: 'Year over Year Comparison' }]
          @AnalyticsDetails.query.decimals:2
          ratio_of( portion=>$projection.DeltaCurPrevFiscalYearValue, total=>$projection.PrevFiscalYearValue) * 100               as DeltaCurPrevFiscalYearRatio
          
  ------------------------------------------------------------------------------------------
}
where
       CompanyCode      = $parameters.P_CompanyCode
       and Ledger           = $parameters.P_Ledger
  and(
       PlanningCategory = 'ACT01'
    or PlanningCategory = $parameters.P_PlanningCategory
  );
```
