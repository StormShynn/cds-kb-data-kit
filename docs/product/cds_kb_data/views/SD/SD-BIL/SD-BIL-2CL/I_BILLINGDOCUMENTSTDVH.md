---
name: I_BILLINGDOCUMENTSTDVH
description: "Billing DocumentUMENTSTDVH"
semantic_vi: "View giá trị giúp đỡ tiêu chuẩn tài liệu hóa đơn cung cấp truy cập vào dữ liệu tài liệu hóa đơn tiêu chuẩn, bao gồm các loại tài liệu và tổ chức bán hàng. Nó được sử dụng để lấy thông tin tài liệu hóa đơn để giúp đỡ giá trị trong các ứng dụng."
keywords:
  - "billing document"
  - "tài liệu hóa đơn"
  - "sales organization"
  - "tổ chức bán hàng"
  - "value help"
  - "giúp đỡ giá trị"
  - "standard value help"
  - "giúp đỡ giá trị tiêu chuẩn"
  - "sap"
  - "sd-bil"
  - "billing"
  - "document"
semantic_en: "The Billing Document Standard Value Help view provides access to standard billing document data, including document types and sales organizations. It is used to retrieve billing document information for value help in applications."
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
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTSTDVH

**Billing DocumentUMENTSTDVH**

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
| `BillingDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |

## Source Code

```abap
//GENERATED:005:GlBfhyFV7kY0W}dt2HPJCm
@AbapCatalog: {
  sqlViewName: 'ISDBILLINGDOC_VH',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BillingDocument'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable:true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Billing Document'
define view I_BillingDocumentStdVH as select from I_BillingDocument {

  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key BillingDocument,
  
  @Consumption.hidden: true
  BillingDocumentType,
  
  @Consumption.hidden: true
  SalesOrganization
}
```
