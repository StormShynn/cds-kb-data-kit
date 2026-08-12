---
name: C_ENGMTPROJMARGANLYSQUERY
description: "This CDS view provides the prerequisites for answering the following business questions. Note that business questions related to revenue and margin are not applicable to internal projects. What is the total planned cost of the project? What is the total planned revenue of the project? What is the total actual cost of the project? What is the total actual revenue of the project? What is the total planned cost of the project up to the current month? What is the total planned revenue of the project up to the current month? What is the total actual cost of the project up to the current month? What is the total actual revenue of the project up to the current month? What is the likely margin (in percentage) when the project is completed?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMTPROJMARGANLYSQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions. Note that business questions related to revenue and margin are not applicable to internal projects. What is the total planned cost of the project? What is the total planned revenue of the project? What is the total actual cost of the project? What is the total actual revenue of the project? What is the total planned cost of the project up to the current month? What is the total planned revenue of the project up to the current month? What is the total actual cost of the project up to the current month? What is the total actual revenue of the project up to the current month? What is the likely margin (in percentage) when the project is completed?"
semantic_vi: "Engagement Project Margin Analysis Query — CDS view tiêu dùng dựa trên I_EngmntProjSalesMarginCube."
keywords:
  - "engagement"
  - "project"
  - "margin"
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
# C_ENGMTPROJMARGANLYSQUERY

