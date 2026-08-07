---
name: I_RECONTRCONDITION
description: Recontrcondition
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
# I_RECONTRCONDITION

**Recontrcondition**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REConditionUUID` | ✓ | |  | `condguid` |
| `InternalRealEstateNumber` |  | |  | `intreno` |
| `REConditionType` |  | |  | `condtype` |
| `REStatusObjectCalculation` |  | |  | `cast(objnr as recdvdmobjnr preserving type )` |
| `ValidityStartDate` |  | |  | `cast (condvalidfrom as rebdvdmvalidfrom preserving type )` |
| `REStatusObjectDistribution` |  | |  | `cast(objnrdist as recdvdmobjnrdist preserving type )` |
| `REObjectTypeDistribution` |  | |  | `cast(objtypedistdist as recdvdmobjtypedist preserving type )` |
| `REObjectTypePosting` |  | |  | `cast(objtypedistpost as recdvdmtermnopy preserving type )` |
| `ValidityEndDate` |  | |  | `cast ( condvalidto as rebdvdmvalidto preserving type )` |
| `CreatedByUser` |  | |  | `rerf` |
| `CreationDate` |  | |  | `derf` |
| `CreationTime` |  | |  | `terf` |
| `RESourceOfCreation` |  | |  | `reher` |
| `LastChangedByUser` |  | |  | `rbear` |
| `LastChangeDate` |  | |  | `dbear` |
| `LastChangeTime` |  | |  | `tbear` |
| `RESourceOfChange` |  | |  | `rbher` |
| `REIsOneTimeCondition` |  | |  | `uniquecond` |
| `REConditionIsStatistical` |  | |  | `cast(infocond as recdvdminfocond preserving type )` |
| `REPostingTerm` |  | |  | `termnopy` |
| `RERhythmTerm` |  | |  | `cast(termnorh as recdvdmtermnrhy preserving type )` |
| `REAdjustmentNumber` |  | |  | `termnoaj` |
| `REOrglAssignmentTerm` |  | |  | `cast(termnooa as recdvdmtermnooa preserving type )` |
| `RESalesTerm` |  | |  | `termnosr` |
| `REPeakSalesTerm` |  | |  | `termnomr` |
| `RESrvcChrgSettlementPostingTrm` |  | |  | `termnopyscs` |
| `REWithholdingTaxTerm` |  | |  | `termnowt` |
| `RECalculationRule` |  | |  | `calcrule` |
| `REUnitPrice` |  | |  | `unitprice` |
| `REConditionCurrency` |  | |  | `cast(condcurr as recdvdmcondcurr preserving type )` |
| `RECalculationRuleParam1` |  | |  | `calcrulepara1` |
| `RECalculationRuleParam2` |  | |  | `calcrulepara2` |
| `REDistributionRule` |  | |  | `cast(distrule as recdvdmdistrule preserving type )` |
| `REDistributionRuleParam1` |  | |  | `distrulepara1` |
| `REDistributionRuleParam2` |  | |  | `distrulepara2` |
| `REExtConditionPurpose` |  | |  | `cast(condpurposeext as recdvdmcondpurposeext preserving type )` |
| `REReasonForChange` |  | |  | `chgreason` |
| `REStsObjectParamCalculation` |  | |  | `cast( objnrcalcpara as recdvdmobjnrparacalc preserving type )` |
| `REStsObjectParamDistribution` |  | |  | `cast( objnrdistpara as recdvdmobjnrparadist preserving type )` |
| `REDueDateTotNumberOfCrrtnDays` |  | |  | `duedatecorr` |
| `REDueDateNumberOfCrrtnDays` |  | |  | `duedatecorrday` |
| `REDueDateNumberOfCrrtnMonths` |  | |  | `duedatecorrmonth` |
| `RECashFlowPostingFromDate` |  | |  | `cfpostingfrom` |
| `REConditionExceptionalDueDate` |  | |  | `exduedate` |
| `REConditionFollowUpDueDate` |  | |  | `duedateup` |
| `REConditionCalcIsInvalid` |  | |  | `invalidcalc` |
| `REDistributionIsInvalid` |  | |  | `invaliddist` |
| `REServiceChrgSettlementIsActv` |  | |  | `termnopyscsact` |
| `REConditionIsToBeDeleted` |  | |  | `conddelete` |
| `REConditionObjTypeCalculation` |  | |  | `cast( left(objnr,2) as rebdbusobjtypecn preserving type )` |
| `REConditionObjTypeDistribution` |  | |  | `cast( left(objnrdist,2) as rebdbusobjtypecn preserving type )` |
| `_Currency` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_ChangedByUser` | | ✓ | | |
| `_REKeyAssgmt` | | ✓ | | |
| `_REContract` | | ✓ | | |
| `_REConditionType` | | ✓ | | |
| `_RECndnCalculationRuleExt` | | ✓ | | |
| `_REObjectTypeDistribution` | | ✓ | | |
| `_REObjectTypePosting` | | ✓ | | |
| `_RECndnDistributionRuleExt` | | ✓ | | |
| `_REConditionPurposeExt` | | ✓ | | |
| `_REConditionChangeReason` | | ✓ | | |
| `_REConditionObjTypeCalculation` | | ✓ | | |
| `_REObjectGroupCalculation` | | ✓ | | |
| `_REContractSubjectCalculation` | | ✓ | | |
| `_REObjectCalculation` | | ✓ | | |
| `_CostCenterCalculation` | | ✓ | | |
| `_WBSElementCalculation` | | ✓ | | |
| `_InternalOrderCalculation` | | ✓ | | |
| `_TechnicalObjectCalculation` | | ✓ | | |
| `_REConditionObjTypeDistr` | | ✓ | | |
| `_REObjectGroupDistribution` | | ✓ | | |
| `_REContractSubjectDistribution` | | ✓ | | |
| `_REObjectDistribution` | | ✓ | | |
| `_CostCenterDistribution` | | ✓ | | |
| `_WBSElementDistribution` | | ✓ | | |
| `_InternalOrderDistribution` | | ✓ | | |
| `_REConditionCalculation` | | ✓ | | |
| `_REConditionDistribution` | | ✓ | | |
| `_REOrganizationalAssgmtTerm` | | ✓ | | |
| `_REPostingTerm` | | ✓ | | |
| `_RERhythmTerm` | | ✓ | | |
| `_REAdjustmentTerm` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Currency` | `I_Currency` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ChangedByUser` | `I_User` | [0..1] |
| `_REKeyAssgmt` | `I_REKeyAssgmt` | [1..1] |
| `_REContract` | `I_REContract` | [1..1] |
| `_REConditionType` | `I_REConditionType` | [0..1] |
| `_RECndnCalculationRuleExt` | `I_RECndnCalculationRuleExt` | [0..1] |
| `_REObjectTypeDistribution` | `I_REObjectTypeDistribution` | [0..1] |
| `_REObjectTypePosting` | `I_REObjectTypePosting` | [0..1] |
| `_RECndnDistributionRuleExt` | `I_RECndnDistributionRuleExt` | [0..1] |
| `_REConditionPurposeExt` | `I_REConditionPurposeExt` | [0..1] |
| `_REConditionChangeReason` | `I_REConditionChangeReason` | [0..1] |
| `_REConditionObjTypeCalculation` | `I_REObjectType` | [1..1] |
| `_REObjectGroupCalculation` | `I_REObjectGroup` | [0..*] |
| `_REContractSubjectCalculation` | `I_REContractSubject` | [0..*] |
| `_REObjectCalculation` | `I_REObjectTypeDetails` | [0..1] |
| `_CostCenterCalculation` | `I_CostCenter` | [0..1] |
| `_WBSElementCalculation` | `I_WBSElementBasicData` | [0..1] |
| `_InternalOrderCalculation` | `I_InternalOrder` | [0..1] |
| `_TechnicalObjectCalculation` | `I_TechnicalObject` | [0..*] |
| `_REConditionObjTypeDistr` | `I_REObjectType` | [1..1] |
| `_REObjectGroupDistribution` | `I_REObjectGroup` | [0..*] |
| `_REContractSubjectDistribution` | `I_REContractSubject` | [0..*] |
| `_REObjectDistribution` | `I_REObjectTypeDetails` | [0..1] |
| `_CostCenterDistribution` | `I_CostCenter` | [0..1] |
| `_WBSElementDistribution` | `I_WBSElementBasicData` | [0..1] |
| `_InternalOrderDistribution` | `I_InternalOrder` | [0..1] |
| `_REConditionCalculation` | `I_REContrConditionCalculation` | [0..*] |
| `_REConditionDistribution` | `I_REConditionDistribution` | [0..*] |
| `_REOrganizationalAssgmtTerm` | `I_REContrOrglAssgmtTerm` | [1..*] |
| `_REPostingTerm` | `I_REContrPostgTrmNoSenstvDta` | [1..*] |
| `_RERhythmTerm` | `I_REContrRhythmTerm` | [1..*] |
| `_REAdjustmentTerm` | `I_REAdjustmentTerm` | [1..*] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECONDITION'
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Real Estate Conditions'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'REConditionUUID',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateContractCondition'
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
//@Search.searchable: true
define view entity I_REContrCondition
  as select from vicdcond

  association [0..1] to I_Currency                   as _Currency                      on  $projection.REConditionCurrency = _Currency.Currency
  association [0..1] to I_User                       as _CreatedByUser                 on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                       as _ChangedByUser                 on  $projection.LastChangedByUser = _ChangedByUser.UserID
  association [1..1] to I_REKeyAssgmt                as _REKeyAssgmt                   on  $projection.InternalRealEstateNumber = _REKeyAssgmt.InternalRealEstateNumber
  association [1..1] to I_REContract                 as _REContract                    on  $projection.InternalRealEstateNumber = _REContract.InternalRealEstateNumber
  

  // Condition real estate objects
  association [0..1] to I_REConditionType            as _REConditionType               on  $projection.REConditionType = _REConditionType.REConditionType
  association [0..1] to I_RECndnCalculationRuleExt   as _RECndnCalculationRuleExt      on  $projection.RECalculationRule = _RECndnCalculationRuleExt.RECalculationRule
  association [0..1] to I_REObjectTypeDistribution   as _REObjectTypeDistribution      on  $projection.REObjectTypeDistribution = _REObjectTypeDistribution.REObjectTypeDistribution
  association [0..1] to I_REObjectTypePosting        as _REObjectTypePosting           on  $projection.REObjectTypePosting = _REObjectTypePosting.REObjectTypePosting
  association [0..1] to I_RECndnDistributionRuleExt  as _RECndnDistributionRuleExt     on  $projection.REDistributionRule = _RECndnDistributionRuleExt.REDistributionRule
  association [0..1] to I_REConditionPurposeExt      as _REConditionPurposeExt         on  $projection.REExtConditionPurpose = _REConditionPurposeExt.REExtConditionPurpose
  association [0..1] to I_REConditionChangeReason    as _REConditionChangeReason       on  $projection.REReasonForChange = _REConditionChangeReason.REReasonForChange
                                                                                       and $projection.REConditionType   = _REConditionChangeReason.REConditionType
  // Calc real estate objects
  association [1..1] to I_REObjectType               as _REConditionObjTypeCalculation on  $projection.REConditionObjTypeCalculation = _REConditionObjTypeCalculation.RealEstateObjectType

  association [0..*] to I_REObjectGroup              as _REObjectGroupCalculation      on  $projection.REStatusObjectCalculation = _REObjectGroupCalculation.REStatusObject
  association [0..*] to I_REContractSubject          as _REContractSubjectCalculation  on  $projection.REStatusObjectCalculation = _REContractSubjectCalculation.REStatusObject
  association [0..1] to I_REObjectTypeDetails        as _REObjectCalculation           on  $projection.REStatusObjectCalculation = _REObjectCalculation.REStatusObject
  // Calc FI/CO objects
  association [0..1] to I_CostCenter                 as _CostCenterCalculation         on  $projection.REStatusObjectCalculation = _CostCenterCalculation.ObjectInternalID
  association [0..1] to I_WBSElementBasicData        as _WBSElementCalculation         on  $projection.REStatusObjectCalculation = _WBSElementCalculation.WBSElementObject
  association [0..1] to I_InternalOrder              as _InternalOrderCalculation      on  $projection.REStatusObjectCalculation = _InternalOrderCalculation.ControllingObject
  //Calc technical objects
  association [0..*] to I_TechnicalObject            as _TechnicalObjectCalculation    on  $projection.REStatusObjectCalculation = _TechnicalObjectCalculation.MaintObjectInternalID

  // Dist real estate objects
  association [1..1] to I_REObjectType               as _REConditionObjTypeDistr       on  $projection.REConditionObjTypeDistribution = _REConditionObjTypeDistr.RealEstateObjectType
  association [0..*] to I_REObjectGroup              as _REObjectGroupDistribution     on  $projection.REStatusObjectDistribution = _REObjectGroupDistribution.REStatusObject
  association [0..*] to I_REContractSubject          as _REContractSubjectDistribution on  $projection.REStatusObjectDistribution = _REContractSubjectDistribution.REStatusObject
  association [0..1] to I_REObjectTypeDetails        as _REObjectDistribution          on  $projection.REStatusObjectDistribution = _REObjectDistribution.REStatusObject
  // Dist FI/CO objects
  association [0..1] to I_CostCenter                 as _CostCenterDistribution        on  $projection.REStatusObjectDistribution = _CostCenterDistribution.ObjectInternalID
  association [0..1] to I_WBSElementBasicData        as _WBSElementDistribution        on  $projection.REStatusObjectDistribution = _WBSElementDistribution.WBSElementObject
  association [0..1] to I_InternalOrder              as _InternalOrderDistribution     on  $projection.REStatusObjectDistribution = _InternalOrderDistribution.ControllingObject

  //Calc/Dist Values
  association [0..*] to I_REContrConditionCalculation as _REConditionCalculation        on  $projection.REConditionUUID = _REConditionCalculation.REConditionUUID
  association [0..*] to I_REConditionDistribution    as _REConditionDistribution       on  $projection.REConditionUUID = _REConditionDistribution.REConditionUUID  

  // Terms
  association [1..*] to I_REContrOrglAssgmtTerm       as _REOrganizationalAssgmtTerm    on  $projection.InternalRealEstateNumber = _REOrganizationalAssgmtTerm.InternalRealEstateNumber
                                                                                       and $projection.REOrglAssignmentTerm     = _REOrganizationalAssgmtTerm.RETermNumber
  association [1..*] to I_REContrPostgTrmNoSenstvDta as _REPostingTerm                 on  $projection.InternalRealEstateNumber = _REPostingTerm.InternalRealEstateNumber
                                                                                       and $projection.REPostingTerm            = _REPostingTerm.RETermNumber
  association [1..*] to I_REContrRhythmTerm          as _RERhythmTerm                  on  $projection.InternalRealEstateNumber = _RERhythmTerm.InternalRealEstateNumber
                                                                                       and $projection.RERhythmTerm             = _RERhythmTerm.RETermNumber
  association [1..*] to I_REAdjustmentTerm           as _REAdjustmentTerm              on  $projection.InternalRealEstateNumber = _REAdjustmentTerm.InternalRealEstateNumber
                                                                                       and $projection.REAdjustmentNumber       = _REAdjustmentTerm.RETermNumber                                                                                                                                                                                                                                                   
{
  key   condguid                                                       as REConditionUUID,
        intreno                                                        as InternalRealEstateNumber,
        @ObjectModel.foreignKey.association: '_REConditionType'
        condtype                                                       as REConditionType,
        cast(objnr as recdvdmobjnr preserving type )                   as REStatusObjectCalculation,
        @Semantics.businessDate.from: true
        cast (condvalidfrom as rebdvdmvalidfrom preserving type )      as ValidityStartDate,
        cast(objnrdist as recdvdmobjnrdist preserving type )           as REStatusObjectDistribution,
        @ObjectModel.foreignKey.association: '_REObjectTypeDistribution'
        cast(objtypedistdist as recdvdmobjtypedist preserving type )   as REObjectTypeDistribution,
        @ObjectModel.foreignKey.association: '_REObjectTypePosting'
        cast(objtypedistpost as recdvdmtermnopy preserving type )      as REObjectTypePosting,

        @Semantics.businessDate.to: true
        cast ( condvalidto as rebdvdmvalidto preserving type )         as ValidityEndDate,

        @Semantics.user.createdBy: true
        @ObjectModel.foreignKey.association: '_CreatedByUser'
        rerf                                                           as CreatedByUser,
        derf                                                           as CreationDate,
        terf                                                           as CreationTime,
        reher                                                          as RESourceOfCreation,
        @ObjectModel.foreignKey.association: '_ChangedByUser'
        rbear                                                          as LastChangedByUser,
        dbear                                                          as LastChangeDate,
        tbear                                                          as LastChangeTime,
        rbher                                                          as RESourceOfChange,

        uniquecond                                                     as REIsOneTimeCondition,
        cast(infocond as recdvdminfocond preserving type )             as REConditionIsStatistical,

        termnopy                                                       as REPostingTerm,
        cast(termnorh as recdvdmtermnrhy preserving type )             as RERhythmTerm,
        termnoaj                                                       as REAdjustmentNumber,
        cast(termnooa as recdvdmtermnooa preserving type )             as REOrglAssignmentTerm,
        termnosr                                                       as RESalesTerm,
        termnomr                                                       as REPeakSalesTerm,
        termnopyscs                                                    as RESrvcChrgSettlementPostingTrm,
        termnowt                                                       as REWithholdingTaxTerm,

        @ObjectModel.foreignKey.association: '_RECndnCalculationRuleExt'
        calcrule                                                       as RECalculationRule,

        @Semantics.amount.currencyCode: 'REConditionCurrency'
        unitprice                                                      as REUnitPrice,
        cast(condcurr as recdvdmcondcurr preserving type )             as REConditionCurrency,

        calcrulepara1                                                  as RECalculationRuleParam1,
        calcrulepara2                                                  as RECalculationRuleParam2,
        @ObjectModel.foreignKey.association: '_RECndnDistributionRuleExt'
        cast(distrule as recdvdmdistrule preserving type )             as REDistributionRule,
        distrulepara1                                                  as REDistributionRuleParam1,
        distrulepara2                                                  as REDistributionRuleParam2,
        @ObjectModel.foreignKey.association: '_REConditionPurposeExt'
        cast(condpurposeext as recdvdmcondpurposeext preserving type ) as REExtConditionPurpose,
        @ObjectModel.foreignKey.association: '_REConditionChangeReason'
        chgreason                                                      as REReasonForChange,
        cast( objnrcalcpara as  recdvdmobjnrparacalc preserving type ) as REStsObjectParamCalculation,
        cast( objnrdistpara as recdvdmobjnrparadist preserving type )  as REStsObjectParamDistribution,

        //      additional search/analytics fields right now not exposed to API
        duedatecorr                                                    as REDueDateTotNumberOfCrrtnDays,
        duedatecorrday                                                 as REDueDateNumberOfCrrtnDays,
        duedatecorrmonth                                               as REDueDateNumberOfCrrtnMonths,
        cfpostingfrom                                                  as RECashFlowPostingFromDate,
        exduedate                                                      as REConditionExceptionalDueDate,
        duedateup                                                      as REConditionFollowUpDueDate,
        invalidcalc                                                    as REConditionCalcIsInvalid,
        invaliddist                                                    as REDistributionIsInvalid,
        termnopyscsact                                                 as REServiceChrgSettlementIsActv,
        conddelete                                                     as REConditionIsToBeDeleted,

        cast( left(objnr,2) as rebdbusobjtypecn preserving type )      as REConditionObjTypeCalculation,
        cast( left(objnrdist,2) as rebdbusobjtypecn preserving type )  as REConditionObjTypeDistribution,

        _Currency,
        _CreatedByUser,
        _ChangedByUser,
        _REKeyAssgmt,
        _REContract,

        _REConditionType,
        _RECndnCalculationRuleExt,
        _REObjectTypeDistribution,
        _REObjectTypePosting,
        _RECndnDistributionRuleExt,
        _REConditionPurposeExt,
        _REConditionChangeReason,

        _REConditionObjTypeCalculation,
        _REObjectGroupCalculation,
        _REContractSubjectCalculation,
        _REObjectCalculation,
        _CostCenterCalculation,
        _WBSElementCalculation,
        _InternalOrderCalculation,
        _TechnicalObjectCalculation,
        _REConditionCalculation,

        _REConditionObjTypeDistr,
        _REObjectGroupDistribution,
        _REContractSubjectDistribution,
        _REObjectDistribution,
        _CostCenterDistribution,
        _WBSElementDistribution,
        _InternalOrderDistribution,
        _REConditionDistribution, 
        
        _REOrganizationalAssgmtTerm,
        _REPostingTerm,
        _RERhythmTerm,
        _REAdjustmentTerm
} where intreno like 'IS%'
```
