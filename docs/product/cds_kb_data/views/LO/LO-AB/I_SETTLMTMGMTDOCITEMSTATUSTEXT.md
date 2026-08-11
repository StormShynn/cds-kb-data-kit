---
name: I_SETTLMTMGMTDOCITEMSTATUSTEXT
description: "This CDS view exposes fixed values of the field Item Status. The following fixed values have been maintained: \" Item is active 1 Item Is Inactive (Collective Document Has Been Generated) 2 Item Is Inactive (Settlement Document Has Been Generated)"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMSTATUSTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Item Status. The following fixed values have been maintained: \" Item is active 1 Item Is Inactive (Collective Document Has Been Generated) 2 Item Is Inactive (Settlement Document Has Been Generated)"
semantic_vi: "Settlmt Mgmt Doc Item Status - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlmt"
  - "mgmt"
  - "doc"
  - "item"
  - "status"
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
# I_SETTLMTMGMTDOCITEMSTATUSTEXT

**This CDS view exposes fixed values of the field Item Status. The following fixed values have been maintained: " Item is active 1 Item Is Inactive (Collective Document Has Been Generated) 2 Item Is Inactive (Settlement Document Has Been Generated)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocItemStatus` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_item_status )` | `CHAR(1)` | Item Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtMgmtDocItemStatusName` |  | |  | `cast( dd07t.ddtext as wlf_item_status_txt preserving type )` | `CHAR(60)` | Item Status Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtDocItemStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMSTATUSTEXT')/$value)*

```abap
@EndUserText.label: 'Settlmt Mgmt Doc Item Status - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtMgmtDocItemStatus',
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
  technicalName: 'IWLFSMDITSTATTXT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtMgmtDocItemStatusText
  as select from dd07t

  association        to parent I_SettlmtMgmtDocItemStatus as _SettlmtMgmtDocItemStatus on $projection.SettlmtMgmtDocItemStatus = _SettlmtMgmtDocItemStatus.SettlmtMgmtDocItemStatus
  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtDocItemStatus'
      @ObjectModel.text.element: ['SettlmtMgmtDocItemStatusName']
  key cast( dd07t.domvalue_l as wlf_item_status )                                  as SettlmtMgmtDocItemStatus,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                             as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_item_status_txt preserving type )                  as SettlmtMgmtDocItemStatusName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                             as DomainValue,

      /* Associations */
      _SettlmtMgmtDocItemStatus,
      _Language
}

where
      dd07t.domname  = 'WLF_ITEM_STATUS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
