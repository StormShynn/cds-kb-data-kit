---
name: I_PROJECTPROFILECODE
description: "Projectprofilecode"
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
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_PROJECTPROFILECODE

**Projectprofilecode**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectProfileCode` | ✓ | |  | `profidproj` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProjectProfileCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'PROJ_PROF_CODE'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
}
@ObjectModel: {
     representativeKey: 'ProjectProfileCode',
     supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION ],     
     usageType: {
        serviceQuality:  #A,
        dataClass:       #CUSTOMIZING,
        sizeCategory:    #S
    },
//CE2202 CODELISTS SONT name for  'ProjectProfileCode'
    sapObjectNodeType.name: 'ProjectProfileCode'
}

@EndUserText.label: 'Project Profile Code'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
//@VDM.lifecycle.contract.type:  #SAP_INTERNAL_API
@Metadata.ignorePropagatedAnnotations:true


define view I_ProjectProfileCode
  as select from tcj41
  association [0..*] to I_ProjectProfileCodeText as _Text on $projection.ProjectProfileCode = _Text.ProjectProfileCode
{

      @ObjectModel.text.association: '_Text'
  key profidproj as ProjectProfileCode,
      _Text // Make association public
};
```
