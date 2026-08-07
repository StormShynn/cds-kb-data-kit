---
name: I_MCHIERNODECVRSTRN
description: Mchiernodecvrstrn
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
# I_MCHIERNODECVRSTRN

**Mchiernodecvrstrn**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-MC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MrchdsCategoryHierarchyNode` | ✓ | |  | `cast(MrchdsCatHierNode.class as rfm_mrchdcathiernode preserving type )` |  |  |
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
| `_MrchdsCategoryHierarchyNode` | | ✓ | | | | |
| `_MrchdsCatHierNodeCharc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Characteristic` | `I_ClfnCharacteristic` | [1..1] |
| `_CharacteristicDesc` | `I_ClfnCharcDesc` | [0..*] |
| `_MrchdsCategoryHierarchyNode` | `I_MrchdsCategoryHierarchyNode` | [1..1] |
| `_MrchdsCatHierNodeCharc` | `I_MrchdsCatHierNodeCharc` | [1..1] |

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
@ObjectModel.sapObjectNodeType.name : 'MCHierNodeCVRstrn'     
@EndUserText.label                  : 'MCHN Characteristic Value Restriction'

define view entity I_MCHierNodeCVRstrn
  as select from klah                        as MrchdsCatHierNode
    inner join   I_ClfnObjectCharcValueBasic as CharcValRestriction on CharcValRestriction.ClfnObjectID    = MrchdsCatHierNode.clint
    inner join   cabn                        as Characteristic      on CharcValRestriction.CharcInternalID = Characteristic.atinn
    
  association [1..1] to I_ClfnCharacteristic          as _Characteristic              on  $projection.CharcInternalID             = _Characteristic.CharcInternalID
                                                                                      and _Characteristic.TimeIntervalNumber      = '0000'
  association [0..*] to I_ClfnCharcDesc               as _CharacteristicDesc          on  $projection.CharcInternalID             = _CharacteristicDesc.CharcInternalID
  association [1..1] to I_MrchdsCategoryHierarchyNode as _MrchdsCategoryHierarchyNode on  $projection.MrchdsCategoryHierarchyNode = _MrchdsCategoryHierarchyNode.MrchdsCategoryHierarchyNode
  association [1..1] to I_MrchdsCatHierNodeCharc      as _MrchdsCatHierNodeCharc      on  $projection.MrchdsCategoryHierarchyNode = _MrchdsCatHierNodeCharc.MrchdsCategoryHierarchyNode
                                                                                      and $projection.Characteristic              = _MrchdsCatHierNodeCharc.Characteristic

{
        @ObjectModel.foreignKey.association: '_MrchdsCategoryHierarchyNode'
  key   cast(MrchdsCatHierNode.class as rfm_mrchdcathiernode preserving type ) as MrchdsCategoryHierarchyNode,
        @ObjectModel.foreignKey.association: '_MrchdsCatHierNodeCharc'
  key   Characteristic.atnam                                                   as Characteristic,
  key   CharcValRestriction.CharcValuePositionNumber                           as ClfnCharcValuePositionNumber,
        cast (Characteristic.atinn   as atinn_no_conv preserving type  )       as CharcInternalID,
        CharcValRestriction.ClfnObjectID                                       as ClfnObjectID,
        CharcValRestriction.CharcValue                                         as CharcValue,
        CharcValRestriction.CharcFromNumericValue                              as CharcFromNumericValue,
        CharcValRestriction.CharcFromNumericValueUnit                          as CharcFromNumericValueUnit,
        CharcValRestriction.CharcToNumericValue                                as CharcToNumericValue,
        CharcValRestriction.CharcToNumericValueUnit                            as CharcToNumericValueUnit,
        CharcValRestriction.CharcValueIntervalType                             as CharcValueIntervalType,
        CharcValRestriction.IsDeleted                                          as IsDeleted,
        CharcValRestriction.CharcFromDecimalValue                              as CharcFromDecimalValue,
        CharcValRestriction.CharcToDecimalValue                                as CharcToDecimalValue,
        @Semantics.amount.currencyCode: 'Currency'
        CharcValRestriction.CharcFromAmount                                    as CharcFromAmount,
        @Semantics.amount.currencyCode: 'Currency'
        CharcValRestriction.CharcToAmount                                      as CharcToAmount,
        CharcValRestriction.Currency                                           as Currency,
        CharcValRestriction.CharcFromDate                                      as CharcFromDate,
        CharcValRestriction.CharcToDate                                        as CharcToDate,
        CharcValRestriction.CharcFromTime                                      as CharcFromTime,
        CharcValRestriction.CharcToTime                                        as CharcToTime,

        /* Associations */
        _Characteristic,
        _CharacteristicDesc,
        _MrchdsCategoryHierarchyNode,
        _MrchdsCatHierNodeCharc
}
where
  MrchdsCatHierNode.wwskz = '0'
```
