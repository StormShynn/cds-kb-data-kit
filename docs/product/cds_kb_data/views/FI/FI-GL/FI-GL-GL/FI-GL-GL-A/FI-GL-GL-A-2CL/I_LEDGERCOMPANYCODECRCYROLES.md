---
name: I_LEDGERCOMPANYCODECRCYROLES
description: "LEDGERCompany CodeCRCYROLES"
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
  - company-code
  - component:FI-GL-GL-A-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_LEDGERCOMPANYCODECRCYROLES

**LEDGERCompany CodeCRCYROLES**

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
| `Ledger` | ✓ | |  | `rldnr` |  |  |
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `FiscalYearVariant` |  | |  | `periv` |  |  |
| `CompanyCodeCurrencyRole` |  | |  | `cast(finsc_ld_cmp.curtph as fis_cc_currole preserving type )` |  |  |
| `GlobalCurrencyRole` |  | |  | `cast(finsc_ld_cmp.curtpk as fis_gc_currole preserving type )` |  |  |
| `FreeDefinedCurrency1Role` |  | |  | `cast(finsc_ld_cmp.curtpo as fis_fdc1_currole preserving type )` |  |  |
| `FreeDefinedCurrency2Role` |  | |  | `cast(finsc_ld_cmp.curtpv as fis_fdc2_currole preserving type )` |  |  |
| `FreeDefinedCurrency3Role` |  | |  | `cast(finsc_ld_cmp.curtpb as fis_fdc3_currole preserving type )` |  |  |
| `FreeDefinedCurrency4Role` |  | |  | `cast(finsc_ld_cmp.curtpc as fis_fdc4_currole preserving type )` |  |  |
| `FreeDefinedCurrency5Role` |  | |  | `cast(finsc_ld_cmp.curtpd as fis_fdc5_currole preserving type )` |  |  |
| `FreeDefinedCurrency6Role` |  | |  | `cast(finsc_ld_cmp.curtpe as fis_fdc6_currole preserving type )` |  |  |
| `FreeDefinedCurrency7Role` |  | |  | `cast(finsc_ld_cmp.curtpf as fis_fdc7_currole preserving type )` |  |  |
| `FreeDefinedCurrency8Role` |  | |  | `cast(finsc_ld_cmp.curtpg as fis_fdc8_currole preserving type )` |  |  |
| `AccountingPrinciple` |  | |  | `cast(finsc_ld_cmp.acc_principle as accounting_principle preserving type)` |  |  |
| `FunctionalCurrencyRole` |  | |  | `cast( case when finsc_ld_cmp.functional_currency <> ' ' then finsc_ld_cmp.functional_currency else finsc_ld_cmp.curtph end as fis_functional_currole )` |  |  |
| `AdditionalCurrency1Field` |  | |  | `cast ( case when finsc_ld_cmp.curposk = '2' then 'GC' when finsc_ld_cmp.curposo = '2' then 'FDC1' when finsc_ld_cmp.curposv = '2' then 'FDC2' when finsc_ld_cmp.curposb = '2' then 'FDC3' when finsc_ld_cmp.curposc = '2' then 'FDC4' when finsc_ld_cmp.curposd = '2' then 'FDC5' when finsc_ld_cmp.curpose = '2' then 'FDC6' when finsc_ld_cmp.curposf = '2' then 'FDC7' when finsc_ld_cmp.curposg = '2' then 'FDC8' else '' end as fis_addl1_crcy_field )` |  |  |
| `AdditionalCurrency2Field` |  | |  | `cast ( case when finsc_ld_cmp.curposk = '3' then 'GC' when finsc_ld_cmp.curposo = '3' then 'FDC1' when finsc_ld_cmp.curposv = '3' then 'FDC2' when finsc_ld_cmp.curposb = '3' then 'FDC3' when finsc_ld_cmp.curposc = '3' then 'FDC4' when finsc_ld_cmp.curposd = '3' then 'FDC5' when finsc_ld_cmp.curpose = '3' then 'FDC6' when finsc_ld_cmp.curposf = '3' then 'FDC7' when finsc_ld_cmp.curposg = '3' then 'FDC8' else '' end as fis_addl2_crcy_field )` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_CompanyCodeCurrencyRole` | | ✓ | | | | |
| `_GlobalCurrencyRole` | | ✓ | | | | |
| `_FreeDefinedCurrency1Role` | | ✓ | | | | |
| `_FreeDefinedCurrency2Role` | | ✓ | | | | |
| `_FreeDefinedCurrency3Role` | | ✓ | | | | |
| `_FreeDefinedCurrency4Role` | | ✓ | | | | |
| `_FreeDefinedCurrency5Role` | | ✓ | | | | |
| `_FreeDefinedCurrency6Role` | | ✓ | | | | |
| `_FreeDefinedCurrency7Role` | | ✓ | | | | |
| `_FreeDefinedCurrency8Role` | | ✓ | | | | |
| `_FunctionalCurrencyRole` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |
| `_CoCodeCurrencyRoleCurrency` | | ✓ | | | | |
| `_GlobalCurrencyRoleCurrency` | | ✓ | | | | |
| `_FreeDfndCrcyRole1Currency` | | ✓ | | | | |
| `_FreeDfndCrcyRole2Currency` | | ✓ | | | | |
| `_FreeDfndCrcyRole3Currency` | | ✓ | | | | |
| `_FreeDfndCrcyRole4Currency` | | ✓ | | | | |
| `_FreeDfndCrcyRole5Currency` | | ✓ | | | | |
| `_FreeDfndCrcyRole6Currency` | | ✓ | | | | |
| `_FreeDfndCrcyRole7Currency` | | ✓ | | | | |
| `_FreeDfndCrcyRole8Currency` | | ✓ | | | | |
| `_FunctionalCrcyRoleCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_CompanyCodeCurrencyRole` | `I_CurrencyRole` | [0..1] |
| `_GlobalCurrencyRole` | `I_CurrencyRole` | [0..1] |
| `_FreeDefinedCurrency1Role` | `I_CurrencyRole` | [0..1] |
| `_FreeDefinedCurrency2Role` | `I_CurrencyRole` | [0..1] |
| `_FreeDefinedCurrency3Role` | `I_CurrencyRole` | [0..1] |
| `_FreeDefinedCurrency4Role` | `I_CurrencyRole` | [0..1] |
| `_FreeDefinedCurrency5Role` | `I_CurrencyRole` | [0..1] |
| `_FreeDefinedCurrency6Role` | `I_CurrencyRole` | [0..1] |
| `_FreeDefinedCurrency7Role` | `I_CurrencyRole` | [0..1] |
| `_FreeDefinedCurrency8Role` | `I_CurrencyRole` | [0..1] |
| `_FunctionalCurrencyRole` | `I_CurrencyRole` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [0..1] |
| `_CoCodeCurrencyRoleCurrency` | `I_Companycodecurrencyrole` | [0..1] |
| `_GlobalCurrencyRoleCurrency` | `I_Companycodecurrencyrole` | [0..1] |
| `_FreeDfndCrcyRole1Currency` | `I_Companycodecurrencyrole` | [0..1] |
| `_FreeDfndCrcyRole2Currency` | `I_Companycodecurrencyrole` | [0..1] |
| `_FreeDfndCrcyRole3Currency` | `I_Companycodecurrencyrole` | [0..1] |
| `_FreeDfndCrcyRole4Currency` | `I_Companycodecurrencyrole` | [0..1] |
| `_FreeDfndCrcyRole5Currency` | `I_Companycodecurrencyrole` | [0..1] |
| `_FreeDfndCrcyRole6Currency` | `I_Companycodecurrencyrole` | [0..1] |
| `_FreeDfndCrcyRole7Currency` | `I_Companycodecurrencyrole` | [0..1] |
| `_FreeDfndCrcyRole8Currency` | `I_Companycodecurrencyrole` | [0..1] |
| `_FunctionalCrcyRoleCurrency` | `I_Companycodecurrencyrole` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'ILDGRCOMPCOCR',
                compiler.compareFilter: true,
                preserveKey: true,
                buffering.status: #NOT_ALLOWED }   
@AccessControl.authorizationCheck: #CHECK
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC
      
@ObjectModel: {usageType.sizeCategory: #S,
               usageType.dataClass:  #MASTER,
               usageType.serviceQuality: #A,
               representativeKey: 'CompanyCode',
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_DIMENSION,
                sapObjectNodeType.name: 'LedgerCompanyCodeCurrencyRoles'  }                      
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true  
@EndUserText.label: 'Currency Roles for Ledger'
@Metadata.allowExtensions:true

define view I_LedgerCompanyCodeCrcyRoles as select from finsc_ld_cmp

association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
association [0..1] to I_Ledger as _Ledger   on $projection.Ledger = _Ledger.Ledger  
association [0..1] to I_CurrencyRole        as _CompanyCodeCurrencyRole  on $projection.CompanyCodeCurrencyRole  = _CompanyCodeCurrencyRole.CurrencyRole
association [0..1] to I_CurrencyRole        as _GlobalCurrencyRole       on $projection.GlobalCurrencyRole       = _GlobalCurrencyRole.CurrencyRole
association [0..1] to I_CurrencyRole        as _FreeDefinedCurrency1Role on $projection.FreeDefinedCurrency1Role = _FreeDefinedCurrency1Role.CurrencyRole
association [0..1] to I_CurrencyRole        as _FreeDefinedCurrency2Role on $projection.FreeDefinedCurrency2Role = _FreeDefinedCurrency2Role.CurrencyRole
association [0..1] to I_CurrencyRole        as _FreeDefinedCurrency3Role on $projection.FreeDefinedCurrency3Role = _FreeDefinedCurrency3Role.CurrencyRole
association [0..1] to I_CurrencyRole        as _FreeDefinedCurrency4Role on $projection.FreeDefinedCurrency4Role = _FreeDefinedCurrency4Role.CurrencyRole
association [0..1] to I_CurrencyRole        as _FreeDefinedCurrency5Role on $projection.FreeDefinedCurrency5Role = _FreeDefinedCurrency5Role.CurrencyRole
association [0..1] to I_CurrencyRole        as _FreeDefinedCurrency6Role on $projection.FreeDefinedCurrency6Role = _FreeDefinedCurrency6Role.CurrencyRole
association [0..1] to I_CurrencyRole        as _FreeDefinedCurrency7Role on $projection.FreeDefinedCurrency7Role = _FreeDefinedCurrency7Role.CurrencyRole
association [0..1] to I_CurrencyRole        as _FreeDefinedCurrency8Role on $projection.FreeDefinedCurrency8Role = _FreeDefinedCurrency8Role.CurrencyRole
association [0..1] to I_CurrencyRole        as _FunctionalCurrencyRole   on $projection.FunctionalCurrencyRole   = _FunctionalCurrencyRole.CurrencyRole
association [0..1] to I_FiscalYearVariant   as _FiscalYearVariant        on $projection.FiscalYearVariant        = _FiscalYearVariant.FiscalYearVariant
association [0..1] to I_AccountingPrinciple as _AccountingPrinciple      on $projection.AccountingPrinciple      = _AccountingPrinciple.AccountingPrinciple
association [0..1] to I_Companycodecurrencyrole as _CoCodeCurrencyRoleCurrency on  $projection.CompanyCodeCurrencyRole = _CoCodeCurrencyRoleCurrency.CurrencyRole
                                                                               and $projection.CompanyCode             = _CoCodeCurrencyRoleCurrency.CompanyCode
association [0..1] to I_Companycodecurrencyrole as _GlobalCurrencyRoleCurrency on  $projection.GlobalCurrencyRole = _GlobalCurrencyRoleCurrency.CurrencyRole
                                                                               and $projection.CompanyCode             = _GlobalCurrencyRoleCurrency.CompanyCode
association [0..1] to I_Companycodecurrencyrole as _FreeDfndCrcyRole1Currency on  $projection.FreeDefinedCurrency1Role = _FreeDfndCrcyRole1Currency.CurrencyRole
                                                                               and $projection.CompanyCode             = _FreeDfndCrcyRole1Currency.CompanyCode
association [0..1] to I_Companycodecurrencyrole as _FreeDfndCrcyRole2Currency on  $projection.FreeDefinedCurrency2Role = _FreeDfndCrcyRole2Currency.CurrencyRole
                                                                               and $projection.CompanyCode             = _FreeDfndCrcyRole2Currency.CompanyCode                                                                                                                                                                                                                                             
association [0..1] to I_Companycodecurrencyrole as _FreeDfndCrcyRole3Currency on  $projection.FreeDefinedCurrency3Role = _FreeDfndCrcyRole3Currency.CurrencyRole
                                                                               and $projection.CompanyCode             = _FreeDfndCrcyRole3Currency.CompanyCode
association [0..1] to I_Companycodecurrencyrole as _FreeDfndCrcyRole4Currency on  $projection.FreeDefinedCurrency4Role = _FreeDfndCrcyRole4Currency.CurrencyRole
                                                                               and $projection.CompanyCode             = _FreeDfndCrcyRole4Currency.CompanyCode
association [0..1] to I_Companycodecurrencyrole as _FreeDfndCrcyRole5Currency on  $projection.FreeDefinedCurrency5Role = _FreeDfndCrcyRole5Currency.CurrencyRole
                                                                               and $projection.CompanyCode             = _FreeDfndCrcyRole5Currency.CompanyCode
association [0..1] to I_Companycodecurrencyrole as _FreeDfndCrcyRole6Currency on  $projection.FreeDefinedCurrency6Role = _FreeDfndCrcyRole6Currency.CurrencyRole
                                                                               and $projection.CompanyCode             = _FreeDfndCrcyRole6Currency.CompanyCode
association [0..1] to I_Companycodecurrencyrole as _FreeDfndCrcyRole7Currency on  $projection.FreeDefinedCurrency7Role = _FreeDfndCrcyRole7Currency.CurrencyRole
                                                                               and $projection.CompanyCode             = _FreeDfndCrcyRole7Currency.CompanyCode                                                                                                                                                                                                                                             
association [0..1] to I_Companycodecurrencyrole as _FreeDfndCrcyRole8Currency on  $projection.FreeDefinedCurrency8Role = _FreeDfndCrcyRole8Currency.CurrencyRole
                                                                               and $projection.CompanyCode             = _FreeDfndCrcyRole8Currency.CompanyCode     
association [0..1] to I_Companycodecurrencyrole as _FunctionalCrcyRoleCurrency on  $projection.FunctionalCurrencyRole  = _FunctionalCrcyRoleCurrency.CurrencyRole
                                                                               and $projection.CompanyCode             = _FunctionalCrcyRoleCurrency.CompanyCode 
{
    
@ObjectModel.foreignKey.association: '_Ledger'
key finsc_ld_cmp.rldnr as Ledger,
@ObjectModel.foreignKey.association: '_CompanyCode'
key finsc_ld_cmp.bukrs as CompanyCode,

periv as FiscalYearVariant,

cast(finsc_ld_cmp.curtph as fis_cc_currole preserving type ) as CompanyCodeCurrencyRole,   
cast(finsc_ld_cmp.curtpk as fis_gc_currole preserving type ) as GlobalCurrencyRole,
// Free Defined Currency 1
cast(finsc_ld_cmp.curtpo as fis_fdc1_currole preserving type ) as FreeDefinedCurrency1Role,
// Free Defined Currency 2
cast(finsc_ld_cmp.curtpv as fis_fdc2_currole preserving type ) as FreeDefinedCurrency2Role,
// Free Defined Currency 3
cast(finsc_ld_cmp.curtpb as fis_fdc3_currole preserving type ) as FreeDefinedCurrency3Role,
// Free Defined Currency 4
cast(finsc_ld_cmp.curtpc as fis_fdc4_currole preserving type ) as FreeDefinedCurrency4Role,
// Free Defined Currency 5
cast(finsc_ld_cmp.curtpd as fis_fdc5_currole preserving type ) as FreeDefinedCurrency5Role,
// Free Defined Currency 6
cast(finsc_ld_cmp.curtpe as fis_fdc6_currole preserving type ) as FreeDefinedCurrency6Role,
// Free Defined Currency 7
cast(finsc_ld_cmp.curtpf as fis_fdc7_currole preserving type ) as FreeDefinedCurrency7Role,
// Free Defined Currency 8
cast(finsc_ld_cmp.curtpg as fis_fdc8_currole preserving type ) as FreeDefinedCurrency8Role,

@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_AccountingPrinciple'
cast(finsc_ld_cmp.acc_principle as accounting_principle preserving type) as AccountingPrinciple,

// cast(finsc_ld_cmp.functional_currency as fis_functional_currole preserving type ) as FunctionalCurrencyRole,
cast( case when finsc_ld_cmp.functional_currency <> '  ' then finsc_ld_cmp.functional_currency
                                                         else finsc_ld_cmp.curtph           
      end                                    
      as fis_functional_currole 
     ) as FunctionalCurrencyRole,
cast ( case when  finsc_ld_cmp.curposk = '2' then 'GC'
     when  finsc_ld_cmp.curposo = '2' then 'FDC1'
     when  finsc_ld_cmp.curposv = '2' then 'FDC2'
     when  finsc_ld_cmp.curposb = '2' then 'FDC3'
     when  finsc_ld_cmp.curposc = '2' then 'FDC4'
     when  finsc_ld_cmp.curposd = '2' then 'FDC5'
     when  finsc_ld_cmp.curpose = '2' then 'FDC6'
     when  finsc_ld_cmp.curposf = '2' then 'FDC7'
     when  finsc_ld_cmp.curposg = '2' then 'FDC8'   
     else '' end 
     as fis_addl1_crcy_field ) as AdditionalCurrency1Field,  
cast ( case when  finsc_ld_cmp.curposk = '3' then 'GC'
     when  finsc_ld_cmp.curposo = '3' then 'FDC1'
     when  finsc_ld_cmp.curposv = '3' then 'FDC2'
     when  finsc_ld_cmp.curposb = '3' then 'FDC3'
     when  finsc_ld_cmp.curposc = '3' then 'FDC4'
     when  finsc_ld_cmp.curposd = '3' then 'FDC5'
     when  finsc_ld_cmp.curpose = '3' then 'FDC6'
     when  finsc_ld_cmp.curposf = '3' then 'FDC7'
     when  finsc_ld_cmp.curposg = '3' then 'FDC8'   
     else '' end 
     as fis_addl2_crcy_field ) as AdditionalCurrency2Field, 
_Ledger,
_CompanyCode,
_FiscalYearVariant,
_CompanyCodeCurrencyRole,
_GlobalCurrencyRole,
_FreeDefinedCurrency1Role,
_FreeDefinedCurrency2Role,
_FreeDefinedCurrency3Role,
_FreeDefinedCurrency4Role,
_FreeDefinedCurrency5Role,
_FreeDefinedCurrency6Role,
_FreeDefinedCurrency7Role,
_FreeDefinedCurrency8Role,
_FunctionalCurrencyRole,
_AccountingPrinciple,
_CoCodeCurrencyRoleCurrency,
_GlobalCurrencyRoleCurrency,
_FreeDfndCrcyRole1Currency,
_FreeDfndCrcyRole2Currency,
_FreeDfndCrcyRole3Currency,
_FreeDfndCrcyRole4Currency,
_FreeDfndCrcyRole5Currency,
_FreeDfndCrcyRole6Currency,
_FreeDfndCrcyRole7Currency,
_FreeDfndCrcyRole8Currency,
_FunctionalCrcyRoleCurrency

    
}
```
