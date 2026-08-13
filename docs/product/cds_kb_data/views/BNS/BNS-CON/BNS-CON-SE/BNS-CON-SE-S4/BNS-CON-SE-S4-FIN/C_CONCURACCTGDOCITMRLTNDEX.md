---
name: C_CONCURACCTGDOCITMRLTNDEX
description: "Concuracctgdocitmrltndex"
semantic_vi: "View Concuracctgdocitmrltndex hiển thị mối quan hệ giữa các mục tài khoản trong các tài liệu Concur hệ thống, cho phép bạn truy xuất và phân tích các mối quan hệ này để phục vụ cho báo cáo tài chính và kiểm toán."
keywords:
  - "concur"
  - "accounting"
  - "document"
  - "item"
  - "relationship"
  - "financial"
  - "reporting"
  - "auditing"
  - "sap"
  - "bns"
  - "concuracctgdocitmrltndex"
  - "tài khoản"
semantic_en: "The Concuracctgdocitmrltndex view exposes accounting document item relationships for Concur system documents, allowing you to retrieve and analyze these relationships for financial reporting and auditing purposes."
app_component: BNS-CON-SE-S4-FIN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
