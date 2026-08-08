---
name: I_PRJBLGELMENTRSRCETYPETEXT
description: "Prjblgelmentrsrcetypetext"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - text-view
  - text
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_PRJBLGELMENTRSRCETYPETEXT

**Prjblgelmentrsrcetypetext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ProjBillgElmntEntrSourceType` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbee_sourceid preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PrjBlgElmEntrSrceTypeText` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProjBillgElmntEntrSourceType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.technicalName: 'IPBRBILLGSRCTYPETXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project billing element entry source type - Text'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'ProjBillgElmntEntrSrcTypeTxt'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
}

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ProjBillgElmntEntrSourceType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_PrjBlgElmEntrSrceTypeText as select from dd07t
  association        to parent I_ProjBillgElmntEntrSourceType as _ProjBillgElmntEntrSourceType on $projection.ProjBillgElmntEntrSourceType = _ProjBillgElmntEntrSourceType.ProjBillgElmntEntrSourceType
  association [0..1] to I_Language                            as _Language                     on $projection.Language                     = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
      key cast( dd07t.ddlanguage as spras preserving type )                as Language,
    
      @ObjectModel.foreignKey.association: '_ProjBillgElmntEntrSourceType'
      @ObjectModel.text.element: ['PrjBlgElmEntrSrceTypeText']
      key cast( substring( domvalue_l, 1, 1 ) as pbee_sourceid preserving type ) as ProjBillgElmntEntrSourceType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                 as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                                                           as PrjBlgElmEntrSrceTypeText,

      _ProjBillgElmntEntrSourceType,
      _Language

}
where
      domname  = 'PRFLCAT'
      and as4local = 'A'
```
