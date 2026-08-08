---
name: I_RAPERFOBLGNSTARTDATETYPETEXT
description: "Raperfoblgnstartdatetypetext"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - text-view
  - text
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RAPERFOBLGNSTARTDATETYPETEXT

**Raperfoblgnstartdatetypetext**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(dd07t.ddlanguage as spras preserving type)` |  |  |
| `PerfOblgnStartDateType` | ✓ | |  | `cast(dd07t.domvalue_l as farr_start_date_type)` |  |  |
| `PerfOblgnStartDateTypeText` |  | |  | `ddtext` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_RAStartDateType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRASTDTYPETEXT'

@EndUserText.label: 'Start Date Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'PerfOblgnStartDateType'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_RAPerfOblgnStartDateTypeText
  as select from dd07t

  association        to parent I_RAPerfOblgnStartDateType as _RAStartDateType
    on $projection.PerfOblgnStartDateType = _RAStartDateType.PerfOblgnStartDateType

  association [0..1] to I_Language                        as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(dd07t.ddlanguage as spras preserving type) as Language,

      @ObjectModel.foreignKey.association: '_RAStartDateType'
      @ObjectModel.text.element: [ 'PerfOblgnStartDateTypeText' ]
  key cast(dd07t.domvalue_l as farr_start_date_type)  as PerfOblgnStartDateType,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      @Semantics.text: true
      dd07t.ddtext                                    as PerfOblgnStartDateTypeText,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                as DomainValue,

      _RAStartDateType,
      _Language

}
where dd07t.domname  = 'FARR_START_DATE_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
