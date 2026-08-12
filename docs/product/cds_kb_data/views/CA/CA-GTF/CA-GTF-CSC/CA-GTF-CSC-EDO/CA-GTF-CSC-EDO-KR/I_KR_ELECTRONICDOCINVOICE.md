---
name: I_KR_ELECTRONICDOCINVOICE
description: "KR Electronicdocinvoice"
app_component: CA-GTF-CSC-EDO-KR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_KR_ELECTRONICDOCINVOICE

**KR Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-KR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  | `edoc_guid` |  |  |
| `KR_EDocInvcApprovalNo` |  | |  | `apprvl_no` |  |  |
| `KR_EDocInvcBizPlaceHeadQtrs` |  | |  | `busplc_hq` |  |  |
| `KR_EDocInvcReceiptBilling` |  | |  | `rcpt_billg` |  |  |
| `KR_EDocInvcCustomer` |  | |  | `customer` |  |  |
| `KR_EDocInvcBusinessPlace` |  | |  | `bupla` |  |  |
| `KR_EDocInvcTaxCode` |  | |  | `tax_code` |  |  |
| `KR_EDocInvcSubmissionID` |  | |  | `ref_submit_id` |  |  |
| `KR_EDocInvcTaxInvoiceType` |  | |  | `tax_invoice_type` |  |  |
| `KR_EDocInvcSalesOrganization` |  | |  | `vkorg` |  |  |
| `KR_EDocInvcDistrChannel` |  | |  | `vtweg` |  |  |
| `KR_EDocInvcCustomerClassfctn` |  | |  | `klabc` |  |  |
| `KR_EDocInvcCustomerName` |  | |  | `cust_name` |  |  |
| `KR_EDocInvcTaxBaseValue` |  | |  | `tax_base_amt` |  |  |
| `KR_EDocInvcTaxValue` |  | |  | `tax_amount` |  |  |
| `KR_EDocInvcAmountValue` |  | |  | `amount` |  |  |
| `KR_EDocInvcCurrency` |  | |  | `waers` |  |  |
| `KR_EDocInvcTrnstnDate` |  | |  | `transition_date` |  |  |
| `KR_EDocInvcSourceKey` |  | |  | `source_key` |  |  |
| `KR_EDocInvcStatusReasonText` |  | |  | `status_reason` |  |  |
| `KR_EDocInvcAmendReason` |  | |  | `amendmt_reason` |  |  |
| `KR_EDocInvcOriglApprvlNo` |  | |  | `origl_apprvl_no` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'eDocument South Korea eInvoice'
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
define view entity I_KR_ElectronicDocInvoice
  as select from edokrinv

{
  key edoc_guid        as ElectronicDocUUID,
      apprvl_no        as KR_EDocInvcApprovalNo,
      busplc_hq        as KR_EDocInvcBizPlaceHeadQtrs,
      rcpt_billg       as KR_EDocInvcReceiptBilling,
      customer         as KR_EDocInvcCustomer,
      bupla            as KR_EDocInvcBusinessPlace,
      tax_code         as KR_EDocInvcTaxCode,
      ref_submit_id    as KR_EDocInvcSubmissionID,
      tax_invoice_type as KR_EDocInvcTaxInvoiceType,
      vkorg            as KR_EDocInvcSalesOrganization,
      vtweg            as KR_EDocInvcDistrChannel,
      klabc            as KR_EDocInvcCustomerClassfctn,
      cust_name        as KR_EDocInvcCustomerName,
      tax_base_amt     as KR_EDocInvcTaxBaseValue,
      tax_amount       as KR_EDocInvcTaxValue,
      amount           as KR_EDocInvcAmountValue,
      waers            as KR_EDocInvcCurrency,
      transition_date  as KR_EDocInvcTrnstnDate,
      source_key       as KR_EDocInvcSourceKey,
      status_reason    as KR_EDocInvcStatusReasonText,
      amendmt_reason   as KR_EDocInvcAmendReason,
      origl_apprvl_no  as KR_EDocInvcOriglApprvlNo
}
```
