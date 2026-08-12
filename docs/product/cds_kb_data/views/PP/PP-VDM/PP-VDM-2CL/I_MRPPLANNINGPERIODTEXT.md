---
name: I_MRPPLANNINGPERIODTEXT
description: "Mrpplanningperiodtext"
app_component: PP-VDM-2CL
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
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPPLANNINGPERIODTEXT

**Mrpplanningperiodtext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
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
| `MRPPlant` | ✓ | |  | `werks` |  |  |
| `MRPPlanningCalendar` | ✓ | |  | `mrppp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MRPPlanningCalendarName` |  | |  | `cast(txt.pptxt as vdm_pptxt preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Calendar` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Calendar` | `I_MRPPlanningPeriod` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMRPPLNGPERTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'MRPPlanningCalendar'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Planning Period - Text'

define view I_MRPPlanningPeriodText
  as select from t439h as txt
  association [1..1] to I_Plant             as _Plant    on  $projection.MRPPlant = _Plant.Plant
  association [0..1] to I_Language          as _Language on  $projection.Language = _Language.Language
  association [1..1] to I_MRPPlanningPeriod as _Calendar on  $projection.MRPPlant            = _Calendar.MRPPlant
                                                         and $projection.MRPPlanningCalendar = _Calendar.MRPPlanningCalendar
{
      @ObjectModel.foreignKey.association: '_Plant'
  key txt.werks as MRPPlant,
      @ObjectModel.foreignKey.association: '_Calendar'
      @ObjectModel.text.element: ['MRPPlanningCalendarName']
  key txt.mrppp as MRPPlanningCalendar,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.pptxt as vdm_pptxt preserving type) as MRPPlanningCalendarName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Calendar,
      _Plant,
      _Language
};
```
