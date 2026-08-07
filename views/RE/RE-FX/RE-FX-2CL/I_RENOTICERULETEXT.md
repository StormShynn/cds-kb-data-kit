---
name: I_RENOTICERULETEXT
description: Renoticeruletext
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - text-view
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_RENOTICERULETEXT

**Renoticeruletext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `RENoticeRule` | ✓ | |  | `ntrule` |  |  |
| `RENoticeRuleDescription` |  | |  | `xntrule` |  |  |
| `_RENoticeRule` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RENoticeRule` | `I_RENoticeRule` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRENTRULET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Notice Rules - Text'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'RENoticeRule'
@ObjectModel.semanticKey: 'RENoticeRule'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

define view I_RENoticeRuleText
  as select from tivtmntrulet
  association [0..1] to I_RENoticeRule as _RENoticeRule on $projection.RENoticeRule = _RENoticeRule.RENoticeRule
  association [0..1] to I_Language     as _Language     on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras   as Language,
      @ObjectModel.foreignKey.association: '_RENoticeRule'
  key ntrule  as RENoticeRule,
      @Semantics.text: true
      xntrule as RENoticeRuleDescription,


      _Language,
      _RENoticeRule

}
```
