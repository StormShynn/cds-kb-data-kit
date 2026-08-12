---
name: D_JOURNALENTRYPOSTARITEMP
description: "D Journal EntryPOSTARITEMP"
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
# D_JOURNALENTRYPOSTARITEMP

**D Journal EntryPOSTARITEMP**

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
| `Customer` |  | |  | `kunnr` |  |  |
| `GLAccount` |  | |  | `hkont` |  |  |
| `DocumentItemText` |  | |  | `sgtxt` |  |  |
| `AssignmentReference` |  | |  | `acpi_zuonr` |  |  |
| `Reference1IDByBusinessPartner` |  | |  | `xref1` |  |  |
| `Reference2IDByBusinessPartner` |  | |  | `xref2` |  |  |
| `Reference3IDByBusinessPartner` |  | |  | `xref3` |  |  |
| `PaymentTerms` |  | |  | `acpi_zterm` |  |  |
| `DueCalculationBaseDate` |  | |  | `acpi_zfbdt` |  |  |
| `CashDiscount1Days` |  | |  | `acpi_zbd1t` |  |  |
| `CashDiscount1Percent` |  | |  | `acpi_zbd1p` |  |  |
| `CashDiscount2Days` |  | |  | `acpi_zbd2t` |  |  |
| `CashDiscount2Percent` |  | |  | `acpi_zbd2p` |  |  |
| `NetPaymentDays` |  | |  | `acpi_zbd3t` |  |  |
| `PaymentMethod` |  | |  | `acpi_zlsch` |  |  |
| `PaymentMethodSupplement` |  | |  | `uzawe` |  |  |
| `SEPAMandate` |  | |  | `sepa_mndid` |  |  |
| `PaymentReference` |  | |  | `acpi_kidno` |  |  |
| `PaymentBlockingReason` |  | |  | `acpi_zlspr` |  |  |
| `PaymentServiceProvider` |  | |  | `com_wec_payment_srv_provider` |  |  |
| `PaymentRefByPaytSrvcProvider` |  | |  | `fps_transaction` |  |  |
| `StateCentralBankPaymentReason` |  | |  | `lzbkz` |  |  |
| `ReportingCountry` |  | |  | `egmld_bsez` |  |  |
| `VATRegistration` |  | |  | `stceg` |  |  |
| `OplAcctgDocItmCntrySpcfcRef1` |  | |  | `fac_glo_ref1` |  |  |
| `BranchAccount` |  | |  | `acpi_filkd` |  |  |
| `BusinessPlace` |  | |  | `acpi_branch` |  |  |
| `BusinessSectionCode` |  | |  | `secco` |  |  |
| `HouseBank` |  | |  | `hbkid` |  |  |
| `HouseBankAccount` |  | |  | `hktid` |  |  |
| `TaxCountry` |  | |  | `fot_tax_country` |  |  |
| `SpecialGLCode` |  | |  | `acpi_umskz` |  |  |
| `SalesOrder` |  | |  | `kdauf` |  |  |
| `SalesOrderItem` |  | |  | `kdpos` |  |  |
| `TaxCode` |  | |  | `mwskz` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `JointVentureBillingType` |  | |  | `jv_bilind` |  |  |
| `JointVenture` |  | |  | `jv_name` |  |  |
| `JointVentureRecoveryCode` |  | |  | `jv_recind` |  |  |
| `JointVentureEquityGroup` |  | |  | `jv_egroup` |  |  |
| `CreditControlArea` |  | |  | `acpi_kkber` |  |  |
| `PaymentReason` |  | |  | `farp_payt_rsn` |  |  |
| `DigitalPaymentType` |  | |  | `dp_payment_type` |  |  |
| `IsEUTriangularDeal` |  | |  | `xegdr` |  |  |
| `PaymentByDigitalPaymentService` |  | |  | `dp_transid` |  |  |
| `DunningKey` |  | |  | `acpi_mschl` |  |  |
| `DunningBlock` |  | |  | `acpi_mansp` |  |  |
| `_JournalEntryPost` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Journal Entry AR Item'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryPostARItemP
{
  // key DummyKey                      :abap.char(1);
  GLAccountLineItem              : docln6;
  Customer                       : kunnr;
  GLAccount                      : hkont;
  DocumentItemText               : sgtxt;
  AssignmentReference            : acpi_zuonr;
  Reference1IDByBusinessPartner  : xref1;
  Reference2IDByBusinessPartner  : xref2;
  Reference3IDByBusinessPartner  : xref3;
  PaymentTerms                   : acpi_zterm;
  DueCalculationBaseDate         : acpi_zfbdt;
  CashDiscount1Days              : acpi_zbd1t;
  CashDiscount1Percent           : acpi_zbd1p;
  CashDiscount2Days              : acpi_zbd2t;
  CashDiscount2Percent           : acpi_zbd2p;
  NetPaymentDays                 : acpi_zbd3t;
  PaymentMethod                  : acpi_zlsch;
  PaymentMethodSupplement        : uzawe;
  SEPAMandate                    : sepa_mndid;
  PaymentReference               : acpi_kidno;
  PaymentBlockingReason          : acpi_zlspr;
  PaymentServiceProvider         : com_wec_payment_srv_provider;
  PaymentRefByPaytSrvcProvider   : fps_transaction;
  StateCentralBankPaymentReason  : lzbkz;
  ReportingCountry               : egmld_bsez;
  VATRegistration                : stceg;
  OplAcctgDocItmCntrySpcfcRef1   : fac_glo_ref1;
  BranchAccount                  : acpi_filkd;
  BusinessPlace                  : acpi_branch;
  BusinessSectionCode            : secco;
  HouseBank                      : hbkid;
  HouseBankAccount               : hktid;
  TaxCountry                     : fot_tax_country;
  SpecialGLCode                  : acpi_umskz;
  SalesOrder                     : kdauf;
  SalesOrderItem                 : kdpos;
  TaxCode                        : mwskz;
  TaxJurisdiction                : txjcd;
  JointVentureBillingType        : jv_bilind;
  JointVenture                   : jv_name;
  JointVentureRecoveryCode       : jv_recind;
  JointVentureEquityGroup        : jv_egroup;
  CreditControlArea              : acpi_kkber;
  PaymentReason                  : farp_payt_rsn;
  DigitalPaymentType             : dp_payment_type;
  IsEUTriangularDeal             : xegdr;
  PaymentByDigitalPaymentService : dp_transid;
  DunningKey                     : acpi_mschl;
  DunningBlock                   : acpi_mansp;
  _CurrencyAmount                : association [0..*] to D_JournalEntryPostCurrencyAmtP on 1 = 1;
  _JournalEntryPost              : association to parent D_JournalEntryPostParameter;

}
```
