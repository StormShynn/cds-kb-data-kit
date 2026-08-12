---
name: I_OFFSETTINGACCOUNTSTDVH
description: "Offsetting Account"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OFFSETTINGACCOUNTSTDVH')/$value
semantic_en: "Offsetting Account"
semantic_vi: "Offsetting Account — CDS view giao diện dựa trên I_OffsettingAccount."
keywords:
  - "offsetting"
  - "account"
  - "chart"
  - "accounts"
  - "type"
  - "name"
  - "short"
tags:
  - FI
  - account
  - component:FI-GL-GL-N-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-N
  - FI-GL-GL-N-2CL
  - interface-view
  - lob:finance
---
# I_OFFSETTINGACCOUNTSTDVH

**Offsetting Account**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OFFSETTINGACCOUNTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  |  | `CHAR(4)` | Chart of Accounts |
| `OffsettingAccountType` | ✓ | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OffsettingAccount` | ✓ | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountName` |  | |  |  | `CHAR(80)` | Name of Offsetting Account |
| `OffsettingAccountShortName` |  | |  |  | `CHAR(35)` | Short Name of Offsetting Account |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OFFSETTINGACCOUNTSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OFFSETTINGACCOUNTSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'OffsettingAccount',
                usageType.sizeCategory: #XL,
                usageType.dataClass: #MASTER,
                usageType.serviceQuality: #C,
                supportedCapabilities: [#VALUE_HELP_PROVIDER],
                modelingPattern: #VALUE_HELP_PROVIDER }
@Analytics.technicalName: 'IFIIOA__VH'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true
@EndUserText.label: 'Offsetting Account'
@Consumption.dbHints:  ['USE_HEX_PLAN']                      

define view entity I_OffsettingAccountStdVH as select from I_OffsettingAccount as I_OffsettingAccount {
  @UI.lineItem: [{position: 30 }]
  @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key I_OffsettingAccount.ChartOfAccounts,
  @UI.lineItem: [{position: 20 }]
  @ObjectModel.foreignKey.association: '_OffsettingAccountType'
  key I_OffsettingAccount.OffsettingAccountType,
  @ObjectModel.text.element: ['OffsettingAccountShortName']
  @Search.defaultSearchElement: true
//  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  @UI.lineItem: [{position: 10 }]
  key I_OffsettingAccount.OffsettingAccount,
//  @UI.hidden: true
  
 
  @UI.hidden: true
  @Semantics.text: true
  I_OffsettingAccount.OffsettingAccountName,
  @UI.lineItem: [{position: 40 }]
  @Semantics.text: true
//  @Consumption.hidden: true
  @Search: { defaultSearchElement: true, ranking: #LOW }
  I_OffsettingAccount.OffsettingAccountShortName,
  

  @Consumption.hidden: true
  I_OffsettingAccount._ChartOfAccounts,
  @Consumption.hidden: true
  I_OffsettingAccount._OffsettingAccountType,
  @Consumption.hidden: true
  I_OffsettingAccount._Customer,
  @Consumption.hidden: true
  I_OffsettingAccount._Supplier
}
```
