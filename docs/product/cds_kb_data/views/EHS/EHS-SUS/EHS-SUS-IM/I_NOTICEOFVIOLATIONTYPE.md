---
name: I_NOTICEOFVIOLATIONTYPE
description: "This CDS view enables you to access and analyze notice of violation types. You can use this view to classify and categorize different types of violations that occur in your organization's incident management processes. This CDS view provides the data to answer the following business questions: What types of violations are most frequently reported in our organization? How can I categorize incidents based on violation types for compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONTYPE')/$value
semantic_en: "This CDS view enables you to access and analyze notice of violation types. You can use this view to classify and categorize different types of violations that occur in your organization's incident management processes. This CDS view provides the data to answer the following business questions: What types of violations are most frequently reported in our organization? How can I categorize incidents based on violation types for compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Notice Of Violation Type — CDS view giao diện dựa trên ehhssc_viotype."
keywords:
  - "notice"
  - "violation"
  - "type"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_NOTICEOFVIOLATIONTYPE

**This CDS view enables you to access and analyze notice of violation types. You can use this view to classify and categorize different types of violations that occur in your organization's incident management processes. This CDS view provides the data to answer the following business questions: What types of violations are most frequently reported in our organization? How can I categorize incidents based on violation types for compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NoticeOfViolationType` | ✓ | |  | `cast(code as ehhss_vio_type_code_nconv)` | `CHAR(21)` | Violation Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_NoticeOfViolationTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONTYPE')/$value)*

```abap
@EndUserText.label: 'Notice Of Violation Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'NoticeOfViolationType'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCVIOLNTYP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'EHSIncident'

define view I_NoticeOfViolationType
  as select from ehhssc_viotype
  association [0..*] to I_NoticeOfViolationTypeText as _Text on $projection.NoticeOfViolationType = _Text.NoticeOfViolationType
{
      @ObjectModel.text.association: '_Text'
  key cast(code as ehhss_vio_type_code_nconv)         as  NoticeOfViolationType, // cast to avoid execution of conversion exit
      _Text
}
```
