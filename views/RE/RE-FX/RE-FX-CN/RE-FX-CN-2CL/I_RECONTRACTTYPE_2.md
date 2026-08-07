---
name: I_RECONTRACTTYPE_2
description: "Recontracttype 2"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - contract
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONTRACTTYPE_2

**Recontracttype 2**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REContractType` | ✓ | | `_ContractType` | `smvart` |  |  |
| `REConditionGroup` |  | | `_ContractType` | `condgroup` |  |  |
| `REAdjustNumberGroup` |  | | `_ContractType` | `adjustnumberbeg` |  |  |
| `REAdjustNumber` |  | | `_ContractType` | `adjustnumberstep` |  |  |
| `REBusinessPartnerRole1` |  | | `_ContractType` | `bproletype1` |  |  |
| `REBusinessPartnerRole2` |  | | `_ContractType` | `bproletype2` |  |  |
| `REContractUserSupplier` |  | | `_ContractType` | `usersupplier` |  |  |
| `REContractCategory` |  | | `_ContractType` | `category` |  |  |
| `RECashFlowPeriod` |  | | `_ContractType` | `cfperiod` |  |  |
| `RETaxType` |  | | `_ContractType` | `taxtype` |  |  |
| `TaxGroup` |  | | `_ContractType` | `taxgroup` |  |  |
| `REContractDepositType` |  | | `_ContractType` | `cntypedeposit` |  |  |
| `REContractIsTaxFree` |  | | `_ContractType` | `istaxfree` |  |  |
| `RENoticeProcedure` |  | | `_ContractType` | `ntprocdefault` |  |  |
| `REInfluenceHoldings` |  | | `_ContractType` | `cntypeusageind` |  |  |
| `REFinanceDepositLevel` |  | | `_ContractType` | `cmcflevel` |  |  |
| `REIsPossessionDate` |  | | `_ContractType` | `ispossdenabled` |  |  |
| `REConditionGroupTotal` |  | | `_ContractType` | `condgroupsum` |  |  |
| `REIsExclForNewAssgmt` |  | | `_ContractType` | `cuexcludeassign` |  |  |
| `NumberRangeInterval` |  | | `_ContractTypeFndn` | `NumberRangeInterval` |  |  |
| `REUsageType` |  | | `_ContractTypeFndn` | `REUsageType` |  |  |
| `REContractTypeCategory` |  | | `_ContractTypeFndn` | `REContractTypeCategory` |  |  |
| `REIsAreaBasedRent` |  | | `_ContractTypeFndn` | `REIsAreaBasedRent` |  |  |
| `REHasDistributionOnObject` |  | | `_ContractTypeFndn` | `REHasDistributionOnObject` |  |  |
| `_RETaxType` | | ✓ | | | | |
| `_RETaxGroup` | | ✓ | | | | |
| `_REFinanceDepositLevel` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RETaxType` | `I_RETaxType` | [1..*] |
| `_RETaxGroup` | `I_RETaxGroup` | [0..1] |
| `_REFinanceDepositLevel` | `I_PlanningLevel` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECONTYPE2'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Contract Type'

//@ClientDependent: true
@VDM.viewType: #BASIC
//@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  representativeKey: 'REContractType',
  semanticKey: ['REContractType'],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #M
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateContractType'
}
                                        
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true
    }
}

// Double Maintenance with I_REContractType required

define root view entity I_REContractType_2
  as select from tivcncctadd          as _ContractType
    join         I_REContractTypeFndn as _ContractTypeFndn on _ContractType.smvart = _ContractTypeFndn.REContractType
  composition [0..*] of I_REContractTypeText_2 as _Text 
  association [1..*] to I_RETaxType          as _RETaxType             on $projection.RETaxType = _RETaxType.RETaxType
  association [0..1] to I_RETaxGroup         as _RETaxGroup            on $projection.TaxGroup = _RETaxGroup.TaxGroup
  association [0..1] to I_PlanningLevel      as _REFinanceDepositLevel on $projection.REFinanceDepositLevel = _REFinanceDepositLevel.PlanningLevel
{
      @ObjectModel.text.association: '_Text'
  key _ContractType.smvart           as REContractType,
      //gcvarnr as REScreenSequence,
      _ContractType.condgroup        as REConditionGroup,
//      nrnroff          as NumberRangeInterval,
      //home_url as REContractHomepage,
      _ContractType.adjustnumberbeg  as REAdjustNumberGroup,
      _ContractType.adjustnumberstep as REAdjustNumber,
      _ContractType.bproletype1      as REBusinessPartnerRole1,
      _ContractType.bproletype2      as REBusinessPartnerRole2,
      //bpappl as REApplicationCategory,
      _ContractType.usersupplier     as REContractUserSupplier,
      _ContractType.category         as REContractCategory,
      _ContractType.cfperiod         as RECashFlowPeriod,
      //optmeth as REOptionRateMethod,
//      @ObjectModel.foreignKey.association: '_RETaxType'
      _ContractType.taxtype          as RETaxType,
      @ObjectModel.foreignKey.association: '_RETaxGroup'
      _ContractType.taxgroup         as TaxGroup,
      _ContractType.cntypedeposit    as REContractDepositType,
      _ContractType.istaxfree        as REContractIsTaxFree,
      //nooptmeth as REIsOptionRateMethodRequired,
      //coseprof as RESettlementProfile,
      _ContractType.ntprocdefault    as RENoticeProcedure,
      _ContractType.cntypeusageind   as REInfluenceHoldings,
      @ObjectModel.foreignKey.association: '_REFinanceDepositLevel'
      _ContractType.cmcflevel        as REFinanceDepositLevel,
      //currencyassign as RECurrenyAssignment,
      _ContractType.ispossdenabled   as REIsPossessionDate,
      _ContractType.condgroupsum     as REConditionGroupTotal,
      _ContractType.cuexcludeassign  as REIsExclForNewAssgmt,
        
      _ContractTypeFndn.NumberRangeInterval,  
      _ContractTypeFndn.REUsageType,
      _ContractTypeFndn.REContractTypeCategory,
      _ContractTypeFndn.REIsAreaBasedRent,
      _ContractTypeFndn.REHasDistributionOnObject,

      _RETaxType,
      _RETaxGroup,
      _REFinanceDepositLevel,
      
      _Text


}
where
  _ContractTypeFndn.REIsNewContractType = 'X'
```
