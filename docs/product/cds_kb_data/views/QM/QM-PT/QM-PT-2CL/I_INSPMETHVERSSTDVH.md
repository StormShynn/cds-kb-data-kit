---
name: I_INSPMETHVERSSTDVH
description: "Inspmethversstdvh"
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
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPMETHVERSSTDVH

**Inspmethversstdvh**

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
| `InspectionMethodPlant` | ✓ | |  |  |  |  |
| `InspectionMethod` | ✓ | |  |  |  |  |
| `InspectionMethodVersion` | ✓ | |  |  |  |  |
| `InspectionMethodStatus` |  | |  |  |  |  |
| `QltyMstrDataAuthorizationGroup` |  | |  |  |  |  |
| `InspectionMethodValidFromDate` |  | |  |  |  |  |
| `_InspectionMethodPlant` | | ✓ | | | | |
| `_InspectionMethod` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:003:GFBfhyK17jU{x0YpWBss2W
@AbapCatalog.sqlViewName: 'IIMV__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'InspectionMethodVersion'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_INSPECTIONMETHOD']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Inspection Method Version'
@Search.searchable: true
@Consumption.ranked: true

define view I_InspMethVersStdVH as select from I_InspectionMethodVersion {
  @ObjectModel.foreignKey.association: '_InspectionMethodPlant'
  key InspectionMethodPlant,
  @ObjectModel.foreignKey.association: '_InspectionMethod'
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  key InspectionMethod,
  @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key InspectionMethodVersion,

  @Consumption.hidden: true
  InspectionMethodStatus,
  @Consumption.hidden: true
  QltyMstrDataAuthorizationGroup,
  @Semantics.businessDate.from: true
  InspectionMethodValidFromDate,

  @Consumption.hidden: true
  _InspectionMethodPlant,
  @Consumption.hidden: true
  _InspectionMethod
}
```
