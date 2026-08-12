---
name: I_MFGBILLOFOPERATIONSSTDVH
description: "Mfgbillofoperationsstdvh"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - value-help
  - standard-value-help
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_MFGBILLOFOPERATIONSSTDVH

**Mfgbillofoperationsstdvh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  |  |  |
| `BillOfOperationsGroup` | ✓ | |  |  |  |  |
| `BillOfOperationsVariant` | ✓ | |  |  |  |  |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGBOO__VH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BillOfOperationsVariant'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Manufacturing Bill of Operations'
define view I_MfgBillOfOperationsStdVH as select from I_MfgBillOfOperations {
  @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8
  key BillOfOperationsType,
  @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8
  key BillOfOperationsGroup,
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  key BillOfOperationsVariant,

  @Consumption.hidden: true
  _BillOfOperationsType,
  @Consumption.hidden: true
  _BillOfOperationsGroup
}
```
