---
name: C_PROFITANDLOSSPLANACTQ2903
description: "This CDS view provides the prerequisites for answering the following business questions: What are the actual and plan amounts for each G/L account in company code currency? What are the actual and plan amounts for each G/L account in global currency? What are the absolute and relative differences of the actual and the plan amount in company code currency and global currency? For both currency types, you can drill down for further relevant characteristics."
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITANDLOSSPLANACTQ2903')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the actual and plan amounts for each G/L account in company code currency? What are the actual and plan amounts for each G/L account in global currency? What are the absolute and relative differences of the actual and the plan amount in company code currency and global currency? For both currency types, you can drill down for further relevant characteristics."
semantic_vi: "PL Plan Actual — CDS view tiêu dùng dựa trên I_ActualPlanJrnlEntryItemCube."
keywords:
  - "PL Plan Actual"
  - "plan"
  - "actual"
  - "account"
  - "cost"
  - "activity"
  - "type"
  - "business"
  - "transaction"
  - "calendar"
  - "month"
  - "quarter"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - plan
---
# C_PROFITANDLOSSPLANACTQ2903

**This CDS view provides the prerequisites for answering the following business questions: What are the actual and plan amounts for each G/L account in company code currency? What are the actual and plan amounts for each G/L account in global currency? What are the absolute and relative differences of the actual and the plan amount in company code currency and global currency? For both currency types, you can drill down for further relevant characteristics.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITANDLOSSPLANACTQ2903')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalYearWeek` |  | |  |  | `NUMC(6)` | Fiscal Year + Fiscal Week |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  | `cast(MaterialGroup as matkl preserving type)` | `CHAR(9)` | Material Group |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerOrder` |  | |  | `PartnerOrder_2` | `CHAR(12)` | Partner Order |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `SoldMaterial` |  | |  | `cast(SoldMaterial as fis_sold_material preserving type)` | `CHAR(40)` | Sold Material |
| `SoldProductGroup` |  | |  | `cast(SoldProductGroup as fis_soldproductgroup preserving type)` | `CHAR(9)` | Sold Product Group |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `YearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `YearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `YearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `ActualAmountInCompanyCodeCrcy` |  | |  | `case when PlanningCategory = 'ACT01' then ActualAmountInCompanyCodeCrcy else cast( 0 as fins_vhcur12) end` | `CURR(23)` | Amount in Company Code Currency |
| `PlanAmountInCompanyCodeCrcy` |  | |  | `case when PlanningCategory = :P_PlanningCategory then PlanAmountInCompanyCodeCrcy else cast( '0' as fins_vhcur12) end` | `CURR(23)` | Amount in Company Code Currency |
| `DifferenceAmtInCoCodeCrcy` |  | |  | `1` | `INT1(3)` |  |
| `CoCodeCrcyDifferencePct` |  | |  | `1` | `INT1(3)` |  |
| `ActualAmountInGlobalCurrency` |  | |  | `case when PlanningCategory = 'ACT01' then ActualAmountInGlobalCurrency else cast( 0 as fins_vkcur12) end` | `CURR(23)` | Amount in Global Currency |
| `PlanAmountInGlobalCurrency` |  | |  | `case when PlanningCategory = :P_PlanningCategory then PlanAmountInGlobalCurrency else cast( '0' as fins_vkcur12) end` | `CURR(23)` | Amount in Global Currency |
| `DifferenceAmtInGlobalCrcy` |  | |  | `0` | `INT1(3)` |  |
| `GlobalCrcyDifferencePct` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITANDLOSSPLANACTQ2903')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITANDLOSSPLANACTQ2903')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIPLPLANACT'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'PL Plan Actual'
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


define view C_ProfitAndLossPlanActQ2903
with parameters

@EndUserText.label: 'Plan Category'
@AnalyticsDetails.query.variableSequence: 20
  P_PlanningCategory : fcom_category, 

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

//@EndUserText.label: 'Plan Category'
//@AnalyticsDetails.query.variableSequence: 20
//$parameters.P_PlanningCategory as PlanningCategory,
//-------------------------------------------------------------------------------------------------------
// ROWS
//-------------------------------------------------------------------------------------------------------

@AnalyticsDetails.query.variableSequence: 81
@Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                                      hierarchyBinding : [  { type: #USER_INPUT, value: 'GLAccountHierarchy', variableSequence: 80 } ] }
@AnalyticsDetails.query.displayHierarchy: #FILTER
@AnalyticsDetails.query.axis: #ROWS
@AnalyticsDetails.query.totals: #SHOW
GLAccount,
_GLAccountInChartOfAccounts._Text[1:Language = $parameters.P_Language].GLAccountName,

//-------------------------------------------------------------------------------------------------------
// FREE
//-------------------------------------------------------------------------------------------------------

@AnalyticsDetails.query.totals: #SHOW
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

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
CostCenter,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Customer,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
CustomerGroup,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
DistributionChannel,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Division,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
ControllingDebitCreditCode,

@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.variableSequence: 15
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

@AnalyticsDetails.query.variableSequence: 40
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
@AnalyticsDetails.query.variableSequence: 10
LedgerFiscalYear,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'Product' 
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'Product'
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Material, // do not use any longer, use Product

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SoldProductGroup' 
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'SoldProductGroup'
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
cast(MaterialGroup as matkl preserving type) as MaterialGroup, // do not use any longer, use SoldProductGroup

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
AccountAssignmentType,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
OrderID,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
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
//  @AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerProjectExternalID'
PartnerProject,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerProjectExternalID,

@AnalyticsDetails.query.totals: #SHOW    
// @AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'PartnerWBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
PartnerWBSElement,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerWBSElementExternalID,

@AnalyticsDetails.query.totals: #SHOW
PersonnelNumber,
//_Employment[1:EndDate >= $parameters.P_KeyDate and StartDate <= $parameters.P_KeyDate]._Employee.EmployeeFullName as
//EmployeeFullName,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
PlanningCategory, 

@AnalyticsDetails.query.totals: #SHOW
PostingDate,          

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Product, 

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
SoldProduct, //Product

@AnalyticsDetails.query.variableSequence: 60
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
ProfitCenter,

@AnalyticsDetails.query.variableSequence: 70
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
// @AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'ProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ProjectExternalID'
Project,

@AnalyticsDetails.query.variableSequence: 70
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
ProjectExternalID,
//@Semantics.text: true
//_Project.ProjectDescription,

@AnalyticsDetails.query.axis: #FREE
CostAnalysisResource,
_CostAnalysisResource[1:ValidityEndDate >= $parameters.P_KeyDate and ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostAnalysisResourceName,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
SalesOrder,
@AnalyticsDetails.query.totals: #SHOW
SalesOrderItem,

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
SalesOrganization,

@AnalyticsDetails.query.variableSequence: 50
@Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
Segment,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SoldProduct' 
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'SoldProduct'
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
cast(SoldMaterial as fis_sold_material preserving type) as SoldMaterial, // do not use any longer, use SoldProduct

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
cast(SoldProductGroup as fis_soldproductgroup preserving type) as SoldProductGroup, 

@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
PartnerCompany, // = TradingPartner

@AnalyticsDetails.query.display: #KEY_TEXT
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'WBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'WBSElementExternalID'
WBSElement,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
WBSElementExternalID,
//@Semantics.text: true
//_WBSElement.WBSDescription,

@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
WorkItem,

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
// Company Code Currency: HSL
//
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Actual Amount in Company Code Crcy'    
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
case when PlanningCategory = 'ACT01' then ActualAmountInCompanyCodeCrcy 
                      else cast( 0 as fins_vhcur12)
end as ActualAmountInCompanyCodeCrcy,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Plan Amount in CC Crcy'    
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
case when PlanningCategory = :P_PlanningCategory then PlanAmountInCompanyCodeCrcy 
                      else cast( '0' as fins_vhcur12)
end as PlanAmountInCompanyCodeCrcy,

@EndUserText.label: 'Difference Actual Plan in CC Crcy'    
@DefaultAggregation : #FORMULA
@AnalyticsDetails.query.formula : '$projection.ActualAmountInCompanyCodeCrcy - $projection.PlanAmountInCompanyCodeCrcy'
1 as DifferenceAmtInCoCodeCrcy,

@EndUserText.label : 'Difference (%)'
@AnalyticsDetails.query.decimals: 2
@AnalyticsDetails.query.formula : 'CASE WHEN $projection.ActualAmountInCompanyCodeCrcy > 0 
                                   THEN ($projection.ActualAmountInCompanyCodeCrcy - $projection.PlanAmountInCompanyCodeCrcy) / $projection.ActualAmountInCompanyCodeCrcy * 100 
                                   ELSE NDIV0(($projection.PlanAmountInCompanyCodeCrcy - $projection.ActualAmountInCompanyCodeCrcy ) / $projection.ActualAmountInCompanyCodeCrcy) * 100 END'
1 as CoCodeCrcyDifferencePct,

//
// Global Currency: KSL RKCUR
//
@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Actual Amount in Global Crcy'    
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
case when PlanningCategory = 'ACT01' then ActualAmountInGlobalCurrency 
                      else cast( 0 as fins_vkcur12)
end as ActualAmountInGlobalCurrency,

@AnalyticsDetails.query.axis: #COLUMNS
@EndUserText.label: 'Plan Amount in Global Crcy'    
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
case when PlanningCategory = :P_PlanningCategory then PlanAmountInGlobalCurrency 
                      else cast( '0' as fins_vkcur12)
end as PlanAmountInGlobalCurrency,

@EndUserText.label: 'Difference Actual Plan in Global Crcy'    
@AnalyticsDetails.query.formula : '$projection.ActualAmountInGlobalCurrency - $projection.PlanAmountInGlobalCurrency'
0 as DifferenceAmtInGlobalCrcy,

@EndUserText.label : 'Difference (%)'
@AnalyticsDetails.query.decimals: 2
@AnalyticsDetails.query.formula :  'CASE WHEN $projection.ActualAmountInGlobalCurrency > 0 
                                   THEN ($projection.ActualAmountInGlobalCurrency - $projection.PlanAmountInGlobalCurrency) / $projection.ActualAmountInGlobalCurrency * 100 
                                   ELSE NDIV0(($projection.PlanAmountInGlobalCurrency - $projection.ActualAmountInGlobalCurrency ) / $projection.ActualAmountInGlobalCurrency) * 100 END'
1 as GlobalCrcyDifferencePct


} where Ledger = :P_Ledger and ControllingArea = :P_ControllingArea;
```
