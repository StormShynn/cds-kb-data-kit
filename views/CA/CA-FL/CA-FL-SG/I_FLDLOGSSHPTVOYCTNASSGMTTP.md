---
name: I_FLDLOGSSHPTVOYCTNASSGMTTP
description: Fldlogsshptvoyctnassgmttp
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
# I_FLDLOGSSHPTVOYCTNASSGMTTP

**Fldlogsshptvoyctnassgmttp**

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
| `FldLogsContainerID` |  | |  |  |  |  |
| `FldLogsSrcePlnt` |  | |  |  |  |  |
| `FldLogsDestPlnt` |  | |  |  |  |  |
| `FldLogsVoyageSrceStage` |  | |  |  |  |  |
| `FldLogsVoyageDestStage` |  | |  |  |  |  |
| `FldLogsCtnActualWeight` |  | |  |  |  |  |
| `FldLogsCtnActualWeightUnit` |  | |  |  |  |  |
| `FldLogsShptAssignmentStatus` |  | |  |  |  |  |
| `FldLogsShptVoyAssgmtCritlty` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `SuplrCoIsBusPrpsCmpltd` |  | |  |  |  |  |
| `_VoyageAssgmtText` | | ✓ | | | | |
| `_ItemType` | | ✓ | | | | |
| `_Voyage` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fld Logs Shpt Voyage Ctn Assignment - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'FldLogsShptVoyCtnAssignment'
@ObjectModel.usageType :{
  serviceQuality: #C,
  dataClass: #TRANSACTIONAL,
  sizeCategory: #M
}
@VDM.viewType: #TRANSACTIONAL
@ObjectModel :  { semanticKey: ['FldLogsContainerID'],resultSet.sizeCategory: #XS }
@AccessControl.personalData.blocking : #BLOCKED_DATA_EXCLUDED
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'AGN',
  allowNewCompositions: true,
  allowNewDatasources: false,
  dataSources: ['ShptVoyCtnAsgn'],
  quota: {
    maximumFields: 1000,
    maximumBytes: 100000
  }
}
 //for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]
define view entity I_FldLogsShptVoyCtnAssgmtTP
  as projection on R_FldLogsShptVoyCtnAssgmtTP as ShptVoyCtnAsgn
{
  key FldLogsShptVoyageUUID,
  key FldLogsVoyStgeAssgmtUUID,
      FldLogsVoyStgeAssgmtSqncID,
      FldLogsShipmentItemTypeCode,
      FldLogsContainerID,
      FldLogsSrcePlnt,
      FldLogsDestPlnt,
      FldLogsVoyageSrceStage,
      FldLogsVoyageDestStage,

      @Semantics.quantity.unitOfMeasure: 'FldLogsCtnActualWeightUnit'
      FldLogsCtnActualWeight,
      FldLogsCtnActualWeightUnit,
      FldLogsShptAssignmentStatus,

      @EndUserText.label: 'Voyage Assignment Criticality'
      FldLogsShptVoyAssgmtCritlty,

      @Semantics.booleanIndicator : true
      IsBusinessPurposeCompleted,

      @Semantics.booleanIndicator : true
      SuplrCoIsBusPrpsCmpltd,
      _VoyageAssgmtText,
      _ItemType,
      _Voyage : redirected to parent I_FldLogsShipmentVoyageTP
}
```
