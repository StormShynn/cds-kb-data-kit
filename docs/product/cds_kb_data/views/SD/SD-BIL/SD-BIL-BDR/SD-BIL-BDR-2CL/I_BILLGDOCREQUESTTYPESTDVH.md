---
name: I_BILLGDOCREQUESTTYPESTDVH
description: "Billgdocrequesttypestdvh"
semantic_vi: "View Billgdocrequesttypestdvh CDS cung cấp một giá trị giúp tiêu chuẩn cho loại yêu cầu tài liệu hóa đơn, được sử dụng trong ứng dụng thành phần bán hàng và phân phối SD-BIL-BDR-2CL. Nó có thể được sử dụng trong các kịch bản khi loại tài liệu hóa đơn cần được chọn hoặc lọc."
keywords:
  - "billing document"
  - "đơn hóa đơn"
  - "request type"
  - "loại yêu cầu"
  - "value help"
  - "giúp tiêu chuẩn"
  - "standard value help"
  - "sales and distribution"
  - "bán hàng và phân phối"
  - "sd-bil-bdr-2cl"
semantic_en: "The Billgdocrequesttypestdvh CDS view provides a standard value help for billing document request types, which is used in the Sales and Distribution application component SD-BIL-BDR-2CL. It is likely used in scenarios where billing document types need to be selected or filtered."
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
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_BILLGDOCREQUESTTYPESTDVH

**Billgdocrequesttypestdvh**

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
| `BillingDocumentRequestType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Billing Document Request Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.representativeKey: 'BillingDocumentRequestType'
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, serviceQuality: #A, sizeCategory: #S }
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

define view entity I_BillgDocRequestTypeStdVH
  as select from I_BillingDocumentRequestType
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key BillingDocumentRequestType,
      _Text
}
```
