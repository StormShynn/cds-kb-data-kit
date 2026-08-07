---
name: I_ASSETACCTDETERMINATION
description: Assetacctdetermination
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
  - bo:Asset
---
# I_ASSETACCTDETERMINATION

**Assetacctdetermination**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetAccountDetermination` | ✓ | |  | `gl_account_det` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssetAcctDeterminationText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETACCTDET', preserveKey: true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Asset Account Determination'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetAccountDetermination',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE] 
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetAcctDetermination
  as select from faac_acctdet0

  association [0..*] to I_AssetAcctDeterminationText as _Text on $projection.AssetAccountDetermination = _Text.AssetAccountDetermination

{
      @ObjectModel.text.association: '_Text'
  key gl_account_det as AssetAccountDetermination,
      _Text
}
```
