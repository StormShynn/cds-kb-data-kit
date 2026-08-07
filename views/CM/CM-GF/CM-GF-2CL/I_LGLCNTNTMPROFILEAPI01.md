---
name: I_LGLCNTNTMPROFILEAPI01
description: Lglcntntmprofileapi 01
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-GF
  - interface-view
  - component:CM-GF-2CL
  - lob:Other
---
# I_LGLCNTNTMPROFILEAPI01

**Lglcntntmprofileapi 01**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LglCntntMProfile` | ✓ | |  |  |
| `_LglCntntMProfileTextAPI01` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LglCntntMProfileTextAPI01` | `I_LglCntntMProfileTextAPI01` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMPROFL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC
@ObjectModel: {
  representativeKey: 'LglCntntMProfile',
  sapObjectNodeType.name: 'LegalProfile',
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

@EndUserText.label: 'Profile'

define view I_LglCntntMProfileAPI01
  as select from I_LglCntntMProfile
  association [0..*] to I_LglCntntMProfileTextAPI01 as _LglCntntMProfileTextAPI01 on $projection.LglCntntMProfile = _LglCntntMProfileTextAPI01.LglCntntMProfile
{
      @ObjectModel.text.association: '_LglCntntMProfileTextAPI01'
  key LglCntntMProfile,

      _LglCntntMProfileTextAPI01
}
```
