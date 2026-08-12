---
name: C_CSTMSTRIFNMBRFORKEYDATE
description: "Cstmstrifnmbrforkeydate"
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
