---
name: I_INSPECTIONSELECTEDSETSTDVH
description: "Inspectionselectedsetstdvh"
app_component: QM-PT-2CL
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
  - QM-PT
  - interface-view
  - value-help
  - standard-value-help
  - inspection
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONSELECTEDSETSTDVH

**Inspectionselectedsetstdvh**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
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
| `SelectedCodeSetPlant` | ✓ | |  |  |  |  |
| `InspectionCatalog` | ✓ | |  |  |  |  |
| `SelectedCodeSet` | ✓ | |  |  |  |  |
| `InspectionSelectedSetStatus` |  | |  |  |  |  |
| `_SelectedCodeSetPlant` | | ✓ | | | | |
| `_InspectionCatalog` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IISS__VH'
@ObjectModel.representativeKey: 'SelectedCodeSet'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Inspection Selected Set'
define view entity I_InspectionSelectedSetStdVH as select from I_InspectionSelectedSet {
  @ObjectModel.foreignKey.association: '_SelectedCodeSetPlant'
  key SelectedCodeSetPlant,
  @ObjectModel.foreignKey.association: '_InspectionCatalog'
  key InspectionCatalog,
  key SelectedCodeSet,

  @Consumption.hidden: true
  InspectionSelectedSetStatus,

  @Consumption.hidden: true
  _SelectedCodeSetPlant,
  @Consumption.hidden: true
  _InspectionCatalog
}
```
