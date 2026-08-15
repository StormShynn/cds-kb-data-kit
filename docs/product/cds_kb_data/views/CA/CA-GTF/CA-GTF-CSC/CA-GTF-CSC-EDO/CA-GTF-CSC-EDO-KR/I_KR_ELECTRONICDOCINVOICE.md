---
name: I_KR_ELECTRONICDOCINVOICE
description: "KR Electronicdocinvoice"
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
# I_KR_ELECTRONICDOCINVOICE

**KR Electronicdocinvoice**

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
| `KR_EDocInvcApprovalNo` |  | |  | `apprvl_no` | `CHAR(27)` | Approval ID for Tax Invoice of South Korea |
| `KR_EDocInvcBizPlaceHeadQtrs` |  | |  | `busplc_hq` | `CHAR(1)` | Business Place of Headquarters |
| `KR_EDocInvcReceiptBilling` |  | |  | `rcpt_billg` | `CHAR(2)` | Billing or Receipt |
| `KR_EDocInvcCustomer` |  | |  | `customer` | `CHAR(10)` | Customer Number |
| `KR_EDocInvcBusinessPlace` |  | |  | `bupla` | `CHAR(4)` | Business Place |
| `KR_EDocInvcTaxCode` |  | |  | `tax_code` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `KR_EDocInvcSubmissionID` |  | |  | `ref_submit_id` | `CHAR(50)` | Submission ID for Tax Invoice of South Korea |
| `KR_EDocInvcTaxInvoiceType` |  | |  | `tax_invoice_type` | `CHAR(1)` | Tax Invoice Type |
| `KR_EDocInvcSalesOrganization` |  | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `KR_EDocInvcDistrChannel` |  | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `KR_EDocInvcCustomerClassfctn` |  | |  | `klabc` | `CHAR(2)` | Customer classification (ABC analysis) |
| `KR_EDocInvcCustomerName` |  | |  | `cust_name` | `CHAR(30)` | Customer Name |
| `KR_EDocInvcTaxBaseValue` |  | |  | `tax_base_amt` | `DEC(18)` | Tax Base |
| `KR_EDocInvcTaxValue` |  | |  | `tax_amount` | `DEC(18)` | Tax Amount |
| `KR_EDocInvcAmountValue` |  | |  | `amount` | `DEC(18)` | Amount |
| `KR_EDocInvcCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `KR_EDocInvcTrnstnDate` |  | |  | `transition_date` | `DATS(8)` | Transfer Date of Tax Invoice |
| `KR_EDocInvcSourceKey` |  | |  | `source_key` | `CHAR(32)` | eDocument South Korea: Source Key |
| `KR_EDocInvcStatusReasonText` |  | |  | `status_reason` | `CHAR(100)` | Reason for Canceling Tax Invoice |
| `KR_EDocInvcAmendReason` |  | |  | `amendmt_reason` | `CHAR(2)` | Reason for Amending Tax Invoice of South Korea |
| `KR_EDocInvcOriglApprvlNo` |  | |  | `origl_apprvl_no` | `CHAR(27)` | Approval ID for Original Tax Invoice |

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
