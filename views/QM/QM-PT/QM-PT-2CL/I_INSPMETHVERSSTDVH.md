---
name: I_INSPMETHVERSSTDVH
description: Inspmethversstdvh
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
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
