---
name: I_SETTLMTNOTXCODEERRHNDLGCATT
description: "This view displays the parameter controls that decide the behavior when no tax code has been entered or has been found in pricing, although tax codes are active for the document. The following fixed values have been maintained: '' Error Message 1 Pricing Error 2 No Error"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTNOTXCODEERRHNDLGCATT')/$value
semantic_en: "This view displays the parameter controls that decide the behavior when no tax code has been entered or has been found in pricing, although tax codes are active for the document. The following fixed values have been maintained: '' Error Message 1 Pricing Error 2 No Error"
semantic_vi: "Missing Tax Code Error Hndlg Cat - Txt — CDS view cơ bản dựa trên dd07t."
keywords:
  - "missing"
  - "tax"
  - "code"
  - "error"
  - "hndlg"
  - "cat"
  - "txt"
  - "settlmt"
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
  - pricing
---
# I_SETTLMTNOTXCODEERRHNDLGCATT

**This view displays the parameter controls that decide the behavior when no tax code has been entered or has been found in pricing, although tax codes are active for the document. The following fixed values have been maintained: '' Error Message 1 Pricing Error 2 No Error**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTNOTXCODEERRHNDLGCATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtNoTxCodeErrHndlgCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_handle_tax_code_missing )` | `CHAR(1)` | Handling of Missing Tax Code |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtNoTxCodeErrHndlgCatName` |  | |  | `cast( dd07t.ddtext as wlf_handle_tax_code_missing_t preserving type )` | `CHAR(60)` | Text of Missing Tax Code Handling |
| `_Language` | | ✓ | | | | |
| `_SettlmtNoTxCodeErrHndlgCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTNOTXCODEERRHNDLGCATT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTNOTXCODEERRHNDLGCATT')/$value)*

```abap
@EndUserText.label: 'Missing Tax Code Error Hndlg Cat - Txt'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtNoTxCodeErrHndlgCat',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities :  [#LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET, 
                            #SEARCHABLE_ENTITY ],
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
  technicalName: 'INOTAXERRCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_SettlmtNoTxCodeErrHndlgCatT
  as select from dd07t

  association        to parent I_SettlmtNoTxCodeErrHndlgCat as _SettlmtNoTxCodeErrHndlgCat on $projection.SettlmtNoTxCodeErrHndlgCat = _SettlmtNoTxCodeErrHndlgCat.SettlmtNoTxCodeErrHndlgCat
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtNoTxCodeErrHndlgCat'
      @ObjectModel.text.element: ['SettlmtNoTxCodeErrHndlgCatName']
  key cast( dd07t.domvalue_l as wlf_handle_tax_code_missing )                                  as SettlmtNoTxCodeErrHndlgCat,
  
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                                        as Language,
  
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                         as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_handle_tax_code_missing_t preserving type )                    as SettlmtNoTxCodeErrHndlgCatName,

      /* Associations */
      _SettlmtNoTxCodeErrHndlgCat,
      _Language
}

where
      dd07t.domname  = 'WLF_HANDLE_TAX_CODE_MISSING'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
