---
name: D_JOURNALENTRYREVERSEPARAMETER
description: D Journal EntryREVERSEPARAMETER
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
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
# D_JOURNALENTRYREVERSEPARAMETER

**D Journal EntryREVERSEPARAMETER**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PostingDate` | `budat` |
| `ReversalReason` | `acpi_stgrd` |
| `CreatedByUser` | `usnam` |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE] 
@EndUserText.label: 'Journal Entry Reverse Parameter'
define abstract entity D_JournalEntryReverseParameter 
{
    PostingDate                : budat;
    ReversalReason             : acpi_stgrd;
    CreatedByUser              : usnam;
}
```
