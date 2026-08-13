---
name: C_PURGINFORECDPRICECNDNDEX
description: "Purginforecdpricecndndex"
semantic_vi: "View này hiển thị các bản ghi thông tin mua hàng với giá và điều kiện đã ghi nhận, hữu ích cho việc phân tích dữ liệu mua sắm."
keywords:
  - "purchasing information record"
  - "đơn mua hàng"
  - "giá và điều kiện"
  - "procurement data"
  - "thông tin mua hàng"
  - "giá ghi nhận"
  - "điều kiện mua hàng"
  - "ekko"
  - "mm-pur-ana-2cl"
semantic_en: "This view exposes purchasing information records with recorded prices and conditions, useful for analyzing procurement data."
app_component: MM-PUR-ANA-2CL
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
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURGINFORECDPRICECNDNDEX

**Purginforecdpricecndndex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
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
| `PurchasingInfoRecord` | ✓ | |  |  |  |  |
| `PurchasingOrganization` | ✓ | |  |  |  |  |
| `PurchasingInfoRecordCategory` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `ConditionRecord` | ✓ | |  |  |  |  |
| `ConditionValidityEndDate` | ✓ | |  |  |  |  |
| `ConditionSequentialNumberShort` | ✓ | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionValidityStartDate` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionRateValueUnit` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionCalculationTypeShort` |  | |  |  |  |  |
| `ConditionIsDeleted` |  | |  |  |  |  |
| `ConditionToBaseQtyNmrtr` |  | |  |  |  |  |
| `ConditionToBaseQtyDnmntr` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurgDocOrderQuantityUnit` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |

## Source Code

```abap
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@VDM.viewType: #CONSUMPTION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE , #EXTRACTION_DATA_SOURCE ,#CDS_MODELING_ASSOCIATION_TARGET]
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #FACT
@EndUserText.label: 'Purchasing Info Record Pricing Condition'
@ObjectModel.sapObjectNodeType.name: 'PurchasingInfoRecord'
@Metadata.ignorePropagatedAnnotations:true

define view entity C_PurgInfoRecdPriceCndnDEX
  as select from I_PurgInfoRecdPriceCndnAPI01
{
 
      @Search.defaultSearchElement: true
  key PurchasingInfoRecord,
  key PurchasingOrganization,
  key PurchasingInfoRecordCategory,
  key Plant,
  key ConditionRecord,
  key ConditionValidityEndDate,
  key ConditionSequentialNumberShort,

      ConditionType,
      ConditionValidityStartDate,

      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue,
      ConditionRateValueUnit,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,

      ConditionApplication,
      ConditionCalculationTypeShort,
      ConditionIsDeleted,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      BaseUnit,
      Material,
      MaterialGroup,
      PurgDocOrderQuantityUnit,
      ConditionCurrency

}
```
