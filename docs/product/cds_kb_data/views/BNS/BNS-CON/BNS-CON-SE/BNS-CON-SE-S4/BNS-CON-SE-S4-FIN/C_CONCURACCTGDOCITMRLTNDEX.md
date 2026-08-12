---
name: C_CONCURACCTGDOCITMRLTNDEX
description: "Concuracctgdocitmrltndex"
app_component: BNS-CON-SE-S4-FIN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BNS
  - BNS-CON
  - BNS-CON-SE
  - consumption-view
  - data-extraction
  - component:BNS-CON-SE-S4-FIN
  - lob:Other
---
# C_CONCURACCTGDOCITMRLTNDEX

**Concuracctgdocitmrltndex**

| Property | Value |
|---|---|
| App Component | `BNS-CON-SE-S4-FIN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConcurSystemKey` | ✓ | |  |  | `INT1(3)` | System Key |
| `ConcurDocumentType` | ✓ | |  |  | `CHAR(2)` | Concur Document Type |
| `ConcurDocumentID` | ✓ | |  |  | `CHAR(32)` | ID of Concur Document |
| `ConcurDocumentRevisionNumber` | ✓ | |  |  | `CHAR(3)` | Concur Document Revision Number |
| `ConcurEntryIdentifier` | ✓ | |  |  | `CHAR(32)` | Concur Node ID |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `JournalEntry` | ✓ | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `ConcurDocumentFiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `ReferenceDocumentItem` | ✓ | |  |  | `NUMC(6)` | Reference Document Line Item |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Concur Accounting Document Item Relation'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #CONSUMPTION
@Analytics.dataExtraction.delta.byElement.detectDeletedRecords:true
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL }
@Analytics.dataCategory:#FACT
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@ObjectModel.sapObjectNodeType.name: 'ConcurTrvlAndExpnMgmtDoc'
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]

define view entity C_ConcurAcctgDocItmRltnDEX
  as select from I_ConcurAcctgDocItmRelation

{
  key ConcurSystemKey,
  key ConcurDocumentType,
  key ConcurDocumentID,
  key ConcurDocumentRevisionNumber,
  key ConcurEntryIdentifier,
  key CompanyCode,
  key JournalEntry,
  key ConcurDocumentFiscalYear,
  key ReferenceDocumentItem
}
```
