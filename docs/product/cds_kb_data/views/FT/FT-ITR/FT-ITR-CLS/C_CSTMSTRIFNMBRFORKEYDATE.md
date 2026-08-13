---
name: C_CSTMSTRIFNMBRFORKEYDATE
description: "Cstmstrifnmbrforkeydate"
semantic_vi: "Cung cấp số thuế quan và mô tả tương ứng cho một số hiệu dụng phân loại thương mại và khoảng thời gian cụ thể. Sử dụng để lấy thông tin thuế quan cho một số hiệu dụng phân loại thương mại và thời gian cụ thể."
keywords:
  - "customs tariff"
  - "trade classification"
  - "function number scheme"
  - "date range"
  - "customs information"
  - "thuế quan"
  - "phân loại thương mại"
  - "số hiệu dụng"
  - "khoảng thời gian"
  - "thông tin thuế quan"
semantic_en: "Provides customs tariff numbers and corresponding descriptions for a specific trade classification function number scheme and date range. Used to retrieve customs tariff information for a given trade classification function number scheme and date."
app_component: FT-ITR-CLS
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
  - FT
  - FT-ITR
  - FT-ITR-CLS
  - consumption-view
  - component:FT-ITR-CLS
  - lob:Other
---
# C_CSTMSTRIFNMBRFORKEYDATE

**Cstmstrifnmbrforkeydate**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
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
| `TrdClassfctnNmbrSchm` | ✓ | |  |  | `CHAR(10)` | Trade Classification Numbering Scheme |
| `CustomsTariffNumber` | ✓ | |  |  | `CHAR(30)` | Customs Tariff Number |
| `TrdClassfctnNmbrSchmCntnt` |  | |  |  | `CHAR(10)` | Trade Classification Numbering Scheme Content |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid From |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To |
| `TrdClassfctnNmbrForOfclDesc` |  | |  |  | `CHAR(30)` | Number |
| `TrdClassfctnNmbrForCnctntdDesc` |  | |  |  | `CHAR(30)` | Number |
| `UnitOfMeasureSystem` |  | |  |  | `CHAR(10)` | Unit of Measure System |
| `CustomsUnitOfMeasure` |  | |  |  | `CHAR(10)` | First Customs Unit of Measure |
| `SecondCustomsUnitOfMeasure` |  | |  |  | `CHAR(10)` | Second Customs Unit of Measure |
| `SupplementaryUnit` |  | |  |  | `UNIT(3)` | First Supplementary Unit |
| `SecondSupplementaryUnit` |  | |  |  | `UNIT(3)` | Second Supplementary Unit |
| `_Date` | | ✓ | | | | |
| `_OfficialDesc` | | ✓ | | | | |
| `_CnctntdDesc` | | ✓ | | | | |
| `_TrdClassfctnNmbrSchmCntnt` | | ✓ | | | | |
| `_TrdClassfctnNmbrSchm` | | ✓ | | | | |
| `_SupplementaryUnit` | | ✓ | | | | |
| `_SecondSupplementaryUnit` | | ✓ | | | | |
| `_CustomsUnitOfMeasure` | | ✓ | | | | |
| `_SecondCustomsUnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Date` | `I_CalendarDate` | [0..1] |

## Source Code

```abap
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'CSTTRIFNOKDATE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED

@ObjectModel.modelingPattern:#NONE

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ] 
define view C_CstmsTrifNmbrForKeyDate
  with parameters
    P_KeyDate : sll_validon
  as select from I_CstmsTrifNmbrForKeyDate (P_KeyDate : $parameters.P_KeyDate) 
      association [0..1] to I_CalendarDate         as _Date                       on  $projection.ValidityStartDate = _Date.CalendarDate
{
  key TrdClassfctnNmbrSchm,
  key CustomsTariffNumber,
      TrdClassfctnNmbrSchmCntnt,
      ValidityStartDate,
      ValidityEndDate,
      @ObjectModel.text.association: '_OfficialDesc'
      TrdClassfctnNmbrForOfclDesc,
      @ObjectModel.text.association: '_CnctntdDesc'
      TrdClassfctnNmbrForCnctntdDesc,
      UnitOfMeasureSystem,
      CustomsUnitOfMeasure,
      SecondCustomsUnitOfMeasure,
      SupplementaryUnit,
      SecondSupplementaryUnit,

      // Will be removed later
      _Date,
      _OfficialDesc,
      _CnctntdDesc,
      _TrdClassfctnNmbrSchmCntnt,
      _TrdClassfctnNmbrSchm,
      _SupplementaryUnit,
      _SecondSupplementaryUnit,
      _CustomsUnitOfMeasure,
      _SecondCustomsUnitOfMeasure
}
```
