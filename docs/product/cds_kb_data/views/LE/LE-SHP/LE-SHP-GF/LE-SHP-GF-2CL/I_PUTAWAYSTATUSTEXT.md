---
name: I_PUTAWAYSTATUSTEXT
description: "Putawaystatustext"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
