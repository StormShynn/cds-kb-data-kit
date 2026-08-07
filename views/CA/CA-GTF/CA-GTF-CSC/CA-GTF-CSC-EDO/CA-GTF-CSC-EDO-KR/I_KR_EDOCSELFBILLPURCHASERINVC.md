---
name: I_KR_EDOCSELFBILLPURCHASERINVC
description: KR Edocselfbillpurchaserinvc
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
# I_KR_EDOCSELFBILLPURCHASERINVC

**KR Edocselfbillpurchaserinvc**

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
| `KR_EDocSelfBillPurrApprovalNo` |  | |  | `apprvl_no` |
| `KR_EDocSelfBillPurrHeadQtrs` |  | |  | `busplc_hq` |
| `KR_EDocSelfBillPurrReceipt` |  | |  | `rcpt_billg` |
| `KR_EDocSelfBillPurrSupplier` |  | |  | `supplier` |
| `KR_EDocSelfBillPurrBizPlace` |  | |  | `bupla` |
| `KR_EDocSelfBillPurrTaxCode` |  | |  | `tax_code` |
| `KR_EDocSelfBillPurrSubmsnID` |  | |  | `ref_submit_id` |
| `KR_EDocSelfBillPurrTaxInvcType` |  | |  | `tax_invoice_type` |
| `KR_EDocSelfBillPurrSuplrName` |  | |  | `vend_name` |
| `KR_EDocSelfBillPurrTaxBaseVal` |  | |  | `tax_base_amt` |
| `KR_EDocSelfBillPurrTaxValue` |  | |  | `tax_amount` |
| `KR_EDocSelfBillPurrAmountValue` |  | |  | `amount` |
| `KR_EDocSelfBillPurrCurrency` |  | |  | `waers` |
| `KR_EDocSelfBillPurrTrnstnDate` |  | |  | `transition_date` |
| `KR_EDocSelfBillPurrStsRsnText` |  | |  | `status_reason` |
| `KR_EDocSelfBillPurrAmendReason` |  | |  | `amendmt_reason` |
| `KR_EDocSelfBillPurrOriglApprvl` |  | |  | `origl_apprvl_no` |

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
