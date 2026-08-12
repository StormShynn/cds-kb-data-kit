---
name: I_ENGMNTPROJSTAFFINGANLYSCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: Are my projects fully staffed? Have project resources posted their time sheets as per the planned effort? Are there time sheets that need my approval? How many hours have individuals posted against a project? Show me a comparison of actual efforts by role."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSTAFFINGANLYSCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Are my projects fully staffed? Have project resources posted their time sheets as per the planned effort? Are there time sheets that need my approval? How many hours have individuals posted against a project? Show me a comparison of actual efforts by role."
semantic_vi: "Staffing Info for Engmnt Project - Cube — CDS view tổng hợp dựa trên P_EngmntProjStaffingAnalysis."
keywords:
  - "staffing"
  - "info"
  - "for"
  - "engmnt"
  - "project"
  - "cube"
  - "engagement"
  - "fiscal"
  - "year"
  - "period"
  - "resource"
  - "billing"
  - "control"
  - "category"
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - plan
  - project
---
# I_ENGMNTPROJSTAFFINGANLYSCUBE

**This CDS view provides the prerequisites for answering the following business questions: Are my projects fully staffed? Have project resources posted their time sheets as per the planned effort? Are there time sheets that need my approval? How many hours have individuals posted against a project? Show me a comparison of actual efforts by role.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSTAFFINGANLYSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Engagement Project ID |
| `FiscalYearPeriod` |  | |  |  | `CHAR(7)` |  |
| `EngagementProjectResource` |  | |  |  | `CHAR(40)` | Resource ID |
| `BillingControlCategory` |  | |  |  | `CHAR(8)` |  |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Period |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ProjectStartDate` |  | | `_EngagementProject` | `ProjectStartDate` | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | | `_EngagementProject` | `ProjectEndDate` | `DATS(8)` | Commercial Project: End Date |
| `ProjectProfileCode` |  | | `_EngagementProject` | `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `EngagementProjectServiceOrg` |  | | `_EngagementProject` | `EngagementProjectServiceOrg` | `CHAR(5)` | Service Organization |
| `ControllingArea` |  | | `_EngagementProject` | `ControllingArea` | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` |  | | `_EngagementProject` | `CompanyCode` | `CHAR(4)` | Company code for the project |
| `ProfitCenter` |  | | `_EngagementProject` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` |  | | `_EngagementProject` | `CostCenter` | `CHAR(20)` | Organization Unit Key |
| `Customer` |  | | `_EngagementProject` | `Customer` | `CHAR(10)` | Customer Number |
| `EngagementProjectStage` |  | | `_EngagementProject` | `EngagementProjectStage` | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectType` |  | | `_EngagementProject` | `EngagementProjectType` | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectCategory` |  | | `_EngagementProject` | `EngagementProjectCategory` | `CHAR(1)` | Project Type |
| `ProjectVisibility` |  | | `_EngagementProject` | `ProjectVisibility` | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectManager` |  | |  |  | `CHAR(12)` |  |
| `ProjectManagerExternalID` |  | |  |  | `CHAR(60)` |  |
| `ProjectManagerName` |  | |  |  | `CHAR(80)` |  |
| `ProjectManagerWorkAgreement` |  | | `_EngagementProject` | `ProjectManagerWorkAgreement` | `NUMC(8)` |  |
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `BillingControlCategoryText` |  | |  | `case when _EngagementProject.EngagementProjectCategory = 'C' then _BillingControlCategoryText.BillingControlCategoryText else '' end` | `CHAR(60)` | Short Text for Fixed Values |
| `IsMyProject` |  | |  |  | `CHAR(1)` |  |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `PlndEffortQty` |  | |  |  | `QUAN(15)` | Total Quantity |
| `PlndEffortUpToCurPerd` |  | |  | `case when FiscalYearPeriod <= ToFiscalYearPeriod then PlndEffortQty else 0 end` | `QUAN(15)` | Total Quantity |
| `EngmntProjStaffedEffort` |  | |  |  | `QUAN(15)` | Total Quantity |
| `StaffedEffortUpToCurPerdQty` |  | |  | `case when FiscalYearPeriod <= ToFiscalYearPeriod then EngmntProjStaffedEffort else 0 end` | `QUAN(15)` | Total Quantity |
| `ActlEffortQty` |  | |  |  | `QUAN(15)` |  |
| `TotalRecordedHours` |  | |  | `RecordedHours` | `QUAN(15)` |  |
| `TotalApprovedHours` |  | |  | `ApprovedHours` | `QUAN(15)` |  |
| `TotRecHrsSentForApproval` |  | |  | `UnapprovedHours` | `QUAN(15)` |  |
| `_EngagementProject` | | ✓ | | | | |
| `_EngagementProjectResource` | | ✓ | | | | |
| `_EngmntProjResourceType` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingControlCategoryText` | `I_BillingControlCategoryText` | [0..1] |
| `_EngagementProject` | `I_EngagementProject` | [0..1] |
| `_EngagementProjectResource` | `I_EngagementProjectResource` | [0..1] |
| `_EngmntProjResourceType` | `I_EngmntProjResourceType` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Extension` | `E_CustomerProject` | [1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSTAFFINGANLYSCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJSTAFFINGANLYSCUBE')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IEPSTAFANLYSCUBE',
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
@EndUserText.label: 'Staffing Info for Engmnt Project - Cube'
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ObjectModel.usageType: {
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@VDM: {
//  private: false,
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #COMPOSITE
}
@ObjectModel: {modelingPattern: #ANALYTICAL_CUBE,
               supportedCapabilities: [#ANALYTICAL_PROVIDER]
}
define view I_EngmntProjStaffingAnlysCube
  as select from P_EngmntProjStaffingAnalysis
  // LIST of NON C1-released ASSOCIATIONS
  association [0..1] to I_BillingControlCategoryText as _BillingControlCategoryText on  _BillingControlCategoryText.BillingControlCategory = $projection.BillingControlCategory
                                                                                    and _BillingControlCategoryText.Language               = $session.system_language
  //      association[1] to I_EngmntProjRole as _EngmntProjRole on
  //        _EngmntProjRole.EngagementProject = $projection.EngagementProject
  // LIST of C1-released ASSOCIATIONS
  association [0..1] to I_EngagementProject          as _EngagementProject          on  _EngagementProject.EngagementProject = $projection.EngagementProject
  association [0..1] to I_EngagementProjectResource  as _EngagementProjectResource  on  _EngagementProjectResource.EngagementProjectResource     = $projection.EngagementProjectResource
                                                                                    and _EngagementProjectResource.EngagementProjectResourceType = $projection.EngagementProjectResourceType
  association [0..1] to I_EngmntProjResourceType     as _EngmntProjResourceType     on  _EngmntProjResourceType.EngagementProjectResourceType = $projection.EngagementProjectResourceType
  //      association[0..1] to I_PersonWorkAgreement_1 as _PersonWorkAgreement on
  //        _PersonWorkAgreement.PersonWorkAgreement = $projection.projectmanager
  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure              on  _UnitOfMeasure.UnitOfMeasure = $projection.UnitOfMeasure
  association [1]    to E_CustomerProject            as _Extension                  on  _Extension.CustomerProject = $projection.EngagementProject
  association [0..1] to I_PersonWorkAgreement_1     as _PersonWorkAgreement_1    on  $projection.projectmanagerworkagreement = _PersonWorkAgreement_1.PersonWorkAgreement

{

  @EndUserText.label: 'Engagement Project'
  @ObjectModel.foreignKey.association: '_EngagementProject'
  EngagementProject,

  @EndUserText.label: 'Fiscal Year Period'
  FiscalYearPeriod,

  @EndUserText.label: 'Project Resource'
  @ObjectModel.foreignKey.association: '_EngagementProjectResource'
  EngagementProjectResource,

  @EndUserText.label: 'Billing Control Category'
  @ObjectModel.text.element: 'BillingControlCategoryText'
  BillingControlCategory,

  //@EndUserText.label: 'Fiscal Period'
  @Semantics.fiscal.period: true
  FiscalPeriod,

  @Semantics.fiscal.year: true
  FiscalYear,

  @Semantics.businessDate.from: true
  _EngagementProject.ProjectStartDate,

  @Semantics.businessDate.to: true
  _EngagementProject.ProjectEndDate,

  @Consumption.hidden: true
  _EngagementProject.ProjectProfileCode,

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
  _EngagementProject.EngagementProjectCategory,

  @Consumption.hidden: true
  _EngagementProject.ProjectVisibility,

  //@EndUserText.label: 'Project Manager'
  //@ObjectModel.foreignKey.association: '_PersonWorkAgreement'
  //_EngagementProject.ProjectManager,

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
  
  @EndUserText.label: 'Project Resource Type'
  @ObjectModel.foreignKey.association: '_EngmntProjResourceType'
  EngagementProjectResourceType,

  @EndUserText.label: 'Billing Control Category Text'
  @Semantics.text: true
  case
  when _EngagementProject.EngagementProjectCategory = 'C'
  then _BillingControlCategoryText.BillingControlCategoryText
  else ''
  end             as BillingControlCategoryText,

  @EndUserText.label: 'My Projects'
  @Semantics.booleanIndicator:true
  IsMyProject,

  @EndUserText.label: 'Unit of Measure'
  @ObjectModel.foreignKey.association: '_UnitOfMeasure'
  @Semantics.unitOfMeasure: true
  UnitOfMeasure,

  @DefaultAggregation: #SUM
  @EndUserText.label: 'Total Plan Effort'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  PlndEffortQty,

  @DefaultAggregation: #SUM
  @EndUserText.label: 'Plan Effort Until Current Month'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  case when FiscalYearPeriod <= ToFiscalYearPeriod then PlndEffortQty
  else 0 end      as PlndEffortUpToCurPerd,

  @DefaultAggregation: #SUM
  @EndUserText.label: 'Total Staffed Effort'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  EngmntProjStaffedEffort,

  @DefaultAggregation: #SUM
  @EndUserText.label: 'Staffed Effort Until Current Month'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  case when FiscalYearPeriod <= ToFiscalYearPeriod then EngmntProjStaffedEffort
  else 0 end      as StaffedEffortUpToCurPerdQty,

  @DefaultAggregation: #SUM
  @EndUserText.label: 'Total Actual Effort'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  ActlEffortQty,

  @DefaultAggregation: #SUM
  @EndUserText.label: 'Recorded Effort'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  RecordedHours   as TotalRecordedHours,

  @DefaultAggregation: #SUM
  @EndUserText.label: 'Approved Effort'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  ApprovedHours   as TotalApprovedHours,

  @DefaultAggregation: #SUM
  @EndUserText.label: 'Unapproved Effort'
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
  UnapprovedHours as TotRecHrsSentForApproval,

  // LIST of C1-released ASSOCIATIONS
  _EngagementProject,
  _EngagementProject._ControllingArea,
  _EngagementProject._CompanyCode,
  _EngagementProject._ProfitCenter,
  @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true //CE2111 - Fix Association join condition in analytical model
  _EngagementProject._CostCenter,
  _EngagementProject._Customer,
  _EngagementProject._EngagementProjectStage,
  _EngagementProject._EngagementProjectServiceOrg,
  //_PersonWorkAgreement,
  _EngagementProjectResource,
  _EngmntProjResourceType,
  _UnitOfMeasure,
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
