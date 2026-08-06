---
name: I_KR_EDCOUTGTAXAUTHDOCUMENT
description: KR Edcoutgtaxauthdocument
app_component: FI-LOC-FI-KR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - tax
  - document
  - component:FI-LOC-FI-KR
  - lob:Finance
---
# I_KR_EDCOUTGTAXAUTHDOCUMENT

**KR Edcoutgtaxauthdocument**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-KR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EDCTaxAuthRecordUUID` | `record_guid` |
| `TaxInvoiceApprovalNmbr` | `TATaxItem.apprvl_no` |
| `Currency` | `TATaxItem.waers` |
| `EDCTaxableAmount` | `TATaxItem.tax_base_amt` |
| `EDCTaxAmount` | `TATaxItem.tax_amount` |
| `TotalAmountInCoCodeCrcy` | `TATaxItem.amount` |
| `KR_EDocTransferDate` | `TATaxItem.transfer_date` |
| `AccountingDocument` | `TATaxItem.belnr` |
| `InvoiceDate` | `TATaxItem.invoice_date` |
| `KR_ElectronicDocumentIssueDate` | `TATaxItem.issue_date` |
| `KR_EDocSuplrRegistrationNumber` | `TATaxItem.s_supplier_stcd2` |
| `KR_EDocSupplierBusinessPlace` | `TATaxItem.s_business_place` |
| `KR_EDocSupplierCompanyName` | `TATaxItem.s_company_name` |
| `KR_EDocSuplrRepresentativeName` | `TATaxItem.s_repres` |
| `KR_EDocSupplierAddress` | `TATaxItem.s_address` |
| `KR_EDocBuyerRegistrationNumber` | `TATaxItem.b_supplier_stcd2` |
| `KR_EDocBuyerBusinessPlace` | `TATaxItem.b_business_place` |
| `KR_EDocBuyerCompanyName` | `TATaxItem.b_company_name` |
| `KR_EDocBuyerRepresentativeName` | `TATaxItem.b_repres` |
| `KR_EDocBuyerAddress` | `TATaxItem.b_address` |
| `KR_EDocTxInvoiceClassification` | `TATaxItem.invc_clfn` |
| `KR_EDocInvoiceType` | `TATaxItem.invoice_type` |
| `KR_EDocIssuanceType` | `TATaxItem.issuance_type` |
| `KR_ElectronicDocumentRemark` | `TATaxItem.remark` |
| `KR_EDocReceiptBilling` | `TATaxItem.rcpt_billg` |
| `KR_EDocBuyrRespPersnEmlAddr1` | `TATaxItem.buyer_email` |
| `KR_EDocBuyrRespPersnEmlAddr2` | `TATaxItem.buyer_email1` |
| `KR_EDocBuyrRespPersnEmlAddr3` | `TATaxItem.buyer_email2` |
| `KR_ElectronicDocumentItemDate` | `TATaxItem.item_date` |
| `KR_ElectronicDocumentItemName` | `TATaxItem.item_name` |
| `KR_ElectronicDocumentItemUnit` | `TATaxItem.item_unit_n` |
| `KR_EDocItemQuantity` | `TATaxItem.item_quantity_n` |
| `KR_EDocItmUntPriceInCoCodeCrcy` | `TATaxItem.item_unit_price` |
| `TaxBaseAmountInCoCodeCrcy` | `TATaxItem.item_base_amt` |
| `TaxAmountInCoCodeCrcy` | `TATaxItem.item_tax_amount` |
| `KR_EDocItemRemark` | `TATaxItem.item_remarks` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'KR Tax Authority Docs for Outgoing Invoices'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #TRANSACTIONAL
}
@VDM.viewType:#BASIC
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:  [  
                                        #CDS_MODELING_DATA_SOURCE,
                                        #SQL_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY]   

define view entity I_KR_EDCOutgTaxAuthDocument as select from edokrinvout as TATaxItem
 {
    key record_guid                  as EDCTaxAuthRecordUUID,
    @Consumption.filter : { selectionType: #SINGLE, multipleSelections : true}
    @EndUserText.label : 'Approval Number'
    TATaxItem.apprvl_no             as TaxInvoiceApprovalNmbr,
    TATaxItem.waers                 as Currency,
    @EndUserText.label : 'Tax Base Amount'
    @Semantics.amount.currencyCode: 'Currency'
    TATaxItem.tax_base_amt          as EDCTaxableAmount,
    @EndUserText.label : 'Tax Amount'
    @Semantics.amount.currencyCode: 'Currency'
    TATaxItem.tax_amount            as EDCTaxAmount, 
    @Semantics.amount.currencyCode: 'Currency'
    TATaxItem.amount                as TotalAmountInCoCodeCrcy,
    TATaxItem.transfer_date         as KR_EDocTransferDate,
    TATaxItem.belnr                 as AccountingDocument,
    @EndUserText.label : 'Invoice Date'
    TATaxItem.invoice_date          as InvoiceDate,
    TATaxItem.issue_date            as KR_ElectronicDocumentIssueDate,
    TATaxItem.s_supplier_stcd2      as KR_EDocSuplrRegistrationNumber,
    TATaxItem.s_business_place      as KR_EDocSupplierBusinessPlace,
    TATaxItem.s_company_name        as KR_EDocSupplierCompanyName,
    TATaxItem.s_repres              as KR_EDocSuplrRepresentativeName,
    TATaxItem.s_address             as KR_EDocSupplierAddress,
    TATaxItem.b_supplier_stcd2      as KR_EDocBuyerRegistrationNumber,
    TATaxItem.b_business_place      as KR_EDocBuyerBusinessPlace,
    TATaxItem.b_company_name        as KR_EDocBuyerCompanyName,
    TATaxItem.b_repres              as KR_EDocBuyerRepresentativeName,
    TATaxItem.b_address             as KR_EDocBuyerAddress,
    TATaxItem.invc_clfn             as KR_EDocTxInvoiceClassification,
    TATaxItem.invoice_type          as KR_EDocInvoiceType,
    TATaxItem.issuance_type         as KR_EDocIssuanceType,
    TATaxItem.remark                as KR_ElectronicDocumentRemark,
    TATaxItem.rcpt_billg            as KR_EDocReceiptBilling,
    TATaxItem.buyer_email           as KR_EDocBuyrRespPersnEmlAddr1,
    TATaxItem.buyer_email1          as KR_EDocBuyrRespPersnEmlAddr2,
    TATaxItem.buyer_email2          as KR_EDocBuyrRespPersnEmlAddr3,
    TATaxItem.item_date             as KR_ElectronicDocumentItemDate,
    TATaxItem.item_name             as KR_ElectronicDocumentItemName,
    TATaxItem.item_unit_n             as KR_ElectronicDocumentItemUnit,
    @Semantics.quantity.unitOfMeasure: 'KR_ElectronicDocumentItemUnit'
    TATaxItem.item_quantity_n         as KR_EDocItemQuantity,
    TATaxItem.item_unit_price       as KR_EDocItmUntPriceInCoCodeCrcy,
    @EndUserText.label : 'Tax Base Amount on Item'
    @Semantics.amount.currencyCode: 'currency'
    TATaxItem.item_base_amt             as TaxBaseAmountInCoCodeCrcy,
    @EndUserText.label : 'Tax Amount on Item'
    @Semantics.amount.currencyCode: 'currency'
    TATaxItem.item_tax_amount           as TaxAmountInCoCodeCrcy,
    TATaxItem.item_remarks              as KR_EDocItemRemark
//    TATaxItem.is_exempt_inv
}
```
