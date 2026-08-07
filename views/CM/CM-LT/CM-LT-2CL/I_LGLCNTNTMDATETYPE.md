---
name: I_LGLCNTNTMDATETYPE
description: Lglcntntmdatetype
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
# I_LGLCNTNTMDATETYPE

**Lglcntntmdatetype**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDateType` | ✓ | |  |  |  |  |
| `LglCntntMDateIsPeriod` |  | |  |  |  |  |
| `_LglCntntMDateTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LglCntntMDateTypeText` | `I_LglCntntMDateTypeText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMDATETYP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LglCntntMDateType',
  sapObjectNodeType.name: 'LegalDateType',
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

@EndUserText.label: 'Date Type'
define view I_LglCntntMDateType
  as select from I_LCMDateType
  association [0..*] to I_LglCntntMDateTypeText as _LglCntntMDateTypeText on $projection.LglCntntMDateType = _LglCntntMDateTypeText.LglCntntMDateType    
{
      @ObjectModel.text.association: '_LglCntntMDateTypeText'
  key LglCntntMDateType,
      LglCntntMDateIsPeriod,
      _LglCntntMDateTypeText
}
```
