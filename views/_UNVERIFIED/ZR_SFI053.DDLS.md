---
name: ZR_SFI053.DDLS
description: "Invoice header"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/haihuazhang/cgl_abap_fi/blob/fa4c08cd674c26a1db46afb9f4a96c0e8aa0d833/src/zr_sfi053.ddls.asddls
semantic_en: "Invoice header — CDS view based on I_JournalEntryItem."
semantic_vi: "Invoice header — CDS view dựa trên I_JournalEntryItem."
keywords:
  - "invoice"
  - "header"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "period"
  - "partner"
  - "item"
tags:
  - FI
  - bo:billingdocument
  - component:FI
  - invoice
  - lob:finance
---
# ZR_SFI053.DDLS

**Invoice header**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/haihuazhang/cgl_abap_fi/blob/fa4c08cd674c26a1db46afb9f4a96c0e8aa0d833/src/zr_sfi053.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | | `_JournalEntryItem` | `CompanyCode` |  |  |
| `FiscalYear` | ✓ | |  | `$parameters.p_FiscalYear` |  |  |
| `FiscalPeriod` | ✓ | |  | `$parameters.p_FiscalPeriod` |  |  |
| `PartnerCompany` | ✓ | | `_JournalEntryItem` | `PartnerCompany` |  |  |
| `Item` | ✓ | | `_Config` | `item` |  |  |
| `TransactionCurrency` | ✓ | | `_JournalEntryItem` | `TransactionCurrency` |  |  |
| `GlobalCurrency` | ✓ | | `_JournalEntryItem` | `GlobalCurrency` |  |  |
| `TotalAmount` |  | |  | `sum( _JournalEntryItem.AmountInTransactionCurrency )` |  |  |
| `TotalAmountGlobal` |  | |  | `sum( _JournalEntryItem.AmountInGlobalCurrency )` |  |  |

## Source Code

*Source: [https://github.com/haihuazhang/cgl_abap_fi/blob/fa4c08cd674c26a1db46afb9f4a96c0e8aa0d833/src/zr_sfi053.ddls.asddls](https://github.com/haihuazhang/cgl_abap_fi/blob/fa4c08cd674c26a1db46afb9f4a96c0e8aa0d833/src/zr_sfi053.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Invoice header'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
define root view entity ZR_SFI053
  with parameters                                           
   p_FiscalYear: calendaryear,
   p_FiscalPeriod :calendarmonth
  as select from    I_JournalEntryItem  as _JournalEntryItem  
  left outer join   ztfi_ic_acct     as _Config       on  ( 
            ( _Config.zoption = 'BT' and _JournalEntryItem.GLAccount between _Config.accountfrom and _Config.accountto ) or
            ( _Config.zoption = 'EQ' and _JournalEntryItem.GLAccount = _Config.accountfrom )
        )   and  _Config.type  = 'Y'    
   left outer join ZR_SFI063  as   _SFI063  on _SFI063.CalendarYear = $parameters.p_FiscalYear
                                           and _SFI063.CalendarMonth = $parameters.p_FiscalPeriod                                      
{
//head
  key _JournalEntryItem.CompanyCode             as CompanyCode,
  key $parameters.p_FiscalYear                  as FiscalYear,
  key $parameters.p_FiscalPeriod                as  FiscalPeriod,
  key _JournalEntryItem.PartnerCompany          as PartnerCompany,
  key _Config.item                                   as Item, 
  key _JournalEntryItem.TransactionCurrency        as TransactionCurrency,
  key _JournalEntryItem.GlobalCurrency          as GlobalCurrency,
//  key _JournalEntryItem.PostingDate             as PostingDate,
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
   sum( _JournalEntryItem.AmountInTransactionCurrency ) as TotalAmount,
   @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
   sum( _JournalEntryItem.AmountInGlobalCurrency ) as TotalAmountGlobal
}where _JournalEntryItem.SourceLedger = '0L' 
group by 
    _JournalEntryItem.CompanyCode,
    _JournalEntryItem.PartnerCompany,
    _JournalEntryItem.TransactionCurrency,
    _Config.item,
    _JournalEntryItem.GlobalCurrency
//    _JournalEntryItem.PostingDate
```
