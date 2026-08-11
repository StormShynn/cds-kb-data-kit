---
name: C_ENGMTPROJWORKANLYSQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the planned effort (hours) for a project? How many hours have been recorded? How many hours have been staffed with resources? How many of the planned hours can be billed? How many hours have not yet been staffed? How many hours have been planned up to the current month?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMTPROJWORKANLYSQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the planned effort (hours) for a project? How many hours have been recorded? How many hours have been staffed with resources? How many of the planned hours can be billed? How many hours have not yet been staffed? How many hours have been planned up to the current month?"
semantic_vi: "Engagement Project Work Analysis Query — CDS view tiêu dùng dựa trên I_EngmntProjSalesMarginCube."
keywords:
  - "engagement"
  - "project"
  - "work"
  - "analysis"
  - "query"
  - "service"
  - "fiscal"
  - "year"
  - "profit"
  - "center"
  - "customer"
  - "name"
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - consumption-view
  - lob:cross_application components
  - plan
  - project
  - bo:project
---
# C_ENGMTPROJWORKANLYSQUERY

**This CDS view provides the prerequisites for answering the following business questions: What is the planned effort (hours) for a project? How many hours have been recorded? How many hours have been staffed with resources? How many of the planned hours can be billed? How many hours have not yet been staffed? How many hours have been planned up to the current month?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMTPROJWORKANLYSQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `EngagementProject` |  | |  |  | `CHAR(40)` | Project |
| `EngagementProjectName` |  | | `_EngagementProject` | `EngagementProjectName` | `CHAR(40)` | Customer Project Name |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrderItemText` |  | | `_SalesOrderItem` | `SalesOrderItemText` | `CHAR(40)` | Short Text for Sales Order Item |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `SalesDocumentItemCategoryName` |  | |  | `_ItemCategory._Text[ 1:Language = $parameters.P_Language ].SalesDocumentItemCategoryName` | `CHAR(20)` | Description |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Review Year Period |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `PlndEffortQty` |  | |  | `case when SalesMarginCube.EngmntProjPlanLineType = 'D' then SalesMarginCube.PlndEffortQty end` | `QUAN(15)` |  |
| `SupplyEffortQty` |  | |  | `case when SalesMarginCube.EngmntProjPlanLineType = 'S' then SalesMarginCube.PlndEffortQty end` | `QUAN(15)` |  |
| `BilledEffort` |  | |  |  | `QUAN(31)` |  |
| `ActlEffortQty` |  | |  |  | `QUAN(23)` |  |
| `UnstaffedEffort` |  | |  | `1` | `INT1(3)` |  |
| `PlndEffortUpToCurMnth` |  | |  | `case when FiscalYearPeriod <= :P_FiscalYearPeriod and SalesMarginCube.EngmntProjPlanLineType = 'D' then SalesMarginCube.PlndEffortQty end` | `QUAN(15)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMTPROJWORKANLYSQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMTPROJWORKANLYSQUERY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'CEPWORKANLYSQ'
@Analytics.query: true
@OData.publish: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Engagement Project Work Analysis Query'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel: {modelingPattern: #ANALYTICAL_QUERY, 
               supportedCapabilities: [#ANALYTICAL_QUERY]
}
define view C_EngmtProjWorkAnlysQuery
  with parameters

    @Consumption.hidden : true
    @Environment.systemField : #SYSTEM_LANGUAGE
    P_Language                  : sylangu,

    @AnalyticsDetails.query.variableSequence: 10
    P_EngagementProjectCategory : /cpd/ss_proj_type,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_Date                      : sydatum,

    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:      [ { targetElement : 'CalendarDate'      , type : #PARAMETER ,  value : 'P_Date' } ,
                                               { targetElement : 'FiscalYearVariant' , type : #CONSTANT  ,  value : 'K4'     } ]
                              }
    P_FiscalYearPeriod          : /cpd/pfp_review_year_period

  as select from I_EngmntProjSalesMarginCube as SalesMarginCube

{
  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 1
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  EngagementProjectServiceOrg,
  _EngagementProjectSrvcOrg._Text[1:Language = $parameters.P_Language].EngmtProjectServiceOrgName,

  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  FiscalYear,


  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 3
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  ProfitCenter,
  _ProfitCenter[1:ValidityEndDate   >= $parameters.P_Date and
                  ValidityStartDate <= $parameters.P_Date]._Text[1:Language = $parameters.P_Language].ProfitCenterName,


  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 4
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  Customer,
  _Customer.CustomerName,


  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 5
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  EngagementProject,
  _EngagementProject.EngagementProjectName,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  ProjectVisibility,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  SalesOrderItem,
  _SalesOrderItem.SalesOrderItemText,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  SalesOrderItemCategory,
  _ItemCategory._Text[ 1:Language = $parameters.P_Language ].SalesDocumentItemCategoryName as SalesDocumentItemCategoryName,


  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 6
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  EngagementProjectStage,
  _EngagementProjectStage._Text[1:Language = $parameters.P_Language].EngagementProjectStageText,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 7
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  CompanyCode,
  _CompanyCode.CompanyCodeName,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 8
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  Country,
  _Country._Text[1:Language = $parameters.P_Language].CountryName,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  IsMyProject                                                                              as IsMyProject,

  EngagementProjectResourceType,

  //@Semantics.fiscal.yearPeriod: true
  FiscalYearPeriod,

  //@Semantics.fiscal.period: true
  FiscalPeriod,

  @Semantics.unitOfMeasure: true
  BaseUnit,

  @Semantics.unitOfMeasure: true
  UnitOfMeasure,


  @AnalyticsDetails.query.axis:#COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Planned Work'
  case when SalesMarginCube.EngmntProjPlanLineType = 'D'
    then SalesMarginCube.PlndEffortQty end                                                 as PlndEffortQty,

  @Consumption.hidden: true
  @AnalyticsDetails.query.axis:#COLUMNS
  @AnalyticsDetails.query.decimals: 1
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Planned Work'
  case when SalesMarginCube.EngmntProjPlanLineType = 'S'
    then SalesMarginCube.PlndEffortQty end                                                 as SupplyEffortQty,



  @AnalyticsDetails.query.axis:#COLUMNS
  @AnalyticsDetails.query.decimals: 1
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @EndUserText.label: 'Work Billed'
  SalesMarginCube.BilledEffort                                                             as BilledEffort,


  @AnalyticsDetails.query.axis:#COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Work Performed'
  ActlEffortQty,


  @AnalyticsDetails.query.axis:#COLUMNS
  @DefaultAggregation: #FORMULA
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Unstaffed Work'
  @AnalyticsDetails.query.formula: '($projection.PlndEffortQty - $projection.SupplyEffortQty)'
  1                                                                                        as UnstaffedEffort,


  @AnalyticsDetails.query.axis:#COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  @EndUserText.label: 'Planned Work Upto Current Month'
  case when FiscalYearPeriod <= :P_FiscalYearPeriod and SalesMarginCube.EngmntProjPlanLineType = 'D'
  then
  SalesMarginCube.PlndEffortQty end                                                        as PlndEffortUpToCurMnth

}

where
  SalesMarginCube.EngagementProjectCategory = $parameters.P_EngagementProjectCategory
```
