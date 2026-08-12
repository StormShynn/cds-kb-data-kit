---
name: C_COLLSINVCMEMORYSITNTMPL
description: "This CDS view provides a comprehensive overview of situations created from invoices in SAP Collections Management. It provides a template for analyzing collections invoice situations, allowing you to monitor and manage overdue invoices, dunning processes, and payment promises effectively. How many invoices are overdue and what is the total overdue amount? What is the status of dunning processes for overdue invoices? How many payment promises are outstanding and what is their total value? What is the risk of late payment for specific invoices?"
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLSINVCMEMORYSITNTMPL')/$value
semantic_en: "This CDS view provides a comprehensive overview of situations created from invoices in SAP Collections Management. It provides a template for analyzing collections invoice situations, allowing you to monitor and manage overdue invoices, dunning processes, and payment promises effectively. How many invoices are overdue and what is the total overdue amount? What is the status of dunning processes for overdue invoices? How many payment promises are outstanding and what is their total value? What is the risk of late payment for specific invoices?"
semantic_vi: "C_COLLSINVCMEMORYSITNTMPL — CDS view tiêu dùng dựa trên P_CollectionsInvoiceMemory."
keywords:
  - "collsinvcmemorysitntmpl"
  - "company"
  - "code"
  - "accounting"
  - "document"
  - "fiscal"
  - "year"
  - "item"
  - "customer"
tags:
  - FIN
  - bo:billingdocument
  - component:FIN-FIO-CCD-COL-2CL
  - consumption-view
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-COL
  - FIN-FIO-CCD-COL-2CL
  - invoice
  - lob:controlling
  - lob:finance
  - payment
---
# C_COLLSINVCMEMORYSITNTMPL

**This CDS view provides a comprehensive overview of situations created from invoices in SAP Collections Management. It provides a template for analyzing collections invoice situations, allowing you to monitor and manage overdue invoices, dunning processes, and payment promises effectively. How many invoices are overdue and what is the total overdue amount? What is the status of dunning processes for overdue invoices? How many payment promises are outstanding and what is their total value? What is the risk of late payment for specific invoices?**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLSINVCMEMORYSITNTMPL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentItem` | ✓ | |  |  | `NUMC(3)` | Number of Line Item Within Accounting Document |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `BillingDocument` |  | |  |  | `CHAR(10)` | Billing Document |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `NetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
| `CashDiscount1DueDate` |  | |  |  | `DATS(8)` | Due Date for Cash Discount 1 |
| `PaymentDate` |  | |  |  | `DATS(8)` | Date of Last Incoming Payment for Invoice |
| `LastDunningDate` |  | |  |  | `DATS(8)` | Date of Last Dunning Notice for Invoice |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(15)` | Original Amount of Invoice or Credit |
| `PaidAmount` |  | |  |  | `CURR(15)` | Amount Paid |
| `OpenAmountInDocumentCurrency` |  | |  |  | `CURR(15)` | Open Amount |
| `CreditedAmount` |  | |  |  | `CURR(13)` | Total of All Credits for Selected Invoice |
| `DunnedAmount` |  | |  |  | `CURR(15)` | Dunned Amount |
| `ArrangedAmount` |  | |  |  | `CURR(13)` | Amount Arranged for Payment |
| `CashDiscountAmtInTransacCrcy` |  | |  |  | `CURR(13)` | Cash Discount Amount in Document Currency |
| `BranchAccount` |  | |  |  | `CHAR(10)` | Customer Number |
| `ObjectKey` |  | |  | `cast( ObjectKey as fdm_invoice_key )` | `CHAR(21)` | Invoice Key |
| `CollectionsInvoiceUniqueID` |  | |  |  | `CHAR(30)` | Situation Anchor Object Type |
| `CollectionSegment` |  | | `_CollectionsAccount` | `CollectionSegment` | `CHAR(10)` | Collection Segment |
| `OverdueDays` |  | |  |  | `INT4(10)` |  |
| `ReferenceDocumentLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Reference Document |
| `LastDunningDurationInDays` |  | |  |  | `INT4(10)` |  |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `DunningBlockingReason` |  | |  |  | `CHAR(1)` | Dunning Block Reason |
| `DunningLevel` |  | |  |  | `NUMC(1)` | Dunning Level |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `OperationalGLAccount` |  | |  |  | `CHAR(10)` | Operational General Ledger Account |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Reference1InDocumentHeader` |  | |  |  | `CHAR(20)` | Internal ID of Reference Key 1 in Document Header |
| `Reference2InDocumentHeader` |  | |  |  | `CHAR(20)` | Internal ID of Reference Key 2 in Document Header |
| `DisputeCase` |  | |  |  | `CHAR(12)` | Case ID |
| `DisputedAmount` |  | |  |  | `CURR(15)` | Current Disputed Amount |
| `CaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `CaseStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `PromiseToPay` |  | |  |  | `CHAR(12)` | Case ID |
| `PromisedAmount` |  | |  |  | `CURR(15)` | Promised Amount |
| `PromiseToPayDueDate` |  | |  |  | `DATS(8)` | Date for Which Payment Is Promised |
| `PromiseToPayLevel` |  | |  |  | `INT1(3)` | Level of Promise to Pay |
| `PromiseToPayStatus` |  | |  |  | `CHAR(1)` | State of Promise to Pay |
| `ResubmissionUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `ResubmissionDueDate` |  | |  |  | `DATS(8)` | Resubmission Date |
| `ResubmissionReason` |  | |  |  | `CHAR(4)` | Reason for Resubmission |
| `LatePaymentRisk` |  | |  |  | `CHAR(1)` | Risk of Late Payment (Deprecated) |
| `_OperationalAcctgDocItem` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_AccountingDocument` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollectionsAccount` | `P_CollectionsAccount` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLSINVCMEMORYSITNTMPL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLSINVCMEMORYSITNTMPL')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'CCOLLINVSIT',
                compiler:    { compareFilter: true },
                preserveKey: true }
