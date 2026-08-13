---
name: I_BILLINGPLANCATEGORYTEXT
description: "Billingplancategorytext"
semantic_vi: "View I_BILLINGPLANCATEGORYTEXT cung cấp mô tả văn bản cho các loại kế hoạch hóa hóa đơn trong các ngôn ngữ khác nhau, có thể được sử dụng để hiển thị tên loại kế hoạch hóa hóa đơn trong giao diện người dùng."
keywords:
  - "billing plan category"
  - "text description"
  - "language"
  - "sap cds view"
  - "sd-bil-iv-bp-2cl"
  - "sales & distribution"
  - "lob"
  - "sales"
  - "distribution"
  - "billing"
  - "category"
  - "text"
semantic_en: "The I_BILLINGPLANCATEGORYTEXT view provides text descriptions for billing plan categories in different languages, which can be used to display category names in user interfaces."
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
# I_BILLINGPLANCATEGORYTEXT

**Billingplancategorytext**

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
| `BillingPlanCategory` | ✓ | |  | `cast( dd07t.domvalue_l as fptyp_fp )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BillingPlanCategoryName` |  | |  | `ddtext` |  |  |
| `_BillingPlanCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingPlanCategory` | `I_BillingPlanCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingPlanCategory'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Billing Plan Category - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
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

define view entity I_BillingPlanCategoryText
  as select from dd07t

  association [0..1] to I_BillingPlanCategory as _BillingPlanCategory on $projection.BillingPlanCategory = _BillingPlanCategory.BillingPlanCategory
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.sapObjectNodeTypeReference: 'BillingPlanCategory'
      @ObjectModel.foreignKey.association: '_BillingPlanCategory'
  key cast( dd07t.domvalue_l as fptyp_fp ) as BillingPlanCategory,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                  as Language,

      @Semantics.text: true
      ddtext                      as BillingPlanCategoryName,

      //Associations
      _BillingPlanCategory,
      _Language
}
where
      dd07t.domname  = 'FPTYP'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
