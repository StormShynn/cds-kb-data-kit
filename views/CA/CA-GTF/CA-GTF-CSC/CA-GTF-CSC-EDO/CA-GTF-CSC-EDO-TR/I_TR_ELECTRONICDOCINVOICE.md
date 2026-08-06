---
name: I_TR_ELECTRONICDOCINVOICE
description: eDocument Turkey eInvoice
app_component: CA-GTF-CSC-EDO-TR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TR_ELECTRONICDOCINVOICE')/$value
semantic_en: eDocument Turkey eInvoice
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
  - metadata-only
---
# I_TR_ELECTRONICDOCINVOICE

**eDocument Turkey eInvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-TR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TR_ELECTRONICDOCINVOICE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ElectronicDocUUID` | `CHAR(32)` | eDocument: GUID |
| `ElectronicDocCompanyCode` | `CHAR(4)` | Company Code |
| `ElectronicDocSourceType` | `CHAR(10)` | eDocument Source Type |
| `ElectronicDocSourceKey` | `CHAR(32)` | eDocument Source Key |
| `ElectronicDocType` | `CHAR(10)` | eDocument Type |
| `ElectronicDocProcessStatus` | `CHAR(10)` | eDocument Process Status |
| `ElectronicDocLastChangeDate` | `DATS(8)` | Changed on (Date) |
| `ElectronicDocLastChangeTime` | `TIMS(6)` | Changed On (Time) |
| `ElectronicDocProcess` | `CHAR(10)` | eDocument Process |
| `ElectronicDocPostingDate` | `DATS(8)` | Posting Date of the Source Document |
| `TR_ElectronicDocUniqueID` | `CHAR(36)` | eDocument Turkey: FIT Invoice UUID |
| `TR_ElectronicDocEnvelopeID` | `CHAR(36)` | eDocument Turkey: FIT Envelope ID |
| `TR_ElectronicDocInvoiceID` | `CHAR(16)` | eDocument Turkey: Invoice ID |
| `TR_EDocBusinessPartnerAlias` | `CHAR(255)` | Alias |
| `TR_ElectronicDocTaxID` | `CHAR(11)` | eDocument Turkey: VKN/TCKN |
| `TR_EDocTaxExclusiveAmount` | `CURR(23)` | Tax-Exclusive Amount |
| `TR_ElectronicDocTaxAmount` | `CURR(23)` | Tax Amount |
| `TR_EDocTaxInclusiveAmount` | `CURR(23)` | Tax-Inclusive Amount |
| `SalesCurrency` | `CUKY(5)` | Currency Key |
| `TR_ElectronicDocBusPartner` | `CHAR(10)` | Business Partner |
| `TR_EDocBusPartnerName` | `CHAR(50)` | Business Partner Name |
| `TR_ElectronicDocRcvdDateTime` | `DEC(21)` | Time Received |
| `TR_ElectronicDocSupplierID` | `CHAR(10)` | Supplier |
| `TR_ElectronicDocSupplierName` | `CHAR(50)` | Supplier Name |
| `TR_EDocTradeRefNumber` | `CHAR(23)` | Ministry of Customs and Trade Reference Number |
| `TR_EDocCustomRegNumber` | `CHAR(16)` | Customs Exit Declaration Registration Number |
| `TR_EDocRealExportDate` | `DATS(8)` | Realisition Date (Real Export Date) |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `TR_EDocShipToPartyName` | `CHAR(50)` | Ship-to Party Name |