@Metadata: { ignorePropagatedAnnotations: true }
@VDM: { viewType: #CONSUMPTION,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@AccessControl: { personalData:       { blocking: #BLOCKED_DATA_EXCLUDED },
                  authorizationCheck: #CHECK }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@ObjectModel: { usageType: { serviceQuality: #X,
                             sizeCategory:   #L,
                             dataClass:      #MIXED },
                representativeKey: 'AccountingDocumentItem',
                semanticKey: [ 'CollectionSegment',
                               'Customer',
                               'BranchAccount',
                               'PostingKey',
                               'CompanyCode',
                               'FiscalYear',
                               'AccountingDocument',
                               'AccountingDocumentItem',
                               'DisputeCase',
                               'PromiseToPay' ],
                supportedCapabilities: [ #SITUATION_ANCHOR,
                                         #SITUATION_TRIGGER ],
                modelingPattern: #SITUATION_ANCHOR }
@EndUserText: { label: 'Collections Invoice Situation Template' }

define view C_CollsInvcMemorySitnTmpl
  as select from P_CollectionsInvoiceMemory

  //VDM associations
  //Collections Account - derivation of Collection Segment
  association [0..*] to P_CollectionsAccount as _CollectionsAccount on  $projection.BranchAccount = _CollectionsAccount.Customer
                                                                    and $projection.CompanyCode   = _CollectionsAccount.CompanyCode
{

      // VDM Fields
      @ObjectModel: { foreignKey: { association: '_CompanyCode' } }
  key CompanyCode,

      @ObjectModel: { foreignKey: { association: '_AccountingDocument' } }
      @UI: { hidden: true }
  key AccountingDocument,

      @ObjectModel: { foreignKey: { association: '_FiscalYear' } }
      @UI: { hidden: true }
  key FiscalYear,

      @ObjectModel: { foreignKey: { association: '_OperationalAcctgDocItem' } }
      @UI: { hidden: true }
  key AccountingDocumentItem,
      Customer,

      @UI: { hidden: true }
      BillingDocument,
      PostingDate,
      NetDueDate,
      CashDiscount1DueDate,
      PaymentDate,
      LastDunningDate,
      TransactionCurrency,

      @Semantics: { amount: { currencyCode: 'TransactionCurrency' } }
      AmountInTransactionCurrency,

      @Semantics: { amount: { currencyCode: 'TransactionCurrency' } }
      PaidAmount,

      @Semantics: { amount: { currencyCode: 'TransactionCurrency' } }
      OpenAmountInDocumentCurrency,

      @Semantics: { amount: { currencyCode: 'TransactionCurrency' } }
      CreditedAmount,

      @Semantics: { amount: { currencyCode: 'TransactionCurrency' } }
      DunnedAmount,

      @Semantics: { amount: { currencyCode: 'TransactionCurrency' } }
      ArrangedAmount,

      @Semantics: { amount: { currencyCode: 'TransactionCurrency' } }
      CashDiscountAmtInTransacCrcy,

      @EndUserText: { label: 'Branch Account' }
      BranchAccount,

      @UI: { hidden: true }
      cast( ObjectKey as fdm_invoice_key ) as ObjectKey,

      @UI: { hidden: true }
      CollectionsInvoiceUniqueID,

      _CollectionsAccount.CollectionSegment,

      @EndUserText: { label:     'Days since due date',
                      quickInfo: 'Days since due date' }
      OverdueDays,

      @UI: { hidden: true }
      ReferenceDocumentLogicalSystem,

      @EndUserText: { label:     'Days since last Dunning Date',
                      quickInfo: 'Days since last Dunning Date' }
      LastDunningDurationInDays,

      FinancialAccountType,
      PostingKey,
      SpecialGLCode,
      DunningBlockingReason,
      DunningLevel,

      @UI: { hidden: true }
      FiscalPeriod,

      DocumentDate,
      OperationalGLAccount,
      PaymentMethod,
      Country,
      Reference1InDocumentHeader,
      Reference2InDocumentHeader,

      @UI: { hidden: true }
      DisputeCase,

      @Semantics: { amount: { currencyCode: 'TransactionCurrency' } }
      DisputedAmount,

      CaseReason,
      CaseStatus,

      @UI: { hidden: true }
      PromiseToPay,

      @Semantics: { amount: { currencyCode: 'TransactionCurrency' } }
      PromisedAmount,

      PromiseToPayDueDate,
      PromiseToPayLevel,
      PromiseToPayStatus,

      @UI: { hidden: true }
      ResubmissionUUID,

      ResubmissionDueDate,
      ResubmissionReason,
      LatePaymentRisk,

      // Exposed Associations
      _OperationalAcctgDocItem,
      _FiscalYear,
      _CompanyCode,
      _AccountingDocument,
      _Customer
}
```
