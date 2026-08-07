---
name: I_FLDLOGSSHPTSTGEASSGPACKGGTP
description: "Fldlogsshptstgeassgpackggtp"
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
# I_FLDLOGSSHPTSTGEASSGPACKGGTP

**Fldlogsshptstgeassgpackggtp**

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
| `_ShptPackggUnit` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'FL Shpt Stge Assgn for Packaging - TP'
@VDM: {
viewType: #TRANSACTIONAL,
usage.type: [#TRANSACTIONAL_PROCESSING_SERVICE] }
@ObjectModel.usageType: {
serviceQuality: #C,
dataClass: #TRANSACTIONAL,
sizeCategory: #L }
@ObjectModel : {semanticKey: ['FldLogsShptVoyageNumber'] }
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'FldLogsShipmentVoyageStage'
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'VOY',
  allowNewCompositions: true,
  allowNewDatasources: false,
  dataSources: ['FldLogsShptStgAsgn'],
  quota: {
    maximumFields: 800,
    maximumBytes: 80000
  }
}

//for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]

define view entity I_FldLogsShptStgeAssgPackggTP
  as projection on R_FldLogsShptStgeAssgPackggTP as FldLogsShptStgAsgn
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

      _ShptPackggUnit : redirected to parent I_FldLogsShptPackggUnitTP
}
```
