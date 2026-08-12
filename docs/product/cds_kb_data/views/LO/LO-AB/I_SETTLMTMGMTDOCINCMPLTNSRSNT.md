---
name: I_SETTLMTMGMTDOCINCMPLTNSRSNT
description: "This CDS view exposes fixed values of the field Settlement Management Document Incompleteness Reason."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCINCMPLTNSRSNT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Management Document Incompleteness Reason."
semantic_vi: "Settlmt Mgmt Doc Incompleteness Rsn - Text — CDS view cơ bản dựa trên twlf_irt."
keywords:
  - "settlmt"
  - "mgmt"
  - "doc"
  - "incompleteness"
  - "rsn"
  - "text"
  - "incmpltns"
  - "language"
  - "desc"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTMGMTDOCINCMPLTNSRSNT

**This CDS view exposes fixed values of the field Settlement Management Document Incompleteness Reason.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCINCMPLTNSRSNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocIncmpltnsRsn` | ✓ | |  | `incompl_reason` | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SettlmtMgmtDocIncmpltnsRsnDesc` |  | |  | `text` | `CHAR(100)` | Text (100 characters) |
| `_SettlmtMgmtDocIncmpltnsRsn` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtMgmtDocIncmpltnsRsn` | `I_SettlmtMgmtDocIncmpltnsRsnCd` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCINCMPLTNSRSNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCINCMPLTNSRSNT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWLFSMDINCMPRSNT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering: {
     status: #ACTIVE,
     type: #GENERIC,
     numberOfKeyFields: 002
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API 
}
@AccessControl: { 
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
   representativeKey: 'SettlmtMgmtDocIncmpltnsRsn',
   dataCategory: #TEXT,
   modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@ClientHandling: {
     type: #INHERITED,
     algorithm: #SESSION_VARIABLE
}
@Analytics: {
    internalName: #LOCAL
}   
@EndUserText.label: 'Settlmt Mgmt Doc Incompleteness Rsn - Text'
@Metadata.ignorePropagatedAnnotations: true

define view I_SettlmtMgmtDocIncmpltnsRsnT 
as select from 
twlf_irt 
association[0..1] to I_SettlmtMgmtDocIncmpltnsRsnCd as _SettlmtMgmtDocIncmpltnsRsn on $projection.SettlmtMgmtDocIncmpltnsRsn  = _SettlmtMgmtDocIncmpltnsRsn.SettlmtMgmtDocIncmpltnsRsn 
association[0..1] to I_Language                     as _Language                   on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SettlmtMgmtDocIncmpltnsRsn'
    key incompl_reason as SettlmtMgmtDocIncmpltnsRsn,
    
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key spras as Language,
    
    @Semantics.text: true
    text as SettlmtMgmtDocIncmpltnsRsnDesc,
    
    //Associations
    _SettlmtMgmtDocIncmpltnsRsn,
    _Language  
}
```
