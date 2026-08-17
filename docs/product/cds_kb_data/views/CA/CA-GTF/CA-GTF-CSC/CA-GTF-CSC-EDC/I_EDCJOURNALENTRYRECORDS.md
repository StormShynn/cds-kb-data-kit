---
name: I_EDCJOURNALENTRYRECORDS
description: "EDCJournal EntryRECORDS"
app_component: CA-GTF-CSC-EDC
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - journal-entry
  - component:CA-GTF-CSC-EDC
  - lob:Cross-Application Components
  - bo:JournalEntry
---
# I_EDCJOURNALENTRYRECORDS

**EDCJournal EntryRECORDS**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EDCType` | ✓ | | `_EDCRelation` | `EDCType` | `CHAR(15)` | Consistency Scenario ID |
| `CompanyCode` | ✓ | | `_EDCRelation` | `CompanyCode` | `CHAR(4)` | Company Code |
| `EDCCommonKey` | ✓ | | `_EDCRelation` | `EDCCommonKey` | `CHAR(120)` | Consistency Common Key |
| `AccountingDocument` |  | | `_EDCRelation` | `AccountingDocument` | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` |  | | `_EDCRelation` | `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `EDCRecordUUID` |  | | `_EDCRelation` | `EDCRecordUUID` | `CHAR(32)` | Consistency GUID |
| `EDCCreatedOnDateTime` |  | | `_EDCRelation` | `EDCCreatedOnDateTime` | `DEC(15)` | Record Created On |
| `EDCRepresentationType` |  | | `_EDCRelation` | `EDCRepresentationType` | `CHAR(30)` | Representation Type ID |
| `EDCRepresentationKey` |  | | `_EDCRelation` | `EDCRepresentationKey` | `CHAR(32)` | Representation Key |
| `AccountingDocumentType` |  | | `_JournalEntry` | `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `DocumentDate` |  | | `_JournalEntry` | `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `PostingDate` |  | | `_JournalEntry` | `PostingDate` | `DATS(8)` | Posting Date |
| `AccountingDocumentCreationDate` |  | | `_JournalEntry` | `AccountingDocumentCreationDate` | `DATS(8)` | Accounting Document Entry Date |
| `TransactionCode` |  | | `_JournalEntry` | `TransactionCode` | `CHAR(20)` | Transaction Code |
| `IntercompanyTransaction` |  | | `_JournalEntry` | `IntercompanyTransaction` | `CHAR(16)` | Intercompany Transaction Number |
| `DocumentReferenceID` |  | | `_JournalEntry` | `DocumentReferenceID` | `CHAR(16)` | Document Reference ID |
| `TransactionCurrency` |  | | `_JournalEntry` | `TransactionCurrency` | `CUKY(5)` | Currency Key |
| `AccountingDocumentCategory` |  | | `_JournalEntry` | `AccountingDocumentCategory` | `CHAR(1)` | Journal Entry Category |
| `BusinessTransactionType` |  | | `_JournalEntry` | `BusinessTransactionType` | `CHAR(4)` | Business Transaction Category |
| `Branch` |  | | `_JournalEntry` | `Branch` | `CHAR(4)` | Branch |
| `IsDiscountDocument` |  | | `_JournalEntry` | `IsDiscountDocument` | `CHAR(1)` | Indicator: entry represents a discount document |
| `TaxReportingDate` |  | | `_JournalEntry` | `TaxReportingDate` | `DATS(8)` | Tax Reporting Date |
| `TaxFulfillmentDate` |  | | `_JournalEntry` | `TaxFulfillmentDate` | `DATS(8)` | Tax Fulfillment Date |
| `AccountingDocumentClass` |  | | `_JournalEntry` | `AccountingDocumentClass` | `CHAR(6)` | Accounting Document Class |
| `IsReversal` |  | | `_JournalEntry` | `IsReversal` | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | | `_JournalEntry` | `IsReversed` | `CHAR(1)` | Indicator: Item is Reversed |
| `TaxCountry` |  | | `_JournalEntry` | `TaxCountry` | `CHAR(3)` | Tax Country/Region |
| `WithholdingTaxReportingDate` |  | | `_JournalEntry` | `WithholdingTaxReportingDate` | `DATS(8)` | Withholding Tax Reporting Date |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'EDC Relevant Journal Entry Records'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #XXL,
  dataClass: #MIXED
}
@VDM: {
  viewType: #BASIC,
//  lifecycle.contract.type: #SAP_INTERNAL_API
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
define view entity I_EDCJournalEntryRecords
  as select from I_EDCAccountingDocRelation as _EDCRelation
    inner join   I_JournalEntry             as _JournalEntry on  _EDCRelation.CompanyCode        = _JournalEntry.CompanyCode
                                                             and _EDCRelation.AccountingDocument = _JournalEntry.AccountingDocument
                                                             and _EDCRelation.FiscalYear         = _JournalEntry.FiscalYear
{
  key _EDCRelation.EDCType,
  key _EDCRelation.CompanyCode,
  key _EDCRelation.EDCCommonKey,
      _EDCRelation.AccountingDocument,
      _EDCRelation.FiscalYear,
      _EDCRelation.EDCRecordUUID,
      _EDCRelation.EDCCreatedOnDateTime,
      _EDCRelation.EDCRepresentationType,
      _EDCRelation.EDCRepresentationKey,
      _JournalEntry.AccountingDocumentType,
      _JournalEntry.DocumentDate,
      _JournalEntry.PostingDate,
      _JournalEntry.AccountingDocumentCreationDate,
      _JournalEntry.TransactionCode,
      _JournalEntry.IntercompanyTransaction,
      _JournalEntry.DocumentReferenceID,
      _JournalEntry.TransactionCurrency,
      _JournalEntry.AccountingDocumentCategory,
      _JournalEntry.BusinessTransactionType,
      _JournalEntry.Branch,
      @Semantics.booleanIndicator
      _JournalEntry.IsDiscountDocument,
      _JournalEntry.TaxReportingDate,
      _JournalEntry.TaxFulfillmentDate,
      _JournalEntry.AccountingDocumentClass,
      _JournalEntry.IsReversal,
      _JournalEntry.IsReversed,
      _JournalEntry.TaxCountry,
      _JournalEntry.WithholdingTaxReportingDate,
      _JournalEntry._AccountingDocumentCategory,
      _JournalEntry._AccountingDocumentType

}
```
