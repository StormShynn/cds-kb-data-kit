---
name: I_REVALUATIONRULECONDITION
description: Revaluationrulecondition
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
  - pricing-condition
  - component:RE-FX-2CL
  - lob:Other
---
# I_REVALUATIONRULECONDITION

**Revaluationrulecondition**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InternalRealEstateNumber` | `intreno` |
| key `REValuationRuleUUID` | `ruleguid` |
| key `REConditionUUID` | `condguid` |
| `REValuationCndnProperty` | `cdprop` |
| `REValuationCndnConsdtn` | `cdcons` |
| `REIsValuationCndnConsdtn` | `considercond` |
| `REValuationCndnSharePercent` | `condperc` |
| `REValuationCndnShareAbsltAmt` | `condabs` |
| `REValuationCurrency` | `cast(currency as recdvdmvalcurr preserving type )` |
| `REValuationCndnStatus` | `statuscondrule` |
| `REInfoText` | `note` |
| `REValuationRule` | `_REValuationTerm.REValuationRule` |
| `_REContract` | *Association* |
| `_REKeyAssgmt` | *Association* |
| `_REValuationTerm` | *Association* |
| `_RECondition` | *Association* |
| `_REValuationCndnProperty` | *Association* |
| `_REValuationCndnConsdtn` | *Association* |
| `_REValuationCndnStatus` | *Association* |
| `_REValuationRule` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REContract` | `I_REContract` | [0..1] |
| `_REKeyAssgmt` | `I_REKeyAssgmt` | [1..1] |
| `_REValuationTerm` | `I_REValuationTerm` | [1..1] |
| `_RECondition` | `I_REContrCondition` | [1..1] |
| `_REValuationCndnProperty` | `I_REValuationCndnProperty` | [0..1] |
| `_REValuationCndnConsdtn` | `I_REValuationCndnConsdtn` | [0..1] |
| `_REValuationCndnStatus` | `I_REValuationCndnStatus` | [0..1] |
| `_REValuationRule` | `I_REValuationRule` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREVALUATIONCNDN'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Metadata: {
             ignorePropagatedAnnotations: true,
             allowExtensions:true
}
 
@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true
}

@ObjectModel: {
            usageType:{
                        dataClass: #MASTER,
                        serviceQuality: #C,
                        sizeCategory: #L
            },
            representativeKey: 'REConditionUUID',
            sapObjectNodeType.name: 'REValuationRuleCondition',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@VDM.viewType: #BASIC
@EndUserText.label: 'Real Estate Valuation Rule Condition'
define view entity I_REValuationRuleCondition
  as select from vicecondrule
  
  association [0..1] to I_REContract              as _REContract              on  $projection.InternalRealEstateNumber = _REContract.InternalRealEstateNumber
  association [1..1] to I_REKeyAssgmt             as _REKeyAssgmt             on  $projection.InternalRealEstateNumber = _REKeyAssgmt.InternalRealEstateNumber
  association [1..1] to I_REValuationTerm         as _REValuationTerm         on  $projection.InternalRealEstateNumber = _REValuationTerm.InternalRealEstateNumber
                                                                              and $projection.REValuationRuleUUID      = _REValuationTerm.REValuationRuleUUID
  association [1..1] to I_REContrCondition        as _RECondition             on  $projection.REConditionUUID = _RECondition.REConditionUUID
  association [0..1] to I_REValuationCndnProperty as _REValuationCndnProperty on  $projection.REValuationCndnProperty = _REValuationCndnProperty.REValuationCndnProperty
  association [0..1] to I_REValuationCndnConsdtn  as _REValuationCndnConsdtn  on  $projection.REValuationCndnConsdtn = _REValuationCndnConsdtn.REValuationCndnConsdtn
  association [0..1] to I_REValuationCndnStatus   as _REValuationCndnStatus   on  $projection.REValuationCndnStatus = _REValuationCndnStatus.REValuationCndnStatus
  association [0..1] to I_REValuationRule         as _REValuationRule         on  $projection.REValuationRule = _REValuationRule.REValuationRule
{
      @ObjectModel.foreignKey.association: '_REContract'
  key intreno                                           as InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_REValuationTerm'
  key ruleguid                                          as REValuationRuleUUID,
  key condguid                                          as REConditionUUID,
      @ObjectModel.foreignKey.association: '_REValuationCndnProperty'
      cdprop                                            as REValuationCndnProperty,
      @ObjectModel.foreignKey.association: '_REValuationCndnConsdtn'
      cdcons                                            as REValuationCndnConsdtn,
      considercond                                      as REIsValuationCndnConsdtn,
      condperc                                          as REValuationCndnSharePercent,
      @Semantics.amount.currencyCode: 'REValuationCurrency'
      condabs                                           as REValuationCndnShareAbsltAmt,
      cast(currency as recdvdmvalcurr preserving type ) as REValuationCurrency,
      statuscondrule                                    as REValuationCndnStatus,
      note                                              as REInfoText,
      _REValuationTerm.REValuationRule                  as REValuationRule,
      
      _REContract,
      _REKeyAssgmt,
      _REValuationTerm,
      _RECondition,
      _REValuationCndnProperty,
      _REValuationCndnConsdtn,
      _REValuationCndnStatus,
      _REValuationRule
}
```
