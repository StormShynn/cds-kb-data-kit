---
name: I_ENTPROJELMNTBLOCKFUNC_2
description: "Entprojelmntblockfunc 2"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJELMNTBLOCKFUNC_2

**Entprojelmntblockfunc 2**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EntProjElementFunctionUUID` | ✓ | |  | `guid` |  |  |
| `ProjectUUID` |  | |  | `project_guid` |  |  |
| `ProjectElementUUID` |  | |  | `parent_object_guid` |  |  |
| `EntProjElementFunctionID` |  | |  | `function_id` |  |  |
| `EntProjElementFunctionIsBlkd` |  | |  | `is_blocked` |  |  |
| `_EnterpriseProject` | | ✓ | | | | |
| `_EnterpriseProjectElement` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Blocked Function of Ent Project Element'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  sapObjectNodeType.name: 'EntProjectElementBlockFunction'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture.automatic: true
  }
}

define view entity I_EntProjElmntBlockFunc_2 as select from entprobj_blkfunc as BlockFunction
  association of many to exact one I_EnterpriseProject as _EnterpriseProject on $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
  association of many to exact one I_EnterpriseProjectElement as _EnterpriseProjectElement on $projection.ProjectElementUUID = _EnterpriseProjectElement.ProjectElementUUID
{
  key BlockFunction.guid as EntProjElementFunctionUUID,
      BlockFunction.project_guid as ProjectUUID,
      BlockFunction.parent_object_guid as ProjectElementUUID,
      BlockFunction.function_id as EntProjElementFunctionID,
      @Semantics.booleanIndicator: true
      BlockFunction.is_blocked as EntProjElementFunctionIsBlkd,

  _EnterpriseProject,
  _EnterpriseProjectElement
}
```
