---
name: I_REARCHITECTUREOBJECTTYPE
description: Rearchitectureobjecttype
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
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
# I_REARCHITECTUREOBJECTTYPE

**Rearchitectureobjecttype**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REArchitectureObjectType` | ✓ | |  | `objtype` |
| `REArchitectureObjectCategory` |  | |  | `objcategory` |
| `SemanticObject` |  | |  | `semanticobject` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REArchitectureObjectTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Architecture Object Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}

@ObjectModel.representativeKey: 'REArchitectureObjectType'
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'REArchitectureObjectType'
@Analytics:{
  dataExtraction.enabled: true,
  technicalName: 'IREOBOBJTYP'
 }
define view entity I_REArchitectureObjectType
  as select from tivobobjtype
  association [0..*] to I_REArchitectureObjectTypeText as _Text on $projection.REArchitectureObjectType = _Text.REArchitectureObjectType

{
  key objtype        as REArchitectureObjectType,
      objcategory    as REArchitectureObjectCategory,
      semanticobject as SemanticObject,

      // Association
      _Text

}
```
