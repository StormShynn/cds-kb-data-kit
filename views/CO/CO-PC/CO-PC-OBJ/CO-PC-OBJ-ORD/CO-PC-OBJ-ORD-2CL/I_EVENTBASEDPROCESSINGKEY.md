---
name: I_EVENTBASEDPROCESSINGKEY
description: Eventbasedprocessingkey
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
---
# I_EVENTBASEDPROCESSINGKEY

**Eventbasedprocessingkey**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EventBasedProcessingKey` | ✓ | |  | `ebw_key` |
| `EventBasedWIPCalculationMethod` |  | |  | `ebw_method` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EventBasedProcessingKeyText` | [0..*] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IEVTBSDPROCGKEY'
@Analytics.technicalName: 'IEVTBSDPROCGKEY'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey:true
//@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
//@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Event-Based Posting Processing Key'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'EventBasedProcessingKey'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
define view entity I_EventBasedProcessingKey
  as select from fcoc_ebw_method
  association [0..*] to I_EventBasedProcessingKeyText as _Text on $projection.EventBasedProcessingKey = _Text.EventBasedProcessingKey
{
      @ObjectModel.text.association: '_Text'
  key ebw_key    as EventBasedProcessingKey,
      ebw_method as EventBasedWIPCalculationMethod,

      _Text
}
```
