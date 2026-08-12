---
name: I_CACLEARINGRESTRICTIONCODE
description: "Caclearingrestrictioncode"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACLEARINGRESTRICTIONCODE

**Caclearingrestrictioncode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAClearingRestrictionCode` | ✓ | |  | `cast( left( dd07l.domvalue_l,1 ) as augrs_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAClearingRestrictionCodeT` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{ dataCategory: #DIMENSION,
             dataExtraction.enabled: true }

@EndUserText.label: 'Clearing Restriction Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CAClearingRestrictionCode',
                sapObjectNodeType.name: 'ContrAcctgClearingRstrcnCode',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAClearingRestrictionCode
  as select from dd07l

  association [1..*] to I_CAClearingRestrictionCodeT as _Text on $projection.CAClearingRestrictionCode = _Text.CAClearingRestrictionCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l,1 ) as augrs_kk preserving type ) as CAClearingRestrictionCode,

      _Text
}
where
      domname  = 'AUGRS_KK'
  and as4local = 'A'
```
