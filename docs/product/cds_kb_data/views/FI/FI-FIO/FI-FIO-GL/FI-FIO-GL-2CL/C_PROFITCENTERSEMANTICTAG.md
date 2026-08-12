---
name: C_PROFITCENTERSEMANTICTAG
description: "Profit Center with Semantic Tag Query"
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERSEMANTICTAG')/$value
semantic_en: "Profit Center with Semantic Tag Query"
semantic_vi: "Profit Center with Semantic Tag Query — CDS view tiêu dùng dựa trên I_ActlPlnLineItemSemTagGLAcct."
keywords:
  - "profit"
  - "center"
  - "with"
  - "semantic"
  - "tag"
  - "query"
  - "planning"
  - "category"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "period"
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
# C_PROFITCENTERSEMANTICTAG

**Profit Center with Semantic Tag Query**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERSEMANTICTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `ActualValue` |  | |  | `case when ( ActualPlanCode = 'A' and Ledger = $parameters.P_Ledger ) then 1 end` | `INT1(3)` |  |
| `PlanValue` |  | |  | `case when ( ActualPlanCode = 'P' and Ledger = $parameters.P_Ledger) then 1 end` | `INT1(3)` |  |
| `PlanActualDeltaValue` |  | |  | `1` | `INT1(3)` |  |
| `ServiceCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'SERVICECST' ) then cast (InvertedAmountInGlobalCurrency as fins_service_cost ) end` | `CURR(23)` | Service Cost in Global Currency |
| `AdministrationCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'ADMCST' ) then cast (InvertedAmountInGlobalCurrency as fins_admin_cost_globcrcy ) end` | `CURR(23)` | Administration Cost in Global Currnecy |
| `TravelCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'TRAVELCST' ) then cast (InvertedAmountInGlobalCurrency as fins_trav_cost) end` | `CURR(23)` | Travel Cost Amount in Global Currency |
| `PersonnelCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'PERSCST' ) then cast (InvertedAmountInGlobalCurrency as fins_pers_cost ) end` | `CURR(23)` | Personnel Cost Amount in Global Currency |
| `MaterialCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'MATCST' ) then cast (InvertedAmountInGlobalCurrency as fins_mat_cost) end` | `CURR(23)` | Material Cost Amount in Global Currency |
| `MaintenanceCostInGlobCrcy` |  | |  | `case when ( SemanticTag = 'MAINTCST' ) then cast (InvertedAmountInGlobalCurrency as fins_maint_cost) end` | `CURR(23)` | Maintenance Cost Amount in Global Currency |
| `DepreciationCostInGlobCrcy` |  | |  | `case when ( SemanticTag = 'DEPREC' ) then cast (InvertedAmountInGlobalCurrency as fins_depre_cost) end` | `CURR(23)` | Depreciation Cost Amount in Global Currency |
| `OverheadCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'OVHDS' ) then cast (InvertedAmountInGlobalCurrency as fins_overh_cost) end` | `CURR(23)` | Overhead Cost in Global Currency |
| `AllocationCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'ALLOC' ) then cast (InvertedAmountInGlobalCurrency as fins_alloc_cost ) end` | `CURR(23)` | Allocation Cost in Global Currency |
| `TrainingCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'TRAINCST' ) then cast (InvertedAmountInGlobalCurrency as fins_trng_cost) end` | `CURR(23)` | Training Cost in Global Currency |
| `UtilityCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'UTILCST' ) then cast (InvertedAmountInGlobalCurrency as fins_util_cost) end` | `CURR(23)` | Utility Cost in Global Currency |
| `SettlementCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'SETTL_COST' ) then cast (InvertedAmountInGlobalCurrency as fins_settle_cost) end` | `CURR(23)` | Settlement Cost in Global Currency |
| `MiscellaneousCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'OTHERSMISC' ) then cast (InvertedAmountInGlobalCurrency as fins_misc_cost ) end` | `CURR(23)` | Miscellaneous Cost in Global Currency |
| `RevenueInGlobalCurrency` |  | |  | `case when ( SemanticTag = 'BILL_REV' ) then cast (InvertedAmountInGlobalCurrency as fis_revenue_ksl ) end` | `CURR(23)` | Revenue Amount in Global Currency |
| `SalesDeductionAmountInGlobCrcy` |  | |  | `case when ( SemanticTag = 'SALES_DED' ) then cast (InvertedAmountInGlobalCurrency as fins_sales_deduction ) end` | `CURR(23)` | Sales Deduction |
| `ServiceCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'SERVICECST' ) then cast (InvertedAmtInCoCodeCurrency as fins_service_cost_cc ) end` | `CURR(23)` | Service Cost in CoCode Currency |
| `AdministrationCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'ADMCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_admin_cost_cocrcy ) end` | `CURR(23)` | Administration Cost in CoCode Currnecy |
| `UtilityCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'UTILCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_util_cost_cocode ) end` | `CURR(23)` | Travel Cost Amount in Company Code Currency |
| `TravelCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'TRAVELCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_trav_cost_cocode ) end` | `CURR(23)` | Travel Cost Amount in Company Code Currency |
| `PersonnelCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'PERSCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_pers_cost_cocode ) end` | `CURR(23)` | Personnel Cost Amount in Company Code Currency |
| `MaterialCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'MATCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_mat_cost_cocode ) end` | `CURR(23)` | Material Cost Amount in Company Code Currency |
| `MaintenanceCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'MAINTCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_maint_cost_cocode ) end` | `CURR(23)` | Maintenance Cost Amount in Company Code Currency |
| `DepreciationCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'DEPREC' ) then cast (InvertedAmtInCoCodeCurrency as fins_depre_cost_cocode ) end` | `CURR(23)` | Depreciation Cost Amount in Company Code Currency |
| `OverheadCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'OVHDS' ) then cast (InvertedAmtInCoCodeCurrency as fins_overh_cost_cocode ) end` | `CURR(23)` | Overhead Cost in Company Code Currency |
| `AllocationCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'ALLOC' ) then cast (InvertedAmtInCoCodeCurrency as fins_alloc_cost_cocode ) end` | `CURR(23)` | Allocation Cost in Company Code Currency |
| `TrainingCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'TRAINCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_trng_cost_cocode) end` | `CURR(23)` | Training Cost in Company Code Currency |
| `SettlementCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'SETTL_COST' ) then cast (InvertedAmtInCoCodeCurrency as fins_settle_cost_cocode ) end` | `CURR(23)` | Settlement Cost in Company Code Currency |
| `MiscellaneousCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'OTHERSMISC' ) then cast (InvertedAmtInCoCodeCurrency as fins_misc_cost_cocode ) end` | `CURR(23)` | Miscellaneous Cost in Company Code Currency |
| `RevenueAmountInCompanyCodeCrcy` |  | |  | `case when ( SemanticTag = 'BILL_REV' ) then cast (InvertedAmtInCoCodeCurrency as fins_revenue_cocode ) end` | `CURR(23)` | Revenue in Company Code Currency |
| `SalesDeductionAmtInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'SALES_DED' ) then cast (InvertedAmtInCoCodeCurrency as fins_sales_deduction_cocode ) end` | `CURR(23)` | Sales Deduction Company Code Currency |
| `ServiceCostInFreeDefinedCrcy1` |  | |  | `case when ( SemanticTag = 'SERVICECST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_service_cost_fd1 ) end` | `CURR(23)` | Service Cost in FreeDfnd Currency1 |
| `AdminCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'ADMCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_admin_cost_fd1 ) end` | `CURR(23)` | Administration Cost in CoCode Currnecy |
| `UtilityCostInFreeDefinedCrcy1` |  | |  | `case when ( SemanticTag = 'UTILCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_util_cost_fd1 ) end` | `CURR(23)` | Travel Cost Amount in Free Defined Currency1 |
| `TravelCostInFreeDefinedCrcy1` |  | |  | `case when ( SemanticTag = 'TRAVELCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_trav_cost_fd1 ) end` | `CURR(23)` | Travel Cost Amount in Free Defined Currency1 |
| `PersonnelCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'PERSCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_pers_cost_fd1 ) end` | `CURR(23)` | Personnel Cost Amount in Free Defined Currency1 |
| `MaterialCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'MATCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_mat_cost_fd1 ) end` | `CURR(23)` | Material Cost Amount in Free Defined Currency1 |
| `MaintenanceCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'MAINTCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_maint_cost_fd1 ) end` | `CURR(23)` | Maintenance Cost Free Defined Currency1 |
| `DeprCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'DEPREC' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_depre_cost_fd1 ) end` | `CURR(23)` | Depreciation Cost Amount in Free Defined Currency1 |
| `OverheadCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'OVHDS' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_overh_cost_fd1 ) end` | `CURR(23)` | Overhead Cost in Free Defined Currency1 |
| `AllocationCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'ALLOC' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_alloc_cost_fd1 ) end` | `CURR(23)` | Allocation Cost in Free Defined Currency1 |
| `TrainingCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'TRAINCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_trng_cost_fd1 ) end` | `CURR(23)` | Training Cost in Free Defiend Currency1 |
| `SettlementCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'SETTL_COST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_settle_cost_fd1 ) end` | `CURR(23)` | Settlement Cost in Free Defined Currency1 |
| `MiscCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'OTHERSMISC' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_misc_cost_fd1 ) end` | `CURR(23)` | Miscellaneous Cost in Free Defined Currency1 |
| `RevenueAmtInFreeDefinedCrcy1` |  | |  | `case when ( SemanticTag = 'BILL_REV' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fis_revenue_fd1 ) end` | `CURR(23)` | Revenue Amount in Free Defined Currency1 |
| `SlsDeductionAmtInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'SALES_DED' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_sales_deduction_fd1 ) end` | `CURR(23)` | Sales Deduction Free Defined Currency1 |
| `RecognizedMarginAmount` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERSEMANTICTAG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROFITCENTERSEMANTICTAG')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIPROFSEMQ01'
@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@AbapCatalog.compiler.compareFilter:true 
@Analytics.query: true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Profit Center with Semantic Tag Query'
@Analytics.settings.zeroValues.handling: #HIDE
@Analytics.settings.zeroValues.hideOnAxis: #ROWS_COLUMNS

