---
name: I_ENGMNTPROJBILLGANDRBLSCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: Which are the billing plans that have not been processed? What are the upcoming billing plans? What is the total amount that can be invoiced? What is the total receivable amount from customers? By how many days are receivable amounts overdue? What is the total amount written off from invoices?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJBILLGANDRBLSCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which are the billing plans that have not been processed? What are the upcoming billing plans? What is the total amount that can be invoiced? What is the total receivable amount from customers? By how many days are receivable amounts overdue? What is the total amount written off from invoices?"
semantic_vi: "Billg and Rbls of Engmnt Project - Cube — CDS view tổng hợp dựa trên P_EngmntProjBillgAndRblsAnlys."
keywords:
  - "billg"
  - "and"
  - "rbls"
  - "engmnt"
  - "project"
  - "cube"
  - "engagement"
  - "sales"
  - "order"
  - "item"
  - "billing"
  - "plan"
  - "date"
tags:
  - CA
  - billing
  - bo:billingdocument
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - invoice
  - lob:cross_application components
  - plan
  - bo:project
  - project
---
# I_ENGMNTPROJBILLGANDRBLSCUBE

**This CDS view provides the prerequisites for answering the following business questions: Which are the billing plans that have not been processed? What are the upcoming billing plans? What is the total amount that can be invoiced? What is the total receivable amount from customers? By how many days are receivable amounts overdue? What is the total amount written off from invoices?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJBILLGANDRBLSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `BillingPlanBillingDate` |  | |  |  | `DATS(8)` | Billing Date |
| `BillingPlan` |  | | `_SalesOrderItem` | `BillingPlan` | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `ProjectStartDate` |  | | `_EngagementProject` | `ProjectStartDate` | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | | `_EngagementProject` | `ProjectEndDate` | `DATS(8)` | Commercial Project: End Date |
| `EngagementProjectServiceOrg` |  | | `_EngagementProject` | `EngagementProjectServiceOrg` | `CHAR(5)` | Service Organization |
| `ControllingArea` |  | | `_EngagementProject` | `ControllingArea` | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` |  | | `_EngagementProject` | `CompanyCode` | `CHAR(4)` | Company code for the project |
| `ProfitCenter` |  | | `_EngagementProject` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` |  | | `_EngagementProject` | `CostCenter` | `CHAR(20)` | Organization Unit Key |
| `Customer` |  | | `_EngagementProject` | `Customer` | `CHAR(10)` | Customer Number |
| `EngagementProjectStage` |  | | `_EngagementProject` | `EngagementProjectStage` | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectType` |  | | `_EngagementProject` | `EngagementProjectType` | `CHAR(4)` | Engagement Project Type |
| `ProjectProfileCode` |  | | `_EngagementProject` | `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `EngagementProjectCategory` |  | | `_EngagementProject` | `EngagementProjectCategory` | `CHAR(1)` | Project Type |
| `ProjectVisibility` |  | | `_EngagementProject` | `ProjectVisibility` | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectManager` |  | |  |  | `CHAR(12)` |  |
| `ProjectManagerExternalID` |  | |  |  | `CHAR(60)` |  |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` |  |
| `ProjectManagerWorkAgreement` |  | | `_EngagementProject` | `ProjectManagerWorkAgreement` | `NUMC(8)` |  |
| `SalesOrderItemCategory` |  | | `_SalesOrderItem` | `SalesOrderItemCategory` | `CHAR(4)` | Sales Document Item Category |
| `Product` |  | | `_SalesOrderItem` | `Product` | `CHAR(40)` | Product |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `ProjectCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `BilledAmountInProjectCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BillingPlanAmount` |  | |  |  | `CURR(15)` | Value to be billed/calc. on date in billing/invoice plan |
| `SalesOrderNetAmount` |  | |  |  | `CURR(15)` | Net Value of Sales Order Item in Transaction Currency |
| `DebitMemoRequestNetAmount` |  | |  |  | `CURR(15)` | Net Value of Sales Order Item in Transaction Currency |
| `BillingReqTimeIntervalInDays` |  | |  | `case when BillingReqTimeIntervalInDays >= 0 and BillingReqTimeIntervalInDays <= TISize1X then TimeInterval1 when BillingReqTimeIntervalInDays > TISize1X and BillingReqTimeIntervalInDays <= TISize2X then TimeInterval2 when BillingReqTimeIntervalInDays > TISize2X and BillingReqTimeIntervalInDays <= TISize3X then TimeInterval3 when BillingReqTimeIntervalInDays > TISize3X and BillingReqTimeIntervalInDays <= TISize4X then TimeInterval4 else TimeInterval5 end` | `CHAR(35)` |  |
| `BillingReqTimeIntervalValue` |  | |  | `case when BillingReqTimeIntervalInDays >= 0 and BillingReqTimeIntervalInDays <= TISize1X then TimeInterval1 when BillingReqTimeIntervalInDays > TISize1X and BillingReqTimeIntervalInDays <= TISize2X then TimeInterval2 when BillingReqTimeIntervalInDays > TISize2X and BillingReqTimeIntervalInDays <= TISize3X then TimeInterval3 when BillingReqTimeIntervalInDays > TISize3X and BillingReqTimeIntervalInDays <= TISize4X then TimeInterval4 else TimeInterval5 end` | `CHAR(35)` |  |
| `OpenBillingRequestAmount` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BillingRequestOverdueAmount` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `WriteOffAmount` |  | |  |  | `CURR(15)` | Sum never |
| `TotalReceivablesAmount` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `ReceivablesTimeIntervalInDays` |  | |  | `case when ReceivablesTimeIntervalInDays >= 0 and ReceivablesTimeIntervalInDays <= TISize1X then TimeInterval1 when ReceivablesTimeIntervalInDays > TISize1X and ReceivablesTimeIntervalInDays <= TISize2X then TimeInterval2 when ReceivablesTimeIntervalInDays > TISize2X and ReceivablesTimeIntervalInDays <= TISize3X then TimeInterval3 when ReceivablesTimeIntervalInDays > TISize3X and ReceivablesTimeIntervalInDays <= TISize4X then TimeInterval4 else TimeInterval5 end` | `CHAR(35)` |  |
| `ReceivablesTimeIntervalValue` |  | |  | `case when ReceivablesTimeIntervalInDays >= 0 and ReceivablesTimeIntervalInDays <= TISize1X then TimeInterval1 when ReceivablesTimeIntervalInDays > TISize1X and ReceivablesTimeIntervalInDays <= TISize2X then TimeInterval2 when ReceivablesTimeIntervalInDays > TISize2X and ReceivablesTimeIntervalInDays <= TISize3X then TimeInterval3 when ReceivablesTimeIntervalInDays > TISize3X and ReceivablesTimeIntervalInDays <= TISize4X then TimeInterval4 else TimeInterval5 end` | `CHAR(35)` |  |
| `_EngagementProject` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProject` | `I_EngagementProject` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_ItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_Extension` | `E_CustomerProject` | [1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJBILLGANDRBLSCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJBILLGANDRBLSCUBE')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IEPBILLRBLSCUBE',
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
@EndUserText.label: 'Billg and Rbls of Engmnt Project - Cube'
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
//  private: false,
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #COMPOSITE
}
define view I_EngmntProjBillgAndRblsCube with parameters
      @Consumption.defaultValue: '10'
      @EndUserText.label: 'Number of Days'
      P_NumberOfDays : int4
