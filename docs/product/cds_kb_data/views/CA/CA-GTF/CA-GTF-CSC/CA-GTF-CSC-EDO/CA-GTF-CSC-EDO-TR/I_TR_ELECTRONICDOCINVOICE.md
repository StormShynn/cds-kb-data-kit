---
name: I_TR_ELECTRONICDOCINVOICE
description: "eDocument Turkey eInvoice"
app_component: CA-GTF-CSC-EDO-TR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TR_ELECTRONICDOCINVOICE')/$value
semantic_en: "eDocument Turkey eInvoice"
semantic_vi: "eDocument Turkey eInvoice — CDS view tổng hợp dựa trên I_ElectronicDoc."
keywords:
  - "edocument"
  - "turkey"
  - "einvoice"
  - "electronic"
  - "company"
  - "code"
  - "source"
  - "type"
tags:
  - CA
  - bo:billingdocument
  - CA-GTF
  - CA-GTF-CSC
  - CA-GTF-CSC-EDO
  - CA-GTF-CSC-EDO-TR
  - component:CA-GTF-CSC-EDO-TR
  - document
  - interface-view
  - invoice
  - lob:cross_application components
---
# I_TR_ELECTRONICDOCINVOICE

**eDocument Turkey eInvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-TR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TR_ELECTRONICDOCINVOICE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  | `CHAR(32)` | eDocument: GUID |
| `ElectronicDocCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ElectronicDocSourceType` |  | |  |  | `CHAR(10)` | eDocument Source Type |
| `ElectronicDocSourceKey` |  | |  |  | `CHAR(32)` | eDocument Source Key |
| `ElectronicDocType` |  | |  |  | `CHAR(10)` | eDocument Type |
| `ElectronicDocProcessStatus` |  | |  |  | `CHAR(10)` | eDocument Process Status |
| `ElectronicDocLastChangeDate` |  | |  |  | `DATS(8)` | Changed on (Date) |
| `ElectronicDocLastChangeTime` |  | |  |  | `TIMS(6)` | Changed On (Time) |
| `ElectronicDocProcess` |  | |  |  | `CHAR(10)` | eDocument Process |
| `ElectronicDocPostingDate` |  | |  |  | `DATS(8)` | Posting Date of the Source Document |
| `TR_ElectronicDocUniqueID` |  | |  | `case when _Invoice.TR_ElectronicDocUniqueID is not initial then _Invoice.TR_ElectronicDocUniqueID else _Export.TR_ElectronicDocUniqueID end` | `CHAR(36)` | eDocument Turkey: FIT Invoice UUID |
| `TR_ElectronicDocEnvelopeID` |  | |  | `case when _Invoice.TR_ElectronicDocEnvelopeID is not initial then _Invoice.TR_ElectronicDocEnvelopeID when _Export.TR_ElectronicDocEnvelopeID is not initial then _Export.TR_ElectronicDocEnvelopeID else _Incoming.TR_ElectronicDocEnvelopeID end` | `CHAR(36)` | eDocument Turkey: FIT Envelope ID |
| `TR_ElectronicDocInvoiceID` |  | |  | `case when _Invoice.TR_ElectronicDocInvoiceID is not initial then _Invoice.TR_ElectronicDocInvoiceID else _Export.TR_ElectronicDocInvoiceID end` | `CHAR(16)` | eDocument Turkey: Invoice ID |
| `TR_EDocBusinessPartnerAlias` |  | |  | `case when _Invoice.TR_EDocBusinessPartnerAlias is not initial then _Invoice.TR_EDocBusinessPartnerAlias when _Export.TR_EDocBusinessPartnerAlias is not initial then _Export.TR_EDocBusinessPartnerAlias else _Incoming.TR_EDocBusinessPartnerAlias end` | `CHAR(255)` | Alias |
| `TR_ElectronicDocTaxID` |  | |  | `case when _Invoice.TR_ElectronicDocTaxID is not initial then _Invoice.TR_ElectronicDocTaxID when _Export.TR_ElectronicDocTaxID is not initial then _Export.TR_ElectronicDocTaxID else _Incoming.TR_ElectronicDocTaxID end` | `CHAR(11)` | eDocument Turkey: VKN/TCKN |
| `TR_EDocTaxExclusiveAmount` |  | |  | `case when _Invoice.TR_EDocTaxExclusiveAmount is not initial then _Invoice.TR_EDocTaxExclusiveAmount when _Export.TR_EDocTaxExclusiveAmount is not initial then _Export.TR_EDocTaxExclusiveAmount else _Incoming.TR_EDocTaxExclusiveAmount end` | `CURR(23)` | Tax-Exclusive Amount |
| `TR_ElectronicDocTaxAmount` |  | |  | `case when _Invoice.TR_ElectronicDocTaxAmount is not initial then _Invoice.TR_ElectronicDocTaxAmount when _Export.TR_ElectronicDocTaxAmount is not initial then _Export.TR_ElectronicDocTaxAmount else _Incoming.TR_ElectronicDocTaxAmount end` | `CURR(23)` | Tax Amount |
| `TR_EDocTaxInclusiveAmount` |  | |  | `case when _Invoice.TR_EDocTaxInclusiveAmount is not initial then _Invoice.TR_EDocTaxInclusiveAmount when _Export.TR_EDocTaxInclusiveAmount is not initial then _Export.TR_EDocTaxInclusiveAmount else _Incoming.TR_EDocTaxInclusiveAmount end` | `CURR(23)` | Tax-Inclusive Amount |
| `SalesCurrency` |  | |  | `case when _Invoice.SalesCurrency is not initial then _Invoice.SalesCurrency when _Export.SalesCurrency is not initial then _Export.SalesCurrency else _Incoming.SalesCurrency end` | `CUKY(5)` | Currency Key |
| `TR_ElectronicDocBusPartner` |  | | `_Invoice` | `TR_ElectronicDocBusPartner` | `CHAR(10)` | Business Partner |
| `TR_EDocBusPartnerName` |  | | `_Invoice` | `TR_EDocBusPartnerName` | `CHAR(50)` | Business Partner Name |
| `TR_EDocRejectionReasonText` |  | | `_Incoming` | `TR_EDocRejectionReasonText` |  |  |
| `TR_ElectronicDocRcvdDateTime` |  | | `_Incoming` | `TR_ElectronicDocRcvdDateTime` | `DEC(21)` | Time Received |
| `TR_ElectronicDocSupplierID` |  | | `_Incoming` | `TR_ElectronicDocSupplierID` | `CHAR(10)` | Supplier |
| `TR_ElectronicDocSupplierName` |  | | `_Incoming` | `TR_ElectronicDocSupplierName` | `CHAR(50)` | Supplier Name |
| `TR_EDocTradeRefNumber` |  | | `_Export` | `TR_EDocTradeRefNumber` | `CHAR(23)` | Ministry of Customs and Trade Reference Number |
| `TR_EDocCustomRegNumber` |  | | `_Export` | `TR_EDocCustomRegNumber` | `CHAR(16)` | Customs Exit Declaration Registration Number |
| `TR_EDocRealExportDate` |  | | `_Export` | `TR_EDocRealExportDate` | `DATS(8)` | Realisition Date (Real Export Date) |
| `ShipToParty` |  | | `_Export` | `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `TR_EDocShipToPartyName` |  | | `_Export` | `TR_EDocShipToPartyName` | `CHAR(50)` | Ship-to Party Name |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Invoice` | `I_TR_ElectronicDocOutgInvoice` | [1] |
| `_Incoming` | `I_TR_ElectronicDocIncgInvoice` | [1] |
| `_Export` | `I_TR_ElectronicDocExpInvoice` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TR_ELECTRONICDOCINVOICE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TR_ELECTRONICDOCINVOICE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ITREINVOICE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@EndUserText.label: 'eDocument Turkey eInvoice'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE ]
@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #C,
  sizeCategory: #M
  }
