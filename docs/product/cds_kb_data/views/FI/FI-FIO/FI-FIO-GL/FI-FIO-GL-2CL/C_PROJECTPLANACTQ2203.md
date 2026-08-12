---
name: C_PROJECTPLANACTQ2203
description: "This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each project, WBS element, and G/L account in company code currency? What are the baseline amounts for each project, WBS element, and G/L account in company code currency? What are the Estimate To Complete (ETC) amounts in company code currency? What are the Estimate At Completion (EAC) amounts in company code currency? What are the ongoing amounts in company code currency? What are the relative differences between actual and baseline amount in company code currency? What are the relative differences between actual and ETC amount in company code currency? What are the relative differences between actual and EAC amount in company code currency? You can also answer these questions for object currency and global currency. You can always drill down for further relevant characteristics."
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROJECTPLANACTQ2203')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each project, WBS element, and G/L account in company code currency? What are the baseline amounts for each project, WBS element, and G/L account in company code currency? What are the Estimate To Complete (ETC) amounts in company code currency? What are the Estimate At Completion (EAC) amounts in company code currency? What are the ongoing amounts in company code currency? What are the relative differences between actual and baseline amount in company code currency? What are the relative differences between actual and ETC amount in company code currency? What are the relative differences between actual and EAC amount in company code currency? You can also answer these questions for object currency and global currency. You can always drill down for further relevant characteristics."
semantic_vi: "Projects Baseline EAC Ongoing — CDS view tiêu dùng dựa trên I_ActualPlanJrnlEntryItemCube."
keywords:
  - "Projects Baseline EAC Ongoing"
  - "projects"
  - "baseline"
  - "eac"
  - "ongoing"
  - "planning"
  - "category"
  - "name"
  - "project"
  - "element"
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
  - project
  - bo:project
---
# C_PROJECTPLANACTQ2203