@ObjectModel.supportedCapabilities:[#ANALYTICAL_QUERY]
@Consumption.dbHints:  ['NO_SUBPLAN_SHARING']

define view C_ProfitCenterSemanticTag  with parameters
    //@AnalyticsDetails.query.variableSequence: 30
    @Consumption.hidden: false
     @Consumption.valueHelpDefinition: [{
     entity: {
         name:    'I_PlanningCategory',
         element: 'PlanningCategory'
             }
    }]
    P_PlanningCategory : fcom_category,
    @EndUserText.label: 'GLAccount Hierarchy'
  @Consumption.valueHelpDefinition: [{
    entity: {
     name:    'I_GLAccountHierarchyStdVH',
     element: 'GLAccountHierarchy'
         }
    }]
    P_GLAccountHierarchy  : fins_sem_tag_hryid,
    @Consumption.hidden: true
    @Environment.systemField: #USER
     P_BusinessUser: syuname,

@Consumption.hidden: true
@Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea', 
      resultElement: 'ControllingArea', 
      binding: [ { targetElement : 'BusinessUser' , type : #PARAMETER, value : 'P_BusinessUser' } ] }
@AnalyticsDetails.query.variableSequence: 5
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
@AnalyticsDetails.query.variableSequence: 10
P_Ledger: fins_ledger

  as select from I_ActlPlnLineItemSemTagGLAcct
{
@Consumption.hidden: true
PlanningCategory,
  //@Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false, defaultValue: '0001' }
  @AnalyticsDetails.query.displayHierarchy: #FILTER
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_CompanyCodeName', variableSequence: 15} ] }
  @AnalyticsDetails.query.variableSequence : 16
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,
//  @Consumption.derivation: { lookupEntity: 'I_Ledger',
//    resultElement: 'Ledger', binding: [
//    { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
//   }
//  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: false }
//  @AnalyticsDetails.query.variableSequence : 90
//  @AnalyticsDetails.query.display: #KEY
//  Ledger,
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 20
  @AnalyticsDetails.query.display: #KEY
  FiscalYear,
  @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 30
  @AnalyticsDetails.query.display: #KEY
  FiscalPeriod,
  //@AnalyticsDetails.query.display: #KEY_TEXT
  //SourceLedger,
  //@Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 50
  @AnalyticsDetails.query.display: #KEY_TEXT
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                       hierarchyBinding : [{type : #PARAMETER, value : 'P_ControllingArea',variableSequence: 48}, {type : #USER_INPUT, value : 'P_ProfitCenterHierarchyName', variableSequence: 49}] }
  //@AnalyticsDetails.query.displayHierarchy: #FILTER
  ProfitCenter,
  @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 50
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostCenter,
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  SoldMaterial                                                                                                                 as SoldProduct,
//  @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
//  @AnalyticsDetails.query.axis: #FREE
//  @AnalyticsDetails.query.variableSequence : 70
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  SoldProductGroup                                                                                                             as ProductGroup,
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  Customer,
//  @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
//  @AnalyticsDetails.query.variableSequence : 60
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  CustomerGroup,
//  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
//  @AnalyticsDetails.query.variableSequence : 80
//  @AnalyticsDetails.query.display: #KEY
//  SalesOrder,
//  @AnalyticsDetails.query.display: #KEY
//  SalesOrderItem,
//  @AnalyticsDetails.query.display: #KEY
//  ConditionContract,
  @AnalyticsDetails.query.display: #KEY
  FiscalYearPeriod,
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  SalesOrganization,
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  CustomerSupplierCountry,
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  CustomerSupplierIndustry,
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  SalesDistrict,
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  ShipToParty,
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  BillToParty,
  @AnalyticsDetails.query.display: #KEY
  BusinessTransactionType,
  @AnalyticsDetails.query.display: #KEY
  GlobalCurrency,
  @AnalyticsDetails.query.display: #KEY
  CompanyCodeCurrency,
   @AnalyticsDetails.query.display: #KEY
  FreeDefinedCurrency1,
 @AnalyticsDetails.query.hidden: true 
 @Consumption.hidden: true
  SemanticTag, // Should be hidden
  //@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.totals: #SHOW
@AnalyticsDetails.query.display: #KEY_TEXT
ControllingDebitCreditCode,



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
@AnalyticsDetails.query.hidden: true
ChartOfAccounts, //to be hidden

@AnalyticsDetails.query.display: #KEY_TEXT
@AnalyticsDetails.query.hidden: true
IsCommitment,


  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Actual'
  @AnalyticsDetails.query.axis: #COLUMNS
  //@AnalyticsDetails.query.elementHierarchy.parent: 'PlanActualDeltaValue'
  case when ( ActualPlanCode = 'A' and Ledger = $parameters.P_Ledger ) then 1 end                                 as ActualValue,

  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Plan'
  @AnalyticsDetails.query.axis: #COLUMNS
 // @AnalyticsDetails.query.elementHierarchy.parent: 'PlanActualDeltaValue'
  case when ( ActualPlanCode = 'P' and Ledger = $parameters.P_Ledger) then 1 end                                  as PlanValue,
//and Ledger = $parameters.P_Ledge
// @AnalyticsDetails.query.onCharacteristicStructure: true
//  @EndUserText.label: 'Commitment'
//  @AnalyticsDetails.query.axis: #COLUMNS
//  @AnalyticsDetails.query.elementHierarchy.parent: 'PlanActualCommitmentDelta'
//  case when ( IsCommitment = 'X' and ActualPlanCode = 'A' and Ledger = '0E' ) then 1 end                                  as CommitmentValue,
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Delta(Plan-Actual)'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PlanValue - $projection.ActualValue'
  1                                                                                      as PlanActualDeltaValue,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SERVICECST' ) then cast (InvertedAmountInGlobalCurrency as fins_service_cost ) end       as ServiceCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ADMCST' ) then cast (InvertedAmountInGlobalCurrency as fins_admin_cost_globcrcy ) end       as AdministrationCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAVELCST' ) then cast (InvertedAmountInGlobalCurrency as fins_trav_cost) end       as TravelCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'PERSCST' ) then cast (InvertedAmountInGlobalCurrency as fins_pers_cost ) end     as PersonnelCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MATCST' ) then cast (InvertedAmountInGlobalCurrency as fins_mat_cost) end         as MaterialCostInGlobalCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MAINTCST' ) then cast (InvertedAmountInGlobalCurrency as fins_maint_cost) end     as MaintenanceCostInGlobCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'DEPREC' ) then cast (InvertedAmountInGlobalCurrency as fins_depre_cost) end    as DepreciationCostInGlobCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OVHDS' ) then cast (InvertedAmountInGlobalCurrency as fins_overh_cost) end   as OverheadCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ALLOC' ) then cast (InvertedAmountInGlobalCurrency as fins_alloc_cost ) end  as AllocationCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAINCST' ) then cast (InvertedAmountInGlobalCurrency as fins_trng_cost) end as TrainingCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'UTILCST' ) then cast (InvertedAmountInGlobalCurrency as fins_util_cost) end as UtilityCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SETTL_COST' ) then cast (InvertedAmountInGlobalCurrency as fins_settle_cost) end as SettlementCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OTHERSMISC' ) then cast (InvertedAmountInGlobalCurrency as fins_misc_cost ) end as MiscellaneousCostInGlobalCrcy,
  
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'BILL_REV' ) then cast (InvertedAmountInGlobalCurrency   as fis_revenue_ksl ) end as RevenueInGlobalCurrency,
  
   @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SALES_DED' ) then cast (InvertedAmountInGlobalCurrency as fins_sales_deduction ) end as SalesDeductionAmountInGlobCrcy,

