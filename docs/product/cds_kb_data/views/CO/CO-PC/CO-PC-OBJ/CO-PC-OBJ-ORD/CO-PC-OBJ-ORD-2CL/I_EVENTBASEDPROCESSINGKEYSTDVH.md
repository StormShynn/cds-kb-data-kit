---
name: I_EVENTBASEDPROCESSINGKEYSTDVH
description: "Eventbasedprocessingkeystdvh"
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - value-help
  - standard-value-help
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
---
# I_EVENTBASEDPROCESSINGKEYSTDVH

**Eventbasedprocessingkeystdvh**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventBasedProcessingKey` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IEVTBSDPROCGKVH'
@Analytics.technicalName: 'IEVTBSDPROCGKVH'
//@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
//@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'EventBasedProcessingKey'
@ObjectModel.supportedCapabilities: [#SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Event-Based Posting Processing Key'
define view entity I_EventBasedProcessingKeyStdVH as select from I_EventBasedProcessingKey
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key EventBasedProcessingKey,
      
      _Text
}
```
