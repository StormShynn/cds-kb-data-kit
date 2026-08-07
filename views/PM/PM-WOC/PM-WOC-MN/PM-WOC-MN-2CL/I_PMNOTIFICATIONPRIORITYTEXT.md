---
name: I_PMNOTIFICATIONPRIORITYTEXT
description: Pmnotificationprioritytext
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - text-view
  - text
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_PMNOTIFICATIONPRIORITYTEXT

**Pmnotificationprioritytext**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintPriority` | ✓ | |  | `priok` |  |  |
| `MaintPriorityType` | ✓ | |  | `artpr` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MaintPriorityDesc` |  | |  | `priokx` |  |  |
| `_PMNotificationPriority` | | ✓ | | | | |
| `_PMNotificationPriorityType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PMNotificationPriority` | `I_PMNotificationPriority` | [0..1] |
| `_PMNotificationPriorityType` | `I_PMNotificationPriorityType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Notification Priority - Text'
@VDM.viewType: #BASIC
@Analytics: { dataExtraction : { enabled: true , delta.changeDataCapture.automatic: true } }
@AbapCatalog.sqlViewName: 'IPMNTFPRIOTXT'
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.representativeKey: 'MaintPriority'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT

@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@Search.searchable: true
define view I_PMNotificationPriorityText
  as select from t356_t // T356_T = Priority text
  association [0..1] to I_PMNotificationPriority     as _PMNotificationPriority     on  _PMNotificationPriority.MaintPriority     = $projection.MaintPriority
                                                                                    and _PMNotificationPriority.MaintPriorityType = $projection.MaintPriorityType
  association [0..1] to I_PMNotificationPriorityType as _PMNotificationPriorityType on  $projection.MaintPriorityType = _PMNotificationPriorityType.MaintPriorityType
  association [0..1] to I_Language                   as _Language                   on  _Language.Language = $projection.Language
{

      @ObjectModel.foreignKey.association: '_PMNotificationPriority'
  key t356_t.priok  as MaintPriority,
      @ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
  key t356_t.artpr  as MaintPriorityType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key t356_t.spras  as Language,
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      t356_t.priokx as MaintPriorityDesc,

      // Propagate association
      _PMNotificationPriority,
      _PMNotificationPriorityType,
      _Language
}
```
