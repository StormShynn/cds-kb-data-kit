---
name: I_SETTLMTTXCODETXTYPECHKCATT
description: "This view displays parameter controls whether and how the tax type for the tax code should be checked. The following fixed values have been maintained: Input Tax (Supplier) / Output Tax (Customer) 1 No Check (All Tax Types Allowed)"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODETXTYPECHKCATT')/$value
semantic_en: "This view displays parameter controls whether and how the tax type for the tax code should be checked. The following fixed values have been maintained: Input Tax (Supplier) / Output Tax (Customer) 1 No Check (All Tax Types Allowed)"
semantic_vi: "Tax Code Tax Type Check Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "tax"
  - "code"
  - "type"
  - "check"
  - "category"
  - "text"
  - "settlmt"
  - "language"
  - "domain"
  - "value"
  - "name"
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
# I_SETTLMTTXCODETXTYPECHKCATT

**This view displays parameter controls whether and how the tax type for the tax code should be checked. The following fixed values have been maintained: Input Tax (Supplier) / Output Tax (Customer) 1 No Check (All Tax Types Allowed)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODETXTYPECHKCATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtTxCodeTxTypeChkCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_taxcode_allowed )` | `CHAR(1)` | Control of Tax Type Check for Tax Codes |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtTxCodeTxTypeChkCatName` |  | |  | `cast( dd07t.ddtext as wlf_taxcode_allowed_text preserving type )` | `CHAR(60)` | Text of Tax Type Check Control for Tax Codes |
| `_Language` | | ✓ | | | | |
| `_SettlmtTxCodeTxTypeChkCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODETXTYPECHKCATT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODETXTYPECHKCATT')/$value)*

```abap
@EndUserText.label: 'Tax Code Tax Type Check Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtTxCodeTxTypeChkCat',
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
  dataExtraction.enabled: false,
  technicalName: 'ITAXCODEALLWDCT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_SettlmtTxCodeTxTypeChkCatT
  as select from dd07t

  association        to parent I_SettlmtTxCodeTxTypeChkCat as _SettlmtTxCodeTxTypeChkCat on $projection.SettlmtTxCodeTxTypeChkCat = _SettlmtTxCodeTxTypeChkCat.SettlmtTxCodeTxTypeChkCat
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
  

{
      @ObjectModel.foreignKey.association: '_SettlmtTxCodeTxTypeChkCat'
      @ObjectModel.text.element: ['SettlmtTxCodeTxTypeChkCatName']
  key cast( dd07t.domvalue_l as wlf_taxcode_allowed )                                  as SettlmtTxCodeTxTypeChkCat,
  
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                                as Language,
  
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                 as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_taxcode_allowed_text preserving type )                 as SettlmtTxCodeTxTypeChkCatName,

      /* Associations */
      _SettlmtTxCodeTxTypeChkCat,
      _Language
}

where
      dd07t.domname  = 'WLF_TAXCODE_ALLOWED'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
