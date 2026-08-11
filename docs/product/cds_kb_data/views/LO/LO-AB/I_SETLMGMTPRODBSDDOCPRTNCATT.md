---
name: I_SETLMGMTPRODBSDDOCPRTNCATT
description: "This CDS view provides the data to answer the following business question: Which are the relevant product-based document partner categories in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTPRODBSDDOCPRTNCATT')/$value
semantic_en: "This CDS view provides the data to answer the following business question: Which are the relevant product-based document partner categories in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Settlmt Mgmt Prod Bsd Doc Prtn Cat - Txt — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlmt"
  - "mgmt"
  - "prod"
  - "bsd"
  - "doc"
  - "prtn"
  - "cat"
  - "txt"
  - "setl"
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
  - product
  - bo:salesorganization
---
# I_SETLMGMTPRODBSDDOCPRTNCATT

**This CDS view provides the data to answer the following business question: Which are the relevant product-based document partner categories in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTPRODBSDDOCPRTNCATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SetlMgmtProdBsdDocPrtnCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_prod_bsd_doc_prtn_cat )` | `CHAR(1)` | Business Partner for Product Based Settlement |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SetlMgmtProdBsdDocPrtnCatName` |  | |  | `cast( dd07t.ddtext as wlf_prod_bsd_doc_prtn_cat_text preserving type )` | `CHAR(60)` | Text of Product Based Settlement Business Partner |
| `_Language` | | ✓ | | | | |
| `_SetlMgmtProdBsdDocPrtnCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTPRODBSDDOCPRTNCATT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTPRODBSDDOCPRTNCATT')/$value)*

```abap
@EndUserText.label: 'Settlmt Mgmt Prod Bsd Doc Prtn Cat - Txt'
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'SetlMgmtProdBsdDocPrtnCat',
    modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities:  [ #CDS_MODELING_ASSOCIATION_TARGET, 
                              #CDS_MODELING_DATA_SOURCE,
                              #EXTRACTION_DATA_SOURCE,
                              #LANGUAGE_DEPENDENT_TEXT,
                              #SEARCHABLE_ENTITY,
                              #SQL_DATA_SOURCE ],
    usageType: {
      serviceQuality: #A,
      dataClass:      #META,
      sizeCategory:   #S
      }
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Metadata: {
    ignorePropagatedAnnotations: true
    }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SetlMgmtProdBsdDocPrtnCatT
  as select from dd07t

  association        to parent I_SetlMgmtProdBsdDocPrtnCat as _SetlMgmtProdBsdDocPrtnCat on $projection.SetlMgmtProdBsdDocPrtnCat = _SetlMgmtProdBsdDocPrtnCat.SetlMgmtProdBsdDocPrtnCat

  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SetlMgmtProdBsdDocPrtnCat'
      @ObjectModel.text.element: ['SetlMgmtProdBsdDocPrtnCatName']
  key cast( dd07t.domvalue_l as wlf_prod_bsd_doc_prtn_cat )                  as SetlMgmtProdBsdDocPrtnCat,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                      as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_prod_bsd_doc_prtn_cat_text preserving type ) as SetlMgmtProdBsdDocPrtnCatName,

      /* Associations */
      _SetlMgmtProdBsdDocPrtnCat,
      _Language
}
where
      dd07t.domname  = 'DOCPARTY'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
