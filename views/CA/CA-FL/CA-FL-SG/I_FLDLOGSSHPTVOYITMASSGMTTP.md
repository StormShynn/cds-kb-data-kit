---
name: I_FLDLOGSSHPTVOYITMASSGMTTP
description: Fldlogsshptvoyitmassgmttp
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
# I_FLDLOGSSHPTVOYITMASSGMTTP

**Fldlogsshptvoyitmassgmttp**

| Property | Value |
|---|---|
| App Component | `CA-FL-SG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FldLogsShptVoyageUUID` | ✓ | |  |  |
| `FldLogsVoyStgeAssgmtUUID` | ✓ | |  |  |
| `FldLogsVoyStgeAssgmtSqncID` |  | |  |  |
| `FldLogsShipmentItemTypeCode` |  | |  |  |
| `FldLogsReferenceDocumentNumber` |  | |  |  |
| `DeliveryDocument` |  | |  |  |
| `DeliveryDocumentItem` |  | |  |  |
| `FldLogsSrcePlnt` |  | |  |  |
| `FldLogsDestPlnt` |  | |  |  |
| `FldLogsVoyageSrceStage` |  | |  |  |
| `FldLogsVoyageDestStage` |  | |  |  |
| `FldLogsShptItemActualWeight` |  | |  |  |
| `FldLogsShptItemActlWeightUnit` |  | |  |  |
| `FldLogsShptAssignmentStatus` |  | |  |  |
| `FldLogsShptVoyAssgmtCritlty` |  | |  |  |
| `_VoyageAssgmtText` | | ✓ | | |
| `_ItemType` | | ✓ | | |
| `_Voyage` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fld Logs Shpt Voyage Itm Assignment - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  serviceQuality: #C,
  dataClass: #TRANSACTIONAL,
  sizeCategory: #M
}
@VDM.viewType: #TRANSACTIONAL
@ObjectModel :  { semanticKey: ['FldLogsReferenceDocumentNumber'],resultSet.sizeCategory: #XS }
@AccessControl.personalData.blocking : #BLOCKED_DATA_EXCLUDED
@ObjectModel.sapObjectNodeType.name: 'FldLogsShptVoyItemAssignment'
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'AGN',
  allowNewCompositions: true,
  allowNewDatasources: false,
  dataSources: ['ShptVoyItmAsgn'],
  quota: {
    maximumFields: 1000,
    maximumBytes: 100000
  }
}
//for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]
define view entity I_FldLogsShptVoyItmAssgmtTP
  as projection on R_FldLogsShptVoyItmAssgmtTP as ShptVoyItmAsgn
{
  key FldLogsShptVoyageUUID,
  key FldLogsVoyStgeAssgmtUUID,
      FldLogsVoyStgeAssgmtSqncID,
      FldLogsShipmentItemTypeCode,
      FldLogsReferenceDocumentNumber,

      @EndUserText.label: 'Delivery Document'
      DeliveryDocument,
      DeliveryDocumentItem,
      FldLogsSrcePlnt,
      FldLogsDestPlnt,
      FldLogsVoyageSrceStage,
      FldLogsVoyageDestStage,

      @Semantics.quantity.unitOfMeasure: 'FldLogsShptItemActlWeightUnit'
      FldLogsShptItemActualWeight,
      FldLogsShptItemActlWeightUnit,
      FldLogsShptAssignmentStatus,

      @EndUserText.label: 'Voyage Assignment Criticality'
      FldLogsShptVoyAssgmtCritlty,
      _VoyageAssgmtText,
      _ItemType,
      _Voyage : redirected to parent I_FldLogsShipmentVoyageTP
}
```
