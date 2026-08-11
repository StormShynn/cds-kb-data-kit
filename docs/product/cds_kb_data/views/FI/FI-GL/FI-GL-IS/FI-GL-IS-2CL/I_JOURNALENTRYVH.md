---
name: I_JOURNALENTRYVH
description: "Journal Entry"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYVH')/$value
semantic_en: "Journal Entry"
semantic_vi: "Journal Entry — CDS view giao diện (transactional data) dựa trên I_JournalEntry."
keywords:
  - "journal"
  - "entry"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "reference"
  - "type"
  - "original"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_JOURNALENTRYVH

**Journal Entry**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `OriginalReferenceDocument` |  | |  |  | `CHAR(20)` | Object key |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOURNALENTRYVH')/$value)*

```abap
//GENERATED:005:GFBfhxvv7kY3b}lYQlfuG0
@AbapCatalog.sqlViewName: 'IFIJE__VH1'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'AccountingDocument',
                usageType: { sizeCategory: #XXL,
                             dataClass: #TRANSACTIONAL,
                             serviceQuality: #A },
                supportedCapabilities: [#VALUE_HELP_PROVIDER],
                modelingPattern: #VALUE_HELP_PROVIDER }
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Journal Entry'
define view I_JournalEntryVH as select from I_JournalEntry {
  @ObjectModel.foreignKey.association: '_CompanyCode'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  key CompanyCode,
  @ObjectModel.foreignKey.association: '_FiscalYear'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  key FiscalYear,
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.7
  @Search.ranking: #HIGH
  key AccountingDocument,

  @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  ReferenceDocumentType,
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  OriginalReferenceDocument,
  @Consumption.hidden: true
  _CompanyCode,
  @Consumption.hidden: true
  _FiscalYear,
  @Consumption.hidden: true
  _ReferenceDocumentType
}
```
