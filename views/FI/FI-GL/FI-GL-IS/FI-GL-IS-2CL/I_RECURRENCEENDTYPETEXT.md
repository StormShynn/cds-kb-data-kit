---
name: I_RECURRENCEENDTYPETEXT
description: Recurrenceendtypetext
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_RECURRENCEENDTYPETEXT

**Recurrenceendtypetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `RecurrenceEndType` | `cast ( substring( dd07t.domvalue_l, 1, 1 ) as fac_rjet_end_by_type )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `RecurrenceEndTypeName` | `ddtext` |
| `_RecurrenceEndType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RecurrenceEndType` | `I_RecurrenceEndType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIRECURENDTYPET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Recurrence End Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'RecurrenceEndType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view I_RecurrenceEndTypeText
  as select from dd07t
  association [1..1] to I_RecurrenceEndType as _RecurrenceEndType on $projection.RecurrenceEndType = _RecurrenceEndType.RecurrenceEndType
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{

      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                     as Language,
      @ObjectModel.foreignKey.association: '_RecurrenceEndType'
      @ObjectModel.text.element: ['RecurrenceEndTypeName']
  key cast ( substring( dd07t.domvalue_l, 1, 1 )  as fac_rjet_end_by_type ) as RecurrenceEndType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                      as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      ddtext                                                                as RecurrenceEndTypeName,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                      #TO_COMPOSITION_ROOT]
      _RecurrenceEndType,
      _Language
}
where
      dd07t.domname  = 'FAC_RJET_END_BY_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
