---
name: I_CABILLGDOCPAYMENT
description: "This CDS view retrieves the payment data items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Which payment method is to be used for this business transaction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCPAYMENT')/$value
semantic_en: "This CDS view retrieves the payment data items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Which payment method is to be used for this business transaction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Zahldatenpositionen des Abr.belegs — CDS view giao diện (transactional data) dựa trên dfkkinvbill_py."
keywords:
  - "zahldatenpositionen"
  - "des"
  - "abr.belegs"
  - "billg"
  - "document"
  - "payment"
  - "item"
  - "grpg"
  - "data"
  - "reference"
  - "amount"
tags:
  - FI
  - billing
  - bo:billingdocument
  - component:FI-CA-INV-2CL
  - document
  - FI-CA
  - FI-CA-INV
  - FI-CA-INV-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - payment
  - transaction
  - bo:purchaseorder
---
# I_CABILLGDOCPAYMENT

**This CDS view retrieves the payment data items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: Which payment method is to be used for this business transaction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCPAYMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocument` | ✓ | |  | `billdocno` | `CHAR(12)` | Number of Billing Document |
| `CABillgDocPaymentItem` | ✓ | |  | `billdocpayitem` | `NUMC(8)` | Sequence Number of Payment Data Item |
| `CABillgGrpgOfPaymentData` |  | |  | `py_group` | `CHAR(8)` | Grouping of Payment Data |
| `CABillgPaymentReference` |  | |  | `pyref` | `CHAR(30)` | Payment Reference |
| `CABillgPaymentAmount` |  | |  | `cast(py_amount as py_amount_gfn_kk preserving type)` | `CURR(13)` | Maximum Payment Amount |
| `TransactionCurrency` |  | |  | `py_curr` | `CUKY(5)` | Transaction Currency |
| `CABillgDocPaytItmExtSyst` |  | |  | `cast(refpayitem as refpayitem_gfn_kk preserving type)` | `CHAR(10)` | Payment Data Item in External System |
| `CABillgDocItemIsReversal` |  | |  | `reversalitem` | `CHAR(1)` | Reversal Item |
| `CAPaymentMethod` |  | |  | `pymet` | `CHAR(1)` | Payment Method |
| `CABankOfAltvBPForPayment` |  | |  | `embvt` | `CHAR(4)` | Bank Details ID of Payee |
| `CAAltvBPForPayment` |  | |  | `emgpa` | `CHAR(10)` | Alternative Business Partner for Payments |
| `CAKeyForPaymentCardSupplement` |  | |  | `pcard_guid` | `RAW(16)` | Key for Payment Card Supplement |
| `CAPaymentBillingStatus` |  | |  | `pcard_xsett` | `CHAR(1)` | Settlement Status |
| `CABillgDocPaymentItemPriority` |  | |  | `py_prio` | `NUMC(4)` | Priority of Payment Type |
| `CABillgGroupingSourceItems` |  | |  | `src_group` | `CHAR(8)` | Grouping of Source Items |
| `_CABillgDocHeader` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CAPaymentBillingStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocHeader` | `I_CABillgDocHeader` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CAPaymentBillingStatus` | `I_CAPaymentBillingStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCPAYMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCPAYMENT')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkinvbill_py',
          role: #MAIN,
          viewElement: ['CABillgDocument', 'CABillgDocPaymentItem'],
          tableElement: ['billdocno', 'billdocpayitem']
      } ]
    }
  }
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CABillgDocPaymentItem',
  sapObjectNodeType.name: 'ContrAcctgBillgDocPaymentItem',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Zahldatenpositionen des Abr.belegs'
define view entity I_CABillgDocPayment
  as select from dfkkinvbill_py as invbill_py

  association [0..1] to I_CABillgDocHeader       as _CABillgDocHeader       on $projection.CABillgDocument = _CABillgDocHeader.CABillgDocument
  association [0..1] to I_Currency               as _TransactionCurrency    on $projection.TransactionCurrency = _TransactionCurrency.Currency
  //  association [0..1] to I_CAPaymentMethod        as _CAPaymentMethod        on $projection.CAPaymentMethod = _CAPaymentMethod.CAPaymentMethod

  // Fix value help
  association [0..1] to I_CAPaymentBillingStatus as _CAPaymentBillingStatus on $projection.CAPaymentBillingStatus = _CAPaymentBillingStatus.CAPaymentBillingStatus
{
      @ObjectModel.foreignKey.association: '_CABillgDocHeader'
  key billdocno                                             as CABillgDocument,
  key billdocpayitem                                        as CABillgDocPaymentItem,
      py_group                                              as CABillgGrpgOfPaymentData,
      pyref                                                 as CABillgPaymentReference,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast(py_amount as py_amount_gfn_kk preserving type)   as CABillgPaymentAmount,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      py_curr                                               as TransactionCurrency,
      cast(refpayitem as refpayitem_gfn_kk preserving type) as CABillgDocPaytItmExtSyst,
      reversalitem                                          as CABillgDocItemIsReversal,
      //      @ObjectModel.foreignKey.association: '_CAPaymentMethod'
      pymet                                                 as CAPaymentMethod,
      embvt                                                 as CABankOfAltvBPForPayment,
      emgpa                                                 as CAAltvBPForPayment,
      pcard_guid                                            as CAKeyForPaymentCardSupplement,
      @ObjectModel.foreignKey.association: '_CAPaymentBillingStatus'
      pcard_xsett                                           as CAPaymentBillingStatus,
      py_prio                                               as CABillgDocPaymentItemPriority,
      src_group                                             as CABillgGroupingSourceItems,

      _CABillgDocHeader,
      _TransactionCurrency,
      //      _CAPaymentMethod,
      _CAPaymentBillingStatus
}
```
