---
name: I_MRCHDSCATCHARCVALRSTRCN
description: "Mrchdscatcharcvalrstrcn"
app_component: LO-RFM-MD-MC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-RFM
  - LO-RFM-MD
  - interface-view
  - component:LO-RFM-MD-MC
  - lob:Logistics General
---
# I_MRCHDSCATCHARCVALRSTRCN

**Mrchdscatcharcvalrstrcn**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-MC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MerchandiseCategory` | ✓ | |  | `cast (MrchdsCategory.class as rfm_mrchdscategory)` |  |  |
| `Characteristic` | ✓ | |  | `atnam` |  |  |
| `ClfnCharcValuePositionNumber` | ✓ | |  | `CharcValuePositionNumber` |  |  |
| `CharcInternalID` |  | |  | `cast (Characteristic.atinn as atinn_no_conv preserving type )` |  |  |
| `ClfnObjectID` |  | |  |  |  |  |
| `CharcValue` |  | |  |  |  |  |
| `CharcFromNumericValue` |  | |  |  |  |  |
| `CharcFromNumericValueUnit` |  | |  |  |  |  |
| `CharcToNumericValue` |  | |  |  |  |  |
| `CharcToNumericValueUnit` |  | |  |  |  |  |
| `CharcValueIntervalType` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `CharcFromDecimalValue` |  | |  |  |  |  |
| `CharcToDecimalValue` |  | |  |  |  |  |
| `CharcFromAmount` |  | |  |  |  |  |
| `CharcToAmount` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `CharcFromDate` |  | |  |  |  |  |
| `CharcToDate` |  | |  |  |  |  |
| `CharcFromTime` |  | |  |  |  |  |
| `CharcToTime` |  | |  |  |  |  |
| `_Characteristic` | | ✓ | | | | |
| `_CharacteristicDesc` | | ✓ | | | | |
| `_MerchandiseCategory` | | ✓ | | | | |
| `_MrchdsCategoryCharacteristic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Characteristic` | `I_ClfnCharacteristic` | [1..1] |
| `_CharacteristicDesc` | `I_ClfnCharcDesc` | [0..*] |
| `_MerchandiseCategory` | `I_MerchandiseCategory` | [1..1] |
| `_MrchdsCategoryCharacteristic` | `I_MrchdsCatCharacteristic` | [1..1] |

## Source Code

```abap
@VDM: {
  viewType                          : #BASIC,
  lifecycle.contract.type           : #PUBLIC_LOCAL_API
}

@Analytics:{
  dataCategory                      : #DIMENSION,
  internalName                      : #LOCAL,
  dataExtraction                    : {
  enabled                           : true
} }

@AccessControl.authorizationCheck   : #CHECK
@ObjectModel: {
   representativeKey                : 'ClfnCharcValuePositionNumber',
   supportedCapabilities            : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION                                                      
                                      ],   
   modelingPattern                  :  #ANALYTICAL_DIMENSION ,                                                                                        
   usageType                        : {serviceQuality: #A,sizeCategory: #XL,dataClass: #TRANSACTIONAL }
 }
@Metadata :{
   ignorePropagatedAnnotations      : true,
   allowExtensions                  : true
}
@ObjectModel.sapObjectNodeType.name : 'MrchdsCatCharcValRstrcn'
@EndUserText.label                  : 'Charcteristic Value Restriction'
 
define view entity I_MrchdsCatCharcValRstrcn
  as select from klah                             as MrchdsCategory
    inner join   I_ClfnObjectCharcValueBasic      as CharcValRestriction on CharcValRestriction.ClfnObjectID    = MrchdsCategory.clint
    inner join   cabn                             as Characteristic      on CharcValRestriction.CharcInternalID = Characteristic.atinn
    
  association [1..1] to I_ClfnCharacteristic      as _Characteristic               on  $projection.CharcInternalID        = _Characteristic.CharcInternalID
                                                                                   and _Characteristic.TimeIntervalNumber = '0000'
  association [0..*] to I_ClfnCharcDesc           as _CharacteristicDesc           on  $projection.CharcInternalID        = _CharacteristicDesc.CharcInternalID
  association [1..1] to I_MerchandiseCategory     as _MerchandiseCategory          on  $projection.MerchandiseCategory    = _MerchandiseCategory.MerchandiseCategory
  association [1..1] to I_MrchdsCatCharacteristic as _MrchdsCategoryCharacteristic on $projection.MerchandiseCategory     = _MrchdsCategoryCharacteristic.MerchandiseCategory
                                                                                   and $projection.Characteristic         = _MrchdsCategoryCharacteristic.Characteristic
{
         @ObjectModel.foreignKey.association: '_MerchandiseCategory'
  key    cast (MrchdsCategory.class  as rfm_mrchdscategory)               as MerchandiseCategory,
         @ObjectModel.foreignKey.association: '_MrchdsCategoryCharacteristic'
  key    Characteristic.atnam                                             as Characteristic,
  key    CharcValRestriction.CharcValuePositionNumber                     as ClfnCharcValuePositionNumber,
         cast (Characteristic.atinn   as atinn_no_conv preserving type  ) as CharcInternalID,
         CharcValRestriction.ClfnObjectID                                 as ClfnObjectID,
         CharcValRestriction.CharcValue                                   as CharcValue,
         CharcValRestriction.CharcFromNumericValue                        as CharcFromNumericValue,
         CharcValRestriction.CharcFromNumericValueUnit                    as CharcFromNumericValueUnit,
         CharcValRestriction.CharcToNumericValue                          as CharcToNumericValue,
         CharcValRestriction.CharcToNumericValueUnit                      as CharcToNumericValueUnit,
         CharcValRestriction.CharcValueIntervalType                       as CharcValueIntervalType,
         CharcValRestriction.IsDeleted                                    as IsDeleted,
         CharcValRestriction.CharcFromDecimalValue                        as CharcFromDecimalValue,
         CharcValRestriction.CharcToDecimalValue                          as CharcToDecimalValue,
         @Semantics.amount.currencyCode: 'Currency'
         CharcValRestriction.CharcFromAmount                              as CharcFromAmount,
         @Semantics.amount.currencyCode: 'Currency'
         CharcValRestriction.CharcToAmount                                as CharcToAmount,
         CharcValRestriction.Currency                                     as Currency,
         CharcValRestriction.CharcFromDate                                as CharcFromDate,
         CharcValRestriction.CharcToDate                                  as CharcToDate,
         CharcValRestriction.CharcFromTime                                as CharcFromTime,
         CharcValRestriction.CharcToTime                                  as CharcToTime,

         /* Associations */
         _Characteristic,
         _CharacteristicDesc,
         _MerchandiseCategory,
         _MrchdsCategoryCharacteristic
}
where
  MrchdsCategory.wwskz = '1'
```
