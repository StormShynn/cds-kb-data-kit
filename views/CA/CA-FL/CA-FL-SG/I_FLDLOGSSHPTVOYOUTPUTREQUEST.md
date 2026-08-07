---
name: I_FLDLOGSSHPTVOYOUTPUTREQUEST
description: Fldlogsshptvoyoutputrequest
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
  - component:CA-FL-SG
  - lob:Cross-Application Components
---
# I_FLDLOGSSHPTVOYOUTPUTREQUEST

**Fldlogsshptvoyoutputrequest**

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
| `FldLogsShptVoyageNumber` |  | |  |  |  |  |
| `FldLogsDestPlnt` |  | |  |  |  |  |
| `FldLogsSrcePlnt` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `SuplrCoIsBusPrpsCmpltd` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'FldLog Shpt Voyage Output Request'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #TRANSACTIONAL
//@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
//@Analytics.dataCategory:#DIMENSION
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]
@ObjectModel.representativeKey: 'FldLogsShptVoyageUUID'                                      
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}

define view entity I_FldLogsShptVoyOutputRequest as select from I_FldLogsShptExprtVoySmmry 
//I_FldLogsShipmentVoyage
{
  
  key FldLogsShptVoyageUUID as FldLogsShptVoyageUUID,
FldLogsShptVoyageNumber as FldLogsShptVoyageNumber,
FldLogsDestPlnt as FldLogsDestPlnt,
FldLogsSrcePlnt as FldLogsSrcePlnt,
@Semantics.booleanIndicator : true
IsBusinessPurposeCompleted,
@Semantics.booleanIndicator : true
SuplrCoIsBusPrpsCmpltd
}
```
