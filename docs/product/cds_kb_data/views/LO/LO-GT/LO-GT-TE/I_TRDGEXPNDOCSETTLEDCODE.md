---
name: I_TRDGEXPNDOCSETTLEDCODE
description: "Trading Expense Document Settled Code"
app_component: LO-GT-TE
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGEXPNDOCSETTLEDCODE')/$value
semantic_en: "Trading Expense Document Settled Code"
semantic_vi: "Trading Expense Document Settled Code — CDS view cơ bản dựa trên dd07l."
keywords:
  - "trading"
  - "expense"
  - "document"
  - "settled"
  - "code"
  - "trdg"
  - "expn"
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
# I_TRDGEXPNDOCSETTLEDCODE

**Trading Expense Document Settled Code**

| Property | Value |
|---|---|
| App Component | `LO-GT-TE` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGEXPNDOCSETTLEDCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdgExpnDocSettled` | ✓ | |  | `cast( dd07l.domvalue_l as wb2_exp_document_settled )` | `CHAR(1)` | Trading Expense Document Settled Indicator |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGEXPNDOCSETTLEDCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGEXPNDOCSETTLEDCODE')/$value)*

```abap
@EndUserText.label: 'Trading Expense Document Settled Code'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'TrdgExpnDocSettled',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET, 
                           #SEARCHABLE_ENTITY, 
                           #VALUE_HELP_PROVIDER],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  resultSet.sizeCategory: #XS
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL, 
  technicalName: 'IWLFTRDEXPDOCS'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_TrdgExpnDocSettledCode
  as select from dd07l

  composition [0..*] of I_TrdgExpnDocSettledText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wb2_exp_document_settled  )                                 as TrdgExpnDocSettled,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                      as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_EXP_DOCUMENT_SETTLED'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
