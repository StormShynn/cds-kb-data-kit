---
name: C_COSTCENTERSEMANTICTAG
description: Cost Center with Semantic Tag Query
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCENTERSEMANTICTAG')/$value
semantic_en: Cost Center with Semantic Tag Query
semantic_vi: Cost Center with Semantic Tag Query — CDS view tiêu dùng dựa trên I_ActlPlnLineItemSemTagGLAcct.
keywords:
  - cost
  - center
  - with
  - semantic
  - tag
  - query
  - planning
  - category
  - company
  - code
  - fiscal
  - year
  - period
tags:
  - FI
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
---
# C_COSTCENTERSEMANTICTAG

**Cost Center with Semantic Tag Query**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCENTERSEMANTICTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
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
| `CommitmentValue` |  | |  | `case when ( IsCommitment = 'X' and ActualPlanCode = 'A' and Ledger = '0E' ) then 1 end` | `INT1(3)` |  |
| `PlanActualCommitmentDeltaValue` |  | |  | `1` | `INT1(3)` |  |
| `ServiceCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'SERVICECST' ) then cast (AmountInGlobalCurrency as fins_service_cost ) end` | `CURR(23)` | Service Cost in Global Currency |
| `AdministrationCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'ADMCST' ) then cast (AmountInGlobalCurrency as fins_admin_cost_globcrcy ) end` | `CURR(23)` | Administration Cost in Global Currnecy |
| `TravelCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'TRAVELCST' ) then cast (AmountInGlobalCurrency as fins_trav_cost) end` | `CURR(23)` | Travel Cost Amount in Global Currency |
| `PersonnelCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'PERSCST' ) then cast (AmountInGlobalCurrency as fins_pers_cost ) end` | `CURR(23)` | Personnel Cost Amount in Global Currency |
| `MaterialCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'MATCST' ) then cast (AmountInGlobalCurrency as fins_mat_cost) end` | `CURR(23)` | Material Cost Amount in Global Currency |
| `MaintenanceCostInGlobCrcy` |  | |  | `case when ( SemanticTag = 'MAINTCST' ) then cast (AmountInGlobalCurrency as fins_maint_cost) end` | `CURR(23)` | Maintenance Cost Amount in Global Currency |
| `DepreciationCostInGlobCrcy` |  | |  | `case when ( SemanticTag = 'DEPREC' ) then cast (AmountInGlobalCurrency as fins_depre_cost) end` | `CURR(23)` | Depreciation Cost Amount in Global Currency |
| `OverheadCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'OVHDS' ) then cast (AmountInGlobalCurrency as fins_overh_cost) end` | `CURR(23)` | Overhead Cost in Global Currency |
| `AllocationCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'ALLOC' ) then cast (AmountInGlobalCurrency as fins_alloc_cost ) end` | `CURR(23)` | Allocation Cost in Global Currency |
| `TrainingCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'TRAINCST' ) then cast (AmountInGlobalCurrency as fins_trng_cost) end` | `CURR(23)` | Training Cost in Global Currency |
| `SettlementCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'SETTL_COST' ) then cast (AmountInGlobalCurrency as fins_settle_cost) end` | `CURR(23)` | Settlement Cost in Global Currency |
| `MiscellaneousCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'OTHERSMISC' ) then cast (AmountInGlobalCurrency as fins_misc_cost ) end` | `CURR(23)` | Miscellaneous Cost in Global Currency |
| `UtilityCostInGlobalCrcy` |  | |  | `case when ( SemanticTag = 'UTILCST' ) then cast (AmountInGlobalCurrency as fins_util_cost) end` | `CURR(23)` | Utility Cost in Global Currency |
| `ServiceCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'SERVICECST' ) then cast (AmountInCompanyCodeCurrency as fins_service_cost_cc ) end` | `CURR(23)` | Service Cost in CoCode Currency |
| `AdministrationCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'ADMCST' ) then cast (AmountInCompanyCodeCurrency as fins_admin_cost_cocrcy ) end` | `CURR(23)` | Administration Cost in CoCode Currnecy |
| `UtilityCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'UTILCST' ) then cast (AmountInCompanyCodeCurrency as fins_util_cost_cocode ) end` | `CURR(23)` | Travel Cost Amount in Company Code Currency |
| `TravelCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'TRAVELCST' ) then cast (AmountInCompanyCodeCurrency as fins_trav_cost_cocode ) end` | `CURR(23)` | Travel Cost Amount in Company Code Currency |
| `PersonnelCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'PERSCST' ) then cast (AmountInCompanyCodeCurrency as fins_pers_cost_cocode ) end` | `CURR(23)` | Personnel Cost Amount in Company Code Currency |
| `MaterialCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'MATCST' ) then cast (AmountInCompanyCodeCurrency as fins_mat_cost_cocode ) end` | `CURR(23)` | Material Cost Amount in Company Code Currency |
| `MaintenanceCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'MAINTCST' ) then cast (AmountInCompanyCodeCurrency as fins_maint_cost_cocode ) end` | `CURR(23)` | Maintenance Cost Amount in Company Code Currency |
| `DepreciationCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'DEPREC' ) then cast (AmountInCompanyCodeCurrency as fins_depre_cost_cocode ) end` | `CURR(23)` | Depreciation Cost Amount in Company Code Currency |
| `OverheadCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'OVHDS' ) then cast (AmountInCompanyCodeCurrency as fins_overh_cost_cocode ) end` | `CURR(23)` | Overhead Cost in Company Code Currency |
| `AllocationCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'ALLOC' ) then cast (AmountInCompanyCodeCurrency as fins_alloc_cost_cocode ) end` | `CURR(23)` | Allocation Cost in Company Code Currency |
| `TrainingCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'TRAINCST' ) then cast (AmountInCompanyCodeCurrency as fins_trng_cost_cocode) end` | `CURR(23)` | Training Cost in Company Code Currency |
| `SettlementCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'SETTL_COST' ) then cast (AmountInCompanyCodeCurrency as fins_settle_cost_cocode ) end` | `CURR(23)` | Settlement Cost in Company Code Currency |
| `MiscellaneousCostInCoCodeCrcy` |  | |  | `case when ( SemanticTag = 'OTHERSMISC' ) then cast (AmountInCompanyCodeCurrency as fins_misc_cost_cocode ) end` | `CURR(23)` | Miscellaneous Cost in Company Code Currency |
| `ServiceCostInFreeDefinedCrcy1` |  | |  | `case when ( SemanticTag = 'SERVICECST' ) then cast (AmountInFreeDefinedCurrency1 as fins_service_cost_fd1 ) end` | `CURR(23)` | Service Cost in FreeDfnd Currency1 |
| `AdminCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'ADMCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_admin_cost_fd1 ) end` | `CURR(23)` | Administration Cost in CoCode Currnecy |
| `UtilityCostInFreeDefinedCrcy1` |  | |  | `case when ( SemanticTag = 'UTILCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_util_cost_fd1 ) end` | `CURR(23)` | Travel Cost Amount in Free Defined Currency1 |
| `TravelCostInFreeDefinedCrcy1` |  | |  | `case when ( SemanticTag = 'TRAVELCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_trav_cost_fd1 ) end` | `CURR(23)` | Travel Cost Amount in Free Defined Currency1 |
| `PersonnelCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'PERSCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_pers_cost_fd1 ) end` | `CURR(23)` | Personnel Cost Amount in Free Defined Currency1 |
| `MaterialCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'MATCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_mat_cost_fd1 ) end` | `CURR(23)` | Material Cost Amount in Free Defined Currency1 |
| `MaintenanceCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'MAINTCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_maint_cost_fd1 ) end` | `CURR(23)` | Maintenance Cost Free Defined Currency1 |
| `DeprCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'DEPREC' ) then cast (AmountInFreeDefinedCurrency1 as fins_depre_cost_fd1 ) end` | `CURR(23)` | Depreciation Cost Amount in Free Defined Currency1 |
| `OverheadCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'OVHDS' ) then cast (AmountInFreeDefinedCurrency1 as fins_overh_cost_fd1 ) end` | `CURR(23)` | Overhead Cost in Free Defined Currency1 |
| `AllocationCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'ALLOC' ) then cast (AmountInFreeDefinedCurrency1 as fins_alloc_cost_fd1 ) end` | `CURR(23)` | Allocation Cost in Free Defined Currency1 |
| `TrainingCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'TRAINCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_trng_cost_fd1 ) end` | `CURR(23)` | Training Cost in Free Defiend Currency1 |
| `SettlementCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'SETTL_COST' ) then cast (AmountInFreeDefinedCurrency1 as fins_settle_cost_fd1 ) end` | `CURR(23)` | Settlement Cost in Free Defined Currency1 |
| `MiscCostInFreeDfndCrcy1` |  | |  | `case when ( SemanticTag = 'OTHERSMISC' ) then cast (AmountInFreeDefinedCurrency1 as fins_misc_cost_fd1 ) end` | `CURR(23)` | Miscellaneous Cost in Free Defined Currency1 |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCENTERSEMANTICTAG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COSTCENTERSEMANTICTAG')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFICOSTSEMQ01'
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
@EndUserText.label: 'Cost Center with Semantic Tag Query'

