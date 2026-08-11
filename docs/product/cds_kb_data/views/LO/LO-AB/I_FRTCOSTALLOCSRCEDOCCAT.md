---
name: I_FRTCOSTALLOCSRCEDOCCAT
description: "This CDS view provides the data to answer the following business question: Which source document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCSRCEDOCCAT')/$value
semantic_en: "This CDS view provides the data to answer the following business question: Which source document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Source Document Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "source"
  - "document"
  - "category"
  - "cost"
  - "alloc"
  - "srce"
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
  - bo:salesorder
---
# I_FRTCOSTALLOCSRCEDOCCAT

**This CDS view provides the data to answer the following business question: Which source document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCSRCEDOCCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FrtCostAllocSrceDocCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_fcadoc_srce_doc_cat )` | `CHAR(2)` | Document Category of Source Document |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCSRCEDOCCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCSRCEDOCCAT')/$value)*

```abap
@EndUserText.label: 'Source Document Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name:   'FrtCostAllocSourceDocumentCat',
  dataCategory:             #VALUE_HELP,
  representativeKey:        'FrtCostAllocSrceDocCat',
  modelingPattern:          #ANALYTICAL_DIMENSION,
  supportedCapabilities:    [#ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE,
                             #SEARCHABLE_ENTITY,
                             #SQL_DATA_SOURCE,
                             #VALUE_HELP_PROVIDER ],
  resultSet.sizeCategory:   #XS,
  usageType.serviceQuality: #A,
  usageType.dataClass:      #META,
  usageType.sizeCategory:   #S
}
@VDM: {
  viewType: #BASIC,
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

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_FrtCostAllocSrceDocCat
  as select from dd07l

  composition [0..*] of I_FrtCostAllocSrceDocCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_fcadoc_srce_doc_cat ) as FrtCostAllocSrceDocCat,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                    as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_FCADOC_SRCE_DOC_CAT'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
