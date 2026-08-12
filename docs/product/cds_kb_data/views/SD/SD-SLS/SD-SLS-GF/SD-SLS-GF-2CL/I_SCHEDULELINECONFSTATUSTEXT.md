---
name: I_SCHEDULELINECONFSTATUSTEXT
description: "Schedule LineCONFSTATUSTEXT"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - text-view
  - text
  - status
  - schedule-line
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SCHEDULELINECONFSTATUSTEXT

**Schedule LineCONFSTATUSTEXT**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ScheduleLineConfirmationStatus` | ✓ | |  | `substring(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `ScheduleLineConfStatusDesc` |  | |  | `ddtext` |  |  |
| `_ScheduleLineConfStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ScheduleLineConfStatus` | `I_ScheduleLineConfStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ScheduleLineConfirmationStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ] 
@EndUserText.label: 'Confirmation Status of Schedule Line - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSCHDLCONFSTST'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view I_ScheduleLineConfStatusText
as select from dd07t 

association[0..1] to I_ScheduleLineConfStatus as _ScheduleLineConfStatus on $projection.ScheduleLineConfirmationStatus = _ScheduleLineConfStatus.ScheduleLineConfirmationStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_ScheduleLineConfStatus'
    key substring(domvalue_l, 1, 1) as ScheduleLineConfirmationStatus,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,

    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    ddtext as ScheduleLineConfStatusDesc,
    
    //Associations
    _ScheduleLineConfStatus,
    _Language
}
where (dd07t.domname = 'ECOST') and (dd07t.as4local = 'A');
```
