---
name: I_CNSLDTNGROUPJRNLENTRYTP
description: "Cnsldtngroupjrnlentrytp"
app_component: FIN-CS-JE-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-JE
  - interface-view
  - transactional-processing
  - component:FIN-CS-JE-2CL
  - lob:Other
---
# I_CNSLDTNGROUPJRNLENTRYTP

**Cnsldtngroupjrnlentrytp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-JE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYear` | ✓ | |  |  |  |  |
| `ConsolidationDocumentNumber` | ✓ | |  |  |  |  |
| `ConsolidationVersion` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `ConsolidationChartOfAccounts` |  | |  |  |  |  |
| `PostingLevel` |  | |  |  |  |  |
| `ConsolidationDocumentType` |  | |  |  |  |  |
| `DocumentItemText` |  | |  |  |  |  |
| `ConsolidationUnit` |  | |  |  |  |  |
| `ConsolidationGroup` |  | |  |  |  |  |
| `ConsolidationUnit1` |  | |  |  |  |  |
| `ConsolidationUnit2` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `ReversedDocument` |  | |  |  |  |  |
| `ReverseDocument` |  | |  |  |  |  |
| `ConsolidationDocReversalYear` |  | |  |  |  |  |
| `IsReversalDocument` |  | |  |  |  |  |

## Source Code

```abap
@VDM: { 
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API 
}
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Consolidation Group Journal Entry - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  usageType: { 
    sizeCategory: #XXL,
    dataClass: #TRANSACTIONAL,
    serviceQuality: #A 
  },
  sapObjectNodeType.name: 'CnsldtnGroupJournalEntry' 
}

define root view entity I_CnsldtnGroupJrnlEntryTP
  provider contract transactional_interface
  as projection on R_CnsldtnGrpJrnlEntrTP
{
  key FiscalYear,
  key ConsolidationDocumentNumber,
      ConsolidationVersion,
      FiscalPeriod,
      ConsolidationChartOfAccounts,
      PostingLevel,
      ConsolidationDocumentType,
      DocumentItemText,
      ConsolidationUnit,
      ConsolidationGroup,
      ConsolidationUnit1,
      ConsolidationUnit2,
      PostingDate,
      CreationDate,
      CreationTime,
      ReversedDocument,
      ReverseDocument,
      ConsolidationDocReversalYear,
      IsReversalDocument
}
```
