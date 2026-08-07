---
name: I_KR_ELECTRONICDOCINCGINVOICE
description: KR Electronicdocincginvoice
app_component: CA-GTF-CSC-EDO-KR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-KR
  - lob:Cross-Application Components
---
# I_KR_ELECTRONICDOCINCGINVOICE

**KR Electronicdocincginvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-KR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  | `edoc_guid` |
| `KR_EDocIncgInvcApprovalNo` |  | |  | `apprvl_no` |
| `KR_EDocIncgInvcSupplier` |  | |  | `vendor` |
| `KR_EDocIncgInvcSupplierName` |  | |  | `vendor_name` |
| `KR_EDocIncgInvcTaxBaseValue` |  | |  | `tax_base_amt` |
| `KR_EDocIncgInvcTaxValue` |  | |  | `tax_amount` |
| `KR_EDocIncgInvcAmountValue` |  | |  | `amount` |
| `KR_EDocIncgInvcTransferDate` |  | |  | `transfer_date` |
| `KR_EDocIncgInvcDocumentNo` |  | |  | `belnr` |
| `KR_EDocIncgInvcInvoiceDate` |  | |  | `invoice_date` |
| `KR_EDocIncgInvcIssueDate` |  | |  | `issue_date` |
| `KR_EDocIncgInvcSuplrBizRegnNo` |  | |  | `s_supplier_stcd2` |
| `KR_EDocIncgInvcSuplrBizPlace` |  | |  | `s_business_place` |
| `KR_EDocIncgInvcSuplrCoName` |  | |  | `s_company_name` |
| `KR_EDocIncgInvcSuplrRprstvName` |  | |  | `s_repres` |
| `KR_EDocIncgInvcSuplrAddressTxt` |  | |  | `s_address` |
| `KR_EDocIncgInvcBuyerBizRegnNo` |  | |  | `b_supplier_stcd2` |
| `KR_EDocIncgInvcBuyerBizPlace` |  | |  | `b_business_place` |
| `KR_EDocIncgInvcBuyerCoName` |  | |  | `b_company_name` |
| `KR_EDocIncgInvcBuyerRprstvName` |  | |  | `b_repres` |
| `KR_EDocIncgInvcBuyerAddressTxt` |  | |  | `b_address` |
| `KR_EDocIncgInvcClassification` |  | |  | `invc_clfn` |
| `KR_EDocIncgInvcType` |  | |  | `invoice_type` |
| `KR_EDocIncgInvcIssuanceType` |  | |  | `issuance_type` |
| `KR_EDocIncgInvcRemarkText` |  | |  | `remark` |
| `KR_EDocIncgInvcReceiptBilling` |  | |  | `rcpt_billg` |
| `KR_EDocIncgInvcSuplrEmail` |  | |  | `buyer_email` |
| `KR_EDocIncgInvcBuyerEmail1` |  | |  | `buyer_email1` |
| `KR_EDocIncgInvcBuyerEmail2` |  | |  | `buyer_email2` |
| `KR_EDocIncgInvcItemDate` |  | |  | `item_date` |
| `KR_EDocIncgInvcItemName` |  | |  | `item_name` |
| `KR_EDocIncgInvcItemUnit` |  | |  | `item_unit` |
| `KR_EDocIncgInvcItemQuantityVal` |  | |  | `item_quantity` |
| `KR_EDocIncgInvcItemUnitPrcVal` |  | |  | `item_unit_price` |
| `KR_EDocIncgInvcItemBaseValue` |  | |  | `item_base_amt` |
| `KR_EDocIncgInvcItemTaxValue` |  | |  | `item_tax_amount` |
| `KR_EDocIncgInvcItemRemarkText` |  | |  | `item_remarks` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'eDocument South Korea eInvoice Incoming'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.personalData.blocking: #NOT_REQUIRED
define view entity I_KR_ElectronicDocIncgInvoice
  as select from edokrinvinc

{
  key edoc_guid        as ElectronicDocUUID,
      apprvl_no        as KR_EDocIncgInvcApprovalNo,
      vendor           as KR_EDocIncgInvcSupplier,
      vendor_name      as KR_EDocIncgInvcSupplierName,
      tax_base_amt     as KR_EDocIncgInvcTaxBaseValue,
      tax_amount       as KR_EDocIncgInvcTaxValue,
      amount           as KR_EDocIncgInvcAmountValue,
      transfer_date    as KR_EDocIncgInvcTransferDate,
      belnr            as KR_EDocIncgInvcDocumentNo,
      invoice_date     as KR_EDocIncgInvcInvoiceDate,
      issue_date       as KR_EDocIncgInvcIssueDate,
      s_supplier_stcd2 as KR_EDocIncgInvcSuplrBizRegnNo,
      s_business_place as KR_EDocIncgInvcSuplrBizPlace,
      s_company_name   as KR_EDocIncgInvcSuplrCoName,
      s_repres         as KR_EDocIncgInvcSuplrRprstvName,
      s_address        as KR_EDocIncgInvcSuplrAddressTxt,
      b_supplier_stcd2 as KR_EDocIncgInvcBuyerBizRegnNo,
      b_business_place as KR_EDocIncgInvcBuyerBizPlace,
      b_company_name   as KR_EDocIncgInvcBuyerCoName,
      b_repres         as KR_EDocIncgInvcBuyerRprstvName,
      b_address        as KR_EDocIncgInvcBuyerAddressTxt,
      invc_clfn        as KR_EDocIncgInvcClassification,
      invoice_type     as KR_EDocIncgInvcType,
      issuance_type    as KR_EDocIncgInvcIssuanceType,
      remark           as KR_EDocIncgInvcRemarkText,
      rcpt_billg       as KR_EDocIncgInvcReceiptBilling,
      buyer_email      as KR_EDocIncgInvcSuplrEmail,
      buyer_email1     as KR_EDocIncgInvcBuyerEmail1,
      buyer_email2     as KR_EDocIncgInvcBuyerEmail2,
      item_date        as KR_EDocIncgInvcItemDate,
      item_name        as KR_EDocIncgInvcItemName,
      item_unit        as KR_EDocIncgInvcItemUnit,
      item_quantity    as KR_EDocIncgInvcItemQuantityVal,
      item_unit_price  as KR_EDocIncgInvcItemUnitPrcVal,
      item_base_amt    as KR_EDocIncgInvcItemBaseValue,
      item_tax_amount  as KR_EDocIncgInvcItemTaxValue,
      item_remarks     as KR_EDocIncgInvcItemRemarkText

}
```
