---
name: I_REVALUATIONRULE
description: Revaluationrule
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_REVALUATIONRULE

**Revaluationrule**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REValuationRule` | ✓ | |  | `cerule` |
| `AccountingPrinciple` |  | |  | `accprinciple` |
| `REValuationType` |  | |  | `cetype` |
| `REIsValuationPerformAutomatic` |  | |  | `cetypeautoeval` |
| `REIsValuationCompleteAutomatic` |  | |  | `cetypeautocomplete` |
| `REValuationConditionGroup` |  | |  | `cdgroup` |
| `REValuationLinearType` |  | |  | `straightlinetype` |
| `REFlowTypeLinear` |  | |  | `flowtypestraightlining` |
| `REFlowTypeLinearNegative` |  | |  | `flowtypestraightlining_ne` |
| `REFlowTypeInterest` |  | |  | `flowtypeinterest` |
| `REFlowTypeClearing` |  | |  | `flowtypepayment` |
| `REFlowTypeRepayment` |  | |  | `flowtyperepayment` |
| `REFlowTypeAsset` |  | |  | `flowtypeacquisition` |
| `REFlowTypeDepreciation` |  | |  | `flowtypedepreciation` |
| `REValuationClassification` |  | |  | `cesltype` |
| `REIsCndnAndRmngShareLinearize` |  | |  | `ceisslrest` |
| `REValuationIntegrationType` |  | |  | `integrationtype` |
| `REIsExclForNewAssgmt` |  | |  | `cuexcludeassign` |
| `REIsValuationRuleInformational` |  | |  | `isinformationalrule` |
| `InterestCalculationMethod` |  | |  | `interestcalcmethod` |
| `_AccountingPrinciple` | | ✓ | | |
| `_REValuationType` | | ✓ | | |
| `_REValuationConditionGrp` | | ✓ | | |
| `_REValuationLinearType` | | ✓ | | |
| `_REFlowTypeLinear` | | ✓ | | |
| `_REFlowTypeInterest` | | ✓ | | |
| `_REFlowTypeLinearNegative` | | ✓ | | |
| `_REFlowTypeClearing` | | ✓ | | |
| `_REFlowTypeRepayment` | | ✓ | | |
| `_REFlowTypeAsset` | | ✓ | | |
| `_REFlowTypeDepreciation` | | ✓ | | |
| `_REValuationClassification` | | ✓ | | |
| `_REValuationIntegType` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [0..1] |
| `_REValuationType` | `I_REValuationType` | [0..1] |
| `_REValuationConditionGrp` | `I_REValuationConditionGrp` | [0..1] |
| `_REValuationLinearType` | `I_REValuationLinearType` | [0..1] |
| `_REFlowTypeLinear` | `I_REFlowType` | [0..1] |
| `_REFlowTypeInterest` | `I_REFlowType` | [0..1] |
| `_REFlowTypeLinearNegative` | `I_REFlowType` | [0..1] |
| `_REFlowTypeClearing` | `I_REFlowType` | [0..1] |
| `_REFlowTypeRepayment` | `I_REFlowType` | [0..1] |
| `_REFlowTypeAsset` | `I_REFlowType` | [0..1] |
| `_REFlowTypeDepreciation` | `I_REFlowType` | [0..1] |
| `_REValuationClassification` | `I_REValuationClassification` | [0..1] |
| `_REValuationIntegType` | `I_REValuationIntegType` | [0..1] |
| `_Text` | `I_RealEstateValuationRuleText` | [0..*] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREVALUATIONRULE'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED,
  personalData.blocking: #NOT_REQUIRED
}
@EndUserText.label: 'RE Valuation Rule'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'REValuationRule',
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #M
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateValuationRule'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

define view entity I_REValuationRule
  as select from tivcerule as _ValuationRule
  association [0..1] to I_AccountingPrinciple         as _AccountingPrinciple       on $projection.AccountingPrinciple = _AccountingPrinciple.AccountingPrinciple
  association [0..1] to I_REValuationType             as _REValuationType           on $projection.REValuationType = _REValuationType.REValuationType
  association [0..1] to I_REValuationConditionGrp     as _REValuationConditionGrp   on $projection.REValuationConditionGroup = _REValuationConditionGrp.REValuationConditionGroup
  association [0..1] to I_REValuationLinearType       as _REValuationLinearType     on $projection.REValuationLinearType = _REValuationLinearType.REValuationLinearType
  association [0..1] to I_REFlowType                  as _REFlowTypeLinear          on $projection.REFlowTypeLinear = _REFlowTypeLinear.REFlowType
  association [0..1] to I_REFlowType                  as _REFlowTypeInterest        on $projection.REFlowTypeInterest = _REFlowTypeInterest.REFlowType
  association [0..1] to I_REFlowType                  as _REFlowTypeLinearNegative  on $projection.REFlowTypeLinearNegative = _REFlowTypeLinearNegative.REFlowType
  association [0..1] to I_REFlowType                  as _REFlowTypeClearing        on $projection.REFlowTypeClearing = _REFlowTypeClearing.REFlowType
  association [0..1] to I_REFlowType                  as _REFlowTypeRepayment       on $projection.REFlowTypeRepayment = _REFlowTypeRepayment.REFlowType
  association [0..1] to I_REFlowType                  as _REFlowTypeAsset           on $projection.REFlowTypeAsset = _REFlowTypeAsset.REFlowType
  association [0..1] to I_REFlowType                  as _REFlowTypeDepreciation    on $projection.REFlowTypeDepreciation = _REFlowTypeDepreciation.REFlowType
  association [0..1] to I_REValuationClassification   as _REValuationClassification on $projection.REValuationClassification = _REValuationClassification.REValuationClassification
  association [0..1] to I_REValuationIntegType        as _REValuationIntegType      on $projection.REValuationIntegrationType = _REValuationIntegType.REValuationIntegrationType
  association [0..*] to I_RealEstateValuationRuleText as _Text                      on $projection.REValuationRule = _Text.REValuationRule
{

  key cerule                    as REValuationRule,
      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
      accprinciple              as AccountingPrinciple,
      @ObjectModel.foreignKey.association: '_REValuationType'
      cetype                    as REValuationType,
      cetypeautoeval            as REIsValuationPerformAutomatic,
      cetypeautocomplete        as REIsValuationCompleteAutomatic,
      @ObjectModel.foreignKey.association: '_REValuationConditionGrp'
      cdgroup                   as REValuationConditionGroup,
      @ObjectModel.foreignKey.association: '_REValuationLinearType'
      straightlinetype          as REValuationLinearType,
      @ObjectModel.foreignKey.association: '_REFlowTypeLinear'
      flowtypestraightlining    as REFlowTypeLinear,
      @ObjectModel.foreignKey.association: '_REFlowTypeLinearNegative'
      flowtypestraightlining_ne as REFlowTypeLinearNegative,
      @ObjectModel.foreignKey.association: '_REFlowTypeInterest'
      flowtypeinterest          as REFlowTypeInterest,
      @ObjectModel.foreignKey.association: '_REFlowTypeClearing'
      flowtypepayment           as REFlowTypeClearing,
      @ObjectModel.foreignKey.association: '_REFlowTypeRepayment'
      flowtyperepayment         as REFlowTypeRepayment,
      @ObjectModel.foreignKey.association: '_REFlowTypeAsset'
      flowtypeacquisition       as REFlowTypeAsset,
      @ObjectModel.foreignKey.association: '_REFlowTypeDepreciation'
      flowtypedepreciation      as REFlowTypeDepreciation,
      @ObjectModel.foreignKey.association: '_REValuationClassification'
      cesltype                  as REValuationClassification,
      ceisslrest                as REIsCndnAndRmngShareLinearize,
      @ObjectModel.foreignKey.association: '_REValuationIntegType'
      integrationtype           as REValuationIntegrationType,
      cuexcludeassign           as REIsExclForNewAssgmt,
      isinformationalrule       as REIsValuationRuleInformational,
      interestcalcmethod        as InterestCalculationMethod,

      _AccountingPrinciple,
      _REValuationType,
      _REValuationConditionGrp,
      _REValuationLinearType,
      _REFlowTypeLinear,
      _REFlowTypeInterest,
      _REFlowTypeLinearNegative,
      _REFlowTypeClearing,
      _REFlowTypeRepayment,
      _REFlowTypeAsset,
      _REFlowTypeDepreciation,
      _REValuationClassification,
      _REValuationIntegType,
      _Text

}
```
