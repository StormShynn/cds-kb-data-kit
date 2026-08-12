---
name: I_FRTCOSTALLOCSRCEDOCCATTEXT
description: "This CDS view provides the data to answer the following business question: Which source document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCSRCEDOCCATTEXT')/$value
semantic_en: "This CDS view provides the data to answer the following business question: Which source document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Source Document Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "source"
  - "document"
  - "category"
  - "text"
  - "cost"
  - "alloc"
  - "srce"
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
  - bo:salesorder
---
# I_FRTCOSTALLOCSRCEDOCCATTEXT

**This CDS view provides the data to answer the following business question: Which source document categories are relevant for freight cost allocation documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCSRCEDOCCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FrtCostAllocSrceDocCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_fcadoc_srce_doc_cat )` | `CHAR(2)` | Document Category of Source Document |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `FrtCostAllocSrceDocCatName` |  | |  | `cast( dd07t.ddtext as wlf_fcadoc_srce_doc_cat_text preserving type )` | `CHAR(60)` | Text of Source Document Category for Frt Cost Alloc Doc |
| `_Language` | | ✓ | | | | |
| `_FrtCostAllocSrceDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCSRCEDOCCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FRTCOSTALLOCSRCEDOCCATTEXT')/$value)*

```abap
@EndUserText.label: 'Source Document Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey:        'FrtCostAllocSrceDocCat',
  modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
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
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_FrtCostAllocSrceDocCatText
  as select from dd07t

  association        to parent I_FrtCostAllocSrceDocCat as _FrtCostAllocSrceDocCat on $projection.FrtCostAllocSrceDocCat = _FrtCostAllocSrceDocCat.FrtCostAllocSrceDocCat

  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_FrtCostAllocSrceDocCat'
      @ObjectModel.text.element: ['FrtCostAllocSrceDocCatName']
  key cast( dd07t.domvalue_l as wlf_fcadoc_srce_doc_cat )                  as FrtCostAllocSrceDocCat,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                    as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                     as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_fcadoc_srce_doc_cat_text preserving type ) as FrtCostAllocSrceDocCatName,

      /* Associations */
      _FrtCostAllocSrceDocCat,
      _Language
}
where
      dd07t.domname  = 'WLF_FCADOC_SRCE_DOC_CAT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
