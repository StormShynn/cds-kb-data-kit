---
name: I_CABANKCLEARINGACCOUNT
description: "Bank Clearing Account"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABANKCLEARINGACCOUNT')/$value
semantic_en: "Bank Clearing Account"
semantic_vi: "Bank Clearing Account — CDS view giao diện dựa trên tfk012."
keywords:
  - "bank"
  - "clearing"
  - "account"
  - "company"
  - "code"
  - "house"
  - "clrg"
  - "acct"
  - "payment"
tags:
  - FI
  - account
  - component:FI-CA-2CL
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
---
# I_CABANKCLEARINGACCOUNT

**Bank Clearing Account**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABANKCLEARINGACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `CABankClearingAccount` | ✓ | |  | `bvrko` | `CHAR(10)` | Bank clearing account |
| `HouseBank` |  | |  | `hbkid` | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` |  | |  | `hktid` | `CHAR(5)` | ID for Account Details |
| `CAIsBankClrgAcctForPaymentLot` |  | |  | `xbvrzs` | `CHAR(1)` | Bank Clearing Account Valid for Payment Lot |
| `ChartOfAccounts` |  | | `_CompCode` | `ChartOfAccounts` |  |  |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CompCode` | `I_CompanyCode` | [1..1] |
| `_HouseBank` | `I_Housebank` | [1..1] |
| `_GLAccount` | `I_GLAccountInChartOfAccounts` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABANKCLEARINGACCOUNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABANKCLEARINGACCOUNT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Bank Clearing Account'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CABankClearingAccount',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABankClearingAccount
  as select from tfk012

  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [1..1] to I_CompanyCode                as _CompCode        on  $projection.CompanyCode = _CompCode.CompanyCode
  association [1..1] to I_Housebank                  as _HouseBank       on  $projection.CompanyCode = _HouseBank.CompanyCode
                                                                         and $projection.HouseBank   = _HouseBank.HouseBank
  association [1..1] to I_GLAccountInChartOfAccounts as _GLAccount       on  $projection.ChartOfAccounts       = _GLAccount.ChartOfAccounts
                                                                         and $projection.CABankClearingAccount = _GLAccount.GLAccount


{
      @ObjectModel.foreignKey.association: '_CompCode'
  key bukrs                     as CompanyCode,
  key bvrko                     as CABankClearingAccount,

      @ObjectModel.foreignKey.association: '_HouseBank'
      hbkid                     as HouseBank,
      hktid                     as HouseBankAccount,

      xbvrzs                    as CAIsBankClrgAcctForPaymentLot,

      /* currently not available
      gpark,
      xbvrrl,
      xbvrss,
      xbvrcr,
      xbvzau
      xbvrol,
      xbvrvt,
      xbvrpdc
       */

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      _CompCode.ChartOfAccounts as ChartOfAccounts,

      _ChartOfAccounts,
      _CompCode,
      _GLAccount,
      _HouseBank
}
```
