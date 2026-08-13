---
name: D_JOURNALENTRYCREATED
description: "D Journal EntryCREATED"
semantic_vi: "View D_JOURNALENTRYCREATED trong CDS hiển thị các journal entry được tạo trong SAP, có thể được sử dụng để theo dõi các giao dịch tài chính và tác động của chúng lên các tài khoản của công ty."
keywords:
  - "journal entry"
  - "journal entry created"
  - "created journal entry"
  - "sap journal entry"
  - "journal entry created date"
  - "journal entry created time"
  - "journal entry created by"
  - "journal entry created user"
  - "journal entry created fiscal year"
  - "journal entry created period"
  - "accounting journal entry"
  - "financial journal entry"
semantic_en: "The D_JOURNALENTRYCREATED CDS view exposes created journal entries in SAP, which can be used to track financial transactions and their impact on the company's accounts."
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
# D_JOURNALENTRYCREATED

**D Journal EntryCREATED**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `element:'FiscalYear'` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Journal Entry Created'
@Event.description: 'This event is raised if a journal entry document was successfully created'
//@Event.sapObjectType: 'JournalEntry'
//@Event.sapObjectNodeType: 'JournalEntry'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name:'JournalEntry'
@Event.type: 'Created'
@Event.implementedBy: ['ABAP:RAP_EVENT']
@Event.sapObjectNodeTypeKey:[{element:'CompanyCode'},
                             {element:'FiscalYear'},
                             {element:'AccountingDocument'}]
@Metadata.allowExtensions: true
define abstract entity D_JournalEntryCreated
{
  //  key CompanyCode        : bukrs;
  //  key FiscalYear         : gjahr;
  //      //  key JournalEntry       : belnr_d;
  //  key AccountingDocument : belnr_d;
  JournalEntry : belnr_d;
}
```
