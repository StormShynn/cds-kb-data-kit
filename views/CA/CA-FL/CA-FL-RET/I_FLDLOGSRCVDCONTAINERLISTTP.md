---
name: I_FLDLOGSRCVDCONTAINERLISTTP
description: Fldlogsrcvdcontainerlisttp
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
# I_FLDLOGSRCVDCONTAINERLISTTP

**Fldlogsrcvdcontainerlisttp**

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
| `FldLogsCtnProcessingStartDate` | `FldLogsCtnProcessingStartDate` |
| `FldLogsCtnProcessingEndDate` | `FldLogsCtnProcessingEndDate` |
| `SystemMessageTypeCriticality` | `SystemMessageTypeCriticality` |
| `FldLogsShipmentID` | `FldLogsShipmentID` |
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
| `GoodsReceivingPoint` | `GoodsReceivingPoint` |
| `ShippingPoint` | `ShippingPoint` |
| `_CtnStatText` | *Association* |
| `_DispatchPlantText` | *Association* |
| `_ItemStatText` | *Association* |
| `_ReceivingPlantText` | *Association* |
| `_CtnItemTP` | *Association* |
| `_RcvdPackggInCtn` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'FL RCVD Container List Interface - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'FldLogsRcvdShipmentContainer'
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #TRANSACTIONAL
}
@VDM.viewType:#TRANSACTIONAL
@Search.searchable: true
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'RCT',
  allowNewDatasources: false,
  dataSources: ['_FldLogsRcvdCtnList'],
  quota: {
    maximumFields: 408,
    maximumBytes: 40800
  },
  allowNewCompositions: true
}

//for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]

define root view entity I_FldLogsRcvdContainerListTP
  provider contract transactional_interface
  as projection on I_FldLogsContainerListTP as _FldLogsRcvdCtnList
{
  key FldLogsContainerID,
  key DispatchedStartDate,
  key FldLogsDispatchPlant,
  key NumberOfCtnTripsPerDay,
      FldLogsCtnProcessingStartDate,
      FldLogsCtnProcessingEndDate,

      @EndUserText.label: 'System Message Type Criticality'
      SystemMessageTypeCriticality,
      FldLogsShipmentID,
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

      //      @Semantics.booleanIndicator: true
      //      IsBusinessPurposeCompleted,
      //
      //      @Semantics.booleanIndicator: true
      //      SuplrCoIsBusPrpsCmpltd,
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

      @EndUserText.label: 'Handling Unit'
      FldLogsShptItmHndlgUnitID,
      HandlingUnitExternalID,
      FieldLogisticsKitIdentifier,
      FldLogsItemType,
      WBSElementExternalID,
      IsMarkedForDeletion,
      FldLogsCtnActualDispatchPlant,
      FldLogsCtnActualReceivingPlant,
      GoodsReceivingPoint,
      ShippingPoint,

      /* Associations */
      _CtnStatText,
      _DispatchPlantText,
      _ItemStatText,
      _ReceivingPlantText,

      @Search:{ defaultSearchElement: true,ranking: #HIGH}
      _CtnItemTP : redirected to composition child I_FldLogsRcvdContainerItemTP,
      _RcvdPackggInCtn : redirected to composition child I_FldLogsRcvdPackggInCtnTP

}
```
