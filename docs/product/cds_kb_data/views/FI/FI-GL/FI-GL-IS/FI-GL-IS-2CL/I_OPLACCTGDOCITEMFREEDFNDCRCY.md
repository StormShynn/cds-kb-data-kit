---
name: I_OPLACCTGDOCITEMFREEDFNDCRCY
description: "Oplacctgdocitemfreedfndcrcy"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_OPLACCTGDOCITEMFREEDFNDCRCY

**Oplacctgdocitemfreedfndcrcy**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |
| `AccountingDocumentItem` | ✓ | |  |  |  |  |
| `Ledger` |  | |  |  |  |  |
| `BalanceTransactionCurrency` |  | |  |  |  |  |
| `AmountInBalanceTransacCrcy` |  | |  | `sum(I_JournalEntryItem.AmountInBalanceTransacCrcy)` |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `AmountInTransactionCurrency` |  | |  | `sum(I_JournalEntryItem.AmountInTransactionCurrency)` |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  | `sum(I_JournalEntryItem.AmountInCompanyCodeCurrency)` |  |  |
| `GlobalCurrency` |  | |  |  |  |  |
| `AmountInGlobalCurrency` |  | |  | `sum(I_JournalEntryItem.AmountInGlobalCurrency)` |  |  |
| `FreeDefinedCurrency1` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency1` |  | |  | `sum(I_JournalEntryItem.AmountInFreeDefinedCurrency1)` |  |  |
| `FreeDefinedCurrency2` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency2` |  | |  | `sum(I_JournalEntryItem.AmountInFreeDefinedCurrency2)` |  |  |
| `FreeDefinedCurrency3` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency3` |  | |  | `sum(I_JournalEntryItem.AmountInFreeDefinedCurrency3)` |  |  |
| `FreeDefinedCurrency4` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency4` |  | |  | `sum(I_JournalEntryItem.AmountInFreeDefinedCurrency4)` |  |  |
| `FreeDefinedCurrency5` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency5` |  | |  | `sum(I_JournalEntryItem.AmountInFreeDefinedCurrency5)` |  |  |
| `FreeDefinedCurrency6` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency6` |  | |  | `sum(I_JournalEntryItem.AmountInFreeDefinedCurrency6)` |  |  |
| `FreeDefinedCurrency7` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency7` |  | |  | `sum(I_JournalEntryItem.AmountInFreeDefinedCurrency7)` |  |  |
| `FreeDefinedCurrency8` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency8` |  | |  | `sum(I_JournalEntryItem.AmountInFreeDefinedCurrency8)` |  |  |
| `DebitAmountInCoCodeCrcy` |  | |  | `sum(I_JournalEntryItem.DebitAmountInCoCodeCrcy)` |  |  |
| `CreditAmountInCoCodeCrcy` |  | |  | `sum(I_JournalEntryItem.CreditAmountInCoCodeCrcy)` |  |  |
| `DebitAmountInTransCrcy` |  | |  | `sum(I_JournalEntryItem.DebitAmountInTransCrcy)` |  |  |
| `CreditAmountInTransCrcy` |  | |  | `sum(I_JournalEntryItem.CreditAmountInTransCrcy)` |  |  |
| `DebitAmountInBalanceTransCrcy` |  | |  | `sum(I_JournalEntryItem.DebitAmountInBalanceTransCrcy)` |  |  |
| `CreditAmountInBalanceTransCrcy` |  | |  | `sum(I_JournalEntryItem.CreditAmountInBalanceTransCrcy)` |  |  |
| `DebitAmountInGlobalCrcy` |  | |  | `sum(I_JournalEntryItem.DebitAmountInGlobalCrcy)` |  |  |
| `CreditAmountInGlobalCrcy` |  | |  | `sum(I_JournalEntryItem.CreditAmountInGlobalCrcy)` |  |  |
| `DebitAmountInFreeDfndCrcy1` |  | |  | `sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy1)` |  |  |
| `CreditAmountInFreeDfndCrcy1` |  | |  | `sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy1)` |  |  |
| `DebitAmountInFreeDfndCrcy2` |  | |  | `sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy2)` |  |  |
| `CreditAmountInFreeDfndCrcy2` |  | |  | `sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy2)` |  |  |
| `DebitAmountInFreeDfndCrcy3` |  | |  | `sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy3)` |  |  |
| `CreditAmountInFreeDfndCrcy3` |  | |  | `sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy3)` |  |  |
| `DebitAmountInFreeDfndCrcy4` |  | |  | `sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy4)` |  |  |
| `CreditAmountInFreeDfndCrcy4` |  | |  | `sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy4)` |  |  |
| `DebitAmountInFreeDfndCrcy5` |  | |  | `sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy5)` |  |  |
| `CreditAmountInFreeDfndCrcy5` |  | |  | `sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy5)` |  |  |
| `DebitAmountInFreeDfndCrcy6` |  | |  | `sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy6)` |  |  |
| `CreditAmountInFreeDfndCrcy6` |  | |  | `sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy6)` |  |  |
| `DebitAmountInFreeDfndCrcy7` |  | |  | `sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy7)` |  |  |
| `CreditAmountInFreeDfndCrcy7` |  | |  | `sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy7)` |  |  |
| `DebitAmountInFreeDfndCrcy8` |  | |  | `sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy8)` |  |  |
| `CreditAmountInFreeDfndCrcy8` |  | |  | `sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy8)` |  |  |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @EndUserText.label: 'Amount in Freely Defined Currency'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY // never expose this view directly, only via associations
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED 

