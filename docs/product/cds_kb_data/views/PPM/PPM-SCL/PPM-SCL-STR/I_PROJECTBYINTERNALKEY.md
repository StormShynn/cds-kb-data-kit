---
name: I_PROJECTBYINTERNALKEY
description: "Project Definition Details By Internal ID"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBYINTERNALKEY')/$value
semantic_en: "Project Definition Details By Internal ID"
semantic_vi: "Project Definition Details By Internal ID — CDS view giao diện dựa trên I_Project."
keywords:
  - "project"
  - "definition"
  - "details"
  - "internal"
  - "coding"
  - "mask"
  - "description"
  - "object"
tags:
  - PPM
  - bo:companycode
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - project
---
# I_PROJECTBYINTERNALKEY

**Project Definition Details By Internal ID**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBYINTERNALKEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectInternalID` | ✓ | |  |  | `NUMC(8)` | Project (internal) |
| `Project` |  | |  |  | `CHAR(24)` | Project Definition |
| `ProjectWithCodingMask` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectDescription` |  | |  |  | `CHAR(40)` | Project Definition Name |
| `ProjectObject` |  | |  |  | `CHAR(22)` | Object Number |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `ResponsiblePerson` |  | |  |  | `NUMC(8)` | Responsible Person Number (Project Manager) |
| `ResponsiblePersonName` |  | |  |  | `CHAR(25)` | Name of responsible person (Project manager) |
| `ApplicantCode` |  | |  |  | `NUMC(8)` | Applicant number |
| `ApplicantName` |  | |  |  | `CHAR(25)` | Applicant |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Currency` |  | |  |  | `CUKY(5)` | WBS currency (project definition) |
| `NetworkAssignmentType` |  | |  |  | `NUMC(1)` | Network assignment |
| `WBSElmntDatesIsDetailed` |  | |  |  | `CHAR(1)` | Indicator: WBS dates detailed by activity dates |
| `PlannedStartDate` |  | |  |  | `DATS(8)` | Start Date of Overdraft Control |
| `PlannedEndDate` |  | |  |  | `DATS(8)` | Finish Date for Scheduling |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Appointments: Calendar |
| `NetworkHdrIsVisibleToUser` |  | |  |  | `CHAR(1)` | Indicator: Network header visible to end user |
| `NetworkProfile` |  | |  |  | `CHAR(7)` | Network Profile |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `BudgetProfile` |  | |  |  | `CHAR(6)` | Budget Profile |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `BasicDatesLastScheduledDate` |  | |  |  | `DATS(8)` | Date of last scheduling of the overall network (basic dates) |
| `FcstdDatesLastScheduledDate` |  | |  |  | `DATS(8)` | Date of last scheduling of the overall network (forecast) |
| `ProjectHasOwnStock` |  | |  |  | `CHAR(1)` | Project Stock |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Object Class |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Statistical WBS element |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction Code in BV Document |
| `ProjInterestCalcProfile` |  | |  |  | `CHAR(7)` | Interest Profile for Project/Order Interest Calculation |
| `InvestmentProfile` |  | |  |  | `CHAR(6)` | Investment Measure Profile |
| `PaymentPlanProfile` |  | |  |  | `CHAR(6)` | Payment plan profile |
| `ResultAnalysisInternalID` |  | |  |  | `CHAR(6)` | Results Analysis Key |
| `PlanningProfile` |  | |  |  | `CHAR(6)` | Planning Profile |
| `WBSIsMarkedForIntegratedPlng` |  | |  |  | `CHAR(1)` | Indicator for Integrated Planning |
| `IsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Valuation of Special Stock |
| `WBSIsMarkedForAutomReqmtGrpg` |  | |  |  | `CHAR(1)` | Indicator: Automatic requirements grouping |
| `WorkCenterLocation` |  | |  |  | `CHAR(10)` | Location |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `DynItemProcessorPrfl` |  | |  |  | `CHAR(8)` | Dynamic Item Processor Profile |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Recovery Indicator |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Equity Type |
| `JointVentureObjectType` |  | |  |  | `CHAR(4)` | Joint Venture Object Type |
| `JointVentureClass` |  | |  |  | `CHAR(3)` | JIB/JIBE Class |
| `JointVentureSubClass` |  | |  |  | `CHAR(5)` | JIB/JIBE Subclass A |
| `ForecastedStartDate` |  | |  |  | `DATS(8)` | Forecast Start Date |
| `ForecastedEndDate` |  | |  |  | `DATS(8)` | Forecast Finish Date |
| `ProjectLangBsdDescription` |  | |  | `shorttext` | `CHAR(40)` | Language-Dependent Short Text |
| `_ControllingArea` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProjectProfileCode` | | ✓ | | | | |
| `_ControllingObjectClass` | | ✓ | | | | |
| `_Status` | | ✓ | | | | |
| `_ResponsiblePerson` | | ✓ | | | | |
| `_ProjectApplicant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_ControllingArea` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_CostCenter` | `I_CostCenter` | [1..*] |
| `_BusinessArea` | `I_BusinessArea` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProjectProfileCode` | `I_ProjectProfileCode` | [1..1] |
| `_ControllingObjectClass` | `I_ControllingObjectClass` | [1..1] |
| `_Status` | `I_StatusObjectStatus` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBYINTERNALKEY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTBYINTERNALKEY')/$value)*

```abap
@EndUserText.label: 'Project Definition Details By Internal ID'
@VDM.viewType: #BASIC
///@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'IPROJBYINTKEY'
@AbapCatalog.preserveKey:true
@ObjectModel.representativeKey: 'ProjectInternalID'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true 

