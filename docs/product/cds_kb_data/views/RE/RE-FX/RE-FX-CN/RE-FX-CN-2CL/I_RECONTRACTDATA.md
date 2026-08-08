---
name: I_RECONTRACTDATA
description: "Recontractdata"
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `RealEstateContract` |  | |  |  |  |  |
| `REStatusObject` |  | |  |  |  |  |
| `REInternalFinNumber` |  | |  |  |  |  |
| `RECreationType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `RESourceOfCreation` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `RESourceOfChange` |  | |  |  |  |  |
| `Responsible` |  | |  |  |  |  |
| `REUserExclusive` |  | |  |  |  |  |
| `REAuthorizationGroup` |  | |  |  |  |  |
| `REContractType` |  | |  |  |  |  |
| `ContractStartDate` |  | |  |  |  |  |
| `ContractEndDate` |  | |  |  |  |  |
| `REContractName` |  | |  |  |  |  |
| `REContractActivateDate` |  | |  |  |  |  |
| `RETenancyLaw` |  | |  |  |  |  |
| `REContractNumberOld` |  | |  |  |  |  |
| `REMainContractCompanyCode` |  | |  |  |  |  |
| `REMainContract` |  | |  |  |  |  |
| `REContractCurrency` |  | |  |  |  |  |
| `REIndustrySector` |  | |  |  |  |  |
| `REIsSalesRelevant` |  | |  |  |  |  |
| `REContractDepositType` |  | |  |  |  |  |
| `REContractSignDate` |  | |  |  |  |  |
| `REContract2SignDate` |  | |  |  |  |  |
| `REContractCashFlowDate` |  | |  |  |  |  |
| `REContractFirstEndDate` |  | |  |  |  |  |
| `REContractNoticeDate` |  | |  |  |  |  |
| `REContractNoticeInDate` |  | |  |  |  |  |
| `REContractNoticeReason` |  | |  |  |  |  |
| `REContractNoticeActivationDate` |  | |  |  |  |  |
| `RECashFlowArchivedToDate` |  | |  |  |  |  |
| `RECashFlowLockedToDate` |  | |  |  |  |  |
| `RECashFlowPostingFromDate` |  | |  |  |  |  |
| `REBusinessEntity` |  | |  |  |  |  |
| `REObjectAvailableFromDate` |  | |  |  |  |  |
| `REObjectAvailableToDate` |  | |  |  |  |  |
| `REHasMultipleAssignments` |  | |  |  |  |  |
| `REPossessionStartDate` |  | |  |  |  |  |
| `REPossessionEndDate` |  | |  |  |  |  |
| `ValuationRelevance` |  | |  |  |  |  |
| `RealEstateObjectType` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_MainContractCompanyCode` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_ResponsibleUser` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_REIndustry` | | ✓ | | | | |
| `_RECreationType` | | ✓ | | | | |
| `_REContractType` | | ✓ | | | | |
| `_RETenancyLaw` | | ✓ | | | | |
| `_REContractDepositType` | | ✓ | | | | |
| `_REContractNoticeReason` | | ✓ | | | | |
| `_REAuthorizationGroup` | | ✓ | | | | |
| `_REValuationRelevance` | | ✓ | | | | |
| `_REKeyAssgmt` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_StatusObjectStatus` | | ✓ | | | | |
| `_REObjectType` | | ✓ | | | | |
| `_REPartnerAssgmt` | | ✓ | | | | |
| `_REObjectAssgmt` | | ✓ | | | | |
| `_RERenewalTerm` | | ✓ | | | | |
| `_RENoticeTerm` | | ✓ | | | | |
| `_REOrganizationalAssgmtTerm` | | ✓ | | | | |
| `_REPostingTerm` | | ✓ | | | | |
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
