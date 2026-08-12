---
name: I_CONCURDOCACCTGDOCRELATION
description: "Concur Accounting Document Relation"
app_component: BNS-CON-SE-S4-FIN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCACCTGDOCRELATION')/$value
semantic_en: "Concur Accounting Document Relation"
semantic_vi: "Concur Accounting Document Relation — CDS view giao diện dựa trên cte_d_acc_attr."
keywords:
  - "concur"
  - "accounting"
  - "document"
  - "relation"
  - "system"
  - "type"
  - "revision"
  - "number"
  - "company"
  - "code"
tags:
  - BNS
  - account
  - BNS-CON
  - BNS-CON-SE
  - BNS-CON-SE-S4
  - BNS-CON-SE-S4-FIN
  - bo:journalentry
  - component:BNS-CON-SE-S4-FIN
  - document
  - interface-view
---
# I_CONCURDOCACCTGDOCRELATION

**Concur Accounting Document Relation**

| Property | Value |
|---|---|
| App Component | `BNS-CON-SE-S4-FIN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCACCTGDOCRELATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConcurSystemKey` | ✓ | |  | `system_key` | `INT1(3)` | System Key |
| `ConcurDocumentType` | ✓ | |  | `document_type` | `CHAR(2)` | Posting Document Type |
| `ConcurDocumentID` | ✓ | |  | `document_id` | `CHAR(32)` | Concur Document ID |
| `ConcurDocumentRevisionNumber` | ✓ | |  | `revision_id` | `CHAR(3)` | Concur Document Revision Number |
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `JournalEntry` | ✓ | |  | `belnr` | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` | ✓ | |  | `gjahr` | `NUMC(4)` | Fiscal Year |
| `PostingDate` |  | |  | `posting_date` | `DATS(8)` | Posting Date in the Document |
| `AccDocIsPrimaryForConcurDoc` |  | |  | `is_primary_document` | `CHAR(1)` | Concur Document - Primary document |
| `_ConcurDocumentType` | | ✓ | | | | |
| `_AccountingDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConcurDocumentType` | `I_ConcurDocumentType` | [1..1] |
| `_AccountingDocument` | `I_AccountingDocument` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCACCTGDOCRELATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCACCTGDOCRELATION')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture: {
   automatic : true }
   
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@EndUserText.label: 'Concur Accounting Document Relation'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
}
@VDM.viewType: #BASIC


define view entity I_ConcurDocAcctgDocRelation as select from cte_d_acc_attr

association [1..1] to I_ConcurDocumentType as _ConcurDocumentType on $projection.ConcurDocumentType = _ConcurDocumentType.ConcurDocumentType
association [1..1] to I_AccountingDocument as _AccountingDocument on $projection.CompanyCode  = _AccountingDocument.CompanyCode
                                                                 and $projection.JournalEntry = _AccountingDocument.AccountingDocument 
                                                                 and $projection.FiscalYear   = _AccountingDocument.FiscalYear 

{
  key system_key          as ConcurSystemKey,
  key document_type       as ConcurDocumentType,
  key document_id         as ConcurDocumentID,
  key revision_id         as ConcurDocumentRevisionNumber,
  key bukrs               as CompanyCode,
  key belnr               as JournalEntry,
  key gjahr               as FiscalYear,
      posting_date        as PostingDate,
      is_primary_document as AccDocIsPrimaryForConcurDoc,
      
//  _AccountingDocument.AccountingDocumentCreationDate as AccountingDocumentCreationDate,  
    
  _ConcurDocumentType,
  _AccountingDocument
  
}
```
