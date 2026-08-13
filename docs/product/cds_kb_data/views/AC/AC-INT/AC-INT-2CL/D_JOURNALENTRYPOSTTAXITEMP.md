---
name: D_JOURNALENTRYPOSTTAXITEMP
description: "D Journal EntryPOSTTAXITEMP"
semantic_vi: "View D_JOURNALENTRYPOSTTAXITEMP hiển thị dữ liệu chi tiết thuế trong hồ sơ kế toán, bao gồm thuế suất và khu vực thuế, để sử dụng trong tính toán và báo cáo thuế."
keywords:
  - "journal entry"
  - "tax item"
  - "tax rate"
  - "tax jurisdiction"
  - "tax determination date"
  - "journal entry post tax item"
  - "d_journalentryposttaxitemp"
  - "dữ liệu chi tiết thuế"
  - "hồ sơ kế toán"
  - "thuế suất"
  - "khu vực thuế"
semantic_en: "The D_JOURNALENTRYPOSTTAXITEMP view exposes journal entry tax item data, including tax rates and jurisdictions, for use in tax calculations and reporting."
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
  - tax
  - item-level
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYPOSTTAXITEMP

**D Journal EntryPOSTTAXITEMP**

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
| `TaxCode` |  | |  | `mwskz` |  |  |
| `TaxItemClassification` |  | |  | `ktosl` |  |  |
| `ConditionType` |  | |  | `kschl` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `TaxJurisdictionLevel` |  | |  | `acpi_txjcd_level` |  |  |
| `LowestLevelTaxJurisdiction` |  | |  | `acpi_txjcd_deep` |  |  |
| `TaxItemAcctgDocItemRef` |  | |  | `taxps` |  |  |
| `TaxRate` |  | |  | `msatz_f05l` |  |  |
| `TaxDeterminationDate` |  | |  | `acpi_txdat` |  |  |
| `IsDirectTaxPosting` |  | |  | `bapi_flg_dir` |  |  |
| `TaxCountry` |  | |  | `fot_tax_country` |  |  |
| `_JournalEntryPost` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Journal Entry Tax Item'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryPostTaxItemP
{
  //key DummyKey                   :abap.char(1);
      GLAccountLineItem          :docln6;
      TaxCode                    :mwskz;
      TaxItemClassification      :ktosl;
      ConditionType              :kschl;
      TaxJurisdiction            :txjcd;
      TaxJurisdictionLevel       :acpi_txjcd_level;
      LowestLevelTaxJurisdiction :acpi_txjcd_deep;
      TaxItemAcctgDocItemRef     :taxps;
      TaxRate                    :msatz_f05l;
      TaxDeterminationDate       :acpi_txdat;
      IsDirectTaxPosting         :bapi_flg_dir;
      TaxCountry                 :fot_tax_country;
      _CurrencyAmount            : association [0..*] to D_JournalEntryPostCurrencyAmtP on 1 = 1;
      _JournalEntryPost          : association to parent D_JournalEntryPostParameter;
      
}
```
