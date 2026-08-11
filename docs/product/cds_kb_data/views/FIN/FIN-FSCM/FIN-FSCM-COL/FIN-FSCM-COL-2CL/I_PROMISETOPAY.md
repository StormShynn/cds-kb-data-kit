---
name: I_PROMISETOPAY
description: "This CDS view provides detailed attributes related to promises to pay in SAP Collections Management, allowing you to analyze and manage financial commitments effectively. This CDS view provides the data to answer the following business questions: What are the details of promise-to-pay agreements associated with specific dispute cases? How much has been promised and paid in relation to these agreements? What is the status and due date of each promise-to-pay agreement? Who has given the promise to pay, and how many installments are involved? What are the currency details and exchange rates applicable to these transactions? How can the promise-to-pay data be linked to specific invoices and customers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAY')/$value
semantic_en: "This CDS view provides detailed attributes related to promises to pay in SAP Collections Management, allowing you to analyze and manage financial commitments effectively. This CDS view provides the data to answer the following business questions: What are the details of promise-to-pay agreements associated with specific dispute cases? How much has been promised and paid in relation to these agreements? What is the status and due date of each promise-to-pay agreement? Who has given the promise to pay, and how many installments are involved? What are the currency details and exchange rates applicable to these transactions? How can the promise-to-pay data be linked to specific invoices and customers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Promise To Pay Attributes — CDS view giao diện (transactional data) dựa trên udm_p2p_attr."
keywords:
  - "promise"
  - "pay"
  - "attributes"
  - "dispute"
  - "case"
  - "company"
  - "code"
  - "customer"
  - "linked"
  - "invoice"
  - "promised"
  - "amount"
tags:
  - FIN
  - bo:billingdocument
  - component:FIN-FSCM-COL-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - interface-view
  - invoice
  - lob:controlling
  - lob:finance
  - transaction
---
# I_PROMISETOPAY

**This CDS view provides detailed attributes related to promises to pay in SAP Collections Management, allowing you to analyze and manage financial commitments effectively. This CDS view provides the data to answer the following business questions: What are the details of promise-to-pay agreements associated with specific dispute cases? How much has been promised and paid in relation to these agreements? What is the status and due date of each promise-to-pay agreement? Who has given the promise to pay, and how many installments are involved? What are the currency details and exchange rates applicable to these transactions? How can the promise-to-pay data be linked to specific invoices and customers? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` | ✓ | |  | `cast( case_guid as bdm_case_guid preserving type )` | `CHAR(32)` | FSCM-DM: GUID (Internal Key of Dispute Case) |
| `CompanyCode` |  | |  | `cast( fin_comp_code as bdm_comp_code preserving type )` | `CHAR(4)` | Company Code |
| `Customer` |  | |  | `cast( fin_customer as udm_kunnr preserving type )` | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `LinkedInvoiceKey` |  | |  | `fin_invoice_key` | `CHAR(70)` | Object key |
| `PromisedAmount` |  | |  | `cast( fin_promised_amt as bdm_promised_amount preserving type )` | `CURR(15)` | Amount Promised for Payment |
| `PaidAmount` |  | |  | `cast( fin_paid_amount as bdm_paid_amount preserving type)` | `CURR(15)` | Amount Paid |
| `Currency` |  | |  | `cast( fin_p2p_curr as bdm_promise_curr preserving type )` | `CUKY(5)` | Currency of Promise to Pay |
| `DueDate` |  | |  | `cast( fin_p2p_due_date as bdm_promise_due_date preserving type )` | `DATS(8)` | Date for Which Payment Is Promised |
| `CreationDate` |  | |  | `cast( fin_p2p_date as bdm_promise_date preserving type )` | `DATS(8)` | Date on Which Promise to Pay Was Given |
| `Status` |  | |  | `cast( fin_p2p_state as bdm_promise_state preserving type )` | `CHAR(1)` | State of Promise to Pay |
| `LastPaymentDate` |  | |  | `fin_last_payment` | `DATS(8)` | Date of Last Payment |
| `PromiseToPayLevel` |  | |  | `fin_p2p_level` | `INT1(3)` | Level of Promise to Pay |
| `PromiseToPayGivenByPersonName` |  | |  | `fin_promised_by` | `CHAR(40)` | Clerk That Gave the Promise to Pay |
| `NumberOfInstallments` |  | |  | `fin_no_of_inst` | `INT4(10)` | Number of Installments in the Promise to Pay in Installments |
| `GlobalCurrency` |  | | `_GlobalCurrency` | `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `GlobalCurrencyExchangeRateType` |  | | `_GlobalCurrency` | `ExchangeRateType` | `CHAR(4)` | Exchange Rate Type |
| `_CaseAttributes` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseAttributes` | `I_CaseAttributes` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_GlobalCurrency` | `P_LdngLdgrGlobCrcyTranslation` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IP2PATTR'
@EndUserText.label: 'Promise To Pay Attributes'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: { usageType: { serviceQuality: #C,
                             sizeCategory: #L,
                             dataClass: #TRANSACTIONAL },
                supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#SQL_DATA_SOURCE],
                representativeKey: 'DisputeCaseUUID' }

@AccessControl.privilegedAssociations:  [ '_CaseAttributes' ]
@ObjectModel.sapObjectNodeType.name: 'PromiseToPay'
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
        }
@Consumption: { dbHints: [ 'USE_HEX_PLAN' ] }

define view I_PromiseToPay
  as select from udm_p2p_attr
  association [0..1] to I_CaseAttributes              as _CaseAttributes on $projection.DisputeCaseUUID = _CaseAttributes.CaseUUID
  association [0..1] to I_CompanyCode                 as _CompanyCode    on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer                    as _Customer       on $projection.Customer = _Customer.Customer
  association [0..1] to I_Currency                    as _Currency       on $projection.Currency = _Currency.Currency

  association [0..1] to P_LdngLdgrGlobCrcyTranslation as _GlobalCurrency on $projection.CompanyCode = _GlobalCurrency.CompanyCode
{
  key cast( case_guid as bdm_case_guid preserving type )               as DisputeCaseUUID,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      cast( fin_comp_code as bdm_comp_code preserving type )           as CompanyCode,

      @ObjectModel.foreignKey.association: '_Customer'
      cast( fin_customer as udm_kunnr preserving type )                as Customer,

      fin_invoice_key                                                  as LinkedInvoiceKey,

      @Semantics.amount.currencyCode: 'Currency'
      cast( fin_promised_amt as bdm_promised_amount preserving type )  as PromisedAmount,
      @Semantics.amount.currencyCode: 'Currency'
      cast( fin_paid_amount  as bdm_paid_amount preserving type)       as PaidAmount,

      @ObjectModel.foreignKey.association: '_Currency'
      cast( fin_p2p_curr as bdm_promise_curr preserving type )         as Currency,

      cast( fin_p2p_due_date as bdm_promise_due_date preserving type ) as DueDate,

      cast( fin_p2p_date as bdm_promise_date preserving type )         as CreationDate,

      cast( fin_p2p_state as bdm_promise_state preserving type )       as Status,

      fin_last_payment                                                 as LastPaymentDate,
      fin_p2p_level                                                    as PromiseToPayLevel,
      fin_promised_by                                                  as PromiseToPayGivenByPersonName,
      fin_no_of_inst                                                   as NumberOfInstallments,

      @Semantics.currencyCode: true
      _GlobalCurrency.GlobalCurrency                                   as GlobalCurrency,
      _GlobalCurrency.ExchangeRateType                                 as GlobalCurrencyExchangeRateType,

      _CaseAttributes,
      _CompanyCode,
      _Customer,
      _Currency
}
```
