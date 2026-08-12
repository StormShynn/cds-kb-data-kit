---
name: I_GRANT
description: "This CDS view provides the prerequisites for answering the following business questions: What grant type is involved? Who is the sponsor of a grant? What is the lifecycle status of a grant?"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What grant type is involved? Who is the sponsor of a grant? What is the lifecycle status of a grant?"
semantic_vi: "Grant — CDS view giao diện dựa trên gmgr."
keywords:
  - "Grant"
  - "grant"
  - "validity"
  - "start"
  - "date"
  - "grantee"
  - "mgmt"
  - "sponsor"
  - "authzn"
tags:
  - PSM
  - bo:plant
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANT

**This CDS view provides the prerequisites for answering the following business questions: What grant type is involved? Who is the sponsor of a grant? What is the lifecycle status of a grant?**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  | `grant_nbr` | `CHAR(20)` | Grant |
| `ValidityStartDate` |  | |  | `valid_from` | `DATS(8)` | Valid-from Date |
| `ValidityEndDate` |  | |  | `valid_to` | `DATS(8)` | Valid-to Date |
| `GranteeMgmtSponsor` |  | |  | `partner` | `CHAR(10)` | Grant Sponsor |
| `GrantAuthznGrp` |  | |  | `authgr` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLfcycStatusForAuthzn` |  | |  | `cast( case gmgr.authgr when '' then ' ' else gmgr.lifecycle_status end as gmis_lifecyclestatusforauthzn preserving type )` | `CHAR(5)` | GM Lifecycle Status for Auth Grp |
| `GrantType` |  | |  | `grant_type` | `CHAR(2)` | Grant Type |
| `CompanyCode` |  | |  | `cast( gmgr.company_code as fis_bukrs preserving type)` | `CHAR(4)` | Company Code |
| `GrantIsBlockedForPosting` |  | |  | `blocking_ind` | `CHAR(1)` | Blocking Indicator |
| `GrantCurrency` |  | |  | `grant_currency` | `CUKY(5)` | Grant currency |
| `GrantTotalAmountInGrantCrcy` |  | |  | `grant_total` | `CURR(13)` | Total Grant Value in Sponsor Currency |
| `GteeMIndrctCostShrngRule` |  | |  | `idc_rule` | `NUMC(4)` | Rule for Determining Indirect Costs |
| `GteeMIndirectCostRateInPercent` |  | |  | `idc_rate` | `DEC(6)` | Cloud Edition Only: Percentage for Indirect Costs |
| `GrantLifecycleStatus` |  | |  | `lifecycle_status` | `CHAR(5)` | Lifecycle Status |
| `GrantStatus` |  | |  | `status` | `CHAR(5)` | Grant Status |
| `GrantStatusProfile` |  | | `_GrantType` | `StatusProfile` | `CHAR(8)` | Status profile for the user states attached to system states |
| `GrantUserStatus` |  | |  | `user_status` | `CHAR(5)` | User Status |
| `GranteeMgmtCostSharingRule` |  | |  | `cs_rule` | `NUMC(4)` | Rule for Determining Cost Sharing Requirements |
| `GteeMCostSharingOverallRate` |  | |  | `cs_rate` | `DEC(7)` | Overall Cost Sharing Rate for Grant |
| `GranteeMgmtBillingRule` |  | |  | `billing_rule` | `NUMC(4)` | Rule Used as a Basis for Billing |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Record Created by |
| `CreationDate` |  | |  | `created_on` | `DATS(8)` | Created on |
| `CreationTime` |  | |  | `created_at` | `TIMS(6)` | Created at |
| `LastChangedByUser` |  | |  | `modified_by` | `CHAR(12)` | Last Modified by |
| `LastChangeDate` |  | |  | `modified_on` | `DATS(8)` | Date last modified |
| `LastChangeTime` |  | |  | `modified_at` | `TIMS(6)` | Last Modified Time |
| `PreAwardPstgIsAllowedForGrant` |  | |  | `pre_award_costs` | `CHAR(1)` | Pre-award cost control |
| `GrantFiscalYearVariant` |  | |  | `grant_fy_variant` | `CHAR(2)` | Fiscal year variant of grant |
| `GrantIsNotRelevantGrant` |  | |  | `case when gmgrantnone.grant_nbr is null then cast( ' ' as gm_is_not_relvnt_grant preserving type ) else cast( 'X' as gm_is_not_relvnt_grant preserving type ) end` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GteeMTimeSliceSplittingRule` |  | |  | `splitting_rule` | `NUMC(4)` | Rule Used to Split Time Intervals Between Fiscal Years |
| `CostCenter` |  | |  | `kostl` | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `GranteeMgmtWorkflowStatus` |  | |  | `workflow_status` | `CHAR(1)` | Workflow status |
| `GrantBlockedByWorkflow` |  | |  | `workflow_block` | `CHAR(1)` | GM Blocks grant editing pending approval |
| `GrantExternalReference` |  | |  | `ext_reference` | `CHAR(24)` | Alternate Grant Identifier |
| `GrantResponsibleUser` |  | |  | `grant_resp` | `CHAR(12)` | Grant Responsible User |
| `GrantAssistanceListingNumber` |  | |  | `cfda` | `CHAR(10)` | Assistance Listing Number |
| `_CompanyCode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_GrantResponsibility` | | ✓ | | | | |
| `_IndirectCostSharingRule` | | ✓ | | | | |
| `_CostSharingRule` | | ✓ | | | | |
| `_BillingRule` | | ✓ | | | | |
| `_GrantType` | | ✓ | | | | |
| `_GrantCurrency` | | ✓ | | | | |
| `_Sponsor` | | ✓ | | | | |
| `_GrantLifecycleStatus` | | ✓ | | | | |
| `_GrantStatus` | | ✓ | | | | |
| `_UserStatus` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_GrantHierarchyNode` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_UserRespContactCard` | | ✓ | | | | |
| `_GrantAuthznGrp` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_Grant` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Text` | `I_GrantText` | [0..*] |
| `_GrantResponsibility` | `I_GrantResponsibility` | [0..*] |
| `_IndirectCostSharingRule` | `I_GteeMIndrctCostShrngRule` | [0..1] |
| `_CostSharingRule` | `I_GranteeMgmtCostSharingRule` | [0..1] |
| `_BillingRule` | `I_GranteeMgmtBillingRule` | [0..1] |
| `_GrantType` | `I_GrantType` | [0..1] |
| `_GrantCurrency` | `I_Currency` | [0..1] |
| `_Sponsor` | `I_BusinessPartner` | [0..1] |
| `_GrantLifecycleStatus` | `I_SystemStatus` | [0..1] |
| `_GrantStatus` | `I_PublicSectorGrantStatus` | [0..1] |
| `_UserStatus` | `I_UserStatus` | [0..1] |
| `_StatusProfile` | `I_StatusProfile` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_GrantHierarchyNode` | `I_GrantHierarchyNode` | [0..*] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_UserRespContactCard` | `I_UserContactCard` | [0..1] |
| `_GrantAuthznGrp` | `I_GrantAuthznGrp` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANT')/$value)*

