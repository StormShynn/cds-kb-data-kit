---
name: I_LGLCNTNTMENTITYTYPE
description: Lglcntntmentitytype
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
# I_LGLCNTNTMENTITYTYPE

**Lglcntntmentitytype**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `LglCntntMEntityType` | `LglCntntMEntityType` |
| `_LglCntntMEntityTypeText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LglCntntMEntityTypeText` | `I_LglCntntMEntityTypeText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMENTITYTYP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC
@ObjectModel: {
  representativeKey: 'LglCntntMEntityType',
  sapObjectNodeType.name: 'LegalEntityType',
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

@EndUserText.label: 'Entity Type'

define view I_LglCntntMEntityType
  as select from I_LCMEntityType
  association [0..*] to I_LglCntntMEntityTypeText as _LglCntntMEntityTypeText on $projection.LglCntntMEntityType = _LglCntntMEntityTypeText.LglCntntMEntityType
{
      @ObjectModel.text.association: '_LglCntntMEntityTypeText'
  key LglCntntMEntityType,

      _LglCntntMEntityTypeText
}
```
