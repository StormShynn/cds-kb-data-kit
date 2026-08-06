---
name: D_GLADJMTPOSTJOURNALENTRYP
description: D GLADJMTPOSTJournal EntryP
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
# D_GLADJMTPOSTJOURNALENTRYP

**D GLADJMTPOSTJournal EntryP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCode` | `bukrs` |
| `LedgerGroup` | `fagl_ldgrp` |
| `AccountingDocumentType` | `blart` |
| `BusinessTransactionType` | `fins_custbttype` |
| `DocumentDate` | `bldat` |
| `PostingDate` | `budat` |
| `PostingFiscalPeriod` | `monat` |
| `DocumentReferenceID` | `xblnr` |
| `AccountingDocumentHeaderText` | `bktxt` |
| `CreatedByUser` | `usnam` |
| `Reference1InDocumentHeader` | `xref1_hd` |
| `Reference2InDocumentHeader` | `xref2_hd` |
| `D_GLAdjmtItemPostJournalEntryP` | `_GLItems : composition [0..*] of D_GLAdjmtItemPostJournalEntryP` |

## Source Code

```abap
@EndUserText.label: 'G/L Adjustment Post Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_GLAdjmtPostJournalEntryP

{
  CompanyCode                  : bukrs;
  LedgerGroup                  : fagl_ldgrp;
  AccountingDocumentType       : blart;
  BusinessTransactionType      : fins_custbttype;
  DocumentDate                 : bldat;
  PostingDate                  : budat;
  PostingFiscalPeriod          : monat;
  DocumentReferenceID          : xblnr;
  AccountingDocumentHeaderText : bktxt;
  CreatedByUser                : usnam;
  Reference1InDocumentHeader   : xref1_hd;
  Reference2InDocumentHeader   : xref2_hd;

  _GLItems                     : composition [0..*] of D_GLAdjmtItemPostJournalEntryP;
}
```
