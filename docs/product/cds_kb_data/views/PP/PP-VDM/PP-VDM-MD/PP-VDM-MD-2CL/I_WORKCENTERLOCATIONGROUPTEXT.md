---
name: I_WORKCENTERLOCATIONGROUPTEXT
description: "Work CenterLOCATIONGROUPTEXT"
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
  - text-view
  - work-center
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERLOCATIONGROUPTEXT

**Work CenterLOCATIONGROUPTEXT**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterLocationGroup` | ✓ | |  | `ortgr` |  |  |
| `WorkCenterPlant` | ✓ | |  | `werks` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `WorkCenterLocationGroupName` |  | |  | `txt` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWKCLOCGRPTEXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'WorkCenterLocationGroup'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center Location Group - Text'

define view I_WorkCenterLocationGroupText
  as select from tc28t as txt
  association [1..1] to I_Plant    as _Plant    on $projection.WorkCenterPlant = _Plant.Plant
  association [1..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'WorkCenterLocationGroupName'
  key txt.ortgr as WorkCenterLocationGroup,
      @ObjectModel.foreignKey.association: '_Plant'
  key txt.werks as WorkCenterPlant,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras as Language,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.txt   as WorkCenterLocationGroupName,

      // Associations
      _Plant,
      _Language
};
```
