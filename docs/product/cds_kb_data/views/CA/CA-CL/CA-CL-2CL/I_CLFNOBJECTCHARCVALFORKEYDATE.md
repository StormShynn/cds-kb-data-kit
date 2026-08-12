---
name: I_CLFNOBJECTCHARCVALFORKEYDATE
description: "Clfnobjectcharcvalforkeydate"
app_component: CA-CL-2CL
software_component: SAP_BASIS
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
  - CA
  - CA-CL
  - interface-view
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNOBJECTCHARCVALFORKEYDATE

**Clfnobjectcharcvalforkeydate**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClfnObjectID` | ✓ | |  |  | `CHAR(90)` | Key of Object to be Classified |
| `ClfnObjectTable` | ✓ | |  |  | `CHAR(30)` | Classification Object |
| `CharcInternalID` | ✓ | |  |  | `NUMC(10)` | Characteristic Internal ID |
| `CharcValuePositionNumber` | ✓ | |  |  | `NUMC(3)` | Characteristic value counter |
| `ClfnObjectType` | ✓ | |  |  | `CHAR(1)` | Indicator: Object/Class |
| `ClassType` | ✓ | |  |  | `CHAR(3)` | Class Type |
| `ClfnObjectInternalID` |  | |  |  | `NUMC(18)` | Internal Object Number |
| `CharcValueDependency` |  | |  | `CharcValueIntervalType` | `CHAR(1)` | Code for value dependency |
| `CharcValue` |  | |  |  | `CHAR(70)` | Characteristic Value |
| `CharcFromNumericValue` |  | |  |  | `FLTP(16)` | Internal floating point from |
| `CharcFromNumericValueUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement |
| `CharcToNumericValue` |  | |  |  | `FLTP(16)` | Internal floating point value to |
| `CharcToNumericValueUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement |
| `CharcFromDecimalValue` |  | |  |  | `DEC(31)` | Lower Boundary for Numeric Field |
| `CharcToDecimalValue` |  | |  |  | `DEC(31)` | Upper Boundary for Numeric Field |
| `CharcFromAmount` |  | |  |  | `CURR(23)` | Lower Boundary for Currency Field |
| `CharcToAmount` |  | |  |  | `CURR(23)` | Upper Boundary for Currency Field |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CharcFromDate` |  | |  |  | `DATS(8)` | Lower Boundary for Date-Interval |
| `CharcToDate` |  | |  |  | `DATS(8)` | Upper Boundary for Date-Interval |
| `CharcFromTime` |  | |  |  | `TIMS(6)` | Lower Boundary for Time-Interval |
| `CharcToTime` |  | |  |  | `TIMS(6)` | Upper Boundary for Time-Interval |
| `CharacteristicAuthor` |  | |  |  | `CHAR(1)` | Classification Author |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_Characteristic` | | ✓ | | | | |
| `_CharacteristicValue` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Characteristic` | `I_ClfnCharacteristicForKeyDate` | [1..1] |
| `_CharacteristicValue` | `I_ClfnCharcValueForKeyDate` | [0..*] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'INGCCLFN8'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Clfn Charc Val of Obj for Key Date'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
define view I_ClfnObjectCharcValForKeyDate
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : sydate
  as select from I_ClfnObjectCharcValue as Valuation
      association [1..1] to I_ClfnCharacteristicForKeyDate as _Characteristic 
        on $projection.CharcInternalID = _Characteristic.CharcInternalID   
      association [0..*] to I_ClfnCharcValueForKeyDate as _CharacteristicValue
        on _CharacteristicValue.CharcInternalID    = $projection.CharcInternalID 
        and _CharacteristicValue.CharcValue        = $projection.CharcValue            
{
  key Valuation.ClfnObjectID,
  key Valuation.ClfnObjectTable,
  key Valuation.CharcInternalID,
  key Valuation.CharcValuePositionNumber,
  key Valuation.ClfnObjectType,
  key Valuation.ClassType,
      Valuation.ClfnObjectInternalID,       
      Valuation.CharcValueIntervalType as CharcValueDependency,       // old name is kept for compatibility
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
      @Semantics.currencyCode: true
      Valuation.Currency,
      Valuation.CharcFromDate,
      Valuation.CharcToDate,
      Valuation.CharcFromTime,
      Valuation.CharcToTime, 
      Valuation.CharacteristicAuthor,      
      Valuation.ChangeNumber, 
      @Semantics.businessDate.from: true
      Valuation.ValidityStartDate,
      @Semantics.businessDate.to: true
      Valuation.ValidityEndDate,
      Valuation.LastChangeDateTime,
      
      _Characteristic,
      _CharacteristicValue
}
  where ValidityStartDate   <= $parameters.P_KeyDate
    and ValidityEndDate     >= $parameters.P_KeyDate
    and IsDeleted           = ''
```
