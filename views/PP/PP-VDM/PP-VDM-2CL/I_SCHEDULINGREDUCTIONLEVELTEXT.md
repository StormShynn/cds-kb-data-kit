---
name: I_SCHEDULINGREDUCTIONLEVELTEXT
description: Schedulingreductionleveltext
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
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
# I_SCHEDULINGREDUCTIONLEVELTEXT

**Schedulingreductionleveltext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |
| `SchedulingReductionLevel` | ✓ | |  | `cast(substring(t.domvalue_l, 1, 1) as redkz preserving type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `SchedulingReductionLevelName` |  | |  | `cast(t.ddtext as redkz_txt preserving type)` |
| `_Language` | | ✓ | | |
| `_SchedulingReductionLevel` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ISCHEDREDNLVLTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'SchedulingReductionLevel'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Scheduling Reduction Level - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SchedulingReductionLevelText
  as select from dd07t as t
  association to parent I_SchedulingReductionLevel as _SchedulingReductionLevel on $projection.SchedulingReductionLevel = _SchedulingReductionLevel.SchedulingReductionLevel
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                  as Language,
      @ObjectModel.foreignKey.association: '_SchedulingReductionLevel'
      @ObjectModel.text.element: ['SchedulingReductionLevelName']
  key cast(substring(t.domvalue_l, 1, 1) as redkz preserving type) as SchedulingReductionLevel,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                 as DomainValue,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(t.ddtext as redkz_txt preserving type)                  as SchedulingReductionLevelName,

      // Associations
      _SchedulingReductionLevel,
      _Language
}
  where t.domname = 'REDKZ'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
