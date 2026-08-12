---
name: I_REOBJECTASSIGNMENTTYPE
description: "Reobjectassignmenttype"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REOBJECTASSIGNMENTTYPE

**Reobjectassignmenttype**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REObjectAssignmentType` | ✓ | |  | `objasstype` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REObjectAssignmentTypeText` | [0..*] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREOBJASTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Object Assignment Type'
@Analytics:{
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'REObjectAssignmentType',
  semanticKey: ['REObjectAssignmentType'],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateObjectAssignmentType'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define view entity I_REObjectAssignmentType
  as select from tivbdobjasstype
  association [0..*] to I_REObjectAssignmentTypeText as _Text on $projection.REObjectAssignmentType = _Text.REObjectAssignmentType

{
      @ObjectModel.text.association: '_Text'
  key objasstype as REObjectAssignmentType,

      _Text
}
```
