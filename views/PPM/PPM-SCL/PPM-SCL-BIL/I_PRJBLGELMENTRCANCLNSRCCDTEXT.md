---
name: I_PRJBLGELMENTRCANCLNSRCCDTEXT
description: "Prjblgelmentrcanclnsrccdtext"
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
# I_PRJBLGELMENTRCANCLNSRCCDTEXT

**Prjblgelmentrcanclnsrccdtext**

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
| `PrjBlgElmEntrCanclnSrceCode` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbee_cancellingsrc preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PrjBlgElmEntrCanclnSrcCdText` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_PrjBlgElmEntrCanclnSrceCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.technicalName: 'IPBRBILLGCANCLNSRCTYPETXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Source which cancels PBEE - Text'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'PrjBlgElmEntrCanclnSrcCodeText'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
}

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'PrjBlgElmEntrCanclnSrceCode'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_PrjBlgElmEntrCanclnSrcCdText as select from dd07t
  association        to parent I_PrjBlgElmEntrCanclnSrceCode  as _PrjBlgElmEntrCanclnSrceCode  on $projection.PrjBlgElmEntrCanclnSrceCode = _PrjBlgElmEntrCanclnSrceCode.PrjBlgElmEntrCanclnSrceCode
  association [0..1] to I_Language                            as _Language                     on $projection.Language                     = _Language.Language
{
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                as Language,

      @ObjectModel.foreignKey.association: '_PrjBlgElmEntrCanclnSrceCode'
      @ObjectModel.text.element: ['PrjBlgElmEntrCanclnSrceCode']
      key cast( substring( domvalue_l, 1, 1 ) as pbee_cancellingsrc preserving type ) as PrjBlgElmEntrCanclnSrceCode,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                 as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                                                           as PrjBlgElmEntrCanclnSrcCdText,

      _PrjBlgElmEntrCanclnSrceCode,
      _Language

}
where
      domname  = 'PBEE_CANCELLINGSRC'
      and as4local = 'A'
```
