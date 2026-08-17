---
name: I_EUELECTRONICDOCBANKACC
description: "Euelectronicdocbankacc"
app_component: CA-GTF-CSC-EDO-PAP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - bank
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
  - bo:Bank
---
# I_EUELECTRONICDOCBANKACC

**Euelectronicdocbankacc**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `HouseBank` | ✓ | |  | `hbkid` | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` | ✓ | |  | `hktid` | `CHAR(5)` | ID for Account Details |
| `EU_EDocPaymentMeans` |  | |  | `paym_means` | `CHAR(1)` | Payment Means |
| `IBAN` |  | |  | `iban` | `CHAR(34)` | IBAN (International Bank Account Number) |
| `_CompanyCode` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_HouseBankAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_HouseBank` | `I_Housebank` | [1..1] |
| `_HouseBankAccount` | `I_HouseBankAccount` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bank Accounts for Company Code'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
 },
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
@VDM:{
viewType: #BASIC
}

define root view entity I_EUElectronicDocBankAcc
  as select from edoeubankacc
  association [1..1] to I_CompanyCode      as _CompanyCode      on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Housebank        as _HouseBank        on  edoeubankacc.hbkid = _HouseBank.HouseBank
                                                                and edoeubankacc.bukrs = _HouseBank.CompanyCode
  association        to I_HouseBankAccount as _HouseBankAccount on  $projection.CompanyCode      = _HouseBankAccount.CompanyCode
                                                                and $projection.HouseBank        = _HouseBankAccount.HouseBank
                                                                and $projection.HouseBankAccount = _HouseBankAccount.HouseBankAccount
{


      @Consumption.valueHelpDefinition: [
      { entity:  { name   : 'I_CompanyCodeVH',
                   element: 'CompanyCode' }
       }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs      as CompanyCode,
      @ObjectModel.foreignKey.association : '_HouseBank'
  key hbkid      as HouseBank,
      @ObjectModel.foreignKey.association : '_HouseBankAccount'
  key hktid      as HouseBankAccount,
      @Consumption.valueHelpDefinition: [
      { entity:  { name   : 'I_EUElectronicDocPaymentMeanVH',
                 element: 'EU_EDocPaymentmeans' }
      }]
      paym_means as EU_EDocPaymentMeans,
      iban       as IBAN,
      _HouseBank,
      _HouseBankAccount,
      _CompanyCode

}
```
