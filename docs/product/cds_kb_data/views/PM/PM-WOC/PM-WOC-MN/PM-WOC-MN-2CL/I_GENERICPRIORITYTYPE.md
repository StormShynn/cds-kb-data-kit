---
name: I_GENERICPRIORITYTYPE
description: "Genericprioritytype"
app_component: PM-WOC-MN-2CL
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
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_GENERICPRIORITYTYPE

**Genericprioritytype**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
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
| `GenericPriorityType` | ✓ | |  | `artpr` |  |  |
| `_GenericPriorityTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GenericPriorityTypeText` | `I_GenericPriorityTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Generic Priority Type'
@ObjectModel.representativeKey: 'GenericPriorityType'
@Analytics.technicalName: 'IGENERICPRIOTYPE'
@ObjectModel: {
   usageType.serviceQuality: #A,
   usageType.sizeCategory: #S,
   usageType.dataClass: #CUSTOMIZING
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]

define view entity I_GenericPriorityType
  as select from t356a
  association [0..*] to I_GenericPriorityTypeText as _GenericPriorityTypeText on _GenericPriorityTypeText.GenericPriorityType = $projection.GenericPriorityType
{
      @ObjectModel.foreignKey.association: '_GenericPriorityTypeText'
  key t356a.artpr as GenericPriorityType,

      // Propagate association(s)
      _GenericPriorityTypeText
}
```
