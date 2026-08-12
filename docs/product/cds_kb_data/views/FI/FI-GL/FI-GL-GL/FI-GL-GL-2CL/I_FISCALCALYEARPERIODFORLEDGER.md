---
name: I_FISCALCALYEARPERIODFORLEDGER
description: "Fiscalcalyearperiodforledger"
app_component: FI-GL-GL-2CL
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
  - component:FI-GL-GL-2CL
  - lob:Finance
---
# I_FISCALCALYEARPERIODFORLEDGER

**Fiscalcalyearperiodforledger**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
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
| `CompanyCode` | ✓ | |  | `cast( finsc_ld_cmp.bukrs as fis_bukrs preserving type )` |  |  |
| `Ledger` | ✓ | |  | `cast( finsc_ld_cmp.rldnr as fis_rldnr preserving type )` |  |  |
| `FiscalYearPeriod` | ✓ | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `FiscalPeriodStartDate` |  | |  |  |  |  |
| `FiscalPeriodEndDate` |  | |  |  |  |  |
| `IsSpecialPeriod` |  | |  |  |  |  |
| `FiscalYearStartDate` |  | |  |  |  |  |
| `FiscalYearEndDate` |  | |  |  |  |  |
| `NextFiscalPeriod` |  | |  |  |  |  |
| `NextFiscalPeriodFiscalYear` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_FiscalYearForVariant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_Text` | `I_FiscalYearPeriodText` | [0..*] |
| `_FiscalYearForVariant` | `I_FiscalYear` | [0..1] |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalYearPeriod'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFCFYPERD4L'
@EndUserText.label: 'Fiscal Year Period for Ledger'

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
define view entity I_FiscalCalYearPeriodForLedger as select from I_FiscalYearPeriod as I_FiscalYearPeriod inner join finsc_ld_cmp 
                                                                                                   on   I_FiscalYearPeriod.FiscalYearVariant = finsc_ld_cmp.periv

association [0..1] to I_CompanyCode              as _CompanyCode on  $projection.CompanyCode       = _CompanyCode.CompanyCode
association [0..1] to I_Ledger                   as _Ledger      on  $projection.Ledger            = _Ledger.Ledger
association [0..1] to I_FiscalYearForCompanyCode as _FiscalYear  on  $projection.FiscalYear        = _FiscalYear.FiscalYear
                                                                 and $projection.CompanyCode       = _FiscalYear.CompanyCode  
association [0..*] to I_FiscalYearPeriodText     as _Text        on  $projection.FiscalYearVariant = _Text.FiscalYearVariant
                                                                 and $projection.FiscalYear        = _Text.FiscalYear
                                                                 and $projection.FiscalPeriod      = _Text.FiscalPeriod
association [0..1] to I_FiscalYear               as _FiscalYearForVariant  on  $projection.FiscalYearVariant = _FiscalYearForVariant.FiscalYearVariant
                                                                           and $projection.FiscalYear        = _FiscalYearForVariant.FiscalYear                                                                 

{

@ObjectModel.foreignKey.association: '_CompanyCode'      
key cast( finsc_ld_cmp.bukrs as fis_bukrs preserving type ) as CompanyCode, 
@ObjectModel.foreignKey.association: '_Ledger'      
key cast( finsc_ld_cmp.rldnr as fis_rldnr preserving type ) as Ledger,
key I_FiscalYearPeriod.FiscalYearPeriod,

@ObjectModel.foreignKey.association: '_FiscalYearForVariant'      
    I_FiscalYearPeriod.FiscalYear,
@ObjectModel.text.association: '_Text'
    I_FiscalYearPeriod.FiscalPeriod,

@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
    I_FiscalYearPeriod.FiscalYearVariant,

@ObjectModel.foreignKey.association: '_FiscalPeriodStartDate'      
    I_FiscalYearPeriod.FiscalPeriodStartDate,
    I_FiscalYearPeriod.FiscalPeriodEndDate,
    
    I_FiscalYearPeriod.IsSpecialPeriod,
    
    I_FiscalYearPeriod.FiscalYearStartDate,
    I_FiscalYearPeriod.FiscalYearEndDate,
    
    I_FiscalYearPeriod.NextFiscalPeriod,
    I_FiscalYearPeriod.NextFiscalPeriodFiscalYear,
     
    _CompanyCode,
    _Ledger,
    I_FiscalYearPeriod._FiscalYearVariant,
    _FiscalYearForVariant,
    I_FiscalYearPeriod._FiscalPeriodStartDate,
    _FiscalYear,
    _Text

}
```
