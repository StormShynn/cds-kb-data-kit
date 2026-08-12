---
name: I_KR_EDCOUTGTAXAUTHDOCUMENT
description: "KR Edcoutgtaxauthdocument"
app_component: FI-LOC-FI-KR
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EDCTaxAuthRecordUUID` | ✓ | |  | `record_guid` |  |  |
| `TaxInvoiceApprovalNmbr` |  | |  | `apprvl_no` |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `EDCTaxableAmount` |  | |  | `tax_base_amt` |  |  |
| `EDCTaxAmount` |  | |  | `tax_amount` |  |  |
| `TotalAmountInCoCodeCrcy` |  | |  | `amount` |  |  |
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
| `KR_ElectronicDocumentItemUnit` |  | |  | `item_unit_n` |  |  |
| `KR_EDocItemQuantity` |  | |  | `item_quantity_n` |  |  |
| `KR_EDocItmUntPriceInCoCodeCrcy` |  | |  | `item_unit_price` |  |  |
| `TaxBaseAmountInCoCodeCrcy` |  | |  | `item_base_amt` |  |  |
| `TaxAmountInCoCodeCrcy` |  | |  | `item_tax_amount` |  |  |
| `KR_EDocItemRemark` |  | |  | `item_remarks` |  |  |

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
