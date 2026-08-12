---
name: I_TIMESHEETSTATUSTEXT
description: "Timesheetstatustext"
app_component: CA-TS-S4
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-TS
  - interface-view
  - text-view
  - text
  - status
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMESHEETSTATUSTEXT

**Timesheetstatustext**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TimeSheetStatus` | ✓ | |  | `domvalue_l` |  |  |
| `TimeSheetStatusText` |  | |  | `cast( ddtext as catsstatustext preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITSTSTATUSTXT'
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TimeSheetStatus'
@EndUserText.label: 'Status for Timesheet Record - Text'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE ]
define view I_TimeSheetStatusText
  as select from dd07t
{

      @Semantics.language: true
  key ddlanguage as Language,

      @EndUserText.label: 'Status Code'
      @ObjectModel.text.element: ['TimesheetStatusText']
  key domvalue_l as TimeSheetStatus,
      // CE2111 : Commeneted @EndUserText.label For Resolving ATC 
      // Casting added to ddtext
      //@EndUserText.label: 'Status Text'
      @Semantics.text: true
      cast( ddtext as catsstatustext preserving type )  as TimeSheetStatusText

}
where
      domname  = 'CATSSTATUS'
  and as4local = 'A'
```
