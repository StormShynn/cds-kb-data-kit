---
name: I_BANKSTATEMENTITEM
description: Bankstatementitem
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - bank
  - item-level
  - component:FI-FIO-AR-2CL
  - lob:Finance
  - bo:Bank
---
# I_BANKSTATEMENTITEM

**Bankstatementitem**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BankStatementShortID` | ✓ | |  | `StatementShortID` |
| `BankStatementItem` | ✓ | |  | `StatementItem` |
| `CompanyCode` |  | |  |  |
| `BankStatementPostingRule` |  | |  | `cast ( BankStmtItem.PostingRule as farp_vgint )` |
| `PaymentTransaction` |  | |  | `cast ( BankStmtItem.PaymentTransaction as farp_vorgc )` |
| `InterpretationAlgorithm` |  | |  |  |
| `MemoLine` |  | | `_MemoLine` | `MemoLine` |
| `ValueDate` |  | |  | `cast ( BankStmtItem.ValueDate as farp_valut )` |
| `BankPostingDate` |  | |  | `cast ( BankStmtItem.BankPostingDate as farp_bvdat)` |
| `PostingDate` |  | |  |  |
| `ValueDateTime` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `OriginalCurrency` |  | |  |  |
| `AmountInTransactionCurrency` |  | |  | `cast ( case BankStmtItem.DebitCreditCode when 'D' then - abs(BankStmtItem.AmountInAccountCurrency) when 'S' then - abs(BankStmtItem.AmountInAccountCurrency) else BankStmtItem.AmountInAccountCurrency end as kwbtr_eb)` |
| `AmountInOriginalCurrency` |  | |  | `cast ( case BankStmtItem.DebitCreditCode when 'D' then - abs(BankStmtItem.ForeignCurrencyAmount) when 'S' then - abs(BankStmtItem.ForeignCurrencyAmount) else BankStmtItem.ForeignCurrencyAmount end as farp_fwbtr )` |
| `ExchangeRate` |  | |  | `cast ( BankStmtItem.ExchangeRate as far_curr_rate )` |
| `FeeAmountInTransactionCrcy` |  | |  |  |
| `FeeAmountInOriginalCrcy` |  | |  | `cast ( BankStmtItem.FeeAmountInOriginalCrcy as farp_spesf )` |
| `Supplier` |  | |  | `cast ( case when BankStmtItem.PaymentAdviceAccountType = 'K' then BankStmtItem.PaymentAdviceAccount else '' end as lifnr )` |
| `Customer` |  | |  | `cast ( case when BankStmtItem.PaymentAdviceAccountType = 'D' then BankStmtItem.PaymentAdviceAccount else '' end as kunnr )` |
| `GLAccount` |  | |  | `cast ( case when BankStmtItem.PaymentAdviceAccountType = 'S' then BankStmtItem.PaymentAdviceAccount else '' end as farp_hkont )` |
| `BusinessPartnerName` |  | |  | `cast ( BankStmtItem.BusinessPartnerName as farp_partn )` |
| `PaymentManualTransacType` |  | |  | `cast ( BankStmtItem.PaymentManualTransacType as far_vgman )` |
| `PaymentExternalTransacType` |  | |  | `cast ( BankStmtItem.PaymentExternalTransacType as farp_vgext )` |
| `PaymentAdvice` |  | |  |  |
| `Cheque` |  | |  | `case when BankStmtItem.CheckType = 'C' and BankStmtItem.CheckNumber is not initial then BankStmtItem.CheckNumber when BankStmtItem.CheckType = 'C' and BankStmtItem.CheckNumber is initial then BankStmtItem.Cheque else '' end` |
| `PaymentMediumReference` |  | |  | `cast ( case when BankStmtItem.CheckType = 'D' and BankStmtItem.CheckNumber is not initial then BankStmtItem.CheckNumber when BankStmtItem.CheckType = 'D' and BankStmtItem.CheckNumber is initial then BankStmtItem.Cheque else '' end as far_chect )` |
| `CustomerReferenceNumber` |  | |  | `cast ( case when BankStmtItem.CheckType = '' and BankStmtItem.CheckNumber is not initial then BankStmtItem.CheckNumber when BankStmtItem.CheckType = '' and BankStmtItem.CheckNumber is initial then BankStmtItem.Cheque else '' end as far_chect_orig )` |
| `BankLedgerDocument` |  | |  | `cast ( BankStmtItem.BankLedgerDocument as farp_belnr_bank_ledger )` |
| `SubledgerDocument` |  | |  | `cast ( BankStmtItem.SubledgerDocument as farp_nbbln )` |
| `BankLedgerOnAccountDocument` |  | |  | `cast ( BankStmtItem.BankLedgerOnAccountDocument as farp_ak1bl )` |
| `SubledgerOnAccountDocument` |  | |  | `cast ( BankStmtItem.SubledgerOnAccountDocument as farp_akbln )` |
| `FiscalYear` |  | |  |  |
| `PartnerBankCountry` |  | |  | `cast ( BankStmtItem.PartnerBankCountry as farp_pabks )` |
| `PartnerBank` |  | |  | `cast ( BankStmtItem.PartnerBank as farp_pablz )` |
| `PartnerBankSWIFTCode` |  | |  | `cast ( BankStmtItem.PartnerBankSWIFTCode as paswi_eb)` |
| `PartnerBankAccount` |  | |  | `cast ( BankStmtItem.PartnerBankAccount as farp_pakto )` |
| `BankStatementItemDescription1` |  | |  | `ItemDescription1` |
| `BankStatementItemDescription2` |  | |  | `ItemDescription2` |
| `PartnerBankIBAN` |  | |  |  |
| `DocumentItemText` |  | |  |  |
| `BankReference` |  | |  | `cast ( BankStmtItem.BankReference as farp_vgref )` |
| `IsCompleted` |  | |  |  |
| `_Currency` | | ✓ | | |
| `_OriginalCurrency` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MemoLine` | `I_Arbsitmemolinewithorig` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_OriginalCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Items of a bank statement'
@VDM.viewType: #COMPOSITE

