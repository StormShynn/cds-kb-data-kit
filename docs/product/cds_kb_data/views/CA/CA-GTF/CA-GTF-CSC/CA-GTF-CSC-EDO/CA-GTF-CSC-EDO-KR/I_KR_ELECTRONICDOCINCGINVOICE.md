---
name: I_KR_ELECTRONICDOCINCGINVOICE
description: "KR Electronicdocincginvoice"
app_component: CA-GTF-CSC-EDO-KR
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  | `edoc_guid` | `CHAR(32)` | eDocument: GUID |
| `KR_EDocIncgInvcApprovalNo` |  | |  | `apprvl_no` | `CHAR(27)` | Approval ID for Tax Invoice of South Korea |
| `KR_EDocIncgInvcSupplier` |  | |  | `vendor` | `CHAR(10)` | Account Number of Supplier |
| `KR_EDocIncgInvcSupplierName` |  | |  | `vendor_name` | `CHAR(30)` | Supplier Name |
| `KR_EDocIncgInvcTaxBaseValue` |  | |  | `tax_base_amt` | `DEC(18)` | Tax Base |
| `KR_EDocIncgInvcTaxValue` |  | |  | `tax_amount` | `DEC(18)` | Tax Amount |
| `KR_EDocIncgInvcAmountValue` |  | |  | `amount` | `DEC(18)` | Amount |
| `KR_EDocIncgInvcTransferDate` |  | |  | `transfer_date` | `DATS(8)` | Transfer Date of Tax Invoice |
| `KR_EDocIncgInvcDocumentNo` |  | |  | `belnr` | `CHAR(10)` | Document Number of an Invoice Document |
| `KR_EDocIncgInvcInvoiceDate` |  | |  | `invoice_date` | `DATS(8)` | Invoice Date in Document |
| `KR_EDocIncgInvcIssueDate` |  | |  | `issue_date` | `DATS(8)` | Issue Date |
| `KR_EDocIncgInvcSuplrBizRegnNo` |  | |  | `s_supplier_stcd2` | `CHAR(11)` | Supplier: Business Registration Number |
| `KR_EDocIncgInvcSuplrBizPlace` |  | |  | `s_business_place` | `CHAR(4)` | Supplier: Business Place |
| `KR_EDocIncgInvcSuplrCoName` |  | |  | `s_company_name` | `CHAR(30)` | Supplier: Company Name |
| `KR_EDocIncgInvcSuplrRprstvName` |  | |  | `s_repres` | `CHAR(100)` | Supplier: Representative Name |
| `KR_EDocIncgInvcSuplrAddressTxt` |  | |  | `s_address` | `CHAR(100)` | Supplier: Address |
| `KR_EDocIncgInvcBuyerBizRegnNo` |  | |  | `b_supplier_stcd2` | `CHAR(11)` | Buyer: Business Registration Number |
| `KR_EDocIncgInvcBuyerBizPlace` |  | |  | `b_business_place` | `CHAR(4)` | Buyer: Business Place |
| `KR_EDocIncgInvcBuyerCoName` |  | |  | `b_company_name` | `CHAR(30)` | Buyer: Company Name |
| `KR_EDocIncgInvcBuyerRprstvName` |  | |  | `b_repres` | `CHAR(100)` | Buyer: Representative Name |
| `KR_EDocIncgInvcBuyerAddressTxt` |  | |  | `b_address` | `CHAR(100)` | Buyer: Address |
| `KR_EDocIncgInvcClassification` |  | |  | `invc_clfn` | `CHAR(20)` | Classification for Electronic Tax Invoice |
| `KR_EDocIncgInvcType` |  | |  | `invoice_type` | `CHAR(20)` | Type of Electronic Tax Invoice |
| `KR_EDocIncgInvcIssuanceType` |  | |  | `issuance_type` | `CHAR(30)` | Issue Type |
| `KR_EDocIncgInvcRemarkText` |  | |  | `remark` | `CHAR(100)` | Remark |
| `KR_EDocIncgInvcReceiptBilling` |  | |  | `rcpt_billg` | `CHAR(20)` | Billing or Receipt |
| `KR_EDocIncgInvcSuplrEmail` |  | |  | `buyer_email` | `CHAR(100)` | Supplier: Email Address of Person Responsible |
| `KR_EDocIncgInvcBuyerEmail1` |  | |  | `buyer_email1` | `CHAR(100)` | Buyer: Email Address 1 of Person Responsible |
| `KR_EDocIncgInvcBuyerEmail2` |  | |  | `buyer_email2` | `CHAR(100)` | Buyer: Email Address 2 of Person Responsible |
| `KR_EDocIncgInvcItemDate` |  | |  | `item_date` | `DATS(8)` | Item Date |
| `KR_EDocIncgInvcItemName` |  | |  | `item_name` | `CHAR(100)` | Item Name |
| `KR_EDocIncgInvcItemUnit` |  | |  | `item_unit` | `CHAR(10)` | Item Unit |
| `KR_EDocIncgInvcItemQuantityVal` |  | |  | `item_quantity` | `CHAR(20)` | Item Quantity |
| `KR_EDocIncgInvcItemUnitPrcVal` |  | |  | `item_unit_price` | `DEC(18)` | Unit Price of Item |
| `KR_EDocIncgInvcItemBaseValue` |  | |  | `item_base_amt` | `DEC(18)` | Tax Base Amount of Items |
| `KR_EDocIncgInvcItemTaxValue` |  | |  | `item_tax_amount` | `DEC(18)` | Tax Amount of Items |
| `KR_EDocIncgInvcItemRemarkText` |  | |  | `item_remarks` | `CHAR(100)` | Item Remarks |

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
