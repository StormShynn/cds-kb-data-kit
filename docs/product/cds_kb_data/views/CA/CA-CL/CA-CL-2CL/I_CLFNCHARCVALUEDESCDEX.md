---
name: I_CLFNCHARCVALUEDESCDEX
description: "Clfncharcvaluedescdex"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CLFNCHARCVALUEDESCDEX

**Clfncharcvaluedescdex**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharcInternalID` | ✓ | |  |  | `NUMC(10)` | Characteristic Internal ID |
| `CharcValuePositionNumber` | ✓ | |  |  | `NUMC(4)` | Int counter |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid-to date |
| `TimeIntervalNumber` |  | |  |  | `NUMC(4)` | Internal Counter for Archiving Objects by ECM |
| `CharcValueDescription` |  | |  |  | `CHAR(70)` | Characteristic value description |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `_Language` | | ✓ | | | | |
| `_Characteristic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Characteristic` | `I_ClfnCharacteristicDEX` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataExtraction.alternativeKey: ['CharcInternalID','CharcValuePositionNumber','Language','TimeIntervalNumber']
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.mapping: [ 
  { table: 'CAWNT',
    role: #MAIN,
    tableElement: ['ATINN','ATZHL','SPRAS','ADZHL'], 
    viewElement: ['CharcInternalID','CharcValuePositionNumber','Language','TimeIntervalNumber'] }, 
  { table: 'CABN', 
    role: #LEFT_OUTER_TO_ONE_JOIN, 
    tableElement: ['ATINN','ADZHL'], 
    viewElement: ['CharcInternalID','TimeIntervalNumber'] } ]
@EndUserText.label: 'Clfn Charc Value Description DEX'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'CharcValuePositionNumber'
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #SQL_DATA_SOURCE                  ]
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API     
@VDM.viewType: #BASIC     
define view entity I_ClfnCharcValueDescDEX 
  as select from I_ClfnCharcValueDesc as CharacteristicValueDesc
    inner join I_ClfnCharcBasic       as Characteristic
    on  Characteristic.CharcInternalID         = CharacteristicValueDesc.CharcInternalID
    and Characteristic.CharcIdentificationCode = ''
    
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language

      association [1..*] to I_ClfnCharacteristicDEX as _Characteristic
        on $projection.CharcInternalID    = _Characteristic.CharcInternalID    
        and $projection.ValidityStartDate <= _Characteristic.ValidityEndDate
        and $projection.ValidityEndDate   >= _Characteristic.ValidityStartDate                 
{       
        @ObjectModel.foreignKey.association: '_Characteristic'
  key   Characteristic.CharcInternalID,
        @ObjectModel.foreignKey.association: null
  key   CharacteristicValueDesc.CharcValuePositionNumber,
        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language: true
  key   CharacteristicValueDesc.Language,
        @Semantics.businessDate.to: true
  key   CharacteristicValueDesc.ValidityEndDate,  
        CharacteristicValueDesc.TimeIntervalNumber,
        @Semantics.text: true
        CharacteristicValueDesc.CharcValueDescription,
        CharacteristicValueDesc.ChangeNumber,
        @Semantics.businessDate.from: true
        CharacteristicValueDesc.ValidityStartDate,

        CharacteristicValueDesc.IsDeleted,
        
        _Language,
        _Characteristic
}
```
