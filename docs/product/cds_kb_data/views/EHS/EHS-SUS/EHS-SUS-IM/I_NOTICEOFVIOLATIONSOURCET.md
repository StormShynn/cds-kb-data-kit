---
name: I_NOTICEOFVIOLATIONSOURCET
description: "This CDS view enables you to access and analyze source information for notices of violation. You can use this view to categorize and track the sources of violation notices recorded in the system. This CDS view provides the data to answer the following business questions: What are the different sources of violation notices in my organization? How can I classify notices of violation by their source? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONSOURCET')/$value
semantic_en: "This CDS view enables you to access and analyze source information for notices of violation. You can use this view to categorize and track the sources of violation notices recorded in the system. This CDS view provides the data to answer the following business questions: What are the different sources of violation notices in my organization? How can I classify notices of violation by their source? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Notice Of Violation Source - Text — CDS view giao diện dựa trên ehhssc_viosrce_t."
keywords:
  - "notice"
  - "violation"
  - "source"
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
  - bo:salesorder
---
# I_NOTICEOFVIOLATIONSOURCET

**This CDS view enables you to access and analyze source information for notices of violation. You can use this view to categorize and track the sources of violation notices recorded in the system. This CDS view provides the data to answer the following business questions: What are the different sources of violation notices in my organization? How can I classify notices of violation by their source? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONSOURCET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NoticeOfViolationSource` | ✓ | |  | `cast(code as ehhss_vio_not_source_code_nc)` | `CHAR(21)` | Violation Source |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `NoticeOfViolationSourceName` |  | |  | `description` | `CHAR(40)` | Description (Extra Short) |
| `_NoticeOfViolationSource` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_NoticeOfViolationSource` | `I_NoticeOfViolationSource` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONSOURCET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONSOURCET')/$value)*

```abap
@EndUserText.label: 'Notice Of Violation Source - Text'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'NoticeOfViolationSource'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCVIOLNSRCT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_NoticeOfViolationSourceT
  as select from ehhssc_viosrce_t
  association [0..1] to I_NoticeOfViolationSource as _NoticeOfViolationSource on $projection.NoticeOfViolationSource = _NoticeOfViolationSource.NoticeOfViolationSource
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_NoticeOfViolationSource'
  key cast(code as ehhss_vio_not_source_code_nc)    as NoticeOfViolationSource,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                                      as Language,
      @Semantics.text:true
      description                                   as NoticeOfViolationSourceName,

      _NoticeOfViolationSource,
      _Language
}
```
