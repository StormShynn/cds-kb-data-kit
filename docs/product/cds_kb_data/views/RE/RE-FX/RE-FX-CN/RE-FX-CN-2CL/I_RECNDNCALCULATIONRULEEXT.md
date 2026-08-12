---
name: I_RECNDNCALCULATIONRULEEXT
description: "Recndncalculationruleext"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECNDNCALCULATIONRULEEXT

**Recndncalculationruleext**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RECalculationRule` | ✓ | |  | `calcruleext` |  |  |
| `REInternalCalculationRule` |  | |  | `calcruleint` |  |  |
| `RECalculationRuleParam1` |  | |  | `calcrulepara1` |  |  |
| `RERuleFieldModifSttg1` |  | |  | `calcrulepamocu1` |  |  |
| `RERuleFieldModifAppl1` |  | |  | `calcrulepamoap1` |  |  |
| `RECalculationRuleParam2` |  | |  | `calcrulepara2` |  |  |
| `RERuleFieldModifSttg2` |  | |  | `calcrulepamocu2` |  |  |
| `RERuleFieldModifAppl2` |  | |  | `calcrulepamoap2` |  |  |
| `REDistributionIsIndependent` |  | |  | `calcrulenodist` |  |  |
| `REDistributionRule` |  | |  | `distruleext` |  |  |
| `RECalculationRuleIsModifiable` |  | |  | `calcrulemod` |  |  |
| `REUnitPriceRoundingType` |  | |  | `roundtype` |  |  |
| `REUnitPriceNmbrOfDcmlsToRound` |  | |  | `rounddecimal` |  |  |
| `REUnitPriceRoundingThreshold` |  | |  | `roundunit` |  |  |
| `RECndnAmountRoundingType` |  | |  | `caroundtype` |  |  |
| `RECndnAmountNmbrOfDcmlsToRound` |  | |  | `carounddecimal` |  |  |
| `RECndnAmountRoundingThreshold` |  | |  | `caroundunit` |  |  |
| `REGrossOrNetRounding` |  | |  | `caroundgrne` |  |  |
| `REFullDistributionRule` |  | |  | `distcomplete` |  |  |
| `_Text` | | ✓ | | | | |
| `_RECndnCalculationRuleInt` | | ✓ | | | | |
| `_RERuleFieldModifSttg1` | | ✓ | | | | |
| `_RERuleFieldModifSttg2` | | ✓ | | | | |
| `_RERuleFieldModifAppl1` | | ✓ | | | | |
| `_RERuleFieldModifAppl2` | | ✓ | | | | |
| `_RECndnDistributionRuleExt` | | ✓ | | | | |
| `_RERoundingTypeForUnitPrc` | | ✓ | | | | |
| `_RERoundingTypeForCndnAmt` | | ✓ | | | | |
| `_REGrossOrNetRounding` | | ✓ | | | | |
| `_REFullDistributionRule` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RECndnCalcRuleExtText` | [0..*] |
| `_RECndnCalculationRuleInt` | `I_RECndnCalculationRuleInt` | [0..1] |
| `_RERuleFieldModifSttg1` | `I_RERuleFieldModifSttg1` | [0..1] |
| `_RERuleFieldModifSttg2` | `I_RERuleFieldModifSttg2` | [0..1] |
| `_RERuleFieldModifAppl1` | `I_RERuleFieldModifAppl1` | [0..1] |
| `_RERuleFieldModifAppl2` | `I_RERuleFieldModifAppl2` | [0..1] |
| `_RECndnDistributionRuleExt` | `I_RECndnDistributionRuleExt` | [0..1] |
| `_RERoundingTypeForUnitPrc` | `I_RERoundingTypeForUnitPrc` | [0..1] |
| `_RERoundingTypeForCndnAmt` | `I_RERoundingTypeForCndnAmt` | [0..1] |
| `_REGrossOrNetRounding` | `I_REGrossOrNetRounding` | [0..1] |
| `_REFullDistributionRule` | `I_REFullDistributionRule` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECALCRULEEXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true
}

