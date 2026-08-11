---
name: I_IN_INPUTSRVCDISTRBASIC
description: "Input Service Distribution Basic CDS"
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_INPUTSRVCDISTRBASIC')/$value
semantic_en: "Input Service Distribution Basic CDS"
semantic_vi: "Input Service Distribution Basic CDS — CDS view giao diện dựa trên j_1ig_isd_distr."
keywords:
  - "input"
  - "service"
  - "distribution"
  - "basic"
  - "accounting"
  - "document"
  - "type"
  - "item"
  - "fiscal"
  - "year"
  - "company"
  - "code"
tags:
  - FI
  - component:FI-LOC-LO-IN
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-IN
  - interface-view
  - lob:finance
  - lob:logistics general
  - bo:salesorganization
---
# I_IN_INPUTSRVCDISTRBASIC

**Input Service Distribution Basic CDS**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_INPUTSRVCDISTRBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocument` | ✓ | |  | `belnr` | `CHAR(10)` | Document Number of an Accounting Document |
| `AccountingDocumentType` | ✓ | |  | `blart` | `CHAR(2)` | Document Type |
| `AccountingDocumentItem` | ✓ | |  | `buzei` | `NUMC(3)` | Number of Line Item Within Accounting Document |
| `FiscalYear` | ✓ | |  | `gjahr` | `NUMC(4)` | Fiscal Year |
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `InputServiceDistrBusPlace` | ✓ | |  | `isd_bupla` | `CHAR(4)` | Business Place |
| `ReceivingBusPlace` | ✓ | |  | `rec_bupla` | `CHAR(4)` | Business Place |
| `CntrlGST` |  | |  | `isd_cgst` | `CURR(13)` | Tax Amount in Document Currency |
| `StateGST` |  | |  | `isd_sgst` | `CURR(13)` | Tax Amount in Document Currency |
| `UnionTerritoryGST` |  | |  | `isd_ugst` | `CURR(13)` | Tax Amount in Document Currency |
| `IntegratedGST` |  | |  | `isd_igst` | `CURR(13)` | Tax Amount in Document Currency |
| `InputServiceDistrTaxCESS` |  | |  | `isd_cess` | `CURR(13)` | Tax Amount in Document Currency |
| `ReceivingBusPlaceCentralGST` |  | |  | `rec_cgst` | `CURR(13)` | Tax Amount in Document Currency |
| `ReceivingBusPlaceStateGST` |  | |  | `rec_sgst` | `CURR(13)` | Tax Amount in Document Currency |
| `ReceivingBusPlaceUnionGST` |  | |  | `rec_ugst` | `CURR(13)` | Tax Amount in Document Currency |
| `ReceivingBusPlaceIntegratedGST` |  | |  | `rec_igst` | `CURR(13)` | Tax Amount in Document Currency |
| `ReceivingBusPlaceCESS` |  | |  | `rec_cess` | `CURR(13)` | Tax Amount in Document Currency |
| `TaxCode` |  | |  | `isd_mwskz` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `Currency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `PostingDate` |  | |  | `budat` | `DATS(8)` | Posting Date in the Document |
| `ReceivingAccountingDocument` |  | |  | `rec_belnr` | `CHAR(10)` | Document Number of an Accounting Document |
| `IN_HSNOrSACCode` |  | |  | `hsn_sac` | `CHAR(16)` | HSN or SAC Code |
| `TaxIsNotDeductible` |  | |  | `non_deduct` | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
| `IN_InptSrvcDistrDocType` |  | |  | `doc_type` | `NUMC(2)` | GST IN: Type of Document (Invoice/Credit Memo) |
| `IN_InptSrvcDistrInvc` |  | |  | `isd_invoice` | `CHAR(10)` | ISD Invoice Document Number |
| `IN_InptSrvcDistrInvcFsclYr` |  | |  | `isd_invoice_gjahr` | `NUMC(4)` | ISD Invoice Fiscal Year |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_INPUTSRVCDISTRBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_INPUTSRVCDISTRBASIC')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IININPSRVDISTR'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #XXL }
@VDM.viewType: #BASIC
@EndUserText.label: 'Input Service Distribution Basic CDS'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE  ]
define view I_IN_InputSrvcDistrBasic
  as select from j_1ig_isd_distr
{
  key belnr             as AccountingDocument,
  key blart             as AccountingDocumentType,
  key buzei             as AccountingDocumentItem,
  key gjahr             as FiscalYear,
  key bukrs             as CompanyCode,
  key isd_bupla         as InputServiceDistrBusPlace,
  key rec_bupla         as ReceivingBusPlace,
      isd_cgst          as CntrlGST,
      isd_sgst          as StateGST,
      isd_ugst          as UnionTerritoryGST,
      isd_igst          as IntegratedGST,
      isd_cess          as InputServiceDistrTaxCESS,
      rec_cgst          as ReceivingBusPlaceCentralGST,
      rec_sgst          as ReceivingBusPlaceStateGST,
      rec_ugst          as ReceivingBusPlaceUnionGST,
      rec_igst          as ReceivingBusPlaceIntegratedGST,
      rec_cess          as ReceivingBusPlaceCESS,
      isd_mwskz         as TaxCode,
      waers             as Currency,
      budat             as PostingDate,
      rec_belnr         as ReceivingAccountingDocument,
      hsn_sac           as IN_HSNOrSACCode,
      non_deduct        as TaxIsNotDeductible,
      doc_type          as IN_InptSrvcDistrDocType,
      isd_invoice       as IN_InptSrvcDistrInvc,
      isd_invoice_gjahr as IN_InptSrvcDistrInvcFsclYr
}
```
