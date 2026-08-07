---
name: I_TRANSPSCALEBASETEXT_2
description: "Transpscalebasetext 2"
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
  - text
  - component:TM-MD-CM-2CL
  - lob:Other
---
# I_TRANSPSCALEBASETEXT_2

**Transpscalebasetext 2**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationScaleBase` | ✓ | |  | `scalebase` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TransportationScaleBaseText` |  | |  | `scbasetext` |  |  |
| `_Language` | | ✓ | | | | |
| `_TransportationScaleBase` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics.technicalName: 'ITSCALEBASETEXT'
@EndUserText:   {label: 'Transportation Scale Base - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TransportationScaleBase',
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
                 
define view entity I_TranspScaleBaseText_2
  as select from /scmtms/c_scbast
  association        to parent I_TransportationScaleBase_2 as _TransportationScaleBase on $projection.TransportationScaleBase = _TransportationScaleBase.TransportationScaleBase
  association [0..1] to I_Language                         as _Language                on $projection.Language = _Language.Language
{
       @ObjectModel.foreignKey.association: '_TransportationScaleBase'
       @ObjectModel.text.element: ['TransportationScaleBaseText']
  key  scalebase  as TransportationScaleBase,
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
  key  spras      as Language,
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #LOW
       @Semantics.text: true
       scbasetext as TransportationScaleBaseText,

       /* Associations */
       _TransportationScaleBase,
       _Language
}
```
