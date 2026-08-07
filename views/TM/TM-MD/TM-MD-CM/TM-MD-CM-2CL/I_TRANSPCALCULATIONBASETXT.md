---
name: I_TRANSPCALCULATIONBASETXT
description: Transpcalculationbasetxt
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - component:TM-MD-CM-2CL
  - lob:Other
---
# I_TRANSPCALCULATIONBASETXT

**Transpcalculationbasetxt**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationCalculationBase` | ✓ | |  | `cast(calc_base as /scmtms/vdm_tcm_calc_base preserving type)` |
| `Language` | ✓ | |  | `language` |
| `TranspCalculationBaseText` |  | |  | `cast(description as /scmtms/vdm_tcm_calc_base_text preserving type)` |
| `_Language` | | ✓ | | |
| `_TranspCalculationBase` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics.technicalName: 'ITCALCBASETXT'
@EndUserText:   {label: 'Transportation Calculation Base - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TransportationCalculationBase',
                 dataCategory:       #TEXT,
                 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE]}
@Search.searchable: true
@VDM:           {viewType:                #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspCalculationBaseTxt
  as select from /scmtms/c_cbaset
  association        to parent I_TranspCalculationBase as _TranspCalculationBase on $projection.TransportationCalculationBase = _TranspCalculationBase.TransportationCalculationBase
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language
{
        @ObjectModel.foreignKey.association: '_TranspCalculationBase'
  key   cast(calc_base as /scmtms/vdm_tcm_calc_base preserving type)        as TransportationCalculationBase,
        @Semantics.language: true
        @ObjectModel.foreignKey.association: '_Language'
  key   language                                                            as Language,
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #LOW
        @Semantics.text: true
        cast(description as /scmtms/vdm_tcm_calc_base_text preserving type) as TranspCalculationBaseText,

        /* Associations */
        _TranspCalculationBase,
        _Language
}
```
