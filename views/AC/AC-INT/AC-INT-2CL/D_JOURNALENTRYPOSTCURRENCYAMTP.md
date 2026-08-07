---
name: D_JOURNALENTRYPOSTCURRENCYAMTP
description: D Journal EntryPOSTCURRENCYAMTP
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - transactional-processing
  - journal-entry
  - currency
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYPOSTCURRENCYAMTP

**D Journal EntryPOSTCURRENCYAMTP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyRole` |  | |  | `curtp` |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `ExchangeRate` |  | |  | `ukursp` |  |  |
| `IndirectQuotedExchangeRate` |  | |  | `ukursm` |  |  |
| `JournalEntryItemAmount` |  | |  | `wrbtr` |  |  |
| `TaxAmount` |  | |  | `wmwst` |  |  |
| `TaxBaseAmount` |  | |  | `fwbas` |  |  |
| `CashDiscountBaseAmount` |  | |  | `wskto` |  |  |

## Source Code

```abap
@EndUserText.label: 'Journal Entry Currency Amount'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define root abstract entity D_JournalEntryPostCurrencyAmtP
{
 // key DummyKey                   : abap.char(1);
      CurrencyRole               : curtp;
      //      CurrencyISOCode            : waers_iso;
      @Semantics.currencyCode    : true
      Currency                   : waers;
      ExchangeRate               : ukursp;
      IndirectQuotedExchangeRate : ukursm;
      @Semantics                 : { amount : {currencyCode: 'Currency'} }
      JournalEntryItemAmount     : wrbtr;
      @Semantics                 : { amount : {currencyCode: 'Currency'} }
      TaxAmount                  : wmwst;
      @Semantics                 : { amount : {currencyCode: 'Currency'} }
      TaxBaseAmount              : fwbas;
      @Semantics                 : { amount : {currencyCode: 'Currency'} }
      CashDiscountBaseAmount     : wskto;
      //      JournalEntryItemAmount     : bapidoccur_31;
      //      TaxAmount                  : bapitaxamt_31;
      //      TaxBaseAmount              : bapiamtbase_31;
      //      CashDiscountBaseAmount     : acpi_skfbt_31;
}
```
