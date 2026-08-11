---
name: I_TRDGEXPNDOCSETTLEDTEXT
description: "Trading Expense Document Settled - Text"
app_component: LO-GT-TE
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGEXPNDOCSETTLEDTEXT')/$value
semantic_en: "Trading Expense Document Settled - Text"
semantic_vi: "Trading Expense Document Settled - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "trading"
  - "expense"
  - "document"
  - "settled"
  - "text"
  - "trdg"
  - "expn"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - component:LO-GT-TE
  - document
  - interface-view
  - LO-GT
  - LO-GT-TE
  - lob:logistics general
---
# I_TRDGEXPNDOCSETTLEDTEXT

**Trading Expense Document Settled - Text**

| Property | Value |
|---|---|
| App Component | `LO-GT-TE` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGEXPNDOCSETTLEDTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdgExpnDocSettled` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_exp_document_settled )` | `CHAR(1)` | Trading Expense Document Settled Indicator |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `TrdgExpnDocSettledName` |  | |  | `cast( dd07t.ddtext as wb2_exp_document_settled_txt preserving type )` | `CHAR(60)` | Description of Trading Expense Settlement Indicator |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_TrdgExpnDocSettled` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGEXPNDOCSETTLEDTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGEXPNDOCSETTLEDTEXT')/$value)*

```abap
@EndUserText.label: 'Trading Expense Document Settled - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'TrdgExpnDocSettled',
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
  technicalName: 'IWLFTRDEXPDOCST'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_TrdgExpnDocSettledText
  as select from dd07t

  association        to parent I_TrdgExpnDocSettledCode as _TrdgExpnDocSettled on $projection.TrdgExpnDocSettled = _TrdgExpnDocSettled.TrdgExpnDocSettled
  association [0..1] to I_Language                      as _Language           on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_TrdgExpnDocSettled'
      @ObjectModel.text.element: ['TrdgExpnDocSettledName']
  key cast( dd07t.domvalue_l as wb2_exp_document_settled )                                 as TrdgExpnDocSettled,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                     as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_exp_document_settled_txt preserving type )                 as TrdgExpnDocSettledName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                     as DomainValue,

      /* Associations */
      _TrdgExpnDocSettled,
      _Language
}

where
      dd07t.domname  = 'WB2_EXP_DOCUMENT_SETTLED'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
