---
name: I_NOTICEOFVIOLATIONCATEGORYT
description: "This CDS view enables you to access and analyze notice of violation categories in the context of Environment, Health, and Safety (EHS) incident management. You can use this view to categorize violations and support reporting and analysis of environmental, health, and safety incidents. This CDS view provides the data to answer the following business questions: What are the different violation categories recorded in the system? How can I classify notices of violation for incident tracking and compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONCATEGORYT')/$value
semantic_en: "This CDS view enables you to access and analyze notice of violation categories in the context of Environment, Health, and Safety (EHS) incident management. You can use this view to categorize violations and support reporting and analysis of environmental, health, and safety incidents. This CDS view provides the data to answer the following business questions: What are the different violation categories recorded in the system? How can I classify notices of violation for incident tracking and compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Notice Of Violation Category - Text — CDS view giao diện dựa trên ehhssc_viocat_t."
keywords:
  - "notice"
  - "violation"
  - "category"
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
# I_NOTICEOFVIOLATIONCATEGORYT

**This CDS view enables you to access and analyze notice of violation categories in the context of Environment, Health, and Safety (EHS) incident management. You can use this view to categorize violations and support reporting and analysis of environmental, health, and safety incidents. This CDS view provides the data to answer the following business questions: What are the different violation categories recorded in the system? How can I classify notices of violation for incident tracking and compliance reporting? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONCATEGORYT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NoticeOfViolationCategory` | ✓ | |  | `cast(code as ehhss_vio_category_code_nconv)` | `CHAR(21)` | Violation Category |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `NoticeOfViolationCategoryName` |  | |  | `description` | `CHAR(40)` | Description (Extra Short) |
| `_NoticeOfViolationCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_NoticeOfViolationCategory` | `I_NoticeOfViolationCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONCATEGORYT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_NOTICEOFVIOLATIONCATEGORYT')/$value)*

```abap
@EndUserText.label: 'Notice Of Violation Category - Text'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'NoticeOfViolationCategory'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IINCVIOLNCATT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_NoticeOfViolationCategoryT
  as select from ehhssc_viocat_t
  association [0..1] to I_NoticeOfViolationCategory as _NoticeOfViolationCategory on $projection.NoticeOfViolationCategory = _NoticeOfViolationCategory.NoticeOfViolationCategory
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_NoticeOfViolationCategory'
  key cast(code as ehhss_vio_category_code_nconv) as NoticeOfViolationCategory, // cast to avoid execution of conversion exit
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                                    as Language,
      @Semantics.text:true
      description                                 as NoticeOfViolationCategoryName,

      _NoticeOfViolationCategory,
      _Language
}
```
