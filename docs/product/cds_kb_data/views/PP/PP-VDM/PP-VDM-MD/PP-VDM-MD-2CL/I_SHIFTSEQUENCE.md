---
name: I_SHIFTSEQUENCE
description: "Shiftsequence"
app_component: PP-VDM-MD-2CL
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
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_SHIFTSEQUENCE

**Shiftsequence**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
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
| `ShiftGrouping` | ✓ | |  | `schgrup` |  |  |
| `ShiftSequence` | ✓ | |  | `sprog` |  |  |
| `_ShiftGrouping` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_Text2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ShiftGrouping` | `I_ShiftGrouping` | [1..1] |
| `_Text` | `I_ShiftSequenceText` | [0..*] |
| `_Text2` | `I_ShiftSequenceText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPSHIFTSEQUENCE'
--@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 002}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ShiftSequence'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Shift Sequence Code'
@ObjectModel.sapObjectNodeType.name:'ShiftSequence'
@Analytics.dataExtraction.enabled: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_ShiftSequence
  as select distinct from tc38a as seq
  association [1..1] to I_ShiftGrouping     as _ShiftGrouping on  $projection.ShiftGrouping = _ShiftGrouping.ShiftGrouping
  association [0..*] to I_ShiftSequenceText as _Text          on  $projection.ShiftSequence = _Text.ShiftSequence
  association [0..*] to I_ShiftSequenceText as _Text2         on  $projection.ShiftGrouping = _Text2.ShiftGrouping
                                                              and $projection.ShiftSequence = _Text2.ShiftSequence
{
      @ObjectModel.foreignKey.association: '_ShiftGrouping'
  key seq.schgrup as ShiftGrouping,
      @ObjectModel.text.association: '_Text2'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}    
  key seq.sprog   as ShiftSequence,

      // Associations
      _ShiftGrouping,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Text2'
      _Text,
      _Text2
};
```
