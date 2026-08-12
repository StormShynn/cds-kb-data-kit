---
name: I_KR_ELECTRONICDOCSELFBILLINVC
description: "KR Electronicdocselfbillinvc"
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
# I_KR_ELECTRONICDOCSELFBILLINVC

**KR Electronicdocselfbillinvc**

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
| `ElectronicDocUUID` | ✓ | |  | `edoc_guid` |  |  |
| `KR_EDocSelfBillApprovalNo` |  | |  | `apprvl_no` |  |  |
| `KR_EDocSelfBillBizPlaceHead` |  | |  | `busplc_hq` |  |  |
| `KR_EDocSelfBillReceiptBilling` |  | |  | `rcpt_billg` |  |  |
| `KR_EDocSelfBillCustomer` |  | |  | `customer` |  |  |
| `KR_EDocSelfBillBusinessPlace` |  | |  | `bupla` |  |  |
| `KR_EDocSelfBillTaxCode` |  | |  | `tax_code` |  |  |
| `KR_EDocSelfBillSubmissionID` |  | |  | `ref_submit_id` |  |  |
| `KR_EDocSelfBillTaxInvoiceType` |  | |  | `tax_invoice_type` |  |  |
| `KR_EDocSelfBillSalesOrg` |  | |  | `vkorg` |  |  |
| `KR_EDocSelfBillDistrChannel` |  | |  | `vtweg` |  |  |
| `KR_EDocSelfBillCustClassfctn` |  | |  | `klabc` |  |  |
| `KR_EDocSelfBillCustomerName` |  | |  | `cust_name` |  |  |
| `KR_EDocSelfBillTaxBaseValue` |  | |  | `tax_base_amt` |  |  |
| `KR_EDocSelfBillTaxValue` |  | |  | `tax_amount` |  |  |
| `KR_EDocSelfBillAmountValue` |  | |  | `amount` |  |  |
| `KR_EDocSelfBillCurrency` |  | |  | `waers` |  |  |
| `KR_EDocSelfBillTransitionDate` |  | |  | `transition_date` |  |  |
| `KR_EDocSelfBillSourceKey` |  | |  | `source_key` |  |  |
| `KR_EDocSelfBillStatusReasonTxt` |  | |  | `status_reason` |  |  |
| `KR_EDocSelfBillAmendReason` |  | |  | `amendmt_reason` |  |  |
| `KR_EDocSelfBillOriglApprvlNo` |  | |  | `origl_apprvl_no` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'eDocument KR Self Billing eInvoice'
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
define view entity I_KR_ElectronicDocSelfBillInvc
  as select from edokrinvsf
{
  key edoc_guid        as ElectronicDocUUID,
      apprvl_no        as KR_EDocSelfBillApprovalNo,
      busplc_hq        as KR_EDocSelfBillBizPlaceHead,
      rcpt_billg       as KR_EDocSelfBillReceiptBilling,
      customer         as KR_EDocSelfBillCustomer,
      bupla            as KR_EDocSelfBillBusinessPlace,
      tax_code         as KR_EDocSelfBillTaxCode,
      ref_submit_id    as KR_EDocSelfBillSubmissionID,
      tax_invoice_type as KR_EDocSelfBillTaxInvoiceType,
      vkorg            as KR_EDocSelfBillSalesOrg,
      vtweg            as KR_EDocSelfBillDistrChannel,
      klabc            as KR_EDocSelfBillCustClassfctn,
      cust_name        as KR_EDocSelfBillCustomerName,
      tax_base_amt     as KR_EDocSelfBillTaxBaseValue,
      tax_amount       as KR_EDocSelfBillTaxValue,
      amount           as KR_EDocSelfBillAmountValue,
      waers            as KR_EDocSelfBillCurrency,
      transition_date  as KR_EDocSelfBillTransitionDate,
      source_key       as KR_EDocSelfBillSourceKey,
      status_reason    as KR_EDocSelfBillStatusReasonTxt,
      amendmt_reason   as KR_EDocSelfBillAmendReason,
      origl_apprvl_no  as KR_EDocSelfBillOriglApprvlNo
}
```
