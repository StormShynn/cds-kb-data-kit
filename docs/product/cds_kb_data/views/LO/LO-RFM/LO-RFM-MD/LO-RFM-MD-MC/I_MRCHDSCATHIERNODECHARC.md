---
name: I_MRCHDSCATHIERNODECHARC
description: "Mrchdscathiernodecharc"
app_component: LO-RFM-MD-MC
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_MRCHDSCATHIERNODECHARC

**Mrchdscathiernodecharc**

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
| `CharcInternalID` |  | |  | `cast (Characteristic.atinn as atinn_no_conv preserving type )` |  |  |
| `_Characteristic` | | ✓ | | | | |
| `_CharacteristicDesc` | | ✓ | | | | |
| `_MrchdsCategoryHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Characteristic` | `I_ClfnCharacteristic` | [1..1] |
| `_CharacteristicDesc` | `I_ClfnCharcDesc` | [0..*] |
| `_MrchdsCategoryHierarchyNode` | `I_MrchdsCategoryHierarchyNode` | [1..1] |

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
@ObjectModel.sapObjectNodeType.name : 'MrchdsCatHierNodeCharc'
@EndUserText.label                  : 'Merchandise Cat Hier Node Characteristic'

define view entity I_MrchdsCatHierNodeCharc
  as select from klah as MrchdsCatHierNode
    inner join   ksml as CharacteristicAssignment on CharacteristicAssignment.clint = MrchdsCatHierNode.clint
    inner join   cabn as Characteristic           on CharacteristicAssignment.imerk = Characteristic.atinn
    
  association [1..1] to I_ClfnCharacteristic          as _Characteristic              on $projection.CharcInternalID             = _Characteristic.CharcInternalID
                                                                                      and _Characteristic.TimeIntervalNumber     = '0000'
  association [0..*] to I_ClfnCharcDesc               as _CharacteristicDesc          on $projection.CharcInternalID             = _CharacteristicDesc.CharcInternalID
  association [1..1] to I_MrchdsCategoryHierarchyNode as _MrchdsCategoryHierarchyNode on $projection.MrchdsCategoryHierarchyNode = _MrchdsCategoryHierarchyNode.MrchdsCategoryHierarchyNode

{
        @ObjectModel.foreignKey.association: '_MrchdsCategoryHierarchyNode'
  key   cast(MrchdsCatHierNode.class as rfm_mrchdcathiernode preserving type )       as MrchdsCategoryHierarchyNode,
  key   Characteristic.atnam                                                         as Characteristic,
        cast (Characteristic.atinn   as atinn_no_conv preserving type  )             as CharcInternalID,

        /* Associations */
        _Characteristic,
        _CharacteristicDesc,
        _MrchdsCategoryHierarchyNode
}
where
  MrchdsCatHierNode.wwskz = '0'
```