as select from P_EngmntProjBillgAndRblsAnlys( P_NumberDays: $parameters.P_NumberOfDays )
      // LIST of C1-released ASSOCIATIONS
      association[0..1] to I_EngagementProject as _EngagementProject on
        _EngagementProject.EngagementProject = $projection.EngagementProject
      association[1] to I_SalesOrder as _SalesOrder on
        _SalesOrder.SalesOrder = $projection.SalesOrder
      association[0..1] to I_SalesOrderItem as _SalesOrderItem on
        _SalesOrderItem.SalesOrder = $projection.SalesOrder and
        _SalesOrderItem.SalesOrderItem = $projection.SalesOrderItem
      association[0..1] to I_SalesDocumentItemCategory as _ItemCategory on
        _ItemCategory.SalesDocumentItemCategory = $projection.salesorderitemcategory
      association[0..1] to I_Product as _Product on
        _Product.Product = $projection.Product
      association[0..1] to I_Currency as _Currency on
        _Currency.Currency = $projection.ProjectCurrency
      association[1] to E_CustomerProject as _Extension on
        _Extension.CustomerProject = $projection.EngagementProject 
      association [0..1] to I_PersonWorkAgreement_1 as _PersonWorkAgreement_1 on
      _PersonWorkAgreement_1.PersonWorkAgreement = $projection.projectmanagerworkagreement
      
