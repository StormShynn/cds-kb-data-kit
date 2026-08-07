---
name: I_FINSGLPOSTEDITEM
description: Finsglposteditem
app_component: AC-INT-ECS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - AC-INT-ECS
  - interface-view
  - item-level
  - component:AC-INT-ECS-2CL
  - lob:Other
---
# I_FINSGLPOSTEDITEM

**Finsglposteditem**

| Property | Value |
|---|---|
| App Component | `AC-INT-ECS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinSGLErrorItemUUID` | ✓ | | `_ErroItem` | `FinSGLErrorItemUUID` |
| `SourceLedger` |  | |  |  |
| `Ledger` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `FiscalYear` |  | |  |  |
| `AccountingDocument` |  | |  |  |
| `LedgerGLLineItem` |  | |  |  |
| `GLAccount` |  | |  |  |
| `PartnerCompany` |  | |  |  |
| `CostCenter` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `PartnerProfitCenter` |  | |  |  |
| `DocumentItemText` |  | |  |  |
| `BalanceTransactionCurrency` |  | |  |  |
| `AmountInBalanceTransacCrcy` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `AmountInTransactionCurrency` |  | |  |  |
| `CompanyCodeCurrency` |  | |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |
| `GlobalCurrency` |  | |  |  |
| `AmountInGlobalCurrency` |  | |  |  |
| `FunctionalCurrency` |  | |  |  |
| `AmountInFunctionalCurrency` |  | |  |  |
| `FinancialServicesProductGroup` |  | |  |  |
| `FinancialServicesBranch` |  | |  |  |
| `FinancialDataSource` |  | |  |  |
| `CustomerSupplierIndustry` |  | |  |  |
| `CustomerGroup` |  | |  |  |
| `CustomerSupplierCountry` |  | |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Financial Services GL Posted Item'

@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}

@ObjectModel: {
  representativeKey: 'FinSGLErrorItemUUID',
  usageType: {
    serviceQuality: #C,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  }
}

@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
define view entity I_FinSGLPostedItem
  as select from I_JournalEntryItem
    inner join   I_Ledger             as _Ledger       on  _Ledger.IsLeadingLedger               = 'X'
    inner join   I_FinSGLErrorItem    as _ErroItem     on  I_JournalEntryItem.SourceLedger       = _Ledger.Ledger
                                                       and I_JournalEntryItem.AccountingDocument = _ErroItem.FinSGLPostedDocument
                                                       and I_JournalEntryItem.CompanyCode        = _ErroItem.FinSGLPostedCompanyCode
                                                       and I_JournalEntryItem.FiscalYear         = _ErroItem.FinSGLPostedFiscalYear
                                                       and I_JournalEntryItem.LedgerGLLineItem   = _ErroItem.LedgerGLLineItem
                                                       and I_JournalEntryItem.Ledger             = _Ledger.Ledger
{
  key _ErroItem.FinSGLErrorItemUUID,
 
      I_JournalEntryItem.SourceLedger,
      I_JournalEntryItem.Ledger,
      I_JournalEntryItem.CompanyCode,
      I_JournalEntryItem.FiscalYear,
      I_JournalEntryItem.AccountingDocument,
      I_JournalEntryItem.LedgerGLLineItem,
      I_JournalEntryItem.GLAccount,
      I_JournalEntryItem.PartnerCompany,
      I_JournalEntryItem.CostCenter,
      I_JournalEntryItem.ProfitCenter,
      I_JournalEntryItem.PartnerProfitCenter,
      I_JournalEntryItem.DocumentItemText,

      I_JournalEntryItem.BalanceTransactionCurrency,
      @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
      I_JournalEntryItem.AmountInBalanceTransacCrcy,

      I_JournalEntryItem.TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      I_JournalEntryItem.AmountInTransactionCurrency,

      I_JournalEntryItem.CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      I_JournalEntryItem.AmountInCompanyCodeCurrency,

      I_JournalEntryItem.GlobalCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      I_JournalEntryItem.AmountInGlobalCurrency,

      I_JournalEntryItem.FunctionalCurrency,
      @Semantics.amount.currencyCode: 'FunctionalCurrency'
      I_JournalEntryItem.AmountInFunctionalCurrency,
      
      I_JournalEntryItem.FinancialServicesProductGroup,
      I_JournalEntryItem.FinancialServicesBranch,
      I_JournalEntryItem.FinancialDataSource,
      I_JournalEntryItem.CustomerSupplierIndustry,
      I_JournalEntryItem.CustomerGroup,
      I_JournalEntryItem.CustomerSupplierCountry
}
```
