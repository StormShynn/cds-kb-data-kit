---
name: I_SETTLMTMGMTDOCITEMCANCLDTEXT
description: "This CDS view exposes fixed values of the field Settlement Management Document Item Cancelled. The following fixed values have been maintained: \" \" is Active 1 Completed by Means of Item Cancellation"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCANCLDTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Management Document Item Cancelled. The following fixed values have been maintained: \" \" is Active 1 Completed by Means of Item Cancellation"
semantic_vi: "Settlmt Mgmt Doc Item Cancelled - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlmt"
  - "mgmt"
  - "doc"
  - "item"
  - "cancelled"
  - "text"
  - "cancld"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTMGMTDOCITEMCANCLDTEXT

**This CDS view exposes fixed values of the field Settlement Management Document Item Cancelled. The following fixed values have been maintained: " " is Active 1 Completed by Means of Item Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCANCLDTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocItemCancld` | ✓ | |  | `cast(dd07t.domvalue_l as wlf_item_canceled )` | `CHAR(1)` | Item Was Canceled |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtMgmtDocItemCancldName` |  | |  | `cast( dd07t.ddtext as wlf_item_canceled_txt preserving type )` | `CHAR(60)` | Description of Item Cancelation Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtDocItemCancld` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCANCLDTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCANCLDTEXT')/$value)*

```abap
@EndUserText.label: 'Settlmt Mgmt Doc Item Cancelled - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtMgmtDocItemCancld',
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
  technicalName: 'IWLFSMDITCNDTXT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtMgmtDocItemCancldText
  as select from dd07t

  association        to parent I_SettlmtMgmtDocItemCancld as _SettlmtMgmtDocItemCancld on $projection.SettlmtMgmtDocItemCancld = _SettlmtMgmtDocItemCancld.SettlmtMgmtDocItemCancld
  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtDocItemCancld'
      @ObjectModel.text.element: ['SettlmtMgmtDocItemCancldName']
  key cast(dd07t.domvalue_l  as wlf_item_canceled )                                  as SettlmtMgmtDocItemCancld,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                               as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_item_canceled_txt preserving type )                  as SettlmtMgmtDocItemCancldName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                               as DomainValue,

      /* Associations */
      _SettlmtMgmtDocItemCancld,
      _Language
}

where
      dd07t.domname  = 'WLF_ITEM_CANCELED'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
