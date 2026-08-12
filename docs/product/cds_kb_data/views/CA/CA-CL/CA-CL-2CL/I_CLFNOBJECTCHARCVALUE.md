---
name: I_CLFNOBJECTCHARCVALUE
description: "Clfnobjectcharcvalue"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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
# I_CLFNOBJECTCHARCVALUE

**Clfnobjectcharcvalue**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
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
| `TimeIntervalNumber` | ✓ | |  |  | `NUMC(4)` | Internal Counter for Archiving Objects by ECM |
| `ClfnObjectInternalID` |  | |  |  | `NUMC(18)` | Internal Object Number |
| `CharcValueIntervalType` |  | |  |  | `CHAR(1)` | Code for value dependency |
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
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `CharcValueSortPosition` |  | |  |  | `NUMC(4)` | Sort field for AUSP char. values |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_Characteristic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Characteristic` | `I_ClfnCharacteristic` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AbapCatalog.sqlViewName: 'INGCCLFN11'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Clfn Characteristic Value of Object'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,  
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ClfnObjectCharcValue
  as select from I_ClfnObjectCharcValueBasic as Valuation
    inner join P_ClfnObjectHeader as ObjectHeader
      on  Valuation.ClassType      = ObjectHeader.ClassType
      and Valuation.ClfnObjectType = ObjectHeader.ClfnObjectType
      and Valuation.ClfnObjectID   = ObjectHeader.objekp      

    /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
    association [1..1] to I_ClfnCharacteristic as _Characteristic 
       // Usage of validity start and end date replaces key field TimeIntervalNumber of characteristic in the condition 
      on $projection.CharcInternalID    = _Characteristic.CharcInternalID   
     and $projection.ValidityStartDate <= _Characteristic.ValidityEndDate
     and $projection.ValidityEndDate   >= _Characteristic.ValidityStartDate        
                    
{
  key ObjectHeader.ClfnObjectID,
  key ObjectHeader.ClfnObjectTable,
  key Valuation.CharcInternalID,
  key Valuation.CharcValuePositionNumber,
  key Valuation.ClfnObjectType,
  key Valuation.ClassType,
  key Valuation.TimeIntervalNumber,
      ObjectHeader.ClfnObjectInternalID,            
      Valuation.CharcValueIntervalType,
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
      Valuation.CharacteristicAuthor,   
      Valuation.IsDeleted,
      Valuation.ChangeNumber, 
      Valuation.CharcValueSortPosition,
      Valuation.ValidityStartDate,
      Valuation.ValidityEndDate,          
      ObjectHeader.LastChangeDateTime,
        
     _Characteristic
}
```
