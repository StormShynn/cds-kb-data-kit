---
name: I_SUPLRBANKDETAILSBYINTID
description: "Suplrbankdetailsbyintid"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - bank
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Bank
---
# I_SUPLRBANKDETAILSBYINTID

**Suplrbankdetailsbyintid**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  | `lifnr` |  |  |
| `BPBankAccountInternalID` | ✓ | |  | `bvtyp` |  |  |
| `BankCountry` |  | |  | `banks` |  |  |
| `Bank` |  | |  | `bankl` |  |  |
| `BankAccount` |  | |  | `bankn` |  |  |
| `BankAccountHolderName` |  | |  | `koinh` |  |  |
| `BankControlKey` |  | |  | `bkont` |  |  |
| `AuthorizationGroup` |  | | `_Supplier` | `AuthorizationGroup` |  |  |
| `_Bank` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_BankAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Bank` | `I_Bank` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_BankAccount` | `I_BankAccount` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Supplier Bank Details by Internal ID' //same as DDL description
@Analytics.dataCategory: #DIMENSION //or #CUBE or #FACT
@VDM.viewType: #BASIC
@ClientHandling.algorithm : #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.sqlViewName: 'ISUPLRBANKINTID' //must start with "I"
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION                                     
@ObjectModel.representativeKey: 'BPBankAccountInternalID'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_SuplrBankDetailsByIntId //must start with "I_"; same as DDL source name in upper-camelcase notation
  as select from lfbk


  association [1..1] to I_Bank        as _Bank        on  $projection.BankCountry = _Bank.BankCountry
                                                      and $projection.Bank        = _Bank.BankInternalID

  association [1..1] to I_Supplier    as _Supplier    on  $projection.Supplier = _Supplier.Supplier

  association [1..1] to I_Country     as _Country     on  $projection.BankCountry = _Country.Country

  association [1..1] to I_BankAccount as _BankAccount on  $projection.BankAccount = _BankAccount.BankAccountInternalID //Added to remove representative key ATC, DO NOT USE

{

      @ObjectModel.foreignKey.association: '_Supplier'
  key lifnr           as Supplier,
  key bvtyp           as BPBankAccountInternalID,
      @ObjectModel.foreignKey.association: '_Country'
      banks           as BankCountry,
      @ObjectModel.foreignKey.association: '_Bank'
      bankl           as Bank,
      @ObjectModel.foreignKey.association: '_BankAccount'
      bankn           as BankAccount,
      koinh           as BankAccountHolderName,
      bkont           as BankControlKey,
      _Bank,
      _Country,
      _Supplier.AuthorizationGroup,
      _Supplier,     
      _BankAccount
      
}
```
