---
name: I_KR_EDCINCGTAXAUTHDOCUMENT
description: "KR Edcincgtaxauthdocument"
app_component: FI-LOC-FI-KR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_KR_EDCINCGTAXAUTHDOCUMENT

**KR Edcincgtaxauthdocument**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-KR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EDCTaxAuthRecordUUID` | ✓ | |  | `edoc_guid` |  |  |
| `TaxInvoiceApprovalNmbr` |  | |  | `apprvl_no` |  |  |
| `Currency` |  | |  | `cast('KRW' as waers)` |  |  |
| `EDCTaxableAmount` |  | |  | `cast((TATaxItem.tax_base_amt / 100) as hwbas)` |  |  |
| `EDCTaxAmount` |  | |  | `cast((TATaxItem.tax_amount / 100) as hwbas)` |  |  |
| `TotalAmountInCoCodeCrcy` |  | |  | `cast(TATaxItem.amount / 100 as hwbas)` |  |  |
| `KR_EDocTransferDate` |  | |  | `transfer_date` |  |  |
| `AccountingDocument` |  | |  | `belnr` |  |  |
| `InvoiceDate` |  | |  | `invoice_date` |  |  |
| `KR_ElectronicDocumentIssueDate` |  | |  | `issue_date` |  |  |
| `KR_EDocSuplrRegistrationNumber` |  | |  | `s_supplier_stcd2` |  |  |
| `KR_EDocSupplierBusinessPlace` |  | |  | `s_business_place` |  |  |
| `KR_EDocSupplierCompanyName` |  | |  | `s_company_name` |  |  |
| `KR_EDocSuplrRepresentativeName` |  | |  | `s_repres` |  |  |
| `KR_EDocSupplierAddress` |  | |  | `s_address` |  |  |
| `KR_EDocBuyerRegistrationNumber` |  | |  | `b_supplier_stcd2` |  |  |
| `KR_EDocBuyerBusinessPlace` |  | |  | `b_business_place` |  |  |
| `KR_EDocBuyerCompanyName` |  | |  | `b_company_name` |  |  |
| `KR_EDocBuyerRepresentativeName` |  | |  | `b_repres` |  |  |
| `KR_EDocBuyerAddress` |  | |  | `b_address` |  |  |
| `KR_EDocTxInvoiceClassification` |  | |  | `invc_clfn` |  |  |
| `KR_EDocInvoiceType` |  | |  | `invoice_type` |  |  |
| `KR_EDocIssuanceType` |  | |  | `issuance_type` |  |  |
| `KR_ElectronicDocumentRemark` |  | |  | `remark` |  |  |
| `KR_EDocReceiptBilling` |  | |  | `rcpt_billg` |  |  |
| `KR_EDocBuyrRespPersnEmlAddr1` |  | |  | `buyer_email` |  |  |
| `KR_EDocBuyrRespPersnEmlAddr2` |  | |  | `buyer_email1` |  |  |
| `KR_EDocBuyrRespPersnEmlAddr3` |  | |  | `buyer_email2` |  |  |
| `KR_ElectronicDocumentItemDate` |  | |  | `item_date` |  |  |
| `KR_ElectronicDocumentItemName` |  | |  | `item_name` |  |  |
| `KR_ElectronicDocumentItemUnit` |  | |  | `cast(TATaxItem.item_unit as edc_kr_item_unit)` |  |  |
| `KR_EDocItemQuantity` |  | |  | `cast(TATaxItem.item_quantity as edc_kr_item_quantity)` |  |  |
| `KR_EDocItmUntPriceInCoCodeCrcy` |  | |  | `cast(TATaxItem.item_unit_price as edoc_kr_item_unit_price)` |  |  |
| `TaxBaseAmountInCoCodeCrcy` |  | |  | `cast((TATaxItem.item_base_amt / 100) as hwbas)` |  |  |
| `TaxAmountInCoCodeCrcy` |  | |  | `cast((TATaxItem.item_tax_amount / 100) as hwbas)` |  |  |
| `KR_EDocItemRemark` |  | |  | `item_remarks` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@EndUserText.label: 'KR Tax Authority Docs for Incoming Invoices'
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

define view entity I_KR_EDCIncgTaxAuthDocument as select from edokrinvinc as TATaxItem
 {
    key edoc_guid                  as EDCTaxAuthRecordUUID,
    @Consumption.filter : { selectionType: #SINGLE, multipleSelections : true}
    @EndUserText.label : 'Approval Number'
    TATaxItem.apprvl_no             as TaxInvoiceApprovalNmbr,
    cast('KRW'  as waers)          as  Currency,
    @EndUserText.label : 'Tax Base Amount'
    @Semantics.amount.currencyCode: 'Currency'
    cast((TATaxItem.tax_base_amt / 100)  as hwbas)       as EDCTaxableAmount,
    @EndUserText.label : 'Tax Amount'
    @Semantics.amount.currencyCode: 'Currency'
    cast((TATaxItem.tax_amount / 100)  as hwbas)        as EDCTaxAmount,
    @Semantics.amount.currencyCode: 'Currency'
    cast(TATaxItem.amount / 100      as hwbas)                 as TotalAmountInCoCodeCrcy,
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
    cast(TATaxItem.item_unit as edc_kr_item_unit)             as KR_ElectronicDocumentItemUnit,
    @Semantics.quantity.unitOfMeasure: 'KR_ElectronicDocumentItemUnit'
    cast(TATaxItem.item_quantity as edc_kr_item_quantity)         as KR_EDocItemQuantity,    
    cast(TATaxItem.item_unit_price as edoc_kr_item_unit_price)      as KR_EDocItmUntPriceInCoCodeCrcy,
    @EndUserText.label : 'Tax Base Amount on Item'
    @Semantics.amount.currencyCode: 'Currency'
    cast((TATaxItem.item_base_amt / 100)    as hwbas) as TaxBaseAmountInCoCodeCrcy,
    @EndUserText.label : 'Tax Amount on Item'
    @Semantics.amount.currencyCode: 'Currency'
    cast((TATaxItem.item_tax_amount / 100)  as hwbas) as TaxAmountInCoCodeCrcy,
    TATaxItem.item_remarks          as KR_EDocItemRemark
}
```
