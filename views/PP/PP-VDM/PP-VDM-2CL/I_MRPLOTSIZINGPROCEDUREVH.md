---
name: I_MRPLOTSIZINGPROCEDUREVH
description: Mrplotsizingprocedurevh
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - value-help
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPLOTSIZINGPROCEDUREVH

**Mrplotsizingprocedurevh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialLotSizingProcedure` | ✓ | |  |  |  |  |
| `LotSizingProcedureType` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.technicalName: 'ILOTSIZEPROCDVH'
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'MaterialLotSizingProcedure'
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'MRP Lot Sizing Procedure'

define view entity I_MRPLotSizingProcedureVH
  as select from I_MRPLotSizingProcedure
{
      // Key
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key MaterialLotSizingProcedure,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      LotSizingProcedureType,

      // Associations
      _Text
};
```
