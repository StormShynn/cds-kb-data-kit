---
name: I_SETTLMTTXCODEDETNCATTEXT
description: "This view displays values that specify whether the tax code should be entered manually in settlement documents or determined from pricing. The following fixed values have been maintained: \" Manual Entry 1 Supplier; Manual Entry; Customer: from Price Determination 2 Customer: Manual Entry; Supplier: fromPrice Determination 3 From Price Determination"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODEDETNCATTEXT')/$value
semantic_en: "This view displays values that specify whether the tax code should be entered manually in settlement documents or determined from pricing. The following fixed values have been maintained: \" Manual Entry 1 Supplier; Manual Entry; Customer: from Price Determination 2 Customer: Manual Entry; Supplier: fromPrice Determination 3 From Price Determination"
semantic_vi: "Settlmt Tax Code Determination Cat - Txt — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlmt"
  - "tax"
  - "code"
  - "determination"
  - "cat"
  - "txt"
  - "detn"
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
  - pricing
  - supplier
---
# I_SETTLMTTXCODEDETNCATTEXT

**This view displays values that specify whether the tax code should be entered manually in settlement documents or determined from pricing. The following fixed values have been maintained: " Manual Entry 1 Supplier; Manual Entry; Customer: from Price Determination 2 Customer: Manual Entry; Supplier: fromPrice Determination 3 From Price Determination**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODEDETNCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtTxCodeDetnCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_tax_code_determination )` | `CHAR(1)` | Tax Code Determination |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtTxCodeDetnCatName` |  | |  | `cast( dd07t.ddtext as wlf_tax_code_determ_text preserving type )` | `CHAR(60)` | Text of Tax Code Determination |
| `_Language` | | ✓ | | | | |
| `_SettlmtTxCodeDetnCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODEDETNCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODEDETNCATTEXT')/$value)*

```abap
@EndUserText.label: 'Settlmt Tax Code Determination Cat - Txt'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtTxCodeDetnCat',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities :  [#LANGUAGE_DEPENDENT_TEXT,
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
  technicalName: 'ISETTAXDETCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_SettlmtTxCodeDetnCatText
  as select from dd07t

  association        to parent I_SettlmtTxCodeDetnCat as _SettlmtTxCodeDetnCat on $projection.SettlmtTxCodeDetnCat = _SettlmtTxCodeDetnCat.SettlmtTxCodeDetnCat
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtTxCodeDetnCat'
      @ObjectModel.text.element: ['SettlmtTxCodeDetnCatName']
  key cast( dd07t.domvalue_l as wlf_tax_code_determination )                                  as SettlmtTxCodeDetnCat,
  
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                                       as Language,
  
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                        as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_tax_code_determ_text preserving type )                        as SettlmtTxCodeDetnCatName,

      /* Associations */
      _SettlmtTxCodeDetnCat,
      _Language
}

where
      dd07t.domname  = 'WLF_TAX_CODE_DETERMINATION'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