@ObjectModel.supportedCapabilities:[#ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Consumption.dbHints:  ['NO_SUBPLAN_SHARING']
define view C_CostCenterSemanticTag with parameters
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
     //   I_FinancialStatementHierarchy
     element: 'GLAccountHierarchy'
         }
    }]

//    @Consumption.valueHelp: '_GLAccountHierarchy'
    P_GLAccountHierarchy : fins_sem_tag_hryid,
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
  
//association [0..*] to I_GLAccountHierarchy  as _GLAccountHierarchy on  _GLAccountHierarchy.GLAccountHierarchy = :P_GLAccountHierarchy

  
{
@AnalyticsDetails.query.hidden: true
@Consumption.hidden: true
PlanningCategory,
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 40
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
  @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 20
  @AnalyticsDetails.query.display: #KEY
  FiscalYear,
  @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 30
  @AnalyticsDetails.query.display: #KEY
  FiscalPeriod,
  //@AnalyticsDetails.query.display: #KEY_TEXT
  //SourceLedger,
//  @Consumption.filter :{ selectionType: #RANGE, multipleSelections: true, mandatory: false }
//  @AnalyticsDetails.query.variableSequence : 50
//  @AnalyticsDetails.query.display: #KEY_TEXT
//  @AnalyticsDetails.query.displayHierarchy: #ON
//  ProfitCenter,
  @AnalyticsDetails.query.variableSequence : 40
  @Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
                        hierarchyBinding : [{type : #USER_INPUT, value : 'P_CostCenterHierarchyName', variableSequence: 35},{type : #PARAMETER, value : 'P_ControllingArea',variableSequence: 36} ]  }
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
  SemanticTag,
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
@Consumption.hidden: true
ChartOfAccounts,

@AnalyticsDetails.query.display: #KEY_TEXT
@AnalyticsDetails.query.hidden: true
IsCommitment,


  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Actual'
  @AnalyticsDetails.query.axis: #COLUMNS
  //@AnalyticsDetails.query.elementHierarchy.parent: 'PlanActualCommitmentDeltaValue'
  case when ( ActualPlanCode = 'A' and Ledger = $parameters.P_Ledger ) then 1 end                                 as ActualValue,

  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Plan'
  @AnalyticsDetails.query.axis: #COLUMNS
  //@AnalyticsDetails.query.elementHierarchy.parent: 'PlanActualCommitmentDeltaValue'
  case when ( ActualPlanCode = 'P' and Ledger = $parameters.P_Ledger) then 1 end                                  as PlanValue,
//and Ledger = $parameters.P_Ledge
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Commitment'
  @AnalyticsDetails.query.axis: #COLUMNS
 // @AnalyticsDetails.query.elementHierarchy.parent: 'PlanActualCommitmentDeltaValue'
  case when ( IsCommitment = 'X' and ActualPlanCode = 'A' and Ledger = '0E' ) then 1 end                                  as CommitmentValue,
  @AnalyticsDetails.query.onCharacteristicStructure: true
  @EndUserText.label: 'Delta'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: '$projection.PlanValue - $projection.ActualValue - $projection.CommitmentValue'
  1                                                                                      as PlanActualCommitmentDeltaValue,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SERVICECST' ) then cast (AmountInGlobalCurrency as fins_service_cost ) end       as ServiceCostInGlobalCrcy,
  
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ADMCST' ) then cast (AmountInGlobalCurrency as fins_admin_cost_globcrcy ) end       as AdministrationCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAVELCST' ) then cast (AmountInGlobalCurrency as fins_trav_cost) end       as TravelCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'PERSCST' ) then cast (AmountInGlobalCurrency as fins_pers_cost ) end     as PersonnelCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MATCST' ) then cast (AmountInGlobalCurrency as fins_mat_cost) end         as MaterialCostInGlobalCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MAINTCST' ) then cast (AmountInGlobalCurrency as fins_maint_cost) end     as MaintenanceCostInGlobCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'DEPREC' ) then cast (AmountInGlobalCurrency as fins_depre_cost) end    as DepreciationCostInGlobCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OVHDS' ) then cast (AmountInGlobalCurrency as fins_overh_cost) end   as OverheadCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ALLOC' ) then cast (AmountInGlobalCurrency as fins_alloc_cost ) end  as AllocationCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAINCST' ) then cast (AmountInGlobalCurrency as fins_trng_cost) end as TrainingCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SETTL_COST' ) then cast (AmountInGlobalCurrency as fins_settle_cost) end as SettlementCostInGlobalCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OTHERSMISC' ) then cast (AmountInGlobalCurrency as fins_misc_cost ) end as MiscellaneousCostInGlobalCrcy,
    @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'UTILCST' ) then cast (AmountInGlobalCurrency as fins_util_cost) end as UtilityCostInGlobalCrcy,
  

