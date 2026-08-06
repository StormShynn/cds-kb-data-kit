---
name: I_REVERSALREASONVALUEHELP
description: Reversalreasonvaluehelp
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - value-help
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_REVERSALREASONVALUEHELP

**Reversalreasonvaluehelp**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ReversalReason` | `ReversalReason` |
| `_Text` | *Association* |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Reversal Reason'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'ReversalReason',
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                usageType.serviceQuality: #A,
                resultSet.sizeCategory: #XS,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@Search.searchable: true
@Consumption.ranked: true

define view entity I_ReversalReasonValueHelp
  as select from I_ReversalReason

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key ReversalReason,
      _Text
}
```
