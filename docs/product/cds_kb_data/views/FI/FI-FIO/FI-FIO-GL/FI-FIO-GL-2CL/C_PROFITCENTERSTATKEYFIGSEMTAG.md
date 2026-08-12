---
name: C_PROFITCENTERSTATKEYFIGSEMTAG
description: "Profit Center Ststcl Key Figure  KPI"
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERSTATKEYFIGSEMTAG')/$value
semantic_en: "Profit Center Ststcl Key Figure  KPI"
semantic_vi: "Profit Center Ststcl Key Figure  KPI — CDS view tiêu dùng dựa trên I_ActualPlanStatKeyFigSemTag."
keywords:
  - "profit"
  - "center"
  - "ststcl"
  - "key"
  - "figure"
  - "kpi"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "period"
  - "functional"
  - "area"
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
---
# C_PROFITCENTERSTATKEYFIGSEMTAG

**Profit Center Ststcl Key Figure  KPI**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERSTATKEYFIGSEMTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `StatisticalKeyFigure` |  | |  |  | `CHAR(6)` | Statistical Key Figure |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `StatisticalKeyFigQtyUnit` |  | |  |  | `UNIT(3)` | Statistical Key Figure Quantity Unit |
| `StatisticalKeyFigureQuantity` |  | |  |  | `QUAN(23)` | Statistical Key Figure Quantity |
| `IntmdStatisticalKeyFigFixedQty` |  | |  | `case when StatisticalKeyFigure = '1001' then StatisticalKeyFigureQuantity end` | `QUAN(23)` | Statistical Key Figure Quantity |
| `ActualValue` |  | |  | `case when ( ActualPlanCode = 'A' ) then 1 end` | `INT1(3)` |  |
| `PlanValue` |  | |  | `case when ( ActualPlanCode = 'P' ) then 1 end` | `INT1(3)` |  |
| `ServiceCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'SERVICECST' ) then cast (InvertedAmountInGlobalCurrency as fins_service_cost ) end` | `CURR(23)` | Service Cost in Global Currency |
| `PlanActualDeltaValue` |  | |  | `1` | `INT1(3)` |  |
| `AdministrationCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'ADMCST' ) then cast (InvertedAmountInGlobalCurrency as fins_admin_cost_globcrcy ) end` | `CURR(23)` | Administration Cost in Global Currnecy |
| `TravelCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'TRAVELCST' ) then cast (InvertedAmountInGlobalCurrency as fins_trav_cost) end` | `CURR(23)` | Travel Cost Amount in Global Currency |
| `UtilityCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'UTILCST' ) then cast (InvertedAmountInGlobalCurrency as fins_util_cost) end` | `CURR(23)` | Utility Cost in Global Currency |
| `PersonnelCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'PERSCST' ) then cast (InvertedAmountInGlobalCurrency as fins_pers_cost ) end` | `CURR(23)` | Personnel Cost Amount in Global Currency |
| `MaterialCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'MATCST' ) then cast (InvertedAmountInGlobalCurrency as fins_mat_cost) end` | `CURR(23)` | Material Cost Amount in Global Currency |
| `MaintenanceCostInGlobCrcy` |  | |  | `case when ( SemanticTag = 'MAINTCST' ) then cast (InvertedAmountInGlobalCurrency as fins_maint_cost) end` | `CURR(23)` | Maintenance Cost Amount in Global Currency |
| `DepreciationCostInGlobCrcy` |  | |  | `case when ( SemanticTag = 'DEPREC' ) then cast (InvertedAmountInGlobalCurrency as fins_depre_cost) end` | `CURR(23)` | Depreciation Cost Amount in Global Currency |
| `OverheadCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'OVHDS' ) then cast (InvertedAmountInGlobalCurrency as fins_overh_cost) end` | `CURR(23)` | Overhead Cost in Global Currency |
| `AllocationCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'ALLOC' ) then cast (InvertedAmountInGlobalCurrency as fins_alloc_cost ) end` | `CURR(23)` | Allocation Cost in Global Currency |
| `TrainingCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'TRAINCST' ) then cast (InvertedAmountInGlobalCurrency as fins_trng_cost) end` | `CURR(23)` | Training Cost in Global Currency |
| `SettlementCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'SETTL_COST' ) then cast (InvertedAmountInGlobalCurrency as fins_settle_cost) end` | `CURR(23)` | Settlement Cost in Global Currency |
| `MiscellaneousCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'OTHERSMISC' ) then cast (InvertedAmountInGlobalCurrency as fins_misc_cost ) end` | `CURR(23)` | Miscellaneous Cost in Global Currency |
| `RevenueInGlobalCurrency` |  | |  | `case when ( SemanticTag = 'BILL_REV' ) then cast (InvertedAmountInGlobalCurrency as fis_revenue_ksl ) end` | `CURR(23)` | Revenue Amount in Global Currency |
| `SalesDeductionAmountInGlobCrcy` |  | |  | `case when ( SemanticTag = 'SALES_DED' ) then cast (InvertedAmountInGlobalCurrency as fins_sales_deduction ) end` | `CURR(23)` | Sales Deduction |
| `TotalWorkingHours` |  | |  | `case when StatisticalKeyFigure = 'EE_ADM' then cast(StatisticalKeyFigureQuantity as fins_skf_hours) end` | `DEC(5)` | Working Hours |
| `Headcount` |  | |  | `cast(1 as fins_skf_emp)` | `DEC(5)` | Average Number of employees |
| `TravelCostPerEmplInGlobCrcy` |  | |  | `1` | `INT1(3)` |  |
| `TrainingCostPerEmplInGlobCrcy` |  | |  | `1` | `INT1(3)` |  |
| `CostPerHourInGlobCrcy` |  | |  | `1` | `INT1(3)` |  |
| `CostPerEmployeeInGlobCrcy` |  | |  | `1` | `INT1(3)` |  |
| `MarginAmountPerEmplInGlobCrcy` |  | |  | `1` | `INT1(3)` |  |
| `MarginAmountPerHourInGlobCrcy` |  | |  | `1` | `INT1(3)` |  |
| `RecognizedMarginAmount` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERSTATKEYFIGSEMTAG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERSTATKEYFIGSEMTAG')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIPROFKFSEMQ01'
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

