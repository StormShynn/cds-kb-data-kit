---
name: I_BILLINGPLANUSAGECATEGORY
description: "Billingplanusagecategory"
semantic_vi: "View I_BILLINGPLANUSAGECATEGORY cung cấp thông tin về các loại hình sử dụng kế hoạch hóa tiền bạc, được sử dụng để phân loại kế hoạch hóa tiền bạc trong thành phần Sales và Distribution của SAP. View này có thể được sử dụng để truy xuất và phân tích các loại hình sử dụng kế hoạch hóa tiền bạc cho mục đích kinh doanh."
keywords:
  - "billing plan"
  - "sử dụng kế hoạch hóa tiền bạc"
  - "thanh toán"
  - "tiền bạc"
  - "sử dụng"
  - "kế hoạch hóa"
  - "sản phẩm"
  - "bán hàng"
  - "sự phân loại"
  - "sử dụng kế hoạch hóa"
  - "sử dụng kế hoạch"
semantic_en: "The I_BILLINGPLANUSAGECATEGORY view provides information about billing plan usage categories, which are used to categorize billing plans in the Sales and Distribution component of SAP. This view can be used to retrieve and analyze billing plan usage categories for business purposes."
app_component: SD-BIL-IV-BP-2CL
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
  - SD-BIL-IV
  - interface-view
  - billing
  - component:SD-BIL-IV-BP-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPLANUSAGECATEGORY

**Billingplanusagecategory**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
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
| `BillingPlanUsageCategory` | ✓ | |  | `SUBSTRING(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillingPlanUsageCategoryText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BillingPlanUsageCategory'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Billing Plan Usage Category'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDBPUSAGECAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
//                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
//@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.sapObjectNodeType.name: 'BillingPlanUsageCategory'
define view I_BillingPlanUsageCategory
  as select from dd07l

  association [0..*] to I_BillingPlanUsageCategoryText as _Text on $projection.BillingPlanUsageCategory = _Text.BillingPlanUsageCategory
{
      @ObjectModel.text.association: '_Text'
  key SUBSTRING(dd07l.domvalue_l, 1, 1) as BillingPlanUsageCategory,

      //Association
      _Text
}
where
      dd07l.domname  = 'SDBP_BPCAT'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
