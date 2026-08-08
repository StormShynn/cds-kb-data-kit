---
name: I_CADFLTCLEARINGRSTRCNCODE
description: "Cadfltclearingrstrcncode"
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
# I_CADFLTCLEARINGRSTRCNCODE

**Cadfltclearingrstrcncode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADefaultClearingRstrcnCode` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as augrs_def_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADfltClearingRstrcnCodeT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Default Clearing Restriction'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADefaultClearingRstrcnCode',
                sapObjectNodeType.name: 'ContrAcctgDfltClrgRstrcnCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }
 
@VDM.viewType: #BASIC

define view entity I_CADfltClearingRstrcnCode
  as select from dd07l

  association [1..*] to I_CADfltClearingRstrcnCodeT as _Text on $projection.CADefaultClearingRstrcnCode = _Text.CADefaultClearingRstrcnCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as augrs_def_kk preserving type ) as CADefaultClearingRstrcnCode,

      _Text
}
where
      domname  = 'AUGRS_DEF_KK'
  and as4local = 'A'
```