**This CDS view provides the prerequisites for answering the following business questions: What are the actual amounts for each project, WBS element, and G/L account in company code currency? What are the baseline amounts for each project, WBS element, and G/L account in company code currency? What are the Estimate To Complete (ETC) amounts in company code currency? What are the Estimate At Completion (EAC) amounts in company code currency? What are the ongoing amounts in company code currency? What are the relative differences between actual and baseline amount in company code currency? What are the relative differences between actual and ETC amount in company code currency? What are the relative differences between actual and EAC amount in company code currency? You can also answer these questions for object currency and global currency. You can always drill down for further relevant characteristics.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROJECTPLANACTQ2203')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategoryName` |  | |  | `$parameters.P_PlanningCategory` | `CHAR(10)` |  |
| `BaselinePlanningCategory` |  | |  | `$parameters.P_BaselinePlanningCategory` | `CHAR(10)` |  |
| `OngoingPlanningCategory` |  | |  | `$parameters.P_OngoingPlanningCategory` | `CHAR(10)` |  |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `ControllingObjectCurrency` |  | |  |  | `CUKY(5)` | CO Object Currency |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `ActualQuantityInBaseUnit` |  | |  | `case when PlanningCategory = 'ACT01' then ActualQuantityInBaseUnit else cast( '0' as fis_val_quan_act) end` | `QUAN(23)` | Actual Valuation Quantity |
| `ActualValuationQuantity` |  | |  | `case when PlanningCategory = 'ACT01' then ActualValuationQuantity else cast( '0' as fis_val_quan_act) end` | `QUAN(23)` | Actual Valuation Quantity |
| `BaselinePlannedQuantity` |  | |  | `case when PlanningCategory = :P_BaselinePlanningCategory then PlanValuationQuantity else cast( '0' as fis_val_quan_plan) end` | `QUAN(23)` | Plan Valuation Quantity |
| `OngoingPlannedQuantity` |  | |  | `case when PlanningCategory = :P_OngoingPlanningCategory then PlanValuationQuantity else cast( '0' as fis_val_quan_plan) end` | `QUAN(23)` | Plan Valuation Quantity |
| `ActualAmountInCompanyCodeCrcy` |  | |  | `case when PlanningCategory = 'ACT01' then AmountInCompanyCodeCurrency else cast( 0 as fins_vhcur12) end` | `CURR(23)` | Amount in Company Code Currency |
| `BaselineAmtInCompanyCodeCrcy` |  | |  | `case when PlanningCategory = :P_BaselinePlanningCategory then AmountInCompanyCodeCurrency else cast( 0 as fis_baseline_hsl) end` | `CURR(23)` | Baseline Amount in Company Code Currency |
| `ETCAmtInCompanyCodeCrcy` |  | |  | `case when PlanningCategory = :P_PlanningCategory then AmountInCompanyCodeCurrency else cast( 0 as fis_etc_hsl) end` | `CURR(23)` | Estimate To Complete Amount in Company Code Currency |
| `EACAmtInCompanyCodeCrcy` |  | |  | `1` | `INT1(3)` |  |
| `OngoingAmtInCompanyCodeCrcy` |  | |  | `case when PlanningCategory = :P_OngoingPlanningCategory then AmountInCompanyCodeCurrency else cast( '0' as fis_ongoing_hsl) end` | `CURR(23)` | Ongoing Amount in Company Code Currency |
| `BaselineCoCodCrcyDifferencePct` |  | |  | `1` | `INT1(3)` |  |
| `EACCCodeCrcyDifferencePct` |  | |  | `1` | `INT1(3)` |  |
| `OngoingCCodeCrcyDifferencePct` |  | |  | `1` | `INT1(3)` |  |
| `ActualAmountInGlobalCurrency` |  | |  | `case when PlanningCategory = 'ACT01' then AmountInGlobalCurrency else cast( 0 as fins_vkcur12) end` | `CURR(23)` | Amount in Global Currency |
| `BaselineAmtInGlobalCrcy` |  | |  | `case when PlanningCategory = :P_BaselinePlanningCategory then AmountInGlobalCurrency else cast( '0' as fis_baseline_ksl) end` | `CURR(23)` | Baseline Amount in Global Currency |
| `ETCAmtInGlobalCrcy` |  | |  | `case when PlanningCategory = :P_PlanningCategory then AmountInGlobalCurrency else cast( '0' as fis_etc_ksl) end` | `CURR(23)` | Estimate To Complete Amount in Global Currency |
| `EACAmtInGlobalCrcy` |  | |  | `1` | `INT1(3)` |  |
| `OngoingAmtInGlobalCrcy` |  | |  | `case when PlanningCategory = :P_OngoingPlanningCategory then AmountInGlobalCurrency else cast( '0' as fis_ongoing_ksl) end` | `CURR(23)` | Ongoing Amount in Global Currency |
| `BaselineGlobalCrcyDiffPct` |  | |  | `1` | `INT1(3)` |  |
| `EACGlobalCrcyDifferencePct` |  | |  | `1` | `INT1(3)` |  |
| `OngoingGlobalCrcyDifferencePct` |  | |  | `1` | `INT1(3)` |  |
| `ActualAmountInObjectCurrency` |  | |  | `case when PlanningCategory = 'ACT01' then AmountInObjectCurrency else cast( '0' as fis_act_co_osl) end` | `CURR(23)` | Actual Amount in Object Currency |
| `BaselineAmtInObjectCrcy` |  | |  | `case when PlanningCategory = :P_BaselinePlanningCategory then AmountInObjectCurrency else cast( '0' as fis_plan_co_osl) end` | `CURR(23)` | Plan Amount in Object Currency |
| `EstToCompleteAmtInObjectCrcy` |  | |  | `case when PlanningCategory = :P_PlanningCategory then AmountInObjectCurrency else cast( '0' as fis_plan_co_osl) end` | `CURR(23)` | Plan Amount in Object Currency |
| `EstAtCompletionAmtInObjectCrcy` |  | |  | `1` | `INT1(3)` |  |
| `OngoingAmtInObjectCrcy` |  | |  | `case when PlanningCategory = :P_OngoingPlanningCategory then AmountInObjectCurrency else cast( '0' as fis_plan_co_osl) end` | `CURR(23)` | Plan Amount in Object Currency |
| `ObjectCrcyBaselineDiffPct` |  | |  | `1` | `INT1(3)` |  |
| `ObjCrcyEstAtCompletionDiffPct` |  | |  | `1` | `INT1(3)` |  |
| `ObjectCrcyOngoingDifferencePct` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROJECTPLANACTQ2203')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROJECTPLANACTQ2203')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIPROPLACTQ2203'
@EndUserText.label: 'Projects Baseline EAC Ongoing'
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

define view C_ProjectPlanActQ2203
with parameters

@Consumption.hidden: true
@Consumption.defaultValue: 'PRO03'
  P_PlanningCategory : fcom_category, 

