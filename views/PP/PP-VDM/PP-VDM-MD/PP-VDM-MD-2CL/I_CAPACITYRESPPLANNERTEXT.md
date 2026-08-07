---
name: I_CAPACITYRESPPLANNERTEXT
description: "Capacityrespplannertext"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_CAPACITYRESPPLANNERTEXT

**Capacityrespplannertext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityResponsiblePlanner` | ✓ | |  | `cast(txt.planr as kapplaner preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.spras as spras preserving type)` |  |  |
| `CapacityResponsiblePlannerName` |  | |  | `cast(txt.txt as kapplanername preserving type)` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPCAPRESPPLNRTX'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'CapacityResponsiblePlanner'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Ent Rsce Cap Responsible Planner - Text'
@ObjectModel.sapObjectNodeType.name: 'EntRsceCapRespPlannerText'

define view I_CapacityRespPlannerText
  as select from tc27t as txt association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'CapacityResponsiblePlannerName'
  key cast(txt.planr as kapplaner preserving type)   as CapacityResponsiblePlanner,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(txt.spras as spras preserving type)       as Language,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.txt as kapplanername preserving type) as CapacityResponsiblePlannerName,

    // Associations
    _Language
};
```
