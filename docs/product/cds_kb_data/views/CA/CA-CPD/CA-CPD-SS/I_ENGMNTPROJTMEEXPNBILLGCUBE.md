---
name: I_ENGMNTPROJTMEEXPNBILLGCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: What are my time and expense billing items? What is the billing cap and the notification threshold for a billing item? What is the total revenue (including accrued revenue) for a billing item? What is the cost incurred against a billing item?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJTMEEXPNBILLGCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are my time and expense billing items? What is the billing cap and the notification threshold for a billing item? What is the total revenue (including accrued revenue) for a billing item? What is the cost incurred against a billing item?"
semantic_vi: "Tme and Expn Cap in Engmnt Proj - Cube — CDS view giao diện dựa trên P_EngmntProjSlsOrdItmDetAggrgn."
keywords:
  - "tme"
  - "and"
  - "expn"
  - "cap"
  - "engmnt"
  - "proj"
  - "cube"
  - "engagement"
  - "project"
  - "plan"
  - "work"
  - "package"
  - "item"
  - "resource"
  - "type"
tags:
  - CA
  - billing
  - bo:billingdocument
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - notification
  - bo:project
---
# I_ENGMNTPROJTMEEXPNBILLGCUBE

**This CDS view provides the prerequisites for answering the following business questions: What are my time and expense billing items? What is the billing cap and the notification threshold for a billing item? What is the total revenue (including accrued revenue) for a billing item? What is the cost incurred against a billing item?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJTMEEXPNBILLGCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  | `cast(EngmngtProjSlsOrdItmDet.EngagementProject as /cpd/project )` | `CHAR(40)` | Project |
| `EngagementProjFinPlanUUID` |  | |  |  | `RAW(16)` | Financial Plan UUID |
| `WorkPackage` |  | |  | `cast (WorkPackage.WorkPackage as /cpd/workpackage)` | `CHAR(50)` | Work Package |
| `WorkItem` |  | |  | `cast(EngmntProjWrkPckgPlanActual.WorkItem as /cpd/workitem )` | `CHAR(10)` | Work Item |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `EngmtProjFinPlanVersion` |  | |  |  | `CHAR(28)` | Plan Version ID |
| `EngagementProjectResource` |  | |  | `cast (EngmntProjWrkPckgPlanActual.EngagementProjectResource as /cpd/resource)` | `CHAR(40)` | Role / Expense |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Review Year Period |
| `Currency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `PlndCostAmt` |  | |  | `cast(EngmntProjWrkPckgPlanActual.PlndCostAmt as /cpd/plan_cost)` | `CURR(17)` | Planned Cost |
| `ActlCostAmt` |  | |  | `cast(EngmntProjWrkPckgPlanActual.ActlCostAmt as /cpd/actual_cost)` | `CURR(23)` | Actual Cost |
| `PlndRevnAmt` |  | |  | `cast(EngmntProjWrkPckgPlanActual.PlndRevnAmt as /cpd/plan_revenue)` | `CURR(17)` | Planned Revenue |
| `SupplyEffortQty` |  | |  | `cast(EngmntProjWrkPckgPlanActual.SupplyEffortQty as /cpd/planned_effort)` | `QUAN(15)` | Planned Effort |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `PlndEffortQty` |  | |  | `cast(EngmntProjWrkPckgPlanActual.PlndEffortQty as /cpd/planned_effort)` | `QUAN(15)` | Planned Effort |
| `ActlEffortQty` |  | |  | `cast(EngmntProjWrkPckgPlanActual.ActlEffortQty as /cpd/actual_effort)` | `QUAN(23)` | Actual Effort |
| `ActualPlanDeviationCost` |  | |  |  | `CURR(17)` |  |
| `ActualPlanDeviationEffort` |  | |  |  | `QUAN(15)` |  |
| `EngmntProjectDeliveryOrg` |  | |  | `EngagementProjectServiceOrg` | `CHAR(5)` |  |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `CappedNetAmount` |  | |  |  | `CURR(15)` |  |
| `CappedNetAmtAlertThldInPct` |  | |  |  | `NUMC(3)` |  |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `SalesOrderItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `ActlRevnAmt` |  | |  |  | `CURR(23)` |  |
| `EngmntProjPlanLineType` |  | |  |  | `CHAR(1)` | Line type |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `_EngagementProject` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProject` | `I_EngagementProjectAttribute` | [0..1] |
| `_WorkPackage` | `I_WorkPackage` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJTMEEXPNBILLGCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJTMEEXPNBILLGCUBE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IENGPTEBILLITMC'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Tme and Expn Cap in Engmnt Proj - Cube'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {modelingPattern: #ANALYTICAL_CUBE, 
               supportedCapabilities: [#ANALYTICAL_PROVIDER]
}
define view I_EngmntProjTmeExpnBillgCube
  as select from    P_EngmntProjSlsOrdItmDetAggrgn as EngmngtProjSlsOrdItmDet

    left outer join I_WorkPackageAll               as WorkPackage                 on  EngmngtProjSlsOrdItmDet.SalesOrder     = WorkPackage.SalesOrder
                                                                                  and EngmngtProjSlsOrdItmDet.SalesOrderItem = WorkPackage.SalesOrderItem

    inner join      I_WrkPckgPlnActlMappg          as EngmntProjWrkPckgPlanActual on  EngmngtProjSlsOrdItmDet.EngagementProject = EngmntProjWrkPckgPlanActual.EngagementProject
                                                                                  and EngmngtProjSlsOrdItmDet.IsMyProject       = EngmntProjWrkPckgPlanActual.IsMyProject
                                                                                  and WorkPackage.WorkPackage                   = EngmntProjWrkPckgPlanActual.WorkPackage
                                                                                  and EngmntProjWrkPckgPlanActual.EngmtProjFinPlanVersion = '1'
                                                                                  

  association [0..1] to I_EngagementProjectAttribute as _EngagementProject on  $projection.EngagementProject = _EngagementProject.EngagementProject

  association [0..1] to I_WorkPackage                as _WorkPackage       on  $projection.WorkPackage = _WorkPackage.WorkPackage

  association [0..1] to I_SalesOrder                 as _SalesOrder        on  $projection.SalesOrder = _SalesOrder.SalesOrder

  association [0..1] to I_SalesOrderItem             as _SalesOrderItem    on  $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
                                                                           and $projection.SalesOrder     = _SalesOrderItem.SalesOrder

  association [0..1] to I_Currency                   as _Currency          on  $projection.Currency = _Currency.Currency

  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure     on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure

{
  @ObjectModel.foreignKey.association: '_EngagementProject'
  cast(EngmngtProjSlsOrdItmDet.EngagementProject as /cpd/project )              as EngagementProject,

  EngmntProjWrkPckgPlanActual.EngagementProjFinPlanUUID,

  @ObjectModel.foreignKey.association: '_WorkPackage'
  cast (WorkPackage.WorkPackage as /cpd/workpackage)                            as WorkPackage,

  cast(EngmntProjWrkPckgPlanActual.WorkItem as  /cpd/workitem )                 as WorkItem,

  EngmntProjWrkPckgPlanActual.EngagementProjectResourceType                     as EngagementProjectResourceType,

  EngmntProjWrkPckgPlanActual.EngmtProjFinPlanVersion,

  cast (EngmntProjWrkPckgPlanActual.EngagementProjectResource as /cpd/resource) as EngagementProjectResource,

  @EndUserText.label: 'Month'
  EngmntProjWrkPckgPlanActual.FiscalPeriod                                      as FiscalPeriod,
  @EndUserText.label: 'Year'
  EngmntProjWrkPckgPlanActual.FiscalYear                                        as FiscalYear,

  @EndUserText.label: 'Year/Month'
  EngmntProjWrkPckgPlanActual.FiscalYearPeriod                                  as FiscalYearPeriod,

  @ObjectModel.foreignKey.association: '_Currency'
  @Semantics.currencyCode: true
  EngmntProjWrkPckgPlanActual.Currency                                          as Currency,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  cast(EngmntProjWrkPckgPlanActual.PlndCostAmt as /cpd/plan_cost)               as PlndCostAmt,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  cast(EngmntProjWrkPckgPlanActual.ActlCostAmt as /cpd/actual_cost)             as ActlCostAmt,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  cast(EngmntProjWrkPckgPlanActual.PlndRevnAmt   as /cpd/plan_revenue)          as PlndRevnAmt,

  @Consumption.hidden: true
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  cast(EngmntProjWrkPckgPlanActual.SupplyEffortQty as /cpd/planned_effort)      as SupplyEffortQty,


  @ObjectModel.foreignKey.association: '_UnitOfMeasure'
  @Semantics.unitOfMeasure:true
  EngmntProjWrkPckgPlanActual.UnitOfMeasure                                     as UnitOfMeasure,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  cast(EngmntProjWrkPckgPlanActual.PlndEffortQty as /cpd/planned_effort)        as PlndEffortQty,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  cast(EngmntProjWrkPckgPlanActual.ActlEffortQty as /cpd/actual_effort)         as ActlEffortQty,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  EngmntProjWrkPckgPlanActual.ActualPlanDeviationCost                           as ActualPlanDeviationCost,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  EngmntProjWrkPckgPlanActual.ActualPlanDeviationEffort                         as ActualPlanDeviationEffort,

  EngmntProjWrkPckgPlanActual.EngagementProjectServiceOrg                       as EngmntProjectDeliveryOrg,

  @ObjectModel.foreignKey.association: '_SalesOrder'
  WorkPackage.SalesOrder                                                        as SalesOrder,

  @ObjectModel.foreignKey.association: '_SalesOrderItem'
  WorkPackage.SalesOrderItem                                                    as SalesOrderItem,

  @DefaultAggregation: #MAX
  @Semantics.amount.currencyCode: 'Currency'
  CappedNetAmount,

  CappedNetAmtAlertThldInPct,

  WBSElement,

  SalesOrderItemText                                                            as SalesOrderItemText,

  @DefaultAggregation: #MAX
  @Semantics.amount.currencyCode: 'Currency'
  ActlRevnAmt                                                                   as ActlRevnAmt,

  EngmntProjWrkPckgPlanActual.EngmntProjPlanLineType                            as EngmntProjPlanLineType,

  @Semantics.booleanIndicator: true
  @EndUserText.label: 'My Projects'
  @Analytics.internalName: #LOCAL
  EngmngtProjSlsOrdItmDet.IsMyProject                                           as IsMyProject,

  @EndUserText.label: 'Confidential Project'
  @Analytics.internalName: #LOCAL
  EngmngtProjSlsOrdItmDet.ProjectVisibility                                     as ProjectVisibility,

  _EngagementProject,
  _WorkPackage,
  _Currency,
  _UnitOfMeasure,
  _SalesOrder,
  _SalesOrderItem
}
```
