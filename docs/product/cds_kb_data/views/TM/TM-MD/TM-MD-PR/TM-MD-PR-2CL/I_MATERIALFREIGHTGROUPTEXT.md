---
name: I_MATERIALFREIGHTGROUPTEXT
description: "Materialfreightgrouptext"
app_component: TM-MD-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-PR
  - interface-view
  - text-view
  - material
  - freight
  - text
  - component:TM-MD-PR-2CL
  - lob:Other
  - bo:Material
---
# I_MATERIALFREIGHTGROUPTEXT

**Materialfreightgrouptext**

| Property | Value |
|---|---|
| App Component | `TM-MD-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialFreightGroup` | ✓ | |  | `mfrgr` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MaterialFreightGroupName` |  | |  | `bezei` |  |  |
| `_MaterialFreightGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaterialFreightGroup` | `I_MaterialFreightGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.entityBuffer.definitionAllowed: true
@Analytics.technicalName: 'ILEMATLFRTGRPT'
@EndUserText.label: 'Material Freight Group - Text'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'MaterialFreightGroup'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S 
@Search.searchable:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_MaterialFreightGroupText 
as select from 
tmfgt
association[0..1] to I_MaterialFreightGroup as _MaterialFreightGroup on $projection.MaterialFreightGroup = _MaterialFreightGroup.MaterialFreightGroup
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
    @ObjectModel.foreignKey.association: '_MaterialFreightGroup'
    @ObjectModel.text.element: ['MaterialFreightGroupName']
    key mfrgr as MaterialFreightGroup,   
    @Semantics.language:true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @Semantics.text
    bezei as MaterialFreightGroupName,
    //Associations
    _MaterialFreightGroup,
    _Language
};   

//@ObjectModel.text.element: ['MaterialFreightGroupName'] -> Added
```
