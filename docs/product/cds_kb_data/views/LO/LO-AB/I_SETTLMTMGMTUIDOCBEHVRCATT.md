---
name: I_SETTLMTMGMTUIDOCBEHVRCATT
description: "This CDS view provides the data to answer the following business question: What are the behavior categories for UI in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTUIDOCBEHVRCATT')/$value
semantic_en: "This CDS view provides the data to answer the following business question: What are the behavior categories for UI in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Document UI Behavior Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "document"
  - "behavior"
  - "category"
  - "text"
  - "settlmt"
  - "mgmt"
  - "behvr"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - document
---
# I_SETTLMTMGMTUIDOCBEHVRCATT

**This CDS view provides the data to answer the following business question: What are the behavior categories for UI in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTUIDOCBEHVRCATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtUIDocBehvrCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_ui_behavior )` | `CHAR(1)` | The Display Behavior in Settlement Management Apps |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtMgmtUIDocBehvrCatName` |  | |  | `cast( dd07t.ddtext as wlf_ui_behavior_text preserving type )` | `CHAR(60)` | The Display Behavior in Settlement Management App Texts |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtUIDocBehvrCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTUIDOCBEHVRCATT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTUIDOCBEHVRCATT')/$value)*

```abap
@EndUserText.label: 'Document UI Behavior Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey:        'SettlmtMgmtUIDocBehvrCat',
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
define view entity I_SettlmtMgmtUIDocBehvrCatT
  as select from dd07t

  association        to parent I_SettlmtMgmtUIDocBehvrCat as _SettlmtMgmtUIDocBehvrCat on $projection.SettlmtMgmtUIDocBehvrCat = _SettlmtMgmtUIDocBehvrCat.SettlmtMgmtUIDocBehvrCat

  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtUIDocBehvrCat'
      @ObjectModel.text.element: ['SettlmtMgmtUIDocBehvrCatName']
  key cast( dd07t.domvalue_l as wlf_ui_behavior )                                  as SettlmtMgmtUIDocBehvrCat,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                            as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                             as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_ui_behavior_text preserving type )                 as SettlmtMgmtUIDocBehvrCatName,

      /* Associations */
      _SettlmtMgmtUIDocBehvrCat,
      _Language
}
where
      dd07t.domname  = 'WLF_UI_BEHAVIOR'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
