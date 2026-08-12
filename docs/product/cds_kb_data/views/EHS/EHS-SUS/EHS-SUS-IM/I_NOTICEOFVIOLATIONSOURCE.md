---
name: I_NOTICEOFVIOLATIONSOURCE
description: "This CDS view enables you to access and analyze source information for notices of violation. You can use this view to categorize and track the sources of violation notices recorded in the system. This CDS view provides the data to answer the following business questions: What are the different sources of violation notices in my organization? How can I classify notices of violation by their source? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONSOURCE')/$value
semantic_en: "This CDS view enables you to access and analyze source information for notices of violation. You can use this view to categorize and track the sources of violation notices recorded in the system. This CDS view provides the data to answer the following business questions: What are the different sources of violation notices in my organization? How can I classify notices of violation by their source? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Notice Of Violation Source — CDS view giao diện dựa trên ehhssc_viosrce."
keywords:
  - "notice"
  - "violation"
  - "source"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - bo:salesorder
---
# I_NOTICEOFVIOLATIONSOURCE

**This CDS view enables you to access and analyze source information for notices of violation. You can use this view to categorize and track the sources of violation notices recorded in the system. This CDS view provides the data to answer the following business questions: What are the different sources of violation notices in my organization? How can I classify notices of violation by their source? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONSOURCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NoticeOfViolationSource` | ✓ | |  | `cast(code as ehhss_vio_not_source_code_nc)` | `CHAR(21)` | Violation Source |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_NoticeOfViolationSourceT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONSOURCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONSOURCE')/$value)*

```abap
@EndUserText.label: 'Notice Of Violation Source'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'NoticeOfViolationSource'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCVIOLNSRC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_NoticeOfViolationSource
  as select from ehhssc_viosrce
  association [0..*] to I_NoticeOfViolationSourceT as _Text on $projection.NoticeOfViolationSource = _Text.NoticeOfViolationSource
{
      @ObjectModel.text.association: '_Text'
  key cast(code as ehhss_vio_not_source_code_nc)  as NoticeOfViolationSource,
      _Text
}
```
