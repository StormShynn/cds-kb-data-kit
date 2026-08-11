---
name: I_SRVCPARTSSEMANTICST
description: "TSDM Mapping Semantic - Text"
app_component: SCM-S4H-MD-PR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCPARTSSEMANTICST')/$value
semantic_en: "TSDM Mapping Semantic - Text"
semantic_vi: "TSDM Mapping Semantic - Text — CDS view giao diện dựa trên TSDM Mapping Semantic - Text."
keywords:
  - "tsdm"
  - "mapping"
  - "semantic"
  - "text"
  - "language"
  - "semantics"
tags:
  - SCM
  - bo:salesorganization
  - component:SCM-S4H-MD-PR-2CL
  - interface-view
  - SCM-S4H
  - SCM-S4H-MD
  - SCM-S4H-MD-PR
  - SCM-S4H-MD-PR-2CL
---
# I_SRVCPARTSSEMANTICST

**TSDM Mapping Semantic - Text**

| Property | Value |
|---|---|
| App Component | `SCM-S4H-MD-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCPARTSSEMANTICST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( semkeyt.langu as spras preserving type )` | `LANG(1)` | Language Key |
| `SCMSemantics` | ✓ | |  | `cast( semkeyt.sem as /scmb/prm_sem )` | `CHAR(30)` | TSDM Mapping: Semantics |
| `SCMSemanticsText` |  | |  | `sem_text` | `CHAR(40)` | TSDM Mapping: Text for Semantic |
| `_SrvcPartsSemantics` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcPartsSemantics` | `I_SrvcPartsSemantics` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCPARTSSEMANTICST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCPARTSSEMANTICST')/$value)*

```abap
@ClientHandling.algorithm:             #SESSION_VARIABLE
@ObjectModel.dataCategory:             #TEXT
@ObjectModel.representativeKey:        'SCMSemantics'
@ObjectModel.usageType.dataClass:      #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:   #S
@ObjectModel.supportedCapabilities:    #LANGUAGE_DEPENDENT_TEXT
@EndUserText.label:                    'TSDM Mapping Semantic - Text'
@VDM.viewType:                         #BASIC
@AccessControl.authorizationCheck:     #NOT_REQUIRED
@AbapCatalog.sqlViewName:              'ISPSEMANTICST'
@AbapCatalog.compiler.compareFilter:   true
@AbapCatalog.preserveKey:              true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable:                    true

define view I_SrvcPartsSemanticsT
  as select from /scmb/semkeyt as semkeyt

  association [0..1] to I_SrvcPartsSemantics as _SrvcPartsSemantics on $projection.SCMSemantics = _SrvcPartsSemantics.SCMSemantics
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key cast( semkeyt.langu as spras preserving type ) as Language,

      @ObjectModel.foreignKey.association: '_SrvcPartsSemantics'
      @ObjectModel.text.element: ['SCMSemanticsText']
  key cast( semkeyt.sem as /scmb/prm_sem )  as SCMSemantics,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      sem_text                                            as SCMSemanticsText,

      //Associations
      _SrvcPartsSemantics,
      _Language
}
```
