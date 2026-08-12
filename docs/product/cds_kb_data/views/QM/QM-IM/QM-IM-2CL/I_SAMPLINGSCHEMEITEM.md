---
name: I_SAMPLINGSCHEMEITEM
description: "Samplingschemeitem"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
