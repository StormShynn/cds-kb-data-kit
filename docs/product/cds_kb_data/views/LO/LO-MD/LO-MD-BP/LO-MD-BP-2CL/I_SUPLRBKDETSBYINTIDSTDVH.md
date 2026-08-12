---
name: I_SUPLRBKDETSBYINTIDSTDVH
description: "Suplrbkdetsbyintidstdvh"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - value-help
  - standard-value-help
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_SUPLRBKDETSBYINTIDSTDVH

**Suplrbkdetsbyintidstdvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  |  |  |  |
| `BPBankAccountInternalID` | ✓ | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `BankCountry` |  | |  |  |  |  |
| `_Supplier` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:005:GFBfhyK17kY1cdxbOc1sYG
@AbapCatalog.sqlViewName: 'ISBDBII__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BPBankAccountInternalID'

@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@ObjectModel.modelingPattern:#NONE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK
//<TODO> Please double-check personal data blocking
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Supplier Bank Details by Internal ID'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_SuplrBkDetsByIntIdStdVH as select from I_SuplrBankDetailsByIntId {
  @ObjectModel.foreignKey.association: '_Supplier'
  key Supplier,
  key BPBankAccountInternalID,

  @Consumption.hidden: true
  AuthorizationGroup,
  @Consumption.hidden: true
  BankCountry,

  @Consumption.hidden: true
  _Supplier
  
}
// <TODO> Please check above listed ToDo(s)!
```
