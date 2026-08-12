---
name: I_CN_CADEJOURNALENTRYMAPPING
description: "CN CADEJournal EntryMAPPING"
app_component: FI-LOC-GAI-CN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-GAI
  - interface-view
  - journal-entry
  - component:FI-LOC-GAI-CN
  - lob:Finance
  - bo:JournalEntry
---
# I_CN_CADEJOURNALENTRYMAPPING

**CN CADEJournal EntryMAPPING**

| Property | Value |
|---|---|
| App Component | `FI-LOC-GAI-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `CN_CADENatlStdRelVersion` | ✓ | |  | `cade_natl_std_rel_ver` |  |  |
| `AccountingDocumentType` | ✓ | |  | `blart` |  |  |
| `CN_CADEJournalEntryType` |  | |  | `cade_jrnl_entr_type_code` |  |  |
| `CN_CADETransactionType` |  | |  | `cade_trans_type_code` |  |  |
| `CN_CADEOriginalPaymentDocument` |  | |  | `cade_doc_type_code` |  |  |
| `AccountingDocumentTypeName` |  | |  |  |  |  |
| `CN_CADEJournalEntryTypeName` |  | |  | `CN_CADEDocumentListTypeName` |  |  |
| `CN_CADETransactionTypeName` |  | |  | `CN_CADEDocumentListTypeName` |  |  |
| `CN_CADEOriginalPaymentDocType` |  | |  | `CN_CADEDocumentListTypeName` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `JournalEntryTypeText` | `I_AccountingDocumentTypeText` | [0..1] |
| `CADEJournalEntryType` | `I_CN_CADEJournalEntryDocType` | [0..1] |
| `CADETranscationType` | `I_CN_CADEJournalEntryDocType` | [0..1] |
| `CADEDocumentType` | `I_CN_CADEJournalEntryDocType` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ICADEJRNLENTRMAP'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'CN Journal Entry Mapping for CADE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_CN_CADEJournalEntryMapping

  as select from cade_jrnlmappg as JournalEntryTypeMapping

  association [0..1] to I_AccountingDocumentTypeText as JournalEntryTypeText on  JournalEntryTypeMapping.blart = JournalEntryTypeText.AccountingDocumentType
                                                                             and JournalEntryTypeText.Language = $session.system_language
  association [0..1] to I_CN_CADEJournalEntryDocType as CADEJournalEntryType on  CADEJournalEntryType.CN_CADEDocumentListType  = JournalEntryTypeMapping.cade_jrnl_entr_type_code
                                                                             and CADEJournalEntryType.CompanyCode              = JournalEntryTypeMapping.bukrs
                                                                             and CADEJournalEntryType.CN_CADENatlStdRelVersion = JournalEntryTypeMapping.cade_natl_std_rel_ver
                                                                             and CADEJournalEntryType.CN_CADEDocumentTypeUsage = '1'
  association [0..1] to I_CN_CADEJournalEntryDocType as CADETranscationType  on  CADETranscationType.CN_CADEDocumentListType  = JournalEntryTypeMapping.cade_trans_type_code
                                                                             and CADETranscationType.CompanyCode              = JournalEntryTypeMapping.bukrs
                                                                             and CADETranscationType.CN_CADENatlStdRelVersion = JournalEntryTypeMapping.cade_natl_std_rel_ver
                                                                             and CADETranscationType.CN_CADEDocumentTypeUsage = '2'
  association [0..1] to I_CN_CADEJournalEntryDocType as CADEDocumentType     on  CADEDocumentType.CN_CADEDocumentListType  = JournalEntryTypeMapping.cade_doc_type_code
                                                                             and CADEDocumentType.CompanyCode              = JournalEntryTypeMapping.bukrs
                                                                             and CADEDocumentType.CN_CADENatlStdRelVersion = JournalEntryTypeMapping.cade_natl_std_rel_ver
                                                                             and CADEDocumentType.CN_CADEDocumentTypeUsage = '3'
{
  key JournalEntryTypeMapping.bukrs                        as CompanyCode,
  key JournalEntryTypeMapping.cade_natl_std_rel_ver        as CN_CADENatlStdRelVersion,
      @EndUserText.label: 'Accounting Document Type'
      @EndUserText.quickInfo: 'Accounting Document Type'
  key JournalEntryTypeMapping.blart                        as AccountingDocumentType,
      @EndUserText.label: 'Journal Entry Type (GB/T)'
      @EndUserText.quickInfo: 'Journal Entry Type (GB/T)'
      JournalEntryTypeMapping.cade_jrnl_entr_type_code     as CN_CADEJournalEntryType,
      @EndUserText.label: 'Transaction Type (GB/T)'
      @EndUserText.quickInfo: 'Transaction Type (GB/T)'
      JournalEntryTypeMapping.cade_trans_type_code         as CN_CADETransactionType,
      JournalEntryTypeMapping.cade_doc_type_code           as CN_CADEOriginalPaymentDocument,
      @EndUserText.label: 'Accounting Document Type Description'
      @EndUserText.quickInfo: 'Accounting Document Type Description'
      JournalEntryTypeText.AccountingDocumentTypeName      as AccountingDocumentTypeName,
      @EndUserText.label: 'Journal Entry Type Description(GB/T)'
      @EndUserText.quickInfo: 'Journal Entry Type Description(GB/T)'
      CADEJournalEntryType.CN_CADEDocumentListTypeName     as CN_CADEJournalEntryTypeName,
      @EndUserText.label: 'Transaction Type Description(GB/T)'
      @EndUserText.quickInfo: 'Transaction Type Description(GB/T)'
      CADETranscationType.CN_CADEDocumentListTypeName      as CN_CADETransactionTypeName,
      CADEDocumentType.CN_CADEDocumentListTypeName         as CN_CADEOriginalPaymentDocType
}
```
