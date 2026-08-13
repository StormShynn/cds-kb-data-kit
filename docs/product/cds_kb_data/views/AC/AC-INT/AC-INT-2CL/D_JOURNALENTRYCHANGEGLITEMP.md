---
name: D_JOURNALENTRYCHANGEGLITEMP
description: "D Journal EntryCHANGEGLITEMP"
semantic_vi: "View D_JOURNALENTRYCHANGEGLITEMP cung cấp truy cập vào chi tiết thay đổi journal entry ở mức độ chi tiết của từng mục, bao gồm các dòng tài khoản, văn bản của mục đơn và lý do khác biệt thanh toán."
keywords:
  - "journal entry"
  - "journal entry change"
  - "item level"
  - "account line item"
  - "document item text"
  - "payment difference reason"
  - "d_journalentrychangeglitemp"
  - "journal entry change gl item"
  - "sap cds view"
  - "journal entry change details"
semantic_en: "The D_JOURNALENTRYCHANGEGLITEMP view provides access to journal entry change details at the item level, including account line items, document item texts, and payment difference reasons."
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
