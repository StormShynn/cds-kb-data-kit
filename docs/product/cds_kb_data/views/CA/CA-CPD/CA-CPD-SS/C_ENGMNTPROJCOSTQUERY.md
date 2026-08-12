---
name: C_ENGMNTPROJCOSTQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the financial status of projects that I'm responsible for? What is the financial status of projects in a given cost center or company code? What is the profitability in projects that I manage? What is the proportion of billable and non-billable project costs in a given company code? Are my project costs on track, compared to the baseline plan?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJCOSTQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the financial status of projects that I'm responsible for? What is the financial status of projects in a given cost center or company code? What is the profitability in projects that I manage? What is the proportion of billable and non-billable project costs in a given company code? Are my project costs on track, compared to the baseline plan?"
semantic_vi: "Engagement Project Cost and Revenue Query — CDS view tiêu dùng dựa trên I_EngmntProjActlPlanCube."
keywords:
  - "engagement"
  - "project"
  - "cost"
  - "and"
  - "revenue"
  - "query"
  - "ledger"
  - "sales"
  - "order"
  - "visibility"
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - consumption-view
  - lob:cross_application components
  - plan
  - project
  - bo:project
---
# C_ENGMNTPROJCOSTQUERY

**This CDS view provides the prerequisites for answering the following business questions: What is the financial status of projects that I'm responsible for? What is the financial status of projects in a given cost center or company code? What is the profitability in projects that I manage? What is the proportion of billable and non-billable project costs in a given company code? Are my project costs on track, compared to the baseline plan?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJCOSTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(20)` | Organization Unit Key |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `BillingControlCategory` |  | |  |  | `CHAR(8)` |  |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `ActlCostUpToInptPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `ActlCostUpToCurPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `ActlCostInProjCrcy` |  | |  |  | `CURR(23)` |  |
| `ActlRevnUpToInptPerdAmtInPC` |  | |  |  | `CURR(28)` |  |
| `BilledRevnUpToInptPerdAmtInPC` |  | |  |  | `CURR(28)` |  |
| `ActlRevnUpToCurPerdAmtInPC` |  | |  |  | `CURR(28)` |  |
| `BilledRevnUpToCurPerdAmtInPC` |  | |  |  | `CURR(28)` |  |
| `ActlRevnInProjCrcy` |  | |  |  | `CURR(28)` |  |
| `BilledRevenueAmtInProjCrcy` |  | |  |  | `CURR(28)` |  |
| `PlnCostUpToCurPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `PlnCostUpToPrevPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `PlndCostAmtInProjCrcy` |  | |  |  | `CURR(23)` |  |
| `BslnCostUpToCurPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `BslnCostUpToPrevPerdAmtInPC` |  | |  |  | `CURR(23)` |  |
| `BaselinePlndCostAmt` |  | |  |  | `CURR(23)` |  |
| `RevenueAsSoldAmount` |  | |  |  | `CURR(23)` |  |
| `PlnEffortUpToPrevPerdQty` |  | |  |  | `QUAN(15)` |  |
| `PlndEffortUpToCurPerd` |  | |  |  | `QUAN(15)` |  |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` |  |
| `BslnEffortUpToPrevPerdQty` |  | |  |  | `QUAN(15)` |  |
| `BslnEffortUpToCurPerdQty` |  | |  |  | `QUAN(15)` |  |
| `BaselinePlndEffortQty` |  | |  |  | `QUAN(15)` |  |
| `ActlEffortQty` |  | |  |  | `QUAN(15)` |  |
| `ActlEffortUpToInptPerdQty` |  | |  |  | `QUAN(15)` |  |
| `ActlEffortUpToPrevPerdQty` |  | |  |  | `QUAN(15)` |  |
| `ActlEffortQtyUpToCurPerd` |  | |  |  | `QUAN(15)` |  |
| `DiffBtwnPlnAndActlEffortQty` |  | |  |  | `QUAN(16)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJCOSTQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJCOSTQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CENGPROJCSTQRY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@Analytics: {
  query: true,
  internalName: #LOCAL
}
@Analytics.settings.zeroValues: {handling: #HIDE, hideOnAxis: #ROWS}

@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Engagement Project Cost and Revenue Query'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType.serviceQuality: #D,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #MIXED,
  modelingPattern: #ANALYTICAL_QUERY,
  supportedCapabilities: [#ANALYTICAL_QUERY]
}
@VDM: {
  viewType: #CONSUMPTION
  //lifecycle.contract.type: #NONE
}
define view C_EngmntProjCostQuery
  with parameters

    @Consumption.hidden: false
    @EndUserText.label: 'User Input Year Period'
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:      [ { targetElement : 'CalendarDate'      , type : #SYSTEM_FIELD,  value : '#SYSTEM_DATE' } ,
                                               { targetElement : 'FiscalYearVariant' , type : #CONSTANT  ,  value : 'K4'     } ]
                              }

    P_FiscalYearPeriod : /cpd/pfp_review_year_period


  as select from I_EngmntProjActlPlanCube(P_FiscalYearPeriod: :P_FiscalYearPeriod)
{
  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  @EndUserText.label: 'Engagement Project ID'
  @AnalyticsDetails.query.display: #TEXT_KEY
  EngagementProject,

  @Consumption: {
        filter.hidden: true,
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

  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Sales Order'
  SalesOrder,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  ProjectVisibility,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'My Projects'
  IsMyProject,

  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Engagement Project Service Org'
  @AnalyticsDetails.query.display: #TEXT_KEY
  EngagementProjectServiceOrg,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Engagement Project Start Date'
  ProjectStartDate,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Engagement Project End Date'
  ProjectEndDate,


  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Company Code'
  @AnalyticsDetails.query.display: #TEXT_KEY
  CompanyCode,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Controlling Area'
  @AnalyticsDetails.query.display: #TEXT_KEY
  ControllingArea,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Profit Center'
  @AnalyticsDetails.query.display: #TEXT_KEY
  ProfitCenter,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Cost Center'
  @AnalyticsDetails.query.display: #TEXT_KEY
  CostCenter,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Customer ID'
  @AnalyticsDetails.query.display: #TEXT_KEY
  Customer,


  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Engagement Project Stage'
  @AnalyticsDetails.query.display: #TEXT_KEY
  EngagementProjectStage,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Billing Category'
  @AnalyticsDetails.query.display: #TEXT
  BillingControlCategory,

  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Engagement Project Resource Type'
  EngagementProjectResourceType,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Billing Item Type'
  @AnalyticsDetails.query.display: #TEXT_KEY
  SalesOrderItemCategory,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Actl Cost Upto Input Perd in Proj. Crcy'
  ActlCostUpToInptPerdAmtInPC,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Actl Cost Upto Curr. Perd in Proj. Crcy'
  ActlCostUpToCurPerdAmtInPC,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Total Actual Cost'
  ActlCostInProjCrcy,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'BilledRevnUpToInptPerdAmtInPC'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Actl Rev. Upto Input Perd in Proj. Crcy'
  ActlRevnUpToInptPerdAmtInPC,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Billed Rev. Upto Input Perd in Proj. Crcy'
  BilledRevnUpToInptPerdAmtInPC,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'BilledRevnUpToInptPerdAmtInPC'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Actl Rev. Upto Curr. Perd in Proj. Crcy'
  ActlRevnUpToCurPerdAmtInPC,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Billed Rev. Upto Curr. Perd in Proj. Crcy'
  BilledRevnUpToCurPerdAmtInPC,

  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'BilledRevenueAmtInProjCrcy'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Total Actual Revenue'
  @AnalyticsDetails.query.decimals: 2
  ActlRevnInProjCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Total Billed Revenue'
  @AnalyticsDetails.query.decimals: 2
  BilledRevenueAmtInProjCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Plan Cost Upto Curr. Perd in Proj. Crcy'
  PlnCostUpToCurPerdAmtInPC,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Plan Cost Upto Prev. Perd in Proj. Crcy'
  PlnCostUpToPrevPerdAmtInPC,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @EndUserText.label: 'Total Plan Cost in Proj. Crcy'
  @AnalyticsDetails.query.decimals: 2
  PlndCostAmtInProjCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Baseline Cost Upto Curr. Perd Proj. Crcy'
  BslnCostUpToCurPerdAmtInPC,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Baseline Cost Upto Prev. Perd Proj. Crcy'
  BslnCostUpToPrevPerdAmtInPC,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'Total Baseline Cost in Proj. Crcy'
  BaselinePlndCostAmt,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 2
  @EndUserText.label: 'As-Sold Revenue in Proj. Crcy'
  RevenueAsSoldAmount,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Plan Effort Upto Prev. Perd'
  PlnEffortUpToPrevPerdQty,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Plan Effort Upto Curr. Perd'
  PlndEffortUpToCurPerd,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Total Plan Effort'
  PlndEffortQty,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Baseline Effort Upto Prev. Perd'
  BslnEffortUpToPrevPerdQty,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Baseline Effort Upto Curr. Perd'
  BslnEffortUpToCurPerdQty,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Total Baseline Effort'
  BaselinePlndEffortQty,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Total Actual Effort'
  ActlEffortQty,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Actual Effort Upto Input Perd'
  ActlEffortUpToInptPerdQty,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Actual Effort Upto Prev. Perd'
  ActlEffortUpToPrevPerdQty,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Actual Effort Upto Curr. Perd'
  ActlEffortQtyUpToCurPerd,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @AnalyticsDetails.query.decimals: 1
  @EndUserText.label: 'Remaining Effort'
  DiffBtwnPlnAndActlEffortQty

}
```
