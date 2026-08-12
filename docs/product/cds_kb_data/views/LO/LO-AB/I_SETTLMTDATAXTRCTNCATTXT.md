---
name: I_SETTLMTDATAXTRCTNCATTXT
description: "This CDS view displays data that indicates that the settlement document type is relevant for the delta update in SAP BW. The following fixed values have been maintained: \" \" Inactive X Active"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCATTXT')/$value
semantic_en: "This CDS view displays data that indicates that the settlement document type is relevant for the delta update in SAP BW. The following fixed values have been maintained: \" \" Inactive X Active"
semantic_vi: "Settlement Data Extraction Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlement"
  - "data"
  - "extraction"
  - "cat"
  - "text"
  - "settlmt"
  - "xtrctn"
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
---
# I_SETTLMTDATAXTRCTNCATTXT

**This CDS view displays data that indicates that the settlement document type is relevant for the delta update in SAP BW. The following fixed values have been maintained: " " Inactive X Active**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCATTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDataXtrctnCat` | ✓ | |  | `cast( dd07t.domvalue_l as bw_4hana )` | `CHAR(1)` | Settlement Document Type is Relevant for BW/4HANA Extraction |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtDataXtrctnCatName` |  | |  | `cast( dd07t.ddtext as bw_4hana_text preserving type )` | `CHAR(60)` | Text of Settlement Data Extraction |
| `_Language` | | ✓ | | | | |
| `_SettlmtDataXtrctnCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCATTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATAXTRCTNCATTXT')/$value)*

```abap
@EndUserText.label: 'Settlement Data Extraction Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtDataXtrctnCat',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT, 
  supportedCapabilities:   [#LANGUAGE_DEPENDENT_TEXT,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
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
  technicalName: 'ISETDATEXTRCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtDataXtrctnCatTxt
  as select from dd07t

  association        to parent I_SettlmtDataXtrctnCat as _SettlmtDataXtrctnCat on $projection.SettlmtDataXtrctnCat = _SettlmtDataXtrctnCat.SettlmtDataXtrctnCat
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtDataXtrctnCat'
      @ObjectModel.text.element: ['SettlmtDataXtrctnCatName']
  key cast( dd07t.domvalue_l as bw_4hana )                                  as SettlmtDataXtrctnCat,
  
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                     as Language,
  
      @Consumption.hidden: true
      dd07t.domvalue_l                                                      as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as bw_4hana_text preserving type )                 as SettlmtDataXtrctnCatName,

      /* Associations */
      _SettlmtDataXtrctnCat,
      _Language
}
where
      dd07t.domname  = 'BW_4HANA_FLAG'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
