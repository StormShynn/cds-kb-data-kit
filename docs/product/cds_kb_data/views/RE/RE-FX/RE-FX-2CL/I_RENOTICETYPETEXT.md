---
name: I_RENOTICETYPETEXT
description: "Renoticetypetext"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_RENOTICETYPETEXT

**Renoticetypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `RENoticeType` | ✓ | |  | `cast( dd07t.domvalue_l as retmnttype )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `RENoticeTypeName` |  | |  | `cast( dd07t.ddtext as val_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_RENoticeType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRENTTYPT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Notice Types - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'RENoticeType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
define view I_RENoticeTypeText
  as select from dd07t
  association        to parent I_RENoticeType as _RENoticeType on $projection.RENoticeType = _RENoticeType.RENoticeType
  association [0..1] to I_Language            as _Language     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_RENoticeType'
      @ObjectModel.text.element: ['RENoticeTypeName']
  key cast( dd07t.domvalue_l as retmnttype )            as RENoticeType,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as RENoticeTypeName,
      _RENoticeType,
      _Language
}
where
      dd07t.domname  = 'RETMNTTYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
