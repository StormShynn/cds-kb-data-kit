---
name: I_SETTLMTCOMPNRSN
description: "This CDS view provides information about compensation reasons in Settlement Management. This CDS view provides the data to answer the following business question: Which are the relevant compensation reasons in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOMPNRSN')/$value
semantic_en: "This CDS view provides information about compensation reasons in Settlement Management. This CDS view provides the data to answer the following business question: Which are the relevant compensation reasons in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Settlement Compensation Reason — CDS view cơ bản dựa trên wlf_c_compn_rsn."
keywords:
  - "settlement"
  - "compensation"
  - "reason"
  - "settlmt"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - bo:salesorder
---
# I_SETTLMTCOMPNRSN

**This CDS view provides information about compensation reasons in Settlement Management. This CDS view provides the data to answer the following business question: Which are the relevant compensation reasons in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOMPNRSN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtCompensationReason` | ✓ | |  | `settlmt_compn_rsn` | `CHAR(4)` | Compensation Reason for a Settlement Management Document |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOMPNRSN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCOMPNRSN')/$value)*

```abap
@EndUserText.label: 'Settlement Compensation Reason'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtCompensationReason', 
  modelingPattern: #NONE,
  supportedCapabilities : [#VALUE_HELP_PROVIDER,
                           #SEARCHABLE_ENTITY,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
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
  technicalName: 'IWLFSMTCOMPNRSN'
}
@Consumption.ranked: true
@Metadata: {
  allowExtensions: false,
  ignorePropagatedAnnotations: true
}

define root view entity I_SettlmtCompnRsn
  as select from wlf_c_compn_rsn

  composition [0..*] of I_SettlmtCompnRsnText as _Text

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @UI: {
        textArrangement: #TEXT_FIRST
      }
  key settlmt_compn_rsn as SettlmtCompensationReason,

      /* Associations */
      _Text
}
```
