---
name: I_REVNACCTGCHANGETYPETEXT
description: Revnacctgchangetypetext
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
# I_REVNACCTGCHANGETYPETEXT

**Revnacctgchangetypetext**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(dd07t.ddlanguage as spras preserving type)` |
| `RAPerfOblgnChangeType` | ✓ | |  | `cast(dd07t.domvalue_l as farr_change_type)` |
| `RAPerfOblgnChangeTypeName` |  | |  | `ddtext` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Language` | | ✓ | | |
| `_RAChangeType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRACHANGETYPETXT'

@EndUserText.label: 'Change Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'RAPerfOblgnChangeType'

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
define view entity I_RevnAcctgChangeTypeText
  as select from dd07t

  association        to parent I_RevnAcctgChangeType as _RAChangeType
    on $projection.RAPerfOblgnChangeType = _RAChangeType.RAPerfOblgnChangeType

  association [0..1] to I_Language                   as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(dd07t.ddlanguage as spras preserving type) as Language,

      @ObjectModel.foreignKey.association: '_RAChangeType'
      @ObjectModel.text.element: [ 'RAPerfOblgnChangeTypeName' ]
  key cast(dd07t.domvalue_l as farr_change_type)      as RAPerfOblgnChangeType,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      @Semantics.text: true
      dd07t.ddtext                                    as RAPerfOblgnChangeTypeName,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                as DomainValue,

      _RAChangeType,
      _Language

}
where dd07t.domname  = 'FARR_CHANGE_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
