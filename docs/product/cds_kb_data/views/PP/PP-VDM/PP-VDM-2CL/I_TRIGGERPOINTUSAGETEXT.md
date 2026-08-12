---
name: I_TRIGGERPOINTUSAGETEXT
description: "Triggerpointusagetext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_TRIGGERPOINTUSAGETEXT

**Triggerpointusagetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TriggerPointUsage` | ✓ | |  | `UsageCode` |  |  |
| `Language` | ✓ | |  |  |  |  |
| `TriggerPointUsageName` |  | |  | `UsageCodeName` |  |  |
| `_Language` | | ✓ | | | | |
| `_TriggerPointUsage` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_TriggerPointUsage` | `I_TriggerPointUsage` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ITRGGRPTUSGTEXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'TriggerPointUsage'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Trigger Point Usage - Text'

define view entity I_TriggerPointUsageText
  as select from I_Usagecodetext as txt

  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
  association [1..1] to I_TriggerPointUsage as _TriggerPointUsage on $projection.TriggerPointUsage = _TriggerPointUsage.TriggerPointUsage
{
      @ObjectModel.foreignKey.association: '_TriggerPointUsage'
      @ObjectModel.text.element: ['TriggerPointUsageName']
  key txt.UsageCode     as TriggerPointUsage,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.Language      as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.UsageCodeName as TriggerPointUsageName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _TriggerPointUsage,
      _Language
};
```