@ObjectModel: {

    supportedCapabilities: [ #SQL_DATA_SOURCE ]
}

//@VDM.lifecycle.contract.type:  #SAP_INTERNAL_API

//NOTE: TO BE USED ONLY FOR OP. FOR CLOUD USE I_PROJECTBASICDATA.

define view I_ProjectByInternalKey
  as select from    I_Project
    left outer join cnldst_shorttx on  I_Project.ProjectObject = cnldst_shorttx.objnr
                                   and cnldst_shorttx.language = $session.system_language
  association [1..1] to I_ControllingArea        as _ControllingArea        on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [1..1] to I_CompanyCode            as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..*] to I_CostCenter             as _CostCenter             on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                            and $projection.ControllingArea = _CostCenter.ControllingArea
  association [1..1] to I_BusinessArea           as _BusinessArea           on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [1..1] to I_Plant                  as _Plant                  on  $projection.Plant = _Plant.Plant
  association [1..1] to I_ProjectProfileCode     as _ProjectProfileCode     on  $projection.ProjectProfileCode = _ProjectProfileCode.ProjectProfileCode
  association [1..1] to I_ControllingObjectClass as _ControllingObjectClass on  $projection.ControllingObjectClass = _ControllingObjectClass.ControllingObjectClass
  association [1..*] to I_StatusObjectStatus     as _Status                 on  $projection.ProjectObject = _Status.StatusObject
 // association [0..*] to I_Projecttext                as _ProjLangBsdDescription    on  $projection.ProjectObject = _ProjLangBsdDescription.ProjectObject
{

  key ProjectInternalID,
      @ObjectModel.text.element: 'ProjectDescription'
      Project,
      ProjectWithCodingMask,
      @Semantics.text: true
      ProjectDescription,
      ProjectObject,
      CreatedByUser,
      CreationDate,
      LastChangedByUser,
      LastChangeDate,
      @ObjectModel.text.element: 'ResponsiblePersonName'
      ResponsiblePerson,
      @Semantics.text: true
      ResponsiblePersonName,
      @ObjectModel.text.element: 'ApplicantCode'
      ApplicantCode,
      @Semantics.text: true
      ApplicantName,
      //--[ GENERATED:012:GFBfhyK17jY4hf0VYlNxpm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      //--[ GENERATED:012:GFBfhyK17jY4hf0VYlNxpm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      //--[ GENERATED:012:GFBfhyK17jY4hf0VYlNxpm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      ProfitCenter,

      Currency,
      NetworkAssignmentType,
      WBSElmntDatesIsDetailed,
      @Semantics.calendar.dayOfMonth: true
      PlannedStartDate,
      @Semantics.calendar.dayOfMonth: true
      PlannedEndDate,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      FactoryCalendar,
      NetworkHdrIsVisibleToUser,
      NetworkProfile,
      ProjectProfileCode,
      BudgetProfile,
      @Semantics.language
      I_Project.Language               as Language,
      //--[ GENERATED:012:GFBfhyK17jY4hf0VYlNxpm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      CostObject,
      @Semantics.calendar.dayOfMonth: true
      BasicDatesLastScheduledDate,
      @Semantics.calendar.dayOfMonth: true
      FcstdDatesLastScheduledDate,
      ProjectHasOwnStock,
      ControllingObjectClass,
      WBSIsStatisticalWBSElement,
      TaxJurisdiction,
      ProjInterestCalcProfile,
      InvestmentProfile,
      PaymentPlanProfile,
      ResultAnalysisInternalID,
      PlanningProfile,
      WBSIsMarkedForIntegratedPlng,
      IsMarkedForDeletion,
      InventorySpecialStockValnType,
      WBSIsMarkedForAutomReqmtGrpg,
      WorkCenterLocation,
      FunctionalArea,
      SalesOrganization,
      DistributionChannel,
      Division,
      DynItemProcessorPrfl,
      JointVenture,
      JointVentureCostRecoveryCode,
      JointVentureEquityType,
      JointVentureObjectType,
      JointVentureClass,
      JointVentureSubClass,
      @Semantics.calendar.dayOfMonth: true
      ForecastedStartDate,
      @Semantics.calendar.dayOfMonth: true
      ForecastedEndDate,
      cnldst_shorttx.shorttext         as ProjectLangBsdDescription,
     // _ProjLangBsdDescription[1:Language = $session.system_language].ProjectLangBsdDescription,
      _ControllingArea,
      _CompanyCode,
      _BusinessArea,
      _CostCenter,
      _Plant,
      _ProjectProfileCode,
      _ControllingObjectClass,
      _Status,

      @UI.hidden: true
      @Consumption.hidden: true
      _ResponsiblePerson,
      @UI.hidden: true
      @Consumption.hidden: true
      _ProjectApplicant,
      I_Project._ProjectShortText

}
```
