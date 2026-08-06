---
name: I_TRANSPSCALETYPETEXT_2
description: Transpscaletypetext 2
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
# I_TRANSPSCALETYPETEXT_2

**Transpscaletypetext 2**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationScaleType` | `cast(substring(domvalue_l, 1, 1) as /scmtms/scatyp preserving type)` |
| key `Language` | `ddlanguage` |
| `TransportationScaleTypeName` | `cast(ddtext as /scmtms/vdm_scale_type_name preserving type)` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_Language` | *Association* |
| `_TransportationScaleType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics.technicalName: 'ITSCALETYPTXT'
@EndUserText:   {label: 'Transportation Scale Type - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TransportationScaleType',
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

define view entity I_TranspScaleTypeText_2
  as select from dd07t
  association        to parent I_TransportationScaleType_2 as _TransportationScaleType on $projection.TransportationScaleType = _TransportationScaleType.TransportationScaleType
  association [1..1] to I_Language        as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TransportationScaleType'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/scatyp preserving type) as TransportationScaleType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                          as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_scale_type_name preserving type)         as TransportationScaleTypeName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                    as DomainValue,

      /* Associations */
      _TransportationScaleType,
      _Language
}
where
      domname  = '/SCMTMS/SCATYP'
  and as4local = 'A';
```
