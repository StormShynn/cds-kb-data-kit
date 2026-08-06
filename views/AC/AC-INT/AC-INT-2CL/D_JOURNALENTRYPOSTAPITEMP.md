---
name: D_JOURNALENTRYPOSTAPITEMP
description: D Journal EntryPOSTAPITEMP
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
# D_JOURNALENTRYPOSTAPITEMP

**D Journal EntryPOSTAPITEMP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `GLAccountLineItem` | `docln6` |
| `Supplier` | `lifnr` |
| `GLAccount` | `hkont` |
| `DocumentItemText` | `sgtxt` |
| `AssignmentReference` | `acpi_zuonr` |
| `Reference1IDByBusinessPartner` | `xref1` |
| `Reference2IDByBusinessPartner` | `xref2` |
| `Reference3IDByBusinessPartner` | `xref3` |
| `PaymentTerms` | `acpi_zterm` |
| `DueCalculationBaseDate` | `acpi_zfbdt` |
| `CashDiscount1Days` | `acpi_zbd1t` |
| `CashDiscount1Percent` | `acpi_zbd1p` |
| `CashDiscount2Days` | `acpi_zbd2t` |
| `CashDiscount2Percent` | `acpi_zbd2p` |
| `NetPaymentDays` | `acpi_zbd3t` |
| `PaymentMethod` | `acpi_zlsch` |
| `PaymentMethodSupplement` | `uzawe` |
| `PaymentReference` | `acpi_kidno` |
| `PaymentBlockingReason` | `acpi_zlspr` |
| `AlternativePayee` | `vvabwze` |
| `BPBankAccountInternalID` | `vvbvtypabw` |
| `StateCentralBankPaymentReason` | `lzbkz` |
| `OplAcctgDocItmCntrySpcfcRef1` | `fac_glo_ref1` |
| `BranchAccount` | `acpi_filkd` |
| `BusinessPlace` | `acpi_branch` |
| `BusinessSectionCode` | `secco` |
| `HouseBank` | `hbkid` |
| `HouseBankAccount` | `hktid` |
| `TaxCountry` | `fot_tax_country` |
| `SpecialGLCode` | `acpi_umskz` |
| `TaxCode` | `mwskz` |
| `TaxJurisdiction` | `txjcd` |
| `VATRegistration` | `stceg` |
| `PaymentReason` | `farp_payt_rsn` |
| `JointVenture` | `jv_name` |
| `JointVentureRecoveryCode` | `jv_recind` |
| `JointVentureEquityGroup` | `jv_egroup` |
| `WBSElement` | `ps_posid_edit` |
| `ProfitCenter` | `prctr` |
| `_JournalEntryPost` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Journal Entry AP Item'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryPostAPItemP
{
 // key DummyKey                      :abap.char(1);
      GLAccountLineItem             :docln6;
      Supplier                      :lifnr;
      GLAccount                     :hkont;
      DocumentItemText              :sgtxt;
      AssignmentReference           :acpi_zuonr;
      Reference1IDByBusinessPartner :xref1;
      Reference2IDByBusinessPartner :xref2;
      Reference3IDByBusinessPartner :xref3;
      PaymentTerms                  :acpi_zterm;
      DueCalculationBaseDate        :acpi_zfbdt;
      CashDiscount1Days             :acpi_zbd1t;
      CashDiscount1Percent          :acpi_zbd1p;
      CashDiscount2Days             :acpi_zbd2t;
      CashDiscount2Percent          :acpi_zbd2p;
      NetPaymentDays                :acpi_zbd3t;
      PaymentMethod                 :acpi_zlsch;
      PaymentMethodSupplement       :uzawe;
      PaymentReference              :acpi_kidno;
      PaymentBlockingReason         :acpi_zlspr;
      AlternativePayee              :vvabwze;
      BPBankAccountInternalID       :vvbvtypabw;
      StateCentralBankPaymentReason :lzbkz;
      OplAcctgDocItmCntrySpcfcRef1  :fac_glo_ref1;
      BranchAccount                 :acpi_filkd;
      BusinessPlace                 :acpi_branch;
      BusinessSectionCode           :secco;
      HouseBank                     :hbkid;
      HouseBankAccount              :hktid;
      TaxCountry                    :fot_tax_country;
      SpecialGLCode                 :acpi_umskz;
      TaxCode                       :mwskz;
      TaxJurisdiction               :txjcd;
      VATRegistration               :stceg;
      PaymentReason                 :farp_payt_rsn;
      JointVenture                  :jv_name;
      JointVentureRecoveryCode                   :jv_recind;
      JointVentureEquityGroup                   :jv_egroup;
      WBSElement                    :ps_posid_edit;
      ProfitCenter                  :prctr;
      _CurrencyAmount               : association [0..*] to D_JournalEntryPostCurrencyAmtP on 1 = 1;
      _JournalEntryPost             : association to parent D_JournalEntryPostParameter;
      
}
```
