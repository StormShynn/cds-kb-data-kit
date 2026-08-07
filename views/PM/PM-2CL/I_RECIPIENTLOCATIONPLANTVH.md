---
name: I_RECIPIENTLOCATIONPLANTVH
description: Recipientlocationplantvh
app_component: PM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - interface-view
  - value-help
  - plant
  - component:PM-2CL
  - lob:Plant Maintenance
  - bo:Plant
---
# I_RECIPIENTLOCATIONPLANTVH

**Recipientlocationplantvh**

| Property | Value |
|---|---|
| App Component | `PM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RecipientLocationCode` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `RecipientLocationStatus` |  | |  |  |  |  |
| `_RecipientLocationCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RecipientLocationCode` | `I_RecipientLocationCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel.modelingPattern:#NONE
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Recipient Location plant data'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@ObjectModel.representativeKey: 'RecipientLocationCode'
@VDM.viewType:#COMPOSITE
@Search.searchable:true
@ObjectModel.dataCategory: #VALUE_HELP

define view entity I_RecipientLocationPlantVH
  as select from I_RecipientLocationPlant
  association [0..1] to I_RecipientLocationCode as _RecipientLocationCode on $projection.RecipientLocationCode = _RecipientLocationCode.RecipientLocationCode
{

       @Semantics.text: true
       @Search.defaultSearchElement: true
       @Search.ranking: #HIGH
       @Consumption.valueHelpDefault.binding.usage: #FILTER_AND_RESULT
  key  RecipientLocationCode,
       @Consumption.valueHelpDefault.binding.usage: #FILTER_AND_RESULT
  key  Plant,
       _RecipientLocationCode._RecipientLocationText[1: Language = $session.system_language ].RecipientLocationText,
       @UI.hidden: true
       RecipientLocationStatus,
       _RecipientLocationCode
}
where
  RecipientLocationStatus = '1'
```
