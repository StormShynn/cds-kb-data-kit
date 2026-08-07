---
name: I_WORKDAYRULETEXT
description: Workdayruletext
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
# I_WORKDAYRULETEXT

**Workdayruletext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `WorkDayRule` | ✓ | |  | `cast(substring(txt.domvalue_l, 1, 1) as workdayrule preserving type)` |
| `Language` | ✓ | |  | `cast(txt.ddlanguage as spras preserving type)` |
| `WorkDayRuleName` |  | |  | `cast(txt.ddtext as workdayrulename preserving type)` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPWRKDAYRULETXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'WorkDayRule'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Ent Rsce Capacity WorkDay Rule - Text'
@ObjectModel.sapObjectNodeType.name: 'EntRsceCapacityWorkDayRuleText'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_WorkDayRuleText
  as select from dd07t as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'WorkDayRuleName'
  key cast(substring(txt.domvalue_l, 1, 1) as workdayrule preserving type) as WorkDayRule,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.ddlanguage as spras preserving type)                        as Language,
      @Semantics.text: true
      cast(txt.ddtext as workdayrulename preserving type)                  as WorkDayRuleName,

      // Associations
      _Language
}
  where txt.domname = 'KAPFABTAG'
    and txt.as4local = 'A'
    and txt.as4vers  = '0000';
```
