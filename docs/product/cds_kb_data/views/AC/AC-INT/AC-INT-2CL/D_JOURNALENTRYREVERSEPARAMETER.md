---
name: D_JOURNALENTRYREVERSEPARAMETER
description: "D Journal EntryREVERSEPARAMETER"
semantic_vi: "View D_JOURNALENTRYREVERSEPARAMETER hiển thị các tham số đảo ngược journal entry, được sử dụng để đảo ngược journal entries trong hệ thống. Nó được sử dụng khi đảo ngược journal entries."
keywords:
  - "journal entry"
  - "đơn đăng ký"
  - "reversal"
  - "đảo ngược"
  - "sap"
  - "ac-int-2cl"
  - "posting date"
  - "reason"
  - "created by user"
semantic_en: "The D_JOURNALENTRYREVERSEPARAMETER view exposes journal entry reversal parameters, which are used to reverse journal entries in the system. It is used when reversing journal entries."
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
# D_JOURNALENTRYREVERSEPARAMETER

**D Journal EntryREVERSEPARAMETER**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingDate` |  | |  | `budat` |  |  |
| `ReversalReason` |  | |  | `acpi_stgrd` |  |  |
| `CreatedByUser` |  | |  | `usnam` |  |  |

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
