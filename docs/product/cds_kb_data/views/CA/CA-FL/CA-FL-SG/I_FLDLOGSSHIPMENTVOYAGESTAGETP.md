---
name: I_FLDLOGSSHIPMENTVOYAGESTAGETP
description: "Fldlogsshipmentvoyagestagetp"
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
# I_FLDLOGSSHIPMENTVOYAGESTAGETP

**Fldlogsshipmentvoyagestagetp**

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
| `FldLogsVoyageStageID` | ✓ | |  |  |  |  |
| `FldLogsSrcePlnt` |  | |  |  |  |  |
| `FldLogsDestPlnt` |  | |  |  |  |  |
| `FldLogsShptVoyageStatusCode` |  | |  |  |  |  |
| `FldLogsVoyageSrceStage` |  | |  |  |  |  |
| `FldLogsVoyageDestStage` |  | |  |  |  |  |
| `FldLogsVoyagePlndArrvlDate` |  | |  |  |  |  |
| `FldLogsVoyagePlndDeptrDate` |  | |  |  |  |  |
| `FldLogsVoyageStgeChangeDateTme` |  | |  |  |  |  |
| `FldLogsVoyPlannedStartTime` |  | |  |  |  |  |
| `FldLogsVoyPlannedEndTime` |  | |  |  |  |  |
| `_VoyStsText` | | ✓ | | | | |
| `_SrcePlantText` | | ✓ | | | | |
| `_DestPlantText` | | ✓ | | | | |
| `_Voyage` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Field Logistics Shipment Voyage Stage - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED }
}
@VDM.viewType:#TRANSACTIONAL
@AbapCatalog.extensibility:{
  extensible:true,
  dataSources: ['FldLogsShipmentVoyageStage'],
  allowNewCompositions: true,
  allowNewDatasources: false,
  elementSuffix: 'STG',
  quota: {
    maximumFields: 816 ,
    maximumBytes: 8160
  }
}
@ObjectModel.sapObjectNodeType.name: 'FldLogsShipmentVoyageStage'
 //for C1 contract
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]

define view entity I_FldLogsShipmentVoyageStageTP
  as projection on R_FldLogsShipmentVoyageStageTP as FldLogsShipmentVoyageStage
{
  key  FldLogsShptVoyageUUID,
  key  FldLogsVoyageStageID,
       FldLogsSrcePlnt,
       FldLogsDestPlnt,
       FldLogsShptVoyageStatusCode,
       //       @EndUserText.label: 'Voyage Status Crticality'
       //       FldLogsShptVoyStsCriticality,
       FldLogsVoyageSrceStage,
       FldLogsVoyageDestStage,
       FldLogsVoyagePlndArrvlDate,
       FldLogsVoyagePlndDeptrDate,
       @Semantics.systemDateTime.localInstanceLastChangedAt: true
       FldLogsVoyageStgeChangeDateTme,
       FldLogsVoyPlannedStartTime,
       FldLogsVoyPlannedEndTime,
       _VoyStsText,
       _SrcePlantText,
       _DestPlantText,
       _Voyage : redirected to parent I_FldLogsShipmentVoyageTP

}
```
