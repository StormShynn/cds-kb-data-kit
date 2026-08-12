---
name: I_ENTERPRISEPROJECTSTATUSAREA
description: "Enterpriseprojectstatusarea"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - project
  - status
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTERPRISEPROJECTSTATUSAREA

**Enterpriseprojectstatusarea**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatusAreaUUID` | ✓ | |  | `guid` |  |  |
| `ProjectUUID` |  | |  | `project_guid` |  |  |
| `StatusArea` |  | |  | `statusarea` |  |  |
| `StatusAreaStatus` |  | |  | `status` |  |  |
| `StatusTrend` |  | |  | `trend` |  |  |
| `StatusAreaNote` |  | |  | `comments` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `CreationDateTime` |  | |  | `created_on` |  |  |
| `LastChangedByUser` |  | |  | `changed_by` |  |  |
| `LastChangeDateTime` |  | |  | `changed_on` |  |  |
| `_Area` | | ✓ | | | | |
| `_AreaStatus` | | ✓ | | | | |
| `_AreaTrend` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Area` | `I_EntProjectStatusAreaCode` | [1] |
| `_AreaStatus` | `I_EntProjStatusAreaStatus` | [1] |
| `_AreaTrend` | `I_EntProjStatusAreaTrend` | [1] |
| `_EnterpriseProject` | `I_EnterpriseProject` | [1] |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}

@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture.automatic: true
  } ,  
  technicalName: 'IEntProjectStatusArea'
} 

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel: {
    representativeKey: 'StatusAreaUUID',
    sapObjectNodeType.name: 'StatusArea',    
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    usageType: {
      serviceQuality:  #A,
      dataClass:       #TRANSACTIONAL,
      sizeCategory:    #M
    }
}

@VDM: {
  viewType: #BASIC ,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Enterprise Project Status Area'
define view entity I_EnterpriseProjectStatusArea as select from /s4ppm/stat_area as StatusAreaData

// associations for fixed values and texts 
association [1] to I_EntProjectStatusAreaCode as _Area        on $projection.StatusArea         = _Area.StatusArea  

association [1] to I_EntProjStatusAreaStatus  as _AreaStatus  on $projection.StatusAreaStatus   = _AreaStatus.StatusAreaStatus 

association [1] to I_EntProjStatusAreaTrend   as _AreaTrend   on $projection.StatusTrend        = _AreaTrend.StatusTrend 

// BO composition associations 
association [1] to I_EnterpriseProject        as _EnterpriseProject on $projection.ProjectUUID  = _EnterpriseProject.ProjectUUID  

{

  key guid          as StatusAreaUUID, 
      project_guid  as ProjectUUID, 
      @ObjectModel.foreignKey.association: '_Area' 
      statusarea    as StatusArea,
      @ObjectModel.foreignKey.association: '_AreaStatus' 
      status        as StatusAreaStatus,  
      @ObjectModel.foreignKey.association: '_AreaTrend' 
      trend         as StatusTrend,
      comments      as StatusAreaNote,
      @Semantics.user.createdBy: true
      created_by                                                    as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      created_on                                                    as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      changed_by                                                    as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      changed_on                                                    as LastChangeDateTime,
      
      _Area,
      _AreaStatus,
      _AreaTrend,
      
      _EnterpriseProject
      
}
```
