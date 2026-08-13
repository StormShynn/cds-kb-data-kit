---
name: I_BILLINGDOCREQITEMSTDVH
description: "Billing DocumentREQITEMSTDVH"
semantic_vi: "Cung cấp hỗ trợ giá trị tiêu chuẩn cho các yêu cầu hóa đơn yêu cầu, bao gồm thông tin hóa đơn yêu cầu, mục và loại."
keywords:
  - "billing document request"
  - "đơn yêu cầu hóa đơn"
  - "sales and distribution"
  - "sales organization"
  - "billing document request item"
  - "item-level billing"
  - "standard value help"
  - "hỗ trợ giá trị tiêu chuẩn"
  - "sales and distribution component"
  - "component sd-bil-bdr-2cl"
semantic_en: "Provides standard value help for billing document request items, including billing document request, item, and type information. Used to support item-level billing document requests in the Sales and Distribution component."
app_component: SD-BIL-BDR-2CL
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
  - SD-BIL-BDR
  - interface-view
  - value-help
  - standard-value-help
  - billing-document
  - billing
  - item-level
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_BILLINGDOCREQITEMSTDVH

**Billing DocumentREQITEMSTDVH**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
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
| `BillingDocumentRequest` | ✓ | |  |  |  |  |
| `BillingDocumentRequestItem` | ✓ | |  |  |  |  |
| `BillingDocumentRequestItemText` |  | |  |  |  |  |
| `BillingDocumentRequestType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `_BillingDocumentRequest` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ISDBILDOCREQITVH',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BillingDocumentRequestItem'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Billing Document Request Item'
define view I_BillingDocReqItemStdVH as select from I_BillingDocumentRequestItem {
  @ObjectModel.foreignKey.association: '_BillingDocumentRequest'
  key BillingDocumentRequest,
  @ObjectModel.text.element: ['BillingDocumentRequestItemText']
  key BillingDocumentRequestItem,

  @Semantics.text: true
  BillingDocumentRequestItemText,

  @Consumption.hidden: true
  BillingDocumentRequestType,
  @Consumption.hidden: true
  SalesOrganization,
  @Consumption.hidden: true
  _BillingDocumentRequest
}
```
