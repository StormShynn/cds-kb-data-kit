---
name: I_FLDLOGSRCVDPACKAGINGTP
description: Fldlogsrcvdpackagingtp
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
# I_FLDLOGSRCVDPACKAGINGTP

**Fldlogsrcvdpackagingtp**

| Property | Value |
|---|---|
| App Component | `CA-FL-RET` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FldLogsContainerID` | `FldLogsContainerID` |
| key `DispatchedStartDate` | `DispatchedStartDate` |
| key `FldLogsDispatchPlant` | `FldLogsDispatchPlant` |
| key `NumberOfCtnTripsPerDay` | `NumberOfCtnTripsPerDay` |
| `FldLogsShipmentID` | `FldLogsShipmentID` |
| `FldLogsCtnProcessingStartDate` | `FldLogsCtnProcessingStartDate` |
| `FldLogsCtnProcessingEndDate` | `FldLogsCtnProcessingEndDate` |
| `SystemMessageTypeCriticality` | `SystemMessageTypeCriticality` |
| `FldLogsContainerUUID` | `FldLogsContainerUUID` |
| `FieldLogisticsProcessType` | `FieldLogisticsProcessType` |
| `FldLogsContainerUnitUUID` | `FldLogsContainerUnitUUID` |
| `FldLogsShptVoyageUUID` | `FldLogsShptVoyageUUID` |
| `FldLogsShptVoyageNumber` | `FldLogsShptVoyageNumber` |
| `FldLogsVoyageSrceStage` | `FldLogsVoyageSrceStage` |
| `FldLogsVoyageDestStage` | `FldLogsVoyageDestStage` |
| `FldLogsCtnChangeDateTime` | `FldLogsCtnChangeDateTime` |
| `FieldLogisticsReceivingPlant` | `FieldLogisticsReceivingPlant` |
| `FldLogsSealNumber1` | `FldLogsSealNumber1` |
| `FldLogsSealNumber2` | `FldLogsSealNumber2` |
| `FldLogsSealNumber3` | `FldLogsSealNumber3` |
| `FldLogsSealNumber4` | `FldLogsSealNumber4` |
| `FldLogsSealNumber5` | `FldLogsSealNumber5` |
| `FldLogsContainerStatus` | `FldLogsContainerStatus` |
| `FldLogsContainerOwner` | `FldLogsContainerOwner` |
| `FldLogsRcvdContainerIsReleased` | `FldLogsRcvdContainerIsReleased` |
| `LocationIsDestinationLocation` | `LocationIsDestinationLocation` |
| `FldLogsShptCtnStsCriticality` | `FldLogsShptCtnStsCriticality` |
| `Batch` | `Batch` |
| `SerialNumber` | `SerialNumber` |
| `InboundDelivery` | `InboundDelivery` |
| `FldLogsContainerItemStatus` | `FldLogsContainerItemStatus` |
| `FldLogsReferenceDocumentNumber` | `FldLogsReferenceDocumentNumber` |
| `Material` | `Material` |
| `FldLogsShptItmHndlgUnitID` | `FldLogsShptItmHndlgUnitID` |
| `HandlingUnitExternalID` | `HandlingUnitExternalID` |
| `FieldLogisticsKitIdentifier` | `FieldLogisticsKitIdentifier` |
| `FldLogsItemType` | `FldLogsItemType` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `IsMarkedForDeletion` | `IsMarkedForDeletion` |
| `FldLogsCtnActualDispatchPlant` | `FldLogsCtnActualDispatchPlant` |
| `FldLogsCtnActualReceivingPlant` | `FldLogsCtnActualReceivingPlant` |
| `FldLogsParentContainerID` | `FldLogsParentContainerID` |
| `GoodsReceivingPoint` | `GoodsReceivingPoint` |
| `ShippingPoint` | `ShippingPoint` |
| `_RcvdPackggItem` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@EndUserText.label: 'Field Logistics Rcvd Packaging - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MIXED
}
@VDM.viewType:#TRANSACTIONAL
@Search.searchable: true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
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

//for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]

define root view entity I_FldLogsRcvdPackagingTP
  provider contract transactional_interface
  as projection on R_FldLogsRcvdPackagingTP as _RcvdPackggTP
{

  key FldLogsContainerID,
  key DispatchedStartDate,
  key FldLogsDispatchPlant,
  key NumberOfCtnTripsPerDay,
      FldLogsShipmentID,
      FldLogsCtnProcessingStartDate,
      FldLogsCtnProcessingEndDate,

      @EndUserText.label: 'System Message Type Criticality'
      SystemMessageTypeCriticality,
      FldLogsContainerUUID,
      FieldLogisticsProcessType,
      FldLogsContainerUnitUUID,
      FldLogsShptVoyageUUID,
      FldLogsShptVoyageNumber,
      FldLogsVoyageSrceStage,
      FldLogsVoyageDestStage,
      FldLogsCtnChangeDateTime,
      FieldLogisticsReceivingPlant,
      FldLogsSealNumber1,
      FldLogsSealNumber2,
      FldLogsSealNumber3,
      FldLogsSealNumber4,
      FldLogsSealNumber5,
      FldLogsContainerStatus,
      FldLogsContainerOwner,
      FldLogsRcvdContainerIsReleased,

      @Semantics.booleanIndicator: true
      LocationIsDestinationLocation,

      @EndUserText.label: 'Container Status Criticality'
      FldLogsShptCtnStsCriticality,
      Batch,
      SerialNumber,
      InboundDelivery,
      FldLogsContainerItemStatus,
      FldLogsReferenceDocumentNumber,
      Material,

      @EndUserText.label: 'Handling Unit ID'
      FldLogsShptItmHndlgUnitID,
      HandlingUnitExternalID,
      FieldLogisticsKitIdentifier,
      FldLogsItemType,
      WBSElementExternalID,
      IsMarkedForDeletion,
      FldLogsCtnActualDispatchPlant,
      FldLogsCtnActualReceivingPlant,
      FldLogsParentContainerID,
      GoodsReceivingPoint,
      ShippingPoint,

      @Search:{ defaultSearchElement: true,ranking: #HIGH}
      _RcvdPackggItem : redirected to composition child I_FldLogsRcvdPackagingItemTP
}
```
