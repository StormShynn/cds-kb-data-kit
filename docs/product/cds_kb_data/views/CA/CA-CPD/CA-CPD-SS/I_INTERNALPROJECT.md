---
name: I_INTERNALPROJECT
description: "This CDS view provides the prerequisites for answering the following business questions: How many internal projects are being executed in my company? What are the internal projects assigned to a project manager? Which internal projects are at a certain stage in the project life cycle? Which internal projects are assigned to certain accounting objects such as cost centers or profit centers? When do my internal projects begin and end?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERNALPROJECT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many internal projects are being executed in my company? What are the internal projects assigned to a project manager? Which internal projects are at a certain stage in the project life cycle? Which internal projects are assigned to certain accounting objects such as cost centers or profit centers? When do my internal projects begin and end?"
semantic_vi: "Internal Project — CDS view tổng hợp dựa trên I_EngagementProject."
keywords:
  - "internal"
  - "project"
  - "name"
  - "engagement"
  - "type"
  - "service"
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
# I_INTERNALPROJECT

**This CDS view provides the prerequisites for answering the following business questions: How many internal projects are being executed in my company? What are the internal projects assigned to a project manager? Which internal projects are at a certain stage in the project life cycle? Which internal projects are assigned to certain accounting objects such as cost centers or profit centers? When do my internal projects begin and end?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERNALPROJECT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalProject` | ✓ | |  | `EngagementProject` | `CHAR(40)` | Engagement Project ID |
| `InternalProjectUUID` |  | |  | `cast( EngagementProject.EngagementProjectUUID as /cpd/eng_db_key preserving type )` | `RAW(16)` | Engagement Project UUID |
| `InternalProjectName` |  | |  | `EngagementProjectName` | `CHAR(40)` | Customer Project Name |
| `EngagementProjectType` |  | |  |  | `CHAR(4)` | Engagement Project Type |
| `EngagementProjectServiceOrg` |  | |  |  | `CHAR(5)` | Service Organization |
| `EngagementProjectStage` |  | |  |  | `CHAR(4)` | Commercial Project: Stage |
| `EngagementProjectCategory` |  | |  |  | `CHAR(1)` | Project Type |
| `ProjectStartDate` |  | |  |  | `DATS(8)` | Commercial Project: Start Date |
| `ProjectEndDate` |  | |  |  | `DATS(8)` | Commercial Project: End Date |
| `ProjectVisibility` |  | |  |  | `CHAR(1)` | Confidential Indicator for Commercial Project |
| `ProjectManager` |  | |  |  | `NUMC(8)` |  |
| `ProjectManagerWorkAgreement` |  | |  |  | `NUMC(8)` |  |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Commercial Project Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(20)` | Organization Unit Key |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling area for the project |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company code for the project |
| `_EngagementProjFinancialPlan` | | ✓ | | | | |
| `_PersonWorkAgreementDet` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_EngagementProjectStage` | | ✓ | | | | |
| `_EngagementProjectItem` | | ✓ | | | | |
| `_EngagementProjectServiceOrg` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_UserInvlmnt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProjFinancialPlan` | `I_EngagementProjFinancialPlan` | [1..1] |
| `_PersonWorkAgreementDet` | `I_PersnWrkAgreementDet` | [0..*] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_EngagementProjectStage` | `I_EngagementProjectStage` | [0..1] |
| `_EngagementProjectItem` | `I_EngagementProjectItem` | [0..*] |
| `_EngagementProjectServiceOrg` | `I_EngagementProjectSrvcOrg` | [0..1] |
| `_Extension` | `E_Internalproject` | [0..1] |
| `_PersonWorkAgreement` | `I_PersonWorkAgreement` | [0..*] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_UserInvlmnt` | `I_EngmntProjWithUserInvlmnt` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERNALPROJECT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERNALPROJECT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IINTERNALPROJ',
//  preserveKey: true,
  compiler.compareFilter: true
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData: {
    blockingIndicator: [ '_PersonWorkAgreementDet._BusinessPartner.IsBusinessPurposeCompleted' ],
    blocking: #REQUIRED
  }
}
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Internal Project'
@ObjectModel: {
  representativeKey: 'InternalProject',
  sapObjectNodeType.name: 'CommercialProject',    
  usageType: {
    serviceQuality: #C,
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
  viewType: #COMPOSITE
}
define view I_InternalProject
  as select from I_EngagementProject as EngagementProject


  association [1..1] to I_EngagementProjFinancialPlan as _EngagementProjFinancialPlan on  $projection.InternalProjectUUID = _EngagementProjFinancialPlan.EngagementProjectUUID
  association [0..*] to I_PersnWrkAgreementDet        as _PersonWorkAgreementDet      on  $projection.ProjectManager = _PersonWorkAgreementDet.PersonWorkAgreement
  //and $projection.ProjectStartDate >= _Employment.StartDate
  //and $projection.ProjectEndDate   <= _Employment.EndDate
  association [0..*] to I_CostCenter                  as _CostCenter                  on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                                      and $projection.ControllingArea = _CostCenter.ControllingArea

  association [0..*] to I_ProfitCenter                as _ProfitCenter                on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                                      and $projection.ControllingArea = _ProfitCenter.ControllingArea
  association [0..1] to I_EngagementProjectStage      as _EngagementProjectStage      on  $projection.EngagementProjectStage = _EngagementProjectStage.EngagementProjectStage
  association [0..*] to I_EngagementProjectItem       as _EngagementProjectItem       on  $projection.InternalProjectUUID = _EngagementProjectItem.EngagementProjectUUID
  association [0..1] to I_EngagementProjectSrvcOrg    as _EngagementProjectServiceOrg on  $projection.EngagementProjectServiceOrg = _EngagementProjectServiceOrg.EngagementProjectServiceOrg
  association [0..1] to E_Internalproject             as _Extension                   on  $projection.InternalProjectUUID = _Extension.InternalProjectUUID
  // Association to I_PersonWorkAgreement ( Released CDS View by HCM. Used for EOP Authorization Check )

  association [0..*] to I_PersonWorkAgreement         as _PersonWorkAgreement         on  $projection.ProjectManager = _PersonWorkAgreement.PersonWorkAgreement
  association [0..1] to I_PersonWorkAgreement_1       as _PersonWorkAgreement_1       on  $projection.ProjectManager = _PersonWorkAgreement_1.PersonWorkAgreement
  
  association [1..1] to I_EngmntProjWithUserInvlmnt   as _UserInvlmnt                 on $projection.InternalProjectUUID = _UserInvlmnt.ProjectUUID
{
  key       EngagementProject.EngagementProject                                                    as             InternalProject,
            cast( EngagementProject.EngagementProjectUUID  as /cpd/eng_db_key preserving type )    as             InternalProjectUUID,
            EngagementProject.EngagementProjectName                                                as             InternalProjectName,
            EngagementProject.EngagementProjectType                                                as             EngagementProjectType,
            //--[ GENERATED:012:GlBfhyJl7jY4oCtwOMwjv0
            @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_EngmntProjSrvcOrgStdVH',
                           element: 'EngagementProjectServiceOrg' }
              }]
            // ]--GENERATED
            EngagementProject.EngagementProjectServiceOrg                                          as             EngagementProjectServiceOrg,
            EngagementProject.EngagementProjectStage                                               as             EngagementProjectStage,
            EngagementProject.EngagementProjectCategory                                            as             EngagementProjectCategory,
            EngagementProject.ProjectStartDate                                                     as             ProjectStartDate,
            EngagementProject.ProjectEndDate                                                       as             ProjectEndDate,
            EngagementProject.ProjectVisibility                                                    as             ProjectVisibility,
            
            @VDM.lifecycle.status: #DEPRECATED
            @VDM.lifecycle.successor: 'ProjectManagerWorkAgreement'
            EngagementProject.ProjectManager                                                       as             ProjectManager,
            EngagementProject.ProjectManagerWorkAgreement                                          as             ProjectManagerWorkAgreement,
            @Semantics.dateTime:true
            @Semantics.systemDateTime.lastChangedAt:true
            EngagementProject.LastChangeDateTime                                                   as             LastChangeDateTime,
            EngagementProject.LastChangedByUser                                                    as             LastChangedByUser,
            //--[ GENERATED:012:GlBfhyJl7jY4oCtwOMwjv0
            @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_ProfitCenterStdVH',
                           element: 'ProfitCenter' },
                additionalBinding: [{ localElement: 'ControllingArea',
                                      element: 'ControllingArea' }]
              }]
            // ]--GENERATED
            EngagementProject.ProfitCenter                                                         as             ProfitCenter,
            //--[ GENERATED:012:GlBfhyJl7jY4oCtwOMwjv0
            @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_CostCenterStdVH',
                           element: 'CostCenter' },
                additionalBinding: [{ localElement: 'ControllingArea',
                                      element: 'ControllingArea' }]
              }]
            // ]--GENERATED
            EngagementProject.CostCenter                                                           as             CostCenter,
            EngagementProject.ControllingArea                                                      as             ControllingArea,
            
            @Consumption.hidden: true
            EngagementProject.ProjectProfileCode,
            
            @Consumption.hidden: true
            EngagementProject.CompanyCode, 
//            @Consumption.hidden: true
//            @Semantics.booleanIndicator: true
//            EngagementProject.IsMyProject,
            
            /* Associations */
            _PersonWorkAgreementDet,
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
            @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true //CE2111 - Fix Association join condition in analytical model
            _CostCenter,
            _EngagementProjFinancialPlan,
            _EngagementProjectStage,
            _EngagementProjectServiceOrg,
            _EngagementProjectItem,
            _ProfitCenter,
            _UserInvlmnt
              
}
where
  EngagementProject.EngagementProjectCategory = 'I'
```
