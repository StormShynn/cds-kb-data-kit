---
name: I_CLFNCHARCDESCDEX
description: Clfncharcdescdex
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
  - data-extraction
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARCDESCDEX

**Clfncharcdescdex**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CharcInternalID` | `CharcDesc.CharcInternalID` |
| key `Language` | `CharcDesc.Language` |
| key `ValidityEndDate` | `CharcDesc.ValidityEndDate` |
| `TimeIntervalNumber` | `CharcDesc.TimeIntervalNumber` |
| `ChangeNumber` | `CharcDesc.ChangeNumber` |
| `CharcDescription` | `CharcDesc.CharcDescription` |
| `ValidityStartDate` | `CharcDesc.ValidityStartDate` |
| `IsDeleted` | `CharcDesc.IsDeleted` |
| `_Language` | *Association* |
| `_Characteristic` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Characteristic` | `I_ClfnCharacteristicDEX` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataExtraction.alternativeKey: ['CharcInternalID','Language','TimeIntervalNumber']
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@EndUserText.label: 'Description of Clfn Characteristic DEX'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'CharcInternalID'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_ClfnCharcDescDEX
  as select from I_ClfnCharcDesc as CharcDesc
  
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language   
  
      /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
      association [1..1] to I_ClfnCharacteristicDEX as _Characteristic
        on  $projection.CharcInternalID    = _Characteristic.CharcInternalID
        and $projection.ValidityStartDate <= _Characteristic.ValidityEndDate
        and $projection.ValidityEndDate   >= _Characteristic.ValidityStartDate

{
  key CharcDesc.CharcInternalID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key CharcDesc.Language,
      @Semantics.businessDate.to: true
  key CharcDesc.ValidityEndDate,
      CharcDesc.TimeIntervalNumber,
      CharcDesc.ChangeNumber,
      @Semantics.text: true
      CharcDesc.CharcDescription,
      @Semantics.businessDate.from: true
      CharcDesc.ValidityStartDate,           
      CharcDesc.IsDeleted,
      
      _Language,
      _Characteristic
}
```
