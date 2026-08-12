---
name: I_LGLCNTNTMEXTCNTCTTYPE
description: "Lglcntntmextcntcttype"
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_LGLCNTNTMEXTCNTCTTYPE

**Lglcntntmextcntcttype**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMExtCntctType` | ✓ | |  |  |  |  |
| `_LglCntntMExtCntctTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LglCntntMExtCntctTypeText` | `I_LglCntntMExtCntctTypeText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMEXTCONT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LglCntntMExtCntctType',
  sapObjectNodeType.name: 'LegalExternalContactType',
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

@EndUserText.label: 'External Contact Type'
define view I_LglCntntMExtCntctType
  as select from I_LCMExtContactType
  association [0..*] to I_LglCntntMExtCntctTypeText as _LglCntntMExtCntctTypeText on $projection.LglCntntMExtCntctType = _LglCntntMExtCntctTypeText.LglCntntMExtCntctType
{
      @ObjectModel.text.association: '_LglCntntMExtCntctTypeText'
  key LglCntntMExtCntctType,

      _LglCntntMExtCntctTypeText
}
```
