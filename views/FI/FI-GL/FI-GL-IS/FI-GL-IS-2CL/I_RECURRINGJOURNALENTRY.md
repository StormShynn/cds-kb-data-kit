---
name: I_RECURRINGJOURNALENTRY
description: RECURRINGJournal Entry
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - journal-entry
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:JournalEntry
---
# I_RECURRINGJOURNALENTRY

**RECURRINGJournal Entry**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RecrrgAcctgDocCompanyCode` | ✓ | |  | `bukrs` |
| `RecurringJournalEntry` | ✓ | |  | `belnr` |
| `RecrrgJournalEntryFiscalYear` | ✓ | |  | `gjahr` |
| `RecurrenceFrequencyType` |  | |  | `dbmon` |
| `RecurrenceRunDayOfMonth` |  | |  | `dbtag` |
| `RecurrenceStartDate` |  | |  | `dbbdt` |
| `RecurrenceNextCalculationDate` |  | |  | `dbatr` |
| `RecurrenceEndDate` |  | |  | `dbedt` |
| `RecrrgJournalEntryIsCompleted` |  | |  | `xdelt` |
| `NumberOfCompletedRecurrences` |  | |  | `dbzhl` |
| `RecurrenceSchedule` |  | |  | `dbakz` |
| `AmountInNonTransCrcyIsTrnsfd` |  | |  | `xfwhw` |
| `TaxAmtInNonTransCrcyIsTrnsfd` |  | |  | `xsfhw` |
| `RecrrgJournalEntryTextIsTrnsfd` |  | |  | `xbllt` |
| `RecurrenceType` |  | |  | `recurrence_type` |
| `RecurrenceFrequency` |  | |  | `frequency` |
| `OccurrenceType` |  | |  | `occur_day_type` |
| `OccurrenceDayByRecurrenceType` |  | |  | `occur_day` |
| `FirstOccurrenceDate` |  | |  | `first_occur_date` |
| `RecurrenceEndType` |  | |  | `end_by_type` |
| `LastOccurrenceDate` |  | |  | `last_occur_date` |
| `NumberOfRecurrences` |  | |  | `number_of_occur` |
| `PostingIsBlocked` |  | |  | `blocked_for_posting` |
| `RecurrenceScheduleIsUsed` |  | |  | `recur_schedule_used` |
| `ApplicationLog` |  | |  | `lognumber` |
| `_CompanyCode` | | ✓ | | |
| `_RecurrenceRunSchedule` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_RecurrenceRunSchedule` | `I_RecurrenceRunSchedule` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRECRRGJE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Recurring Journal Entry'
@ObjectModel:{
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #M,
  usageType.dataClass: #TRANSACTIONAL,
  supportedCapabilities:[
    #CDS_MODELING_DATA_SOURCE,
    #VALUE_HELP_PROVIDER,
    #SEARCHABLE_ENTITY
  ]
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType:#BASIC
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view I_RecurringJournalEntry
  as select from bkdf
  association [0..1] to I_CompanyCode as _CompanyCode on $projection.RecrrgAcctgDocCompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_RecurrenceRunSchedule as _RecurrenceRunSchedule on $projection.RecurrenceSchedule = _RecurrenceRunSchedule.RecurrenceSchedule
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs               as RecrrgAcctgDocCompanyCode,
      @Search: {
        defaultSearchElement:  true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
  key belnr               as RecurringJournalEntry,
  key gjahr               as RecrrgJournalEntryFiscalYear,
      dbmon               as RecurrenceFrequencyType,
      dbtag               as RecurrenceRunDayOfMonth,
      dbbdt               as RecurrenceStartDate,
      dbatr               as RecurrenceNextCalculationDate,
      dbedt               as RecurrenceEndDate,
      xdelt               as RecrrgJournalEntryIsCompleted,
      dbzhl               as NumberOfCompletedRecurrences,
      @ObjectModel.foreignKey.association: '_RecurrenceRunSchedule'
      dbakz               as RecurrenceSchedule,
      xfwhw               as AmountInNonTransCrcyIsTrnsfd,
      xsfhw               as TaxAmtInNonTransCrcyIsTrnsfd,
      xbllt               as RecrrgJournalEntryTextIsTrnsfd,
      recurrence_type     as RecurrenceType,
      frequency           as RecurrenceFrequency,
      occur_day_type      as OccurrenceType,
      occur_day           as OccurrenceDayByRecurrenceType,
      first_occur_date    as FirstOccurrenceDate,
      end_by_type         as RecurrenceEndType,
      last_occur_date     as LastOccurrenceDate,
      number_of_occur     as NumberOfRecurrences,
      blocked_for_posting as PostingIsBlocked,
      recur_schedule_used as RecurrenceScheduleIsUsed,
      lognumber           as ApplicationLog,

      // Associations:
      _CompanyCode,
      _RecurrenceRunSchedule
}
//where
//  created_in_sfin = 'X'
```
