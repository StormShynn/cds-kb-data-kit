---
name: I_LGLCNTNTMRELSHPTYPE
description: Lglcntntmrelshptype
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - interface-view
  - component:CM-LT-2CL
  - lob:Other
---
# I_LGLCNTNTMRELSHPTYPE

**Lglcntntmrelshptype**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LglCntntMRelshpType` | ✓ | |  |  |
| `_LglCntntMRelshpTypeText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LglCntntMRelshpTypeText` | `I_LglCntntMRelshpTypeText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMRELTYP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LglCntntMRelshpType',
  sapObjectNodeType.name: 'LegalRelationshipType',
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S,
  usageType.dataClass:  #CUSTOMIZING
}

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@ObjectModel.modelingPattern: #NONE

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@EndUserText.label: 'Relationship Type'
define view I_LglCntntMRelshpType
  as select from I_LglCntntMRltnType
  association [0..*] to I_LglCntntMRelshpTypeText as _LglCntntMRelshpTypeText on $projection.LglCntntMRelshpType = _LglCntntMRelshpTypeText.LglCntntMRelshpType
{
      @ObjectModel.text.association: '_LglCntntMRelshpTypeText'
  key LglCntntMRelshpType,

      _LglCntntMRelshpTypeText
}
```
