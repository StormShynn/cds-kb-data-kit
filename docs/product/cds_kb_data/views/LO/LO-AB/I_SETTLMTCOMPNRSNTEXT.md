---
name: I_SETTLMTCOMPNRSNTEXT
description: "This CDS view provides information about compensation reasons in Settlement Management. This CDS view provides the data to answer the following business question: Which are the relevant compensation reasons in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOMPNRSNTEXT')/$value
semantic_en: "This CDS view provides information about compensation reasons in Settlement Management. This CDS view provides the data to answer the following business question: Which are the relevant compensation reasons in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Settlement Compensation Reason - Text — CDS view cơ bản dựa trên wlf_c_compn_rsnt."
keywords:
  - "settlement"
  - "compensation"
  - "reason"
  - "text"
  - "settlmt"
  - "language"
  - "compn"
  - "desc"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - bo:salesorder
---
# I_SETTLMTCOMPNRSNTEXT

**This CDS view provides information about compensation reasons in Settlement Management. This CDS view provides the data to answer the following business question: Which are the relevant compensation reasons in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOMPNRSNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtCompensationReason` | ✓ | |  | `settlmt_compn_rsn` | `CHAR(4)` | Compensation Reason for a Settlement Management Document |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SettlmtCompnRsnDesc` |  | |  | `text` | `CHAR(60)` | Settlement Compensation Reason Description |
| `_Language` | | ✓ | | | | |
| `_SettlmtCompnRsn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOMPNRSNTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOMPNRSNTEXT')/$value)*

```abap
@EndUserText.label: 'Settlement Compensation Reason - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtCompensationReason',
  modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
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
  technicalName: 'IWLFSMTCOMPNRSNT'
}
@Metadata: {
  allowExtensions: false,
  ignorePropagatedAnnotations: true
}

define view entity I_SettlmtCompnRsnText
  as select from wlf_c_compn_rsnt

  association to parent I_SettlmtCompnRsn as _SettlmtCompnRsn on $projection.SettlmtCompensationReason = _SettlmtCompnRsn.SettlmtCompensationReason
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtCompnRsn'
      @ObjectModel.text.element: ['SettlmtCompnRsnDesc']
  key settlmt_compn_rsn as SettlmtCompensationReason,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras             as Language,
  
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      text              as SettlmtCompnRsnDesc,

      /* Associations */
      _SettlmtCompnRsn,
      _Language
}
```
