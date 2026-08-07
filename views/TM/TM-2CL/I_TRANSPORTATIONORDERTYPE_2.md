---
name: I_TRANSPORTATIONORDERTYPE_2
description: Transportationordertype 2
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
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
# I_TRANSPORTATIONORDERTYPE_2

**Transportationordertype 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationOrderType` | ✓ | |  | `cast(type as /scmtms/vdm_tor_type preserving type )` |
| `TransportationOrderCategory` |  | |  | `cast(cat as /scmtms/vdm_tor_category preserving type )` |
| `_TransportationOrderCategory` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationOrderCategory` | `I_TranspOrderCategory_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transportation Order Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'TransportationOrderType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'TransportationOrderType'

define root view entity I_TransportationOrderType_2  as select from /scmtms/c_torty
  composition [0..*] of I_TransportationOrderTypeT_2 as _Text
  association [0..1] to I_TranspOrderCategory_2 as _TransportationOrderCategory on $projection.TransportationOrderCategory = _TransportationOrderCategory.TransportationOrderCategory
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast(type as /scmtms/vdm_tor_type preserving type )    as TransportationOrderType,
      @ObjectModel.foreignKey.association: '_TransportationOrderCategory'
      cast(cat as /scmtms/vdm_tor_category preserving type ) as TransportationOrderCategory,

      /* Associations */
      _Text,
      _TransportationOrderCategory
}
```
