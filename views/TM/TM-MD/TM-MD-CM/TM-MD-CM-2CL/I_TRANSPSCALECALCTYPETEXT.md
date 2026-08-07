---
name: I_TRANSPSCALECALCTYPETEXT
description: "Transpscalecalctypetext"
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
  - text-view
  - text
  - component:TM-MD-CM-2CL
  - lob:Other
---
# I_TRANSPSCALECALCTYPETEXT

**Transpscalecalctypetext**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationCalculationType` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/tcm_calc_type preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspCalculationTypeName` |  | |  | `cast(ddtext as /scmtms/vdm_tcm_calc_type_name preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TransportationCalculationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics.technicalName: 'ITSCALECALTYPTXT'
@EndUserText:   {label: 'Transportation Calculation Type - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TransportationCalculationType',
                 dataCategory:       #TEXT,
                 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE]}
@Search.searchable: true
@VDM:           {viewType:                #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspScaleCalcTypeText
  as select from dd07t
  association        to parent I_TranspScaleCalcType as _TransportationCalculationType on $projection.TransportationCalculationType = _TransportationCalculationType.TransportationCalculationType
  association [1..1] to I_Language                   as _Language                      on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TransportationCalculationType'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/tcm_calc_type preserving type) as TransportationCalculationType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                 as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_tcm_calc_type_name preserving type)             as TranspCalculationTypeName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                           as DomainValue,

      /* Associations */
      _TransportationCalculationType,
      _Language
}
where
      domname  = '/SCMTMS/TCM_CALC_TYPE'
  and as4local = 'A';
```
