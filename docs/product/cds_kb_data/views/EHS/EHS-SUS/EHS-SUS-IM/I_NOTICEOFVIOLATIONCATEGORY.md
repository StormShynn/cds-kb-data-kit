---
name: I_NOTICEOFVIOLATIONCATEGORY
description: "This CDS view enables you to access and analyze notice of violation categories in the context of Environment, Health, and Safety (EHS) incident management. You can use this view to categorize violations and support reporting and analysis of environmental, health, and safety incidents. This CDS view provides the data to answer the following business questions: What are the different violation categories recorded in the system? How can I classify notices of violation for incident tracking and compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONCATEGORY')/$value
semantic_en: "This CDS view enables you to access and analyze notice of violation categories in the context of Environment, Health, and Safety (EHS) incident management. You can use this view to categorize violations and support reporting and analysis of environmental, health, and safety incidents. This CDS view provides the data to answer the following business questions: What are the different violation categories recorded in the system? How can I classify notices of violation for incident tracking and compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Notice Of Violation Category — CDS view giao diện dựa trên ehhssc_viocat."
keywords:
  - "notice"
  - "violation"
  - "category"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_NOTICEOFVIOLATIONCATEGORY

**This CDS view enables you to access and analyze notice of violation categories in the context of Environment, Health, and Safety (EHS) incident management. You can use this view to categorize violations and support reporting and analysis of environmental, health, and safety incidents. This CDS view provides the data to answer the following business questions: What are the different violation categories recorded in the system? How can I classify notices of violation for incident tracking and compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NoticeOfViolationCategory` | ✓ | |  | `cast(code as ehhss_vio_category_code_nconv)` | `CHAR(21)` | Violation Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_NoticeOfViolationCategoryT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONCATEGORY')/$value)*

```abap
@EndUserText.label: 'Notice Of Violation Category'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'NoticeOfViolationCategory'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCVIOLNCAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_NoticeOfViolationCategory
  as select from ehhssc_viocat
  association [0..*] to I_NoticeOfViolationCategoryT as _Text on $projection.NoticeOfViolationCategory = _Text.NoticeOfViolationCategory
{
      @ObjectModel.text.association: '_Text'
  key cast(code as ehhss_vio_category_code_nconv) as NoticeOfViolationCategory, // cast to avoid execution of conversion exit
      _Text
}
```
