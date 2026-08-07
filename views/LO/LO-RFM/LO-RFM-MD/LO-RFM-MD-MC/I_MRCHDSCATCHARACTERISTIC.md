---
name: I_MRCHDSCATCHARACTERISTIC
description: Mrchdscatcharacteristic
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
# I_MRCHDSCATCHARACTERISTIC

**Mrchdscatcharacteristic**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-MC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MerchandiseCategory` | ✓ | |  | `cast (MrchdsCategory.class as rfm_mrchdscategory )` |  |  |
| `Characteristic` | ✓ | |  | `atnam` |  |  |
| `CharcInternalID` |  | |  | `cast (Characteristic.atinn as atinn_no_conv preserving type )` |  |  |
| `_Characteristic` | | ✓ | | | | |
| `_CharacteristicDesc` | | ✓ | | | | |
| `_MerchandiseCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Characteristic` | `I_ClfnCharacteristic` | [1..1] |
| `_CharacteristicDesc` | `I_ClfnCharcDesc` | [0..*] |
| `_MerchandiseCategory` | `I_MerchandiseCategory` | [1..1] |

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
   representativeKey                : 'Characteristic',
   supportedCapabilities            : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION                                
                                       ],
   modelingPattern                  :  #ANALYTICAL_DIMENSION ,                                                                                               
   usageType                        : {serviceQuality: #A,sizeCategory: #M,dataClass: #MASTER }
 }
@Metadata :{
   ignorePropagatedAnnotations      : true,
   allowExtensions                  : true
}
@ObjectModel.sapObjectNodeType.name : 'MrchdsCatCharacteristic'
@EndUserText.label                  : 'Assignment of Mrchdscat Charcteristic'

define view entity I_MrchdsCatCharacteristic
  as select from klah as MrchdsCategory
    inner join   ksml as CharacteristicAssignment on CharacteristicAssignment.clint = MrchdsCategory.clint
    inner join   cabn as Characteristic           on CharacteristicAssignment.imerk = Characteristic.atinn

  association [1..1] to I_ClfnCharacteristic  as _Characteristic      on  $projection.CharcInternalID        = _Characteristic.CharcInternalID
                                                                      and _Characteristic.TimeIntervalNumber = '0000'
  association [0..*] to I_ClfnCharcDesc       as _CharacteristicDesc  on  $projection.CharcInternalID        = _CharacteristicDesc.CharcInternalID
  association [1..1] to I_MerchandiseCategory as _MerchandiseCategory on  $projection.MerchandiseCategory    = _MerchandiseCategory.MerchandiseCategory
{
      @ObjectModel.foreignKey.association: '_MerchandiseCategory'
  key cast (MrchdsCategory.class   as  rfm_mrchdscategory   )          as MerchandiseCategory,
  key Characteristic.atnam                                             as Characteristic,
      cast (Characteristic.atinn   as atinn_no_conv preserving type  ) as CharcInternalID,

      /* Associations */
      _Characteristic,
      _CharacteristicDesc,
      _MerchandiseCategory
}
where
  MrchdsCategory.wwskz = '1'
```
