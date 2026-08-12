---
name: I_JOURNALENTRYSTDVH
description: "Journal EntrySTDVH"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - value-help
  - standard-value-help
  - journal-entry
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:JournalEntry
---
# I_JOURNALENTRYSTDVH

**Journal EntrySTDVH**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Journal Entry'
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'AccountingDocument',
                usageType: { sizeCategory: #XXL,
                             dataClass: #TRANSACTIONAL,
                             serviceQuality: #A },
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@Analytics.technicalName: 'IFIJE__VH'
@Metadata.ignorePropagatedAnnotations: true
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE }

@Search.searchable: true
@Consumption.ranked: true

define view entity I_JournalEntryStdVH as select from I_JournalEntry as I_JournalEntry {
  @ObjectModel.foreignKey.association: '_CompanyCode'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  key I_JournalEntry.CompanyCode,
  @ObjectModel.foreignKey.association: '_FiscalYear'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  key I_JournalEntry.FiscalYear,
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key I_JournalEntry.AccountingDocument,

//  @Consumption.hidden: true
//  Ledger,

  @Consumption.hidden: true
  I_JournalEntry._CompanyCode,
  @Consumption.hidden: true
  I_JournalEntry._FiscalYear
}
```
