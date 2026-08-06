---
name: I_FINTRANSFLOWACCTGPAYTINFO
description: Fintransflowacctgpaytinfo
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSFLOWACCTGPAYTINFO

**Fintransflowacctgpaytinfo**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TrsyTransacMgmtBizTransaction` | `BizTransac.TrsyTransacMgmtBizTransaction` |
| `CompanyCode` | `FinTrans.CompanyCode` |
| `FinancialTransaction` | `FinTrans.FinancialTransaction` |
| `FinancialInstrProductCategory` | `FinTrans.FinancialInstrProductCategory` |
| `PayingValuationArea` | `BizTransac.PayingValuationArea` |
| `AccountingDocument` | `AcctInfo.AccountingDocument` |
| `FiscalYear` | `cast( AcctInfo.FiscalYear as fis_gjahr_no_conv preserving type )` |
| `FinTransFlowPostingDate` | `AcctInfo.PostingDate` |
| `PaymentRequest` | `PaytRequest.PaymentRequest` |
| `PaytReqOriglReferenceDocument` | `PaytRequest.PaytReqOriglReferenceDocument` |
| `TrsyPaytRequestReleaseStatus` | `PaytRequest.TrsyPaytRequestReleaseStatus` |
| `TreasuryPaymentRequestStatus` | `PaytRequest.TreasuryPaymentRequestStatus` |
| `_FinTrans` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinTrans` | `I_FinancialTransaction` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Main acctg payt info of a flow'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@VDM.viewType: #COMPOSITE
define view entity I_FinTransFlowAcctgPaytInfo
  as select from           I_FinancialTransaction     as FinTrans
    inner one to many join I_FinTransFlowBizTransac   as BizTransac  on  BizTransac.CompanyCode          = FinTrans.CompanyCode
                                                                     and BizTransac.FinancialTransaction = FinTrans.FinancialTransaction

    left outer to one join I_TrsyAccountingItemCredit as AcctInfo    on  BizTransac.TreasuryBusinessTransaction = AcctInfo.TreasuryBusinessTransaction
                                                                     and BizTransac.PayingValuationArea         = AcctInfo.TreasuryValuationArea
                                                                     and AcctInfo.TreasuryTransactionFlow       = 1
    left outer to one join I_TreasuryPaymentRequest   as PaytRequest on  BizTransac.TreasuryBusinessTransaction = PaytRequest.TreasuryBusinessTransaction
                                                                     and BizTransac.PayingValuationArea         = PaytRequest.TreasuryValuationArea
                                                                     and PaytRequest.TreasuryTransactionFlow    = 1

  association [0..1] to I_FinancialTransaction as _FinTrans on  $projection.CompanyCode          = _FinTrans.CompanyCode
                                                            and $projection.FinancialTransaction = _FinTrans.FinancialTransaction

{
      //External Business Transaction ID, the key to connect transaction flow and posting/payment data
  key BizTransac.TrsyTransacMgmtBizTransaction,

      //Info from Transaction Management
      FinTrans.CompanyCode,
      FinTrans.FinancialTransaction,
      FinTrans.FinancialInstrProductCategory,     

      //Info from Position Management
      BizTransac.PayingValuationArea,
      AcctInfo.AccountingDocument                                      as AccountingDocument,
      cast( AcctInfo.FiscalYear as fis_gjahr_no_conv preserving type ) as FiscalYear,
      AcctInfo.PostingDate                                             as FinTransFlowPostingDate,
      PaytRequest.PaymentRequest                                       as PaymentRequest,
      PaytRequest.PaytReqOriglReferenceDocument                        as PaytReqOriglReferenceDocument,
      PaytRequest.TrsyPaytRequestReleaseStatus                         as TrsyPaytRequestReleaseStatus,
      PaytRequest.TreasuryPaymentRequestStatus                         as TreasuryPaymentRequestStatus,
      
      @Consumption.hidden: true
      _FinTrans
}
```
