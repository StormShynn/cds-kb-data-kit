---
name: I_TRANSPORTATIONORDERTYPET_2
description: "Transportationordertypet 2"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - transport
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORTATIONORDERTYPET_2

**Transportationordertypet 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderType` | ✓ | |  | `cast(type as /scmtms/vdm_tor_type preserving type )` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `TransportationOrderTypeDesc` |  | |  | `cast ( descr as /scmtms/vdm_tor_type_desc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_TransportationOrderType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transportation Order Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TransportationOrderType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_TransportationOrderTypeT_2
  as select from /scmtms/c_tort_t
  association        to parent I_TransportationOrderType_2 as _TransportationOrderType on $projection.TransportationOrderType = _TransportationOrderType.TransportationOrderType
  association [0..1] to I_Language                         as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TransportationOrderType'
  key cast(type as /scmtms/vdm_tor_type preserving type )         as TransportationOrderType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                       as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast ( descr as /scmtms/vdm_tor_type_desc preserving type ) as TransportationOrderTypeDesc,

      /* Associations */
      _TransportationOrderType,
      _Language
}
```