@Consumption.hidden: true
@Consumption.derivation: { lookupEntity: 'I_CommlProjMgmtPlngCat', 
  resultElement: 'PlanningCategory',
  binding:
  [ { targetElement : 'IsBaselinePlngCategory',
      type          : #CONSTANT,
      value         : 'X'
    }
  ]
}
  P_BaselinePlanningCategory : fcom_category, 

@Consumption.hidden: true
@Consumption.derivation: { lookupEntity: 'I_CommlProjMgmtPlngCat', 
  resultElement: 'PlanningCategory',
  binding:
  [ { targetElement : 'IsOngoingPlngCategory',
      type          : #CONSTANT,
      value         : 'X'
    }
  ]
}
  P_OngoingPlanningCategory : fcom_category, 
  
@Semantics.businessDate.at: true
@Environment.systemField: #SYSTEM_DATE
  P_KeyDate    : vdm_v_key_date,
  
@Consumption.hidden: true
@Environment.systemField: #SYSTEM_LANGUAGE
  P_Language   : sylangu,
  
@Consumption.hidden: true
@Environment.systemField: #USER
  P_BusinessUser: syuname,

@Consumption.hidden: true
@Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea', 
      resultElement: 'ControllingArea', 
      binding: [ { targetElement : 'BusinessUser' , type : #PARAMETER, value : 'P_BusinessUser' } ] }
  P_ControllingArea: kokrs,

@Consumption.derivation: { lookupEntity: 'I_Ledger', 
  resultElement: 'Ledger',
  binding:
  [ { targetElement : 'IsLeadingLedger' ,
      type : #CONSTANT,
      value : 'X'
    }
  ]
}
@AnalyticsDetails.query.variableSequence: 5
P_Ledger: fins_ledger
  
         
as select from I_ActualPlanJrnlEntryItemCube as I_ActualPlanJrnlEntryItemCube
                                  
{
@EndUserText.label: 'Planning Category'
//@AnalyticsDetails.query.variableSequence: 20
$parameters.P_PlanningCategory as PlanningCategoryName,

$parameters.P_BaselinePlanningCategory as BaselinePlanningCategory,

$parameters.P_OngoingPlanningCategory as OngoingPlanningCategory,
------------------------------------------------------------------------------------------
-- ROWS
------------------------------------------------------------------------------------------

@AnalyticsDetails.query.variableSequence: 50
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #ROWS
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Project,
//_Project.ProjectDescription,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.axis: #ROWS
@AnalyticsDetails.query.display: #KEY_TEXT
WBSElement,
//_WBSElement.WBSDescription,

@AnalyticsDetails.query.variableSequence: 61
@Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_GLAccountHierarchyName', variableSequence: 60 } ] }
@AnalyticsDetails.query.displayHierarchy: #FILTER
@AnalyticsDetails.query.axis: #ROWS
@AnalyticsDetails.query.totals: #SHOW
GLAccount,
_GLAccountInChartOfAccounts._Text[1:Language = $parameters.P_Language].GLAccountName,

------------------------------------------------------------------------------------------
-- FREE
------------------------------------------------------------------------------------------
@AnalyticsDetails.query.totals: #SHOW
BaseUnit,   // runit

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
BillableControl,

@AnalyticsDetails.query.totals: #SHOW
ControllingObjectCurrency,

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
@AnalyticsDetails.query.variableSequence: 30
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
CompanyCode,

@AnalyticsDetails.query.totals: #SHOW
CompanyCodeCurrency,

@AnalyticsDetails.query.totals: #SHOW
CostSourceUnit,   // rvunit

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
ControllingDebitCreditCode,  //CO_BELKZ

@AnalyticsDetails.query.variableSequence: 15
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
FiscalPeriod,

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

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
FunctionalArea,

@AnalyticsDetails.query.totals: #SHOW
GlobalCurrency,

@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: true }
@Consumption.derivation: { lookupEntity: 'I_CalendarDate',
        resultElement: 'CalendarYear', binding: [
        { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
@AnalyticsDetails.query.variableSequence: 10
@AnalyticsDetails.query.axis: #FREE
LedgerFiscalYear,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
OriginProfitCenter,

@AnalyticsDetails.query.totals: #SHOW
PersonnelNumber,
//_Employment[1:EndDate >= $parameters.P_KeyDate and StartDate <= $parameters.P_KeyDate]._Employee.EmployeeFullName as
//EmployeeFullName,

@AnalyticsDetails.query.variableSequence: 40
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
ProfitCenter,

@AnalyticsDetails.query.axis: #FREE
CostAnalysisResource,
//@ObjectModel.text.element: 'CostAnalysisResourceName'
_CostAnalysisResource[1:ValidityEndDate >= $parameters.P_KeyDate and ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostAnalysisResourceName,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Segment,

//@AnalyticsDetails.query.axis: #FREE
//@AnalyticsDetails.query.totals: #SHOW
//@ObjectModel.text.element: 'WBSDescription'
//_WBSElement.WBSElement as WBSElementExternalID,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
WorkItem,

------------------------------------------------------------------------------------------
-- Key Figures
------------------------------------------------------------------------------------------
 
@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden : true
ValuationQuantity,

@AnalyticsDetails.query.axis: #COLUMNS
@AnalyticsDetails.query.hidden : true
case when PlanningCategory = 'ACT01' then ActualQuantityInBaseUnit
                      else cast( '0' as fis_val_quan_act)
end as ActualQuantityInBaseUnit,

@AnalyticsDetails.query.hidden: true
@AnalyticsDetails.query.axis: #COLUMNS
case when PlanningCategory = 'ACT01' then ActualValuationQuantity
                      else cast( '0' as fis_val_quan_act)
end as ActualValuationQuantity,

@AnalyticsDetails.query.hidden: true
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Baseline Plan Valuation Quantity'    
case when PlanningCategory =  :P_BaselinePlanningCategory then PlanValuationQuantity
                      else cast( '0' as fis_val_quan_plan)
end as BaselinePlannedQuantity,

@AnalyticsDetails.query.hidden: true
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Ongoing Plan Valuation Quantity'    
case when PlanningCategory =  :P_OngoingPlanningCategory then PlanValuationQuantity
                      else cast( '0' as fis_val_quan_plan)
end as OngoingPlannedQuantity,

@AnalyticsDetails.query.axis: #COLUMNS
//HSL: Amount in Company Code Currency 
@EndUserText.label: 'Actual Amount in Company Code Crcy'    
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
case when PlanningCategory = 'ACT01' then AmountInCompanyCodeCurrency 
                      else cast( 0 as fins_vhcur12)
end as ActualAmountInCompanyCodeCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Baseline Amount in Company Code Crcy'    
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
case when PlanningCategory = :P_BaselinePlanningCategory then AmountInCompanyCodeCurrency  //'PRO01'
                      else cast( 0 as fis_baseline_hsl)
end as BaselineAmtInCompanyCodeCrcy,

@AnalyticsDetails.query.hidden : true
@EndUserText.label: 'ETC Amount in Company Code Crcy'    
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
case when PlanningCategory = :P_PlanningCategory then AmountInCompanyCodeCurrency
                      else cast( 0 as fis_etc_hsl)
end as ETCAmtInCompanyCodeCrcy,

@AnalyticsDetails.query.hidden : true
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label : 'EAC Amount in Company Code Crcy'
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
@AnalyticsDetails.query.formula : '$projection.ActualAmountInCompanyCodeCrcy + $projection.ETCAmtInCompanyCodeCrcy'
1 as EACAmtInCompanyCodeCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Ongoing Amount in Company Code Crcy'    
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
case when PlanningCategory =  :P_OngoingPlanningCategory then AmountInCompanyCodeCurrency  //'PRO02'
                      else cast( '0' as fis_ongoing_hsl)
end as OngoingAmtInCompanyCodeCrcy,

@EndUserText.label : 'Difference Act/Baseline in CC Crcy (%)'
@AnalyticsDetails.query.decimals: 2
@AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInCompanyCodeCrcy > 0 
                                   THEN ($projection.ActualAmountInCompanyCodeCrcy - $projection.BaselineAmtInCompanyCodeCrcy) / $projection.ActualAmountInCompanyCodeCrcy * 100 
                                   ELSE NDIV0(($projection.BaselineAmtInCompanyCodeCrcy - $projection.ActualAmountInCompanyCodeCrcy ) / $projection.ActualAmountInCompanyCodeCrcy) * 100 END'
1 as BaselineCoCodCrcyDifferencePct,

@EndUserText.label : 'Difference Act/EAC in CC Crcy (%)'
@AnalyticsDetails.query.hidden : true
@AnalyticsDetails.query.decimals: 2
@AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInCompanyCodeCrcy > 0 
                                   THEN ($projection.ActualAmountInCompanyCodeCrcy - $projection.EACAmtInCompanyCodeCrcy) / $projection.ActualAmountInCompanyCodeCrcy * 100 
                                   ELSE NDIV0(($projection.EACAmtInCompanyCodeCrcy - $projection.ActualAmountInCompanyCodeCrcy ) / $projection.ActualAmountInCompanyCodeCrcy) * 100 END'
1 as EACCCodeCrcyDifferencePct,

@EndUserText.label : 'Difference Act/Ongoing in CC Crcy (%)'
@AnalyticsDetails.query.hidden : true
@AnalyticsDetails.query.decimals: 2
@AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInCompanyCodeCrcy > 0 
                                   THEN ($projection.ActualAmountInCompanyCodeCrcy - $projection.OngoingAmtInCompanyCodeCrcy) / $projection.ActualAmountInCompanyCodeCrcy * 100 
                                   ELSE NDIV0(($projection.OngoingAmtInCompanyCodeCrcy - $projection.ActualAmountInCompanyCodeCrcy ) / $projection.ActualAmountInCompanyCodeCrcy) * 100 END'
1 as OngoingCCodeCrcyDifferencePct,

//KSL: Amount in GlobalCrcy/CO Area Currency (RKCUR)
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Actual Amount in Global Crcy'    
@AnalyticsDetails.query.hidden : true
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
case when PlanningCategory = 'ACT01' then AmountInGlobalCurrency 
                      else cast( 0 as fins_vkcur12)
end as ActualAmountInGlobalCurrency,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Baseline Amount in Global Crcy'    
@AnalyticsDetails.query.hidden : true
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
case when PlanningCategory = :P_BaselinePlanningCategory then AmountInGlobalCurrency //'PRO01' 
                      else cast( '0' as fis_baseline_ksl)
end as BaselineAmtInGlobalCrcy,
    
@AnalyticsDetails.query.hidden : true
@EndUserText.label: 'ETC Amount in Global Crcy'    
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
case when PlanningCategory = :P_PlanningCategory then AmountInGlobalCurrency
                      else cast( '0' as fis_etc_ksl)
end as ETCAmtInGlobalCrcy,

@AnalyticsDetails.query.hidden : true
@EndUserText.label : 'EAC Amount in Global Crcy'
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
@AnalyticsDetails.query.formula : '$projection.ActualAmountInGlobalCurrency + $projection.ETCAmtInGlobalCrcy'
1 as EACAmtInGlobalCrcy,

@AnalyticsDetails.query.hidden : true
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Ongoing Amount in Global Crcy'    
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
case when PlanningCategory = :P_OngoingPlanningCategory then AmountInGlobalCurrency  //'PRO02'
                      else cast( '0' as fis_ongoing_ksl)
end as OngoingAmtInGlobalCrcy,

@AnalyticsDetails.query.hidden : true
@EndUserText.label : 'Difference Act/Baseline in Global Crcy (%)'
@AnalyticsDetails.query.decimals: 2
@AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInGlobalCurrency > 0 
                                   THEN ($projection.ActualAmountInGlobalCurrency - $projection.BaselineAmtInGlobalCrcy) / $projection.ActualAmountInGlobalCurrency * 100 
                                   ELSE NDIV0(($projection.BaselineAmtInGlobalCrcy - $projection.ActualAmountInGlobalCurrency ) / $projection.ActualAmountInGlobalCurrency) * 100 END'
1 as BaselineGlobalCrcyDiffPct,

@AnalyticsDetails.query.hidden : true
@EndUserText.label : 'Difference Act/EAC in Global Crcy (%)'
@AnalyticsDetails.query.decimals: 2
@AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInGlobalCurrency > 0 
                                   THEN ($projection.ActualAmountInGlobalCurrency - $projection.EACAmtInGlobalCrcy) / $projection.ActualAmountInGlobalCurrency * 100 
                                   ELSE NDIV0(($projection.EACAmtInGlobalCrcy - $projection.ActualAmountInGlobalCurrency ) / $projection.ActualAmountInGlobalCurrency) * 100 END'
1 as EACGlobalCrcyDifferencePct,

@AnalyticsDetails.query.hidden : true
@EndUserText.label : 'Difference Act/Ongoing in Global Crcy (%)'
@AnalyticsDetails.query.decimals: 2
@AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInGlobalCurrency > 0 
                                   THEN ($projection.ActualAmountInGlobalCurrency - $projection.OngoingAmtInGlobalCrcy) / $projection.ActualAmountInGlobalCurrency * 100 
                                   ELSE NDIV0(($projection.OngoingAmtInGlobalCrcy - $projection.ActualAmountInGlobalCurrency ) / $projection.ActualAmountInGlobalCurrency) * 100 END'
1 as OngoingGlobalCrcyDifferencePct,

//CO_OSL: Amount in ObjectCrcy
@AnalyticsDetails.query.hidden: true
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Amount in CO Object Crcy'    
@Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
case when PlanningCategory =  'ACT01' then AmountInObjectCurrency
                      else cast( '0' as fis_act_co_osl)
end as ActualAmountInObjectCurrency,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Baseline Amount in Object Crcy'    
@AnalyticsDetails.query.hidden : true
@Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
case when PlanningCategory = :P_BaselinePlanningCategory then AmountInObjectCurrency //'PRO01' 
                      else cast( '0' as fis_plan_co_osl)
end as BaselineAmtInObjectCrcy,
    
@AnalyticsDetails.query.hidden : true
@EndUserText.label: 'ETC Amount in Object Crcy'    
@Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
case when PlanningCategory = :P_PlanningCategory then AmountInObjectCurrency
                      else cast( '0' as fis_plan_co_osl)
end as EstToCompleteAmtInObjectCrcy,

@AnalyticsDetails.query.hidden : true
@EndUserText.label : 'EAC Amount in Object Crcy'
@Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
@AnalyticsDetails.query.formula : '$projection.ActualAmountInObjectCurrency + $projection.EstToCompleteAmtInObjectCrcy'
1 as EstAtCompletionAmtInObjectCrcy,

@AnalyticsDetails.query.hidden : true
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Ongoing Amount in Object Crcy'    
@Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
case when PlanningCategory = :P_OngoingPlanningCategory then AmountInObjectCurrency  //'PRO02'
                      else cast( '0' as fis_plan_co_osl)
end as OngoingAmtInObjectCrcy,

@AnalyticsDetails.query.hidden : true
@EndUserText.label : 'Difference Act/Baseline in Object Crcy (%)'
@AnalyticsDetails.query.decimals: 2
@AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInObjectCurrency > 0 
                                   THEN ($projection.ActualAmountInObjectCurrency - $projection.BaselineAmtInObjectCrcy) / $projection.ActualAmountInObjectCurrency * 100 
                                   ELSE NDIV0(($projection.BaselineAmtInObjectCrcy - $projection.ActualAmountInObjectCurrency ) / $projection.ActualAmountInObjectCurrency) * 100 END'
1 as ObjectCrcyBaselineDiffPct,

@AnalyticsDetails.query.hidden : true
@EndUserText.label : 'Difference Act/EAC in Object Crcy (%)'
@AnalyticsDetails.query.decimals: 2
@AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInObjectCurrency > 0 
                                   THEN ($projection.ActualAmountInObjectCurrency - $projection.EstAtCompletionAmtInObjectCrcy) / $projection.ActualAmountInObjectCurrency * 100 
                                   ELSE NDIV0(($projection.EstAtCompletionAmtInObjectCrcy - $projection.ActualAmountInObjectCurrency ) / $projection.ActualAmountInObjectCurrency) * 100 END'
1 as ObjCrcyEstAtCompletionDiffPct,

@AnalyticsDetails.query.hidden : true
@EndUserText.label : 'Difference Act/Ongoing in Object Crcy (%)'
@AnalyticsDetails.query.decimals: 2
@AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInObjectCurrency > 0 
                                   THEN ($projection.ActualAmountInObjectCurrency - $projection.OngoingAmtInObjectCrcy) / $projection.ActualAmountInObjectCurrency * 100 
                                   ELSE NDIV0(($projection.OngoingAmtInObjectCrcy - $projection.ActualAmountInObjectCurrency ) / $projection.ActualAmountInObjectCurrency) * 100 END'
1 as ObjectCrcyOngoingDifferencePct

     
}  where  Ledger = :P_Ledger and ControllingArea = :P_ControllingArea
     and    ( PlanningCategory = 'ACT01' or PlanningCategory = :P_BaselinePlanningCategory or PlanningCategory = :P_OngoingPlanningCategory or PlanningCategory = :P_PlanningCategory );
```