// Measures in Company Code Currency
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SERVICECST' ) then cast (InvertedAmtInCoCodeCurrency as fins_service_cost_cc ) end       as ServiceCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ADMCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_admin_cost_cocrcy ) end       as AdministrationCostInCoCodeCrcy,
@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'UTILCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_util_cost_cocode ) end       as UtilityCostInCoCodeCrcy,
@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAVELCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_trav_cost_cocode ) end       as TravelCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'PERSCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_pers_cost_cocode ) end     as PersonnelCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MATCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_mat_cost_cocode ) end         as MaterialCostInCoCodeCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MAINTCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_maint_cost_cocode ) end     as MaintenanceCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'DEPREC' ) then cast (InvertedAmtInCoCodeCurrency as fins_depre_cost_cocode ) end    as DepreciationCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OVHDS' ) then cast (InvertedAmtInCoCodeCurrency as fins_overh_cost_cocode ) end   as OverheadCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ALLOC' ) then cast (InvertedAmtInCoCodeCurrency as fins_alloc_cost_cocode ) end  as AllocationCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAINCST' ) then cast (InvertedAmtInCoCodeCurrency as fins_trng_cost_cocode) end as TrainingCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SETTL_COST' ) then cast (InvertedAmtInCoCodeCurrency as fins_settle_cost_cocode ) end as SettlementCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OTHERSMISC' ) then cast (InvertedAmtInCoCodeCurrency as fins_misc_cost_cocode ) end as MiscellaneousCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'BILL_REV' ) then cast (InvertedAmtInCoCodeCurrency  as fins_revenue_cocode ) end as RevenueAmountInCompanyCodeCrcy,
  
   @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SALES_DED' ) then cast (InvertedAmtInCoCodeCurrency as fins_sales_deduction_cocode ) end as SalesDeductionAmtInCoCodeCrcy,

  // Measures in Free Defined Currency1
    @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SERVICECST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_service_cost_fd1 ) end       as ServiceCostInFreeDefinedCrcy1,
   @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ADMCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_admin_cost_fd1 ) end       as AdminCostInFreeDfndCrcy1,
      @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'UTILCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_util_cost_fd1 ) end       as UtilityCostInFreeDefinedCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAVELCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_trav_cost_fd1 ) end       as TravelCostInFreeDefinedCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'PERSCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_pers_cost_fd1 ) end     as PersonnelCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MATCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_mat_cost_fd1 ) end         as MaterialCostInFreeDfndCrcy1,

  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MAINTCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_maint_cost_fd1 ) end     as MaintenanceCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'DEPREC' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_depre_cost_fd1 ) end    as DeprCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OVHDS' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_overh_cost_fd1 ) end   as OverheadCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ALLOC' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_alloc_cost_fd1 ) end  as AllocationCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAINCST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_trng_cost_fd1 ) end as TrainingCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SETTL_COST' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_settle_cost_fd1 ) end as SettlementCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OTHERSMISC' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_misc_cost_fd1 ) end as MiscCostInFreeDfndCrcy1,
    @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'BILL_REV' ) then cast (InvertedAmtInFreeDefinedCrcy1  as fis_revenue_fd1 ) end as RevenueAmtInFreeDefinedCrcy1,
  
   @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SALES_DED' ) then cast (InvertedAmtInFreeDefinedCrcy1 as fins_sales_deduction_fd1 ) end as SlsDeductionAmtInFreeDfndCrcy1,
  
         @EndUserText.label: 'Margin GC' 
         @AnalyticsDetails.query.hidden: false
        // @Semantics.amount.currencyCode: 'GlobalCurrency'      
         @Aggregation.default: #FORMULA
         @AnalyticsDetails.query.formula: 'NDIV0($projection.RevenueInGlobalCurrency  + $projection.SalesDeductionAmountInGlobCrcy  + $projection.TravelCostInGlobalCrcy + $projection.PersonnelCostInGlobalCrcy + $projection.MaterialCostInGlobalCrcy + $projection.MaintenanceCostInGlobCrcy
        + $projection.DepreciationCostInGlobCrcy  + $projection.AllocationCostInGlobalCrcy + $projection.UtilityCostInGlobalCrcy
        + $projection.TrainingCostInGlobalCrcy + $projection.SettlementCostInGlobalCrcy + $projection.MiscellaneousCostInGlobalCrcy + $projection.AdministrationCostInGlobalCrcy + $projection.ServiceCostInGlobalCrcy)'
          1                                                                                 as RecognizedMarginAmount
  
  
  
}
where
      I_ActlPlnLineItemSemTagGLAcct.GLAccountHierarchy = $parameters.P_GLAccountHierarchy
      and ControllingArea    = :P_ControllingArea
      //and Ledger             = :P_Ledger or Ledger = :P_CommLedger

      
      
  and 
  (
       PlanningCategory = 'ACT01'
    or PlanningCategory = $parameters.P_PlanningCategory
  )
  and 
  (Ledger= :P_Ledger or Ledger = '0E')
```
