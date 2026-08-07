---
name: I_FLDLOGSRCVDPACKGGINCTNTP
description: Fldlogsrcvdpackgginctntp
app_component: CA-FL-RET
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-FL
  - CA-FL-RET
  - interface-view
  - transactional-processing
  - component:CA-FL-RET
  - lob:Cross-Application Components
---
# I_FLDLOGSRCVDPACKGGINCTNTP

**Fldlogsrcvdpackgginctntp**

| Property | Value |
|---|---|
| App Component | `CA-FL-RET` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FldLogsContainerID` | ✓ | |  |  |
| `DispatchedStartDate` | ✓ | |  |  |
| `FldLogsDispatchPlant` | ✓ | |  |  |
| `NumberOfCtnTripsPerDay` | ✓ | |  |  |
| `FldLogsShipmentID` |  | |  |  |
| `FldLogsCtnProcessingStartDate` |  | |  |  |
| `FldLogsCtnProcessingEndDate` |  | |  |  |
| `FldLogsCtnChangeDateTime` |  | |  |  |
| `FldLogsContainerUUID` |  | |  |  |
| `FieldLogisticsProcessType` |  | |  |  |
| `FldLogsContainerUnitUUID` |  | |  |  |
| `FldLogsShptVoyageUUID` |  | |  |  |
| `FldLogsShptVoyageNumber` |  | |  |  |
| `FldLogsVoyageSrceStage` |  | |  |  |
| `FldLogsVoyageDestStage` |  | |  |  |
| `FieldLogisticsReceivingPlant` |  | |  |  |
| `FldLogsSealNumber1` |  | |  |  |
| `FldLogsSealNumber2` |  | |  |  |
| `FldLogsSealNumber3` |  | |  |  |
| `FldLogsSealNumber4` |  | |  |  |
| `FldLogsSealNumber5` |  | |  |  |
| `FldLogsParentContainerID` |  | |  |  |
| `FldLogsReferenceDocumentNumber` |  | |  |  |
| `Material` |  | |  |  |
| `Batch` |  | |  |  |
| `SerialNumber` |  | |  |  |
| `SystemMessageTypeCriticality` |  | |  |  |
| `InboundDelivery` |  | |  |  |
| `FldLogsShptItmHndlgUnitID` |  | |  |  |
| `HandlingUnitExternalID` |  | |  |  |
| `FldLogsContainerOwner` |  | |  |  |
| `FldLogsRcvdContainerIsReleased` |  | |  |  |
| `FieldLogisticsKitIdentifier` |  | |  |  |
| `FldLogsItemType` |  | |  |  |
| `WBSElementExternalID` |  | |  |  |
| `LocationIsDestinationLocation` |  | |  |  |
| `FldLogsShptCtnStsCriticality` |  | |  |  |
| `FldLogsContainerItemStatus` |  | |  |  |
| `FldLogsContainerStatus` |  | |  |  |
| `IsMarkedForDeletion` |  | |  |  |
| `_CtnList` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@EndUserText.label: 'Fld Logs Rcvd Packgg Container - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MIXED
}
@VDM.viewType:#TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name: 'FldLogsRcvdShipmentContainer'
@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['_RcvdPackggTP'],
  elementSuffix: 'RCT',
  quota: {
    maximumFields: 1000,
    maximumBytes: 100000
  },
  allowNewCompositions: true
}
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

//for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]

define view entity I_FldLogsRcvdPackggInCtnTP
  as projection on R_FldLogsRcvdPackggInCtnTP as _RcvdPackggTP
{
  key FldLogsContainerID,
  key DispatchedStartDate,
  key FldLogsDispatchPlant,
  key NumberOfCtnTripsPerDay,
      FldLogsShipmentID,
      FldLogsCtnProcessingStartDate,
      FldLogsCtnProcessingEndDate,
      FldLogsCtnChangeDateTime,
      FldLogsContainerUUID,
      FieldLogisticsProcessType,
      FldLogsContainerUnitUUID,
      FldLogsShptVoyageUUID,
      FldLogsShptVoyageNumber,
      FldLogsVoyageSrceStage,
      FldLogsVoyageDestStage,
      FieldLogisticsReceivingPlant,
      FldLogsSealNumber1,
      FldLogsSealNumber2,
      FldLogsSealNumber3,
      FldLogsSealNumber4,
      FldLogsSealNumber5,
      FldLogsParentContainerID,
      FldLogsReferenceDocumentNumber,
      Material,
      Batch,
      SerialNumber,

      @EndUserText.label: 'System Message Type Criticality'
      SystemMessageTypeCriticality,
      InboundDelivery,

      @EndUserText.label: 'Handling Unit ID'
      FldLogsShptItmHndlgUnitID,
      HandlingUnitExternalID,
      FldLogsContainerOwner,
      FldLogsRcvdContainerIsReleased,
      FieldLogisticsKitIdentifier,
      FldLogsItemType,
      WBSElementExternalID,

      @Semantics.booleanIndicator: true
      LocationIsDestinationLocation,

      @EndUserText.label: 'Container Status Criticality'
      FldLogsShptCtnStsCriticality,
      FldLogsContainerItemStatus,
      FldLogsContainerStatus,
      IsMarkedForDeletion,

      _CtnList : redirected to parent I_FldLogsRcvdContainerListTP
}
```
