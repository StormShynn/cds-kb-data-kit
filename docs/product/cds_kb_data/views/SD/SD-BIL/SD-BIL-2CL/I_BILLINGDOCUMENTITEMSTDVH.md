---
name: I_BILLINGDOCUMENTITEMSTDVH
description: "Billing DocumentUMENTITEMSTDVH"
semantic_vi: "View I_BILLINGDOCUMENTITEMSTDVH CDS cung cấp hỗ trợ giá trị tiêu chuẩn cho các mục đơn hàng hóa, cho phép các nhà phát triển truy cập và lọc dữ liệu mục đơn hàng hóa dựa trên các tiêu chí khác nhau."
keywords:
  - "billing document"
  - "đơn hóa đơn"
  - "ekko"
  - "sales and distribution"
  - "lob: sales & distribution"
  - "bo: billing document"
  - "sd-bil"
  - "interface-view"
  - "value-help"
  - "standard-value-help"
  - "billing-document-item"
  - "item-level"
semantic_en: "The I_BILLINGDOCUMENTITEMSTDVH CDS view provides standard value help for billing document items, allowing developers to access and filter billing document item data based on various criteria."
app_component: SD-BIL-2CL
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
  - SD
  - SD-BIL
  - interface-view
  - value-help
  - standard-value-help
  - billing-document
  - billing
  - document
  - item-level
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTITEMSTDVH

**Billing DocumentUMENTITEMSTDVH**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
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
| `BillingDocument` | ✓ | |  |  |  |  |
| `BillingDocumentItem` | ✓ | |  |  |  |  |
| `BillingDocumentItemText` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `_BillingDocument` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:005:GlBfhyFV7kY0W}dt2HPJCm
@AbapCatalog: {
  sqlViewName: 'ISDBILDOCITEM_VH',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BillingDocumentItem'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Billing Document Item'
define view I_BillingDocumentItemStdVH as select from I_BillingDocumentItem {
  @ObjectModel.foreignKey.association: '_BillingDocument'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key BillingDocument,
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @ObjectModel.text.element: ['BillingDocumentItemText']
  key BillingDocumentItem,
  
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.8
  BillingDocumentItemText,

  @Consumption.hidden: true
  BillingDocumentType,
  @Consumption.hidden: true
  SalesOrganization,
  @Consumption.hidden: true
  _BillingDocument
}
```