@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'ARBankStatement'
define view entity I_BankStatementItem
  as select from P_Arbanktransactiondocitem_06 as BankStmtItem

  // get company code from febko
    inner join   P_Arbanktransactiondoc_02     as BankStmtHeader on BankStmtItem.StatementShortID = BankStmtHeader.StatementShortID

  association [0..1] to I_Arbsitmemolinewithorig as _MemoLine         on  $projection.BankStatementShortID = _MemoLine.BankStatementShortID
                                                                      and $projection.BankStatementItem    = _MemoLine.BankStatementItem

  association [0..1] to I_Currency               as _Currency         on  _Currency.Currency = $projection.TransactionCurrency

  association [0..1] to I_Currency               as _OriginalCurrency on  _OriginalCurrency.Currency = $projection.OriginalCurrency
{
  key  BankStmtItem.StatementShortID                                      as BankStatementShortID,
  key  BankStmtItem.StatementItem                                         as BankStatementItem,
       BankStmtHeader.CompanyCode                                         as CompanyCode,
       cast ( BankStmtItem.PostingRule as farp_vgint )                    as BankStatementPostingRule,
       cast ( BankStmtItem.PaymentTransaction as farp_vorgc )             as PaymentTransaction,
       BankStmtItem.InterpretationAlgorithm,
       _MemoLine.MemoLine                                                 as MemoLine,
       cast ( BankStmtItem.ValueDate as farp_valut )                      as ValueDate,
       cast ( BankStmtItem.BankPostingDate as farp_bvdat)                 as BankPostingDate,
       BankStmtItem.PostingDate,

       BankStmtItem.ValueDateTime,
       BankStmtItem.TransactionCurrency,
       BankStmtItem.OriginalCurrency,

       @Semantics.amount.currencyCode: 'TransactionCurrency'
         cast ( case BankStmtItem.DebitCreditCode
               when 'D' then - abs(BankStmtItem.AmountInAccountCurrency)
               when 'S' then - abs(BankStmtItem.AmountInAccountCurrency)
               else BankStmtItem.AmountInAccountCurrency
               end   as kwbtr_eb)                                        as AmountInTransactionCurrency,

       @Semantics.amount.currencyCode: 'OriginalCurrency'
       cast ( case BankStmtItem.DebitCreditCode
           when 'D' then - abs(BankStmtItem.ForeignCurrencyAmount)
           when 'S' then - abs(BankStmtItem.ForeignCurrencyAmount)
           else BankStmtItem.ForeignCurrencyAmount
           end        as  farp_fwbtr )                                    as AmountInOriginalCurrency,

       cast ( BankStmtItem.ExchangeRate as far_curr_rate )                as ExchangeRate,

       @Semantics.amount.currencyCode: 'TransactionCurrency'
       BankStmtItem.FeeAmountInTransactionCrcy,

       @Semantics.amount.currencyCode: 'OriginalCurrency'
       cast ( BankStmtItem.FeeAmountInOriginalCrcy as farp_spesf )        as FeeAmountInOriginalCrcy,

       cast ( case when BankStmtItem.PaymentAdviceAccountType = 'K'
         then BankStmtItem.PaymentAdviceAccount
         else '' end                      as lifnr   )                    as Supplier,

       cast ( case when BankStmtItem.PaymentAdviceAccountType = 'D'
         then BankStmtItem.PaymentAdviceAccount
         else '' end                      as kunnr   )                    as Customer,

       cast ( case when BankStmtItem.PaymentAdviceAccountType = 'S'
         then BankStmtItem.PaymentAdviceAccount
         else '' end                      as farp_hkont  )                as GLAccount,

       cast ( BankStmtItem.BusinessPartnerName as farp_partn )            as BusinessPartnerName,
       cast ( BankStmtItem.PaymentManualTransacType as far_vgman )        as PaymentManualTransacType,
       cast ( BankStmtItem.PaymentExternalTransacType as farp_vgext )     as PaymentExternalTransacType,
       BankStmtItem.PaymentAdvice,

       case when BankStmtItem.CheckType = 'C'         and BankStmtItem.CheckNumber is not initial then BankStmtItem.CheckNumber
            when BankStmtItem.CheckType = 'C'         and BankStmtItem.CheckNumber is initial     then BankStmtItem.Cheque
            else ''
            end                                                           as Cheque,

       cast (  case when BankStmtItem.CheckType = 'D' and BankStmtItem.CheckNumber is not initial then BankStmtItem.CheckNumber
                    when BankStmtItem.CheckType = 'D' and BankStmtItem.CheckNumber is initial     then BankStmtItem.Cheque
                    else ''
           end    as far_chect )                                          as PaymentMediumReference,

       cast ( case when BankStmtItem.CheckType = ''   and BankStmtItem.CheckNumber is not initial then BankStmtItem.CheckNumber
                   when BankStmtItem.CheckType = ''   and BankStmtItem.CheckNumber is initial     then BankStmtItem.Cheque
                   else ''
           end    as far_chect_orig )                                     as CustomerReferenceNumber,

       cast ( BankStmtItem.BankLedgerDocument as farp_belnr_bank_ledger ) as BankLedgerDocument,
       cast ( BankStmtItem.SubledgerDocument as farp_nbbln )              as SubledgerDocument,
       cast ( BankStmtItem.BankLedgerOnAccountDocument as farp_ak1bl )    as BankLedgerOnAccountDocument,
       cast ( BankStmtItem.SubledgerOnAccountDocument as farp_akbln )     as SubledgerOnAccountDocument,
       BankStmtItem.FiscalYear,
       cast ( BankStmtItem.PartnerBankCountry as farp_pabks )             as PartnerBankCountry,
       cast ( BankStmtItem.PartnerBank as farp_pablz )                    as PartnerBank,
       cast ( BankStmtItem.PartnerBankSWIFTCode as paswi_eb)              as PartnerBankSWIFTCode,
       cast ( BankStmtItem.PartnerBankAccount as farp_pakto )             as PartnerBankAccount,
       BankStmtItem.ItemDescription1                                      as BankStatementItemDescription1,
       BankStmtItem.ItemDescription2                                      as BankStatementItemDescription2,
       BankStmtItem.PartnerBankIBAN,
       BankStmtItem.DocumentItemText,
       cast ( BankStmtItem.BankReference as farp_vgref )                  as BankReference,
       BankStmtItem.IsCompleted,
       _Currency,
       _OriginalCurrency
}
```
