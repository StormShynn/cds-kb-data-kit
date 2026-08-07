---
name: I_REARCHITECTUREOBJECTNODE
description: Rearchitectureobjectnode
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REARCHITECTUREOBJECTNODE

**Rearchitectureobjectnode**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REArchitectureObjectRltnUUID` | ✓ | |  | `nodeuuid` |  |  |
| `REArchitectureObjectOID` |  | |  | `nodeoid` |  |  |
| `REArchitectureObjectParentOID` |  | |  | `parentoid` |  |  |
| `REArchitectureObjectUUID` |  | |  | `architectureobjectuuid` |  |  |
| `_REArchitectureObject` | | ✓ | | | | |
| `_REArchitectureObjectParent` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REArchitectureObject` | `I_REArchitectureObject` | [1..1] |
| `_REArchitectureObjectParent` | `I_REArchitectureObject` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'RE Architecture Object Hierarchy Node'
@ObjectModel.semanticKey: ['REArchitectureObjectOID']
@ObjectModel.representativeKey: 'REArchitectureObjectRltnUUID'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'REArchitectureObjectNode'
}
@VDM.viewType: #BASIC
define view entity I_REArchitectureObjectNode
  as select from viobnode
  association [1..1] to I_REArchitectureObject as _REArchitectureObject       on $projection.REArchitectureObjectUUID = _REArchitectureObject.REArchitectureObjectUUID
  association [0..1] to I_REArchitectureObject as _REArchitectureObjectParent on $projection.REArchitectureObjectParentOID = _REArchitectureObjectParent.REArchitectureObjectOID

{
  key nodeuuid               as REArchitectureObjectRltnUUID,
      nodeoid                as REArchitectureObjectOID,
      parentoid              as REArchitectureObjectParentOID,
      architectureobjectuuid as REArchitectureObjectUUID,
      //
      //      /* Associations */
      _REArchitectureObject,
      _REArchitectureObjectParent

}
```
