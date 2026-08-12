---
name: I_CLFNOBJECTCHARCVALUEDEX
description: "Clfnobjectcharcvaluedex"
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
  - data-extraction
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNOBJECTCHARCVALUEDEX

**Clfnobjectcharcvaluedex**

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
| `CharcInternalID` | ✓ | |  |  | `NUMC(10)` | Characteristic Internal ID |
| `ClfnCharcValuePositionNumber` | ✓ | |  | `CharcValuePositionNumber` | `NUMC(3)` | Characteristic value counter |
| `ClfnObjectType` | ✓ | |  |  | `CHAR(1)` | Indicator: Object/Class |
| `ClassType` | ✓ | |  |  | `CHAR(3)` | Class Type |
| `TimeIntervalNumber` | ✓ | |  |  | `NUMC(4)` | Internal Counter for Archiving Objects by ECM |
| `ClfnObjectTable` |  | |  |  | `CHAR(30)` | Classification Object |
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
| `CharcAuthor` |  | |  | `CharacteristicAuthor` | `CHAR(1)` | Classification Author |
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
| `_Characteristic` | `I_ClfnCharacteristic` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction.delta.changeDataCapture.mapping: [ 
  { table: 'AUSP',
    role: #MAIN,
    tableElement: ['OBJEK','ATINN','ATZHL','MAFID','KLART','ADZHL'], 
    viewElement: ['ClfnObjectID','CharcInternalID','ClfnCharcValuePositionNumber','ClfnObjectType','ClassType','TimeIntervalNumber'] }, 
  { table: 'CLF_HDR', 
    role: #LEFT_OUTER_TO_ONE_JOIN, 
    tableElement: ['OBTAB','OBJEK','MAFID','KLART'], 
    viewElement: ['ClfnObjectTable','ClfnObjectID','ClfnObjectType','ClassType'] } ]
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Clfn Characteristic Value of Object DEX'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,  
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.sapObjectNodeType.name: 'ClfnObjectCharacteristicValue' 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_ClfnObjectCharcValueDEX
  as select from I_ClfnObjectCharcValueBasic as Valuation
    inner join P_ClfnObjectHeader as ObjectHeader
      on  Valuation.ClassType      = ObjectHeader.ClassType
      and Valuation.ClfnObjectType = ObjectHeader.ClfnObjectType
      and Valuation.ClfnObjectID   = ObjectHeader.objekp      

    association [1..*] to I_ClfnCharacteristic as _Characteristic 
      on $projection.CharcInternalID    = _Characteristic.CharcInternalID   
     and $projection.ValidityStartDate <= _Characteristic.ValidityEndDate
     and $projection.ValidityEndDate   >= _Characteristic.ValidityStartDate        
                    
{
  key ObjectHeader.ClfnObjectID,
  key Valuation.CharcInternalID,
  key Valuation.CharcValuePositionNumber as ClfnCharcValuePositionNumber,
  key Valuation.ClfnObjectType,
  key Valuation.ClassType,
  key Valuation.TimeIntervalNumber,
      ObjectHeader.ClfnObjectTable,         
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
      Valuation.CharacteristicAuthor as CharcAuthor,   
      Valuation.IsDeleted,
      Valuation.ChangeNumber, 
      Valuation.CharcValueSortPosition,
      Valuation.ValidityStartDate,
      Valuation.ValidityEndDate,          
      ObjectHeader.LastChangeDateTime,
        
     _Characteristic
}
where Valuation.ClfnObjectType = 'O'
```
