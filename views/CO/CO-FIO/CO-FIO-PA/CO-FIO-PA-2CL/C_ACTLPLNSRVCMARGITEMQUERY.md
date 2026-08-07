---
name: C_ACTLPLNSRVCMARGITEMQUERY
description: Actual and Plan Service Marg Item - Qry
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ACTLPLNSRVCMARGITEMQUERY')/$value
semantic_en: Actual and Plan Service Marg Item - Qry
semantic_vi: Actual and Plan Service Marg Item - Qry — CDS view tiêu dùng dựa trên Actual and Plan Service Marg Item - Qry.
keywords:
  - Actual and Plan Service Marg Item - Qry
  - actual
  - and
  - plan
  - service
  - marg
  - item
  - qry
  - ledger
  - company
  - code
  - document
  - type
  - customer
tags:
  - CO
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - consumption-view
  - lob:controlling
  - lob:finance
  - plan
---
# C_ACTLPLNSRVCMARGITEMQUERY

**Actual and Plan Service Marg Item - Qry**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ACTLPLNSRVCMARGITEMQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Revenue Recognition Key |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `OldGLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Valuation Quantity |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `ActualTotalAmount` |  | |  | `cast( case when ( PlanningCategory = 'ACT01' ) then 1 else null end as fins_dec_actltotal )` | `DEC(23)` | Actuals |
| `BaselineTotalAmount` |  | |  | `cast( case when (PlanningCategory = $parameters.P_PlanningCategory2 ) then 1 else null end as fins_dec_baselinetotalamount )` | `DEC(23)` | Baseline |
| `DeltaActualBaselineAmount` |  | |  | `cast( $projection.ActualTotalAmount - $projection.BaselineTotalAmount as fins_deltaactualbaselineamount )` | `DEC(23)` | Actual △ Baseline |
| `DeltaActualBaselineRatio` |  | |  | `cast( ratio_of( portion => $projection.DeltaActualBaselineAmount, total => $projection.BaselineTotalAmount) * 100 as fins_deltaactlbaselineratio )` | `DEC(23)` | %Actual △ Baseline |
| `OnGoingTotalAmount` |  | |  | `cast( case when ( PlanningCategory = $parameters.P_PlanningCategory3 ) then 1 else null end as fins_dec_ongoingtotalamount )` | `DEC(23)` | Ongoing |
| `DeltaActualOnGoingAmount` |  | |  | `cast( $projection.ActualTotalAmount - $projection.OnGoingTotalAmount as fins_dec_deltaactualongoingamt )` | `DEC(23)` | Actual △ Ongoing |
| `DeltaActualOnGoingRatio` |  | |  | `cast ( ratio_of( portion => $projection.DeltaActualOnGoingAmount, total => $projection.OnGoingTotalAmount) * 100 as fins_dec_deltaactualongoingrat )` | `DEC(23)` | %Actual △ OnGoing |
| `DeltaBaselineOnGoingAmount` |  | |  | `cast( $projection.BaselineTotalAmount - $projection.OnGoingTotalAmount as fins_dec_deltabaselineongoamt )` | `DEC(23)` | Baseline △ OnGoing |
| `DeltaBaselineOnGoingRatio` |  | |  | `cast (ratio_of( portion => $projection.DeltaBaselineOnGoingAmount, total => $projection.OnGoingTotalAmount) * 100 as fins_deltabaselineongoingratio )` | `DEC(23)` | %Baseline △ OnGoing |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ACTLPLNSRVCMARGITEMQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ACTLPLNSRVCMARGITEMQUERY')/$value)*

```abap
@Analytics.technicalName: 'CACTLPLNSRVCMITM'
@VDM.viewType: #CONSUMPTION
@ObjectModel.modelingPattern:#ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:[#ANALYTICAL_QUERY]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@Analytics.settings.maxProcessingEffort: #HIGH
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Actual and Plan Service Marg Item - Qry'
define transient view entity C_ActlPlnSrvcMargItemQuery
  provider contract analytical_query
  with parameters
    @Consumption.defaultValue: 'YPS2'
    @Consumption.valueHelpDefinition: [{
    entity: {
     name:    'I_FinancialStatementHierarchy',
     element: 'GLAccountHierarchy'
         }
    }]
    @AnalyticsDetails.query.variableSequence : 10
    P_GLAccountHierarchy : fins_sem_tag_hryid,

    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
                               resultElement: 'FiscalYearVariant' }
    //@Consumption.defaultValue: 'K4'
    @Consumption.hidden: true
    @Semantics.fiscal.yearVariant: true
    P_FiscalYearVariant          : fis_periv,
    
    @Consumption.defaultValue : 'PSERV01'
    @Consumption.valueHelpDefinition: [{
    entity: {
        name:    'I_PlanningCategory',
        element: 'PlanningCategory'
            }
    }]
    @AnalyticsDetails.variable: {  mandatory: true }
    P_BaselinePlanningCategory   : fins_baseline_planningcategory,

    @AnalyticsDetails.variable: { usageType: #FILTER, referenceElement: 'PlanningCategory', mandatory: true, selectionType: #SINGLE, multipleSelections: true }
    @Consumption.derivation: {
                    lookupEntity: 'I_PlanningCatSourcePlanningCat',
                    resultElement: 'SourcePlanningCategory',
                    binding : [
                                   { targetElement : 'PlanningCategory', type : #PARAMETER, value: 'P_BaselinePlanningCategory' }
                                    ]
                     }
    @Consumption.hidden: true
    P_PlanningCategory2   :fins_baseline_planningcategory,
    
    @Consumption.defaultValue : 'PSERV02'
    @Consumption.valueHelpDefinition: [{
    entity: {
        name:    'I_PlanningCategory',
        element: 'PlanningCategory'
            }
    }]
    @AnalyticsDetails.variable: {  mandatory: true }
    P_OngoingPlanningCategory   : fins_ongoing_planningcategory,


    @AnalyticsDetails.variable: { usageType: #FILTER, referenceElement: 'PlanningCategory', mandatory: true, selectionType: #SINGLE, multipleSelections: true }
    @Consumption.derivation: {
                    lookupEntity: 'I_PlanningCatSourcePlanningCat',
                    resultElement: 'SourcePlanningCategory',
                    binding : [
                                   { targetElement : 'PlanningCategory', type : #PARAMETER, value: 'P_OngoingPlanningCategory' }
                                    ]
                     }
    @Consumption.hidden: true
    P_PlanningCategory3   :fins_ongoing_planningcategory,
    
    @Environment.systemField: #SYSTEM_DATE
    @Semantics.businessDate.at: true
    @AnalyticsDetails.query.variableSequence : 110
    P_KeyDate                    : vdm_v_key_date

as projection on I_ActlPlnSrvcMargItemCube as I_ActlPlnSrvcMargItemCube
 {
    @Consumption.derivation: { lookupEntity: 'I_Ledger',
      resultElement: 'Ledger', binding: [
      { targetElement : 'IsLeadingLedger' , type : #CONSTANT, value : 'X' } ]
     }
    @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: false, mandatory: true }
    @AnalyticsDetails.query.variableSequence : 20
    @UI.textArrangement: #TEXT_LAST
    Ledger,

    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: true }
    @UI.textArrangement: #TEXT_LAST
    @AnalyticsDetails.query.variableSequence : 30
    CompanyCode,

    @UI.textArrangement: #TEXT_LAST
    @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
    @AnalyticsDetails.query.variableSequence : 40
    ServiceDocumentType,

    @Consumption.filter: {selectionType: #INTERVAL, multipleSelections: true, mandatory: false}
    @UI.textArrangement: #TEXT_LAST
    @AnalyticsDetails.query.variableSequence : 50
    ServiceDocument,

    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    @UI.textArrangement: #TEXT_LAST
    @AnalyticsDetails.query.variableSequence : 60
    Customer,

    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    @UI.textArrangement: #TEXT_LAST
    @AnalyticsDetails.query.variableSequence : 70
    CustomerGroup,

    @UI.textArrangement: #TEXT_LAST
    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    @AnalyticsDetails.query.variableSequence : 80
    @Semantics.fiscal.period: true
    @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearPeriodForCmpnyCode', element: 'FiscalPeriod' } ,
                                     additionalBinding: [
                                     { localElement: 'CompanyCode', element: 'CompanyCode' },
                                                        { localElement: 'FiscalYear', element: 'FiscalYear' } ] }]
    FiscalPeriod,

    @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
    @Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' } ,
                                     additionalBinding: [{ localElement: 'CompanyCode', element: 'CompanyCode' }] }]
    @AnalyticsDetails.query.variableSequence : 90
    @Semantics.fiscal.year: true
    @UI.textArrangement: #TEXT_LAST
    @Consumption.derivation: {
       lookupEntity:  'F_FsclYrDteFuncSglVal',
       resultElement: 'FiscalYear',
       binding: [
            { targetParameter: 'P_DateFunction', type : #CONSTANT, value: 'CURRENTFISCALYEAR' },
            { targetParameter: 'P_FiscalYearVariant', type : #PARAMETER, value: 'P_FiscalYearVariant' }
            ]
    }
    FiscalYear,

    //@Consumption.filter: {  selectionType: #HIERARCHY_NODE, multipleSelections: true, mandatory: false,
    //                                      hierarchyBinding: [  { type: #USER_INPUT, value: 'GLAccountHierarchy'} ] }
    //@AnalyticsDetails.query.displayHierarchy: #FILTER
    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    @UI.textArrangement: #TEXT_LAST
    @AnalyticsDetails.query.variableSequence : 100
    GLAccount,

    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    @UI.textArrangement: #TEXT_LAST
    @AnalyticsDetails.query.variableSequence : 120
    SoldProduct,
    
    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    @UI.textArrangement: #TEXT_LAST
    @AnalyticsDetails.query.variableSequence : 130
    SoldProductGroup,

    @Consumption.hidden: true
    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    @UI.textArrangement: #TEXT_LAST
    @AnalyticsDetails.query.variableSequence : 140
    ProviderContract,
    
    @Consumption.hidden: true
    @UI.textArrangement: #TEXT_LAST
    ProviderContractItem,

    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    @UI.textArrangement: #TEXT_LAST
    @AnalyticsDetails.query.variableSequence : 150
    ServiceContract,

    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    @UI.textArrangement: #TEXT_LAST
    @AnalyticsDetails.query.variableSequence : 160
    BusinessSolutionOrder,

    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    @UI.textArrangement: #TEXT_LAST
    @AnalyticsDetails.query.variableSequence : 170
    ProjectExternalID,
    
    @UI.textArrangement: #TEXT_LAST
    WBSElementExternalID,

    @UI.textArrangement: #TEXT_LAST
    ResultAnalysisInternalID,
  
    @UI.textArrangement: #TEXT_LAST
    Product,

    @UI.textArrangement: #TEXT_LAST
    PartnerCostCtrActivityType,

    @UI.textArrangement: #TEXT_LAST
    PersonnelNumber,

    @UI.textArrangement: #TEXT_LAST
    ServicesRenderedDate,
  
    @UI.textArrangement: #TEXT_LAST
    BusinessTransactionType,
  
    @UI.textArrangement: #TEXT_LAST
    Equipment,
    
    @UI.textArrangement: #TEXT_LAST
    TimeSheetOvertimeCategory,
  
    @UI.textArrangement: #TEXT_LAST
    BillableControl,

    @UI.textArrangement: #TEXT_LAST
    @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false }
    @AnalyticsDetails.query.variableSequence : 180
    ProfitCenter,
    
    @Consumption.filter :{ selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
    @AnalyticsDetails.query.variableSequence : 200
    @UI.textArrangement: #TEXT_LAST
    AccountAssignmentType,

    @Semantics.fiscal.yearVariant: true
    @UI.textArrangement: #TEXT_LAST
    FiscalYearVariant,

    @UI.textArrangement: #TEXT_LAST
    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    //@Consumption.valueHelpDefinition: [{ entity:{ name: 'I_FiscalYearForVariant', element: 'FiscalYear' } }]
    //@Semantics.fiscal.year: true
    LedgerFiscalYear,

    @Semantics.fiscal.yearPeriod: true
    @UI.textArrangement: #TEXT_LAST
    FiscalYearPeriod,

    @UI.textArrangement: #TEXT_LAST
    AccountingDocument,

    @UI.textArrangement: #TEXT_LAST
    LedgerGLLineItem,
    
    @UI.textArrangement: #TEXT_LAST
    FunctionalArea,

    @Consumption.filter :{ selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
    @AnalyticsDetails.query.variableSequence : 190
    @UI.textArrangement: #TEXT_LAST
    SalesDocument,
    
    @UI.textArrangement: #TEXT_LAST
    @Consumption.hidden: true
    SalesOrder,

    @Consumption.filter: {
      selectionType: #HIERARCHY_NODE,
      multipleSelections: true,
//      defaultHierarchyNode: { nodeType: 'HierarchyNode',
//                              node: [{element: 'GLAccountHierarchy' , value: 'YPS2'},
//                                     {element: 'HierarchyNode' ,      value: '010'}
//                              ]
//      },
      hierarchyBinding: [{ type: #PARAMETER, value: 'P_GLAccountHierarchy' }],
      mandatory: false }
     @AnalyticsDetails.query: {
      axis: #FREE,
      displayHierarchy: #FILTER_ONLY,
      hierarchyInitialLevel: 4,
      totals: #SHOW,
      hierarchySettings.childNodePosition: #ABOVE
    }
    @UI.textArrangement: #TEXT_ONLY
    @Consumption.hidden: true
    OldGLAccount,

    @UI.textArrangement: #TEXT_LAST
    SalesOrganization,

    @UI.textArrangement: #TEXT_LAST
    @EndUserText.label: 'Country/Region'
    CustomerSupplierCountry,

    @UI.textArrangement: #TEXT_LAST
    CustomerSupplierIndustry,

    @UI.textArrangement: #TEXT_LAST
    SalesDistrict,
 
    @UI.textArrangement: #TEXT_LAST
    ShipToParty,

    @UI.textArrangement: #TEXT_LAST
    BillToParty,

    @EndUserText.label: 'Sales Document Item'
    @UI.textArrangement: #TEXT_LAST
    SalesOrderItem,
  
    @UI.textArrangement: #TEXT_LAST
    BusinessSolutionOrderItem,

    @UI.textArrangement: #TEXT_LAST
    ServiceContractItem,

    @UI.textArrangement: #TEXT_LAST
    ServiceContractType,

    @UI.textArrangement: #TEXT_LAST
    ServiceDocumentItem,

    @UI.textArrangement: #TEXT_LAST
    Segment,

    @UI.textArrangement: #TEXT_LAST
    ControllingObjectClass,

    @UI.textArrangement: #TEXT_LAST
    GlobalCurrency,
    
    @UI.textArrangement: #TEXT_LAST
    CompanyCodeCurrency,

    @Aggregation.default: #SUM
    @Semantics.amount.currencyCode: 'GlobalCurrency'
    @EndUserText.label: 'Amount in Global Currency'
    @AnalyticsDetails.query.hidden: true
    @AnalyticsDetails.query.axis: #COLUMNS
    AmountInGlobalCurrency,

    @Aggregation.default: #SUM
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    @AnalyticsDetails.query.axis: #COLUMNS
    AmountInCompanyCodeCurrency,

    @Analytics.internalName: #LOCAL
    @UI.textArrangement: #TEXT_LAST
    BaseUnit,

    @Analytics.internalName: #LOCAL
    @Aggregation.default: #SUM
    @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
    @AnalyticsDetails.query.axis: #COLUMNS
    Quantity,

    @Analytics.internalName: #LOCAL
    @UI.textArrangement: #TEXT_LAST
    @EndUserText.label: 'Valuation UoM'
    CostSourceUnit,

    @Analytics.internalName: #LOCAL
    @Aggregation.default: #SUM
    @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
    @AnalyticsDetails.query.axis: #COLUMNS
    ValuationQuantity,


    /*****Structures*****/
    @AnalyticsDetails.query.onCharacteristicStructure: true
    @AnalyticsDetails.query.resultValuesSource: #DIMENSION
    //@Consumption.dynamicLabel: { label: 'Actuals'}
    //@EndUserText.label: 'Actuals'
    @AnalyticsDetails.query.axis: #COLUMNS
    @AnalyticsDetails.query.hidden: false
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    @OData.v2.amount.noDecimalShift: true
    cast( case when (  PlanningCategory = 'ACT01'   )  then 1 else null end as fins_dec_actltotal )  as ActualTotalAmount,                                                                                                                                                         

    @AnalyticsDetails.query.onCharacteristicStructure: true
    //@Consumption.dynamicLabel: { label: 'Baseline (&1)' , binding: [{ index: 1, parameter: 'P_BaselinePlanningCategory'}] }
    @AnalyticsDetails.query.axis: #COLUMNS
    @AnalyticsDetails.query.hidden: false
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    @OData.v2.amount.noDecimalShift: true
    cast( case when (PlanningCategory = $parameters.P_PlanningCategory2  )  then 1 else null end as fins_dec_baselinetotalamount )                     as BaselineTotalAmount,

    @AnalyticsDetails.query.onCharacteristicStructure: true
    //@Consumption.dynamicLabel: { label: 'Actual △ Baseline'}
    @Aggregation.default: #FORMULA
    @AnalyticsDetails.query.axis: #COLUMNS
    @AnalyticsDetails.query.hidden: false
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }       
    @OData.v2.amount.noDecimalShift: true                                                                              
    cast( $projection.ActualTotalAmount - $projection.BaselineTotalAmount  as fins_deltaactualbaselineamount )      as DeltaActualBaselineAmount,

    @AnalyticsDetails.query.onCharacteristicStructure: true
    //@Consumption.dynamicLabel: { label: '%Actual △ Baseline'}
    @Aggregation.default: #FORMULA
    @AnalyticsDetails.query.axis: #COLUMNS
    @AnalyticsDetails.query.hidden: false                          
    @AnalyticsDetails.query.decimals:2                                          
    cast( ratio_of( portion => $projection.DeltaActualBaselineAmount, total => $projection.BaselineTotalAmount) * 100 as fins_deltaactlbaselineratio )      as DeltaActualBaselineRatio,                                                                                                                                                                                                  

     @AnalyticsDetails.query.onCharacteristicStructure: true
    //@Consumption.dynamicLabel: { label: 'OnGoing (&1)' , binding: [{ index: 1, parameter: 'P_OngoingPlanningCategory'}]}
    @AnalyticsDetails.query.axis: #COLUMNS
    @AnalyticsDetails.query.hidden: false
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    @OData.v2.amount.noDecimalShift: true
    cast( case when ( PlanningCategory = $parameters.P_PlanningCategory3 )  then 1 else null end as fins_dec_ongoingtotalamount )                                                      as OnGoingTotalAmount,

    @AnalyticsDetails.query.onCharacteristicStructure: true
    //@Consumption.dynamicLabel: { label: 'Actual △ OnGoing'}
    @Aggregation.default: #FORMULA
    @AnalyticsDetails.query.axis: #COLUMNS
    @AnalyticsDetails.query.hidden: false
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    @OData.v2.amount.noDecimalShift: true
    cast( $projection.ActualTotalAmount - $projection.OnGoingTotalAmount  as fins_dec_deltaactualongoingamt )      as DeltaActualOnGoingAmount,

    @AnalyticsDetails.query.onCharacteristicStructure: true
    //@Consumption.dynamicLabel: { label: '%Actual △ OnGoing'}
    @Aggregation.default: #FORMULA
    @AnalyticsDetails.query.axis: #COLUMNS
    @AnalyticsDetails.query.hidden: false
    @AnalyticsDetails.query.decimals:2
    cast ( ratio_of( portion => $projection.DeltaActualOnGoingAmount, total => $projection.OnGoingTotalAmount) * 100  as fins_dec_deltaactualongoingrat )                   as DeltaActualOnGoingRatio,
    
    @AnalyticsDetails.query.onCharacteristicStructure: true
    //@Consumption.dynamicLabel: { label: 'Baseline △ OnGoing'}
    @Aggregation.default: #FORMULA
    @AnalyticsDetails.query.axis: #COLUMNS
    @AnalyticsDetails.query.hidden: false
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    @OData.v2.amount.noDecimalShift: true
    cast(  $projection.BaselineTotalAmount - $projection.OnGoingTotalAmount  as fins_dec_deltabaselineongoamt )        as DeltaBaselineOnGoingAmount,

    @AnalyticsDetails.query.onCharacteristicStructure: true
    //@Consumption.dynamicLabel: { label: '%Baseline △ OnGoing'}
    @Aggregation.default: #FORMULA
    @AnalyticsDetails.query.axis: #COLUMNS
    @AnalyticsDetails.query.hidden: false
    @AnalyticsDetails.query.decimals:2
    cast (ratio_of( portion => $projection.DeltaBaselineOnGoingAmount, total => $projection.OnGoingTotalAmount) * 100  as fins_deltabaselineongoingratio )      as DeltaBaselineOnGoingRatio

}
```
