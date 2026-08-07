---
name: C_CHANGEMSTROBJMGMTRECORDDEX
description: Changemstrobjmgmtrecorddex
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-WUI
  - PLM-WUI-OBJ
  - consumption-view
  - data-extraction
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# C_CHANGEMSTROBJMGMTRECORDDEX

**Changemstrobjmgmtrecorddex**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` | ✓ | |  |  |  |  |
| `ChangeNumberObjectType` | ✓ | |  |  |  |  |
| `ObjMgmtRecdObjectInternalID` | ✓ | |  |  |  |  |
| `ObjMgmtRecdObject` |  | |  |  |  |  |
| `ObjMgmtRecdObjIsLockedForChg` |  | |  |  |  |  |
| `ObjMgmtRecdObjRevisionLevel` |  | |  |  |  |  |
| `ObjMgmtRecdDescription` |  | |  |  |  |  |
| `ObjMgmtRecdObjIsPlanned` |  | |  |  |  |  |
| `ObjMgmtRecdCreatedBy` |  | |  |  |  |  |
| `ObjMgmtRecdCreationDate` |  | |  |  |  |  |
| `ObjMgmtRecdLastChangedBy` |  | |  |  |  |  |
| `ObjMgmtRecdLastChangedAt` |  | |  |  |  |  |
| `ObjMgmtRecdObjLastChangedBy` |  | |  |  |  |  |
| `ObjMgmtRecdObjLastChangedAt` |  | |  |  |  |  |
| `_ChangeMaster` | | ✓ | | | | |
| `_ChangeMasterObjectType` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Object Management Rec of Change Master'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #MASTER
}
@VDM.viewType: #CONSUMPTION
@ObjectModel.sapObjectNodeType.name: 'ObjectManagementRecord'
@ObjectModel.representativeKey: 'ObjMgmtRecdObjectInternalID'
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                                                    
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern        : #ANALYTICAL_DIMENSION
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,        
        delta.changeDataCapture: {
          mapping:[
            {
              table:'aeoi', role: #MAIN,
              viewElement: ['ObjMgmtRecdObjectInternalID','ChangeNumber', 'ChangeNumberObjectType'],
              tableElement: [ 'OBJKT','AENNR','AETYP']
             }
           ]
        }
    }
}

define view entity C_ChangeMstrObjMgmtRecordDEX
  as select from I_ChangeMstrObjectMgmtRecord

{
      @ObjectModel.foreignKey.association: '_ChangeMaster'
  key ChangeNumber,
      @ObjectModel.foreignKey.association: '_ChangeMasterObjectType'
  key ChangeNumberObjectType,
  key ObjMgmtRecdObjectInternalID,
      ObjMgmtRecdObject,
      @Semantics.booleanIndicator:true
      ObjMgmtRecdObjIsLockedForChg,
      ObjMgmtRecdObjRevisionLevel,
      @Semantics.text: true
      ObjMgmtRecdDescription,
      @Semantics.booleanIndicator:true
      ObjMgmtRecdObjIsPlanned,
      @Semantics.user.createdBy: true
      ObjMgmtRecdCreatedBy,
      @Semantics.systemDate.createdAt: true
      ObjMgmtRecdCreationDate,
      @Semantics.user.lastChangedBy: true
      ObjMgmtRecdLastChangedBy,
      @Semantics.systemDate.lastChangedAt: true
      ObjMgmtRecdLastChangedAt,
      @Semantics.user.lastChangedBy: true
      ObjMgmtRecdObjLastChangedBy,
      @Semantics.systemDate.lastChangedAt: true
      ObjMgmtRecdObjLastChangedAt,
      _ChangeMaster,
      _ChangeMasterObjectType
}
```
