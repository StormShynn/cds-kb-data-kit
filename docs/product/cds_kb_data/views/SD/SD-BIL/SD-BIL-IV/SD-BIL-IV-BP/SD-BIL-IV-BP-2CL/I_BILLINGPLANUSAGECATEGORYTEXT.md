---
name: I_BILLINGPLANUSAGECATEGORYTEXT
description: "Billingplanusagecategorytext"
semantic_vi: "View I_BILLINGPLANUSAGECATEGORYTEXT cung cấp mô tả văn bản cho các loại sử dụng kế hoạch hóa tiền trong ngôn ngữ cụ thể. Nó được sử dụng để lấy tên của các loại sử dụng kế hoạch hóa tiền để hiển thị hoặc mục đích báo cáo."
keywords:
  - "billing plan"
  - "usage category"
  - "text description"
  - "language"
  - "billing plan usage category"
  - "sap sd"
  - "sales and distribution"
  - "lob sales & distribution"
  - "sd-bil-iv-bp-2cl"
semantic_en: "The I_BILLINGPLANUSAGECATEGORYTEXT view provides text descriptions for billing plan usage categories in a specific language. It is used to retrieve the names of billing plan usage categories for display or reporting purposes."
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
  - text-view
  - billing
  - text
  - component:SD-BIL-IV-BP-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPLANUSAGECATEGORYTEXT

**Billingplanusagecategorytext**

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
| `BillingPlanUsageCategory` | ✓ | |  | `SUBSTRING(dd07t.domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BillingPlanUsageCategoryName` |  | |  | `ddtext` |  |  |
| `_BillingPlanUsageCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingPlanUsageCategory` | `I_BillingPlanUsageCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingPlanUsageCategory'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Billing Plan Usage Category - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDBPUSAGECATT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
//                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
//@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_BillingPlanUsageCategoryText
  as select from dd07t

  association [0..1] to I_BillingPlanUsageCategory as _BillingPlanUsageCategory on $projection.BillingPlanUsageCategory = _BillingPlanUsageCategory.BillingPlanUsageCategory
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.sapObjectNodeTypeReference: 'BillingPlanUsageCategory'
      @ObjectModel.foreignKey.association: '_BillingPlanUsageCategory'
  key SUBSTRING(dd07t.domvalue_l, 1, 1) as BillingPlanUsageCategory,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                  as Language,

      @Semantics.text
      ddtext                      as BillingPlanUsageCategoryName,

      //Association
      _BillingPlanUsageCategory,
      _Language
}
where
      dd07t.domname  = 'SDBP_BPCAT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
