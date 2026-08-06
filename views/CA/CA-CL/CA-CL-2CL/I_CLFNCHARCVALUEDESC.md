---
name: I_CLFNCHARCVALUEDESC
description: Clfncharcvaluedesc
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
# I_CLFNCHARCVALUEDESC

**Clfncharcvaluedesc**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CharcInternalID` | `cast ( CharacteristicValueDesc.atinn as atinn_no_conv preserving type )` |
| key `CharcValuePositionNumber` | `CharacteristicValueDesc.atzhl` |
| key `Language` | `CharacteristicValueDesc.spras` |
| key `TimeIntervalNumber` | `CharacteristicValueDesc.adzhl` |
| `CharcValueDescription` | `CharacteristicValueDesc.atwtb` |
| `ChangeNumber` | `CharacteristicValueDesc.aennr` |
| `ValidityStartDate` | `CharacteristicValueDesc.datuv` |
| `ValidityEndDate` | `CharacteristicValueDesc.datub` |
| `IsDeleted` | `CharacteristicValueDesc.lkenz` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'INGCCHR18'
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Clfn Characteristic Value Description'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API     
@VDM.viewType: #BASIC     
define view I_ClfnCharcValueDesc  as select from cawnt as CharacteristicValueDesc
  
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language
             
{
  key   cast ( CharacteristicValueDesc.atinn as atinn_no_conv preserving type ) as CharcInternalID,
        @ObjectModel.foreignKey.association: null
  key   CharacteristicValueDesc.atzhl as CharcValuePositionNumber,
        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language: true
  key   CharacteristicValueDesc.spras as Language,
        @ObjectModel.foreignKey.association: null
  key   CharacteristicValueDesc.adzhl as TimeIntervalNumber,
        @Semantics.text: true
        CharacteristicValueDesc.atwtb as CharcValueDescription,
//        CharacteristicValueDesc.techv as TechnicalStatusForm,
        CharacteristicValueDesc.aennr as ChangeNumber,
        @Semantics.businessDate.from: true
        CharacteristicValueDesc.datuv as ValidityStartDate,
        @Semantics.businessDate.to: true
        CharacteristicValueDesc.datub as ValidityEndDate,
        CharacteristicValueDesc.lkenz as IsDeleted,
        
        _Language
}
```
