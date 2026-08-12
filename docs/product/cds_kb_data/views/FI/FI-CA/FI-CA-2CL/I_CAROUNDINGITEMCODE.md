---
name: I_CAROUNDINGITEMCODE
description: "Caroundingitemcode"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAROUNDINGITEMCODE

**Caroundingitemcode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CARoundingItemCode` | ✓ | |  | `cast( left( domvalue_l, 1 ) as rndps_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CARoundingItemCodeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Rounding Item Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CARoundingItemCode',
                sapObjectNodeType.name: 'ContrAcctgRoundingItemCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CARoundingItemCode
  as select from dd07l

  association [1..*] to I_CARoundingItemCodeText as _Text on $projection.CARoundingItemCode = _Text.CARoundingItemCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( domvalue_l, 1 ) as rndps_kk preserving type ) as CARoundingItemCode,

      _Text
}
where
      domname  = 'RNDPS_KK'
  and as4local = 'A'
```
