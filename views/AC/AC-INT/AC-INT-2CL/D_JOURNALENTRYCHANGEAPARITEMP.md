---
name: D_JOURNALENTRYCHANGEAPARITEMP
description: D Journal EntryCHANGEAPARITEMP
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - journal-entry
  - item-level
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYCHANGEAPARITEMP

**D Journal EntryCHANGEAPARITEMP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `GLAccountLineItem` |  | |  | `docln6` |
| `DocumentItemText` |  | |  | `sgtxt` |
| `AssignmentReference` |  | |  | `dzuonr` |
| `SpecialGLAccountAssignment` |  | |  | `hzuon` |
| `Reference1IDByBusinessPartner` |  | |  | `xref1` |
| `Reference2IDByBusinessPartner` |  | |  | `xref2` |
| `Reference3IDByBusinessPartner` |  | |  | `xref3` |
| `BPBankAccountInternalID` |  | |  | `bvtyp` |
| `HouseBank` |  | |  | `hbkid` |
| `HouseBankAccount` |  | |  | `hktid` |
| `InvoiceReference` |  | |  | `rebzg` |
| `InvoiceReferenceFiscalYear` |  | |  | `rebzj` |
| `InvoiceItemReference` |  | |  | `rebzz` |
| `PaymentCurrency` |  | |  | `pycur` |
| `pyamt` |  | |  | `} AmountInPaymentCurrency : pyamt` |
| `LastDunningDate` |  | |  | `madat` |
| `DunningBlockingReason` |  | |  | `mansp` |
| `DunningLevel` |  | |  | `mahns_d` |
| `DunningKey` |  | |  | `mschl` |
| `PaymentTerms` |  | |  | `dzterm` |
| `DueCalculationBaseDate` |  | |  | `dzfbdt` |
| `CashDiscount1Days` |  | |  | `dzbd1t` |
| `CashDiscount2Days` |  | |  | `dzbd2t` |
| `NetPaymentDays` |  | |  | `dzbd3t` |
| `CashDiscount1Percent` |  | |  | `dzbd1p` |
| `CashDiscount2Percent` |  | |  | `dzbd2p` |
| `PaymentMethod` |  | |  | `dzlsch` |
| `PaymentBlockingReason` |  | |  | `dzlspr` |
| `FixedCashDiscount` |  | |  | `dzbfix` |
| `PaymentDifferenceReason` |  | |  | `rstgr` |
| `_JournalEntryChange` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Journal Entry APAR Item'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryChangeAPARItemP
{
  //key DummyKey                      :abap.char(1);
      GLAccountLineItem             :docln6;
      DocumentItemText              :sgtxt;
      AssignmentReference           :dzuonr;
      SpecialGLAccountAssignment    :hzuon;
      Reference1IDByBusinessPartner :xref1;
      Reference2IDByBusinessPartner :xref2;
      Reference3IDByBusinessPartner :xref3; 
      BPBankAccountInternalID       :bvtyp;
      HouseBank                     :hbkid;
      HouseBankAccount              :hktid;
      InvoiceReference              :rebzg;
      InvoiceReferenceFiscalYear    :rebzj;
      InvoiceItemReference          :rebzz;
      @Semantics.currencyCode       : true      
      PaymentCurrency               :pycur;
      @Semantics                  : { amount : {currencyCode: 'PaymentCurrency'} }
      AmountInPaymentCurrency       : pyamt;      
      LastDunningDate               :madat;
      DunningBlockingReason         :mansp;
      DunningLevel                  :mahns_d;
      DunningKey                    :mschl;
      PaymentTerms                  :dzterm;
      DueCalculationBaseDate        :dzfbdt;
      CashDiscount1Days             :dzbd1t;
      CashDiscount2Days             :dzbd2t;
      NetPaymentDays                :dzbd3t;
      CashDiscount1Percent          :dzbd1p;
      CashDiscount2Percent          :dzbd2p;
      PaymentMethod                 :dzlsch;
      PaymentBlockingReason         :dzlspr;
      FixedCashDiscount             :dzbfix;
      PaymentDifferenceReason       :rstgr;
      _JournalEntryChange           : association to parent D_JournalEntryChangeParameter;

}
```
