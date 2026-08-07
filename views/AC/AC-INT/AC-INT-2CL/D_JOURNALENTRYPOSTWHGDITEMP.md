---
name: D_JOURNALENTRYPOSTWHGDITEMP
description: D Journal EntryPOSTWHGDITEMP
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
# D_JOURNALENTRYPOSTWHGDITEMP

**D Journal EntryPOSTWHGDITEMP**

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
| `WithholdingTaxType` |  | |  | `witht` |
| `WithholdingTaxCode` |  | |  | `wt_withcd` |
| `WhldgTaxBaseIsEnteredManually` |  | |  | `wt_basman` |
| `WhldgTaxIsEnteredManually` |  | |  | `wt_amnman` |
| `_JournalEntryPost` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Journal Entry Withholding Tax'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryPostWhgdItemP
{
  //key DummyKey                      :abap.char(1);
      GLAccountLineItem             :docln6;
      WithholdingTaxType            :witht;
      WithholdingTaxCode            :wt_withcd;
//      AmountInTransactionCurrency   :bapiwt_awt1_31;
//      AmountInCompanyCodeCurrency   :bapiwt_qbuihh_31;
//      AmountInGroupCurrency         :bapiwt_qbuih2_31;
//      AmountInFreeDefinedCurrency1  :bapiwt_qbuih3_31;
//      WhldgTaxBaseAmtInTransacCrcy  :bapiwt_bs1_31;
//      WhldgTaxBaseAmtInCoCodeCrcy   :bapiwt_bs_31;
//      WhldgTaxBaseAmtInAddlCrcy2    :bapiwt_bs2_31;
//      WhldgTaxBaseAmtInAddlCrcy3    :bapiwt_bs3_31;
      WhldgTaxBaseIsEnteredManually :wt_basman;
      WhldgTaxIsEnteredManually     :wt_amnman;
      _CurrencyAmount               : association [0..*] to D_JournalEntryPostCurrencyAmtP on 1 = 1;
      _JournalEntryPost             : association to parent D_JournalEntryPostParameter ;
 
}
```
