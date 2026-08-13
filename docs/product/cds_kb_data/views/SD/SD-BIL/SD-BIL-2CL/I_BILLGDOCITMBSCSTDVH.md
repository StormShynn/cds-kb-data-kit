---
name: I_BILLGDOCITMBSCSTDVH
description: "Billgdocitmbscstdvh"
semantic_vi: "View I_BILLGDOCITMBSCSTDVH CDS cung cấp truy cập dữ liệu master về đơn hàng hóa, bao gồm các giá trị tiêu chuẩn cho đơn hàng và các mục đơn hàng. Nó được sử dụng để truy xuất và hiển thị thông tin đơn hàng hóa tiêu chuẩn."
keywords:
  - "billing document"
  - "đơn hàng hóa"
  - "billing document item"
  - "mục đơn hàng hóa"
  - "sales organization"
  - "sales distribution"
  - "standard value help"
  - "giúp đỡ giá trị tiêu chuẩn"
  - "sap sd"
  - "sap sd-bil"
semantic_en: "The I_BILLGDOCITMBSCSTDVH CDS view provides access to billing document item master data, including standard values for billing documents and items. It is used to retrieve and display standard billing document item information."
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
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# I_BILLGDOCITMBSCSTDVH

**Billgdocitmbscstdvh**

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
| `_BillingDocumentBasic` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISDBILDOCITBC_VH'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Item in Billing Process Document'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BillingDocumentItem'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #XL }

@VDM.viewType: #COMPOSITE

define view I_BillgDocItmBscStdVH
  as select from I_BillingDocumentItemBasic

{
      @ObjectModel.foreignKey.association: '_BillingDocumentBasic'
  key BillingDocument,

      @ObjectModel.text.element: [ 'BillingDocumentItemText' ]
  key BillingDocumentItem,

      BillingDocumentItemText,

      @Consumption.hidden: true
      BillingDocumentType,

      @Consumption.hidden: true
      SalesOrganization,

      @Consumption.hidden: true
      _BillingDocumentBasic
}
```
