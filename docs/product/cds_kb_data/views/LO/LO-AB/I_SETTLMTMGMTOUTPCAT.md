---
name: I_SETTLMTMGMTOUTPCAT
description: "This CDS view provides the data to answer the following business question: What are the relevant output categories in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTOUTPCAT')/$value
semantic_en: "This CDS view provides the data to answer the following business question: What are the relevant output categories in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Settlement Management Output Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "management"
  - "output"
  - "category"
  - "settlmt"
  - "mgmt"
  - "outp"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTMGMTOUTPCAT

**This CDS view provides the data to answer the following business question: What are the relevant output categories in Settlement Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTOUTPCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtOutpCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_settlmt_mgmt_outp_cat )` | `CHAR(1)` | Output Category in Settlement Management |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTOUTPCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTOUTPCAT')/$value)*

```abap
@EndUserText.label: 'Settlement Management Output Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name:   'SettlmtMgmtOutputCategory',
  dataCategory:             #VALUE_HELP,
  representativeKey:        'SettlmtMgmtOutpCat',
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
@Consumption.ranked: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@Metadata: {
  ignorePropagatedAnnotations: true
} 

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtMgmtOutpCat
  as select from dd07l

  composition [0..*] of I_SettlmtMgmtOutpCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_settlmt_mgmt_outp_cat ) as SettlmtMgmtOutpCat,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                      as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_OUTPUT_CONTROL_IS_ACTIVE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
