---
name: I_BILLINGDOCTYPEHIERTEXT
description: "Billing DocumentTYPEHIERTEXT"
semantic_vi: "View I_BILLINGDOCTYPEHIERTEXT hiển thị dữ liệu văn bản cấp bậc loại hóa đơn, được sử dụng để hiển thị văn bản đại diện cho loại hóa đơn trong các ngôn ngữ và khoảng thời gian khác nhau."
keywords:
  - "billing document"
  - "đơn hóa đơn"
  - "billing document type"
  - "cấp bậc loại hóa đơn"
  - "text view"
  - "view dữ liệu văn bản"
  - "fi-gl-is-2cl"
  - "fi"
  - "fi-gl"
  - "fi-gl-is"
  - "interface view"
  - "component fi-gl-is-2cl"
semantic_en: "The I_BILLINGDOCTYPEHIERTEXT CDS view exposes billing document type hierarchy text data, which is used to display the text representation of billing document types in different languages and time periods."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
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
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - billing-document
  - billing
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BILLINGDOCTYPEHIERTEXT

**Billing DocumentTYPEHIERTEXT**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentTypeHierarchy` | ✓ | |  | `cast(hrrp_dirt_n.hryid as fis_hryid_billingdoctype preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dirt_n.hryvalto as fis_datbi preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ValidityStartDate` |  | |  | `cast(hrrp_dirt_n.hryvalfrom as fis_datab preserving type )` |  |  |
| `BillingDocumentHierarchyName` |  | |  | `hrytxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Billing Document Type Hierarchy - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name:'BillingDocumentHierarchyText'
@ObjectModel.representativeKey: 'BillingDocumentTypeHierarchy'

define view entity I_BillingDocTypeHierText
  as select from hrrp_dirt_n
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key   cast(hrrp_dirt_n.hryid as fis_hryid_billingdoctype preserving type ) as BillingDocumentTypeHierarchy,
        @Semantics.businessDate.to: true
  key   cast(hrrp_dirt_n.hryvalto as fis_datbi preserving type )             as ValidityEndDate,
        @Semantics.language
  key   spras                                                                as Language,
        @Semantics.businessDate.from: true
        cast(hrrp_dirt_n.hryvalfrom as fis_datab preserving type )           as ValidityStartDate,
        @Semantics.text
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #LOW
        hrytxt                                                               as BillingDocumentHierarchyName,
        _Language
}
where
  hrrp_dirt_n.hrytyp = 'U504';
```
