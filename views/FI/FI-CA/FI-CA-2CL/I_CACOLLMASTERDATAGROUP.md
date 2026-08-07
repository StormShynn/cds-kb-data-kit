---
name: I_CACOLLMASTERDATAGROUP
description: Cacollmasterdatagroup
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
# I_CACOLLMASTERDATAGROUP

**Cacollmasterdatagroup**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CACollectionsMasterDataGroup` | ✓ | |  | `cmgrp` |  |  |
| `CACollMasterDataGroupLevel` |  | |  | `grplvl` |  |  |
| `CAAuthorizationGroup` |  | |  | `begru` |  |  |
| `CAIsUsedForSpcfcMasterDataCat` |  | |  | `xassignmd` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CACollMasterDataGroupText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK

@EndUserText.label: 'Collection Master Data Group'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACollectionsMasterDataGroup',
                sapObjectNodeType.name: 'ContrAcctgCollMasterDataGroup',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACollMasterDataGroup
  as select from tfk041b

  association [0..*] to I_CACollMasterDataGroupText as _Text on $projection.CACollectionsMasterDataGroup = _Text.CACollectionsMasterDataGroup

{
      @ObjectModel.text.association: '_Text'
  key cmgrp     as CACollectionsMasterDataGroup,

      grplvl    as CACollMasterDataGroupLevel,
      begru     as CAAuthorizationGroup,
      xassignmd as CAIsUsedForSpcfcMasterDataCat,

      _Text
}
```
