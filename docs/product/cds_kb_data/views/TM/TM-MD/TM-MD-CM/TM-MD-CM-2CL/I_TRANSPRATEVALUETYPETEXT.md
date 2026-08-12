---
name: I_TRANSPRATEVALUETYPETEXT
description: "Transpratevaluetypetext"
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_TRANSPRATEVALUETYPETEXT

**Transpratevaluetypetext**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationRateValueType` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/value_indicator preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspRateValueTypeDesc` |  | |  | `cast(ddtext as /scmtms/vdm_rate_val_type_desc preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspValueType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics.technicalName: 'ITVALTYPTXT'
@EndUserText:   {label: 'Transportation Rate Value Type - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TransportationRateValueType',
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

define view entity I_TranspRateValueTypeText
  as select from dd07t
  association        to parent I_TranspRateValueType_2 as _TranspValueType on $projection.TransportationRateValueType = _TranspValueType.TransportationRateValueType
  association [0..1] to I_Language                     as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association:'_TranspValueType'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/value_indicator preserving type) as TransportationRateValueType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                   as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_rate_val_type_desc preserving type)               as TranspRateValueTypeDesc,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                             as DomainValue,

      /* Associations */
      _TranspValueType,
      _Language

}
where
      domname                     =  '/SCMTMS/VALUE_INDICATOR'
  and substring(domvalue_l, 1, 1) <> ' '
```
