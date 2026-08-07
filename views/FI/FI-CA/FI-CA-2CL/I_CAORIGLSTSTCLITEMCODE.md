---
name: I_CAORIGLSTSTCLITEMCODE
description: Caoriglststclitemcode
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
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAORIGLSTSTCLITEMCODE

**Caoriglststclitemcode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAStatisticalCodeOfOriginItem` | ✓ | |  | `cast( left( dd07l.domvalue_l,1 ) as astkz_kk preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAOriglStstclItemCodeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Original Statistical Item Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAStatisticalCodeOfOriginItem',
                sapObjectNodeType.name: 'ContrAcctgOriglStstclItemCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAOriglStstclItemCode
  as select from dd07l

  association [1..*] to I_CAOriglStstclItemCodeText as _Text on $projection.CAStatisticalCodeOfOriginItem = _Text.CAStatisticalCodeOfOriginItem

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l,1 ) as astkz_kk preserving type ) as CAStatisticalCodeOfOriginItem,

      _Text
}
where
      domname  = 'ASTKZ_KK'
  and as4local = 'A'
```
