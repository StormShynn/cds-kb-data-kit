---
name: I_BUSPARTTAXTYPETEXT
description: "Business PartnerTAXTYPETEXT"
semantic_vi: "View Business Partner TAXTYPETEXT cung cấp mô tả văn bản cho loại thuế đối tác kinh doanh trong các ngôn ngữ khác nhau. Nó có thể được sử dụng để hiển thị tên loại thuế trong các ngôn ngữ khác nhau cho các ứng dụng liên quan đến đối tác kinh doanh."
keywords:
  - "business partner"
  - "tax type"
  - "language"
  - "text description"
  - "sap cds view"
  - "ap-md-bp-rap"
  - "lob other"
  - "tax"
  - "type"
  - "description"
  - "language code"
  - "business partner tax type"
semantic_en: "The Business Partner TAXTYPETEXT view provides text descriptions for business partner tax types in different languages. It can be used to display tax type names in various languages for business partner-related applications."
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
  - tax
  - text
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTTAXTYPETEXT

**Business PartnerTAXTYPETEXT**

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
| `BPTaxType` | ✓ | |  | `taxtype` | `CHAR(4)` | Tax Number Category |
| `TaxTypeName` |  | |  | `text` | `CHAR(40)` | Name: Business Partner Tax Number Categories |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPTAXTYPETEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Tax Type - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  representativeKey: 'BPTaxType',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartTaxTypeText
  as select from tfktaxnumtype_t
{
      @Semantics.language: true
  key spras   as Language,
  key taxtype as BPTaxType,
      @Semantics.text: true
      @EndUserText.label: 'Tax Category Description'
      @UI.identification:[{label: 'Tax Category Description'}]
      text    as TaxTypeName
}
```
