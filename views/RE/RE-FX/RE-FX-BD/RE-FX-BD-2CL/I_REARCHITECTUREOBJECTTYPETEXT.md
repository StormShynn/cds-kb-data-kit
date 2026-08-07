---
name: I_REARCHITECTUREOBJECTTYPETEXT
description: Rearchitectureobjecttypetext
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
  - text-view
  - text
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REARCHITECTUREOBJECTTYPETEXT

**Rearchitectureobjecttypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |
| `REArchitectureObjectType` | ✓ | |  | `objtype` |
| `REArchitectureObjectTypeText` |  | |  | `xobtype` |
| `_REArchitectureObjectType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REArchitectureObjectType` | `I_REArchitectureObjectType` | [0..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'RE Architecture Object Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@Analytics:{
  dataExtraction.enabled: true,
  technicalName: 'IREOBOBJTYPT'
 }
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY             ]
@ObjectModel.sapObjectNodeType.name: 'REArchitectureObjectTypeText'
@Search.searchable: true
@ObjectModel.dataCategory:#TEXT
@VDM.viewType: #BASIC
define view entity I_REArchitectureObjectTypeText
  as select from tivobobjtypet
  association [0..1] to I_REArchitectureObjectType as _REArchitectureObjectType on $projection.REArchitectureObjectType = _REArchitectureObjectType.REArchitectureObjectType
  association [1..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language

{
      @Semantics.language:true
  key spras   as Language,
  key objtype as REArchitectureObjectType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW    
      @Semantics.text:true
      xobtype as REArchitectureObjectTypeText,
      _REArchitectureObjectType,
      _Language
}
```
