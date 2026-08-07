---
name: I_WRNTYCLAIMAPPLICATIONLOG
description: Wrntyclaimapplicationlog
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMAPPLICATIONLOG

**Wrntyclaimapplicationlog**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ApplicationLog` | ✓ | |  | `lognumber` |  |  |
| `ApplicationLogHandle` |  | |  | `log_handle` |  |  |
| `ApplicationLogObject` |  | |  | `object` |  |  |
| `ApplicationLogSubobject` |  | |  | `subobject` |  |  |
| `ApplicationJobDescription` |  | |  | `extnumber` |  |  |
| `NumberOfAlerts` |  | |  | `msg_cnt_al` |  |  |
| `NumberOfErrorMessages` |  | |  | `msg_cnt_e` |  |  |

## Source Code

```abap
@EndUserText.label: 'Warranty claim application log'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
  //viewType: #BASIC,*******Modernization Task********
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  usageType.dataClass: #TRANSACTIONAL,
  //usageType.serviceQuality: #C,*******Modernization Task********
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #XXL,
  representativeKey: 'ApplicationLog',
 supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                          #CDS_MODELING_ASSOCIATION_TARGET, 
                          #SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE, 
                          #EXTRACTION_DATA_SOURCE ],
                          
  modelingPattern: #ANALYTICAL_DIMENSION
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL 
}
@Analytics.technicalName: 'IWRNTYCLMAPPLOG'             
@Metadata.ignorePropagatedAnnotations:true

define view entity I_WrntyClaimApplicationLog
  as select from balhdr as log
{
  key log.lognumber                                                                        as ApplicationLog,
      log.log_handle                                                                       as ApplicationLogHandle,
      log.object                                                                           as ApplicationLogObject,
      log.subobject                                                                        as ApplicationLogSubobject,
      log.extnumber                                                                        as ApplicationJobDescription,
      log.msg_cnt_al                                                                       as NumberOfAlerts,
      log.msg_cnt_e                                                                        as NumberOfErrorMessages
}
where
  object = 'WTY' or
  object = 'WTY_RULE'
```
