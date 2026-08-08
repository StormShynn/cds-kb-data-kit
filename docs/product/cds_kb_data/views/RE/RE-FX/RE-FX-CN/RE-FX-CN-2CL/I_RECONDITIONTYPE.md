---
name: I_RECONDITIONTYPE
description: "Reconditiontype"
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
  - pricing-condition
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONDITIONTYPE

**Reconditiontype**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REConditionType` | ✓ | |  | `condtype` |  |  |
| `REConditionAttribute` |  | |  | `condprop` |  |  |
| `REFlowType` |  | |  | `flowtype` |  |  |
| `RECalculationRule` |  | |  | `calcruleext` |  |  |
| `RECalculationRuleParam1` |  | |  | `calcrulepara1` |  |  |
| `RECalculationRuleParam2` |  | |  | `calcrulepara2` |  |  |
| `REDistributionRule` |  | |  | `distruleext` |  |  |
| `REDistributionRuleParam1` |  | |  | `distrulepara1` |  |  |
| `REDistributionRuleParam2` |  | |  | `distrulepara2` |  |  |
| `REAdvancePaytIsPostedAsRevenue` |  | |  | `bookasrevenue` |  |  |
| `REUnitPrice` |  | |  | `unitprice` |  |  |
| `_REConditionAttribute` | | ✓ | | | | |
| `_REFlowType` | | ✓ | | | | |
| `_RECndnCalculationRuleExt` | | ✓ | | | | |
| `_RECndnDistributionRuleExt` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REConditionAttribute` | `I_REConditionAttribute` | [0..1] |
| `_REFlowType` | `I_REFlowType` | [0..1] |
| `_RECndnCalculationRuleExt` | `I_RECndnCalculationRuleExt` | [0..1] |
| `_RECndnDistributionRuleExt` | `I_RECndnDistributionRuleExt` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECNDNTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true,
              technicalName: 'IRECNDNTYPE'
}

@ObjectModel: {
            usageType:{
                        dataClass: #CUSTOMIZING,
                        serviceQuality: #A,
                        sizeCategory: #S
            },
            representativeKey: 'REConditionType',
            semanticKey: [ 'REConditionType' ],
            sapObjectNodeType.name: 'RealEstateConditionType',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER,
                                     #SEARCHABLE_ENTITY ],
            modelingPattern: #ANALYTICAL_DIMENSION
}


@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.compositionRoot: true
@Search.searchable: true
@EndUserText.label: 'Real Estate Condition Type'
define root view entity I_REConditionType
  as select from tivcdcondtype
  composition [0..*] of I_REConditionTypeText       as _Text                      //on $projection.REConditionType = _Text.REConditionType
  association [0..1] to I_REConditionAttribute      as _REConditionAttribute      on $projection.REConditionAttribute = _REConditionAttribute.REConditionAttribute
  association [0..1] to I_REFlowType                as _REFlowType                on $projection.REFlowType = _REFlowType.REFlowType
  association [0..1] to I_RECndnCalculationRuleExt  as _RECndnCalculationRuleExt  on $projection.RECalculationRule = _RECndnCalculationRuleExt.RECalculationRule
  association [0..1] to I_RECndnDistributionRuleExt as _RECndnDistributionRuleExt on $projection.REDistributionRule = _RECndnDistributionRuleExt.REDistributionRule
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key condtype      as REConditionType,
      @ObjectModel.foreignKey.association: '_REConditionAttribute'
      condprop      as REConditionAttribute,
      @ObjectModel.foreignKey.association: '_REFlowType'
      flowtype      as REFlowType,
      @ObjectModel.foreignKey.association: '_RECndnCalculationRuleExt'
      calcruleext   as RECalculationRule,
      calcrulepara1 as RECalculationRuleParam1,
      calcrulepara2 as RECalculationRuleParam2,
      @ObjectModel.foreignKey.association: '_RECndnDistributionRuleExt'
      distruleext   as REDistributionRule,
      distrulepara1 as REDistributionRuleParam1,
      distrulepara2 as REDistributionRuleParam2,
      bookasrevenue as REAdvancePaytIsPostedAsRevenue,
      unitprice     as REUnitPrice,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      _REConditionAttribute,
      _REFlowType,
      _RECndnCalculationRuleExt,
      _RECndnDistributionRuleExt
}
```
