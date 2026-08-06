---
name: I_FLDLOGSSHIPMENTVOYAGETP
description: Fldlogsshipmentvoyagetp
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
  - shipment
  - component:CA-FL-SG
  - lob:Cross-Application Components
---
# I_FLDLOGSSHIPMENTVOYAGETP

**Fldlogsshipmentvoyagetp**

| Property | Value |
|---|---|
| App Component | `CA-FL-SG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FldLogsShptVoyageUUID` | `FldLogsShptVoyageUUID` |
| `FldLogsShptVoyageNumber` | `FldLogsShptVoyageNumber` |
| `FldLogsShptVoyageTypeCode` | `FldLogsShptVoyageTypeCode` |
| `FldLogsShptVoyageVehicleNumber` | `FldLogsShptVoyageVehicleNumber` |
| `FldLogsShptVoyageVehicleName` | `FldLogsShptVoyageVehicleName` |
| `FldLogsShptVoyageStatusCode` | `FldLogsShptVoyageStatusCode` |
| `FldLogsVoyageChangeDateTime` | `FldLogsVoyageChangeDateTime` |
| `FldLogsVoyLastChangeDateTime` | `FldLogsVoyLastChangeDateTime` |
| `FldLogsShptVoyIsExternallyMngd` | `FldLogsShptVoyIsExternallyMngd` |
| `Country` | `Country` |
| `FldLogsVoyageCarrierID` | `FldLogsVoyageCarrierID` |
| `IsBusinessPurposeCompleted` | `IsBusinessPurposeCompleted` |
| `_Stage` | *Association* |
| `_PackggAssgmt` | *Association* |
| `_CtnAssgmt` | *Association* |
| `_ItmAssgmt` | *Association* |
| `_HndlgUnitAssgmt` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Field Logistics Shipment Voyage - TP'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: false
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@VDM.viewType:#TRANSACTIONAL
//Enable extensibility
@AbapCatalog.extensibility:{
  extensible:true,
  dataSources: ['FldLogsShipmentVoyage'],
  allowNewCompositions: true,
  allowNewDatasources: false,
  elementSuffix: 'VOY',
  quota: {
    maximumFields: 816 ,
    maximumBytes: 8160
  }
}
@ObjectModel.sapObjectNodeType.name: 'FieldLogisticsShipmentVoyage'
 //for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]
define root view entity I_FldLogsShipmentVoyageTP
  provider contract transactional_interface
  as projection on R_FldLogsShipmentVoyageTP as FldLogsShipmentVoyage
{
  key FldLogsShptVoyageUUID,
      FldLogsShptVoyageNumber,
      FldLogsShptVoyageTypeCode,
      FldLogsShptVoyageVehicleNumber,
      FldLogsShptVoyageVehicleName,
      FldLogsShptVoyageStatusCode,
      FldLogsVoyageChangeDateTime,
      FldLogsVoyLastChangeDateTime,
      FldLogsShptVoyIsExternallyMngd,
      Country,
      FldLogsVoyageCarrierID,
      @Semantics.booleanIndicator: true
      IsBusinessPurposeCompleted,
      /* Associations */
      @Search:{ defaultSearchElement: true,ranking: #HIGH}
      _Stage           : redirected to composition child I_FldLogsShipmentVoyageStageTP,
      _PackggAssgmt    : redirected to composition child I_FldLogsShptVoyPackggAssgmtTP,
      _CtnAssgmt       : redirected to composition child I_FldLogsShptVoyCtnAssgmtTP,
      _ItmAssgmt       : redirected to composition child I_FldLogsShptVoyItmAssgmtTP,
      _HndlgUnitAssgmt : redirected to composition child I_FldLogsVoyHndlgUnitAssgmtTP

}
```
