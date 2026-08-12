---
name: I_LEDGERCOMPANYCODECRCYROLEVH
description: "Currency Roles for Ledger"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODECRCYROLEVH')/$value
semantic_en: "Currency Roles for Ledger"
semantic_vi: "Currency Roles for Ledger — CDS view giao diện dựa trên I_LedgerCompanyCodeCrcyRoles."
keywords:
  - "currency"
  - "roles"
  - "for"
  - "ledger"
  - "company"
  - "code"
  - "role"
  - "name"
tags:
  - FI
  - component:FI-GL-GL-A-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-A
  - FI-GL-GL-A-2CL
  - interface-view
  - lob:finance
---
# I_LEDGERCOMPANYCODECRCYROLEVH

**Currency Roles for Ledger**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODECRCYROLEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeCurrencyRole` |  | |  |  | `CHAR(2)` | Company Code Currency Role |
| `CompanyCodeCurrencyRoleName` |  | |  | `_CompCoCurrencyRole._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName` | `CHAR(60)` | Currency Role Name |
| `CompanyCodeCurrency` |  | |  | `cast( _CompCoCurrencyRole.Currency as fis_hwaer preserving type)` | `CUKY(5)` | Company Code Currency |
| `GlobalCurrencyRole` |  | |  |  | `CHAR(2)` | Global Currency Role |
| `GlobalCurrencyRoleName` |  | |  | `cast( _GlobalCurrencyRole._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_gc_currole_name )` | `CHAR(60)` | Global Currency Role Name |
| `GlobalCurrency` |  | |  | `cast( _GlobalCurrencyRole.Currency as fis_rkcur preserving type)` | `CUKY(5)` | Global Currency |
| `FreeDefinedCurrency1Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 1 Role  (Currency Type) |
| `FreeDefinedCurrency1RoleName` |  | |  | `cast( _CurrencyRole1._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc1_currole_name )` | `CHAR(60)` | Freely Defined Currency 1 Role Name |
| `FreeDefinedCurrency1` |  | |  | `cast( _CurrencyRole1.Currency as fis_rocur preserving type)` | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 2 Role  (Currency Type) |
| `FreeDefinedCurrency2RoleName` |  | |  | `cast( _CurrencyRole2._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc2_currole_name )` | `CHAR(60)` | Freely Defined Currency 2 Role Name |
| `FreeDefinedCurrency2` |  | |  | `cast( _CurrencyRole2.Currency as fis_rvcur preserving type)` | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 3 Role  (Currency Type) |
| `FreeDefinedCurrency3RoleName` |  | |  | `cast( _CurrencyRole3._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc3_currole_name )` | `CHAR(60)` | Freely Defined Currency 3 Role Name |
| `FreeDefinedCurrency3` |  | |  | `cast( _CurrencyRole3.Currency as fins_curr3 preserving type)` | `CUKY(5)` | Freely Defined Currency 3 |
| `FreeDefinedCurrency4Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 4 Role  (Currency Type) |
| `FreeDefinedCurrency4RoleName` |  | |  | `cast( _CurrencyRole4._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc4_currole_name )` | `CHAR(60)` | Freely Defined Currency 4 Role Name |
| `FreeDefinedCurrency4` |  | |  | `cast( _CurrencyRole4.Currency as fins_curr4 preserving type)` | `CUKY(5)` | Freely Defined Currency 4 |
| `FreeDefinedCurrency5Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 5 Role  (Currency Type) |
| `FreeDefinedCurrency5RoleName` |  | |  | `cast( _CurrencyRole5._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc5_currole_name )` | `CHAR(60)` | Freely Defined Currency 5 Role Name |
| `FreeDefinedCurrency5` |  | |  | `cast( _CurrencyRole5.Currency as fins_curr5 preserving type)` | `CUKY(5)` | Freely Defined Currency 5 |
| `FreeDefinedCurrency6Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 6 Role  (Currency Type) |
| `FreeDefinedCurrency6RoleName` |  | |  | `cast( _CurrencyRole6._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc6_currole_name )` | `CHAR(60)` | Freely Defined Currency 6 Role Name |
| `FreeDefinedCurrency6` |  | |  | `cast( _CurrencyRole6.Currency as fins_curr6 preserving type)` | `CUKY(5)` | Freely Defined Currency 6 |
| `FreeDefinedCurrency7Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 7 Role  (Currency Type) |
| `FreeDefinedCurrency7RoleName` |  | |  | `cast( _CurrencyRole7._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc7_currole_name )` | `CHAR(60)` | Freely Defined Currency 7 Role Name |
| `FreeDefinedCurrency7` |  | |  | `cast( _CurrencyRole7.Currency as fis_rfcur preserving type)` | `CUKY(5)` | Freely Defined Currency 7 |
| `FreeDefinedCurrency8Role` |  | |  |  | `CHAR(2)` | Freely Defined Currency 8 Role  (Currency Type) |
| `FreeDefinedCurrency8RoleName` |  | |  | `cast( _CurrencyRole8._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc8_currole_name )` | `CHAR(60)` | Freely Defined Currency 8 Role Name |
| `FreeDefinedCurrency8` |  | |  | `cast( _CurrencyRole8.Currency as fins_curr8 preserving type)` | `CUKY(5)` | Freely Defined Currency 8 |
| `FunctionalCurrencyRole` |  | |  |  | `CHAR(2)` | Functional Currency Role (Currency Type) |
| `FunctionalCurrencyRoleName` |  | |  | `cast( _FunctionalCrcyRoleCurrency._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_functional_currolename )` | `CHAR(60)` | Functional Currency Role Name |
| `FunctionalCurrency` |  | |  | `cast( _FunctionalCrcyRoleCurrency.Currency as fins_currfc preserving type)` | `CUKY(5)` | Functional Currency |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_CompCoCurrencyRole` | | ✓ | | | | |
| `_GlobalCurrencyRole` | | ✓ | | | | |
| `_CurrencyRole1` | | ✓ | | | | |
| `_CurrencyRole2` | | ✓ | | | | |
| `_CurrencyRole3` | | ✓ | | | | |
| `_CurrencyRole4` | | ✓ | | | | |
| `_CurrencyRole5` | | ✓ | | | | |
| `_CurrencyRole6` | | ✓ | | | | |
| `_CurrencyRole7` | | ✓ | | | | |
| `_CurrencyRole8` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_CompCoCurrencyRole` | `I_Companycodecurrencyrole` | [0..1] |
| `_GlobalCurrencyRole` | `I_Companycodecurrencyrole` | [0..1] |
| `_CurrencyRole1` | `I_Companycodecurrencyrole` | [0..1] |
| `_CurrencyRole2` | `I_Companycodecurrencyrole` | [0..1] |
| `_CurrencyRole3` | `I_Companycodecurrencyrole` | [0..1] |
| `_CurrencyRole4` | `I_Companycodecurrencyrole` | [0..1] |
| `_CurrencyRole5` | `I_Companycodecurrencyrole` | [0..1] |
| `_CurrencyRole6` | `I_Companycodecurrencyrole` | [0..1] |
| `_CurrencyRole7` | `I_Companycodecurrencyrole` | [0..1] |
| `_CurrencyRole8` | `I_Companycodecurrencyrole` | [0..1] |
| `_FunctionalCrcyRoleCurrency` | `I_Companycodecurrencyrole` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODECRCYROLEVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LEDGERCOMPANYCODECRCYROLEVH')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Currency Roles for Ledger'
@Analytics: {dataCategory: #DIMENSION}
@Analytics.technicalName: 'IFIRLDNRCCCURVH'
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'CompanyCode'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #C
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

define view entity I_LedgerCompanyCodeCrcyRoleVH
  as select from I_LedgerCompanyCodeCrcyRoles as I_LedgerCompanyCodeCrcyRoles

  association [0..1] to I_CompanyCode             as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Ledger                  as _Ledger                 on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_Companycodecurrencyrole as _CompCoCurrencyRole     on  $projection.CompanyCodeCurrencyRole = _CompCoCurrencyRole.CurrencyRole
                                                                             and $projection.CompanyCode             = _CompCoCurrencyRole.CompanyCode
  association [0..1] to I_Companycodecurrencyrole as _GlobalCurrencyRole     on  $projection.GlobalCurrencyRole = _GlobalCurrencyRole.CurrencyRole
                                                                             and $projection.CompanyCode        = _GlobalCurrencyRole.CompanyCode
  association [0..1] to I_Companycodecurrencyrole as _CurrencyRole1          on  $projection.FreeDefinedCurrency1Role = _CurrencyRole1.CurrencyRole
                                                                             and $projection.CompanyCode              = _CurrencyRole1.CompanyCode
  association [0..1] to I_Companycodecurrencyrole as _CurrencyRole2          on  $projection.FreeDefinedCurrency2Role = _CurrencyRole2.CurrencyRole
                                                                             and $projection.CompanyCode              = _CurrencyRole2.CompanyCode
  association [0..1] to I_Companycodecurrencyrole as _CurrencyRole3          on  $projection.FreeDefinedCurrency3Role = _CurrencyRole3.CurrencyRole
                                                                             and $projection.CompanyCode              = _CurrencyRole3.CompanyCode
  association [0..1] to I_Companycodecurrencyrole as _CurrencyRole4          on  $projection.FreeDefinedCurrency4Role = _CurrencyRole4.CurrencyRole
                                                                             and $projection.CompanyCode              = _CurrencyRole4.CompanyCode
  association [0..1] to I_Companycodecurrencyrole as _CurrencyRole5          on  $projection.FreeDefinedCurrency5Role = _CurrencyRole5.CurrencyRole
                                                                             and $projection.CompanyCode              = _CurrencyRole5.CompanyCode
  association [0..1] to I_Companycodecurrencyrole as _CurrencyRole6          on  $projection.FreeDefinedCurrency6Role = _CurrencyRole6.CurrencyRole
                                                                             and $projection.CompanyCode              = _CurrencyRole6.CompanyCode
  association [0..1] to I_Companycodecurrencyrole as _CurrencyRole7          on  $projection.FreeDefinedCurrency7Role = _CurrencyRole7.CurrencyRole
                                                                             and $projection.CompanyCode              = _CurrencyRole7.CompanyCode
  association [0..1] to I_Companycodecurrencyrole as _CurrencyRole8          on  $projection.FreeDefinedCurrency8Role = _CurrencyRole8.CurrencyRole
                                                                             and $projection.CompanyCode              = _CurrencyRole8.CompanyCode
  association [0..1] to I_Companycodecurrencyrole as _FunctionalCrcyRoleCurrency on  $projection.FunctionalCurrencyRole  = _FunctionalCrcyRoleCurrency.CurrencyRole
                                                                                 and $projection.CompanyCode             = _FunctionalCrcyRoleCurrency.CompanyCode
{

      @ObjectModel.foreignKey.association: '_Ledger'
  key I_LedgerCompanyCodeCrcyRoles.Ledger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key I_LedgerCompanyCodeCrcyRoles.CompanyCode,

      I_LedgerCompanyCodeCrcyRoles.CompanyCodeCurrencyRole,
      _CompCoCurrencyRole._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName                                as CompanyCodeCurrencyRoleName,
      cast( _CompCoCurrencyRole.Currency as fis_hwaer preserving type)                                                               as CompanyCodeCurrency,
      //_CompanyCode._Currency._Text[1:Language = $session.system_language].CurrencyName as CompanyCodeCurrencyName,

      I_LedgerCompanyCodeCrcyRoles.GlobalCurrencyRole,
      cast( _GlobalCurrencyRole._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_gc_currole_name ) as GlobalCurrencyRoleName,
      cast( _GlobalCurrencyRole.Currency as fis_rkcur preserving type)                                                               as GlobalCurrency,
      //_GlobalCurrencyRole._Currency._Text[1:Language = $session.system_language].CurrencyName as GlobalCurrencyName,

      I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency1Role,
      cast( _CurrencyRole1._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc1_currole_name )    as FreeDefinedCurrency1RoleName,
      cast( _CurrencyRole1.Currency as fis_rocur preserving type)                                                                    as FreeDefinedCurrency1,
      //_CurrencyRole1._Currency._Text[1:Language = $session.system_language].CurrencyName as FreeDefinedCurrency1Name,

      I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency2Role,
      cast( _CurrencyRole2._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc2_currole_name )    as FreeDefinedCurrency2RoleName,
      cast( _CurrencyRole2.Currency as fis_rvcur preserving type)                                                                    as FreeDefinedCurrency2,
      //_CurrencyRole2._Currency._Text[1:Language = $session.system_language].CurrencyName as FreeDefinedCurrency2Name,

      I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency3Role,
      cast( _CurrencyRole3._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc3_currole_name )    as FreeDefinedCurrency3RoleName,
      cast( _CurrencyRole3.Currency as fins_curr3 preserving type)                                                                   as FreeDefinedCurrency3,
      //_CurrencyRole3._Currency._Text[1:Language = $session.system_language].CurrencyName as FreeDefinedCurrency3Name,

      I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency4Role,
      cast( _CurrencyRole4._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc4_currole_name )    as FreeDefinedCurrency4RoleName,
      cast( _CurrencyRole4.Currency as fins_curr4 preserving type)                                                                   as FreeDefinedCurrency4,
      //_CurrencyRole4._Currency._Text[1:Language = $session.system_language].CurrencyName as FreeDefinedCurrency4Name,

      I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency5Role,
      cast( _CurrencyRole5._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc5_currole_name )    as FreeDefinedCurrency5RoleName,
      cast( _CurrencyRole5.Currency as fins_curr5 preserving type)                                                                   as FreeDefinedCurrency5,
      //_CurrencyRole5._Currency._Text[1:Language = $session.system_language].CurrencyName as FreeDefinedCurrency5Name,

      I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency6Role,
      cast( _CurrencyRole6._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc6_currole_name )    as FreeDefinedCurrency6RoleName,
      cast( _CurrencyRole6.Currency as fins_curr6 preserving type)                                                                   as FreeDefinedCurrency6,
      //_CurrencyRole6._Currency._Text[1:Language = $session.system_language].CurrencyName as FreeDefinedCurrency6Name,

      I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency7Role,
      cast( _CurrencyRole7._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc7_currole_name )    as FreeDefinedCurrency7RoleName,
      cast( _CurrencyRole7.Currency as fis_rfcur preserving type)                                                                    as FreeDefinedCurrency7,
      //_CurrencyRole7._Currency._Text[1:Language = $session.system_language].CurrencyName as FreeDefinedCurrency7Name,

      I_LedgerCompanyCodeCrcyRoles.FreeDefinedCurrency8Role,
      cast( _CurrencyRole8._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_fdc8_currole_name )    as FreeDefinedCurrency8RoleName,
      cast( _CurrencyRole8.Currency as fins_curr8 preserving type)                                                                   as FreeDefinedCurrency8,
      //_CurrencyRole8._Currency._Text[1:Language = $session.system_language].CurrencyName as FreeDefinedCurrency8Name,

      I_LedgerCompanyCodeCrcyRoles.FunctionalCurrencyRole,
      cast( _FunctionalCrcyRoleCurrency._CurrencyRole._Text[1:Language = $session.system_language].CurrencyRoleName as fis_functional_currolename ) as FunctionalCurrencyRoleName,
      cast( _FunctionalCrcyRoleCurrency.Currency as fins_currfc preserving type)                                                                    as FunctionalCurrency,      

      _Ledger,
      _CompanyCode,
      _CompCoCurrencyRole,
      _GlobalCurrencyRole,
      _CurrencyRole1,
      _CurrencyRole2,
      _CurrencyRole3,
      _CurrencyRole4,
      _CurrencyRole5,
      _CurrencyRole6,
      _CurrencyRole7,
      _CurrencyRole8

}
```
