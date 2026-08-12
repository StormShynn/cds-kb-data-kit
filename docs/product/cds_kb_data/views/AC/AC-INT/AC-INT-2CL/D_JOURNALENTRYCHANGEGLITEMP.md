---
name: D_JOURNALENTRYCHANGEGLITEMP
description: "D Journal EntryCHANGEGLITEMP"
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# D_JOURNALENTRYCHANGEGLITEMP

**D Journal EntryCHANGEGLITEMP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountLineItem` |  | |  | `docln6` |  |  |
| `DocumentItemText` |  | |  | `sgtxt` |  |  |
| `AssignmentReference` |  | |  | `dzuonr` |  |  |
| `StateCentralBankPaymentReason` |  | |  | `lzbkz` |  |  |
| `SupplyingCountry` |  | |  | `landl` |  |  |
| `Reference1IDByBusinessPartner` |  | |  | `xref1` |  |  |
| `Reference2IDByBusinessPartner` |  | |  | `xref2` |  |  |
| `Reference3IDByBusinessPartner` |  | |  | `xref3` |  |  |
| `PaymentDifferenceReason` |  | |  | `rstgr` |  |  |
| `_JournalEntryChange` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Journal Entry GL Item'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryChangeGLItemP
{
 // key DummyKey                      :abap.char(1);
      GLAccountLineItem             :docln6;
      DocumentItemText              :sgtxt;
      AssignmentReference           :dzuonr;      
      StateCentralBankPaymentReason :lzbkz;
      SupplyingCountry              :landl;
      Reference1IDByBusinessPartner :xref1;
      Reference2IDByBusinessPartner :xref2;
      Reference3IDByBusinessPartner :xref3;
      PaymentDifferenceReason       :rstgr;
      _JournalEntryChange           : association to parent D_JournalEntryChangeParameter;

}
```
