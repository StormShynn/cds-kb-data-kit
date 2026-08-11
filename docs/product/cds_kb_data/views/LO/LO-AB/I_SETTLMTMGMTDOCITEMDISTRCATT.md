---
name: I_SETTLMTMGMTDOCITEMDISTRCATT
description: "This CDS view exposes fixed values of the field Distribution Category for Document Items. The following fixed values have been maintained: \" No Distribution 2 Freight Cost Distribution (Transportation Management) 3 Distribution Based on Accruals (CCM) 4 Distribution Based on Settlement Document (CCM) 9 Customer-Specific Variant (BAdI)"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMDISTRCATT')/$value
semantic_en: "This CDS view exposes fixed values of the field Distribution Category for Document Items. The following fixed values have been maintained: \" No Distribution 2 Freight Cost Distribution (Transportation Management) 3 Distribution Based on Accruals (CCM) 4 Distribution Based on Settlement Document (CCM) 9 Customer-Specific Variant (BAdI)"
semantic_vi: "Distribution Cat for Doc Items - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "distribution"
  - "cat"
  - "for"
  - "doc"
  - "items"
  - "text"
  - "settlmt"
  - "mgmt"
  - "item"
  - "distr"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTMGMTDOCITEMDISTRCATT

**This CDS view exposes fixed values of the field Distribution Category for Document Items. The following fixed values have been maintained: " No Distribution 2 Freight Cost Distribution (Transportation Management) 3 Distribution Based on Accruals (CCM) 4 Distribution Based on Settlement Document (CCM) 9 Customer-Specific Variant (BAdI)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMDISTRCATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocItemDistrCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_distribution_active )` | `CHAR(1)` | Distribution Category for Document Items |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtMgmtDocItemDistrCatName` |  | |  | `cast( dd07t.ddtext as wlf_distribution_active_txt preserving type )` | `CHAR(60)` | Description of Distribution Category for Document Items |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtDocItemDistrCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMDISTRCATT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMDISTRCATT')/$value)*

```abap
@EndUserText.label: 'Distribution Cat for Doc Items - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtMgmtDocItemDistrCat',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE, 
                           #CDS_MODELING_ASSOCIATION_TARGET,  
                           #SEARCHABLE_ENTITY,
                           #EXTRACTION_DATA_SOURCE],
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
  dataExtraction.enabled: true,
  technicalName: 'ISETIDISCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_SettlmtMgmtDocItemDistrCatT
  as select from dd07t

  association        to parent I_SettlmtMgmtDocItemDistrCat as _SettlmtMgmtDocItemDistrCat on $projection.SettlmtMgmtDocItemDistrCat = _SettlmtMgmtDocItemDistrCat.SettlmtMgmtDocItemDistrCat
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtDocItemDistrCat'
      @ObjectModel.text.element: ['SettlmtMgmtDocItemDistrCatName']
  key cast( dd07t.domvalue_l as wlf_distribution_active )                                  as SettlmtMgmtDocItemDistrCat,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                                    as Language,
  
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                     as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_distribution_active_txt preserving type )                  as SettlmtMgmtDocItemDistrCatName,

      /* Associations */
      _SettlmtMgmtDocItemDistrCat,
      _Language
}

where
      dd07t.domname  = 'WLF_DISTRIBUTION_ACTIVE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
