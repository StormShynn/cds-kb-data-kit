---
name: C_EQUIPMENTCLFNCHARCVALUEDEX
description: "Equipmentclfncharcvaluedex"
semantic_vi: "View này hiển thị giá trị đặc tính thiết bị cho bảo trì thiết bị trong bảo trì nhà máy. Nó được sử dụng để trích xuất dữ liệu cho đặc tính thiết bị."
keywords:
  - "equipment"
  - "equipment maintenance"
  - "plant maintenance"
  - "equipment characteristic"
  - "equipment characteristic value"
  - "equipment clfn"
  - "equipment class type"
  - "equipment characteristic internal id"
  - "equipment characteristic value position number"
  - "equipment characteristic data type"
  - "equipment characteristic interval type"
semantic_en: "This view exposes equipment characteristic values for equipment maintenance in plant maintenance. It is used to extract data for equipment characteristics."
app_component: PM-EQM-EQ-2CL
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
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - consumption-view
  - data-extraction
  - equipment
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# C_EQUIPMENTCLFNCHARCVALUEDEX

**Equipmentclfncharcvaluedex**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
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
| `Equipment` | ✓ | |  | `cast( Valuation.ClfnObjectID as equnr )` |  |  |
| `ClassType` | ✓ | |  |  |  |  |
| `ClfnCharcValuePositionNumber` | ✓ | |  | `CharcValuePositionNumber` |  |  |
| `CharcInternalID` | ✓ | |  |  |  |  |
| `ClfnObjectID` |  | |  |  |  |  |
| `$session.system_date).Characteristic` |  | |  | `Valuation._Characteristic(P_KeyDate: $session.system_date).Characteristic` |  |  |
| `$session.system_date).CharcDataType` |  | |  | `Valuation._Characteristic(P_KeyDate: $session.system_date).CharcDataType` |  |  |
| `KeyDate` |  | |  | `$session.system_date` |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `CharcValueIntervalType` |  | |  | `CharcValueDependency` |  |  |
| `CharcValue` |  | |  |  |  |  |
| `CharcFromNumericValue` |  | |  |  |  |  |
| `CharcFromNumericValueUnit` |  | |  |  |  |  |
| `CharcToNumericValue` |  | |  |  |  |  |
| `CharcToNumericValueUnit` |  | |  |  |  |  |
| `CharcFromDecimalValue` |  | |  |  |  |  |
| `CharcToDecimalValue` |  | |  |  |  |  |
| `CharcFromAmount` |  | |  |  |  |  |
| `CharcToAmount` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `CharcFromDate` |  | |  |  |  |  |
| `CharcToDate` |  | |  |  |  |  |
| `CharcFromTime` |  | |  |  |  |  |
| `CharcToTime` |  | |  |  |  |  |
| `LastChangeDateTime` |  | | `_Equipment` | `LastChangeDateTime` |  |  |
| `EquipmentCategory` |  | | `_Equipment` | `EquipmentCategory` |  |  |
| `MaintenancePlanningPlant` |  | | `_Equipment._CurrentTimeSegment` | `MaintenancePlanningPlant` |  |  |
| `CompanyCode` |  | | `_Equipment._CurrentTimeSegment._LocationAccountAssignment` | `CompanyCode` |  |  |
| `MaintenancePlant` |  | | `_Equipment._CurrentTimeSegment._LocationAccountAssignment` | `MaintenancePlant` |  |  |
| `_Equipment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Equipment` | `I_Equipment` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Equipment Charac Values Data Extraction'

@VDM.viewType: #CONSUMPTION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'Equipment'
define view entity C_EquipmentClfnCharcValueDEX 
  as select from I_ClfnObjectCharcValForKeyDate(P_KeyDate: $session.system_date ) as Valuation   
  association [1..1] to I_Equipment as _Equipment on _Equipment.Equipment  = Valuation.ClfnObjectID 
    {
    key cast( Valuation.ClfnObjectID as equnr ) as Equipment, 
    key Valuation.ClassType,
    key Valuation.CharcValuePositionNumber as ClfnCharcValuePositionNumber,
    key Valuation.CharcInternalID,
    @Consumption.hidden: true
    Valuation.ClfnObjectID,    
    Valuation._Characteristic(P_KeyDate: $session.system_date).Characteristic,
    Valuation._Characteristic(P_KeyDate: $session.system_date).CharcDataType,  
    @EndUserText.label:'Key Date'
    $session.system_date as KeyDate,
    Valuation.ChangeNumber,
    Valuation.CharcValueDependency as CharcValueIntervalType,
    Valuation.CharcValue,
    Valuation.CharcFromNumericValue,  
    Valuation.CharcFromNumericValueUnit,
    Valuation.CharcToNumericValue,     
    Valuation.CharcToNumericValueUnit,
    Valuation.CharcFromDecimalValue,
    Valuation.CharcToDecimalValue,
    @Semantics.amount.currencyCode: 'Currency'
    Valuation.CharcFromAmount,
    @Semantics.amount.currencyCode: 'Currency'
    Valuation.CharcToAmount,
    Valuation.Currency,                           
    Valuation.CharcFromDate,
    Valuation.CharcToDate,
    Valuation.CharcFromTime,
    Valuation.CharcToTime, 
    _Equipment.LastChangeDateTime,
    _Equipment.EquipmentCategory,
    _Equipment._CurrentTimeSegment.MaintenancePlanningPlant,
    _Equipment._CurrentTimeSegment._LocationAccountAssignment.CompanyCode,
    _Equipment._CurrentTimeSegment._LocationAccountAssignment.MaintenancePlant,
    @Consumption.hidden: true
    Valuation._Characteristic,
    @Consumption.hidden: true
    _Equipment 
}where
      Valuation.ClfnObjectTable = 'EQUI' and
      Valuation.ClfnObjectType = 'O'
```
