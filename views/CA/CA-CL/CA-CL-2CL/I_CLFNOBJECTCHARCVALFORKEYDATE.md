---
name: I_CLFNOBJECTCHARCVALFORKEYDATE
description: Clfnobjectcharcvalforkeydate
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
# I_CLFNOBJECTCHARCVALFORKEYDATE

**Clfnobjectcharcvalforkeydate**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ClfnObjectID` | `Valuation.ClfnObjectID` |
| key `ClfnObjectTable` | `Valuation.ClfnObjectTable` |
| key `CharcInternalID` | `Valuation.CharcInternalID` |
| key `CharcValuePositionNumber` | `Valuation.CharcValuePositionNumber` |
| key `ClfnObjectType` | `Valuation.ClfnObjectType` |
| key `ClassType` | `Valuation.ClassType` |
| `ClfnObjectInternalID` | `Valuation.ClfnObjectInternalID` |
| `CharcValueDependency` | `Valuation.CharcValueIntervalType` |
| `CharcValue` | `Valuation.CharcValue` |
| `CharcFromNumericValue` | `Valuation.CharcFromNumericValue` |
| `CharcFromNumericValueUnit` | `Valuation.CharcFromNumericValueUnit` |
| `CharcToNumericValue` | `Valuation.CharcToNumericValue` |
| `CharcToNumericValueUnit` | `Valuation.CharcToNumericValueUnit` |
| `CharcFromDecimalValue` | `Valuation.CharcFromDecimalValue` |
| `CharcToDecimalValue` | `Valuation.CharcToDecimalValue` |
| `CharcFromAmount` | `Valuation.CharcFromAmount` |
| `CharcToAmount` | `Valuation.CharcToAmount` |
| `Currency` | `Valuation.Currency` |
| `CharcFromDate` | `Valuation.CharcFromDate` |
| `CharcToDate` | `Valuation.CharcToDate` |
| `CharcFromTime` | `Valuation.CharcFromTime` |
| `CharcToTime` | `Valuation.CharcToTime` |
| `CharacteristicAuthor` | `Valuation.CharacteristicAuthor` |
| `ChangeNumber` | `Valuation.ChangeNumber` |
| `ValidityStartDate` | `Valuation.ValidityStartDate` |
| `ValidityEndDate` | `Valuation.ValidityEndDate` |
| `LastChangeDateTime` | `Valuation.LastChangeDateTime` |
| `_Characteristic` | *Association* |
| `_CharacteristicValue` | *Association* |

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
