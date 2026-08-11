---
name: I_SETTLMTMGMTPRCGAPPLCATT
description: "This view is used to display which parameter controls MM or SD price determination that should be used during the creation of the settlement management document. The following fixed values have been maintained: M Purchasing V Sales/Distribution"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTPRCGAPPLCATT')/$value
semantic_en: "This view is used to display which parameter controls MM or SD price determination that should be used during the creation of the settlement management document. The following fixed values have been maintained: M Purchasing V Sales/Distribution"
semantic_vi: "Pricing Application Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "pricing"
  - "application"
  - "category"
  - "text"
  - "settlmt"
  - "mgmt"
  - "prcg"
  - "appl"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - bo:pricingcondition
  - pricing
---
# I_SETTLMTMGMTPRCGAPPLCATT

**This view is used to display which parameter controls MM or SD price determination that should be used during the creation of the settlement management document. The following fixed values have been maintained: M Purchasing V Sales/Distribution**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTPRCGAPPLCATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtPrcgApplCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_kappl_pricing )` | `CHAR(2)` | Application for Price Determination |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtMgmtPrcgApplCatName` |  | |  | `cast( dd07t.ddtext as wlf_kappl_pricing_text preserving type )` | `CHAR(60)` | Text of Application for Price Determination |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtPrcgApplCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTPRCGAPPLCATT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTPRCGAPPLCATT')/$value)*

```abap
@EndUserText.label: 'Pricing Application Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtMgmtPrcgApplCat',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT, 
  supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY, 
                           #CDS_MODELING_ASSOCIATION_TARGET],
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
  dataExtraction.enabled: false,
  technicalName: 'ISMPRCAPPLCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_SettlmtMgmtPrcgApplCatT
  as select from dd07t

  association        to parent I_SettlmtMgmtPrcgApplCat as _SettlmtMgmtPrcgApplCat on $projection.SettlmtMgmtPrcgApplCat = _SettlmtMgmtPrcgApplCat.SettlmtMgmtPrcgApplCat
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtPrcgApplCat'
      @ObjectModel.text.element: ['SettlmtMgmtPrcgApplCatName']
  key cast( dd07t.domvalue_l as wlf_kappl_pricing )                                  as SettlmtMgmtPrcgApplCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                              as Language,

      @Consumption.hidden: true
      dd07t.domvalue_l                                                               as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_kappl_pricing_text preserving type )                 as SettlmtMgmtPrcgApplCatName,

      /* Associations */
      _SettlmtMgmtPrcgApplCat,
      _Language
}

where
      dd07t.domname  = 'WLF_KAPPL_PRICING'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