// Measures in Company Code Currency
@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SERVICECST' ) then cast (AmountInCompanyCodeCurrency as fins_service_cost_cc ) end       as ServiceCostInCoCodeCrcy,
 @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ADMCST' ) then cast (AmountInCompanyCodeCurrency as fins_admin_cost_cocrcy ) end       as AdministrationCostInCoCodeCrcy,
@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'UTILCST' ) then cast (AmountInCompanyCodeCurrency as fins_util_cost_cocode ) end       as UtilityCostInCoCodeCrcy,
@AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAVELCST' ) then cast (AmountInCompanyCodeCurrency as fins_trav_cost_cocode ) end       as TravelCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'PERSCST' ) then cast (AmountInCompanyCodeCurrency as fins_pers_cost_cocode ) end     as PersonnelCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MATCST' ) then cast (AmountInCompanyCodeCurrency as fins_mat_cost_cocode ) end         as MaterialCostInCoCodeCrcy,

  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MAINTCST' ) then cast (AmountInCompanyCodeCurrency as fins_maint_cost_cocode ) end     as MaintenanceCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'DEPREC' ) then cast (AmountInCompanyCodeCurrency as fins_depre_cost_cocode ) end    as DepreciationCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OVHDS' ) then cast (AmountInCompanyCodeCurrency as fins_overh_cost_cocode ) end   as OverheadCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ALLOC' ) then cast (AmountInCompanyCodeCurrency as fins_alloc_cost_cocode ) end  as AllocationCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAINCST' ) then cast (AmountInCompanyCodeCurrency as fins_trng_cost_cocode) end as TrainingCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SETTL_COST' ) then cast (AmountInCompanyCodeCurrency as fins_settle_cost_cocode ) end as SettlementCostInCoCodeCrcy,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OTHERSMISC' ) then cast (AmountInCompanyCodeCurrency as fins_misc_cost_cocode ) end as MiscellaneousCostInCoCodeCrcy,
   
  //Free Defined Currency Measure
      @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SERVICECST' ) then cast (AmountInFreeDefinedCurrency1 as fins_service_cost_fd1 ) end       as ServiceCostInFreeDefinedCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ADMCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_admin_cost_fd1 ) end       as AdminCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'UTILCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_util_cost_fd1 ) end       as UtilityCostInFreeDefinedCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAVELCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_trav_cost_fd1 ) end       as TravelCostInFreeDefinedCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'PERSCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_pers_cost_fd1 ) end     as PersonnelCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MATCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_mat_cost_fd1 ) end         as MaterialCostInFreeDfndCrcy1,

  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'MAINTCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_maint_cost_fd1 ) end     as MaintenanceCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'DEPREC' ) then cast (AmountInFreeDefinedCurrency1 as fins_depre_cost_fd1 ) end    as DeprCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OVHDS' ) then cast (AmountInFreeDefinedCurrency1 as fins_overh_cost_fd1 ) end   as OverheadCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'ALLOC' ) then cast (AmountInFreeDefinedCurrency1 as fins_alloc_cost_fd1 ) end  as AllocationCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'TRAINCST' ) then cast (AmountInFreeDefinedCurrency1 as fins_trng_cost_fd1 ) end as TrainingCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'SETTL_COST' ) then cast (AmountInFreeDefinedCurrency1 as fins_settle_cost_fd1 ) end as SettlementCostInFreeDfndCrcy1,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.hidden: false
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @DefaultAggregation: #SUM
  case when ( SemanticTag = 'OTHERSMISC' ) then cast (AmountInFreeDefinedCurrency1 as fins_misc_cost_fd1 ) end as MiscCostInFreeDfndCrcy1

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
