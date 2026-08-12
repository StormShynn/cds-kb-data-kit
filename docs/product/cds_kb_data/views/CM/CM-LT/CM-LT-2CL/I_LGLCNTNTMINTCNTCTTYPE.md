---
name: I_LGLCNTNTMINTCNTCTTYPE
description: "Lglcntntmintcntcttype"
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_LGLCNTNTMINTCNTCTTYPE

**Lglcntntmintcntcttype**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMIntCntctType` | ✓ | |  |  |  |  |
| `_LglCntntMIntCntctTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LglCntntMIntCntctTypeText` | `I_LglCntntMIntCntctTypeText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMINTCONT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LglCntntMIntCntctType',
  sapObjectNodeType.name: 'LegalInternalContactType',
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

@EndUserText.label: 'Internal Contact Type'
define view I_LglCntntMIntCntctType
  as select from I_LCMIntContactType
  association [0..*] to I_LglCntntMIntCntctTypeText as _LglCntntMIntCntctTypeText on $projection.LglCntntMIntCntctType = _LglCntntMIntCntctTypeText.LglCntntMIntCntctType
{
      @ObjectModel.text.association: '_LglCntntMIntCntctTypeText'
  key LglCntntMIntCntctType,

      _LglCntntMIntCntctTypeText
}
```
