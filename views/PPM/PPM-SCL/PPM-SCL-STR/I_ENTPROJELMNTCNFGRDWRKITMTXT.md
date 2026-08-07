---
name: I_ENTPROJELMNTCNFGRDWRKITMTXT
description: Entprojelmntcnfgrdwrkitmtxt
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
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
# I_ENTPROJELMNTCNFGRDWRKITMTXT

**Entprojelmntcnfgrdwrkitmtxt**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EntProjElmntWorkItem` | ✓ | |  | `workitem_id` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `EntProjElmntCnfgrdWrkItmName` |  | |  | `workitem_name` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IEnPrjCnfgCnfgrdWrkItmTxt'
@ObjectModel.representativeKey: 'EntProjElmntWorkItem'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.dataCategory:#TEXT
@ObjectModel.sapObjectNodeType.name:'EnPrjElmConfiguredWorkItemText'
@EndUserText.label: 'Enterprise Proj Cnfgrd Work Item - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
}
define view entity I_EntProjElmntCnfgrdWrkItmTxt
  as select from /cpd/fc_workitem
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key workitem_id   as EntProjElmntWorkItem,

      @Semantics.language: true
  key spras         as Language,

      @Semantics.text : true
      workitem_name as EntProjElmntCnfgrdWrkItmName,

      _Language
}
```