**This CDS view provides the prerequisites for answering the following business questions. Note that business questions related to revenue and margin are not applicable to internal projects. What is the total planned cost of the project? What is the total planned revenue of the project? What is the total actual cost of the project? What is the total actual revenue of the project? What is the total planned cost of the project up to the current month? What is the total planned revenue of the project up to the current month? What is the total actual cost of the project up to the current month? What is the total actual revenue of the project up to the current month? What is the likely margin (in percentage) when the project is completed?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMTPROJMARGANLYSQUERY')/$value) |

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
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrderItemText` |  | | `_SalesOrderItem` | `SalesOrderItemText` | `CHAR(40)` | Short Text for Sales Order Item |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `SalesDocumentItemCategoryName` |  | |  | `_ItemCategory._Text[ 1:Language = $parameters.P_Language ].SalesDocumentItemCategoryName` | `CHAR(20)` | Description |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Review Year Period |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `Currency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `ControllingAreaCurrency` |  | |  |  | `CUKY(5)` | Controlling Area Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `PlndCostInCoCodeCrcy` |  | |  | `case when SalesMarginCube.EngmntProjPlanLineType = 'D' then PlndCostInCoCodeCrcy end` | `CURR(17)` |  |
| `PlndRevnInCoCodeCrcy` |  | |  | `case when SalesMarginCube.EngmntProjPlanLineType = 'D' then PlndRevnInCoCodeCrcy end` | `CURR(17)` |  |
| `ActlCostInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `ActlRevnInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` |  |
| `PlndRevenueAmtInCtrlgAreaCrcy` |  | |  | `case when SalesMarginCube.EngmntProjPlanLineType = 'D' then SalesMarginCube.PlndRevenueAmtInCtrlgAreaCrcy end` | `CURR(17)` |  |
| `PlndCostAmtInCtrlgAreaCrcy` |  | |  | `case when SalesMarginCube.EngmntProjPlanLineType = 'D' then SalesMarginCube.PlndCostAmtInCtrlgAreaCrcy end` | `CURR(17)` |  |
| `ActlRevenueAmtInCtrlgAreaCrcy` |  | |  |  | `CURR(23)` |  |
| `BilledRevnAmtInCtrlgAreaCrcy` |  | |  |  | `CURR(23)` |  |
| `PlannedCostUpToCurMonth` |  | |  | `case when FiscalYearPeriod <= :P_FiscalYearPeriod and SalesMarginCube.EngmntProjPlanLineType = 'D' then SalesMarginCube.PlndCostInCoCodeCrcy end` | `CURR(17)` |  |
| `PlannedRevnUpToCurMonth` |  | |  | `case when FiscalYearPeriod <= :P_FiscalYearPeriod and SalesMarginCube.EngmntProjPlanLineType = 'D' then SalesMarginCube.PlndRevnInCoCodeCrcy end` | `CURR(17)` |  |
| `ActualCostUpToCurMonth` |  | |  | `case when FiscalYearPeriod <= :P_FiscalYearPeriod then SalesMarginCube.ActlCostInCoCodeCrcy end` | `CURR(23)` |  |
| `ActualRevnUpToCurMonth` |  | |  | `case when FiscalYearPeriod <= :P_FiscalYearPeriod then SalesMarginCube.ActlRevnInCoCodeCrcy end` | `CURR(23)` |  |
| `BilledRevenueUpToCurMonthInAmt` |  | |  | `case when FiscalYearPeriod <= :P_FiscalYearPeriod then SalesMarginCube.BilledRevenueAmtInCoCodeCrcy end` | `CURR(23)` |  |
| `MarginAmt` |  | |  | `1` | `INT1(3)` |  |
| `MarginInPct` |  | |  | `1` | `INT1(3)` |  |
| `MarginAmtUpToCurMnth` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMTPROJMARGANLYSQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMTPROJMARGANLYSQUERY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'CEPMARGANLYSQ'
@Analytics.query: true
@OData.publish: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Engagement Project Margin Analysis Query'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel: {modelingPattern: #ANALYTICAL_QUERY,
               supportedCapabilities: [#ANALYTICAL_QUERY]
}
define view C_EngmtProjMargAnlysQuery
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



  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
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

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  SalesOrderItem,
  _SalesOrderItem.SalesOrderItemText,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  SalesOrderItemCategory,
  _ItemCategory._Text[ 1:Language = $parameters.P_Language ].SalesDocumentItemCategoryName as SalesDocumentItemCategoryName,


  //  @Semantics.fiscal.yearPeriod: true
  FiscalYearPeriod,


  //  @Semantics.fiscal.period: true
  FiscalPeriod,

  @Semantics.currencyCode:true
  Currency,

  @Semantics.currencyCode: true
  ControllingAreaCurrency,

  @Semantics.currencyCode:true
  CompanyCodeCurrency,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label: 'Planned Cost In Company Code Currency'
  case when SalesMarginCube.EngmntProjPlanLineType = 'D'
  then
  PlndCostInCoCodeCrcy end                                                                 as PlndCostInCoCodeCrcy,


  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label: 'Planned Revenue In Company Code Currency'
  case when SalesMarginCube.EngmntProjPlanLineType = 'D'
  then
  PlndRevnInCoCodeCrcy end                                                                 as PlndRevnInCoCodeCrcy,


  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label: 'Actual Cost In Company Code Currency'
  SalesMarginCube.ActlCostInCoCodeCrcy,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'BilledRevenueAmtInCoCodeCrcy'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label: 'Actual Revenue In Company Code Currency'
  SalesMarginCube.ActlRevnInCoCodeCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label: 'Billed Revenue In Company Code Currency'
  SalesMarginCube.BilledRevenueAmtInCoCodeCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
  @EndUserText.label: 'Plan Revenue In Controlling Area Currency'
  case when SalesMarginCube.EngmntProjPlanLineType = 'D'
  then SalesMarginCube.PlndRevenueAmtInCtrlgAreaCrcy
  end                                                                                      as PlndRevenueAmtInCtrlgAreaCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
  @EndUserText.label: 'Plan Cost In Controlling Area Currency'
  case when SalesMarginCube.EngmntProjPlanLineType = 'D'
  then SalesMarginCube.PlndCostAmtInCtrlgAreaCrcy
  end                                                                                      as PlndCostAmtInCtrlgAreaCrcy,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'BilledRevnAmtInCtrlgAreaCrcy'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
  @EndUserText.label: 'Actual Revenue In Controlling Area Currency'
  SalesMarginCube.ActlRevenueAmtInCtrlgAreaCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
  @EndUserText.label: 'Billed Revenue In Controlling Area Currency'
  SalesMarginCube.BilledRevnAmtInCtrlgAreaCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label: 'Planned Cost Upto Current Month'
  case when FiscalYearPeriod <= :P_FiscalYearPeriod and SalesMarginCube.EngmntProjPlanLineType = 'D'
  then
  SalesMarginCube.PlndCostInCoCodeCrcy end                                                 as PlannedCostUpToCurMonth,


  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label: 'Planned Revenue Upto Current Month'
  case when FiscalYearPeriod <= :P_FiscalYearPeriod and SalesMarginCube.EngmntProjPlanLineType = 'D'
  then
  SalesMarginCube.PlndRevnInCoCodeCrcy end                                                 as PlannedRevnUpToCurMonth,

  @Consumption.hidden: true
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label: 'Actual Cost Upto Current Month'
  case when FiscalYearPeriod <= :P_FiscalYearPeriod
  then
  SalesMarginCube.ActlCostInCoCodeCrcy end                                                 as ActualCostUpToCurMonth,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'BilledRevenueUpToCurMonthInAmt'
  @Consumption.hidden: true
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label: 'Actual Revenue Upto Current Month'
  case when FiscalYearPeriod <= :P_FiscalYearPeriod
  then
  SalesMarginCube.ActlRevnInCoCodeCrcy end                                                 as ActualRevnUpToCurMonth,

  @Consumption.hidden: true
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @EndUserText.label: 'Billed Revenue Upto Current Month'
  case when FiscalYearPeriod <= :P_FiscalYearPeriod
  then
  SalesMarginCube.BilledRevenueAmtInCoCodeCrcy end                                         as BilledRevenueUpToCurMonthInAmt,


  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0(($projection.BilledRevenueAmtInCoCodeCrcy - $projection.ActlCostInCoCodeCrcy)/$projection.BilledRevenueAmtInCoCodeCrcy)'
  @EndUserText.label: 'Margin Amount'
  1                                                                                        as MarginAmt,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation : #FORMULA
  @EndUserText.label: 'Actual Margin (%)'
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula : '$projection.MarginAmt * 100'
  1                                                                                        as MarginInPct,

  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails.query.formula: 'NDIV0(($projection.BilledRevenueUpToCurMonthInAmt - $projection.ActualCostUptoCurMonth)/$projection.BilledRevenueUpToCurMonthInAmt)'
  @EndUserText.label: 'Margin Amount Upto Current Month'
  1                                                                                        as MarginAmtUpToCurMnth


}

where
  SalesMarginCube.EngagementProjectCategory = $parameters.P_EngagementProjectCategory
```