```abap
@EndUserText.label: 'Grant'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true, internalName: #LOCAL }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser', '_UserRespContactCard', '_GrantHierarchyNode']
@ObjectModel.representativeKey: 'GrantID'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #B,
  sizeCategory: #L
}
@ObjectModel.sapObjectNodeType.name: 'Grant'
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IGMGRANT'

@Metadata.ignorePropagatedAnnotations: true
// to solve the ATC
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_Grant
  as select from    gmgr
    left outer join gmgrantnone on gmgr.grant_nbr = gmgrantnone.grant_nbr

  association [1..1] to E_Grant                      as _Extension //do not expose this association in the projection list of the view
                                                                                 on  $projection.GrantID = _Extension.GrantID

  association [0..1] to I_CompanyCode                as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  //  association [0..1] to I_FinancialManagementArea    as _FinMgmtArea          on  $projection.financialmanagementarea = _FinMgmtArea.FinancialManagementArea
  association [0..*] to I_GrantText                  as _Text                    on  $projection.GrantID = _Text.GrantID
  association [0..*] to I_GrantResponsibility        as _GrantResponsibility     on  $projection.GrantID = _GrantResponsibility.GrantID
  association [0..1] to I_GteeMIndrctCostShrngRule   as _IndirectCostSharingRule on  $projection.GteeMIndrctCostShrngRule = _IndirectCostSharingRule.GteeMIndrctCostShrngRule
  association [0..1] to I_GranteeMgmtCostSharingRule as _CostSharingRule         on  $projection.GranteeMgmtCostSharingRule = _CostSharingRule.GranteeMgmtCostSharingRule
  association [0..1] to I_GranteeMgmtBillingRule     as _BillingRule             on  $projection.GranteeMgmtBillingRule = _BillingRule.GranteeMgmtBillingRule
  association [0..1] to I_GrantType                  as _GrantType               on  $projection.GrantType = _GrantType.GrantType
  association [0..1] to I_Currency                   as _GrantCurrency           on  $projection.GrantCurrency = _GrantCurrency.Currency
  association [0..1] to I_BusinessPartner            as _Sponsor                 on  $projection.GranteeMgmtSponsor = _Sponsor.BusinessPartner
  association [0..1] to I_SystemStatus               as _GrantLifecycleStatus    on  $projection.GrantLifecycleStatus = _GrantLifecycleStatus.SystemStatus
  association [0..1] to I_PublicSectorGrantStatus    as _GrantStatus             on  $projection.GrantStatus = _GrantStatus.GrantStatus
  association [0..1] to I_UserStatus                 as _UserStatus              on  $projection.GrantUserStatus    = _UserStatus.UserStatus
                                                                                 and $projection.GrantStatusProfile = _UserStatus.StatusProfile
  association [0..1] to I_StatusProfile              as _StatusProfile           on  $projection.GrantStatusProfile = _StatusProfile.StatusProfile
  association [0..1] to I_FiscalYearVariant          as _FiscalYearVariant       on  $projection.GrantFiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [0..1] to I_User                       as _CreatedByUser           on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                       as _LastChangedByUser       on  $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..*] to I_GrantHierarchyNode         as _GrantHierarchyNode      on  $projection.GrantID = _GrantHierarchyNode.GrantID

  association [0..*] to I_CostCenter                 as _CostCenter              on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                                 and $projection.ControllingArea = _CostCenter.ControllingArea

  association [0..1] to I_CostCenter                 as _CurrentCostCenter       on  $projection.CostCenter      =  _CurrentCostCenter.CostCenter
                                                                                 and $projection.ControllingArea =  _CurrentCostCenter.ControllingArea
                                                                                 and $projection.ValidityEndDate <= _CurrentCostCenter.ValidityEndDate
  //                                                                                 and $projection.ValidityStartDate >= _CurrentCostCenter.ValidityStartDate

  association [1]    to I_ControllingArea            as _ControllingArea         on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_UserContactCard            as _UserRespContactCard     on  $projection.GrantResponsibleUser = _UserRespContactCard.ContactCardID
  association [0..1] to I_GrantAuthznGrp             as _GrantAuthznGrp          on  $projection.GrantAuthznGrp = _GrantAuthznGrp.GrantAuthznGrp 
{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_GrantHierarchyNode'
  key gmgr.grant_nbr                                         as GrantID,
      @Semantics.businessDate.from: true
      gmgr.valid_from                                             as ValidityStartDate,
      @Semantics.businessDate.to: true
      gmgr.valid_to                                               as ValidityEndDate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_GrantBusinessPartnerStdVH',
                     element: 'BusinessPartner' }
        }]
      @ObjectModel.foreignKey.association: '_Sponsor'
      gmgr.partner                                                as GranteeMgmtSponsor,
      @ObjectModel.foreignKey.association: '_GrantAuthznGrp'
      gmgr.authgr                                                 as GrantAuthznGrp,
      cast( case gmgr.authgr
      when '' then '     '
      else gmgr.lifecycle_status
      end as gmis_lifecyclestatusforauthzn preserving type )      as GrantLfcycStatusForAuthzn,
      @ObjectModel.foreignKey.association: '_GrantType'
      gmgr.grant_type                                             as GrantType,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      cast( gmgr.company_code as fis_bukrs preserving type)       as CompanyCode,
      //      _CompanyCode.FinancialManagementArea,
      gmgr.blocking_ind                                           as GrantIsBlockedForPosting,
      @ObjectModel.foreignKey.association: '_GrantCurrency'
      @Semantics.currencyCode:true
      gmgr.grant_currency                                         as GrantCurrency,
      @Semantics: { amount : {currencyCode: 'GrantCurrency'} }
      @DefaultAggregation: #SUM
      gmgr.grant_total                                            as GrantTotalAmountInGrantCrcy,
      @ObjectModel.foreignKey.association: '_IndirectCostSharingRule'
      gmgr.idc_rule                                               as GteeMIndrctCostShrngRule,
      gmgr.idc_rate                                               as GteeMIndirectCostRateInPercent,
      @ObjectModel.foreignKey.association: '_GrantLifecycleStatus'
      gmgr.lifecycle_status                                       as GrantLifecycleStatus,
      @ObjectModel.foreignKey.association: '_GrantStatus'      
      gmgr.status                                            as GrantStatus,
      @ObjectModel.foreignKey.association: '_StatusProfile'
      _GrantType.StatusProfile                               as GrantStatusProfile,
      @ObjectModel.foreignKey.association: '_UserStatus'
      gmgr.user_status                                            as GrantUserStatus,
      @ObjectModel.foreignKey.association: '_CostSharingRule'
      gmgr.cs_rule                                                as GranteeMgmtCostSharingRule,
      gmgr.cs_rate                                                as GteeMCostSharingOverallRate,
      @ObjectModel.foreignKey.association: '_BillingRule'
      gmgr.billing_rule                                           as GranteeMgmtBillingRule,
      @Consumption.valueHelpDefinition: [
      { entity: { name: 'I_BusinessUserVH',
       element: 'UserID' } } ]
      gmgr.created_by                                             as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      gmgr.created_on                                             as CreationDate,
      @Semantics.systemTime.createdAt: true
      gmgr.created_at                                             as CreationTime,
      @Consumption.valueHelpDefinition: [
      { entity: { name: 'I_BusinessUserVH',
       element: 'UserID' } } ]
      gmgr.modified_by                                            as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      gmgr.modified_on                                            as LastChangeDate,
      @Semantics.systemTime.createdAt: true
      gmgr.modified_at                                            as LastChangeTime,
      gmgr.pre_award_costs                                        as PreAwardPstgIsAllowedForGrant,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      gmgr.grant_fy_variant                                       as GrantFiscalYearVariant,
      @Consumption.hidden: true
      case
        when gmgrantnone.grant_nbr is null then
          cast( ' ' as gm_is_not_relvnt_grant preserving type )
        else
          cast( 'X' as gm_is_not_relvnt_grant preserving type )
      end                                                    as GrantIsNotRelevantGrant,
      gmgr.splitting_rule                                         as GteeMTimeSliceSplittingRule,
      @ObjectModel.foreignKey.association: '_CurrentCostCenter'
      gmgr.kostl                                                  as CostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      gmgr.kokrs                                                  as ControllingArea,
      gmgr.workflow_status                                   as GranteeMgmtWorkflowStatus,
      gmgr.workflow_block                                    as GrantBlockedByWorkflow,
      gmgr.ext_reference                                     as GrantExternalReference,
      @ObjectModel.foreignKey.association: '_UserRespContactCard'
      gmgr.grant_resp                                        as GrantResponsibleUser,
      gmgr.cfda                                              as GrantAssistanceListingNumber,
      _Text,
      _GrantResponsibility,
      _CompanyCode,
      //      _FinMgmtArea,
      _IndirectCostSharingRule,
      _CostSharingRule,
      _BillingRule,
      _FiscalYearVariant,
      _GrantType,
      _GrantCurrency,
      _GrantLifecycleStatus,
      _GrantStatus,
      _StatusProfile,
      _Sponsor,
      _UserStatus,
      _CreatedByUser,
      _LastChangedByUser,
      _GrantHierarchyNode,
      // commented out because of ATC use of annotation CONSUMPTION.FILTER.BUSINESSDATE.AT not allowed for association _CostCenter
      //     @Consumption.filter.businessDate.at: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CurrentCostCenter'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor: '_CurrentCostCenter'
      _CostCenter,
      _CurrentCostCenter,
      _ControllingArea,
      _UserRespContactCard,
      _GrantAuthznGrp
}
```
