---
name: I_SAMPLINGSCHEMEITEM
description: "Samplingschemeitem"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - item-level
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_SAMPLINGSCHEMEITEM

**Samplingschemeitem**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SamplingScheme` | ✓ | |  | `stprplan` |  |  |
| `SmplgSchmItemSequentialNumber` | ✓ | |  | `zaehlpos` |  |  |
| `SmplgSchmAccptblQltyLevelPct` |  | |  | `aqlwert` |  |  |
| `_SamplingScheme` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SamplingScheme` | `I_SamplingScheme` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Sampling Scheme Item'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
    modelingPattern: #NONE,
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER }
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_SamplingSchemeItem
  as select from qdpp
  association [1..1] to I_SamplingScheme as _SamplingScheme on $projection.SamplingScheme = _SamplingScheme.SamplingScheme
{
  @ObjectModel.foreignKey.association: '_SamplingScheme'
  key stprplan as SamplingScheme,
  key zaehlpos as SmplgSchmItemSequentialNumber,
      aqlwert  as SmplgSchmAccptblQltyLevelPct,

      /* Associations */
      _SamplingScheme
}
```