define view I_TR_ElectronicDocInvoice
  as select from I_ElectronicDoc
  association [1] to I_TR_ElectronicDocOutgInvoice as _Invoice  on $projection.ElectronicDocUUID = _Invoice.ElectronicDocUUID
  association [1] to I_TR_ElectronicDocIncgInvoice as _Incoming on $projection.ElectronicDocUUID = _Incoming.ElectronicDocUUID
  association [1] to I_TR_ElectronicDocExpInvoice  as _Export   on $projection.ElectronicDocUUID = _Export.ElectronicDocUUID
{
  key ElectronicDocUUID,
      ElectronicDocCompanyCode,
      ElectronicDocSourceType,
      ElectronicDocSourceKey,
      ElectronicDocType,
      ElectronicDocProcessStatus,
      ElectronicDocLastChangeDate,
      ElectronicDocLastChangeTime,
      ElectronicDocProcess,
      ElectronicDocPostingDate,

      // UUID
  case
         when _Invoice.TR_ElectronicDocUniqueID is not initial
         then _Invoice.TR_ElectronicDocUniqueID

//         when  _Export.TR_ElectronicDocUniqueID is not initial
//         then  _Export.TR_ElectronicDocUniqueID
//
         else  _Export.TR_ElectronicDocUniqueID
      end                                    as TR_ElectronicDocUniqueID,

      //EnvelopeID
      case
         when _Invoice.TR_ElectronicDocEnvelopeID is not initial
         then _Invoice.TR_ElectronicDocEnvelopeID

         when  _Export.TR_ElectronicDocEnvelopeID is not initial
         then  _Export.TR_ElectronicDocEnvelopeID

         else  _Incoming.TR_ElectronicDocEnvelopeID
      end                                    as TR_ElectronicDocEnvelopeID,

      //InvoiceID
      case
         when _Invoice.TR_ElectronicDocInvoiceID is not initial
         then _Invoice.TR_ElectronicDocInvoiceID

//         when  _Export.TR_ElectronicDocInvoiceID is not initial
//         then  _Export.TR_ElectronicDocInvoiceID

         else  _Export.TR_ElectronicDocInvoiceID
      end                                    as TR_ElectronicDocInvoiceID,

      //Identifier
      case
         when _Invoice.TR_EDocBusinessPartnerAlias is not initial
         then _Invoice.TR_EDocBusinessPartnerAlias

         when  _Export.TR_EDocBusinessPartnerAlias is not initial
         then  _Export.TR_EDocBusinessPartnerAlias

         else  _Incoming.TR_EDocBusinessPartnerAlias
      end                                    as TR_EDocBusinessPartnerAlias,

      //VKN_TCKN
      case
         when _Invoice.TR_ElectronicDocTaxID is not initial
         then _Invoice.TR_ElectronicDocTaxID

         when  _Export.TR_ElectronicDocTaxID is not initial
         then  _Export.TR_ElectronicDocTaxID

         else  _Incoming.TR_ElectronicDocTaxID
      end                                    as TR_ElectronicDocTaxID,

      //Tax Exclusive amount
      @Semantics.amount.currencyCode: 'SalesCurrency'
      case
         when _Invoice.TR_EDocTaxExclusiveAmount is not initial
         then _Invoice.TR_EDocTaxExclusiveAmount

         when  _Export.TR_EDocTaxExclusiveAmount is not initial
        then  _Export.TR_EDocTaxExclusiveAmount

         else  _Incoming.TR_EDocTaxExclusiveAmount
     end                                    as TR_EDocTaxExclusiveAmount,

      //Tax Amount
      @Semantics.amount.currencyCode: 'SalesCurrency'
      case
         when _Invoice.TR_ElectronicDocTaxAmount is not initial
         then _Invoice.TR_ElectronicDocTaxAmount

         when  _Export.TR_ElectronicDocTaxAmount is not initial
        then  _Export.TR_ElectronicDocTaxAmount

         else  _Incoming.TR_ElectronicDocTaxAmount
      end                                    as TR_ElectronicDocTaxAmount,

      //Tax inclusive amount
      @Semantics.amount.currencyCode: 'SalesCurrency'
      case
        when _Invoice.TR_EDocTaxInclusiveAmount is not initial
         then _Invoice.TR_EDocTaxInclusiveAmount

         when  _Export.TR_EDocTaxInclusiveAmount is not initial
         then  _Export.TR_EDocTaxInclusiveAmount

        else  _Incoming.TR_EDocTaxInclusiveAmount
      end                                    as TR_EDocTaxInclusiveAmount,
      
//      Currency
      @Semantics.currencyCode
      case
        when _Invoice.SalesCurrency is not initial
         then _Invoice.SalesCurrency

         when  _Export.SalesCurrency is not initial
         then  _Export.SalesCurrency

        else  _Incoming.SalesCurrency
      end                                    as SalesCurrency,

      _Invoice.TR_ElectronicDocBusPartner    as TR_ElectronicDocBusPartner, // Business Partner
      _Invoice.TR_EDocBusPartnerName         as TR_EDocBusPartnerName,      // Business Partner Name
      _Incoming.TR_EDocRejectionReasonText   as TR_EDocRejectionReasonText, // Rejection Reason
      _Incoming.TR_ElectronicDocRcvdDateTime as TR_ElectronicDocRcvdDateTime, // Received Time
      _Incoming.TR_ElectronicDocSupplierID   as TR_ElectronicDocSupplierID, // Supplier
      _Incoming.TR_ElectronicDocSupplierName as TR_ElectronicDocSupplierName, // Supplier Name
      _Export.TR_EDocTradeRefNumber          as TR_EDocTradeRefNumber,  // Export- Trade Reference Number
      _Export.TR_EDocCustomRegNumber         as TR_EDocCustomRegNumber, // Export- Custom Registration Number
      _Export.TR_EDocRealExportDate          as TR_EDocRealExportDate, // Export- Real Export Date
      _Export.ShipToParty                    as ShipToParty,            // Customer
      _Export.TR_EDocShipToPartyName         as TR_EDocShipToPartyName  // Ship to Party name
}
where
        ElectronicDocCountry =  'TR'
  and(
        ElectronicDocType    <> 'TR_DELN'
    and ElectronicDocType    <> 'TR_DLUN'
    and ElectronicDocType    <> 'TR_RECP'
  )
```
