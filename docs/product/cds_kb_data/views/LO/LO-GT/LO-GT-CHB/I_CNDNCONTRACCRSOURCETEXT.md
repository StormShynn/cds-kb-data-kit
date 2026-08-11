---
name: I_CNDNCONTRACCRSOURCETEXT
description: "This CDS view provides the prerequisites for answering questions about condition contract accrual source. The following values are maintained: 1 Business Volume 2 Delta Accruals 3 Settlement"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRSOURCETEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering questions about condition contract accrual source. The following values are maintained: 1 Business Volume 2 Delta Accruals 3 Settlement"
semantic_vi: "Condition Contract Accrual Source - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "condition"
  - "contract"
  - "accrual"
  - "source"
  - "text"
  - "cndn"
  - "contr"
  - "accr"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:plant
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - bo:salesorder
---
# I_CNDNCONTRACCRSOURCETEXT

**This CDS view provides the prerequisites for answering questions about condition contract accrual source. The following values are maintained: 1 Business Volume 2 Delta Accruals 3 Settlement**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRSOURCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrAccrSource` | ✓ | |  | `cast(dd07t.domvalue_l as wb2_accruals_source )` | `CHAR(1)` | Source of Accruals |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrAccrSourceName` |  | |  | `cast( dd07t.ddtext as wb2_accruals_source_txt preserving type )` | `CHAR(60)` | Description of Source of Accurals Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrAccrSource` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRSOURCETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRSOURCETEXT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Accrual Source - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrAccrSource',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWCBACCRSOURCET'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrAccrSourceText
  as select from dd07t

  association        to parent I_CndnContrAccrSource as _CndnContrAccrSource on $projection.CndnContrAccrSource = _CndnContrAccrSource.CndnContrAccrSource
  association [0..1] to I_Language                   as _Language            on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrAccrSource'
      @ObjectModel.text.element: ['CndnContrAccrSourceName']
  key cast(dd07t.domvalue_l as wb2_accruals_source )                    as CndnContrAccrSource,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                  as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_accruals_source_txt preserving type )                 as CndnContrAccrSourceName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                as DomainValue,

      /* Associations */
      _CndnContrAccrSource,
      _Language
}

where
      dd07t.domname  = 'WB2_ACCRUALS_SOURCE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
