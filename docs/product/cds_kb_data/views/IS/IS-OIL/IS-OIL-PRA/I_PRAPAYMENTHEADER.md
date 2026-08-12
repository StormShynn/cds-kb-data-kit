---
name: I_PRAPAYMENTHEADER
description: "PRA Payment Header"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTHEADER')/$value
semantic_en: "PRA Payment Header"
semantic_vi: "PRA Payment Header — CDS view giao diện dựa trên PRA Payment Header."
keywords:
  - "pra"
  - "payment"
  - "header"
  - "process"
  - "reference"
  - "owner"
  - "date"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# I_PRAPAYMENTHEADER

**PRA Payment Header**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessRun` | ✓ | |  | `run_id` | `NUMC(10)` | Proc 2.0 - Run ID |
| `PaymentReference` | ✓ | |  | `cast( check_no as oiu_vdm_check_number )` | `CHAR(13)` | Check Number |
| `PRAOwner` |  | |  | `own_no` | `CHAR(10)` | PRA owner |
| `PaymentDate` |  | |  | `check_dt` | `DATS(8)` | Check Date |
| `PaymentType` |  | |  | `payment_type` | `CHAR(1)` | Payment Type |
| `CompanyCode` |  | |  | `cast ( zbukr as fis_bukrs preserving type )` | `CHAR(4)` | Company Code |
| `CheckStatus` |  | |  | `check_status` | `CHAR(2)` | Payment Processing - Check Status |
| `PaymentStatusDate` |  | |  | `status_dt` | `DATS(8)` | Status Date |
| `PaymentHeaderRejectionRsn` |  | |  | `rej_cd` | `CHAR(3)` | Payment Processing - High Level Reject Code |
| `CheckIsOutOfTolerance` |  | |  | `oot_fl` | `CHAR(1)` | Payment Processing - Out-Of-Tolerance Flag |
| `CheckIsSentToBank` |  | |  | `sent_to_bank` | `CHAR(1)` | Flag Indicating Sent to Bank |
| `OriginTransaction` |  | |  | `cast( '/PRA/PP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `OwnerNetAmount` |  | |  | `net_val` | `CURR(13)` | Owner Net Value |
| `VarianceAmount` |  | |  | `variance_amt` | `CURR(13)` | Payment Processing - Variance Amount |
| `VarianceRatio` |  | |  | `variance_pct` | `DEC(8)` | Payment Processing - Variance Percent |
| `MinimumPaymentAmt` |  | |  | `min_pay` | `CURR(13)` | Payment Processing - Owner Minimum Pay |
| `NumberOfDocuments` |  | |  | `cast( 1 as oiu_vdm_no_of_docs )` | `INT4(10)` | Number of Documents |
| `_CompanyCode` | | ✓ | | | | |
| `_ProcessRun` | | ✓ | | | | |
| `_PaymentHeader` | | ✓ | | | | |
| `_PRAOwner` | | ✓ | | | | |
| `_PaymentType` | | ✓ | | | | |
| `_CheckStatus` | | ✓ | | | | |
| `_PaymentHdrRejectionRsn` | | ✓ | | | | |
| `_CheckIsOutOfTolerance` | | ✓ | | | | |
| `_CheckIsSentToBank` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ProcessRun` | `I_ProcessRun` | [0..1] |
| `_PaymentHeader` | `I_PRAPaymentHeaderAttribute` | [0..1] |
| `_PRAOwner` | `I_PRAOwner` | [0..1] |
| `_PaymentType` | `I_PaymentType` | [0..1] |
| `_CheckStatus` | `I_CheckStatus` | [0..1] |
| `_PaymentHdrRejectionRsn` | `I_PaymentHdrRejectionRsn` | [0..1] |
| `_CheckIsOutOfTolerance` | `I_Indicator` | [0..1] |
| `_CheckIsSentToBank` | `I_Indicator` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTHEADER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTHEADER')/$value)*

```abap
@EndUserText.label: 'PRA Payment Header'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPAYMENTHDR'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAPaymentHeader'
define view I_PRAPaymentHeader
  as select from /pra/pp_chk_hdr
  association [0..1] to I_CompanyCode               as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ProcessRun                as _ProcessRun             on  $projection.ProcessRun = _ProcessRun.ProcessRun
  association [0..1] to I_PRAPaymentHeaderAttribute as _PaymentHeader          on  $projection.ProcessRun       = _PaymentHeader.ProcessRun
                                                                               and $projection.PaymentReference = _PaymentHeader.PaymentReference
  association [0..1] to I_PRAOwner                  as _PRAOwner               on  $projection.PRAOwner = _PRAOwner.PRAOwner
  association [0..1] to I_PaymentType               as _PaymentType            on  $projection.PaymentType = _PaymentType.PaymentType
  association [0..1] to I_CheckStatus               as _CheckStatus            on  $projection.CheckStatus = _CheckStatus.CheckStatus
  association [0..1] to I_PaymentHdrRejectionRsn    as _PaymentHdrRejectionRsn on  $projection.PaymentHeaderRejectionRsn = _PaymentHdrRejectionRsn.PaymentHeaderRejectionRsn
  association [0..1] to I_Indicator                 as _CheckIsOutOfTolerance  on  $projection.CheckIsOutOfTolerance = _CheckIsOutOfTolerance.IndicatorValue
  association [0..1] to I_Indicator                 as _CheckIsSentToBank      on  $projection.CheckIsSentToBank = _CheckIsSentToBank.IndicatorValue
  association [0..1] to I_Currency                  as _CompanyCodeCurrency    on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_User                      as _CreatedByUser          on  $projection.CreatedByUser = _CreatedByUser.UserID
{
      @ObjectModel.foreignKey.association: '_ProcessRun'
  key run_id                                              as ProcessRun,
      @ObjectModel.foreignKey.association: '_PaymentHeader'
  key cast( check_no as oiu_vdm_check_number )            as PaymentReference,
      @ObjectModel.foreignKey.association: '_PRAOwner'
      own_no                                              as PRAOwner,
      @Semantics.businessDate.at: true
      check_dt                                            as PaymentDate,
      @ObjectModel.foreignKey.association: '_PaymentType'
      payment_type                                        as PaymentType,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      //cast( zbukr as bukrs preserving type )              as CompanyCode,
      cast ( zbukr as fis_bukrs preserving type )         as CompanyCode,
      @ObjectModel.foreignKey.association: '_CheckStatus'
      check_status                                        as CheckStatus,
      @Semantics.businessDate.at: true
      status_dt                                           as PaymentStatusDate,
      @ObjectModel.foreignKey.association: '_PaymentHdrRejectionRsn'
      rej_cd                                              as PaymentHeaderRejectionRsn,
      @ObjectModel.foreignKey.association: '_CheckIsOutOfTolerance'
      oot_fl                                              as CheckIsOutOfTolerance,
      @ObjectModel.foreignKey.association: '_CheckIsSentToBank'
      sent_to_bank                                        as CheckIsSentToBank,

      //needed to support authorization check
      cast( '/PRA/PP_WORKPLACE' as fqm_origin_trans_id )  as OriginTransaction,

      //adminstrative
      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by )           as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts )      as CreationDateTime,

      //currencies
      @Semantics.currencyCode: true
      _CompanyCode.Currency                               as CompanyCodeCurrency,

      // measures
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      net_val                                             as OwnerNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      variance_amt                                        as VarianceAmount,
      @DefaultAggregation: #SUM
      variance_pct                                        as VarianceRatio,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      min_pay                                             as MinimumPaymentAmt,
      @DefaultAggregation: #SUM
      cast( 1 as oiu_vdm_no_of_docs )                     as NumberOfDocuments,

      // associations
      _ProcessRun,
      _PaymentHeader,
      _CompanyCode,
      _PRAOwner,
      _PaymentType,
      _CheckStatus,
      _PaymentHdrRejectionRsn,
      _CheckIsOutOfTolerance,
      _CheckIsSentToBank,
      _CompanyCodeCurrency,
      _CreatedByUser

}   ;
```