@ObjectModel: { usageType.sizeCategory: #XXL,
                usageType.dataClass:  #MIXED,
                usageType.serviceQuality: #D,
                representativeKey: 'AccountingDocumentItem',
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
                modelingPattern: #NONE }
@Analytics.technicalName: 'IFIBSEGFCRCY'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_OplAcctgDocItemFreeDfndCrcy as select from I_JournalEntryItem as I_JournalEntryItem
                                                     inner join I_Ledger as I_Ledger on I_JournalEntryItem.Ledger = I_Ledger.Ledger
                                                                                    and I_Ledger.IsLeadingLedger  = 'X'

{
    
    //I_JournalEntryItem 
    @ObjectModel.foreignKey.association: '_CompanyCode' 
    key I_JournalEntryItem.CompanyCode, 
    @ObjectModel.foreignKey.association: '_FiscalYear'
    key I_JournalEntryItem.FiscalYear, 
    @ObjectModel.foreignKey.association: '_JournalEntry'
    key I_JournalEntryItem.AccountingDocument, 
    key I_JournalEntryItem.AccountingDocumentItem, 
    I_JournalEntryItem.Ledger,
    @ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
    I_JournalEntryItem.BalanceTransactionCurrency, 
    @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
    sum(I_JournalEntryItem.AmountInBalanceTransacCrcy) as  AmountInBalanceTransacCrcy, 
    @ObjectModel.foreignKey.association: '_TransactionCurrency'
    I_JournalEntryItem.TransactionCurrency, 
    @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
    sum(I_JournalEntryItem.AmountInTransactionCurrency) as AmountInTransactionCurrency, 
    @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
    I_JournalEntryItem.CompanyCodeCurrency, 
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    sum(I_JournalEntryItem.AmountInCompanyCodeCurrency) as AmountInCompanyCodeCurrency, 
    @ObjectModel.foreignKey.association: '_GlobalCurrency'
    I_JournalEntryItem.GlobalCurrency, 
    @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
    sum(I_JournalEntryItem.AmountInGlobalCurrency) as AmountInGlobalCurrency, 
    @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
    I_JournalEntryItem.FreeDefinedCurrency1, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
    sum(I_JournalEntryItem.AmountInFreeDefinedCurrency1) as AmountInFreeDefinedCurrency1, 
    @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
    I_JournalEntryItem.FreeDefinedCurrency2, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
    sum(I_JournalEntryItem.AmountInFreeDefinedCurrency2) as AmountInFreeDefinedCurrency2, 
    @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
    I_JournalEntryItem.FreeDefinedCurrency3, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
    sum(I_JournalEntryItem.AmountInFreeDefinedCurrency3) as AmountInFreeDefinedCurrency3, 
    @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
    I_JournalEntryItem.FreeDefinedCurrency4, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
    sum(I_JournalEntryItem.AmountInFreeDefinedCurrency4) as AmountInFreeDefinedCurrency4, 
    @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
    I_JournalEntryItem.FreeDefinedCurrency5, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
    sum(I_JournalEntryItem.AmountInFreeDefinedCurrency5) as AmountInFreeDefinedCurrency5, 
    @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
    I_JournalEntryItem.FreeDefinedCurrency6, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
    sum(I_JournalEntryItem.AmountInFreeDefinedCurrency6) as AmountInFreeDefinedCurrency6, 
    @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
    I_JournalEntryItem.FreeDefinedCurrency7, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
    sum(I_JournalEntryItem.AmountInFreeDefinedCurrency7) as AmountInFreeDefinedCurrency7, 
    @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
    I_JournalEntryItem.FreeDefinedCurrency8, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
    sum(I_JournalEntryItem.AmountInFreeDefinedCurrency8) as AmountInFreeDefinedCurrency8, 
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    sum(I_JournalEntryItem.DebitAmountInCoCodeCrcy) as DebitAmountInCoCodeCrcy, 
    @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
    sum(I_JournalEntryItem.CreditAmountInCoCodeCrcy) as CreditAmountInCoCodeCrcy, 
    @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
    sum(I_JournalEntryItem.DebitAmountInTransCrcy) as DebitAmountInTransCrcy, 
    @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
    sum(I_JournalEntryItem.CreditAmountInTransCrcy) as CreditAmountInTransCrcy, 
    @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
    sum(I_JournalEntryItem.DebitAmountInBalanceTransCrcy) as DebitAmountInBalanceTransCrcy, 
    @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
    sum(I_JournalEntryItem.CreditAmountInBalanceTransCrcy) as CreditAmountInBalanceTransCrcy, 
    @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
    sum(I_JournalEntryItem.DebitAmountInGlobalCrcy) as DebitAmountInGlobalCrcy, 
    @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
    sum(I_JournalEntryItem.CreditAmountInGlobalCrcy) as CreditAmountInGlobalCrcy, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
    sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy1) as DebitAmountInFreeDfndCrcy1, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
    sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy1) as CreditAmountInFreeDfndCrcy1, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
    sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy2) as DebitAmountInFreeDfndCrcy2, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
    sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy2) as CreditAmountInFreeDfndCrcy2, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
    sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy3) as DebitAmountInFreeDfndCrcy3, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
    sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy3) as CreditAmountInFreeDfndCrcy3, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
    sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy4) as DebitAmountInFreeDfndCrcy4, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
    sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy4) as CreditAmountInFreeDfndCrcy4, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
    sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy5) as DebitAmountInFreeDfndCrcy5, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
    sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy5) as CreditAmountInFreeDfndCrcy5,  
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
    sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy6) as DebitAmountInFreeDfndCrcy6, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
    sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy6) as CreditAmountInFreeDfndCrcy6, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
    sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy7) as DebitAmountInFreeDfndCrcy7, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
    sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy7) as CreditAmountInFreeDfndCrcy7, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
    sum(I_JournalEntryItem.DebitAmountInFreeDefinedCrcy8) as DebitAmountInFreeDfndCrcy8, 
    @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
    sum(I_JournalEntryItem.CreditAmountInFreeDefinedCrcy8) as CreditAmountInFreeDfndCrcy8, 
    /* Associations */ 
    //I_JournalEntryItem 
    
    I_JournalEntryItem._BalanceTransactionCurrency,
    I_JournalEntryItem._CompanyCode, 
    I_JournalEntryItem._FiscalYear,
    I_JournalEntryItem._JournalEntry,
    I_JournalEntryItem._CompanyCodeCurrency, 
    I_JournalEntryItem._FreeDefinedCurrency1, 
    I_JournalEntryItem._FreeDefinedCurrency2, 
    I_JournalEntryItem._FreeDefinedCurrency3, 
    I_JournalEntryItem._FreeDefinedCurrency4, 
    I_JournalEntryItem._FreeDefinedCurrency5, 
    I_JournalEntryItem._FreeDefinedCurrency6, 
    I_JournalEntryItem._FreeDefinedCurrency7, 
    I_JournalEntryItem._FreeDefinedCurrency8, 
    I_JournalEntryItem._GlobalCurrency, 
    I_JournalEntryItem._TransactionCurrency
 
}

where I_JournalEntryItem.AccountingDocumentItem <> '000'

group by 
    I_JournalEntryItem.CompanyCode, 
    I_JournalEntryItem.FiscalYear, 
    I_JournalEntryItem.AccountingDocument, 
    I_JournalEntryItem.AccountingDocumentItem,
    I_JournalEntryItem.Ledger,
    I_JournalEntryItem.BalanceTransactionCurrency, 
    I_JournalEntryItem.CompanyCodeCurrency,
    I_JournalEntryItem.TransactionCurrency,  
    I_JournalEntryItem.GlobalCurrency,
    I_JournalEntryItem.FreeDefinedCurrency1,
    I_JournalEntryItem.FreeDefinedCurrency2,
    I_JournalEntryItem.FreeDefinedCurrency3,
    I_JournalEntryItem.FreeDefinedCurrency4,
    I_JournalEntryItem.FreeDefinedCurrency5,
    I_JournalEntryItem.FreeDefinedCurrency6,
    I_JournalEntryItem.FreeDefinedCurrency7,
    I_JournalEntryItem.FreeDefinedCurrency8
```
