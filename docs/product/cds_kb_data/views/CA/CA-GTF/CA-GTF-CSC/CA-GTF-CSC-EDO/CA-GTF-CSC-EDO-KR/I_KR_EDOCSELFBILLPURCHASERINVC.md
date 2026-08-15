---
name: I_KR_EDOCSELFBILLPURCHASERINVC
description: "KR Edocselfbillpurchaserinvc"
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
# I_KR_EDOCSELFBILLPURCHASERINVC

**KR Edocselfbillpurchaserinvc**

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
| `KR_EDocSelfBillPurrApprovalNo` |  | |  | `apprvl_no` | `CHAR(27)` | Approval ID for Tax Invoice of South Korea |
| `KR_EDocSelfBillPurrHeadQtrs` |  | |  | `busplc_hq` | `CHAR(1)` | Business Place of Headquarters |
| `KR_EDocSelfBillPurrReceipt` |  | |  | `rcpt_billg` | `CHAR(2)` | Billing or Receipt |
| `KR_EDocSelfBillPurrSupplier` |  | |  | `supplier` | `CHAR(10)` | Account Number of Supplier |
| `KR_EDocSelfBillPurrBizPlace` |  | |  | `bupla` | `CHAR(4)` | Business Place |
| `KR_EDocSelfBillPurrTaxCode` |  | |  | `tax_code` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `KR_EDocSelfBillPurrSubmsnID` |  | |  | `ref_submit_id` | `CHAR(50)` | Submission ID for Tax Invoice of South Korea |
| `KR_EDocSelfBillPurrTaxInvcType` |  | |  | `tax_invoice_type` | `CHAR(1)` | Tax Invoice Type |
| `KR_EDocSelfBillPurrSuplrName` |  | |  | `vend_name` | `CHAR(30)` | Vendor Name |
| `KR_EDocSelfBillPurrTaxBaseVal` |  | |  | `tax_base_amt` | `DEC(18)` | Tax Base |
| `KR_EDocSelfBillPurrTaxValue` |  | |  | `tax_amount` | `DEC(18)` | Tax Amount |
| `KR_EDocSelfBillPurrAmountValue` |  | |  | `amount` | `DEC(18)` | Amount |
| `KR_EDocSelfBillPurrCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `KR_EDocSelfBillPurrTrnstnDate` |  | |  | `transition_date` | `DATS(8)` | Transfer Date of Tax Invoice |
| `KR_EDocSelfBillPurrStsRsnText` |  | |  | `status_reason` | `CHAR(100)` | Reason for Canceling Tax Invoice |
| `KR_EDocSelfBillPurrAmendReason` |  | |  | `amendmt_reason` | `CHAR(2)` | Reason for Amending Tax Invoice of South Korea |
| `KR_EDocSelfBillPurrOriglApprvl` |  | |  | `origl_apprvl_no` | `CHAR(27)` | Approval ID for Original Tax Invoice |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'EDoc KR Self Bill for Purchaser eInvoice'
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
define view entity I_KR_EDocSelfBillPurchaserInvc
  as select from edokrinvsfp

{
  key edoc_guid        as ElectronicDocUUID,
      apprvl_no        as KR_EDocSelfBillPurrApprovalNo,
      busplc_hq        as KR_EDocSelfBillPurrHeadQtrs,
      rcpt_billg       as KR_EDocSelfBillPurrReceipt,
      supplier         as KR_EDocSelfBillPurrSupplier,
      bupla            as KR_EDocSelfBillPurrBizPlace,
      tax_code         as KR_EDocSelfBillPurrTaxCode,
      ref_submit_id    as KR_EDocSelfBillPurrSubmsnID,
      tax_invoice_type as KR_EDocSelfBillPurrTaxInvcType,
      vend_name        as KR_EDocSelfBillPurrSuplrName,
      tax_base_amt     as KR_EDocSelfBillPurrTaxBaseVal, 
      tax_amount       as KR_EDocSelfBillPurrTaxValue,
      amount           as KR_EDocSelfBillPurrAmountValue,
      waers            as KR_EDocSelfBillPurrCurrency,
      transition_date  as KR_EDocSelfBillPurrTrnstnDate,
      status_reason    as KR_EDocSelfBillPurrStsRsnText,
      amendmt_reason   as KR_EDocSelfBillPurrAmendReason,
      origl_apprvl_no  as KR_EDocSelfBillPurrOriglApprvl
}
```
