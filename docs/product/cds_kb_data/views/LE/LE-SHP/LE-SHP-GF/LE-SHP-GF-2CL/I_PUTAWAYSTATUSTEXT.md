---
name: I_PUTAWAYSTATUSTEXT
description: "Putawaystatustext"
app_component: LE-SHP-GF-2CL
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
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - text
  - status
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_PUTAWAYSTATUSTEXT

**Putawaystatustext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
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
| `PutawayStatus` | ✓ | |  | `cast(substring(dd07t.domvalue_l,1,1) as le_putaway_status preserving type )` |  |  |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type )` |  |  |
| `PutawayStatusName` |  | |  | `ddtext` |  |  |
| `_PutawayStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PutawayStatus` | `I_PutawayStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILEKOSTKT'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#NOT_REQUIRED
@EndUserText.label: 'Putaway Status - Text'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'PutawayStatus'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Search.searchable: true


/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_PutawayStatusText
  as select from dd07t
  association [0..1] to I_PutawayStatus as _PutawayStatus on $projection.PutawayStatus = _PutawayStatus.PutawayStatus
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_PutawayStatus'
      @ObjectModel.text.element: ['PutawayStatusName']
  key cast(substring(dd07t.domvalue_l,1,1) as le_putaway_status preserving type ) as PutawayStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(ddlanguage as spras preserving type )                                  as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                                                                      as PutawayStatusName,

      _PutawayStatus,
      _Language
}

where
      dd07t.domname  = 'LE_PUTAWAY_STATUS'
  and dd07t.as4local = 'A'
```
