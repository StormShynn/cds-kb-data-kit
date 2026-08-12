---
name: C_ENGMNTPROJBILLGANDRBLSQRY
description: "This CDS view provides the prerequisites for answering the following business questions: Which are the billing plans that have not been processed in my projects? What are the upcoming billing plans in projects that I manage? What is the total amount that can be invoiced? What is the total receivable amount from customers? By how many days are receivable amounts overdue? What is the total amount written off from invoices?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJBILLGANDRBLSQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which are the billing plans that have not been processed in my projects? What are the upcoming billing plans in projects that I manage? What is the total amount that can be invoiced? What is the total receivable amount from customers? By how many days are receivable amounts overdue? What is the total amount written off from invoices?"
semantic_vi: "Engagement Project Billing And Receivables Query — CDS view tiêu dùng dựa trên I_EngmntProjBillgAndRblsCube."
keywords:
  - "engagement"
  - "project"
  - "billing"
  - "and"
  - "receivables"
  - "query"
  - "sales"
  - "order"
  - "visibility"
  - "plan"
  - "date"
tags:
  - CA
  - billing
  - bo:billingdocument
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - consumption-view
  - customer
  - invoice
  - lob:cross_application components
  - plan
  - project
---
# C_ENGMNTPROJBILLGANDRBLSQRY

**This CDS view provides the prerequisites for answering the following business questions: Which are the billing plans that have not been processed in my projects? What are the upcoming billing plans in projects that I manage? What is the total amount that can be invoiced? What is the total receivable amount from customers? By how many days are receivable amounts overdue? What is the total amount written off from invoices?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJBILLGANDRBLSQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `BillingPlanBillingDate` |  | |  |  | `DATS(8)` | Billing Date |
| `BillingPlan` |  | |  |  | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(20)` | Organization Unit Key |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` |  |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `ProjectCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BilledAmountInProjectCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BillingPlanAmount` |  | |  |  | `CURR(15)` | Value to be billed/calc. on date in billing/invoice plan |
| `SalesOrderNetAmount` |  | |  |  | `CURR(15)` | Net Value of Sales Order Item in Transaction Currency |
| `DebitMemoRequestNetAmount` |  | |  |  | `CURR(15)` | Net Value of Sales Order Item in Transaction Currency |
| `RemainingContractBillingAmt` |  | |  | `0` | `INT1(3)` |  |
| `BillingReqTimeIntervalInDays` |  | |  |  | `CHAR(35)` |  |
| `BillingReqTimeIntervalValue` |  | |  |  | `CHAR(35)` |  |
| `OpenBillingRequestAmount` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BillingRequestOverdueAmount` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `WriteOffAmount` |  | |  |  | `CURR(15)` | Sum never |
| `TotalReceivablesAmount` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `ReceivablesTimeIntervalInDays` |  | |  |  | `CHAR(35)` |  |
| `ReceivablesTimeIntervalValue` |  | |  |  | `CHAR(35)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJBILLGANDRBLSQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ENGMNTPROJBILLGANDRBLSQRY')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'CEPBILLRBLSQ',
  preserveKey: true,
  compiler.compareFilter: true
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@Analytics: {
  query: true,
  internalName: #LOCAL,
  settings.zeroValues: {
    handling: #HIDE,
    hideOnAxis: #ROWS
  }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType.serviceQuality: #D,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #MIXED,
  modelingPattern: #ANALYTICAL_QUERY,
  supportedCapabilities: [#ANALYTICAL_QUERY]
}
@VDM: {
//  private: false,
//  lifecycle.contract.type: #NONE,
  viewType: #CONSUMPTION
}
@EndUserText.label: 'Engagement Project Billing And Receivables Query'
define view C_EngmntProjBillgAndRblsQry
  with parameters
    @Consumption.defaultValue: '10'
    @EndUserText.label: 'Number of Days'
    P_NumberOfDays : int4
  as select from I_EngmntProjBillgAndRblsCube( P_NumberOfDays: $parameters.P_NumberOfDays )
{

  @AnalyticsDetails.query: {
    axis: #ROWS,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  EngagementProject,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  SalesOrder,

  @Analytics.internalName: #LOCAL
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @EndUserText.label:'Confidential Project'
  ProjectVisibility,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: {
    multipleSelections: false,
    selectionType: #RANGE
  }
  BillingPlanBillingDate,

  @AnalyticsDetails.query: {
    axis: #FREE,
    hidden: true
  }
  BillingPlan,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  SalesOrderItemCategory,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  Product,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: {
    multipleSelections: false,
    selectionType: #RANGE
  }
  ProjectStartDate,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: {
   multipleSelections: false,
   selectionType: #RANGE
  }
  ProjectEndDate,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  EngagementProjectServiceOrg,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  ControllingArea,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  CompanyCode,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  ProfitCenter,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  CostCenter,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  Customer,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  @Consumption.filter:{
    multipleSelections: true,
    selectionType: #INTERVAL
  }
  EngagementProjectStage,

  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Project Manager'
  ProjectManagerName,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: {
    selectionType: #SINGLE,
    multipleSelections: false,
    mandatory: false
  }
  IsMyProject,

  @AnalyticsDetails.query: {
    axis: #FREE,
    display: #TEXT_KEY
  }
  ProjectCurrency,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 2
  }
  BilledAmountInProjectCurrency,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 2
  }
  BillingPlanAmount,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 2
  }
  SalesOrderNetAmount,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 2
  }
  DebitMemoRequestNetAmount,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 2,
    formula: 'SalesOrderNetAmount - DebitMemoRequestNetAmount'
  }
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Remaining Amount to be Billed'
  @Semantics.amount.currencyCode: 'ProjectCurrency'
  0 as RemainingContractBillingAmt,

  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'BillingReqTimeIntervalValue'
  BillingReqTimeIntervalInDays,
  BillingReqTimeIntervalValue,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 2
  }
  OpenBillingRequestAmount,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 2
  }
  BillingRequestOverdueAmount,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 2
  }
  WriteOffAmount,

  @AnalyticsDetails.query: {
    axis: #COLUMNS,
    decimals: 2
  }
  TotalReceivablesAmount,

  @AnalyticsDetails.query.axis: #FREE
  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'ReceivablesTimeIntervalValue'
  ReceivablesTimeIntervalInDays,
  ReceivablesTimeIntervalValue

}
```
