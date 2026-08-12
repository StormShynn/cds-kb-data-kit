---
name: C_ENGMNTPROJUNBILLEDREVENUEQRY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the unbilled amount in projects that I manage? What is the unbilled amount per billing item type (fixed price, time and expense, and so on)?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJUNBILLEDREVENUEQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the unbilled amount in projects that I manage? What is the unbilled amount per billing item type (fixed price, time and expense, and so on)?"
semantic_vi: "Engagement Project Unbilled Revenue Query — CDS view tiêu dùng dựa trên I_EngmntProjUnbilldRevnCube."
keywords:
  - "engagement"
  - "project"
  - "unbilled"
  - "revenue"
  - "query"
  - "ledger"
  - "manager"
  - "name"
  - "visibility"
  - "sales"
  - "order"
tags:
  - CA
  - billing
  - bo:billingdocument
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - consumption-view
  - lob:cross_application components
  - project
  - bo:project
---
# C_ENGMNTPROJUNBILLEDREVENUEQRY

**This CDS view provides the prerequisites for answering the following business questions: What is the unbilled amount in projects that I manage? What is the unbilled amount per billing item type (fixed price, time and expense, and so on)?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJUNBILLEDREVENUEQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` |  |
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(20)` | Organization Unit Key |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `Material` |  | |  |  | `CHAR(40)` |  |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `FiscalYearPeriod` |  | |  |  | `CHAR(7)` |  |
| `UnbilldRevnAmountInProjCrcy` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJUNBILLEDREVENUEQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJUNBILLEDREVENUEQRY')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'CENGPRJUNBREVQY',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics:{
  query: true,
  internalName: #LOCAL
}
@VDM:{
  viewType: #CONSUMPTION
  //lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl:{
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #REQUIRED
}
@ObjectModel:{
  usageType.sizeCategory: #XL,
  usageType.dataClass: #MIXED,
  usageType.serviceQuality:#D,
  modelingPattern: #ANALYTICAL_QUERY, 
  supportedCapabilities: [#ANALYTICAL_QUERY]
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Engagement Project Unbilled Revenue Query'
define view C_EngmntProjUnbilledRevenueQry
  as select from I_EngmntProjUnbilldRevnCube
{
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
  @Consumption.hidden: true
  Ledger,

  @AnalyticsDetails.query.axis: #FREE
  ProjectManagerName,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #TEXT_KEY
  EngagementProject,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  ProjectVisibility,

  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  SalesOrder,

  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  SalesOrderItem,

  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  EngagementProjectServiceOrg,

  @Consumption.filter:  { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  ProjectStartDate,

  @Consumption.filter:  { selectionType: #INTERVAL, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  ProjectEndDate,

  @Consumption.filter:  { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  ControllingArea,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  CompanyCode,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #TEXT_KEY
  @AnalyticsDetails.query.axis: #FREE
  ProfitCenter,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.display: #TEXT_KEY
  @AnalyticsDetails.query.axis: #FREE
  CostCenter,

  @Consumption.filter: { selectionType: #INTERVAL, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  Customer,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  EngagementProjectStage,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  SalesOrderItemCategory,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT_KEY
  Material,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  IsMyProject,

  @AnalyticsDetails.query.axis: #FREE
  FiscalYearPeriod,

  @EndUserText.label: 'Unbilled Revenue'
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails: {
      query.formula: 'UnbilldRevnAmountInProjCrcy',
      exceptionAggregationSteps: [ {
          exceptionAggregationBehavior: #LAST,
          exceptionAggregationElements: [ 'FiscalYearPeriod' ]
      } ]
  }
  1 as UnbilldRevnAmountInProjCrcy
}
```
