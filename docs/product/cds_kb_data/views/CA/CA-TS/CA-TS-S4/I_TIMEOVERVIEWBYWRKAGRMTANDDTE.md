---
name: I_TIMEOVERVIEWBYWRKAGRMTANDDTE
description: "Timeoverviewbywrkagrmtanddte"
app_component: CA-TS-S4
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-TS
  - interface-view
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMEOVERVIEWBYWRKAGRMTANDDTE

**Timeoverviewbywrkagrmtanddte**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonWorkAgreement` | ✓ | |  | `employeenumber` |  |  |
| `CalendarDate` | ✓ | |  | `validitydate` |  |  |
| `Origin` |  | |  | `extapplication` |  |  |
| `PlannedWorkingHours` |  | |  | `regularhours` |  |  |
| `PlannedStartTime` |  | |  | `regularbegin` |  |  |
| `PlannedEndTime` |  | |  | `regularend` |  |  |
| `PublicHolidayClass` |  | |  | `holidayclass` |  |  |
| `IsNonWorkingDay` |  | |  | `nonworking` |  |  |
| `AbsenceInHours` |  | |  | `absencehours` |  |  |
| `AttendanceHours` |  | |  | `attendancehours` |  |  |
| `OvertimeInHours` |  | |  | `overtimehours` |  |  |
| `AvailabilityInHours` |  | |  | `( pTime.regularhours + pTime.overtimehours - pTime.absencehours - pTime.attendancehours )` |  |  |
| `PersonWorkAgrmtAuthznGrpg` |  | | `_PersonWorkAgrmtStatus` | `PersonWorkAgrmtAuthznGrpg` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKAGRTMOV'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #FACT, dataExtraction: {enabled: true } }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #MASTER 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #XL
@EndUserText.label: 'Availability of a Person Work Agreement'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name :'WorkforceAvailability'
define view I_TimeOverviewByWrkAgrmtAndDte
  as select from    ptimeov1        as pTime
  inner join I_PersonWorkAgrmtStatus as _PersonWorkAgrmtStatus on pTime.employeenumber = _PersonWorkAgrmtStatus.PersonWorkAgreement and
                                                                  pTime.validitydate between _PersonWorkAgrmtStatus.StartDate and _PersonWorkAgrmtStatus.EndDate
  
// inner join pa0001 as PA0001 on pTime.employeenumber = pa0001.pernr
//                and pTime.validitydate between pa0001.begda and pa0001.endda
//                and pa0001.sprps <> 'X'
{
  key pTime.employeenumber                  as PersonWorkAgreement,
  key pTime.validitydate                    as CalendarDate,
      pTime.extapplication                  as Origin,
      pTime.regularhours                    as PlannedWorkingHours,
      pTime.regularbegin                    as PlannedStartTime,
      pTime.regularend                      as PlannedEndTime,
      pTime.holidayclass                    as PublicHolidayClass,
      pTime.nonworking                      as IsNonWorkingDay,
      pTime.absencehours                    as AbsenceInHours,
      pTime.attendancehours                 as AttendanceHours,
      pTime.overtimehours                   as OvertimeInHours,
      //pa0001.vdsk1                          as PersonWorkAgrmtAuthznGrpg //for dcl
      ( pTime.regularhours + pTime.overtimehours - pTime.absencehours - pTime.attendancehours ) as AvailabilityInHours,
      _PersonWorkAgrmtStatus.PersonWorkAgrmtAuthznGrpg
}
```
