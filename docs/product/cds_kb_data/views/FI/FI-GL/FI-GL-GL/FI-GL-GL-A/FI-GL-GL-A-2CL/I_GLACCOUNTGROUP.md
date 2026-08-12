---
name: I_GLACCOUNTGROUP
description: "GL AccountGROUP"
app_component: FI-GL-GL-A-2CL
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
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - gl-account
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_GLACCOUNTGROUP

**GL AccountGROUP**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
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
| `ChartOfAccounts` | ✓ | |  | `ktopl` |  |  |
| `GLAccountGroup` | ✓ | |  | `ktoks` |  |  |
| `_GLAccountGroupText` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccountsText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GLAccountGroupText` | `I_GLAccountGroupText` | [0..*] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [1] |
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IGLACCTGRP'
@EndUserText.label: 'General Ledger Account Group'
@Analytics: {
  dataCategory: #DIMENSION
  //dataExtraction.enabled: true
}
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'GLAccountGroup'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 1
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
@Search.searchable: true
define view I_GLAccountGroup
  as select from t077s
  association [0..*] to I_GLAccountGroupText  as _GLAccountGroupText  on  $projection.ChartOfAccounts = _GLAccountGroupText.ChartOfAccounts
                                                                      and $projection.GLAccountGroup  = _GLAccountGroupText.GLAccountGroup

  association [1]    to I_ChartOfAccounts     as _ChartOfAccounts     on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..*] to I_ChartOfAccountsText as _ChartOfAccountsText on  $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
{

      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ChartOfAccountsStdVH',
                     element: 'ChartOfAccounts' }
        }]
      // ]--GENERATED
      @ObjectModel.text.association: '_ChartOfAccountsText'
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      @Search.defaultSearchElement: true
  key ktopl as ChartOfAccounts,
      @ObjectModel.text.association: '_GLAccountGroupText'
      @Search.defaultSearchElement: true
  key ktoks as GLAccountGroup,
      _ChartOfAccountsText,
      _GLAccountGroupText,
      _ChartOfAccounts

}
```
