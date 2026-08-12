---
name: I_CNDNDOCSUPLRINVCDLVCOSTCATT
description: "Cndn Doc Supplr Invc Deliv Cost Cat - Text"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCSUPLRINVCDLVCOSTCATT')/$value
semantic_en: "Cndn Doc Supplr Invc Deliv Cost Cat - Text"
semantic_vi: "Cndn Doc Supplr Invc Deliv Cost Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "cndn"
  - "doc"
  - "supplr"
  - "invc"
  - "deliv"
  - "cost"
  - "cat"
  - "text"
  - "suplr"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNDOCSUPLRINVCDLVCOSTCATT

**Cndn Doc Supplr Invc Deliv Cost Cat - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCSUPLRINVCDLVCOSTCATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnDocSuplrInvcDlvCostCat` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_xekbz )` | `CHAR(1)` | Item Category of Supplier Invoice |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `CndnDocSuplrInvcDlvCostCatName` |  | |  | `cast( dd07t.ddtext as wb2_xekbz_text preserving type )` | `CHAR(60)` | Item Category of Supplier Invoice Text |
| `_Language` | | ✓ | | | | |
| `_CndnDocSuplrInvcDlvCostCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCSUPLRINVCDLVCOSTCATT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCSUPLRINVCDLVCOSTCATT')/$value)*

```abap
@EndUserText.label: 'Cndn Doc Supplr Invc Deliv Cost Cat - Text'
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'CndnDocSuplrInvcDlvCostCat',
    modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities:  [ #CDS_MODELING_ASSOCIATION_TARGET,
                              #CDS_MODELING_DATA_SOURCE,
                              #EXTRACTION_DATA_SOURCE,
                              #LANGUAGE_DEPENDENT_TEXT,
                              #SEARCHABLE_ENTITY,
                              #SQL_DATA_SOURCE ],
    usageType: {
      serviceQuality: #A,
      dataClass:      #META,
      sizeCategory:   #S
      }
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Search.searchable: true
@Analytics: {
    dataExtraction.enabled: true,
    technicalName: 'IWB2XEBKZTEXT'
    }
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnDocSuplrInvcDlvCostCatT
  as select from dd07t

  association        to parent I_CndnDocSuplrInvcDlvCostCat as _CndnDocSuplrInvcDlvCostCat on $projection.CndnDocSuplrInvcDlvCostCat = _CndnDocSuplrInvcDlvCostCat.CndnDocSuplrInvcDlvCostCat

  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnDocSuplrInvcDlvCostCat'
      @ObjectModel.text.element: [ 'CndnDocSuplrInvcDlvCostCatName' ]
  key cast( dd07t.domvalue_l as wb2_xekbz )                  as CndnDocSuplrInvcDlvCostCat,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )      as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_xekbz_text preserving type ) as CndnDocSuplrInvcDlvCostCatName,

      /* Associations */
      _CndnDocSuplrInvcDlvCostCat,
      _Language
}
where
      dd07t.domname  = 'WB2_XEKBZ'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
