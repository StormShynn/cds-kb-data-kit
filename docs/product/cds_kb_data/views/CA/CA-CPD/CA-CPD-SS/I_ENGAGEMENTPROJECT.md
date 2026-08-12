---
name: I_ENGAGEMENTPROJECT
description: "This CDS view provides the prerequisites for answering the following business questions: How many projects are being executed in my company? What are the projects assigned to a project manager? Which projects are at a certain stage in the project life cycle? Which projects are assigned to certain accounting objects such as cost centers or profit centers? When do my projects begin and end?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many projects are being executed in my company? What are the projects assigned to a project manager? Which projects are at a certain stage in the project life cycle? Which projects are assigned to certain accounting objects such as cost centers or profit centers? When do my projects begin and end?"
semantic_vi: "Engagement Project — CDS view cơ bản dựa trên P_EngagementProject."
keywords:
  - "Engagement Project"
  - "engagement"
  - "project"
  - "name"
  - "engmnt"
  - "proj"
  - "case"
  - "type"
tags:
  - CA
  - account
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - project
  - bo:project
---
# I_ENGAGEMENTPROJECT

**This CDS view provides the prerequisites for answering the following business questions: How many projects are being executed in my company? What are the projects assigned to a project manager? Which projects are at a certain stage in the project life cycle? Which projects are assigned to certain accounting objects such as cost centers or profit centers? When do my projects begin and end?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` | ✓ | |  | `cast(EngagementProject.mp_id as /cpd/eng_mp_id preserving type )` | `CHAR(40)` | Engagement Project ID |
| `EngagementProjectUUID` |  | |  | `cast(EngagementProject.db_key as /cpd/eng_db_key preserving type )` | `RAW(16)` | Engagement Project UUID |
| `EngagementProjectName` |  | |  | `text` | `CHAR(40)` | Customer Project Name |
| `EngmntProjNameUprCase` |  | |  | `textu` | `CHAR(40)` | Short Text(Upper case) |
| `EngagementProjectType` |  | |  | `cast(EngagementProject.mp_type as /cpd/eng_mp_type preserving type )` | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectStage` |  | |  | `mp_stage` | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectServiceOrg` |  | |  | `org_id` | `CHAR(5)` | Service Organization |
| `EngagementProjectCategory` |  | |  | `cast(EngagementProject.project_type as /cpd/eng_proj_type preserving type )` | `CHAR(1)` | Project Type |
| `ProjectStartDate` |  | |  | `start_date` | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  | `end_date` | `DATS(8)` | Commercial Project: End Date |
| `ProjectVisibility` |  | |  | `confidential` | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectManager` |  | |  | `proj_manager_id` | `NUMC(8)` |  |
| `ProjectManagerWorkAgreement` |  | |  | `proj_manager_id` | `NUMC(8)` |  |
| `LastChangeDateTime` |  | |  | `changed_on` | `DEC(15)` | Commercial Project Last Changed On |
| `LastChangedByUser` |  | |  | `changed_by` | `CHAR(12)` | Changed By |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `created_on` | `DEC(15)` | Created On |
| `CostCenter` |  | |  | `cost_center` | `CHAR(20)` | Organization Unit Key |
| `ProfitCenter` |  | |  | `profit_center` | `CHAR(10)` | Profit Center |
| `Customer` |  | |  | `customer` | `CHAR(10)` | Customer Number |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `TimePostingIsRestricted` |  | |  | `restrict_time_posting` | `CHAR(1)` | Restrict Unstaffed Posting |
| `RestrictedTimePosting` |  | |  | `restrict_time_posting` | `CHAR(1)` | Restrict Unstaffed Posting |
| `ProjectBillingIsUsed` |  | |  | `use_project_billing` | `CHAR(1)` | Project Invoicing Solution |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `_EngagementProjFinancialPlan` | | ✓ | | | | |
| `_PersonWorkAgreementDet` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_EngagementProjectStage` | | ✓ | | | | |
| `_EngagementProjectItem` | | ✓ | | | | |
| `_EngagementProjectServiceOrg` | | ✓ | | | | |
| `_UserInvlmnt` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProjFinancialPlan` | `I_EngagementProjFinancialPlan` | [1..1] |
| `_PersonWorkAgreementDet` | `I_PersnWrkAgreementDet` | [0..*] |
| `_Employment` | `I_Employment` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_EngagementProjectStage` | `I_EngagementProjectStage` | [0..1] |
| `_EngagementProjectItem` | `I_EngagementProjectItem` | [0..*] |
| `_EngagementProjectServiceOrg` | `I_EngagementProjectSrvcOrg` | [0..1] |
| `_Extension` | `E_CustomerProject` | [1..1] |
| `_UserInvlmnt` | `I_EngmntProjWithUserInvlmnt` | [1..1] |
| `_PersonWorkAgreement` | `I_PersonWorkAgreement` | [0..*] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IENGMNTPROJ',
  preserveKey: true,
  compiler.compareFilter: true
}
@AccessControl: {
  authorizationCheck: #CHECK,
  privilegedAssociations: [ '_EngagementProjFinancialPlan' ],
  personalData: {
    blockingIndicator: [ '_PersonWorkAgreementDet._BusinessPartner.IsBusinessPurposeCompleted', '_Customer.IsBusinessPurposeCompleted' ],
    blocking: #REQUIRED
  }
}
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Engagement Project'
@ObjectModel: {
  representativeKey: 'EngagementProject',
  sapObjectNodeType.name: 'CommercialProject',
  usageType: {
    serviceQuality: #B,
    sizeCategory: #M,
    dataClass: #MIXED
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE]
}
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@VDM: {
//  private: false,
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #BASIC
}
define view I_EngagementProject
  as select from P_EngagementProject as EngagementProject
  //      inner join I_EngmntProjWithUserInvlmnt as B on EngagementProject.db_key = B.ProjectUUID
  association [1..1] to I_EngagementProjFinancialPlan as _EngagementProjFinancialPlan on  $projection.EngagementProjectUUID = _EngagementProjFinancialPlan.EngagementProjectUUID

  association [0..*] to I_PersnWrkAgreementDet        as _PersonWorkAgreementDet      on  $projection.ProjectManager = _PersonWorkAgreementDet.PersonWorkAgreement
  association [0..1] to I_Employment                  as _Employment                  on  $projection.ProjectManager = _Employment.EmploymentInternalID
  // and $projection.ProjectStartDate >= _Employment.StartDate
  //and $projection.ProjectEndDate   <= _Employment.EndDate

  association [0..1] to I_Customer                    as _Customer                    on  $projection.Customer = _Customer.Customer

  association [0..*] to I_CostCenter                  as _CostCenter                  on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                                      and $projection.ControllingArea = _CostCenter.ControllingArea

  association [0..*] to I_ProfitCenter                as _ProfitCenter                on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                                      and $projection.ControllingArea = _ProfitCenter.ControllingArea

  association [0..1] to I_ControllingArea             as _ControllingArea             on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_CompanyCode                 as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_EngagementProjectStage      as _EngagementProjectStage      on  $projection.EngagementProjectStage = _EngagementProjectStage.EngagementProjectStage

  association [0..*] to I_EngagementProjectItem       as _EngagementProjectItem       on  $projection.EngagementProjectUUID = _EngagementProjectItem.EngagementProjectUUID

  association [0..1] to I_EngagementProjectSrvcOrg    as _EngagementProjectServiceOrg on  $projection.EngagementProjectServiceOrg = _EngagementProjectServiceOrg.EngagementProjectServiceOrg

  association [1..1] to E_CustomerProject             as _Extension                   on  EngagementProject.mp_id = _Extension.CustomerProject

  association [1..1] to I_EngmntProjWithUserInvlmnt   as _UserInvlmnt                 on  $projection.EngagementProjectUUID = _UserInvlmnt.ProjectUUID

  // Association to I_PersonWorkAgreement ( Released CDS View by HCM. Used for EOP Authorization Check )

  association [0..*] to I_PersonWorkAgreement         as _PersonWorkAgreement         on  $projection.ProjectManager = _PersonWorkAgreement.PersonWorkAgreement
  association [0..1] to I_PersonWorkAgreement_1       as _PersonWorkAgreement_1       on  $projection.ProjectManager = _PersonWorkAgreement_1.PersonWorkAgreement
{
       @ObjectModel.text.element: 'EngagementProjectName'
  key  cast(EngagementProject.mp_id  as /cpd/eng_mp_id preserving type )           as EngagementProject,
       cast(EngagementProject.db_key as /cpd/eng_db_key preserving type )          as EngagementProjectUUID,
       @Semantics.text: true
       EngagementProject.text                                                      as EngagementProjectName,
       @Semantics.text : true
       EngagementProject.textu                                                     as EngmntProjNameUprCase,
       cast(EngagementProject.mp_type as /cpd/eng_mp_type  preserving type )       as EngagementProjectType,
       @ObjectModel.foreignKey.association: '_EngagementProjectStage'
       EngagementProject.mp_stage                                                  as EngagementProjectStage,
       //--[ GENERATED:012:GlBfhyJl7jY4oBIOE}WCZW
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_EngmntProjSrvcOrgStdVH',
                      element: 'EngagementProjectServiceOrg' }
         }]
       // ]--GENERATED
       @ObjectModel.foreignKey.association: '_EngagementProjectServiceOrg'
       EngagementProject.org_id                                                    as EngagementProjectServiceOrg,
       cast(EngagementProject.project_type as /cpd/eng_proj_type preserving type ) as EngagementProjectCategory,
       EngagementProject.start_date                                                as ProjectStartDate,
       EngagementProject.end_date                                                  as ProjectEndDate,
       EngagementProject.confidential                                              as ProjectVisibility,

       @VDM.lifecycle.status: #DEPRECATED
       @VDM.lifecycle.successor: 'ProjectManagerWorkAgreement'
       EngagementProject.proj_manager_id                                           as ProjectManager,
       EngagementProject.proj_manager_id                                           as ProjectManagerWorkAgreement,
       @Semantics.dateTime:true
       @Semantics.systemDateTime.lastChangedAt:true
       EngagementProject.changed_on                                                as LastChangeDateTime,
       EngagementProject.changed_by                                                as LastChangedByUser,
       EngagementProject.created_by                                                as CreatedByUser,
       @Semantics.dateTime:true
       @Semantics.systemDateTime.createdAt:true
       EngagementProject.created_on                                                as CreationDateTime,
       //--[ GENERATED:012:GlBfhyJl7jY4oBIOE}WCZW
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_CostCenterStdVH',
                      element: 'CostCenter' },
           additionalBinding: [{ localElement: 'ControllingArea',
                                 element: 'ControllingArea' }]
         }]
       // ]--GENERATED
       @ObjectModel.foreignKey.association: '_CostCenter'
       EngagementProject.cost_center                                               as CostCenter,
       //--[ GENERATED:012:GlBfhyJl7jY4oBIOE}WCZW
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_ProfitCenterStdVH',
                      element: 'ProfitCenter' },
           additionalBinding: [{ localElement: 'ControllingArea',
                                 element: 'ControllingArea' }]
         }]
       // ]--GENERATED
       @ObjectModel.foreignKey.association: '_ProfitCenter'
       EngagementProject.profit_center                                             as ProfitCenter,
       //--[ GENERATED:012:GlBfhyJl7jY4oBIOE}WCZW
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_Customer_VH',
                      element: 'Customer' }
         }]
       // ]--GENERATED
       @ObjectModel.foreignKey.association: '_Customer'
       EngagementProject.customer                                                  as Customer,
       @ObjectModel.foreignKey.association: '_ControllingArea'
       EngagementProject.ControllingArea                                           as ControllingArea,
       //--[ GENERATED:012:GlBfhyJl7jY4oBIOE}WCZW
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_CompanyCodeStdVH',
                      element: 'CompanyCode' }
         }]
       // ]--GENERATED
       @ObjectModel.foreignKey.association: '_CompanyCode'
       EngagementProject.CompanyCode                                               as CompanyCode,

       // Y: if time posting without staffing is allowed else N
       @VDM.lifecycle.status: #DEPRECATED
       @VDM.lifecycle.successor: 'RestrictedTimePosting'
       EngagementProject.restrict_time_posting                                     as TimePostingIsRestricted,

       EngagementProject.restrict_time_posting                                     as RestrictedTimePosting,

       //If Use New Project Billing: 'X'
       //else: '' (blank)
       @Semantics.booleanIndicator:true
       EngagementProject.use_project_billing                                       as ProjectBillingIsUsed,
       EngagementProject.ProjectProfileCode,

       //       @Consumption.hidden: true
       //       @Semantics.booleanIndicator: true
       ////       _UserInvlmnt.IsMyProject,
       //       B.IsMyProject,

       /* Associations */
       @API.element: {
         successor: '_PersonWorkAgreement_1',
         releaseState: #DEPRECATED
       }
       @VDM.lifecycle: {
         successor: '_PersonWorkAgreement_1',
         status: #DEPRECATED
       }
       _PersonWorkAgreement,
       _PersonWorkAgreement_1,
       _PersonWorkAgreementDet,
       _Customer,
       _ControllingArea,
       _CompanyCode,
       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true //CE2111 - Fix Association join condition in analytical model
       _CostCenter,
       _ProfitCenter,
       _EngagementProjFinancialPlan,
       _EngagementProjectStage,
       _EngagementProjectItem,
       _EngagementProjectServiceOrg,
       _UserInvlmnt,

       @API.element: {
         successor: '_PersonWorkAgreement_1',
         releaseState: #DEPRECATED
       }
       @VDM.lifecycle: {
         successor: '_PersonWorkAgreement_1',
         status: #DEPRECATED
       }
       _Employment


}
```
