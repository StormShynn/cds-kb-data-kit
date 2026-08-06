---
name: I_REVALUATIONTERM
description: Revaluationterm
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
# I_REVALUATIONTERM

**Revaluationterm**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InternalRealEstateNumber` | `_ValuationTerm.intreno` |
| key `REValuationRuleUUID` | `_ValuationTerm.ruleguid` |
| `RETermNumber` | `_ValuationTerm.termno` |
| `RETermType` | `_ValuationTerm.termtype` |
| `ValidityStartDate` | `cast( _ValuationTerm.validfrom as rebdvdmvalidfrom preserving type )` |
| `ValidityEndDate` | `cast( _ValuationTerm.validto as rebdvdmvalidto preserving type )` |
| `REStatusObject` | `_ValuationTerm.objnr` |
| `ObjectValidFrom` | `cast(_ValuationTerm.objvalidfrom as rebdvdmrelvalidfrom preserving type )` |
| `REValuationRule` | `_ValuationTerm.cerule` |
| `REConsiderationStartDate` | `cast(_ValuationTerm.consbeg as recevdmconsbeg preserving type )` |
| `RECashFlowPostingFromDate` | `cast(_ValuationTerm.postbeg as recevdmpostbeg preserving type )` |
| `REStatusObjectAsset` | `cast(_ValuationTerm.assetobjnr as recevdmasobjnr preserving type )` |
| `REValuationClassification` | `_ValuationTerm.cesltype` |
| `REInterestRate` | `_ValuationTerm.interestrate` |
| `REFrequencyTerm` | `_ValuationTerm.termnorh` |
| `REDistributionRule` | `_ValuationTerm.distrule` |
| `REDistributionRuleParam1` | `_ValuationTerm.distrulepara1` |
| `REDistributionRuleParam2` | `_ValuationTerm.distrulepara2` |
| `REProbableEndDate` | `cast( _ValuationTerm.probableend as recevdmprobableend preserving type )` |
| `REAssetRightOfUseEndDate` | `cast( _ValuationTerm.usefullifeend as recevdmusefullifeend preserving type )` |
| `REValuationRuleStatus` | `cast( _ValuationTerm.statusrule as recevdmstatusrule preserving type )` |
| `REValuationStatus` | `cast( _ValuationTerm.statuseval as recevdmstatusevaluation preserving type )` |
| `REValuationStatusReason` | `cast( _ValuationTerm.statusreason as recevdmstatusreason preserving type )` |
| `REValuationBehavior` | `_ValuationTerm.processbehavior` |
| `RETaxType` | `_ValuationTerm.taxtype` |
| `TaxGroup` | `_ValuationTerm.taxgroup` |
| `REAccountingObject` | `cast(_ValuationTerm.acctobjnr as recevdmacctobjnr preserving type )` |
| `REInfoText` | `_ValuationTerm.note` |
| `REValuationFactorNumerator` | `_ValuationTerm.scopenum` |
| `REValuationFactorDenominator` | `_ValuationTerm.scopedenom` |
| `REValuationCurrency` | `cast(_ValuationTerm.rulecurr as recevdmrulecurr preserving type )` |
| `REValuationQuestionnaireUUID` | `_ValuationTerm.queryguid` |
| `Country` | `_REContract._CompanyCode.Country` |
| `_REContract` | *Association* |
| `_REKeyAssgmt` | *Association* |
| `_RETerm` | *Association* |
| `_RETermType` | *Association* |
| `_REValuationObject` | *Association* |
| `_REValuationRule` | *Association* |
| `_REFixedAssetRelation` | *Association* |
| `_REValuationClassification` | *Association* |
| `_RERhythmTerm` | *Association* |
| `_RECndnDistributionRuleExt` | *Association* |
| `_REValuationRuleStatus` | *Association* |
| `_REValuationStatus` | *Association* |
| `_REValuationStatusReason` | *Association* |
| `_REValuationBehavior` | *Association* |
| `_RETaxType` | *Association* |
| `_RETaxGroup` | *Association* |
| `_Currency` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REContract` | `I_REContract` | [1..1] |
| `_REKeyAssgmt` | `I_REKeyAssgmt` | [1..1] |
| `_RETerm` | `I_RETerm` | [1..1] |
| `_RETermType` | `I_RETermType` | [1..1] |
| `_REValuationObject` | `I_REObjectTypeDetails` | [0..1] |
| `_REValuationRule` | `I_REValuationRule` | [0..1] |
| `_REFixedAssetRelation` | `I_REFixedAssetRelation` | [0..1] |
| `_REValuationClassification` | `I_REValuationClassification` | [0..1] |
| `_RERhythmTerm` | `I_REContrRhythmTerm` | [0..*] |
| `_RECndnDistributionRuleExt` | `I_RECndnDistributionRuleExt` | [0..1] |
| `_REValuationRuleStatus` | `I_REValuationRuleStatus` | [0..1] |
| `_REValuationStatus` | `I_REValuationStatus` | [0..1] |
| `_REValuationStatusReason` | `I_REValuationStatusReason` | [0..1] |
| `_REValuationBehavior` | `I_REValuationBehavior` | [0..1] |
| `_RETaxType` | `I_RETaxType` | [0..1] |
| `_RETaxGroup` | `I_RETaxGroup` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.allowExtensions:true 

