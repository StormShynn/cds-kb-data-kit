---
name: I_TRANSPORDCREATIONTYPETEXT
description: Transpordcreationtypetext
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - text-view
  - text
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDCREATIONTYPETEXT

**Transpordcreationtypetext**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationOrderCrtnType` | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_creation_type preserving type)` |
| key `Language` | `ddlanguage` |
| `TranspOrderCrtnTypeDesc` | `cast(ddtext as /scmtms/vdm_tor_crea_type_desc preserving type)` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_Language` | *Association* |
| `_TranspOrdCreationType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transp Order Creation Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TransportationOrderCrtnType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_TranspOrdCreationTypeText
  as select from dd07t

  association        to parent I_TranspOrdCreationType as _TranspOrdCreationType on $projection.TransportationOrderCrtnType = _TranspOrdCreationType.TransportationOrderCrtnType
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_TranspOrdCreationType'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_creation_type preserving type) as TransportationOrderCrtnType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                     as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_tor_crea_type_desc preserving type)                 as TranspOrderCrtnTypeDesc,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                               as DomainValue,

      /* Associations */
      _TranspOrdCreationType,
      _Language
}
where
      domname  = '/SCMTMS/TOR_CREATION_TYPE'
  and as4local = 'A';
```
