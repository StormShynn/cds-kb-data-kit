---
name: I_SCHEDULELINECONFSTATUS
description: Schedule LineCONFSTATUS
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - status
  - schedule-line
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SCHEDULELINECONFSTATUS

**Schedule LineCONFSTATUS**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ScheduleLineConfirmationStatus` | `substring(dd07l.domvalue_l, 1, 1)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ScheduleLineConfStatusText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'ScheduleLineConfirmationStatus'
@ObjectModel.sapObjectNodeType.name: 'SalesDocScheduleLineConfStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Schedule Line Confirmation Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSCHDLCONFSTS'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_ScheduleLineConfStatus
as select from dd07l 

association [0..*] to I_ScheduleLineConfStatusText as _Text on $projection.ScheduleLineConfirmationStatus = _Text.ScheduleLineConfirmationStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as ScheduleLineConfirmationStatus,

    @Search.defaultSearchElement: true
    _Text
}

where (dd07l.domname = 'ECOST') and (dd07l.as4local = 'A');
```
