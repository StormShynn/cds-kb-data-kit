---
name: I_SETTLMTMGMTDOCITEMCOLLSTST
description: "This CDS view exposes fixed values of the field Status for Collection of Settlement Document Item. The following fixed values have been maintained: \" Not Relevant 1 Open 2 Locked 3 Settled 6 Completed Through Cancellation"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCOLLSTST')/$value
semantic_en: "This CDS view exposes fixed values of the field Status for Collection of Settlement Document Item. The following fixed values have been maintained: \" Not Relevant 1 Open 2 Locked 3 Settled 6 Completed Through Cancellation"
semantic_vi: "Doc Item Coll Sts for Settlmt Mgmt - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "doc"
  - "item"
  - "coll"
  - "sts"
  - "for"
  - "settlmt"
  - "mgmt"
  - "text"
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
# I_SETTLMTMGMTDOCITEMCOLLSTST

**This CDS view exposes fixed values of the field Status for Collection of Settlement Document Item. The following fixed values have been maintained: " Not Relevant 1 Open 2 Locked 3 Settled 6 Completed Through Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCOLLSTST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocItemCollSts` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_collection_status_item )` | `CHAR(1)` | Status for Collection of Settlement Document Item |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtMgmtDocItemCollStsName` |  | |  | `cast( dd07t.ddtext as wlf_collection_status_item_txt preserving type )` | `CHAR(60)` | Description of Settlement Document Item Collection Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtDocItemCollSts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCOLLSTST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCOLLSTST')/$value)*

```abap
@EndUserText.label: 'Doc Item Coll Sts for Settlmt Mgmt - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtMgmtDocItemCollSts',
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
  technicalName: 'IWLFSMTMDITCLST'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtMgmtDocItemCollStsT
  as select from dd07t

  association        to parent I_SettlmtMgmtDocItemCollSts as _SettlmtMgmtDocItemCollSts on $projection.SettlmtMgmtDocItemCollSts = _SettlmtMgmtDocItemCollSts.SettlmtMgmtDocItemCollSts
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtDocItemCollSts'
  key cast( dd07t.domvalue_l  as wlf_collection_status_item )                                 as SettlmtMgmtDocItemCollSts,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                        as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_collection_status_item_txt preserving type )                  as SettlmtMgmtDocItemCollStsName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                        as DomainValue,

      /* Associations */
      _SettlmtMgmtDocItemCollSts,
      _Language
}

where
      dd07t.domname  = 'WLF_COLLECTION_STATUS_ITEM'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
