---
name: I_JOURNALENTRYTP
description: Journal EntryTP
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - interface-view
  - transactional-processing
  - journal-entry
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# I_JOURNALENTRYTP

**Journal EntryTP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |
| `LedgerGroup` |  | |  |  |  |  |
| `ReferenceDocumentType` |  | |  |  |  |  |
| `OriginalReferenceDocument` |  | |  |  |  |  |
| `ReferenceDocumentLogicalSystem` |  | |  |  |  |  |
| `BusinessTransactionType` |  | |  |  |  |  |
| `AccountingDocumentType` |  | |  |  |  |  |
| `TaxReportingDate` |  | |  |  |  |  |
| `InvoiceReceiptDate` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `AccountingDocCreatedByUser` |  | |  |  |  |  |
| `DocumentReferenceID` |  | |  |  |  |  |
| `AccountingDocumentHeaderText` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificRef1` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificDate1` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificRef2` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificDate2` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificRef3` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificDate3` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificRef4` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificDate4` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificRef5` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificDate5` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificBP1` |  | |  |  |  |  |
| `JrnlEntryCntrySpecificBP2` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessTransactionTypeText` | | ✓ | | | | |
| `_AccountingDocumentTypeText` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #TRANSACTIONAL
@EndUserText.label: 'Journal Entry Projection - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
   sapObjectNodeType:{
      name: 'JournalEntry'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER, #UI_PROVIDER_PROJECTION_SOURCE],
   usageType: {
     serviceQuality: #A,
     sizeCategory:   #XXL,
     dataClass:      #TRANSACTIONAL
   }
 }

define root view entity I_JournalEntryTP
  provider contract transactional_interface
  as projection on R_JournalEntryTP
{
      @Consumption.valueHelpDefinition: [
        { entity: { name:    'I_CompanyCodeStdVH',
                    element: 'CompanyCode' },
          useAsTemplate: true }]
      @ObjectModel.text.association: '_CompanyCode'
  key CompanyCode,
  key FiscalYear,
  key AccountingDocument,
      LedgerGroup,
      ReferenceDocumentType,
      OriginalReferenceDocument,
      ReferenceDocumentLogicalSystem,
      @Consumption.valueHelpDefinition: [
        { entity: { name:    'I_BusTransTypeStdVH',
                    element: 'BusinessTransactionType'},
          useAsTemplate: true }]
      @ObjectModel.text.association: '_BusinessTransactionTypeText'
      BusinessTransactionType,
      @Consumption.valueHelpDefinition: [
        { entity: { name:    'I_AccountingDocumentTypeStdVH',
                    element: 'AccountingDocumentType'},
          useAsTemplate: true }]
      @ObjectModel.text.association: '_AccountingDocumentTypeText'
      AccountingDocumentType,
      TaxReportingDate,
      InvoiceReceiptDate,
      ExchangeRateDate,
      DocumentDate,
      PostingDate,
      AccountingDocCreatedByUser,
      DocumentReferenceID,
      AccountingDocumentHeaderText,
      JrnlEntryCntrySpecificRef1,
      JrnlEntryCntrySpecificDate1,
      JrnlEntryCntrySpecificRef2,
      JrnlEntryCntrySpecificDate2,
      JrnlEntryCntrySpecificRef3,
      JrnlEntryCntrySpecificDate3,
      JrnlEntryCntrySpecificRef4,
      JrnlEntryCntrySpecificDate4,
      JrnlEntryCntrySpecificRef5,
      JrnlEntryCntrySpecificDate5,
      JrnlEntryCntrySpecificBP1,
      JrnlEntryCntrySpecificBP2,
      _CompanyCode,
      _BusinessTransactionTypeText,
      _AccountingDocumentTypeText
}
```