@EndUserText.label: 'Profit Center Ststcl Key Figure  KPI'

@ObjectModel.supportedCapabilities:[#ANALYTICAL_QUERY]
@Consumption.dbHints:  ['NO_SUBPLAN_SHARING']

define view C_ProfitCenterStatKeyFigSemTag with parameters
    //@AnalyticsDetails.query.variableSequence: 30
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [{
     entity: {
         name:    'I_PlanningCategory',
         element: 'PlanningCategory'
             }
    }]
    P_PlanningCategory    : fcom_category,

    @EndUserText.label: 'GLAccount Hierarchy'
    @Consumption.valueHelpDefinition: [{
    entity: {
     name:    'I_GLAccountHierarchyStdVH',
     //   I_FinancialStatementHierarchy
     element: 'GLAccountHierarchy'
         }
    }]
    P_GLAccountHierarchy  : fins_sem_tag_hryid,
//    @EndUserText.label: 'Statistical Key Figure Planning Category'
//    @Consumption.valueHelpDefinition: [{
//     entity: {
//         name:    'I_PlanningCategory',
//         element: 'PlanningCategory'
//             }
//    }]
//
//    P_StatKeyFigurePlngCategory : fcom_skf_category, 
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser        : syuname,
    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
          resultElement: 'ControllingArea',
          binding: [ { targetElement : 'BusinessUser' , type : #PARAMETER, value : 'P_BusinessUser' } ] }

    P_ControllingArea     : kokrs,
    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_Ledger',
    resultElement: 'Ledger',
    binding:
    [ { targetElement : 'IsLeadingLedger' ,
        type : #CONSTANT,
        value : 'X'
      }
    ]
    }
    P_Ledger              : fins_ledger



  as select from I_ActualPlanStatKeyFigSemTag as I_ActualPlanStatKeyFigSemTag
{



   @AnalyticsDetails.query.displayHierarchy: #FILTER
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_CompanyCodeName', variableSequence: 15} ] }
  @AnalyticsDetails.query.variableSequence : 16
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  
  //Ledger Fiscal Year has to be included
//  LedgerFiscalYear, use this one instead
  FiscalYear,
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  FiscalPeriod,
  @AnalyticsDetails.query.variableSequence : 50
  @AnalyticsDetails.query.display: #KEY_TEXT
  
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_ProfitCenterHierarchyName', variableSequence: 49},{type : #PARAMETER, value : 'P_ControllingArea',variableSequence: 48} ] }
  //@AnalyticsDetails.query.display: #KEY
//   @Consumption.valueHelpDefinition: [{
//     entity: {
//         name:    'I_ProfitCenterVH',
//         element: 'ProfitCenter'
//             }
//    }]
  ProfitCenter,
  
    @AnalyticsDetails.query.variableSequence: 70
    @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    @AnalyticsDetails.query.totals: #SHOW
    @AnalyticsDetails.query.axis: #FREE
    @AnalyticsDetails.query.display: #KEY_TEXT
    FunctionalArea,
//    @AnalyticsDetails.query.variableSequence: 100
//    @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
//    @AnalyticsDetails.query.totals: #SHOW
//    @AnalyticsDetails.query.axis: #FREE
//    @AnalyticsDetails.query.display: #KEY_TEXT
//    PartnerFunctionalArea,
    @AnalyticsDetails.query.totals: #SHOW
    PostingDate,
  CostCenter,
  FiscalYearPeriod,
  @AnalyticsDetails.query.hidden: true
  StatisticalKeyFigure,
  @AnalyticsDetails.query.hidden: true
  CompanyCodeCurrency,
  //@AnalyticsDetails.query.hidden: true
  @Consumption.hidden: true
  //@Semantics.amount.currencyCode: 'GlobalCurrency'
  AmountInCompanyCodeCurrency,
  @AnalyticsDetails.query.hidden: true
  @Consumption.hidden: true
  //@Semantics.currencyCode: true
  GlobalCurrency,
  //@AnalyticsDetails.query.hidden: true
  @Consumption.hidden: true
  AmountInGlobalCurrency,
//  @AnalyticsDetails.query.hidden: true
//  FreeDefinedCurrency1,
//  @AnalyticsDetails.query.hidden: true
//  AmountInFreeDefinedCurrency1,
  @AnalyticsDetails.query.hidden: true
  @Semantics.unitOfMeasure: true
  StatisticalKeyFigQtyUnit,
   @AnalyticsDetails.query.hidden: true
  //@Semantics.quantity.unitOfMeasure : 'StatisticalKeyFigQtyUnit'
  StatisticalKeyFigureQuantity,

  //@Semantics.quantity.unitOfMeasure: 'StatisticalKeyFigQtyUnit'
  @Aggregation.default: #SUM
  @EndUserText.label: 'SKF Headcount Sum'
  @Consumption.hidden: true
  case when StatisticalKeyFigure = '1001' then StatisticalKeyFigureQuantity end                          as IntmdStatisticalKeyFigFixedQty, //SKFHCQuantity,
  
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Actual'
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.decimals: 2
  //@AnalyticsDetails.query.elementHierarchy.parent: 'PlanActualDeltaValue'
  case when ( ActualPlanCode = 'A' ) then 1 end                                                        as ActualValue,

  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Plan'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.axis: #COLUMNS
  //@AnalyticsDetails.query.elementHierarchy.parent: 'PlanActualDeltaValue'
  case when ( ActualPlanCode = 'P' ) then 1 end                                                        as PlanValue,
  
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SERVICECST' ) then cast (InvertedAmountInGlobalCurrency as fins_service_cost ) end       as ServiceCostInGlobalCrcy,
  
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Delta(Plan-Actual)'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.collisionHandling: { formula: #THIS}
  @AnalyticsDetails.query.formula: '$projection.PlanValue - $projection.ActualValue'
  1                                                                                                    as   PlanActualDeltaValue,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ADMCST' ) then cast (InvertedAmountInGlobalCurrency as fins_admin_cost_globcrcy ) end       as AdministrationCostInGlobalCrcy,
 
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAVELCST' ) then cast (InvertedAmountInGlobalCurrency as fins_trav_cost) end       as TravelCostInGlobalCrcy,
    @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'UTILCST' ) then cast (InvertedAmountInGlobalCurrency as fins_util_cost) end as UtilityCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'PERSCST' ) then cast (InvertedAmountInGlobalCurrency as fins_pers_cost ) end     as PersonnelCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MATCST' ) then cast (InvertedAmountInGlobalCurrency as fins_mat_cost) end         as MaterialCostInGlobalCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MAINTCST' ) then cast (InvertedAmountInGlobalCurrency as fins_maint_cost) end     as MaintenanceCostInGlobCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'DEPREC' ) then cast (InvertedAmountInGlobalCurrency as fins_depre_cost) end    as DepreciationCostInGlobCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OVHDS' ) then cast (InvertedAmountInGlobalCurrency as fins_overh_cost) end   as OverheadCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ALLOC' ) then cast (InvertedAmountInGlobalCurrency as fins_alloc_cost ) end  as AllocationCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAINCST' ) then cast (InvertedAmountInGlobalCurrency as fins_trng_cost) end as TrainingCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SETTL_COST' ) then cast (InvertedAmountInGlobalCurrency as fins_settle_cost) end as SettlementCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OTHERSMISC' ) then cast (InvertedAmountInGlobalCurrency as fins_misc_cost ) end as MiscellaneousCostInGlobalCrcy,
  
 @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  //@AnalyticsDetails.query.reverseSign: true
  case when ( SemanticTag = 'BILL_REV' ) then cast (InvertedAmountInGlobalCurrency as fis_revenue_ksl ) end as RevenueInGlobalCurrency,
  
   @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SALES_DED' ) then cast (InvertedAmountInGlobalCurrency as fins_sales_deduction ) end as SalesDeductionAmountInGlobCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  @Semantics.quantity.unitOfMeasure: 'StatisticalKeyFigQtyUnit'
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: false
  //@EndUserText.label: 'SKF Hours'
  // @Consumption.hidden: true
  case when StatisticalKeyFigure = 'EE_ADM' then cast(StatisticalKeyFigureQuantity as fins_skf_hours) end                         as TotalWorkingHours,


  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Aggregation.default: #FORMULA
  //@Semantics.quantity.unitOfMeasure: 'StatisticalKeyFigQtyUnit'
 // @EndUserText.label: 'SKF Headcount Avg'
  @AnalyticsDetails.exceptionAggregationSteps: [
    {exceptionAggregationBehavior: #AVG,
     exceptionAggregationElements: ['FiscalYear','FiscalPeriod', 'FiscalYearPeriod'] }]
  @AnalyticsDetails.query.formula: '$projection.IntmdStatisticalKeyFigFixedQty'
 
  cast(1 as fins_skf_emp)                                                                                                   as Headcount,
        @EndUserText.label: 'Travel Cost per Employee GC'
        @AnalyticsDetails.query.hidden: false
       // @Semantics.amount.currencyCode: 'GlobalCurrency' 
        @DefaultAggregation: #FORMULA
        @AnalyticsDetails.query.formula: 'NDIV0($projection.TravelCostInGlobalCrcy / $projection.Headcount)'
       @AnalyticsDetails.query.collisionHandling: { formula: #DEFAULT, decimals: #DEFAULT, scaling: #DEFAULT }
        1                                                                               as TravelCostPerEmplInGlobCrcy,
  


        @EndUserText.label: 'Training Cost per Employee GC'
        @AnalyticsDetails.query.hidden: false
       // @Semantics.amount.currencyCode: 'GlobalCurrency'
        @AnalyticsDetails.query.formula: 'NDIV0($projection.TrainingCostInGlobalCrcy / $projection.Headcount)'
        1                                                                               as TrainingCostPerEmplInGlobCrcy,

         @EndUserText.label: 'Hourly Cost GC' 
         @AnalyticsDetails.query.hidden: false
        // @Semantics.amount.currencyCode: 'GlobalCurrency'      
         @Aggregation.default: #FORMULA
        @AnalyticsDetails.query.formula: 'NDIV0(($projection.AdministrationCostInGlobalCrcy+$projection.TravelCostInGlobalCrcy + $projection.PersonnelCostInGlobalCrcy + $projection.MaterialCostInGlobalCrcy + $projection.MaintenanceCostInGlobCrcy
        + $projection.DepreciationCostInGlobCrcy  + $projection.AllocationCostInGlobalCrcy + $projection.UtilityCostInGlobalCrcy
        + $projection.TrainingCostInGlobalCrcy + $projection.SettlementCostInGlobalCrcy + $projection.MiscellaneousCostInGlobalCrcy + $projection.ServiceCostInGlobalCrcy + $projection.OverheadCostInGlobalCrcy ) / $projection.TotalWorkingHours)'
        1                                                                               as CostPerHourInGlobCrcy,
        
         @EndUserText.label: 'Cost per Employee GC'
         @AnalyticsDetails.query.hidden: false  
       //  @Semantics.amount.currencyCode: 'GlobalCurrency'     
         @Aggregation.default: #FORMULA
         @AnalyticsDetails.query.formula: 'NDIV0(($projection.AdministrationCostInGlobalCrcy+$projection.TravelCostInGlobalCrcy + $projection.PersonnelCostInGlobalCrcy + $projection.MaterialCostInGlobalCrcy + $projection.MaintenanceCostInGlobCrcy
        + $projection.DepreciationCostInGlobCrcy  + $projection.AllocationCostInGlobalCrcy + $projection.UtilityCostInGlobalCrcy
        + $projection.TrainingCostInGlobalCrcy + $projection.SettlementCostInGlobalCrcy + $projection.MiscellaneousCostInGlobalCrcy+ $projection.ServiceCostInGlobalCrcy +  $projection.OverheadCostInGlobalCrcy) / $projection.Headcount)'
        1                                                                               as CostPerEmployeeInGlobCrcy,
       
       
       
         @EndUserText.label: 'Margin per Employee GC' 
         @AnalyticsDetails.query.hidden: false  
        // @Semantics.amount.currencyCode: 'GlobalCurrency'    
         @Aggregation.default: #FORMULA
         @AnalyticsDetails.query.formula: 'NDIV0($projection.RevenueInGlobalCurrency  + $projection.SalesDeductionAmountInGlobCrcy  + $projection.TravelCostInGlobalCrcy + $projection.PersonnelCostInGlobalCrcy + $projection.MaterialCostInGlobalCrcy + $projection.MaintenanceCostInGlobCrcy
        + $projection.DepreciationCostInGlobCrcy  + $projection.AllocationCostInGlobalCrcy + $projection.UtilityCostInGlobalCrcy
        + $projection.TrainingCostInGlobalCrcy + $projection.SettlementCostInGlobalCrcy + $projection.MiscellaneousCostInGlobalCrcy + $projection.AdministrationCostInGlobalCrcy + $projection.ServiceCostInGlobalCrcy + $projection.OverheadCostInGlobalCrcy) / $projection.Headcount'
        1                                                                               as MarginAmountPerEmplInGlobCrcy,
                
         @EndUserText.label: 'Margin per Hour GC' 
         @AnalyticsDetails.query.hidden: false  
        // @Semantics.amount.currencyCode: 'GlobalCurrency'    
         @Aggregation.default: #FORMULA
         @AnalyticsDetails.query.formula: 'NDIV0($projection.RevenueInGlobalCurrency  + $projection.SalesDeductionAmountInGlobCrcy  + $projection.TravelCostInGlobalCrcy + $projection.PersonnelCostInGlobalCrcy + $projection.MaterialCostInGlobalCrcy + $projection.MaintenanceCostInGlobCrcy
        + $projection.DepreciationCostInGlobCrcy  + $projection.AllocationCostInGlobalCrcy + $projection.UtilityCostInGlobalCrcy
        + $projection.TrainingCostInGlobalCrcy + $projection.SettlementCostInGlobalCrcy + $projection.MiscellaneousCostInGlobalCrcy + $projection.AdministrationCostInGlobalCrcy + $projection.ServiceCostInGlobalCrcy +  $projection.OverheadCostInGlobalCrcy ) / $projection.TotalWorkingHours'
        1                                                                               as MarginAmountPerHourInGlobCrcy,
         @EndUserText.label: 'Margin GC' 
         @AnalyticsDetails.query.hidden: false
        // @Semantics.amount.currencyCode: 'GlobalCurrency'      
         @Aggregation.default: #FORMULA
         @AnalyticsDetails.query.formula: 'NDIV0($projection.RevenueInGlobalCurrency  + $projection.SalesDeductionAmountInGlobCrcy  + $projection.TravelCostInGlobalCrcy + $projection.PersonnelCostInGlobalCrcy + $projection.MaterialCostInGlobalCrcy + $projection.MaintenanceCostInGlobCrcy
        + $projection.DepreciationCostInGlobCrcy  + $projection.AllocationCostInGlobalCrcy + $projection.UtilityCostInGlobalCrcy
        + $projection.TrainingCostInGlobalCrcy + $projection.SettlementCostInGlobalCrcy + $projection.MiscellaneousCostInGlobalCrcy + $projection.AdministrationCostInGlobalCrcy + $projection.ServiceCostInGlobalCrcy + $projection.OverheadCostInGlobalCrcy)'
          1                                                                                 as RecognizedMarginAmount

}
where
  (
       GLAccountHierarchy  = :P_GLAccountHierarchy
    or GLAccountHierarchy  = ''
  )
  and(
       PlanningCategory    = 'ACT01'
    or PlanningCategory    = :P_PlanningCategory
    or PlanningCategory    = ''
  )
  and(
       StatKeyFigurePlanningCategory = 'ACT01'
    or StatKeyFigurePlanningCategory = :P_PlanningCategory
    or StatKeyFigurePlanningCategory = ''
  )
  and  ControllingArea     = :P_ControllingArea
  and  Ledger              = :P_Ledger;
```
