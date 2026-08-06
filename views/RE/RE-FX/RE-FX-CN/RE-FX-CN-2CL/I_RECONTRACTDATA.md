---
name: I_RECONTRACTDATA
description: Recontractdata
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
# I_RECONTRACTDATA

**Recontractdata**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InternalRealEstateNumber` | `InternalRealEstateNumber` |
| `CompanyCode` | `CompanyCode` |
| `RealEstateContract` | `RealEstateContract` |
| `REStatusObject` | `REStatusObject` |
| `REInternalFinNumber` | `REInternalFinNumber` |
| `RECreationType` | `RECreationType` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `RESourceOfCreation` | `RESourceOfCreation` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangeTime` | `LastChangeTime` |
| `RESourceOfChange` | `RESourceOfChange` |
| `Responsible` | `Responsible` |
| `REUserExclusive` | `REUserExclusive` |
| `REAuthorizationGroup` | `REAuthorizationGroup` |
| `REContractType` | `REContractType` |
| `ContractStartDate` | `ContractStartDate` |
| `ContractEndDate` | `ContractEndDate` |
| `REContractName` | `REContractName` |
| `REContractActivateDate` | `REContractActivateDate` |
| `RETenancyLaw` | `RETenancyLaw` |
| `REContractNumberOld` | `REContractNumberOld` |
| `REMainContractCompanyCode` | `REMainContractCompanyCode` |
| `REMainContract` | `REMainContract` |
| `REContractCurrency` | `REContractCurrency` |
| `REIndustrySector` | `REIndustrySector` |
| `REIsSalesRelevant` | `REIsSalesRelevant` |
| `REContractDepositType` | `REContractDepositType` |
| `REContractSignDate` | `REContractSignDate` |
| `REContract2SignDate` | `REContract2SignDate` |
| `REContractCashFlowDate` | `REContractCashFlowDate` |
| `REContractFirstEndDate` | `REContractFirstEndDate` |
| `REContractNoticeDate` | `REContractNoticeDate` |
| `REContractNoticeInDate` | `REContractNoticeInDate` |
| `REContractNoticeReason` | `REContractNoticeReason` |
| `REContractNoticeActivationDate` | `REContractNoticeActivationDate` |
| `RECashFlowArchivedToDate` | `RECashFlowArchivedToDate` |
| `RECashFlowLockedToDate` | `RECashFlowLockedToDate` |
| `RECashFlowPostingFromDate` | `RECashFlowPostingFromDate` |
| `REBusinessEntity` | `REBusinessEntity` |
| `REObjectAvailableFromDate` | `REObjectAvailableFromDate` |
| `REObjectAvailableToDate` | `REObjectAvailableToDate` |
| `REHasMultipleAssignments` | `REHasMultipleAssignments` |
| `REPossessionStartDate` | `REPossessionStartDate` |
| `REPossessionEndDate` | `REPossessionEndDate` |
| `ValuationRelevance` | `ValuationRelevance` |
| `RealEstateObjectType` | `RealEstateObjectType` |
| `_CompanyCode` | *Association* |
| `_MainContractCompanyCode` | *Association* |
| `_CreatedByUser` | *Association* |
| `_ChangedByUser` | *Association* |
| `_ResponsibleUser` | *Association* |
| `_Currency` | *Association* |
| `_REIndustry` | *Association* |
| `_RECreationType` | *Association* |
| `_REContractType` | *Association* |
| `_RETenancyLaw` | *Association* |
| `_REContractDepositType` | *Association* |
| `_REContractNoticeReason` | *Association* |
| `_REAuthorizationGroup` | *Association* |
| `_REValuationRelevance` | *Association* |
| `_REKeyAssgmt` | *Association* |
| `_StatusObject` | *Association* |
| `_StatusObjectStatus` | *Association* |
| `_REObjectType` | *Association* |
| `_REPartnerAssgmt` | *Association* |
| `_REObjectAssgmt` | *Association* |
| `_RERenewalTerm` | *Association* |
| `_RENoticeTerm` | *Association* |
| `_REOrganizationalAssgmtTerm` | *Association* |
| `_REPostingTerm` | *Association* |
| `_RERhythmTerm` | *Association* |
| `_RECondition` | *Association* |
| `_REReminderRule` | *Association* |
| `_REValuationTerm` | *Association* |
| `_REValuationRuleCondition` | *Association* |
| `_REAdjustmentTerm` | *Association* |
| `_RESalesRuleTerm` | *Association* |
| `_RESalesReportingTerm` | *Association* |
| `_RESalesRuleFrqcyTerm` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_REContract` | [1..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECONTRACTB'
@EndUserText.label: 'Real Estate Contract'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['_REPartnerAssgmt._BusinessPartner.IsBusinessPurposeCompleted']
@AccessControl.privilegedAssociations: ['_StatusObject', '_StatusObjectStatus']

@ObjectModel.representativeKey: 'InternalRealEstateNumber'
@ObjectModel.semanticKey: ['CompanyCode', 'RealEstateContract']
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
//                                        #ANALYTICAL_PROVIDER,
                                        #CDS_MODELING_DATA_SOURCE,
//                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY      ]

@Metadata.allowExtensions: true
@VDM.viewType: #COMPOSITE

define view entity I_REContractData
  as select from I_REContract
  //  Extensibility
  association [1..1] to E_REContract                 as _Extension                  on  $projection.InternalRealEstateNumber = _Extension.InternalRealEstateNumber
{
  key InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      RealEstateContract,
      @ObjectModel.foreignKey.association: '_StatusObject'
      REStatusObject,
      REInternalFinNumber,
      @ObjectModel.foreignKey.association: '_RECreationType'
      RECreationType,
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      CreatedByUser,
      CreationDate,
      CreationTime,
      RESourceOfCreation,
      @ObjectModel.foreignKey.association: '_ChangedByUser'
      LastChangedByUser,
      LastChangeDate,
      LastChangeTime,
      RESourceOfChange,
      @ObjectModel.foreignKey.association: '_ResponsibleUser'
      Responsible,
      REUserExclusive,
      @ObjectModel.foreignKey.association: '_REAuthorizationGroup'
      REAuthorizationGroup,
      @ObjectModel.foreignKey.association: '_REContractType'
      REContractType,
      ContractStartDate,
      @EndUserText.quickInfo: 'End of Term'
      ContractEndDate,
      REContractName,
      REContractActivateDate,
      @ObjectModel.foreignKey.association: '_RETenancyLaw'
      RETenancyLaw,
      REContractNumberOld,
      @ObjectModel.foreignKey.association: '_MainContractCompanyCode'
      REMainContractCompanyCode,
      REMainContract,
      @ObjectModel.foreignKey.association: '_Currency'
      REContractCurrency,
      @ObjectModel.foreignKey.association: '_REIndustry'
      REIndustrySector,
      REIsSalesRelevant,
      @ObjectModel.foreignKey.association: '_REContractDepositType'
      REContractDepositType,
      REContractSignDate,
      REContract2SignDate,
      REContractCashFlowDate,
      REContractFirstEndDate,
      REContractNoticeDate,
      REContractNoticeInDate,
      @ObjectModel.foreignKey.association: '_REContractNoticeReason'
      REContractNoticeReason,
      REContractNoticeActivationDate,
      RECashFlowArchivedToDate,
      RECashFlowLockedToDate,
      RECashFlowPostingFromDate,
      REBusinessEntity,
      REObjectAvailableFromDate,
      REObjectAvailableToDate,
      REHasMultipleAssignments,
      REPossessionStartDate,
      REPossessionEndDate,
      @ObjectModel.foreignKey.association: '_REValuationRelevance'
      ValuationRelevance,
      @ObjectModel.foreignKey.association: '_REObjectType'
      RealEstateObjectType,
//      REIdentificationKey,
//      REBusinessPartnerRole1,

      _CompanyCode,
      _MainContractCompanyCode,
      _CreatedByUser,
      _ChangedByUser,
      _ResponsibleUser,
      _Currency,
      _REIndustry,
      _RECreationType,
      _REContractType,
      _RETenancyLaw,
      _REContractDepositType,
      _REContractNoticeReason,
      _REAuthorizationGroup,
      _REValuationRelevance,
      _REKeyAssgmt,
      _StatusObject,
      _StatusObjectStatus,
      _REObjectType,
//      _Extension,

      _REPartnerAssgmt,
      _REObjectAssgmt,
      _RERenewalTerm,
      _RENoticeTerm,
      _REOrganizationalAssgmtTerm,
      _REPostingTerm,
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
