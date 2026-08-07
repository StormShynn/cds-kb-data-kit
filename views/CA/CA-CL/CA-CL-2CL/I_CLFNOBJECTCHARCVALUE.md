---
name: I_CLFNOBJECTCHARCVALUE
description: Clfnobjectcharcvalue
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
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
| `ClfnObjectID` | ✓ | |  |  |  |  |
| `ClfnObjectTable` | ✓ | |  |  |  |  |
| `CharcInternalID` | ✓ | |  |  |  |  |
| `CharcValuePositionNumber` | ✓ | |  |  |  |  |
| `ClfnObjectType` | ✓ | |  |  |  |  |
| `ClassType` | ✓ | |  |  |  |  |
| `TimeIntervalNumber` | ✓ | |  |  |  |  |
| `ClfnObjectInternalID` |  | |  |  |  |  |
| `CharcValueIntervalType` |  | |  |  |  |  |
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
| `CharacteristicAuthor` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `CharcValueSortPosition` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
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
