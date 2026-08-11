---
name: I_SETTLMTPARTNERCATTEXT
description: "This CDS view exposes fixed values of the field Settlement Partner Category. The following fixed values have been maintained: \" Standard 1 Only Supplier Side 2 Only Customer Side 3 None 4 Personnel Number 5 Only Supplier Side - Customer for Information 6 Only Customer Side - Supplier for Information"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPARTNERCATTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Partner Category. The following fixed values have been maintained: \" Standard 1 Only Supplier Side 2 Only Customer Side 3 None 4 Personnel Number 5 Only Supplier Side - Customer for Information 6 Only Customer Side - Supplier for Information"
semantic_vi: "Settlement Partner Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlement"
  - "partner"
  - "category"
  - "text"
  - "settlmt"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SETTLMTPARTNERCATTEXT

**This CDS view exposes fixed values of the field Settlement Partner Category. The following fixed values have been maintained: " Standard 1 Only Supplier Side 2 Only Customer Side 3 None 4 Personnel Number 5 Only Supplier Side - Customer for Information 6 Only Customer Side - Supplier for Information**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPARTNERCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtPartnerCat` | ✓ | |  | `cast(dd07t.domvalue_l as wlf_settlement_party )` | `CHAR(1)` | Settlement Partner Category |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtPartnerCatName` |  | |  | `cast( dd07t.ddtext as wlf_settlement_party_desc preserving type )` | `CHAR(60)` | Description of Settlement Partner Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtPartnerCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPARTNERCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPARTNERCATTEXT')/$value)*

```abap
@EndUserText.label: 'Settlement Partner Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SettlmtPartnerCat',
   modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT,
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
  technicalName: 'IWLFSMTPARTCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtPartnerCatText
  as select from dd07t

  association        to parent I_SettlmtPartnerCat as _SettlmtPartnerCat on $projection.SettlmtPartnerCat = _SettlmtPartnerCat.SettlmtPartnerCat
  association [0..1] to I_Language                 as _Language          on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtPartnerCat'
  key cast(dd07t.domvalue_l as wlf_settlement_party  )                                 as SettlmtPartnerCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                 as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_settlement_party_desc preserving type )                as SettlmtPartnerCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                 as DomainValue,

      /* Associations */
      _SettlmtPartnerCat,
      _Language
}

where
      dd07t.domname  = 'WLF_SETTLEMENT_PARTY'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
