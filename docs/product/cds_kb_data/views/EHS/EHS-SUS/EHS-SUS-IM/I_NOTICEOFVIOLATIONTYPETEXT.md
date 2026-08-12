---
name: I_NOTICEOFVIOLATIONTYPETEXT
description: "This CDS view enables you to access and analyze notice of violation types. You can use this view to classify and categorize different types of violations that occur in your organization's incident management processes. This CDS view provides the data to answer the following business questions: What types of violations are most frequently reported in our organization? How can I categorize incidents based on violation types for compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONTYPETEXT')/$value
semantic_en: "This CDS view enables you to access and analyze notice of violation types. You can use this view to classify and categorize different types of violations that occur in your organization's incident management processes. This CDS view provides the data to answer the following business questions: What types of violations are most frequently reported in our organization? How can I categorize incidents based on violation types for compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Notice Of Violation Type - Text — CDS view giao diện dựa trên ehhssc_viotype_t."
keywords:
  - "notice"
  - "violation"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
---
# I_NOTICEOFVIOLATIONTYPETEXT

**This CDS view enables you to access and analyze notice of violation types. You can use this view to classify and categorize different types of violations that occur in your organization's incident management processes. This CDS view provides the data to answer the following business questions: What types of violations are most frequently reported in our organization? How can I categorize incidents based on violation types for compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NoticeOfViolationType` | ✓ | |  | `cast(code as ehhss_vio_type_code_nconv)` | `CHAR(21)` | Violation Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `NoticeOfViolationTypeName` |  | |  | `description` | `CHAR(40)` | Description (Extra Short) |
| `_NoticeOfViolationType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_NoticeOfViolationType` | `I_NoticeOfViolationType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Notice Of Violation Type - Text'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'NoticeOfViolationType'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCVIOLNTYPT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_NoticeOfViolationTypeText
  as select from ehhssc_viotype_t
  association [0..1] to I_NoticeOfViolationType as _NoticeOfViolationType on $projection.NoticeOfViolationType = _NoticeOfViolationType.NoticeOfViolationType
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_NoticeOfViolationType'
  key cast(code as ehhss_vio_type_code_nconv)         as  NoticeOfViolationType, // cast to avoid execution of conversion exit
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language    as Language,
      @Semantics.text:true
      description as NoticeOfViolationTypeName,

      _NoticeOfViolationType,
      _Language
}
```
