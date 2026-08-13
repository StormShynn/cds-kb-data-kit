---
name: I_BUSINESSPARTNERTYPETEXT
description: "Business PartnerTYPETEXT"
semantic_vi: "View Business Partner Type Text cung cấp mô tả văn bản của loại đối tác kinh doanh, được sử dụng để phân loại đối tác kinh doanh trong một công ty. View này có thể được sử dụng để lấy và hiển thị nhãn văn bản cho loại đối tác kinh doanh trong các ngôn ngữ khác nhau."
keywords:
  - "business partner"
  - "partner"
  - "type"
  - "text"
  - "description"
  - "language"
  - "sap"
  - "cds"
  - "view"
  - "business partner type"
  - "ap-md-bp-rap"
  - "lob:other"
semantic_en: "The Business Partner Type Text view provides text descriptions of business partner types, which are used to categorize business partners in a company. This view can be used to retrieve and display text labels for business partner types in various languages."
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - text-view
  - business-partner
  - text
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERTYPETEXT

**Business PartnerTYPETEXT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BusinessPartnerType` | ✓ | |  | `bpkind` | `CHAR(4)` | Business Partner Type |
| `BusinessPartnerTypeDesc` |  | |  | `text40` | `CHAR(40)` | Description |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'BUPA_TYPE_TEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'BusinessPartnerType',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Business Partner Type - Text'
@Metadata.ignorePropagatedAnnotations: true
define view I_BusinessPartnerTypeText
  as select from tb004t
{
      @Semantics.language: true
  key spras  as Language,
  key bpkind as BusinessPartnerType,
      @Semantics.text: true
      @EndUserText.label: 'Business Partner Description'
      text40 as BusinessPartnerTypeDesc
}
```
