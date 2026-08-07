---
name: I_FISCALYEARPERIODFORLEDGER
description: Fiscalyearperiodforledger
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
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
# I_FISCALYEARPERIODFORLEDGER

**Fiscalyearperiodforledger**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast( finsc_ld_cmp.bukrs as fis_bukrs preserving type )` |  |  |
| `Ledger` | ✓ | |  | `cast( finsc_ld_cmp.rldnr as fis_rldnr preserving type )` |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `FiscalPeriod` | ✓ | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `FiscalPeriodStartDate` |  | |  |  |  |  |
| `FiscalPeriodEndDate` |  | |  |  |  |  |
| `IsSpecialPeriod` |  | |  |  |  |  |
| `FiscalYearStartDate` |  | |  |  |  |  |
| `FiscalYearEndDate` |  | |  |  |  |  |
| `NextFiscalPeriod` |  | |  |  |  |  |
| `NextFiscalPeriodFiscalYear` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `_LedgerText` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_FiscalYearForVariant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_FiscalYearForLedger` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_FiscalYearForVariant` | `I_FiscalYear` | [0..1] |
| `_Text` | `I_FiscalYearPeriodText` | [0..*] |
| `_FiscalYearForLedger` | `I_FiscalYearForLedger` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Year Period for Ledger'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'FiscalPeriod'
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIFYEARPER4L'
//--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
//@AccessControl.privilegedAssociations: ['_LedgerText']
// ]--GENERATED

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
define view entity I_FiscalYearPeriodForLedger as select from I_FiscalYearPeriod as I_FiscalYearPeriod inner join finsc_ld_cmp as finsc_ld_cmp
                                                  on   I_FiscalYearPeriod.FiscalYearVariant = finsc_ld_cmp.periv


  //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
association [0..*] to I_LedgerText               as _LedgerText           on  $projection.Ledger            = _LedgerText.Ledger
  // ]--GENERATED
association [0..1] to I_CompanyCode              as _CompanyCode          on  $projection.CompanyCode       = _CompanyCode.CompanyCode
association [0..1] to I_Ledger                   as _Ledger               on  $projection.Ledger            = _Ledger.Ledger
association [0..1] to I_FiscalYearVariant        as _FiscalYearVariant    on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
association [0..1] to I_FiscalYearForCompanyCode as _FiscalYear           on  $projection.FiscalYear        = _FiscalYear.FiscalYear
                                                                          and $projection.CompanyCode       = _FiscalYear.CompanyCode 
association [0..1] to I_FiscalYear               as _FiscalYearForVariant on  $projection.FiscalYearVariant = _FiscalYearForVariant.FiscalYearVariant
                                                                          and $projection.FiscalYear        = _FiscalYearForVariant.FiscalYear                                                                    
association [0..*] to I_FiscalYearPeriodText     as _Text                 on  $projection.FiscalYearVariant = _Text.FiscalYearVariant
                                                                          and $projection.FiscalYear        = _Text.FiscalYear
                                                                          and $projection.FiscalPeriod      = _Text.FiscalPeriod
association [0..1] to I_FiscalYearForLedger      as _FiscalYearForLedger  on  $projection.Ledger            = _FiscalYearForLedger.Ledger
                                                                          and $projection.CompanyCode       = _FiscalYearForLedger.CompanyCode
                                                                          and $projection.FiscalYear        = _FiscalYearForLedger.FiscalYear                                                                       

{

      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_CompanyCode'      
key cast( finsc_ld_cmp.bukrs as fis_bukrs preserving type ) as CompanyCode, 
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_LedgerStdVH',
                     element: 'Ledger' }
        }]
      @ObjectModel.text.association: '_LedgerText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_Ledger'      
key cast( finsc_ld_cmp.rldnr as fis_rldnr preserving type ) as Ledger,
@ObjectModel.foreignKey.association: '_FiscalYearForLedger'      
key I_FiscalYearPeriod.FiscalYear,
key I_FiscalYearPeriod.FiscalPeriod,

@ObjectModel.foreignKey.association: '_FiscalYearVariant'      
//@Semantics.fiscal.yearVariant: true     
    I_FiscalYearPeriod.FiscalYearVariant,

@ObjectModel.foreignKey.association: '_FiscalPeriodStartDate'      
    I_FiscalYearPeriod.FiscalPeriodStartDate,
    I_FiscalYearPeriod.FiscalPeriodEndDate,
    
    I_FiscalYearPeriod.IsSpecialPeriod,
    
    I_FiscalYearPeriod.FiscalYearStartDate,
    I_FiscalYearPeriod.FiscalYearEndDate,
    
    I_FiscalYearPeriod.NextFiscalPeriod,
    I_FiscalYearPeriod.NextFiscalPeriodFiscalYear,
     
    I_FiscalYearPeriod.FiscalYearPeriod,
    
    _CompanyCode,
    _Ledger,
    _FiscalYearVariant,
    @VDM.lifecycle.status:    #DEPRECATED
    @VDM.lifecycle.successor: '_FiscalYearForLedger'
    _FiscalYearForVariant,
    I_FiscalYearPeriod._FiscalPeriodStartDate,
    @VDM.lifecycle.status:    #DEPRECATED
    @VDM.lifecycle.successor: '_FiscalYearForLedger'    
    _FiscalYear,
    _FiscalYearForLedger,
    _Text,
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.hidden: true
    _LedgerText
      // ]--GENERATED


}
```
