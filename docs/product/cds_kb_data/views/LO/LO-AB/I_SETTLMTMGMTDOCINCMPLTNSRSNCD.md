---
name: I_SETTLMTMGMTDOCINCMPLTNSRSNCD
description: "This CDS view exposes fixed values of the field Settlement Management Document Incompleteness Reason."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCINCMPLTNSRSNCD')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Management Document Incompleteness Reason."
semantic_vi: "Settlmt Mgmt Doc Incompleteness Rsn — CDS view cơ bản dựa trên twlf_ir."
keywords:
  - "settlmt"
  - "mgmt"
  - "doc"
  - "incompleteness"
  - "rsn"
  - "incmpltns"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTMGMTDOCINCMPLTNSRSNCD

**This CDS view exposes fixed values of the field Settlement Management Document Incompleteness Reason.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCINCMPLTNSRSNCD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocIncmpltnsRsn` | ✓ | |  | `incompl_reason` | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SettlmtMgmtDocIncmpltnsRsnT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCINCMPLTNSRSNCD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCINCMPLTNSRSNCD')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWLFSMDINCMPRSN',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering: {
     status: #ACTIVE,
     type: #GENERIC,
     numberOfKeyFields: 001
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
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, 
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #ANALYTICAL_DIMENSION],
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
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
}
@EndUserText.label: 'Settlmt Mgmt Doc Incompleteness Rsn'
@Metadata.ignorePropagatedAnnotations: true

define view I_SettlmtMgmtDocIncmpltnsRsnCd
  as select from twlf_ir
  association [0..*] to I_SettlmtMgmtDocIncmpltnsRsnT as _Text on $projection.SettlmtMgmtDocIncmpltnsRsn = _Text.SettlmtMgmtDocIncmpltnsRsn
{
      @ObjectModel.text.association: '_Text'
  key incompl_reason as SettlmtMgmtDocIncmpltnsRsn,

      _Text
}
```
