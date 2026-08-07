---
name: I_FLDLOGSSHPTSTGEASSGMTCTNTP
description: "Fldlogsshptstgeassgmtctntp"
app_component: CA-FL-SG
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-FL
  - CA-FL-SG
  - interface-view
  - transactional-processing
  - component:CA-FL-SG
  - lob:Cross-Application Components
---
# I_FLDLOGSSHPTSTGEASSGMTCTNTP

**Fldlogsshptstgeassgmtctntp**

| Property | Value |
|---|---|
| App Component | `CA-FL-SG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FldLogsShptVoyageUUID` | ✓ | |  |  |  |  |
| `FldLogsVoyStgeAssgmtUUID` | ✓ | |  |  |  |  |
| `FldLogsVoyStgeAssgmtSqncID` |  | |  |  |  |  |
| `FldLogsShipmentItemTypeCode` |  | |  |  |  |  |
| `FldLogsShptVoyageNumber` |  | |  |  |  |  |
| `FldLogsShptVoyageTypeCode` |  | |  |  |  |  |
| `FldLogsShptVoyageVehicleNumber` |  | |  |  |  |  |
| `FldLogsShptVoyageVehicleName` |  | |  |  |  |  |
| `FldLogsVoyageChangeDateTime` |  | |  |  |  |  |
| `FldLogsSrcePlnt` |  | |  |  |  |  |
| `FldLogsDestPlnt` |  | |  |  |  |  |
| `FldLogsVoyageSrceStage` |  | |  |  |  |  |
| `FldLogsVoyageDestStage` |  | |  |  |  |  |
| `FldLogsShptAssignmentStatus` |  | |  |  |  |  |
| `_ShptCtnUnit` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'BO Intf for Cont Unit Voyages - TP'
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck:#MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@VDM.viewType:#TRANSACTIONAL
//Enable extensibility
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'VOV',
  allowNewCompositions: true,
  dataSources: ['FldLogsShptStgAsgn'],
quota: {
    maximumFields: 1000 ,
    maximumBytes: 100000
  }
}
 //for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.sapObjectNodeType.name: 'FldLogsShipmentVoyageStage'
define view entity I_FldLogsShptStgeAssgmtCtnTP
  as projection on R_FldLogsShptStgeAssgmtCtnTP as FldLogsShptStgAsgn
{


  key FldLogsShptVoyageUUID,
  key FldLogsVoyStgeAssgmtUUID,
      FldLogsVoyStgeAssgmtSqncID,
      FldLogsShipmentItemTypeCode,
      FldLogsShptVoyageNumber,
      FldLogsShptVoyageTypeCode,
      FldLogsShptVoyageVehicleNumber,
      FldLogsShptVoyageVehicleName,
      FldLogsVoyageChangeDateTime,
      FldLogsSrcePlnt,
      FldLogsDestPlnt,
      FldLogsVoyageSrceStage,
      FldLogsVoyageDestStage,
      FldLogsShptAssignmentStatus,
      _ShptCtnUnit : redirected to parent I_FldLogsDelivContainerUnitTP

}
```
