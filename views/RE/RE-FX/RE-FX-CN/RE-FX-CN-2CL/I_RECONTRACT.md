---
name: I_RECONTRACT
description: Recontract
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
# I_RECONTRACT

**Recontract**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | |  | `intreno` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `RealEstateContract` |  | |  | `cast(recnnr as recnvdmcnnr preserving type )` |  |  |
| `REStatusObject` |  | |  | `objnr` |  |  |
| `REInternalFinNumber` |  | |  | `cast(imkey as recaimkeyfi preserving type )` |  |  |
| `RealEstateContractOID` |  | |  | `oid` |  |  |
| `REContractAlternativeID` |  | |  | `alternativeid` |  |  |
| `RECreationType` |  | |  | `creationtype` |  |  |
| `CreatedByUser` |  | |  | `rerf` |  |  |
| `CreationDate` |  | |  | `derf` |  |  |
| `CreationTime` |  | |  | `terf` |  |  |
| `RESourceOfCreation` |  | |  | `reher` |  |  |
| `LastChangedByUser` |  | |  | `rbear` |  |  |
| `LastChangeDate` |  | |  | `dbear` |  |  |
| `LastChangeTime` |  | |  | `tbear` |  |  |
| `RESourceOfChange` |  | |  | `rbher` |  |  |
| `Responsible` |  | |  | `responsible` |  |  |
| `REUserExclusive` |  | |  | `userexclusive` |  |  |
| `REAuthorizationGroup` |  | |  | `authgrp` |  |  |
| `REContractType` |  | |  | `recntype` |  |  |
| `ContractStartDate` |  | |  | `cast( recnbeg as recnvdmcnbeg preserving type )` |  |  |
| `ContractEndDate` |  | |  | `cast( recnendabs as recnvdmcnendabs preserving type )` |  |  |
| `REContractName` |  | |  | `cast( recntxt as recnvdmcnname preserving type )` |  |  |
| `REContractActivateDate` |  | |  | `cast(recndactiv as recnvdmdaktv preserving type )` |  |  |
| `RETenancyLaw` |  | |  | `cast( recntlaw as recnvdmcntlaw preserving type)` |  |  |
| `REContractNumberOld` |  | |  | `cast( recntxtold as recnvdmcntxtold preserving type)` |  |  |
| `REMainContractCompanyCode` |  | |  | `cast( recnbukrscollect as recnvdmcnbukrscode preserving type)` |  |  |
| `REMainContract` |  | |  | `recnnrcollect` |  |  |
| `REContractCurrency` |  | |  | `recncncurr` |  |  |
| `REIndustrySector` |  | |  | `industry` |  |  |
| `REIsSalesRelevant` |  | |  | `srrelevant` |  |  |
| `REContractDepositType` |  | |  | `cast(dptargettype as recnvdmdepotype preserving type)` |  |  |
| `REContractSignDate` |  | |  | `recndat` |  |  |
| `REContract2SignDate` |  | |  | `cast(recn2dat as recnvdm2date preserving type)` |  |  |
| `REContractCashFlowDate` |  | |  | `recndpo` |  |  |
| `REContractFirstEndDate` |  | |  | `cast(recnend1st as recnvdmcnend1st preserving type)` |  |  |
| `REContractNoticeDate` |  | |  | `recnnotper` |  |  |
| `REContractNoticeInDate` |  | |  | `recnnotreceipt` |  |  |
| `REContractNoticeReason` |  | |  | `recnnotreason` |  |  |
| `REContractNoticeActivationDate` |  | |  | `recndaktku` |  |  |
| `RECashFlowArchivedToDate` |  | |  | `cfarchivedto` |  |  |
| `RECashFlowLockedToDate` |  | |  | `cflockedto` |  |  |
| `RECashFlowPostingFromDate` |  | |  | `cfpostingfrom` |  |  |
| `REBusinessEntity` |  | |  | `cast(benocn as rebdvdmbeno preserving type)` |  |  |
| `REObjectAvailableFromDate` |  | |  | `cast(transpossfrom as recnvdmtranspossfrom preserving type)` |  |  |
| `REObjectAvailableToDate` |  | |  | `cast ( transpossto as recnvdmtranspossto preserving type )` |  |  |
| `REHasMultipleAssignments` |  | |  | `hasmultiassign` |  |  |
| `REPossessionStartDate` |  | |  | `possdatefrom` |  |  |
| `REPossessionEndDate` |  | |  | `possdateto` |  |  |
| `ValuationRelevance` |  | |  | `relevanteval` |  |  |
| `RealEstateObjectType` |  | | `_REKeyAssgmt` | `RealEstateObjectType` |  |  |
| `REIdentificationKey` |  | | `_REKeyAssgmt` | `REIdentificationKey` |  |  |
| `REBusinessPartnerRole1` |  | | `_REContractType` | `REBusinessPartnerRole1` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_MainContractCompanyCode` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_ResponsibleUser` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_REIndustry` | | ✓ | | | | |
| `_RECreationType` | | ✓ | | | | |
| `_REContractType` | | ✓ | | | | |
| `_REContractType_2` | | ✓ | | | | |
| `_RETenancyLaw` | | ✓ | | | | |
| `_REContractDepositType` | | ✓ | | | | |
| `_REContractNoticeReason` | | ✓ | | | | |
| `_REKeyAssgmt` | | ✓ | | | | |
| `_REObjectType` | | ✓ | | | | |
| `_REAuthorizationGroup` | | ✓ | | | | |
| `_REValuationRelevance` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_StatusObjectStatus` | | ✓ | | | | |
| `_REPartnerAssgmt` | | ✓ | | | | |
| `_REContrPartnerAssgmt` | | ✓ | | | | |
| `_REObjectAssgmt` | | ✓ | | | | |
| `_RERenewalTerm` | | ✓ | | | | |
| `_RENoticeTerm` | | ✓ | | | | |
| `_REOrganizationalAssgmtTerm` | | ✓ | | | | |
| `_REPostingTerm` | | ✓ | | | | |
| `_REContrPostgTrmNoSenstvDta` | | ✓ | | | | |
| `_RERhythmTerm` | | ✓ | | | | |
| `_RECondition` | | ✓ | | | | |
| `_REReminderRule` | | ✓ | | | | |
| `_REValuationTerm` | | ✓ | | | | |
| `_REValuationRuleCondition` | | ✓ | | | | |
| `_REAdjustmentTerm` | | ✓ | | | | |
| `_RESalesRuleTerm` | | ✓ | | | | |
| `_RESalesReportingTerm` | | ✓ | | | | |
| `_RESalesRuleFrqcyTerm` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_MainContractCompanyCode` | `I_CompanyCode` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ChangedByUser` | `I_User` | [0..1] |
| `_ResponsibleUser` | `I_User` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_REIndustry` | `I_REIndustry_2` | [0..1] |
| `_RECreationType` | `I_RECreationType` | [0..1] |
| `_REContractType` | `I_REContractType` | [1..1] |
| `_REContractType_2` | `I_REContractType_2` | [1..1] |
| `_RETenancyLaw` | `I_RETenancyLaw` | [0..1] |
| `_REContractDepositType` | `I_REContractDepositType` | [0..1] |
| `_REContractNoticeReason` | `I_REContractNoticeReason` | [0..1] |
| `_REKeyAssgmt` | `I_REKeyAssgmt` | [1..1] |
| `_REObjectType` | `I_REObjectType` | [1..1] |
| `_REAuthorizationGroup` | `I_REAuthorizationGroup` | [0..1] |
| `_REValuationRelevance` | `I_REValuationRelevance_2` | [0..1] |
| `_StatusObject` | `I_StatusObject` | [0..1] |
| `_StatusObjectStatus` | `I_StatusObjectStatus` | [1..*] |
| `_REPartnerAssgmt` | `I_REPartnerAssgmt` | [0..*] |
| `_REContrPartnerAssgmt` | `I_REContrPartnerAssgmt` | [0..*] |
| `_REObjectAssgmt` | `I_REContractObjectAssgmt` | [0..*] |
| `_RERenewalTerm` | `I_RERenewalTerm` | [0..*] |
| `_RENoticeTerm` | `I_RENoticeTerm` | [0..*] |
| `_REOrganizationalAssgmtTerm` | `I_REContrOrglAssgmtTerm` | [1..*] |
| `_REPostingTerm` | `I_REPostingTerm` | [1..*] |
| `_REContrPostgTrmNoSenstvDta` | `I_REContrPostgTrmNoSenstvDta` | [1..*] |
| `_RERhythmTerm` | `I_REContrRhythmTerm` | [1..*] |
| `_RECondition` | `I_REContrCondition` | [0..*] |
| `_REReminderRule` | `I_REReminderObjRule` | [0..*] |
| `_REValuationTerm` | `I_REValuationTerm` | [0..*] |
| `_REValuationRuleCondition` | `I_REValuationRuleCondition` | [0..*] |
| `_REAdjustmentTerm` | `I_REAdjustmentTerm` | [0..*] |
| `_RESalesRuleTerm` | `I_RESalesRuleTerm` | [0..*] |
| `_RESalesReportingTerm` | `I_RESalesReportingTerm` | [0..*] |
| `_RESalesRuleFrqcyTerm` | `I_RESalesRuleFrequencyTerm` | [0..*] |
| `_Extension` | `E_REContract` | [1..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECONTRACT'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['_REPartnerAssgmt._BusinessPartner.IsBusinessPurposeCompleted']
@AccessControl.privilegedAssociations: ['_StatusObject', '_StatusObjectStatus', '_CreatedByUser', '_ChangedByUser', '_ResponsibleUser']
@EndUserText.label: 'Real Estate Contract'
@ObjectModel: {
  representativeKey: 'InternalRealEstateNumber',
  semanticKey: ['CompanyCode', 'RealEstateContract'],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  objectIdentifier.oidElement: 'RealEstateContractOID',
  sapObjectNodeType.name: 'RealEstateContract'
}
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true
//        delta.changeDataCapture: {
//        automatic: true
//        }
    }
}
@ODM.oid: 'RealEstateContractOID'
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@VDM.viewType: #BASIC

define view entity I_REContract
  as select from vicncn
  association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CompanyCode                as _MainContractCompanyCode    on  $projection.REMainContractCompanyCode = _MainContractCompanyCode.CompanyCode
  association [0..1] to I_User                       as _CreatedByUser              on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                       as _ChangedByUser              on  $projection.LastChangedByUser = _ChangedByUser.UserID
  association [0..1] to I_User                       as _ResponsibleUser            on  $projection.Responsible = _ResponsibleUser.UserID
  association [0..1] to I_Currency                   as _Currency                   on  $projection.REContractCurrency = _Currency.Currency
  association [0..1] to I_REIndustry_2               as _REIndustry                 on  $projection.REIndustrySector = _REIndustry.IndustrySector
  association [0..1] to I_RECreationType             as _RECreationType             on  $projection.RECreationType = _RECreationType.RECreationType
  association [1..1] to I_REContractType             as _REContractType             on  $projection.REContractType = _REContractType.REContractType
  association [1..1] to I_REContractType_2           as _REContractType_2             on  $projection.REContractType = _REContractType_2.REContractType
  association [0..1] to I_RETenancyLaw               as _RETenancyLaw               on  $projection.RETenancyLaw = _RETenancyLaw.RETenancyLaw
  association [0..1] to I_REContractDepositType      as _REContractDepositType      on  $projection.REContractDepositType = _REContractDepositType.REContractDepositType
  association [0..1] to I_REContractNoticeReason     as _REContractNoticeReason     on  $projection.REContractNoticeReason = _REContractNoticeReason.REContractNoticeReason
  association [1..1] to I_REKeyAssgmt                as _REKeyAssgmt                on  $projection.InternalRealEstateNumber = _REKeyAssgmt.InternalRealEstateNumber
  association [1..1] to I_REObjectType               as _REObjectType               on  $projection.RealEstateObjectType = _REObjectType.RealEstateObjectType
  association [0..1] to I_REAuthorizationGroup       as _REAuthorizationGroup       on  $projection.REAuthorizationGroup = _REAuthorizationGroup.REAuthorizationGroup
                                                                                    and $projection.RealEstateObjectType = _REAuthorizationGroup.RealEstateObjectType
  association [0..1] to I_REValuationRelevance_2     as _REValuationRelevance       on  $projection.ValuationRelevance = _REValuationRelevance.ValuationRelevance
  association [0..1] to I_StatusObject               as _StatusObject               on  $projection.REStatusObject = _StatusObject.StatusObject
  association [1..*] to I_StatusObjectStatus         as _StatusObjectStatus         on  $projection.REStatusObject = _StatusObjectStatus.StatusObject
  //  children
  association [0..*] to I_REPartnerAssgmt            as _REPartnerAssgmt            on  $projection.InternalRealEstateNumber = _REPartnerAssgmt.InternalRealEstateNumber
  association [0..*] to I_REContrPartnerAssgmt       as _REContrPartnerAssgmt       on  $projection.InternalRealEstateNumber = _REContrPartnerAssgmt.InternalRealEstateNumber
  association [0..*] to I_REContractObjectAssgmt     as _REObjectAssgmt             on  $projection.REStatusObject = _REObjectAssgmt.REStatusObjectSource
  association [0..*] to I_RERenewalTerm              as _RERenewalTerm              on  $projection.InternalRealEstateNumber = _RERenewalTerm.InternalRealEstateNumber
  association [0..*] to I_RENoticeTerm               as _RENoticeTerm               on  $projection.InternalRealEstateNumber = _RENoticeTerm.InternalRealEstateNumber
  association [1..*] to I_REContrOrglAssgmtTerm      as _REOrganizationalAssgmtTerm on  $projection.InternalRealEstateNumber = _REOrganizationalAssgmtTerm.InternalRealEstateNumber
  association [1..*] to I_REPostingTerm              as _REPostingTerm              on  $projection.InternalRealEstateNumber = _REPostingTerm.InternalRealEstateNumber
  association [1..*] to I_REContrPostgTrmNoSenstvDta as _REContrPostgTrmNoSenstvDta on  $projection.InternalRealEstateNumber = _REContrPostgTrmNoSenstvDta.InternalRealEstateNumber
  association [1..*] to I_REContrRhythmTerm          as _RERhythmTerm               on  $projection.InternalRealEstateNumber = _RERhythmTerm.InternalRealEstateNumber
  association [0..*] to I_REContrCondition           as _RECondition                on  $projection.InternalRealEstateNumber = _RECondition.InternalRealEstateNumber
  association [0..*] to I_REReminderObjRule          as _REReminderRule             on  $projection.InternalRealEstateNumber = _REReminderRule.InternalRealEstateNumber
  association [0..*] to I_REValuationTerm            as _REValuationTerm            on  $projection.InternalRealEstateNumber = _REValuationTerm.InternalRealEstateNumber
  association [0..*] to I_REValuationRuleCondition   as _REValuationRuleCondition   on  $projection.InternalRealEstateNumber = _REValuationRuleCondition.InternalRealEstateNumber
  association [0..*] to I_REAdjustmentTerm           as _REAdjustmentTerm           on  $projection.InternalRealEstateNumber = _REAdjustmentTerm.InternalRealEstateNumber
  association [0..*] to I_RESalesRuleTerm            as _RESalesRuleTerm            on  $projection.InternalRealEstateNumber = _RESalesRuleTerm.InternalRealEstateNumber
  association [0..*] to I_RESalesReportingTerm       as _RESalesReportingTerm       on  $projection.InternalRealEstateNumber = _RESalesReportingTerm.InternalRealEstateNumber
  association [0..*] to I_RESalesRuleFrequencyTerm   as _RESalesRuleFrqcyTerm       on  $projection.InternalRealEstateNumber = _RESalesRuleFrqcyTerm.InternalRealEstateNumber
  
  //  Extensibility
  association [1..1] to E_REContract                 as _Extension                  on  $projection.InternalRealEstateNumber = _Extension.InternalRealEstateNumber
{
  key intreno                                                       as InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                         as CompanyCode,
      cast(recnnr as recnvdmcnnr preserving type )                  as RealEstateContract,
      @ObjectModel.foreignKey.association: '_StatusObject'
      objnr                                                         as REStatusObject,
      cast(imkey as recaimkeyfi preserving type )                   as REInternalFinNumber,
      oid                                                           as RealEstateContractOID,
      alternativeid                                                 as REContractAlternativeID,
      @ObjectModel.foreignKey.association: '_RECreationType'
      creationtype                                                  as RECreationType,
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      rerf                                                          as CreatedByUser,
      derf                                                          as CreationDate,
      terf                                                          as CreationTime,
      reher                                                         as RESourceOfCreation,
      @ObjectModel.foreignKey.association: '_ChangedByUser'
      rbear                                                         as LastChangedByUser,
      dbear                                                         as LastChangeDate,
      tbear                                                         as LastChangeTime,
      rbher                                                         as RESourceOfChange,
      @ObjectModel.foreignKey.association: '_ResponsibleUser'
      responsible                                                   as Responsible,
      userexclusive                                                 as REUserExclusive,
      @ObjectModel.foreignKey.association: '_REAuthorizationGroup'
      authgrp                                                       as REAuthorizationGroup,
      @ObjectModel.foreignKey.association: '_REContractType'
      recntype                                                      as REContractType,
      cast( recnbeg as recnvdmcnbeg preserving type )               as ContractStartDate,
      @EndUserText.quickInfo: 'End of Term'
      cast( recnendabs as recnvdmcnendabs preserving type )         as ContractEndDate,
      cast( recntxt as recnvdmcnname preserving type )              as REContractName,
      cast(recndactiv as recnvdmdaktv preserving type )             as REContractActivateDate,
      @ObjectModel.foreignKey.association: '_RETenancyLaw'
      cast( recntlaw as recnvdmcntlaw preserving type)              as RETenancyLaw,
      cast( recntxtold as recnvdmcntxtold preserving type)          as REContractNumberOld,
      @ObjectModel.foreignKey.association: '_MainContractCompanyCode'
      cast( recnbukrscollect as recnvdmcnbukrscode preserving type) as REMainContractCompanyCode,
      recnnrcollect                                                 as REMainContract,
      @ObjectModel.foreignKey.association: '_Currency'
      recncncurr                                                    as REContractCurrency,
      @ObjectModel.foreignKey.association: '_REIndustry'
      industry                                                      as REIndustrySector,
      srrelevant                                                    as REIsSalesRelevant,
      @ObjectModel.foreignKey.association: '_REContractDepositType'
      cast(dptargettype as recnvdmdepotype preserving type)         as REContractDepositType,
      recndat                                                       as REContractSignDate,
      cast(recn2dat as recnvdm2date preserving type)                as REContract2SignDate,
      recndpo                                                       as REContractCashFlowDate,
      cast(recnend1st as recnvdmcnend1st preserving type)           as REContractFirstEndDate,
      recnnotper                                                    as REContractNoticeDate,
      recnnotreceipt                                                as REContractNoticeInDate,
      @ObjectModel.foreignKey.association: '_REContractNoticeReason'
      recnnotreason                                                 as REContractNoticeReason,
      recndaktku                                                    as REContractNoticeActivationDate,
      cfarchivedto                                                  as RECashFlowArchivedToDate,
      cflockedto                                                    as RECashFlowLockedToDate,
      cfpostingfrom                                                 as RECashFlowPostingFromDate,
      cast(benocn as rebdvdmbeno preserving type)                   as REBusinessEntity,
      cast(transpossfrom as recnvdmtranspossfrom preserving type)   as REObjectAvailableFromDate,
      cast ( transpossto as recnvdmtranspossto preserving type )    as REObjectAvailableToDate,
      hasmultiassign                                                as REHasMultipleAssignments,
      possdatefrom                                                  as REPossessionStartDate,
      possdateto                                                    as REPossessionEndDate,
      @ObjectModel.foreignKey.association: '_REValuationRelevance'
      relevanteval                                                  as ValuationRelevance,
      @ObjectModel.foreignKey.association: '_REObjectType'
      _REKeyAssgmt.RealEstateObjectType                             as RealEstateObjectType,
      _REKeyAssgmt.REIdentificationKey                              as REIdentificationKey,
      _REContractType.REBusinessPartnerRole1                        as REBusinessPartnerRole1,


      _CompanyCode,
      _MainContractCompanyCode,
      _CreatedByUser,
      _ChangedByUser,
      _ResponsibleUser,
      _Currency,
      _REIndustry,
      _RECreationType,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_REContractType_2'
      _REContractType,
      _REContractType_2,
      _RETenancyLaw,
      _REContractDepositType,
      _REContractNoticeReason,
      _REAuthorizationGroup,
      _REValuationRelevance,
      _REKeyAssgmt,
      //        _REKeyAssgmt._REObjectType,
      _StatusObject,
      _StatusObjectStatus,
      _REObjectType,
      _REContrPartnerAssgmt,
      _REPartnerAssgmt,
      _REObjectAssgmt,
      _RERenewalTerm,
      _RENoticeTerm,
      _REOrganizationalAssgmtTerm,
      _REPostingTerm,
      _REContrPostgTrmNoSenstvDta,
      _RERhythmTerm,
      _RECondition,
      _REReminderRule,
      _REValuationTerm,
      _REValuationRuleCondition,
      _REAdjustmentTerm,
      _RESalesRuleTerm,
      _RESalesReportingTerm,
      _RESalesRuleFrqcyTerm
}
```
