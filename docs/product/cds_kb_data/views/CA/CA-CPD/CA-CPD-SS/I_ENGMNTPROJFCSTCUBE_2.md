---
name: I_ENGMNTPROJFCSTCUBE_2
description: "This CDS view provides the prerequisites for answering the following business questions: What are the planned and actual efforts in a project or a work package? What are the planned and actual cost in a project or work package? What are the services (units) planned in a work package?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFCSTCUBE_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the planned and actual efforts in a project or a work package? What are the planned and actual cost in a project or work package? What are the services (units) planned in a work package?"
semantic_vi: "Forecast Info for Engmnt Project - Cube — CDS view giao diện dựa trên I_EngagementProject."
keywords:
  - "forecast"
  - "info"
  - "for"
  - "engmnt"
  - "project"
  - "cube"
  - "engagement"
  - "name"
  - "review"
  - "status"
  - "service"
  - "profile"
  - "code"
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
# I_ENGMNTPROJFCSTCUBE_2

**This CDS view provides the prerequisites for answering the following business questions: What are the planned and actual efforts in a project or a work package? What are the planned and actual cost in a project or work package? What are the services (units) planned in a work package?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFCSTCUBE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  | `cast(EngmntProjWrkPckgPlanActual.EngagementProject as /cpd/project )` | `CHAR(40)` | Project |
| `EngagementProjectName` |  | |  |  | `CHAR(40)` | Customer Project Name |
| `EngagementProjectReviewStatus` |  | |  | `case when EngagementProjFinancialPlan.EngagementProjectReviewStatus <> '' then EngagementProjFinancialPlan.EngagementProjectReviewStatus else cast('0INI' as /cpd/pfp_status_id ) end` | `CHAR(10)` | Forecast Status ID |
| `EngagementProjectServiceOrg` |  | |  | `CustomerProjectServiceOrg` | `CHAR(5)` | Service Organization |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `EngagementProjFinPlanUUID` |  | |  |  | `RAW(16)` | Financial Plan UUID |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Commercial Project Last Changed On |
| `WorkPackage` |  | |  | `cast (WorkPackage.WorkPackage as /cpd/workpackage)` | `CHAR(50)` | Work Package |
| `WorkPackageName` |  | |  |  | `CHAR(60)` | Plan Item Description |
| `WorkPackageStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `WorkPackageEndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkItem` |  | |  | `cast(EngmntProjWrkPckgPlanActual.WorkItem as /cpd/workitem )` | `CHAR(10)` | Work Item |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `EngagementProjectResource` |  | |  | `cast (EngmntProjWrkPckgPlanActual.EngagementProjectResource as /cpd/resource)` | `CHAR(40)` | Role / Expense |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Review Year Period |
| `Currency` |  | |  |  | `CUKY(5)` | Plan Currency |
| `PlndCostAmt` |  | |  | `cast(EngmntProjWrkPckgPlanActual.PlndCostAmt as /cpd/plan_cost)` | `CURR(17)` | Planned Cost |
| `ActlCostAmt` |  | |  | `case when EngmntProjWrkPckgPlanActual.FiscalYearPeriod <= :P_FiscalYearPeriod then EngmntProjWrkPckgPlanActual.ActlCostAmt else cast(0 as /cpd/actual_cost) end` | `CURR(23)` | Actual Cost |
| `SupplyEffortQty` |  | |  | `cast(EngmntProjWrkPckgPlanActual.SupplyEffortQty as /cpd/planned_effort)` | `QUAN(15)` | Planned Effort |
| `WorkPackageUnitUoM` |  | |  | `case when EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0SRV' then EngmntProjUnitCompltnPct.WorkPackageUnitUoM end` | `UNIT(3)` | Unit of Measure |
| `UnitOfMeasure` |  | |  | `case when EngmntProjWrkPckgPlanActual.EngagementProjectResourceType != '0SRV' then EngmntProjWrkPckgPlanActual.UnitOfMeasure end` | `UNIT(3)` | Base Unit of Measure |
| `PlndEffortQty` |  | |  | `case when EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0ACT' then cast(EngmntProjWrkPckgPlanActual.PlndEffortQty as /cpd/planned_effort) end` | `QUAN(15)` | Planned Effort |
| `AddlResourcePlannedQuantity` |  | |  | `case when EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0ADL' then EngmntProjWrkPckgPlanActual.PlndEffortQty end` | `QUAN(15)` |  |
| `PlanUnitQuantity` |  | |  | `case when EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0SRV' then cast(EngmntProjWrkPckgPlanActual.PlndEffortQty as /cpd/planned_effort) end` | `QUAN(15)` | Planned Effort |
| `ActlEffortQty` |  | |  | `case when EngmntProjWrkPckgPlanActual.FiscalYearPeriod <= :P_FiscalYearPeriod and EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0ACT' then cast(EngmntProjWrkPckgPlanActual.ActlEffortQty as /cpd/actual_effort) end` | `QUAN(23)` | Actual Effort |
| `AddlResourceActualQuantity` |  | |  | `case when EngmntProjWrkPckgPlanActual.FiscalYearPeriod <= :P_FiscalYearPeriod and EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0ADL' then EngmntProjWrkPckgPlanActual.ActlEffortQty end` | `QUAN(23)` |  |
| `ActualUnitQty` |  | |  | `case when EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0SRV' and EngmntProjWrkPckgPlanActual.FiscalYearPeriod <= :P_FiscalYearPeriod then cast(EngmntProjWrkPckgPlanActual.ActlEffortQty as /cpd/planned_effort) end` | `QUAN(15)` | Planned Effort |
| `ActualPlanDeviationCost` |  | |  |  | `CURR(17)` |  |
| `ActualPlanDeviationEffort` |  | |  |  | `QUAN(15)` |  |
| `EngmntProjectDeliveryOrg` |  | |  | `EngagementProjectServiceOrg` | `CHAR(5)` |  |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrderItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `WBSElement` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | | `_WBSElementBasicData_2` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `EngmntProjPlanLineType` |  | |  |  | `CHAR(1)` | Line type |
| `UnitCompltnRateInPercent` |  | |  | `case when WorkPackage.WorkPackageType = 'U' then cast(EngmntProjUnitCompltnPct.UnitCompltnRateInPercent as /cpd/sc_completionrate) end` | `DEC(30)` | Completion Rate Percent |
| `ResourceIsOfUnitWorkPackage` |  | |  | `case when WorkPackage.WorkPackageType = 'U' and EngmntProjWrkPckgPlanActual.EngagementProjectResourceType != '0SRV' then cast(1 as /cpd/planned_effort) else cast(0 as /cpd/planned_effort) end` | `QUAN(15)` | Planned Effort |
| `RsceIsServiceBasedWorkPackage` |  | |  | `case when WorkPackage.WorkPackageType = 'U' and EngmntProjWrkPckgPlanActual.EngagementProjectResourceType != '0SRV' then 1 else 0 end` | `INT1(3)` |  |
| `WorkPackageType` |  | |  | `case when WorkPackage.WorkPackageType = 'U' then WorkPackage.WorkPackageType else '' end` | `CHAR(1)` |  |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `EngagementProjectForecastYear` |  | |  | `substring(EngagementProjFinancialPlan.EngmntProjReviewYearPeriod, 1, 4)` | `CHAR(4)` |  |
| `EngagementProjectForecastMonth` |  | |  | `substring(EngagementProjFinancialPlan.EngmntProjReviewYearPeriod, 6, 2)` | `CHAR(2)` |  |
| `RevenueAsSoldAmount` |  | |  | `TotalNetAmount` | `CURR(15)` | Net Value of the Document Item in Document Currency |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  | `cast(EngmntProjWrkPckgPlanActual.EngagementProjectCostCenter as kostl)` | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  | `EngmntProjectHeaderCompanyCode` | `CHAR(4)` | Company code for the project |
| `_EngagementProject` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_EngagementProjectStage` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_EngagementProjectResource` | | ✓ | | | | |
| `_WorkItem` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_WorkPackageUnitUoM` | | ✓ | | | | |
| `_EngmntProjectDeliveryOrg` | | ✓ | | | | |
| `_EngagementProjectSrvcOrg` | | ✓ | | | | |
| `_EngagementProjectResourceType` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementBasicData_2` | | ✓ | | | | |
| `_EngmntProjFinPlanStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProject` | `I_EngagementProject` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_EngagementProjectStage` | `I_EngagementProjectStage` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_WorkPackage` | `I_WorkPackage` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_EngagementProjectResource` | `I_EngagementProjectResource` | [0..1] |
| `_WorkItem` | `I_WorkPackageWorkItem` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_WorkPackageUnitUoM` | `I_UnitOfMeasure` | [0..1] |
| `_EngmntProjectDeliveryOrg` | `I_EngagementProjectSrvcOrg` | [0..1] |
| `_EngagementProjectSrvcOrg` | `I_EngagementProjectSrvcOrg` | [0..1] |
| `_EngagementProjectResourceType` | `I_EngmntProjResourceType` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasicData_2` | `I_WBSElementBasicData` | [0..1] |
| `_EngmntProjFinPlanStatus` | `I_EngmntProjFinPlanStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFCSTCUBE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFCSTCUBE_2')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEPFCSTCUBE2'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Forecast Info for Engmnt Project - Cube'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {modelingPattern: #ANALYTICAL_CUBE,
               supportedCapabilities: [#ANALYTICAL_PROVIDER]
}
@AbapCatalog: { dbHints: [{dbSystem: #HDB, hint:'OPTIMIZATION_LEVEL(RULE_BASED)'}]}
@Consumption.dbHints: ['NO_USE_OLAP_PLAN']
define view I_EngmntProjFcstCube_2
  with parameters
    P_FiscalYearPeriod : /cpd/pfp_review_year_period,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language         : sylangu
  as select from    I_EngagementProject                                                              as EngagementProject
    inner join      I_EngagementProjFinancialPlan                                                    as EngagementProjFinancialPlan on EngagementProject.EngagementProjectUUID = EngagementProjFinancialPlan.EngagementProjectUUID
    inner join      P_EngmntProjPlnActlAsSoldRevn                                                    as EngmntProjWrkPckgPlanActual on EngagementProject.EngagementProject = EngmntProjWrkPckgPlanActual.EngagementProject
    left outer join I_WorkPackage                                                                    as WorkPackage                 on EngmntProjWrkPckgPlanActual.WorkPackage = WorkPackage.WorkPackage
//    left outer join I_EngmntProjFinPlanStatus                                                        as InitialStatus               on InitialStatus.EngmntProjReviewStsIsInitial = 'X'
    left outer join I_EngmntProjUnitCompltnPct (P_FiscalYearPeriod : $parameters.P_FiscalYearPeriod) as EngmntProjUnitCompltnPct    on  EngmntProjWrkPckgPlanActual.EngagementProject               = EngmntProjUnitCompltnPct.EngagementProject
                                                                                                                                    and EngmntProjWrkPckgPlanActual.IsMyProject                     = EngmntProjUnitCompltnPct.IsMyProject
                                                                                                                                    and EngmntProjWrkPckgPlanActual.EngagementProjectCategory       = EngmntProjUnitCompltnPct.EngagementProjectCategory
                                                                                                                                    and EngmntProjWrkPckgPlanActual.CustomerProjectServiceOrg       = EngmntProjUnitCompltnPct.CustomerProjectServiceOrg
                                                                                                                                    and EngmntProjWrkPckgPlanActual.Customer                        = EngmntProjUnitCompltnPct.Customer
                                                                                                                                    and EngmntProjWrkPckgPlanActual.ProjectVisibility               = EngmntProjUnitCompltnPct.ProjectVisibility
                                                                                                                                    and EngmntProjWrkPckgPlanActual.EngagementProjectStage          = EngmntProjUnitCompltnPct.EngagementProjectStage
                                                                                                                                    and EngmntProjWrkPckgPlanActual.ProjectProfileCode              = EngmntProjUnitCompltnPct.ProjectProfileCode
                                                                                                                                    and EngmntProjWrkPckgPlanActual.EngagementProjectType           = EngmntProjUnitCompltnPct.EngagementProjectType
                                                                                                                                    and EngmntProjWrkPckgPlanActual.EngmntProjectHeaderCompanyCode  = EngmntProjUnitCompltnPct.EngmntProjectHeaderCompanyCode
                                                                                                                                    and EngmntProjWrkPckgPlanActual.EngagementProjectCostCenter     = EngmntProjUnitCompltnPct.EngagementProjectCostCenter
                                                                                                                                    and EngmntProjWrkPckgPlanActual.ProfitCenter                    = EngmntProjUnitCompltnPct.ProfitCenter
                                                                                                                                    and EngmntProjWrkPckgPlanActual.WorkPackage                     = EngmntProjUnitCompltnPct.WorkPackage
                                                                                                                                    and EngmntProjWrkPckgPlanActual.EngmtProjFinPlanVersion         = EngmntProjUnitCompltnPct.EngmtProjFinPlanVersion
                                                                                                                                    and EngmntProjWrkPckgPlanActual.LastChangeDateTime              = EngmntProjUnitCompltnPct.LastChangeDateTime

    left outer join I_SalesOrderItem                                                                 as SalesOrderItem              on  WorkPackage.SalesOrder     = SalesOrderItem.SalesOrder
                                                                                                                                    and WorkPackage.SalesOrderItem = SalesOrderItem.SalesOrderItem
  association [0..1] to I_EngagementProject         as _EngagementProject             on  $projection.EngagementProject = _EngagementProject.EngagementProject

  association [0..1] to I_Customer                  as _Customer                      on  $projection.Customer = _Customer.Customer

  association [0..1] to I_EngagementProjectStage    as _EngagementProjectStage        on  $projection.EngagementProjectStage = _EngagementProjectStage.EngagementProjectStage

  association [0..1] to I_ControllingArea           as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_ProfitCenter              as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                      and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter

  association [0..*] to I_CostCenter                as _CostCenter                    on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                                      and $projection.ControllingArea = _CostCenter.ControllingArea

  association [0..1] to I_CompanyCode               as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_WorkPackage               as _WorkPackage                   on  $projection.WorkPackage = _WorkPackage.WorkPackage

  association [0..1] to I_SalesOrder                as _SalesOrder                    on  $projection.SalesOrder = _SalesOrder.SalesOrder

  association [0..1] to I_SalesOrderItem            as _SalesOrderItem                on  $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
                                                                                      and $projection.SalesOrder     = _SalesOrderItem.SalesOrder

  association [0..1] to I_EngagementProjectResource as _EngagementProjectResource     on  $projection.EngagementProjectResource     = _EngagementProjectResource.EngagementProjectResource
                                                                                      and $projection.EngagementProjectResourceType = _EngagementProjectResource.EngagementProjectResourceType

  association [0..1] to I_WorkPackageWorkItem       as _WorkItem                      on  $projection.WorkItem    = _WorkItem.WorkItem
                                                                                      and $projection.WorkPackage = _WorkItem.WorkPackage

  association [0..1] to I_Currency                  as _Currency                      on  $projection.Currency = _Currency.Currency

  association [0..1] to I_UnitOfMeasure             as _UnitOfMeasure                 on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure             as _WorkPackageUnitUoM            on  $projection.WorkPackageUnitUoM = _WorkPackageUnitUoM.UnitOfMeasure

  association [0..1] to I_EngagementProjectSrvcOrg  as _EngmntProjectDeliveryOrg      on  $projection.EngmntProjectDeliveryOrg = _EngmntProjectDeliveryOrg.EngagementProjectServiceOrg

  association [0..1] to I_EngagementProjectSrvcOrg  as _EngagementProjectSrvcOrg      on  $projection.EngagementProjectServiceOrg = _EngagementProjectSrvcOrg.EngagementProjectServiceOrg

  association [0..1] to I_EngmntProjResourceType    as _EngagementProjectResourceType on  $projection.EngagementProjectResourceType = _EngagementProjectResourceType.EngagementProjectResourceType

  association [0..1] to I_WBSElementBasicData       as _WBSElementBasicData           on  $projection.WBSElement = _WBSElementBasicData.WBSElementInternalID

  association [0..1] to I_WBSElementBasicData       as _WBSElementBasicData_2         on  $projection.WBSElementInternalID = _WBSElementBasicData_2.WBSElementInternalID

  association [0..1] to I_EngmntProjFinPlanStatus   as _EngmntProjFinPlanStatus       on  $projection.EngagementProjectReviewStatus = _EngmntProjFinPlanStatus.EngagementProjectReviewStatus
{
  @ObjectModel.foreignKey.association: '_EngagementProject'
  @EndUserText.label: 'Project'
  cast(EngmntProjWrkPckgPlanActual.EngagementProject as /cpd/project )          as EngagementProject,

  @EndUserText.label: 'Cust.Proj. Name'
  EngagementProject.EngagementProjectName                                       as EngagementProjectName,


  @ObjectModel.foreignKey.association: '_EngmntProjFinPlanStatus'
  case when EngagementProjFinancialPlan.EngagementProjectReviewStatus <> ''
  then EngagementProjFinancialPlan.EngagementProjectReviewStatus
  else cast('0INI' as /cpd/pfp_status_id ) end                                  as EngagementProjectReviewStatus,


  @ObjectModel.foreignKey.association: '_EngagementProjectSrvcOrg'
  EngmntProjWrkPckgPlanActual.CustomerProjectServiceOrg                         as EngagementProjectServiceOrg,

  @Consumption.hidden: true
  EngmntProjWrkPckgPlanActual.ProjectProfileCode,

  EngmntProjWrkPckgPlanActual.EngagementProjFinPlanUUID,

  @Semantics.dateTime:true
  @Semantics.systemDateTime.lastChangedAt:true
  EngmntProjWrkPckgPlanActual.LastChangeDateTime,

  @ObjectModel.foreignKey.association: '_WorkPackage'
  cast (WorkPackage.WorkPackage as /cpd/workpackage)                            as WorkPackage,

  WorkPackage.WorkPackageName                                                   as WorkPackageName,

  WorkPackage.WorkPackageStartDate                                              as WorkPackageStartDate,

  WorkPackage.WorkPackageEndDate                                                as WorkPackageEndDate,

  @ObjectModel.foreignKey.association: '_WorkItem'
  cast(EngmntProjWrkPckgPlanActual.WorkItem as  /cpd/workitem )                 as WorkItem,

  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_EngagementProjectResourceType'
  EngmntProjWrkPckgPlanActual.EngagementProjectResourceType                     as EngagementProjectResourceType,

  @ObjectModel.foreignKey.association: '_EngagementProjectResource'
  cast (EngmntProjWrkPckgPlanActual.EngagementProjectResource as /cpd/resource) as EngagementProjectResource,

  @EndUserText.label: 'Month'
  EngmntProjWrkPckgPlanActual.FiscalPeriod                                      as FiscalPeriod,

  @EndUserText.label: 'Year'
  EngmntProjWrkPckgPlanActual.FiscalYear                                        as FiscalYear,

  @EndUserText.label: 'Year / Month'
  EngmntProjWrkPckgPlanActual.FiscalYearPeriod                                  as FiscalYearPeriod,

  @ObjectModel.foreignKey.association: '_Currency'
  @Semantics.currencyCode: true
  EngmntProjWrkPckgPlanActual.Currency                                          as Currency,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  cast(EngmntProjWrkPckgPlanActual.PlndCostAmt as /cpd/plan_cost)               as PlndCostAmt,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  case when EngmntProjWrkPckgPlanActual.FiscalYearPeriod <= :P_FiscalYearPeriod
  then
  EngmntProjWrkPckgPlanActual.ActlCostAmt
  else cast(0 as /cpd/actual_cost)
  end                                                                           as ActlCostAmt,

  @EndUserText.label: 'Staffed Effort'
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  cast(EngmntProjWrkPckgPlanActual.SupplyEffortQty as /cpd/planned_effort)      as SupplyEffortQty,

  @EndUserText.label: 'Work Package UoM'
  @ObjectModel.foreignKey.association: '_WorkPackageUnitUoM'
  @Semantics.unitOfMeasure:true
  case
  when EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0SRV'
  then EngmntProjUnitCompltnPct.WorkPackageUnitUoM
  end                                                                           as WorkPackageUnitUoM,

  @ObjectModel.foreignKey.association: '_UnitOfMeasure'
  @Semantics.unitOfMeasure:true
  case
  when EngmntProjWrkPckgPlanActual.EngagementProjectResourceType != '0SRV'
  then EngmntProjWrkPckgPlanActual.UnitOfMeasure
  end                                                                           as UnitOfMeasure,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  case
  when EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0ACT'
  then cast(EngmntProjWrkPckgPlanActual.PlndEffortQty as /cpd/planned_effort)
  end                                                                           as PlndEffortQty,

  @EndUserText.label: 'Planned Qty (Addl Res.)'
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  case
  when EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0ADL'
  then EngmntProjWrkPckgPlanActual.PlndEffortQty
  end                                                                           as AddlResourcePlannedQuantity,

  @EndUserText.label: 'Planned Qty (Service)'
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'WorkPackageUnitUoM'
  case
  when EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0SRV'
  then cast(EngmntProjWrkPckgPlanActual.PlndEffortQty as /cpd/planned_effort)
  end                                                                           as PlanUnitQuantity,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  case
  when EngmntProjWrkPckgPlanActual.FiscalYearPeriod <= :P_FiscalYearPeriod and EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0ACT'
  then
  cast(EngmntProjWrkPckgPlanActual.ActlEffortQty as /cpd/actual_effort)
  end                                                                           as ActlEffortQty,

  @EndUserText.label: 'Actual Qty (Addl Res.)'
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  case
  when EngmntProjWrkPckgPlanActual.FiscalYearPeriod <= :P_FiscalYearPeriod and EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0ADL'
  then EngmntProjWrkPckgPlanActual.ActlEffortQty
  end                                                                           as AddlResourceActualQuantity,

  @EndUserText.label: 'Actual Qty (Service)'
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'WorkPackageUnitUoM'
  case
  when EngmntProjWrkPckgPlanActual.EngagementProjectResourceType = '0SRV' and EngmntProjWrkPckgPlanActual.FiscalYearPeriod <= :P_FiscalYearPeriod
  then cast(EngmntProjWrkPckgPlanActual.ActlEffortQty as /cpd/planned_effort)
  end                                                                           as ActualUnitQty,

  @EndUserText.label: 'Cost Deviation'
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  EngmntProjWrkPckgPlanActual.ActualPlanDeviationCost                           as ActualPlanDeviationCost,

  @EndUserText.label: 'Effort Deviation'
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  EngmntProjWrkPckgPlanActual.ActualPlanDeviationEffort                         as ActualPlanDeviationEffort,

  @EndUserText.label: 'Delivery Organization'
  @ObjectModel.foreignKey.association: '_EngmntProjectDeliveryOrg'
  EngmntProjWrkPckgPlanActual.EngagementProjectServiceOrg                       as EngmntProjectDeliveryOrg,

  @ObjectModel.foreignKey.association: '_SalesOrder'
  EngmntProjWrkPckgPlanActual.SalesOrder                                        as SalesOrder,

  @ObjectModel.foreignKey.association: '_SalesOrderItem'
  EngmntProjWrkPckgPlanActual.SalesOrderItem                                    as SalesOrderItem,

  SalesOrderItem.SalesOrderItemText                                             as SalesOrderItemText,

  @Consumption.hidden: true
  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'WBSElementInternalID'
  SalesOrderItem.WBSElement,

  @Consumption.hidden: true
  SalesOrderItem.WBSElementInternalID,

  _WBSElementBasicData_2.WBSElementExternalID                                   as WBSElementExternalID,

  EngmntProjWrkPckgPlanActual.EngmntProjPlanLineType                            as EngmntProjPlanLineType,

  @DefaultAggregation: #MAX
  case
  when WorkPackage.WorkPackageType = 'U' then
  cast(EngmntProjUnitCompltnPct.UnitCompltnRateInPercent as /cpd/sc_completionrate)
  end                                                                           as UnitCompltnRateInPercent,

  @DefaultAggregation: #MAX
  @VDM.lifecycle.status: #DEPRECATED
  @VDM.lifecycle.successor: 'RsceIsServiceBasedWorkPackage'
  case
  when WorkPackage.WorkPackageType = 'U' and EngmntProjWrkPckgPlanActual.EngagementProjectResourceType != '0SRV'
  then cast(1 as /cpd/planned_effort)
  else cast(0 as /cpd/planned_effort)
  end                                                                           as ResourceIsOfUnitWorkPackage,

  @DefaultAggregation: #MAX
  case
  when WorkPackage.WorkPackageType = 'U' and EngmntProjWrkPckgPlanActual.EngagementProjectResourceType != '0SRV'
  then 1
  else 0
  end                                                                           as RsceIsServiceBasedWorkPackage,

  @EndUserText.label: 'Work Package Type'
  case
  when WorkPackage.WorkPackageType = 'U'
  then WorkPackage.WorkPackageType
  else ''
  end                                                                           as WorkPackageType,

  @EndUserText.label:'Confidential Project'
  @Analytics.internalName: #LOCAL
  EngmntProjWrkPckgPlanActual.ProjectVisibility                                 as ProjectVisibility,

  @EndUserText.label: 'My Projects'
  @Analytics.internalName: #LOCAL
  @Semantics.booleanIndicator:true
  EngmntProjWrkPckgPlanActual.IsMyProject,

  @EndUserText.label: 'Forecast Year'
  substring(EngagementProjFinancialPlan.EngmntProjReviewYearPeriod, 1, 4)       as EngagementProjectForecastYear,

  @EndUserText.label: 'Forecast Month'
  substring(EngagementProjFinancialPlan.EngmntProjReviewYearPeriod, 6, 2)       as EngagementProjectForecastMonth,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  EngmntProjWrkPckgPlanActual.TotalNetAmount                                    as RevenueAsSoldAmount,


  EngmntProjWrkPckgPlanActual.EngagementProjectType,
  @ObjectModel.foreignKey.association: '_EngagementProjectStage'
  EngmntProjWrkPckgPlanActual.EngagementProjectStage,
  EngmntProjWrkPckgPlanActual.EngagementProjectCategory,
  @ObjectModel.foreignKey.association: '_Customer'
  EngmntProjWrkPckgPlanActual.Customer,
  @ObjectModel.foreignKey.association: '_ControllingArea'
  EngmntProjWrkPckgPlanActual.ControllingArea,
  @ObjectModel.foreignKey.association: '_ProfitCenter'
  EngmntProjWrkPckgPlanActual.ProfitCenter,
  @ObjectModel.foreignKey.association: '_CostCenter'
  cast(EngmntProjWrkPckgPlanActual.EngagementProjectCostCenter as kostl)       as CostCenter,
  @ObjectModel.foreignKey.association: '_CompanyCode'
  EngmntProjWrkPckgPlanActual.EngmntProjectHeaderCompanyCode                    as CompanyCode,

  _EngagementProject,
  _WorkPackage,
  _WorkItem,
  _EngagementProjectResourceType,
  _EngagementProjectResource,
  _Currency,
  _UnitOfMeasure,
  _EngagementProjectSrvcOrg,
  _SalesOrder,
  _SalesOrderItem,
  _EngmntProjectDeliveryOrg,
  _WorkPackageUnitUoM,
  _EngmntProjFinPlanStatus,
  @API.element.releaseState: #DEPRECATED
  @API.element.successor: '_WBSElementBasicData_2'
  _WBSElementBasicData,
  _WBSElementBasicData_2,
  _EngagementProjectStage,
  _Customer,
  _ControllingArea,
  _ProfitCenter,
  _CostCenter,
  _CompanyCode
}
where
  EngmntProjWrkPckgPlanActual.EngmtProjFinPlanVersion = '1'
```
