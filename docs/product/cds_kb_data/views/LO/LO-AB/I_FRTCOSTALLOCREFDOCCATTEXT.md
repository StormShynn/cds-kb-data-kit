---
name: I_FRTCOSTALLOCREFDOCCATTEXT
description: "This CDS view provides the data to answer the following business question: Which reference document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCREFDOCCATTEXT')/$value
semantic_en: "This CDS view provides the data to answer the following business question: Which reference document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Frt Cost Alloc Ref Doc Category - Text — CDS view tổng hợp dựa trên I_SettlmtRefDocCatText."
keywords:
  - "frt"
  - "cost"
  - "alloc"
  - "ref"
  - "doc"
  - "category"
  - "text"
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
# I_FRTCOSTALLOCREFDOCCATTEXT

**This CDS view provides the data to answer the following business question: Which reference document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCREFDOCCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FrtCostAllocRefDocCat` | ✓ | |  | `SettlmtRefDocCat` | `CHAR(2)` | Reference Document Category in Settlement Management |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `FrtCostAllocRefDocCatName` |  | |  | `SettlmtRefDocCatName` | `CHAR(60)` | Text of Reference Document Category |
| `_Language` | | ✓ | | | | |
| `_FrtCostAllocRefDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCREFDOCCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCREFDOCCATTEXT')/$value)*

```abap
@EndUserText.label: 'Frt Cost Alloc Ref Doc Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'FrtCostAllocRefDocCat',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities :  [#CDS_MODELING_ASSOCIATION_TARGET,
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
define view entity I_FrtCostAllocRefDocCatText
  as select from I_SettlmtRefDocCatText

  association        to parent I_FrtCostAllocRefDocCat as _FrtCostAllocRefDocCat on $projection.FrtCostAllocRefDocCat = _FrtCostAllocRefDocCat.FrtCostAllocRefDocCat
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_FrtCostAllocRefDocCat'
      @ObjectModel.text.element: ['FrtCostAllocRefDocCatName']
  key SettlmtRefDocCat     as FrtCostAllocRefDocCat,
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
      SettlmtRefDocCatName as FrtCostAllocRefDocCatName,

      /* Associations */
      _FrtCostAllocRefDocCat,
      _Language
}
where
  (
       SettlmtRefDocCat = '80'
    or SettlmtRefDocCat = '81'
    or SettlmtRefDocCat = '82'
  )
```
