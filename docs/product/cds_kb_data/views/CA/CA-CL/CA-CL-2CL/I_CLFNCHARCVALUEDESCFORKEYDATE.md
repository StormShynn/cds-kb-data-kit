---
name: I_CLFNCHARCVALUEDESCFORKEYDATE
description: "Clfncharcvaluedescforkeydate"
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
# I_CLFNCHARCVALUEDESCFORKEYDATE

**Clfncharcvaluedescforkeydate**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharcInternalID` | ✓ | |  |  |  |  |
| `CharcValuePositionNumber` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `CharcValueDescription` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `_Characteristic` | | ✓ | | | | |
| `_CharacteristicValue` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Characteristic` | `I_ClfnCharacteristicForKeyDate` | [1..1] |
| `_CharacteristicValue` | `I_ClfnCharcValueForKeyDate` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'INGCCHR13'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Desc of Clfn Charc Val for Key Date'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CharcValuePositionNumber'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_ClfnCharcValueDescForKeyDate
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : sydate
  as select from I_ClfnCharcValueDesc as CharcValueDesc
     
      association [1..1] to I_ClfnCharacteristicForKeyDate as _Characteristic
        on $projection.CharcInternalID          = _Characteristic.CharcInternalID 

      association [1..1] to I_ClfnCharcValueForKeyDate as _CharacteristicValue
        on $projection.CharcInternalID          = _CharacteristicValue.CharcInternalID 
       and $projection.CharcValuePositionNumber = _CharacteristicValue.CharcValuePositionNumber 
{
      @ObjectModel.foreignKey.association: '_Characteristic' 
  key CharcValueDesc.CharcInternalID, 
  key CharcValueDesc.CharcValuePositionNumber,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key CharcValueDesc.Language, 
      @Semantics.text: true 
      CharcValueDesc.CharcValueDescription, 
      CharcValueDesc.ChangeNumber, 
      @Semantics.businessDate.from: true
      CharcValueDesc.ValidityStartDate, 
      @Semantics.businessDate.to: true
      CharcValueDesc.ValidityEndDate,   
      
      _Characteristic,
      _CharacteristicValue,
      _Language
}
where CharcValueDesc.ValidityStartDate   <= $parameters.P_KeyDate
and   CharcValueDesc.ValidityEndDate     >= $parameters.P_KeyDate
and   CharcValueDesc.IsDeleted = ''
```
