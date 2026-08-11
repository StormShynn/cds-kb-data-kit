---
name: I_FRTCOSTALLOCREFDOCCAT
description: "This CDS view provides the data to answer the following business question: Which reference document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCREFDOCCAT')/$value
semantic_en: "This CDS view provides the data to answer the following business question: Which reference document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Frt Cost Alloc Ref Document Category — CDS view tổng hợp dựa trên I_SettlmtRefDocCat."
keywords:
  - "frt"
  - "cost"
  - "alloc"
  - "ref"
  - "document"
  - "category"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_FRTCOSTALLOCREFDOCCAT

**This CDS view provides the data to answer the following business question: Which reference document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCREFDOCCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FrtCostAllocRefDocCat` | ✓ | |  | `SettlmtRefDocCat` | `CHAR(2)` | Reference Document Category in Settlement Management |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCREFDOCCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCREFDOCCAT')/$value)*

```abap
@EndUserText.label: 'Frt Cost Alloc Ref Document Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'FrtCostAllocReferenceDocCat',
  dataCategory: #VALUE_HELP,
  representativeKey: 'FrtCostAllocRefDocCat',
  resultSet.sizeCategory: #XS,
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities:   [#ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER ],
  usageType.serviceQuality: #A,
  usageType.dataClass:      #META,
  usageType.sizeCategory:   #S
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_FrtCostAllocRefDocCat
  as select from I_SettlmtRefDocCat

  composition [0..*] of I_FrtCostAllocRefDocCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key SettlmtRefDocCat as FrtCostAllocRefDocCat,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      DomainValue,

      /* Associations */
      _Text
}
where
  (
       SettlmtRefDocCat = '80'
    or SettlmtRefDocCat = '81'
    or SettlmtRefDocCat = '82'
  )
```