@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true,
              technicalName: 'IREVALUATIONTERM'
}

@ObjectModel: {
            usageType:{
                        dataClass: #MIXED,
                        serviceQuality: #C,
                        sizeCategory: #XL
            },
            resultSet.sizeCategory: #XS,
            representativeKey: 'REValuationRuleUUID',
            semanticKey: ['InternalRealEstateNumber'],
            sapObjectNodeType.name: 'RealEstateValuationTerm',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@EndUserText.label: 'Real Estate Valuation Term'
define view entity I_REValuationTerm
  as select from vicerule as _ValuationTerm
  association [1..1] to I_REContract                as _REContract               on  $projection.InternalRealEstateNumber = _REContract.InternalRealEstateNumber
  association [1..1] to I_REKeyAssgmt               as _REKeyAssgmt              on  $projection.InternalRealEstateNumber = _REKeyAssgmt.InternalRealEstateNumber
  association [1..1] to I_RETerm                    as _RETerm                    on  $projection.InternalRealEstateNumber = _RETerm.InternalRealEstateNumber
                                                                                  and  _RETerm.RETermType = '1500'
                                                                                  and $projection.RETermNumber             = _RETerm.RETermNumber
  association [1..1] to I_RETermType                as _RETermType                on  _RETermType.RealEstateObjectType = 'IS'
                                                                                  and $projection.RETermType = _RETermType.RETermType
  
  association [0..1] to I_REObjectTypeDetails       as _REValuationObject         on  $projection.REStatusObject = _REValuationObject.REStatusObject
  association [0..1] to I_REValuationRule           as _REValuationRule           on  $projection.REValuationRule = _REValuationRule.REValuationRule
  association [0..1] to I_REFixedAssetRelation      as _REFixedAssetRelation      on  $projection.REStatusObjectAsset = _REFixedAssetRelation.REStatusObjectAsset
  association [0..1] to I_REValuationClassification as _REValuationClassification on  $projection.REValuationClassification = _REValuationClassification.REValuationClassification
  association [0..*] to I_REContrRhythmTerm         as _RERhythmTerm              on  $projection.InternalRealEstateNumber = _RERhythmTerm.InternalRealEstateNumber
                                                                                  and _RERhythmTerm.RETermType = '1110' 
                                                                                  and $projection.REFrequencyTerm = _RERhythmTerm.RETermNumber
  association [0..1] to I_RECndnDistributionRuleExt as _RECndnDistributionRuleExt on  $projection.REDistributionRule = _RECndnDistributionRuleExt.REDistributionRule
  association [0..1] to I_REValuationRuleStatus     as _REValuationRuleStatus     on  $projection.REValuationRuleStatus = _REValuationRuleStatus.REValuationRuleStatus
  association [0..1] to I_REValuationStatus         as _REValuationStatus         on  $projection.REValuationStatus = _REValuationStatus.REValuationStatus
  association [0..1] to I_REValuationStatusReason   as _REValuationStatusReason   on  $projection.REValuationStatusReason = _REValuationStatusReason.REValuationStatusReason
  association [0..1] to I_REValuationBehavior       as _REValuationBehavior       on  $projection.REValuationBehavior = _REValuationBehavior.REValuationBehavior
  association [0..1] to I_RETaxType                 as _RETaxType                 on  $projection.Country   = _RETaxType.Country
                                                                                  and $projection.RETaxType = _RETaxType.RETaxType
  association [0..1] to I_RETaxGroup                as _RETaxGroup                on  $projection.TaxGroup = _RETaxGroup.TaxGroup


//  association [0..1] to I_REAccountingObject        as _REAccountingObject        on  $projection.REAccountingObject = _REAccountingObject.REAccountingObject
  association [0..1] to I_Currency                  as _Currency                  on  $projection.REValuationCurrency = _Currency.Currency
//  association [0..1] to I_CostCenter                as _CostCenter                on  $projection.REAccountingObject = _CostCenter.ObjectInternalID
//                                                                                  and _CostCenter.ObjectInternalID is not initial
//  association [0..1] to I_WBSElementBasicData       as _WBSElement                on  $projection.REAccountingObject = _WBSElement.WBSElementObject
//  association [0..1] to I_InternalOrder             as _InternalOrder             on  $projection.REAccountingObject = _InternalOrder.ControllingObject

{
      @ObjectModel.foreignKey.association: '_REContract'
  key _ValuationTerm.intreno                                                          as InternalRealEstateNumber,
  key _ValuationTerm.ruleguid                                                         as REValuationRuleUUID,
 //@ObjectModel.foreignKey.association: '_RETerm'
      _ValuationTerm.termno                                                           as RETermNumber,
      @ObjectModel.foreignKey.association: '_RETermType'
      _ValuationTerm.termtype                                                         as RETermType,
      cast( _ValuationTerm.validfrom as rebdvdmvalidfrom preserving type )            as ValidityStartDate,
      cast( _ValuationTerm.validto   as rebdvdmvalidto   preserving type )            as ValidityEndDate,
      @ObjectModel.foreignKey.association: '_REValuationObject'
      _ValuationTerm.objnr                                                            as REStatusObject,
      cast(_ValuationTerm.objvalidfrom as rebdvdmrelvalidfrom preserving type )       as ObjectValidFrom,
      @ObjectModel.foreignKey.association: '_REValuationRule'
      _ValuationTerm.cerule                                                           as REValuationRule,
      cast(_ValuationTerm.consbeg         as recevdmconsbeg   preserving type )       as REConsiderationStartDate,
      cast(_ValuationTerm.postbeg         as recevdmpostbeg preserving type )         as RECashFlowPostingFromDate,
      @ObjectModel.foreignKey.association: '_REFixedAssetRelation'
      cast(_ValuationTerm.assetobjnr      as recevdmasobjnr preserving type )         as REStatusObjectAsset,
      @ObjectModel.foreignKey.association: '_REValuationClassification'
      _ValuationTerm.cesltype                                                         as REValuationClassification,
      _ValuationTerm.interestrate                                                     as REInterestRate,
//      @ObjectModel.foreignKey.association: '_RERhythmTerm'
      _ValuationTerm.termnorh                                                         as REFrequencyTerm,
      @ObjectModel.foreignKey.association: '_RECndnDistributionRuleExt'
      _ValuationTerm.distrule                                                         as REDistributionRule,
      _ValuationTerm.distrulepara1                                                    as REDistributionRuleParam1,
      _ValuationTerm.distrulepara2                                                    as REDistributionRuleParam2,
      cast( _ValuationTerm.probableend   as recevdmprobableend   preserving type )    as REProbableEndDate,
      cast( _ValuationTerm.usefullifeend as recevdmusefullifeend preserving type )    as REAssetRightOfUseEndDate,
      @ObjectModel.foreignKey.association: '_REValuationRuleStatus'
      cast( _ValuationTerm.statusrule    as recevdmstatusrule    preserving type )    as REValuationRuleStatus,
      @ObjectModel.foreignKey.association: '_REValuationStatus'
      cast( _ValuationTerm.statuseval    as recevdmstatusevaluation preserving type ) as REValuationStatus,
      @ObjectModel.foreignKey.association: '_REValuationStatusReason'
      cast( _ValuationTerm.statusreason  as recevdmstatusreason preserving type )     as REValuationStatusReason,
      @ObjectModel.foreignKey.association: '_REValuationBehavior'
      _ValuationTerm.processbehavior                                                  as REValuationBehavior,
      @ObjectModel.foreignKey.association: '_RETaxType'
      _ValuationTerm.taxtype                                                          as RETaxType,
      @ObjectModel.foreignKey.association: '_RETaxGroup'
      _ValuationTerm.taxgroup                                                         as TaxGroup,
//      @ObjectModel.foreignKey.association: '_REAccountingObject'
      cast(_ValuationTerm.acctobjnr     as recevdmacctobjnr preserving type )         as REAccountingObject,
      _ValuationTerm.note                                                             as REInfoText,
      _ValuationTerm.scopenum                                                         as REValuationFactorNumerator,
      _ValuationTerm.scopedenom                                                       as REValuationFactorDenominator,
      cast(_ValuationTerm.rulecurr  as recevdmrulecurr preserving type )              as REValuationCurrency,
      _ValuationTerm.queryguid                                                        as REValuationQuestionnaireUUID,
      
      @ObjectModel.foreignKey.association: '_Country'
      _REContract._CompanyCode.Country as Country,
      _REContract._CompanyCode._Country,
      
//      @ObjectModel.foreignKey.association: '_REObjectType'
//      _REKeyAssgmt.RealEstateObjectType,
//      _REKeyAssgmt._REObjectType,
      
      _REContract,
      _RETerm,
      _RETermType,
      _REValuationObject,
      _REValuationRule,
      _REFixedAssetRelation,
      _REValuationClassification,
      _RERhythmTerm,
      _RECndnDistributionRuleExt,
      _REValuationRuleStatus,
      _REValuationStatus,
      _REValuationStatusReason,
      _REValuationBehavior,
      _RETaxType,
      _RETaxGroup,
      _REKeyAssgmt,  
//      _CostCenter,
//      _WBSElement,
//      _InternalOrder,
//      _REAccountingObject,
      _Currency
}
```
