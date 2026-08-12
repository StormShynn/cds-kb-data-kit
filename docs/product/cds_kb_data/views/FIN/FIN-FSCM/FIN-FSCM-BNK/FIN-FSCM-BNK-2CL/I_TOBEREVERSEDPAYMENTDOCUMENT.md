---
name: I_TOBEREVERSEDPAYMENTDOCUMENT
description: "Payment document to be reversed"
app_component: FIN-FSCM-BNK-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOBEREVERSEDPAYMENTDOCUMENT')/$value
semantic_en: "Payment document to be reversed"
semantic_vi: "Payment document to be reversed — CDS view giao diện dựa trên fap_fscm_rr_key."
keywords:
  - "payment"
  - "document"
  - "reversed"
  - "business"
  - "transaction"
  - "date"
  - "identification"
  - "company"
  - "code"
tags:
  - FIN
  - component:FIN-FSCM-BNK-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-BNK
  - FIN-FSCM-BNK-2CL
  - interface-view
  - lob:finance
  - payment
---
# I_TOBEREVERSEDPAYMENTDOCUMENT

**Payment document to be reversed**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-BNK-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOBEREVERSEDPAYMENTDOCUMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessTransactionDocUUID` | ✓ | | `_key` | `guid` | `RAW(16)` | Globally Unique Identifier |
| `PaymentRunDate` |  | | `_key` | `laufd` | `DATS(8)` | Date on Which the Program Is to Be Run |
| `PaymentRunIdentification` |  | | `_key` | `laufi` | `CHAR(6)` | Additional Identification |
| `CompanyCode` |  | | `_key` | `zbukr` | `CHAR(4)` | Paying Company Code |
| `PaymentDocument` |  | | `_key` | `vblnr` | `CHAR(10)` | Document Number of the Payment Document |
| `PaymentOrder` |  | |  | `pyord` | `CHAR(10)` | Payment Order |
| `PaymentBatch` |  | | `_key` | `batch_no` | `NUMC(10)` | Batch Identification Number |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOBEREVERSEDPAYMENTDOCUMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOBEREVERSEDPAYMENTDOCUMENT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'FAP_FSCM_RR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@VDM.viewType: #BASIC
@EndUserText.label: 'Payment document to be reversed'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#SQL_DATA_SOURCE]

define view I_ToBeReversedPaymentDocument
  as select from    fap_fscm_rr_key as _key
    left outer join reguh           as reguh on  _key.laufd = reguh.laufd
                                             and _key.laufi = reguh.laufi
                                             and _key.xvorl = reguh.xvorl
                                             and _key.zbukr = reguh.zbukr
                                             and _key.lifnr = reguh.lifnr
                                             and _key.kunnr = reguh.kunnr
                                             and _key.empfg = reguh.empfg
                                             and _key.vblnr = reguh.vblnr
{
    key _key.guid   as BusinessTransactionDocUUID,
      _key.laufd    as PaymentRunDate,
      _key.laufi  as PaymentRunIdentification,
      _key.zbukr  as CompanyCode,
      _key.vblnr  as PaymentDocument,
      reguh.pyord as PaymentOrder,
      _key.batch_no as PaymentBatch
}
```
