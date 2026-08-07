---
name: I_CLFNCHARCVALUEFORKEYDATE
description: Clfncharcvalueforkeydate
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
# I_CLFNCHARCVALUEFORKEYDATE

**Clfncharcvalueforkeydate**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CharcInternalID` | ✓ | |  |  |
| `CharcValuePositionNumber` | ✓ | |  |  |
| `CharcValueParentPositionNumber` |  | |  |  |
| `CharcValueHasChild` |  | |  |  |
| `CharcValueDependency` |  | |  | `CharcValueIntervalType` |
| `CharcValue` |  | |  |  |
| `CharcFromNumericValue` |  | |  |  |
| `CharcToNumericValue` |  | |  |  |
| `IsDefaultValue` |  | |  |  |
| `CharcFromNumericValueUnit` |  | |  |  |
| `CharcToNumericValueUnit` |  | |  |  |
| `CharcFromDecimalValue` |  | |  |  |
| `CharcToDecimalValue` |  | |  |  |
| `CharcFromDate` |  | |  |  |
| `CharcToDate` |  | |  |  |
| `CharcFromTime` |  | |  |  |
| `CharcToTime` |  | |  |  |
| `CharcFromAmount` |  | |  |  |
| `CharcToAmount` |  | |  |  |
| `Currency` |  | |  |  |
| `LongTextID` |  | |  |  |
| `ChangeNumber` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `DocumentInfoRecordDocNumber` |  | |  |  |
| `DocumentInfoRecordDocPart` |  | |  |  |
| `DocumentInfoRecordDocVersion` |  | |  |  |
| `DocumentInfoRecordDocType` |  | |  |  |
| `_Characteristic` | | ✓ | | |
| `_CharacteristicValueDesc` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Characteristic` | `I_ClfnCharacteristicForKeyDate` | [1..1] |
| `_CharacteristicValueDesc` | `I_ClfnCharcValueDescForKeyDate` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'INGCCHR8'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Value of Clfn Charc for Key Date'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'CharcValuePositionNumber'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_ClfnCharcValueForKeyDate
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : sydate
  as select from I_ClfnCharcValue as CharacteristicValue        

      association [1..1] to I_ClfnCharacteristicForKeyDate as _Characteristic
        on  $projection.CharcInternalID          = _Characteristic.CharcInternalID   
      
      association [0..*] to I_ClfnCharcValueDescForKeyDate as _CharacteristicValueDesc
        on  $projection.CharcInternalID          = _CharacteristicValueDesc.CharcInternalID
        and $projection.CharcValuePositionNumber = _CharacteristicValueDesc.CharcValuePositionNumber
{
      @ObjectModel.foreignKey.association: '_Characteristic'
  key CharacteristicValue.CharcInternalID,
  key CharacteristicValue.CharcValuePositionNumber,
      CharacteristicValue.CharcValueParentPositionNumber,
      CharacteristicValue.CharcValueHasChild,
      CharacteristicValue.CharcValueIntervalType as CharcValueDependency,   //to keep compatibility
      CharacteristicValue.CharcValue,
      CharacteristicValue.CharcFromNumericValue,
      CharacteristicValue.CharcToNumericValue,
      CharacteristicValue.IsDefaultValue,
      CharacteristicValue.CharcFromNumericValueUnit,
      CharacteristicValue.CharcToNumericValueUnit,
      CharacteristicValue.CharcFromDecimalValue,
      CharacteristicValue.CharcToDecimalValue,
      CharacteristicValue.CharcFromDate,
      CharacteristicValue.CharcToDate,
      CharacteristicValue.CharcFromTime,
      CharacteristicValue.CharcToTime,
      @Semantics.amount.currencyCode: 'Currency'
      CharacteristicValue.CharcFromAmount,
      @Semantics.amount.currencyCode: 'Currency'
      CharacteristicValue.CharcToAmount,
      @Semantics.currencyCode: true
      CharacteristicValue.Currency,        
      CharacteristicValue.LongTextID,
      CharacteristicValue.ChangeNumber,
      @Semantics.businessDate.from: true
      CharacteristicValue.ValidityStartDate,
      @Semantics.businessDate.to: true
      CharacteristicValue.ValidityEndDate,   
      CharacteristicValue.DocumentInfoRecordDocNumber,
      CharacteristicValue.DocumentInfoRecordDocPart,
      CharacteristicValue.DocumentInfoRecordDocVersion,    
      CharacteristicValue.DocumentInfoRecordDocType,  
      
      _Characteristic,
      _CharacteristicValueDesc
}
where CharacteristicValue.ValidityStartDate   <= $parameters.P_KeyDate
and   CharacteristicValue.ValidityEndDate     >= $parameters.P_KeyDate
and   CharacteristicValue.IsDeleted = ''
```
