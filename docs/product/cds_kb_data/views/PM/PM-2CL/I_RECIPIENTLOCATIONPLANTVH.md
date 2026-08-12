---
name: I_RECIPIENTLOCATIONPLANTVH
description: "Recipientlocationplantvh"
app_component: PM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
