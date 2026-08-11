---
name: I_ENGMNTPROJACTLPLANCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: What is the deviation between planned and actual costs till date? What is the proportion of billable and non-billable costs in projects? Show me a cost comparison between current and baseline versions. Show me the billable and non-billable time postings. Show me cost information by company code or controlling area."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJACTLPLANCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the deviation between planned and actual costs till date? What is the proportion of billable and non-billable costs in projects? Show me a cost comparison between current and baseline versions. Show me the billable and non-billable time postings. Show me cost information by company code or controlling area."
semantic_vi: "Plan and Actl of Engmnt Project - Cube — CDS view tổng hợp dựa trên P_Engmtprojactlsplan."
keywords:
  - "plan"
  - "and"
  - "actl"
  - "engmnt"
  - "project"
  - "cube"
  - "engagement"
  - "ledger"
  - "fiscal"
  - "period"
  - "year"
  - "sales"
  - "order"
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - plan
  - project
  - bo:project
---
# I_ENGMNTPROJACTLPLANCUBE

**This CDS view provides the prerequisites for answering the following business questions: What is the deviation between planned and actual costs till date? What is the proportion of billable and non-billable costs in projects? Show me a cost comparison between current and baseline versions. Show me the billable and non-billable time postings. Show me cost information by company code or controlling area.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJACTLPLANCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `ProjectStartDate` |  | | `_EngagementProject` | `ProjectStartDate` | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | | `_EngagementProject` | `ProjectEndDate` | `DATS(8)` | Commercial Project: End Date |
| `Customer` |  | | `_EngagementProject` | `Customer` | `CHAR(10)` | Customer Number |
| `EngagementProjectType` |  | | `_EngagementProject` | `EngagementProjectType` | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectStage` |  | | `_EngagementProject` | `EngagementProjectStage` | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectServiceOrg` |  | | `_EngagementProject` | `EngagementProjectServiceOrg` | `CHAR(5)` | Service Organization |
| `EngagementProjectCategory` |  | | `_EngagementProject` | `EngagementProjectCategory` | `CHAR(1)` | Project Type |
| `ProjectProfileCode` |  | | `_EngagementProject` | `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `BillingControlCategory` |  | |  | `case when _EngagementProject.EngagementProjectCategory = 'C' and BillableControl = 'S1' then 'NON BILL' when _EngagementProject.EngagementProjectCategory = 'C' and BillableControl <> 'S1' then 'BILLABLE' else ' ' end` | `CHAR(8)` |  |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` |  |
| `CompanyCode` |  | | `_EngagementProject` | `CompanyCode` | `CHAR(4)` | Company code for the project |
| `Country` |  | | `_EngagementProject._CompanyCode` | `Country` | `CHAR(3)` | Country/Region Key |
| `SalesOrderItemCategory` |  | | `_SalesOrderItem` | `SalesOrderItemCategory` | `CHAR(4)` | Sales Document Item Category |
| `ControllingArea` |  | | `_EngagementProject` | `ControllingArea` | `CHAR(4)` | Controlling area for the project |
| `ProfitCenter` |  | | `_EngagementProject` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` |  | | `_EngagementProject` | `CostCenter` | `CHAR(20)` | Organization Unit Key |
| `ActlEffortQty` |  | |  |  | `QUAN(15)` |  |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` |  |
| `BaselinePlndEffortQty` |  | |  |  | `QUAN(15)` |  |
| `FiscalYearPeriod` |  | |  |  | `CHAR(7)` |  |
| `Currency` |  | |  |  | `CUKY(5)` | Custom Project Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ActlRevnInProjCrcy` |  | |  | `ActualRevenueInPlnCrcy` | `CURR(28)` |  |
| `BilledRevenueAmtInProjCrcy` |  | |  | `ActualRevenueInPlnCrcy` | `CURR(28)` |  |
| `ActlCostInProjCrcy` |  | |  | `ActlCostInPlnCrcy` | `CURR(23)` |  |
| `PlndCostAmtInProjCrcy` |  | |  |  | `CURR(23)` |  |
| `BaselinePlndCostAmt` |  | |  |  | `CURR(23)` |  |
| `RevenueAsSoldAmount` |  | |  |  | `CURR(23)` |  |
| `ActlCostUpToInptPerdAmtInPC` |  | |  | `case when FiscalYearPeriod <= :P_FiscalYearPeriod then ActlCostInPlnCrcy else 0 end` | `CURR(23)` |  |
| `ActlCostUpToCurPerdAmtInPC` |  | |  | `case when FiscalYearPeriod <= ToFiscalYearPeriod then ActlCostInPlnCrcy else 0 end` | `CURR(23)` |  |
| `ActlRevnUpToInptPerdAmtInPC` |  | |  | `case when FiscalYearPeriod <= :P_FiscalYearPeriod then ActualRevenueInPlnCrcy else 0 end` | `CURR(28)` |  |
| `BilledRevnUpToInptPerdAmtInPC` |  | |  | `case when FiscalYearPeriod <= :P_FiscalYearPeriod then ActualRevenueInPlnCrcy else 0 end` | `CURR(28)` |  |
| `ActlRevnUpToCurPerdAmtInPC` |  | |  | `case when FiscalYearPeriod <= ToFiscalYearPeriod then ActualRevenueInPlnCrcy else 0 end` | `CURR(28)` |  |
| `BilledRevnUpToCurPerdAmtInPC` |  | |  | `case when FiscalYearPeriod <= ToFiscalYearPeriod then ActualRevenueInPlnCrcy else 0 end` | `CURR(28)` |  |
| `PlnCostUpToCurPerdAmtInPC` |  | |  | `case when FiscalYearPeriod <= ToFiscalYearPeriod then PlndCostAmtInProjCrcy else 0 end` | `CURR(23)` |  |
| `PlnCostUpToPrevPerdAmtInPC` |  | |  | `case when FiscalYearPeriod < ToFiscalYearPeriod then PlndCostAmtInProjCrcy else 0 end` | `CURR(23)` |  |
| `BslnCostUpToCurPerdAmtInPC` |  | |  | `case when FiscalYearPeriod <= ToFiscalYearPeriod then BaselinePlndCostAmt else 0 end` | `CURR(23)` |  |
| `BslnCostUpToPrevPerdAmtInPC` |  | |  | `case when FiscalYearPeriod < ToFiscalYearPeriod then BaselinePlndCostAmt else 0 end` | `CURR(23)` |  |
| `PlndEffortUpToCurPerd` |  | |  | `case when FiscalYearPeriod <= ToFiscalYearPeriod then PlndEffortQty else 0 end` | `QUAN(15)` |  |
| `PlnEffortUpToPrevPerdQty` |  | |  | `case when FiscalYearPeriod < ToFiscalYearPeriod then PlndEffortQty else 0 end` | `QUAN(15)` |  |
| `BslnEffortUpToCurPerdQty` |  | |  | `case when FiscalYearPeriod <= ToFiscalYearPeriod then BaselinePlndEffortQty else 0 end` | `QUAN(15)` |  |
| `BslnEffortUpToPrevPerdQty` |  | |  | `case when FiscalYearPeriod < ToFiscalYearPeriod then BaselinePlndEffortQty else 0 end` | `QUAN(15)` |  |
| `ActlEffortUpToInptPerdQty` |  | |  | `case when FiscalYearPeriod <= :P_FiscalYearPeriod then ActlEffortQty else 0 end` | `QUAN(15)` |  |
| `ActlEffortQtyUpToCurPerd` |  | |  | `case when FiscalYearPeriod <= ToFiscalYearPeriod then ActlEffortQty else 0 end` | `QUAN(15)` |  |
| `ActlEffortUpToPrevPerdQty` |  | |  | `case when FiscalYearPeriod < ToFiscalYearPeriod then ActlEffortQty else 0 end` | `QUAN(15)` |  |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `DiffBtwnPlnAndActlEffortQty` |  | |  | `(PlndEffortQty - ActlEffortQty)` | `QUAN(16)` |  |
| `ProjectVisibility` |  | | `_EngagementProject` | `ProjectVisibility` | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectManagerWorkAgreement` |  | | `_EngagementProject` | `ProjectManagerWorkAgreement` | `NUMC(8)` |  |
| `_EngagementProject` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_EngagementProjectSrvcOrg` | | ✓ | | | | |
| `_EngagementProjectStage` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProject` | `I_EngagementProject` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_EngagementProjectSrvcOrg` | `I_EngagementProjectSrvcOrg` | [0..1] |
| `_EngagementProjectStage` | `I_EngagementProjectStage` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_SalesOrder` | `I_SalesOrder` | [1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_ItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Extension` | `E_CustomerProject` | [1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJACTLPLANCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJACTLPLANCUBE')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IEPACTPLNCUBE',
  preserveKey: true,
  compiler.compareFilter: true
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Plan and Actl of Engmnt Project - Cube'
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType.serviceQuality: #D,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #MIXED,
  modelingPattern: #ANALYTICAL_CUBE,
  supportedCapabilities: [#ANALYTICAL_PROVIDER]
}
@VDM: {
  viewType: #COMPOSITE,
  //private: false,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view I_EngmntProjActlPlanCube
  with parameters

    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:      [ { targetElement : 'CalendarDate'      , type : #SYSTEM_FIELD,  value : '#SYSTEM_DATE'} ,
                                               { targetElement : 'FiscalYearVariant' , type : #CONSTANT  ,  value : 'K4'     } ]
                              }

    P_FiscalYearPeriod : /cpd/pfp_review_year_period

  as select from P_Engmtprojactlsplan
  association [0..1] to I_EngagementProject         as _EngagementProject        on  $projection.EngagementProject = _EngagementProject.EngagementProject
  association [0..1] to I_Customer                  as _Customer                 on  $projection.Customer = _Customer.Customer

  association [0..1] to I_EngagementProjectSrvcOrg  as _EngagementProjectSrvcOrg on  $projection.EngagementProjectServiceOrg = _EngagementProjectSrvcOrg.EngagementProjectServiceOrg

  association [0..1] to I_EngagementProjectStage    as _EngagementProjectStage   on  $projection.EngagementProjectStage = _EngagementProjectStage.EngagementProjectStage

  association [0..1] to I_ControllingArea           as _ControllingArea          on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_ProfitCenter              as _ProfitCenter             on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                 and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter

  association [1]    to I_SalesOrder                as _SalesOrder               on  $projection.SalesOrder = _SalesOrder.SalesOrder

  association [0..*] to I_CostCenter                as _CostCenter               on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                                 and $projection.ControllingArea = _CostCenter.ControllingArea

  association [0..1] to I_SalesOrderItem            as _SalesOrderItem           on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                 and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem

  association [0..1] to I_SalesDocumentItemCategory as _ItemCategory             on  $projection.SalesOrderItemCategory = _ItemCategory.SalesDocumentItemCategory

  association [0..1] to I_Currency                  as _Currency                 on  $projection.Currency = _Currency.Currency

  association [0..1] to I_Currency                  as _CompanyCodeCurrency      on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency

  association [0..1] to I_UnitOfMeasure             as _UnitOfMeasure            on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_CompanyCode               as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_Country                   as _Country                  on  $projection.Country = _Country.Country

  association [1]    to E_CustomerProject           as _Extension                on  $projection.EngagementProject = _Extension.CustomerProject

  association [0..1] to I_PersonWorkAgreement_1     as _PersonWorkAgreement_1    on  $projection.projectmanagerworkagreement = _PersonWorkAgreement_1.PersonWorkAgreement
  
  //  association [1..1] to I_EngmntProjRole            as _EngagementProjectRoles    on  $projection.EngagementProject           = _EngagementProjectRoles.EngagementProject


{
  @ObjectModel.foreignKey.association: '_EngagementProject'
  EngagementProject,


  @Consumption: {
      filter.hidden: false,
      derivation: {
          lookupEntity: 'I_Ledger',
          resultElement: 'Ledger',
      binding: [ {
          targetElement: 'IsLeadingLedger',
          type: #CONSTANT,
          value: 'X'
               } ]
                  }
                }
  Ledger,

  @EndUserText.label: 'Month'
  FiscalPeriod                                   as FiscalPeriod,
  @EndUserText.label: 'Year'
  FiscalYear                                     as FiscalYear,

  @ObjectModel.foreignKey.association: '_SalesOrder'
  SalesOrder                                     as SalesOrder,

  @ObjectModel.foreignKey.association: '_SalesOrderItem'
  SalesOrderItem                                 as SalesOrderItem,


  @ObjectModel.foreignKey.association: '_UnitOfMeasure'
  @Semantics.unitOfMeasure: true
  UnitOfMeasure                                  as UnitOfMeasure,

  _EngagementProject.ProjectStartDate            as ProjectStartDate,

  _EngagementProject.ProjectEndDate              as ProjectEndDate,

  @ObjectModel.foreignKey.association: '_Customer'
  _EngagementProject.Customer                    as Customer,

  _EngagementProject.EngagementProjectType,

  @ObjectModel.foreignKey.association: '_EngagementProjectStage'
  _EngagementProject.EngagementProjectStage      as EngagementProjectStage,

  @ObjectModel.foreignKey.association: '_EngagementProjectSrvcOrg'
  _EngagementProject.EngagementProjectServiceOrg as EngagementProjectServiceOrg,

  _EngagementProject.EngagementProjectCategory   as EngagementProjectCategory,

  @Consumption.hidden: true
  _EngagementProject.ProjectProfileCode,

  EngagementProjectResourceType,

  case
  when _EngagementProject.EngagementProjectCategory = 'C' and BillableControl = 'S1'
  then 'NON BILL'
  when _EngagementProject.EngagementProjectCategory = 'C' and BillableControl <> 'S1'
  then 'BILLABLE'
  else  ' '
  end                                            as BillingControlCategory,

  ProjectManagerName,

  @ObjectModel.foreignKey.association: '_CompanyCode'
  _EngagementProject.CompanyCode                 as CompanyCode,

  @ObjectModel.foreignKey.association: '_Country'
  _EngagementProject._CompanyCode.Country        as Country,


  @ObjectModel.foreignKey.association: '_ItemCategory'
  _SalesOrderItem.SalesOrderItemCategory         as SalesOrderItemCategory,

  @ObjectModel.foreignKey.association: '_ControllingArea'
  _EngagementProject.ControllingArea             as ControllingArea,

  @ObjectModel.foreignKey.association: '_ProfitCenter'
  _EngagementProject.ProfitCenter                as ProfitCenter,

  @ObjectModel.foreignKey.association: '_CostCenter'
  _EngagementProject.CostCenter                  as CostCenter,

  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @DefaultAggregation: #SUM
  ActlEffortQty,

  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @DefaultAggregation: #SUM
  PlndEffortQty                                  as PlndEffortQty,

  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @DefaultAggregation: #SUM
  BaselinePlndEffortQty                          as BaselinePlndEffortQty,

  @EndUserText.label: 'Year/Month'
  FiscalYearPeriod                               as FiscalYearPeriod,

  @ObjectModel.foreignKey.association: '_Currency'
  @Semantics.currencyCode: true
  Currency                                       as Currency,
  @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
  @Semantics.currencyCode: true
  CompanyCodeCurrency                            as CompanyCodeCurrency,

  @VDM.lifecycle.status: #DEPRECATED
  @VDM.lifecycle.successor: 'BilledRevenueAmtInProjCrcy'
  @Semantics.amount.currencyCode: 'Currency'
  @DefaultAggregation: #SUM
  ActualRevenueInPlnCrcy                         as ActlRevnInProjCrcy,
  
  @Semantics.amount.currencyCode: 'Currency'
  @DefaultAggregation: #SUM
  ActualRevenueInPlnCrcy                         as BilledRevenueAmtInProjCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @DefaultAggregation: #SUM
  ActlCostInPlnCrcy                              as ActlCostInProjCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @DefaultAggregation: #SUM
  PlndCostAmtInProjCrcy,

  @Semantics.amount.currencyCode: 'Currency'
  @DefaultAggregation: #SUM
  BaselinePlndCostAmt,

  @Semantics.amount.currencyCode: 'Currency'
  @DefaultAggregation: #SUM
  RevenueAsSoldAmount,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Actl Cost Upto Input Perd in Proj. Crcy'
  case when  FiscalYearPeriod <= :P_FiscalYearPeriod
  then ActlCostInPlnCrcy
  else 0
  end                                            as ActlCostUpToInptPerdAmtInPC,


  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Actl Cost Upto Curr. Perd in Proj. Crcy'
  case when  FiscalYearPeriod <= ToFiscalYearPeriod
  then ActlCostInPlnCrcy
  else 0
  end                                            as ActlCostUpToCurPerdAmtInPC,

  @VDM.lifecycle.status: #DEPRECATED
  @VDM.lifecycle.successor: 'BilledRevnUpToInptPerdAmtInPC'
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Actl Rev. Upto Input Perd in Proj. Crcy'
  case when  FiscalYearPeriod <= :P_FiscalYearPeriod
  then ActualRevenueInPlnCrcy
  else 0
  end                                            as ActlRevnUpToInptPerdAmtInPC,
  
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Billed Rev. Upto Input Perd in Proj. Crcy'
  case when  FiscalYearPeriod <= :P_FiscalYearPeriod
  then ActualRevenueInPlnCrcy
  else 0
  end                                            as BilledRevnUpToInptPerdAmtInPC,

  @VDM.lifecycle.status: #DEPRECATED
  @VDM.lifecycle.successor: 'BilledRevnUpToCurPerdAmtInPC'
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Actl Rev. Upto Curr. Perd in Proj. Crcy'
  case when  FiscalYearPeriod <= ToFiscalYearPeriod
  then ActualRevenueInPlnCrcy
  else 0
  end                                            as ActlRevnUpToCurPerdAmtInPC,
  
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Billed Rev. Upto Curr. Perd in Proj. Crcy'
  case when  FiscalYearPeriod <= ToFiscalYearPeriod
  then ActualRevenueInPlnCrcy
  else 0
  end                                            as BilledRevnUpToCurPerdAmtInPC,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Plan Cost Upto Curr. Perd in Proj. Crcy'
  case when  FiscalYearPeriod <= ToFiscalYearPeriod
  then PlndCostAmtInProjCrcy
  else 0
  end                                            as PlnCostUpToCurPerdAmtInPC,


  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Plan Cost Upto Prev. Perd in Proj. Crcy'
  case when  FiscalYearPeriod < ToFiscalYearPeriod
  then PlndCostAmtInProjCrcy
  else 0
  end                                            as PlnCostUpToPrevPerdAmtInPC,


  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Baseline Cost Upto Curr. Perd Proj. Crcy'
  case when  FiscalYearPeriod <= ToFiscalYearPeriod
  then BaselinePlndCostAmt
  else 0
  end                                            as BslnCostUpToCurPerdAmtInPC,


  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  @EndUserText.label: 'Baseline Cost Upto Prev. Perd Proj. Crcy'
  case when  FiscalYearPeriod < ToFiscalYearPeriod
  then BaselinePlndCostAmt
  else 0
  end                                            as BslnCostUpToPrevPerdAmtInPC,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Plan Effort Upto Curr. Perd'
  case when  FiscalYearPeriod <= ToFiscalYearPeriod
  then PlndEffortQty
  else 0
  end                                            as PlndEffortUpToCurPerd,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Plan Effort Upto Prev. Perd'
  case when  FiscalYearPeriod < ToFiscalYearPeriod
  then PlndEffortQty
  else 0
  end                                            as PlnEffortUpToPrevPerdQty,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Baseline Effort Upto Curr. Perd'
  case when  FiscalYearPeriod <= ToFiscalYearPeriod
  then BaselinePlndEffortQty
  else 0
  end                                            as BslnEffortUpToCurPerdQty,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Baseline Effort Upto Prev. Perd'
  case when  FiscalYearPeriod < ToFiscalYearPeriod
  then BaselinePlndEffortQty
  else 0
  end                                            as BslnEffortUpToPrevPerdQty,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Actual Effort Upto Input Perd'
  case when FiscalYearPeriod <= :P_FiscalYearPeriod
  then ActlEffortQty
  else 0
  end                                            as ActlEffortUpToInptPerdQty,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Actual Effort Upto Curr. Perd'
  case when FiscalYearPeriod <= ToFiscalYearPeriod
  then ActlEffortQty
  else 0
  end                                            as ActlEffortQtyUpToCurPerd,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Actual Effort Upto Prev. Perd'
  case when FiscalYearPeriod < ToFiscalYearPeriod
  then ActlEffortQty
  else 0
  end                                            as ActlEffortUpToPrevPerdQty,

  @Semantics.booleanIndicator:true
  @EndUserText.label: 'My Projects'
  IsMyProject,


  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Remaining Effort'
  (PlndEffortQty - ActlEffortQty)                as DiffBtwnPlnAndActlEffortQty,

  @EndUserText.label:'Confidential Project'
  @Analytics.internalName: #LOCAL
  _EngagementProject.ProjectVisibility           as ProjectVisibility,
  
  @Consumption.hidden: true
  _EngagementProject.ProjectManagerWorkAgreement,

  _EngagementProject,
  _Customer,
  _EngagementProjectSrvcOrg,
  _EngagementProjectStage,
  _SalesOrder,
  _SalesOrderItem,
  @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true //CE2111 - Fix Association join condition in analytical model
  _CostCenter,
  _ItemCategory,
  _ControllingArea,
  _ProfitCenter,
  _Currency,
  _CompanyCodeCurrency,
  _UnitOfMeasure,
  _CompanyCode,
  _Country,
  @Consumption.hidden: true
  _PersonWorkAgreement_1
}
where
  (
       _EngagementProject.EngagementProjectStage = 'P003'
    or _EngagementProject.EngagementProjectStage = 'P004'
    or _EngagementProject.EngagementProjectStage = 'P005'
  )
```