@ObjectModel: {
            usageType:{
                        dataClass: #CUSTOMIZING,
                        serviceQuality: #A,
                        sizeCategory: #M
            },
            representativeKey: 'RECalculationRule',
            semanticKey: [ 'RECalculationRule' ],
            sapObjectNodeType.name: 'RealEstateCalculationRule',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #BASIC
@EndUserText.label: 'Real Estate External Calculation Formula'
define view entity I_RECndnCalculationRuleExt 
    as select from tivcdcalcext
    association [0..*] to I_RECndnCalcRuleExtText as _Text on $projection.RECalculationRule = _Text.RECalculationRule
    association [0..1] to I_RECndnCalculationRuleInt as _RECndnCalculationRuleInt on $projection.REInternalCalculationRule = _RECndnCalculationRuleInt.REInternalCalculationRule
    association [0..1] to I_RERuleFieldModifSttg1 as _RERuleFieldModifSttg1 on $projection.RERuleFieldModifSttg1 = _RERuleFieldModifSttg1.RERuleFieldModifSttg1
    association [0..1] to I_RERuleFieldModifSttg2 as _RERuleFieldModifSttg2 on $projection.RERuleFieldModifSttg2 = _RERuleFieldModifSttg2.RERuleFieldModifSttg2
    association [0..1] to I_RERuleFieldModifAppl1 as _RERuleFieldModifAppl1 on $projection.RERuleFieldModifAppl1 = _RERuleFieldModifAppl1.RERuleFieldModifAppl1
    association [0..1] to I_RERuleFieldModifAppl2 as _RERuleFieldModifAppl2 on $projection.RERuleFieldModifAppl2 = _RERuleFieldModifAppl2.RERuleFieldModifAppl2
    association [0..1] to I_RECndnDistributionRuleExt as _RECndnDistributionRuleExt on $projection.REDistributionRule = _RECndnDistributionRuleExt.REDistributionRule
    association [0..1] to I_RERoundingTypeForUnitPrc as _RERoundingTypeForUnitPrc on $projection.REUnitPriceRoundingType = _RERoundingTypeForUnitPrc.REUnitPriceRoundingType
    association [0..1] to I_RERoundingTypeForCndnAmt as _RERoundingTypeForCndnAmt on $projection.RECndnAmountRoundingType = _RERoundingTypeForCndnAmt.RECndnAmountRoundingType
    association [0..1] to I_REGrossOrNetRounding as _REGrossOrNetRounding on $projection.REGrossOrNetRounding = _REGrossOrNetRounding.REGrossOrNetRounding
    association [0..1] to I_REFullDistributionRule as _REFullDistributionRule on $projection.REFullDistributionRule = _REFullDistributionRule.REFullDistributionRule
{
        @ObjectModel.text.association: '_Text'
    key calcruleext     as RECalculationRule,
        @ObjectModel.foreignKey.association:  '_RECndnCalculationRuleInt'
        calcruleint     as REInternalCalculationRule,
        calcrulepara1   as RECalculationRuleParam1,
        @ObjectModel.foreignKey.association:  '_RERuleFieldModifSttg1'
        calcrulepamocu1 as RERuleFieldModifSttg1,
        @ObjectModel.foreignKey.association:  '_RERuleFieldModifAppl1'
        calcrulepamoap1 as RERuleFieldModifAppl1,
        calcrulepara2   as RECalculationRuleParam2,
        @ObjectModel.foreignKey.association:  '_RERuleFieldModifSttg2'
        calcrulepamocu2 as RERuleFieldModifSttg2,
        @ObjectModel.foreignKey.association:  '_RERuleFieldModifAppl2'
        calcrulepamoap2 as RERuleFieldModifAppl2,
        calcrulenodist  as REDistributionIsIndependent,
        @ObjectModel.foreignKey.association:  '_RECndnDistributionRuleExt'
        distruleext     as REDistributionRule,
        calcrulemod     as RECalculationRuleIsModifiable,
        @ObjectModel.foreignKey.association:  '_RERoundingTypeForUnitPrc'
        roundtype       as REUnitPriceRoundingType,
        rounddecimal    as REUnitPriceNmbrOfDcmlsToRound,
        roundunit       as REUnitPriceRoundingThreshold,
        @ObjectModel.foreignKey.association:  '_RERoundingTypeForCndnAmt'
        caroundtype     as RECndnAmountRoundingType,
        carounddecimal  as RECndnAmountNmbrOfDcmlsToRound,
        caroundunit     as RECndnAmountRoundingThreshold, 
        @ObjectModel.foreignKey.association:  '_REGrossOrNetRounding'
        caroundgrne     as REGrossOrNetRounding,
        @ObjectModel.foreignKey.association:  '_REFullDistributionRule'
        distcomplete    as REFullDistributionRule,
        
        _Text,
        _RECndnCalculationRuleInt,
        _RERuleFieldModifSttg1,
        _RERuleFieldModifSttg2,
        _RERuleFieldModifAppl1,
        _RERuleFieldModifAppl2,
        _RECndnDistributionRuleExt,
        _RERoundingTypeForUnitPrc,
        _RERoundingTypeForCndnAmt,
        _REGrossOrNetRounding,
        _REFullDistributionRule
}
```
