---
name: D_JOURNALENTRYPOSTCPDP
description: D Journal EntryPOSTCPDP
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
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYPOSTCPDP

**D Journal EntryPOSTCPDP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OneTimeBPFormOfAddress` |  | |  | `anred` |
| `Name` |  | |  | `name1_gp` |
| `OneTimeBusinessPartnerName2` |  | |  | `name2_gp` |
| `OneTimeBusinessPartnerName3` |  | |  | `name3_gp` |
| `OneTimeBusinessPartnerName4` |  | |  | `name4_gp` |
| `BusinessPartnerStreetName` |  | |  | `stras_gp` |
| `OneTimeBPPostOfficeBox` |  | |  | `pfach` |
| `PostOfficeBoxPostalCode` |  | |  | `pstl2` |
| `PostalCode` |  | |  | `pstlz` |
| `BPIsEqualizationTaxSubject` |  | |  | `acpi_stkza` |
| `DataMediumExchangeKey` |  | |  | `dtaws` |
| `DataMediumExchangeIndicator` |  | |  | `dtams` |
| `LanguageISOCode` |  | |  | `laiso` |
| `BankCountry` |  | |  | `banks` |
| `BankAccount` |  | |  | `bankn` |
| `BankControlKey` |  | |  | `bkont` |
| `BankNumber` |  | |  | `bankl` |
| `CityName` |  | |  | `ort01_gp` |
| `Country` |  | |  | `land1_gp` |
| `TaxNumber1` |  | |  | `stcd1` |
| `TaxNumber2` |  | |  | `stcd2` |
| `TaxNumber3` |  | |  | `stcd3` |
| `TaxNumber4` |  | |  | `stcd4` |
| `TaxNumber5` |  | |  | `stcd5` |
| `IsNaturalPerson` |  | |  | `stkzn` |
| `Region` |  | |  | `regio` |
| `VATLiability` |  | |  | `stkzu` |
| `TaxNumberType` |  | |  | `j_1atoid` |
| `OneTimeBusinessPartnerEmail` |  | |  | `intad` |
| `AccountTaxType` |  | |  | `j_1afitp_d` |
| `BankDetailReference` |  | |  | `bkref` |
| `_JournalEntryPost` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Journal Entry One Time Customer/Supplier'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryPostCPDP
{
 // key DummyKey                    : abap.char(1);
      OneTimeBPFormOfAddress      : anred;
      Name                        : name1_gp;
      OneTimeBusinessPartnerName2 : name2_gp;
      OneTimeBusinessPartnerName3 : name3_gp;
      OneTimeBusinessPartnerName4 : name4_gp;
      BusinessPartnerStreetName   : stras_gp;
      OneTimeBPPostOfficeBox      : pfach;
      PostOfficeBoxPostalCode     : pstl2;
      PostalCode                  : pstlz;
      BPIsEqualizationTaxSubject  : acpi_stkza;
      DataMediumExchangeKey       : dtaws;
      DataMediumExchangeIndicator : dtams;
      LanguageISOCode             : laiso;
      BankCountry                 : banks;
      BankAccount                 : bankn;
      BankControlKey              : bkont;
      BankNumber                  : bankl;
      CityName                    : ort01_gp;
      Country                     : land1_gp;
      TaxNumber1                  : stcd1;
      TaxNumber2                  : stcd2;
      TaxNumber3                  : stcd3;
      TaxNumber4                  : stcd4;
      TaxNumber5                  : stcd5;
      IsNaturalPerson             : stkzn;
      Region                      : regio;
      VATLiability                : stkzu;
      TaxNumberType               : j_1atoid;
      OneTimeBusinessPartnerEmail : intad;
      AccountTaxType              : j_1afitp_d;
      BankDetailReference         : bkref;
      _JournalEntryPost           : association to parent D_JournalEntryPostParameter;

}
```
