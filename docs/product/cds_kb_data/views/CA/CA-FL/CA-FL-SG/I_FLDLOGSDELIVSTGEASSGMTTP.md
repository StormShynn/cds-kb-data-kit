---
name: I_FLDLOGSDELIVSTGEASSGMTTP
description: "Fldlogsdelivstgeassgmttp"
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
# I_FLDLOGSDELIVSTGEASSGMTTP

**Fldlogsdelivstgeassgmttp**

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
| `_ShptStgeItm` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Intf BO for FL Shpt Items Voyages - TP'
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #MANDATORY
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
  dataSources: ['ShptStgeAssgmt'],
quota: {
    maximumFields: 1000 ,
    maximumBytes: 100000
  }
}
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.sapObjectNodeType.name: 'FldLogsShipmentVoyageStage'
define view entity I_FldLogsDelivStgeAssgmtTP
as projection on R_FldLogsShptStgeAssgmtTP as ShptStgeAssgmt
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
      _ShptStgeItm : redirected to parent I_FldLogsDeliveryItemTP
}
```