{

@EndUserText.label: 'Engagement Project'
@ObjectModel.foreignKey.association: '_EngagementProject'
EngagementProject,

@ObjectModel.foreignKey.association: '_SalesOrder'
SalesOrder,

@Consumption.hidden: true
@EndUserText.label: 'Sales Order Item'
@ObjectModel.foreignKey.association: '_SalesOrderItem'
SalesOrderItem,

//@EndUserText.label: 'Billing Plan Date'
BillingPlanBillingDate,

@EndUserText.label: 'Billing Plan'
_SalesOrderItem.BillingPlan,

@Semantics.businessDate.from: true
_EngagementProject.ProjectStartDate,

@Semantics.businessDate.to: true
_EngagementProject.ProjectEndDate,

@ObjectModel.foreignKey.association: '_EngagementProjectServiceOrg'
_EngagementProject.EngagementProjectServiceOrg,

@ObjectModel.foreignKey.association: '_ControllingArea'
_EngagementProject.ControllingArea,

@ObjectModel.foreignKey.association: '_CompanyCode'
_EngagementProject.CompanyCode,

@ObjectModel.foreignKey.association: '_ProfitCenter'
_EngagementProject.ProfitCenter,

@EndUserText.label: 'Cost Center'
@ObjectModel.foreignKey.association: '_CostCenter'
_EngagementProject.CostCenter,

@ObjectModel.foreignKey.association: '_Customer'
_EngagementProject.Customer,

@EndUserText.label: 'Project Stage'
@ObjectModel.foreignKey.association: '_EngagementProjectStage'
_EngagementProject.EngagementProjectStage,

@Consumption.hidden: true
_EngagementProject.EngagementProjectType,

@Consumption.hidden: true
_EngagementProject.ProjectProfileCode,
  
@Consumption.hidden: true
_EngagementProject.EngagementProjectCategory,

@Consumption.hidden: true
_EngagementProject.ProjectVisibility,

@Consumption.hidden: true
ProjectManager,

@EndUserText.label: 'Project Manager'
@ObjectModel.text.element: 'ProjectManagerName'
ProjectManagerExternalID,

@EndUserText.label: 'Project Manager Name'
@Semantics.text: true
ProjectManagerName,

@Consumption.hidden: true  
_EngagementProject.ProjectManagerWorkAgreement,
  
@EndUserText.label: 'Billing Item Type'
@ObjectModel.foreignKey.association: '_ItemCategory'
_SalesOrderItem.SalesOrderItemCategory,

@EndUserText.label: 'Billing Material'
@ObjectModel.foreignKey.association: '_Product'

_SalesOrderItem.Product as Product,

@EndUserText.label: 'My Projects'
@Semantics.booleanIndicator:true 
IsMyProject,

@EndUserText.label: 'Project Currency'
@ObjectModel.foreignKey.association: '_Currency'
@Semantics.currencyCode: true
ProjectCurrency,

@DefaultAggregation: #SUM
@EndUserText.label: 'Invoiced Amount'
@Semantics.amount.currencyCode: 'ProjectCurrency'
BilledAmountInProjectCurrency,

@DefaultAggregation: #SUM
@EndUserText.label: 'Billing Plan Amount'
@Semantics.amount.currencyCode: 'ProjectCurrency'
BillingPlanAmount,

@DefaultAggregation: #SUM
@EndUserText.label: 'Sales Order Amount'
@Semantics.amount.currencyCode: 'ProjectCurrency'
SalesOrderNetAmount,

@DefaultAggregation: #SUM
@EndUserText.label: 'Total Billing Request Amount'
@Semantics.amount.currencyCode: 'ProjectCurrency'
DebitMemoRequestNetAmount,

@EndUserText.label: 'Billing Request Age'
@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'BillingReqTimeIntervalValue'
case when BillingReqTimeIntervalInDays >= 0 and BillingReqTimeIntervalInDays <= TISize1X then TimeInterval1
when BillingReqTimeIntervalInDays > TISize1X and BillingReqTimeIntervalInDays <= TISize2X then TimeInterval2
when BillingReqTimeIntervalInDays > TISize2X and BillingReqTimeIntervalInDays <= TISize3X then TimeInterval3
when BillingReqTimeIntervalInDays > TISize3X and BillingReqTimeIntervalInDays <= TISize4X then TimeInterval4
else TimeInterval5 end as BillingReqTimeIntervalInDays,

case when BillingReqTimeIntervalInDays >= 0 and BillingReqTimeIntervalInDays <= TISize1X then TimeInterval1
when BillingReqTimeIntervalInDays > TISize1X and BillingReqTimeIntervalInDays <= TISize2X then TimeInterval2
when BillingReqTimeIntervalInDays > TISize2X and BillingReqTimeIntervalInDays <= TISize3X then TimeInterval3
when BillingReqTimeIntervalInDays > TISize3X and BillingReqTimeIntervalInDays <= TISize4X then TimeInterval4
else TimeInterval5 end as BillingReqTimeIntervalValue,

@DefaultAggregation: #SUM
@EndUserText.label: 'Open Billing Request Amount'
@Semantics.amount.currencyCode: 'ProjectCurrency'
OpenBillingRequestAmount,

@DefaultAggregation: #SUM
@EndUserText.label: 'Billing Request Amount Overdue'
@Semantics.amount.currencyCode: 'ProjectCurrency'
BillingRequestOverdueAmount,

@DefaultAggregation: #SUM
@EndUserText.label: 'Write-Off Amount'
@Semantics.amount.currencyCode: 'ProjectCurrency'
WriteOffAmount,

@DefaultAggregation: #SUM
@EndUserText.label: 'Receivables'
@Semantics.amount.currencyCode: 'ProjectCurrency'
TotalReceivablesAmount,

@EndUserText.label: 'Receivables Age'
@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'ReceivablesTimeIntervalValue'
case when ReceivablesTimeIntervalInDays >= 0 and ReceivablesTimeIntervalInDays <= TISize1X then TimeInterval1
when ReceivablesTimeIntervalInDays > TISize1X and ReceivablesTimeIntervalInDays <= TISize2X then TimeInterval2
when ReceivablesTimeIntervalInDays > TISize2X and ReceivablesTimeIntervalInDays <= TISize3X then TimeInterval3
when ReceivablesTimeIntervalInDays > TISize3X and ReceivablesTimeIntervalInDays <= TISize4X then TimeInterval4
else TimeInterval5 end as ReceivablesTimeIntervalInDays,

case when ReceivablesTimeIntervalInDays >= 0 and ReceivablesTimeIntervalInDays <= TISize1X then TimeInterval1
when ReceivablesTimeIntervalInDays > TISize1X and ReceivablesTimeIntervalInDays <= TISize2X then TimeInterval2
when ReceivablesTimeIntervalInDays > TISize2X and ReceivablesTimeIntervalInDays <= TISize3X then TimeInterval3
when ReceivablesTimeIntervalInDays > TISize3X and ReceivablesTimeIntervalInDays <= TISize4X then TimeInterval4
else TimeInterval5 end as ReceivablesTimeIntervalValue,

// LIST of C1-released ASSOCIATIONS
_EngagementProject,
_EngagementProject._EngagementProjectServiceOrg,
_EngagementProject._ControllingArea,
_EngagementProject._CompanyCode,
_EngagementProject._ProfitCenter,
@ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true //CE2111 - Fix Association join condition in analytical model
_EngagementProject._CostCenter,
_EngagementProject._Customer,
_EngagementProject._EngagementProjectStage,
_SalesOrder,
_SalesOrderItem,
_ItemCategory,
_Product,
_Currency,
@Consumption.hidden: true
_PersonWorkAgreement_1

}   
where 
( _EngagementProject.EngagementProjectStage = 'P003' or _EngagementProject.EngagementProjectStage = 'P004'
or _EngagementProject.EngagementProjectStage = 'P005' )
```
