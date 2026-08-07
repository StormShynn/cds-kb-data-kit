---
name: I_CADUNNINGMASTERDATAORIGIN
description: Cadunningmasterdataorigin
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADUNNINGMASTERDATAORIGIN

**Cadunningmasterdataorigin**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAOriginOfDunningMasterData` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as dunn_par_orig_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADunningMasterDataOriginT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Dunning Master Data Origin'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAOriginOfDunningMasterData',
                sapObjectNodeType.name: 'ContrAcctgDunMasterDataOrigin',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADunningMasterDataOrigin
  as select from dd07l

  association [1..*] to I_CADunningMasterDataOriginT as _Text on $projection.CAOriginOfDunningMasterData = _Text.CAOriginOfDunningMasterData

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as dunn_par_orig_kk preserving type ) as CAOriginOfDunningMasterData,

      _Text
}
where
      domname  = 'DUNN_PAR_ORIG_KK'
  and as4local = 'A'
```
