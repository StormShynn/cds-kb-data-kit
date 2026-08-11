---
name: I_CADUNNINGHEADER
description: "Contract Accounting Dunning"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGHEADER')/$value
semantic_en: "Contract Accounting Dunning"
semantic_vi: "Contract Accounting Dunning — CDS view giao diện (transactional data) dựa trên fkkmako."
keywords:
  - "Contract Accounting Dunning Header"
  - "contract"
  - "accounting"
  - "dunning"
  - "mass"
  - "date"
  - "business"
  - "partner"
  - "account"
  - "counter"
tags:
  - FI
  - account
  - component:FI-CA-2CL
  - contract
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
---
# I_CADUNNINGHEADER

**Contract Accounting Dunning**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAMassRunDate` | ✓ | |  | `laufd` | `DATS(8)` | Date ID |
| `CAMassRunID` | ✓ | |  | `laufi` | `CHAR(6)` | Additional Identification Characteristic |
| `BusinessPartner` | ✓ | |  | `gpart` | `CHAR(10)` | Business Partner Number |
| `ContractAccount` | ✓ | |  | `vkont` | `CHAR(12)` | Contract Account Number |
| `CADunningCounter` | ✓ | |  | `mazae` | `NUMC(6)` | Counter for Several Dunning Notices to a Business Partner |
| `CACompanyCodeGroup` |  | |  | `opbuk` | `CHAR(4)` | Company Code Group |
| `CAStandardCompanyCode` |  | |  | `stdbk` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  | `gsber` | `CHAR(4)` | Business Area |
| `Division` |  | |  | `spart` | `CHAR(2)` | Division |
| `CAContract` |  | |  | `vtref` | `CHAR(20)` | Reference Specifications from Contract |
| `CASubApplication` |  | |  | `subap` | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `CALeadingContractAccount` |  | |  | `vknt1` | `CHAR(12)` | Leading Contract Account in Dunning |
| `CAAlternativeDunningRecipient` |  | |  | `abwma` | `CHAR(10)` | Alternative Dunning Recipient |
| `CADunningProcedure` |  | |  | `mahnv` | `CHAR(2)` | Dunning Procedure |
| `CADunningNoticeGroup` |  | |  | `mgrup` | `CHAR(2)` | Grouping for Dunning Notices |
| `CADunningLevel` |  | |  | `mahns` | `NUMC(2)` | Dunning Level |
| `CADunningLevelCategory` |  | |  | `mstyp` | `CHAR(2)` | Dunning Level Category |
| `CAContrAcctGroupForCollMgmt` |  | |  | `vkontgrp` | `CHAR(12)` | Collection Management: Contract Account Group |
| `CAContractGroupForCollMgmt` |  | |  | `vtrefgrp` | `CHAR(20)` | Collection Management: Contract Group |
| `CAClosedItemGroupForCollMgmt` |  | |  | `itemgrp` | `DEC(15)` | Closed Item Group for Dunning |
| `CAClosedItemGroupOfLastDunning` |  | |  | `itemgrp_last` | `DEC(15)` | Item Group in Last Dunning Notice |
| `CAGroupingFieldForCollMgmt` |  | |  | `grpfield` | `CHAR(12)` | Grouping Field for Dunning |
| `CAGroupingFieldOfLastDunning` |  | |  | `grpfield_last` | `CHAR(12)` | Grouping Field in Last Dunning Notice |
| `CACollectionStrategy` |  | |  | `strat` | `CHAR(2)` | Collection Strategy |
| `CACollectionStep` |  | |  | `step` | `CHAR(4)` | Collection Step |
| `CACollectionStepOfLastDunning` |  | |  | `step_last` | `CHAR(4)` | Collection Step of Last Dunning |
| `CAReplacedCollectionStep` |  | |  | `step_replaced` | `CHAR(4)` | Replaced Collection Step (Capacity Restriction) |
| `CAReplacedCollectionStrategy` |  | |  | `strat_champ` | `CHAR(2)` | Champion Collection Strategy |
| `CACollectionTestSeries` |  | |  | `tests` | `CHAR(10)` | Collection Management: Test Series for Collection Strategies |
| `CACapForDunActyIsRestricted` |  | |  | `limited` | `CHAR(1)` | Capacity for Dunning Activity Restricted |
| `CADunningNoticeMustBeReleased` |  | |  | `relea` | `CHAR(1)` | Release Dunning |
| `CALatestReleaseDate` |  | |  | `reldate` | `DATS(8)` | Latest Release Date |
| `CAReleaseGroup` |  | |  | `relgroup` | `CHAR(4)` | Release Group |
| `CANextDunningDate` |  | |  | `nexdt` | `DATS(8)` | Date of Next Dunning |
| `CAIssueDate` |  | |  | `ausdt` | `DATS(8)` | Date of Issue |
| `DunningIssueDate` |  | |  | `ausdt` | `DATS(8)` | Date of Issue |
| `CADunningActivityRunDate` |  | |  | `mdrkd` | `DATS(8)` | Execution Date of Dunning Notice |
| `CAPaymentTargetDate` |  | |  | `frdat` | `DATS(8)` | Payment Target in Dunning Notice |
| `CAKeyDateForConsideredPayts` |  | |  | `todat` | `DATS(8)` | Date Up to Which Payments Were Considered (Dunning) |
| `TransactionCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `CADunningBalance` |  | |  | `msalm` | `CURR(13)` | Dunning Balance |
| `CADunningReductionAmount` |  | |  | `rsalm` | `CURR(13)` | Total of Dunning Reductions |
| `CADunningChargesSchema` |  | |  | `chgid` | `CHAR(2)` | Charges Schedule |
| `CAAmountForDunningCharge1` |  | |  | `mge1m` | `CURR(13)` | Dun. charge 1 |
| `CADocumentForDunningCharge1` |  | |  | `mg1bl` | `CHAR(12)` | Doc no. for charge 1 |
| `CATypeForDunningCharge1` |  | |  | `mg1ty` | `CHAR(2)` | Charge type f. charge 1 |
| `CAPostingCodeForDunningCharge1` |  | |  | `post1` | `CHAR(1)` | Posting Key for Charges |
| `CAAmountForDunningCharge2` |  | |  | `mge2m` | `CURR(13)` | Dun.charge 2 |
| `CADocumentForDunningCharge2` |  | |  | `mg2bl` | `CHAR(12)` | Doc number for charge 2 |
| `CATypeForDunningCharge2` |  | |  | `mg2ty` | `CHAR(2)` | Charge type f. charge 2 |
| `CAPostingCodeForDunningCharge2` |  | |  | `post2` | `CHAR(1)` | Posting Key for Charges |
| `CAAmountForDunningCharge3` |  | |  | `mge3m` | `CURR(13)` | Dun.charge 3 |
| `CADocumentForDunningCharge3` |  | |  | `mg3bl` | `CHAR(12)` | Doc number for charge 3 |
| `CATypeForDunningCharge3` |  | |  | `mg3ty` | `CHAR(2)` | Charge type f. charge 3 |
| `CAPostingCodeForDunningCharge3` |  | |  | `post3` | `CHAR(1)` | Posting Key for Charges |
| `CADunningChargeAmount` |  | |  | `( mge1m + mge2m + mge3m )` | `CURR(15)` |  |
| `CADunningInterestAmount` |  | |  | `mintm` | `CURR(13)` | Dunning interest in transaction currency |
| `CADocumentForDunningInterest` |  | |  | `mibel` | `CHAR(12)` | Doc no. of interest posting |
| `CACreditWorthinessBeforeDun` |  | |  | `bonit` | `NUMC(4)` | Creditworthiness Before Dunning |
| `CADunningNoticeIsReversed` |  | |  | `xmsto` | `CHAR(1)` | Dunning Notice Reversed |
| `CAPaymentFormNumber` |  | |  | `nrzas` | `CHAR(12)` | Payment Form Number |
| `CADunningNoticeIsInfoOnly` |  | |  | `xinfo` | `CHAR(1)` | Group Not Due For Dunning/Information Only |
| `CorrespondenceKey` |  | |  | `cokey` | `CHAR(36)` | Correspondence Key |
| `CAIsSubmittedToCollAgency` |  | |  | `xcoll` | `CHAR(1)` | Release for Submission to Collection Agency |
| `CAPaymentFormExternalNumber` |  | |  | `rfzas` | `CHAR(30)` | External key payment form |
| `CAStatisticalItemCode` |  | |  | `stakz` | `CHAR(1)` | Type of Statistical Line Item |
| `CASubstituteDocumentCategory` |  | |  | `abwtp` | `CHAR(1)` | Category of substitute document in FI-CA |
| `CASubstituteDocumentNumber` |  | |  | `abwbl` | `CHAR(12)` | Number of the Substitute FI-CA Document |
| `CASuccessPercentage` |  | |  | `sucpc` | `DEC(5)` | Success Percentage Rate Determined for Dunning |
| `CAMaximumDeferralDate` |  | |  | `studt` | `DATS(8)` | Maximum Deferral Date for Related Items |
| `CADunningValuationRunDate` |  | |  | `sucdt` | `DATS(8)` | Date of Success Valuation |
| `CADunningValuationStatus` |  | |  | `scdst` | `CHAR(1)` | Status of Success Valuation |
| `_BusinessArea` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BPAltvDunRcpnt` | | ✓ | | | | |
| `_ChargesSchema` | | ✓ | | | | |
| `_ChargeType1` | | ✓ | | | | |
| `_ChargeType2` | | ✓ | | | | |
| `_ChargeType3` | | ✓ | | | | |
| `_CollectionStrategy` | | ✓ | | | | |
| `_CollStrategyReplaced` | | ✓ | | | | |
| `_CollectionStep` | | ✓ | | | | |
| `_CollStepLast` | | ✓ | | | | |
| `_CollStepReplaced` | | ✓ | | | | |
| `_CompCodeGroup` | | ✓ | | | | |
| `_DocSubstitute` | | ✓ | | | | |
| `_DocInterest` | | ✓ | | | | |
| `_DocCharge1` | | ✓ | | | | |
| `_DocCharge2` | | ✓ | | | | |
| `_DocCharge3` | | ✓ | | | | |
| `_CADunChrgAndIntrstPostgCode1` | | ✓ | | | | |
| `_CADunChrgAndIntrstPostgCode2` | | ✓ | | | | |
| `_CADunChrgAndIntrstPostgCode3` | | ✓ | | | | |
| `_DunningLevel` | | ✓ | | | | |
| `_DunningLevelCat` | | ✓ | | | | |
| `_DunNoticeGroup` | | ✓ | | | | |
| `_CADunningNoticeIsReversed` | | ✓ | | | | |
| `_DunningProcedure` | | ✓ | | | | |
| `_CADunningValuationStatus` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_CAStatisticalItemCode` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CASubstituteDocCategory` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_CAPartner` | | ✓ | | | | |
| `_CAHeader` | | ✓ | | | | |
| `_CAHeaderLeading` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_BPAltvDunRcpnt` | `I_BusinessPartner` | [0..1] |
| `_ChargesSchema` | `I_CAChargesSchema` | [0..1] |
| `_ChargeType1` | `I_CAChargeType` | [0..1] |
| `_ChargeType2` | `I_CAChargeType` | [0..1] |
| `_ChargeType3` | `I_CAChargeType` | [0..1] |
| `_CollectionStrategy` | `I_CACollectionStrategy` | [0..1] |
| `_CollStrategyReplaced` | `I_CACollectionStrategy` | [0..1] |
| `_CollectionStep` | `I_CACollectionStep` | [0..1] |
| `_CollStepLast` | `I_CACollectionStep` | [0..1] |
| `_CollStepReplaced` | `I_CACollectionStep` | [0..1] |
| `_CompCodeGroup` | `I_CACompanyCodeGroup` | [1..1] |
| `_DocSubstitute` | `I_CADocument` | [0..1] |
| `_DocInterest` | `I_CADocument` | [0..1] |
| `_DocCharge1` | `I_CADocument` | [0..1] |
| `_DocCharge2` | `I_CADocument` | [0..1] |
| `_DocCharge3` | `I_CADocument` | [0..1] |
| `_CADunChrgAndIntrstPostgCode1` | `I_CADunChrgAndIntrstPostgCode` | [0..1] |
| `_CADunChrgAndIntrstPostgCode2` | `I_CADunChrgAndIntrstPostgCode` | [0..1] |
| `_CADunChrgAndIntrstPostgCode3` | `I_CADunChrgAndIntrstPostgCode` | [0..1] |
| `_DunningLevel` | `I_CADunningLevel` | [0..1] |
| `_DunningLevelCat` | `I_CADunningLevelCategory` | [0..1] |
| `_DunNoticeGroup` | `I_CADunningNoticeGroup` | [0..1] |
| `_CADunningNoticeIsReversed` | `I_CADunningNoticeIsReversed` | [1..1] |
| `_DunningProcedure` | `I_CADunningProcedure` | [0..1] |
| `_CADunningValuationStatus` | `I_CADunningValuationStatus` | [0..1] |
| `_ProviderContract` | `I_CAProviderContractHeader` | [0..1] |
| `_CAStatisticalItemCode` | `I_CAStatisticalItemCode` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CASubstituteDocCategory` | `I_CASubstituteDocCategory` | [0..1] |
| `_CompCode` | `I_CompanyCode` | [1..1] |
| `_CAPartner` | `I_ContrAcctPrtnWthoutExtnblty` | [1..1] |
| `_CAHeader` | `I_ContrAcctWthoutExtnblty` | [1..1] |
| `_CAHeaderLeading` | `I_ContractAccountHeader` | [0..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_Division` | `I_Division` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGHEADER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGHEADER')/$value)*

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@EndUserText.label: 'Contract Accounting Dunning'

@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ], 
                usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory: #XXL } }

@VDM.viewType: #BASIC

define view entity I_CADunningHeader
  as select from fkkmako

  association [0..1] to I_BusinessArea                as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [1..1] to I_BusinessPartner             as _BusinessPartner              on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BusinessPartner             as _BPAltvDunRcpnt               on  $projection.CAAlternativeDunningRecipient = _BPAltvDunRcpnt.BusinessPartner
  association [0..1] to I_CAChargesSchema             as _ChargesSchema                on  $projection.CADunningChargesSchema = _ChargesSchema.CAChargesSchema
  association [0..1] to I_CAChargeType                as _ChargeType1                  on  $projection.CATypeForDunningCharge1 = _ChargeType1.CAChargeType
  association [0..1] to I_CAChargeType                as _ChargeType2                  on  $projection.CATypeForDunningCharge2 = _ChargeType2.CAChargeType
  association [0..1] to I_CAChargeType                as _ChargeType3                  on  $projection.CATypeForDunningCharge3 = _ChargeType3.CAChargeType
  association [0..1] to I_CACollectionStrategy        as _CollectionStrategy           on  $projection.CACollectionStrategy = _CollectionStrategy.CACollectionStrategy
  association [0..1] to I_CACollectionStrategy        as _CollStrategyReplaced         on  $projection.CAReplacedCollectionStrategy = _CollStrategyReplaced.CACollectionStrategy
  association [0..1] to I_CACollectionStep            as _CollectionStep               on  $projection.CACollectionStep = _CollectionStep.CACollectionStep
  association [0..1] to I_CACollectionStep            as _CollStepLast                 on  $projection.CACollectionStepOfLastDunning = _CollStepLast.CACollectionStep
  association [0..1] to I_CACollectionStep            as _CollStepReplaced             on  $projection.CAReplacedCollectionStep = _CollStepReplaced.CACollectionStep
  association [1..1] to I_CACompanyCodeGroup          as _CompCodeGroup                on  $projection.CACompanyCodeGroup = _CompCodeGroup.CACompanyCodeGroup
  association [0..1] to I_CADocument                  as _DocSubstitute                on  $projection.CASubstituteDocumentNumber = _DocSubstitute.CADocumentNumber
  association [0..1] to I_CADocument                  as _DocInterest                  on  $projection.CADocumentForDunningInterest = _DocInterest.CADocumentNumber
  association [0..1] to I_CADocument                  as _DocCharge1                   on  $projection.CADocumentForDunningCharge1 = _DocCharge1.CADocumentNumber
  association [0..1] to I_CADocument                  as _DocCharge2                   on  $projection.CADocumentForDunningCharge2 = _DocCharge2.CADocumentNumber
  association [0..1] to I_CADocument                  as _DocCharge3                   on  $projection.CADocumentForDunningCharge3 = _DocCharge3.CADocumentNumber
  association [0..1] to I_CADunChrgAndIntrstPostgCode as _CADunChrgAndIntrstPostgCode1 on  $projection.CAPostingCodeForDunningCharge1 = _CADunChrgAndIntrstPostgCode1.CADunChrgAndIntrstPostgCode
  association [0..1] to I_CADunChrgAndIntrstPostgCode as _CADunChrgAndIntrstPostgCode2 on  $projection.CAPostingCodeForDunningCharge2 = _CADunChrgAndIntrstPostgCode2.CADunChrgAndIntrstPostgCode
  association [0..1] to I_CADunChrgAndIntrstPostgCode as _CADunChrgAndIntrstPostgCode3 on  $projection.CAPostingCodeForDunningCharge3 = _CADunChrgAndIntrstPostgCode3.CADunChrgAndIntrstPostgCode
  association [0..1] to I_CADunningLevel              as _DunningLevel                 on  $projection.CADunningProcedure = _DunningLevel.CADunningProcedure
                                                                                       and $projection.CADunningLevel     = _DunningLevel.CADunningLevel
  association [0..1] to I_CADunningLevelCategory      as _DunningLevelCat              on  $projection.CADunningLevelCategory = _DunningLevelCat.CADunningLevelCategory
  association [0..1] to I_CADunningNoticeGroup        as _DunNoticeGroup               on  $projection.CADunningNoticeGroup = _DunNoticeGroup.CADunningNoticeGroup
  association [1..1] to I_CADunningNoticeIsReversed   as _CADunningNoticeIsReversed    on  $projection.CADunningNoticeIsReversed = _CADunningNoticeIsReversed.CADunningNoticeIsReversed
  association [0..1] to I_CADunningProcedure          as _DunningProcedure             on  $projection.CADunningProcedure = _DunningProcedure.CADunningProcedure
  association [0..1] to I_CADunningValuationStatus    as _CADunningValuationStatus     on  $projection.CADunningValuationStatus = _CADunningValuationStatus.CADunningValuationStatus
  association [0..1] to I_CAProviderContractHeader    as _ProviderContract             on  $projection.CASubApplication = 'P'
                                                                                       and $projection.CAContract       = _ProviderContract.CAProviderContract
  association [0..1] to I_CAStatisticalItemCode       as _CAStatisticalItemCode        on  $projection.CAStatisticalItemCode = _CAStatisticalItemCode.CAStatisticalItemCode
  association [0..1] to I_CASubApplication            as _CASubApplication             on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [0..1] to I_CASubstituteDocCategory     as _CASubstituteDocCategory      on  $projection.CASubstituteDocumentCategory = _CASubstituteDocCategory.CASubstituteDocumentCategory
  association [1..1] to I_CompanyCode                 as _CompCode                     on  $projection.CAStandardCompanyCode = _CompCode.CompanyCode
  
//  association [1..1] to I_ContractAccountPartner      as _CAPartner                    on  $projection.BusinessPartner = _CAPartner.BusinessPartner
//                                                                                       and $projection.ContractAccount = _CAPartner.ContractAccount
  association [1..1] to I_ContrAcctPrtnWthoutExtnblty as _CAPartner                    on  $projection.BusinessPartner = _CAPartner.BusinessPartner   
                                                                                       and $projection.ContractAccount = _CAPartner.ContractAccount                                                                                    
                                                                                       
//  association [1..1] to I_ContractAccountHeader       as _CAHeader                     on  $projection.ContractAccount = _CAHeader.ContractAccount
  association [1..1] to I_ContrAcctWthoutExtnblty as _CAHeader                     on  $projection.ContractAccount = _CAHeader.ContractAccount  
  
  association [0..1] to I_ContractAccountHeader       as _CAHeaderLeading              on  $projection.CALeadingContractAccount = _CAHeaderLeading.ContractAccount
  association [1..1] to I_Currency                    as _Currency                     on  $projection.TransactionCurrency = _Currency.Currency
  association [0..1] to I_Division                    as _Division                     on  $projection.Division = _Division.Division


{
  key laufd                     as CAMassRunDate,
  key laufi                     as CAMassRunID,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
  key gpart                     as BusinessPartner,
      @ObjectModel.foreignKey.association: '_CAHeader'
  key vkont                     as ContractAccount,
  key mazae                     as CADunningCounter,

      /* organizational and master data */
      @ObjectModel.foreignKey.association: '_CompCodeGroup'
      opbuk                     as CACompanyCodeGroup,
      @ObjectModel.foreignKey.association: '_CompCode'
      stdbk                     as CAStandardCompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                     as BusinessArea,
      @ObjectModel.foreignKey.association: '_Division'
      spart                     as Division,
      vtref                     as CAContract,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                     as CASubApplication,
      @ObjectModel.foreignKey.association: '_CAHeaderLeading'
      vknt1                     as CALeadingContractAccount,
      @ObjectModel.foreignKey.association: '_BPAltvDunRcpnt'
      abwma                     as CAAlternativeDunningRecipient,
      /* dunning procedure */
      @ObjectModel.foreignKey.association: '_DunningProcedure'
      mahnv                     as CADunningProcedure,
      @ObjectModel.foreignKey.association: '_DunNoticeGroup'
      mgrup                     as CADunningNoticeGroup,
      @ObjectModel.foreignKey.association: '_DunningLevel'
      mahns                     as CADunningLevel,
      @ObjectModel.foreignKey.association: '_DunningLevelCat'
      mstyp                     as CADunningLevelCategory,

      /* collection management */
      vkontgrp                  as CAContrAcctGroupForCollMgmt,
      vtrefgrp                  as CAContractGroupForCollMgmt,
      itemgrp                   as CAClosedItemGroupForCollMgmt,
      itemgrp_last              as CAClosedItemGroupOfLastDunning,
      grpfield                  as CAGroupingFieldForCollMgmt,
      grpfield_last             as CAGroupingFieldOfLastDunning,
      @ObjectModel.foreignKey.association: '_CollectionStrategy'
      strat                     as CACollectionStrategy,
      @ObjectModel.foreignKey.association: '_CollectionStep'
      step                      as CACollectionStep,
      @ObjectModel.foreignKey.association: '_CollStepLast'
      step_last                 as CACollectionStepOfLastDunning,
      @ObjectModel.foreignKey.association: '_CollStepReplaced'
      step_replaced             as CAReplacedCollectionStep,
      @ObjectModel.foreignKey.association: '_CollStrategyReplaced'
      strat_champ               as CAReplacedCollectionStrategy,
      tests                     as CACollectionTestSeries,
      limited                   as CACapForDunActyIsRestricted,
      relea                     as CADunningNoticeMustBeReleased,
      reldate                   as CALatestReleaseDate,
      relgroup                  as CAReleaseGroup,
      nexdt                     as CANextDunningDate,

      /* dates */
      ausdt                     as CAIssueDate,
      ausdt                     as DunningIssueDate,
      mdrkd                     as CADunningActivityRunDate,
      frdat                     as CAPaymentTargetDate,
      todat                     as CAKeyDateForConsideredPayts,

      /* amounts, charges and interests */
      @ObjectModel.foreignKey.association: '_Currency'
      waers                     as TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      msalm                     as CADunningBalance,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      rsalm                     as CADunningReductionAmount,
      @ObjectModel.foreignKey.association: '_ChargesSchema'
      chgid                     as CADunningChargesSchema,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      mge1m                     as CAAmountForDunningCharge1,
      @ObjectModel.foreignKey.association: '_DocCharge1'
      mg1bl                     as CADocumentForDunningCharge1,
      @ObjectModel.foreignKey.association: '_ChargeType1'
      mg1ty                     as CATypeForDunningCharge1,
      @ObjectModel.foreignKey.association: '_CADunChrgAndIntrstPostgCode1'
      post1                     as CAPostingCodeForDunningCharge1,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      mge2m                     as CAAmountForDunningCharge2,
      @ObjectModel.foreignKey.association: '_DocCharge2'
      mg2bl                     as CADocumentForDunningCharge2,
      @ObjectModel.foreignKey.association: '_ChargeType2'
      mg2ty                     as CATypeForDunningCharge2,
      @ObjectModel.foreignKey.association: '_CADunChrgAndIntrstPostgCode2'
      post2                     as CAPostingCodeForDunningCharge2,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      mge3m                     as CAAmountForDunningCharge3,
      @ObjectModel.foreignKey.association: '_DocCharge3'
      mg3bl                     as CADocumentForDunningCharge3,
      @ObjectModel.foreignKey.association: '_ChargeType3'
      mg3ty                     as CATypeForDunningCharge3,
      @ObjectModel.foreignKey.association: '_CADunChrgAndIntrstPostgCode3'
      post3                     as CAPostingCodeForDunningCharge3,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ( mge1m + mge2m + mge3m ) as CADunningChargeAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      mintm                     as CADunningInterestAmount,
      @ObjectModel.foreignKey.association: '_DocInterest'
      mibel                     as CADocumentForDunningInterest,

      bonit                     as CACreditWorthinessBeforeDun,
      @ObjectModel.foreignKey.association: '_CADunningNoticeIsReversed'
      xmsto                     as CADunningNoticeIsReversed,
      nrzas                     as CAPaymentFormNumber,
      xinfo                     as CADunningNoticeIsInfoOnly,
      cokey                     as CorrespondenceKey,
      xcoll                     as CAIsSubmittedToCollAgency,
      rfzas                     as CAPaymentFormExternalNumber,
      @ObjectModel.foreignKey.association: '_CAStatisticalItemCode'
      stakz                     as CAStatisticalItemCode,
      @ObjectModel.foreignKey.association: '_CASubstituteDocCategory'
      abwtp                     as CASubstituteDocumentCategory,
      @ObjectModel.foreignKey.association: '_DocSubstitute'
      abwbl                     as CASubstituteDocumentNumber,

      /* dunning valuation */
      sucpc                     as CASuccessPercentage,
      studt                     as CAMaximumDeferralDate,
      sucdt                     as CADunningValuationRunDate,
      @ObjectModel.foreignKey.association: '_CADunningValuationStatus'
      scdst                     as CADunningValuationStatus,

      // score and rank are switched in a si-include
      //score                                                  as CACollectionRating,
      //rank                                                   as CACollectionWorkItemRanking,

      _BPAltvDunRcpnt,
      _BusinessArea,
      _BusinessPartner,
      _CADunChrgAndIntrstPostgCode1,
      _CADunChrgAndIntrstPostgCode2,
      _CADunChrgAndIntrstPostgCode3,
      _CADunningNoticeIsReversed,
      _CADunningValuationStatus,
      _CAHeader,
      _CAHeaderLeading,
      _CAPartner,
      _CAStatisticalItemCode,
      _CASubApplication,
      _CASubstituteDocCategory,
      _ChargesSchema,
      _ChargeType1,
      _ChargeType2,
      _ChargeType3,
      _CollectionStrategy,
      _CollStrategyReplaced,
      _CollectionStep,
      _CollStepLast,
      _CollStepReplaced,
      _CompCode,
      _CompCodeGroup,
      _Currency,
      _Division,
      _DocSubstitute,
      _DocInterest,
      _DocCharge1,
      _DocCharge2,
      _DocCharge3,
      _DunningLevel,
      _DunningLevelCat,
      _DunningProcedure,
      _DunNoticeGroup,
      _ProviderContract
}
```
