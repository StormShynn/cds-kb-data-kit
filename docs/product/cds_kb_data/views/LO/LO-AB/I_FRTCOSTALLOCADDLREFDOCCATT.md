---
name: I_FRTCOSTALLOCADDLREFDOCCATT
description: "This CDS view provides the data to answer the following business question: Which additional reference document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCADDLREFDOCCATT')/$value
semantic_en: "This CDS view provides the data to answer the following business question: Which additional reference document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Frt Cost Alloc Add Ref Doc Cat - Text — CDS view tổng hợp dựa trên I_SettlmtAddlRefDocCatText."
keywords:
  - "frt"
  - "cost"
  - "alloc"
  - "add"
  - "ref"
  - "doc"
  - "cat"
  - "text"
  - "addl"
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
# I_FRTCOSTALLOCADDLREFDOCCATT

**This CDS view provides the data to answer the following business question: Which additional reference document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCADDLREFDOCCATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FrtCostAllocAddlRefDocCat` | ✓ | |  | `SettlmtAddlRefDocCat` | `CHAR(2)` | Additional Reference Document Category |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `FrtCostAllocAddlRefDocCatName` |  | |  | `SettlmtAddlRefDocCatName` | `CHAR(60)` | Text of Additional Reference Document Category |
| `_Language` | | ✓ | | | | |
| `_FrtCostAllocAddlRefDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCADDLREFDOCCATT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCADDLREFDOCCATT')/$value)*

```abap
@EndUserText.label: 'Frt Cost Alloc Add Ref Doc Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'FrtCostAllocAddlRefDocCat',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities:  [#CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #LANGUAGE_DEPENDENT_TEXT,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE ],
  usageType.serviceQuality: #A,
  usageType.dataClass:      #META,
  usageType.sizeCategory:   #S
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_FrtCostAllocAddlRefDocCatT
  as select from I_SettlmtAddlRefDocCatText

  association        to parent I_FrtCostAllocAddlRefDocCat as _FrtCostAllocAddlRefDocCat on $projection.FrtCostAllocAddlRefDocCat = _FrtCostAllocAddlRefDocCat.FrtCostAllocAddlRefDocCat

  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_FrtCostAllocAddlRefDocCat'
      @ObjectModel.text.element: ['FrtCostAllocAddlRefDocCatName']
  key SettlmtAddlRefDocCat     as FrtCostAllocAddlRefDocCat,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      SettlmtAddlRefDocCatName as FrtCostAllocAddlRefDocCatName,

      /* Associations */
      _FrtCostAllocAddlRefDocCat,
      _Language
}
where
  (
       SettlmtAddlRefDocCat = '80'
    or SettlmtAddlRefDocCat = '81'
    or SettlmtAddlRefDocCat = '82'
  )
```
