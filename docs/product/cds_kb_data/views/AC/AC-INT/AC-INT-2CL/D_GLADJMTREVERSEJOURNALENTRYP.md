---
name: D_GLADJMTREVERSEJOURNALENTRYP
description: "D GLADJMTREVERSEJournal EntryP"
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - journal-entry
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_GLADJMTREVERSEJOURNALENTRYP

**D GLADJMTREVERSEJournal EntryP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocument` |  | |  | `belnr_d` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `FiscalYear` |  | |  | `fis_gjahr_no_conv` |  |  |
| `PostingDate` |  | |  | `budat` |  |  |
| `CreatedByUser` |  | |  | `usnam` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@EndUserText.label: 'G/L Adjustment Reverse Parameter'
define abstract entity D_GLAdjmtReverseJournalEntryP
{
  AccountingDocument : belnr_d;
  CompanyCode        : bukrs;
  FiscalYear         : fis_gjahr_no_conv;
  PostingDate        : budat;
  CreatedByUser      : usnam; //not yet supported
}
```
