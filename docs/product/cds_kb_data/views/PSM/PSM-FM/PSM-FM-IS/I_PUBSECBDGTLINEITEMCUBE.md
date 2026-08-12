---
name: I_PUBSECBDGTLINEITEMCUBE
description: "Pubsecbdgtlineitemcube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-IS
  - interface-view
  - analytical
  - item-level
  - component:PSM-FM-IS
  - lob:Other
---
# I_PUBSECBDGTLINEITEMCUBE

**Pubsecbdgtlineitemcube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  |  |  |
| `FinancialPlanningDataPacket` | ✓ | |  |  |  |  |
| `FinancialPlanningEntryItem` | ✓ | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Ledger` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `LedgerFiscalYear` |  | |  |  |  |  |
| `BusinessTransactionType` |  | |  |  |  |  |
| `FinancialTransactionType` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ProjectInternalID` |  | |  |  |  |  |
| `ProjectExternalID` |  | |  | `cast( _ProjectBasicData.ProjectExternalID as fis_projectext_no_conv preserving type )` |  |  |
| `PartnerProjectInternalID` |  | |  |  |  |  |
| `PartnerProjectExternalID` |  | |  | `cast( _PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv preserving type )` |  |  |
| `WBSElementInternalID` |  | |  | `cast( AcItem.WBSElementInternalID as fis_wbsint_no_conv preserving type )` |  |  |
| `WBSElementExternalID` |  | |  | `cast( _WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type )` |  |  |
| `PartnerWBSElementInternalID` |  | |  |  |  |  |
| `PartnerWBSElementExternalID` |  | |  | `cast( _PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type )` |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `Segment` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `CostAnalysisResource` |  | |  |  |  |  |
| `WorkPackage` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `IsLotSizeIndependent` |  | |  |  |  |  |
| `PartnerCompanyCode` |  | |  |  |  |  |
| `PartnerBusinessArea` |  | |  |  |  |  |
| `PartnerSegment` |  | |  |  |  |  |
| `PartnerProfitCenter` |  | |  |  |  |  |
| `PartnerCostCenter` |  | |  |  |  |  |
| `PartnerFunctionalArea` |  | |  |  |  |  |
| `PartnerCostCtrActivityType` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `PartnerOrder` |  | |  |  |  |  |
| `PartnerOrder_2` |  | |  |  |  |  |
| `PartnerCompany` |  | |  |  |  |  |
| `ReferenceDocumentType` |  | |  |  |  |  |
| `ReferenceDocumentContext` |  | |  |  |  |  |
| `ReferenceDocument` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `AmountInTransactionCurrency` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |  |  |
| `GlobalCurrency` |  | |  |  |  |  |
| `AmountInGlobalCurrency` |  | |  |  |  |  |
| `ControllingObjectCurrency` |  | |  |  |  |  |
| `AmountInObjectCurrency` |  | |  |  |  |  |
| `FixedAmountInGlobalCrcy` |  | |  |  |  |  |
| `CostSourceUnit` |  | |  |  |  |  |
| `ValuationQuantity` |  | |  |  |  |  |
| `CostCenterHierarchy` |  | |  | `cast( AcItem.CostCenter as fis_cctr_hryid_42)` |  |  |
| `FundHierarchy` |  | |  | `cast( AcItem.Fund as fmis_hryid_fund )` |  |  |
| `GrantHierarchy` |  | |  | `cast( AcItem._Grant.GrantID as gm_hryid_grant)` |  |  |
| `FunctionalAreaHierarchy` |  | |  | `cast( AcItem.FunctionalArea as fis_hryid_functionalarea_42)` |  |  |
| `BudgetAccountHierarchy` |  | |  | `cast (PubSecBudgetAccount as psm_hryid_budgetaccount )` |  |  |
| `PubSecBudgetIsRelevant` |  | | `_PubSecBudgetAccount` | `PubSecBudgetIsRelevant` |  |  |
| `PubSecExpnBdgtAmtInTransCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' then cast( AcItem.AmountInTransactionCurrency as psm_amt_expn_bdgt_trans_curr ) else cast( '0' as psm_amt_expn_bdgt_trans_curr ) end` |  |  |
| `PubSecExpnBdgtAmtInCoCodeCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' then cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_expn_bdgt_cc_curr ) else cast( '0' as psm_amt_expn_bdgt_cc_curr ) end` |  |  |
| `PubSecExpnBdgtAmtInGlobalCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' then cast( AcItem.AmountInGlobalCurrency as psm_amt_expn_bdgt_grp_curr ) else cast( '0' as psm_amt_expn_bdgt_grp_curr ) end` |  |  |
| `PubSecRevnBdgtAmtInTransCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' then cast( AcItem.AmountInTransactionCurrency as psm_amt_revn_bdgt_trans_curr ) else cast( '0' as psm_amt_revn_bdgt_trans_curr ) end` |  |  |
| `PubSecRevnBdgtAmtInCoCodeCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' then cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_revn_bdgt_cc_curr ) else cast( '0' as psm_amt_revn_bdgt_cc_curr ) end` |  |  |
| `PubSecRevnBdgtAmtInGlobalCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' then cast( AcItem.AmountInGlobalCurrency as psm_amt_revn_bdgt_grp_curr ) else cast( '0' as psm_amt_revn_bdgt_grp_curr ) end` |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `PlanningCategory` |  | |  |  |  |  |
| `AccountAssignmentType` |  | |  |  |  |  |
| `PartnerAccountAssignmentType` |  | |  |  |  |  |
| `ControllingDebitCreditCode` |  | |  |  |  |  |
| `PersonnelNumber` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SoldProduct` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `CustomerSupplierCountry` |  | |  |  |  |  |
| `CustomerSupplierIndustry` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `CustomerSupplierCorporateGroup` |  | |  |  |  |  |
| `FinancialManagementArea` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `GranteeMgmtSponsor` |  | |  |  |  |  |
| `SponsoredClass` |  | |  |  |  |  |
| `SponsoredProgram` |  | |  |  |  |  |
| `GteeMBudgetValidityNumber` |  | |  |  |  |  |
| `PubSecBudgetAccount` |  | |  |  |  |  |
| `PubSecBudgetAccountCoCode` |  | |  |  |  |  |
| `BudgetPeriod` |  | |  |  |  |  |
| `PubSecBdgtAcctRevnExpnCode` |  | | `_PubSecBudgetAccount` | `PubSecBdgtAcctRevnExpnCode` |  |  |
| `FundType` |  | |  |  |  |  |
| `GranteeMgmtFundType` |  | |  |  |  |  |
| `BudgetProcess` |  | |  |  |  |  |
| `BudgetingType` |  | |  |  |  |  |
| `BudgetDocWorkFlowStatus` |  | |  |  |  |  |
| `PubSecIsConsumableBudget` |  | |  |  |  |  |
| `BudgetDocument` |  | |  | `cast( case when AcItem.ReferenceDocumentType = 'FPL04' then AcItem.ReferenceDocument when AcItem.ReferenceDocumentType = 'FPL00' then AcItem.ReferenceDocument else '' end as psm_bdgt_docnr preserving type )` |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `OrderOperation` |  | |  |  |  |  |
| `OrderItem` |  | |  |  |  |  |
| `PlanPriceInGlobalCurrency` |  | |  |  |  |  |
| `PlanPriceInCompanyCodeCurrency` |  | |  |  |  |  |
| `PlanPriceInTransactionCurrency` |  | |  |  |  |  |
| `GLAccountAuthorizationGroup` |  | |  |  |  |  |
| `CustomerBasicAuthorizationGrp` |  | |  |  |  |  |
| `OrderType` |  | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `AssetDepreciationArea` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `AssetAcctTransClassfctn` |  | |  |  |  |  |
| `AssetClass` |  | |  |  |  |  |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_WBSElementExternalIDText` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_ProjectExternalIDText` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |
| `_PubSecBudgetAccount` | | ✓ | | | | |
| `_PubSecBdgtAcctRevnExpnCode` | | ✓ | | | | |
| `_FundType` | | ✓ | | | | |
| `_BudgetAccountInChtAccts` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_GranteeMgmtFundType` | | ✓ | | | | |
| `_FundHierarchy` | | ✓ | | | | |
| `_GrantHierarchy` | | ✓ | | | | |
| `_CostCenterHierarchy` | | ✓ | | | | |
| `_BudgetAccountInChtAcctsHier` | | ✓ | | | | |
| `_FunctionalAreaHierarchy` | | ✓ | | | | |
| `_BudgetDocWorkFlowStatus` | | ✓ | | | | |
| `_PubSecIsConsumableBudget` | | ✓ | | | | |
| `_PubSecPlanningCategory` | | ✓ | | | | |
| `_DocumentStore` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_WBSElementExternalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectExternalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_PubSecBudgetAccountCoCode` | `I_CompanyCode` | [0..1] |
| `_PubSecBudgetAccount` | `I_PubSecBudgetAccount` | [0..1] |
| `_PubSecBdgtAcctRevnExpnCode` | `I_PubSecBdgtAcctRevnExpnCode` | [0..1] |
| `_FundType` | `I_FundType` | [0..1] |
| `_BudgetAccountInChtAccts` | `I_BudgetAccountInChtAccts` | [0..1] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_GranteeMgmtFundType` | `I_GranteeMgmtFundType` | [0..1] |
| `_FundHierarchy` | `I_Fund` | [0..1] |
| `_GrantHierarchy` | `I_Grant` | [0..1] |
| `_CostCenterHierarchy` | `I_CostCenter` | [0..*] |
| `_BudgetAccountInChtAcctsHier` | `I_BudgetAccountInChtAccts` | [0..1] |
| `_FunctionalAreaHierarchy` | `I_FunctionalArea` | [0..1] |
| `_BudgetDocWorkFlowStatus` | `I_BudgetDocWorkFlowStatus` | [0..1] |
| `_PubSecIsConsumableBudget` | `I_PubSecIsConsumableBudget` | [0..1] |
| `_PubSecPlanningCategory` | `I_PubSecPlanningCategory` | [0..1] |
| `_DocumentStore` | `I_PubSecBdgtLineItemDSt` | [0..1] |

## Source Code

```abap
//This is a migrated cube(cube view to cube view entity)
@Analytics.technicalName: 'IPSMS4CBDLNANC'
//@ClientHandling.algorithm: #SESSION_VARIABLE
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
//@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Budget Line Items - Cube'

@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
}

define view entity I_PubSecBdgtLineItemCube
  as select from I_PubSecBdgtLineItemBasic as AcItem
  association [0..1] to I_WBSElementByExternalID     as _WBSElementExternalID        on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _WBSElementExternalIDText    on  $projection.WBSElementExternalID = _WBSElementExternalIDText.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _PartnerWBSElementExternalID on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
  association [0..1] to I_ProjectByExternalID        as _PartnerProjectExternalID    on  $projection.PartnerProjectExternalID = _PartnerProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID        as _ProjectExternalID           on  $projection.ProjectExternalID = _ProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID        as _ProjectExternalIDText       on  $projection.ProjectExternalID = _ProjectExternalIDText.ProjectExternalID
  association [0..1] to I_CompanyCode                as _PubSecBudgetAccountCoCode   on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccountCoCode.CompanyCode
  association [0..1] to I_PubSecBudgetAccount        as _PubSecBudgetAccount         on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccount.PubSecBudgetAccountCoCode
                                                                                     and $projection.PubSecBudgetAccount       = _PubSecBudgetAccount.PubSecBudgetAccount
  association [0..1] to I_PubSecBdgtAcctRevnExpnCode as _PubSecBdgtAcctRevnExpnCode  on  $projection.PubSecBdgtAcctRevnExpnCode = _PubSecBdgtAcctRevnExpnCode.PubSecBdgtAcctRevnExpnCode
  association [0..1] to I_FundType                   as _FundType                    on  $projection.FinancialManagementArea = _FundType.FinancialManagementArea
                                                                                     and $projection.FundType                = _FundType.FundType
  association [0..1] to I_BudgetAccountInChtAccts    as _BudgetAccountInChtAccts     on  $projection.ChartOfAccounts     = _BudgetAccountInChtAccts.ChartOfAccounts
                                                                                     and $projection.PubSecBudgetAccount = _BudgetAccountInChtAccts.PubSecBudgetAccount
  association [0..1] to I_ReferenceDocumentType      as _ReferenceDocumentType       on  $projection.ReferenceDocumentType = _ReferenceDocumentType.ReferenceDocumentType
  association [0..1] to I_GranteeMgmtFundType        as _GranteeMgmtFundType         on  $projection.GranteeMgmtFundType = _GranteeMgmtFundType.GranteeMgmtFundType

  association [0..1] to I_Fund                       as _FundHierarchy               on  $projection.FinancialManagementArea = _FundHierarchy.FinancialManagementArea
                                                                                     and $projection.FundHierarchy           = _FundHierarchy.Fund

  association [0..1] to I_Grant                      as _GrantHierarchy              on  $projection.GrantHierarchy = _GrantHierarchy.GrantID
  //association [0..1] to I_Grant as _Grant on  $projection.GrantId = _Grant.GrantID

  association [0..*] to I_CostCenter                 as _CostCenterHierarchy         on  $projection.ControllingArea     = _CostCenterHierarchy.ControllingArea
                                                                                     and $projection.CostCenterHierarchy = _CostCenterHierarchy.CostCenter
  association [0..1] to I_BudgetAccountInChtAccts    as _BudgetAccountInChtAcctsHier on  $projection.ChartOfAccounts        = _BudgetAccountInChtAcctsHier.ChartOfAccounts
                                                                                     and $projection.BudgetAccountHierarchy = _BudgetAccountInChtAcctsHier.PubSecBudgetAccount

  association [0..1] to I_FunctionalArea             as _FunctionalAreaHierarchy     on  $projection.FunctionalAreaHierarchy = _FunctionalAreaHierarchy.FunctionalArea
  association [0..1] to I_BudgetDocWorkFlowStatus    as _BudgetDocWorkFlowStatus     on  $projection.BudgetDocWorkFlowStatus = _BudgetDocWorkFlowStatus.BudgetDocWorkFlowStatus
  association [0..1] to I_PubSecIsConsumableBudget   as _PubSecIsConsumableBudget    on  $projection.PubSecIsConsumableBudget = _PubSecIsConsumableBudget.PubSecIsConsumableBudget
  association [0..1] to I_PubSecPlanningCategory     as _PubSecPlanningCategory      on  $projection.PlanningCategory = _PubSecPlanningCategory.PlanningCategory
  association [0..1] to I_PubSecBdgtLineItemDSt   as _DocumentStore               on  _DocumentStore.tra_00066   = $projection.FinancialPlanningReqTransSqnc
                                                                                     and _DocumentStore.tra_00022   = $projection.FinancialPlanningDataPacket
                                                                                     and _DocumentStore.tra_00003   = $projection.FinancialPlanningEntryItem
                                                                                       
{
  key AcItem.FinancialPlanningReqTransSqnc,
  key AcItem.FinancialPlanningDataPacket,
      @Aggregation.default: #NONE
  key AcItem.FinancialPlanningEntryItem,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      AcItem.ControllingArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CompanyCode'
      AcItem.CompanyCode,
      @ObjectModel.foreignKey.association: '_Ledger'
      AcItem.Ledger,

      //    Account assignments
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      AcItem.GLAccount,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      AcItem.ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_FiscalYear'
      AcItem.FiscalYear,
      @ObjectModel.foreignKey.association: '_LedgerFiscalYear'
      AcItem.LedgerFiscalYear,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      AcItem.BusinessTransactionType,
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      AcItem.FinancialTransactionType,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      AcItem.BusinessArea,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProfitCenterStdVH',
                     element: 'ProfitCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      AcItem.ProfitCenter,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      @ObjectModel.foreignKey.association: '_CostCenter'
      AcItem.CostCenter,
      //MS: Test adding association does not lead to ATC issues
      //MS:      @Analytics.internalName: #LOCAL
      //MS:      @ObjectModel.foreignKey.association: '_ProjectBasicData'
      AcItem.ProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      cast( _ProjectBasicData.ProjectExternalID as fis_projectext_no_conv preserving type )                  as ProjectExternalID,
      //MS: Test adding association does not lead to ATC issues
      //MS:      @Analytics.internalName: #LOCAL
      //MS:      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      AcItem.PartnerProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      cast( _PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv preserving type )      as PartnerProjectExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast( AcItem.WBSElementInternalID as fis_wbsint_no_conv preserving type )                              as WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      cast( _WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type )                as WBSElementExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      AcItem.PartnerWBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      cast( _PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type ) as PartnerWBSElementExternalID,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      AcItem.FunctionalArea,
      @ObjectModel.foreignKey.association: '_Segment'
      AcItem.Segment,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      AcItem.CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      AcItem.CostAnalysisResource,
      @ObjectModel.foreignKey.association: '_WorkPackage'
      AcItem.WorkPackage,
      @ObjectModel.foreignKey.association: '_WorkPackageWorkItem'
      AcItem.WorkItem,
      AcItem.IsLotSizeIndependent,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      AcItem.PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      AcItem.PartnerBusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      AcItem.PartnerSegment,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      AcItem.PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      AcItem.PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      AcItem.PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      AcItem.PartnerCostCtrActivityType,
      @ObjectModel.foreignKey.association: '_Order'
      AcItem.OrderID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'PartnerOrder_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'PartnerOrder_2'
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      PartnerOrder,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      PartnerOrder_2,

      @ObjectModel.foreignKey.association: '_PartnerCompany'
      AcItem.PartnerCompany,

      // Transaction data
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      AcItem.ReferenceDocumentType,
      AcItem.ReferenceDocumentContext,
      AcItem.ReferenceDocument,

      // Amount/Currency/Unit
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      //@Semantics.currencyCode:true
      AcItem.TransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AcItem.AmountInTransactionCurrency                                                                     as AmountInTransactionCurrency,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      //@Semantics.currencyCode:true
      AcItem.CompanyCodeCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AcItem.AmountInCompanyCodeCurrency                                                                     as AmountInCompanyCodeCurrency,
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      //@Semantics.currencyCode:true
      AcItem.GlobalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      AcItem.AmountInGlobalCurrency                                                                          as AmountInGlobalCurrency,
      @ObjectModel.foreignKey.association: '_ControllingObjectCurrency'
      //@Semantics.currencyCode:true
      AcItem.ControllingObjectCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      AcItem.AmountInObjectCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      AcItem.FixedAmountInGlobalCrcy,
      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      //@Semantics.unitOfMeasure:true
      AcItem.CostSourceUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      AcItem.ValuationQuantity,
      @ObjectModel.foreignKey.association: '_CostCenterHierarchy'
      cast( AcItem.CostCenter as fis_cctr_hryid_42)                                                          as CostCenterHierarchy,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _CostCenterHierarchy,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FundHierarchy'
      cast( AcItem.Fund as fmis_hryid_fund )                                                                 as FundHierarchy,
      _FundHierarchy,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantHierarchy'
      cast( AcItem._Grant.GrantID as gm_hryid_grant)                                                         as GrantHierarchy,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _GrantHierarchy,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FunctionalAreaHierarchy'
      cast( AcItem.FunctionalArea as fis_hryid_functionalarea_42)                                            as FunctionalAreaHierarchy,
      _FunctionalAreaHierarchy,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BudgetAccountInChtAcctsHier'
      cast (PubSecBudgetAccount as psm_hryid_budgetaccount  )                                                as BudgetAccountHierarchy,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _BudgetAccountInChtAcctsHier,

      @Analytics.internalName: #LOCAL
      _PubSecBudgetAccount.PubSecBudgetIsRelevant                                                            as PubSecBudgetIsRelevant,

      // Define PSM specific amount fields to company code currency
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' then
          cast( AcItem.AmountInTransactionCurrency as psm_amt_expn_bdgt_trans_curr )
        else
          cast( '0' as psm_amt_expn_bdgt_trans_curr )
      end                                                                                                    as PubSecExpnBdgtAmtInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' then
          cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_expn_bdgt_cc_curr )
        else
          cast( '0' as psm_amt_expn_bdgt_cc_curr )
      end                                                                                                    as PubSecExpnBdgtAmtInCoCodeCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' then
          cast( AcItem.AmountInGlobalCurrency as psm_amt_expn_bdgt_grp_curr )
        else
          cast( '0' as psm_amt_expn_bdgt_grp_curr )
      end                                                                                                    as PubSecExpnBdgtAmtInGlobalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' then
          cast( AcItem.AmountInTransactionCurrency as psm_amt_revn_bdgt_trans_curr )
        else
          cast( '0' as psm_amt_revn_bdgt_trans_curr )
      end                                                                                                    as PubSecRevnBdgtAmtInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' then
          cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_revn_bdgt_cc_curr )
        else
          cast( '0' as psm_amt_revn_bdgt_cc_curr )
      end                                                                                                    as PubSecRevnBdgtAmtInCoCodeCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' then
          cast( AcItem.AmountInGlobalCurrency as psm_amt_revn_bdgt_grp_curr )
        else
          cast( '0' as psm_amt_revn_bdgt_grp_curr )
      end                                                                                                    as PubSecRevnBdgtAmtInGlobalCrcy,

      // Continue with transactional data
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      AcItem.FiscalYearVariant,
      //MS: Marked as obsolete @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
      @Semantics.fiscal.period: true
      AcItem.FiscalPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant'
      @Semantics.fiscal.yearPeriod: true
      AcItem.FiscalYearPeriod,
      AcItem.PostingDate,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      AcItem.SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      AcItem.SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_Plant'
      AcItem.Plant,
      @ObjectModel.foreignKey.association: '_Product'
      AcItem.Product,
      @ObjectModel.foreignKey.association: '_Customer'
      AcItem.Customer,
      @ObjectModel.foreignKey.association: '_PubSecPlanningCategory'
      AcItem.PlanningCategory,
      AcItem.AccountAssignmentType,
      AcItem.PartnerAccountAssignmentType,
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      AcItem.ControllingDebitCreditCode,
      AcItem.PersonnelNumber,
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      AcItem.BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      AcItem.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      AcItem.DistributionChannel,
      AcItem.OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      AcItem.SoldProduct,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      AcItem.CustomerGroup,
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      AcItem.CustomerSupplierCountry,
      AcItem.CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      AcItem.SalesDistrict,
      @ObjectModel.foreignKey.association: '_BillToParty'
      AcItem.BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      AcItem.ShipToParty,
      AcItem.CustomerSupplierCorporateGroup,

      // Add PSM account assignments
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      AcItem.FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_Fund'
      AcItem.Fund,
      @ObjectModel.foreignKey.association: '_Grant'
      AcItem.GrantID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Sponsor'
      AcItem._Grant.GranteeMgmtSponsor,
      @ObjectModel.foreignKey.association: '_SponsoredClass'
      AcItem.SponsoredClass,
      @ObjectModel.foreignKey.association: '_SponsoredProgram'
      AcItem.SponsoredProgram,
      AcItem.GteeMBudgetValidityNumber,
      //MS: Replace _PubSecBudgetAccount association with _BudgetAccountInChtAccts because of Hierarchy
      //MS: @ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
      @ObjectModel.foreignKey.association: '_BudgetAccountInChtAccts'
      AcItem.PubSecBudgetAccount,
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
      AcItem.PubSecBudgetAccountCoCode,
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      AcItem.BudgetPeriod,
      @ObjectModel.foreignKey.association: '_PubSecBdgtAcctRevnExpnCode'
      _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode                                                        as PubSecBdgtAcctRevnExpnCode,
      @ObjectModel.foreignKey.association: '_FundType'
      AcItem._Fund.FundType                                                                                  as FundType,
      @ObjectModel.foreignKey.association: '_GranteeMgmtFundType'
      AcItem._Fund._FundType.GranteeMgmtFundType                                                             as GranteeMgmtFundType,
      @ObjectModel.foreignKey.association: '_BudgetProcess'
      AcItem.BudgetProcess,
      @ObjectModel.foreignKey.association: '_BudgetingType'
      AcItem.BudgetingType,
      @ObjectModel.foreignKey.association: '_BudgetDocWorkFlowStatus'
      AcItem.BudgetDocWorkFlowStatus,
      @ObjectModel.foreignKey.association: '_PubSecIsConsumableBudget'
      AcItem.PubSecIsConsumableBudget,

      // Original Budget documents for semantic navigation
      cast(
        case
          when AcItem.ReferenceDocumentType = 'FPL04'
            then AcItem.ReferenceDocument
          when AcItem.ReferenceDocumentType = 'FPL00'
            then AcItem.ReferenceDocument
          else ''
        end as psm_bdgt_docnr preserving type )                                                              as BudgetDocument,

      AcItem.WorkCenterInternalID,
      AcItem.OrderOperation,
      AcItem.OrderItem,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      AcItem.PlanPriceInGlobalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AcItem.PlanPriceInCompanyCodeCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AcItem.PlanPriceInTransactionCurrency,
      AcItem.GLAccountAuthorizationGroup,
      AcItem.CustomerBasicAuthorizationGrp,
      AcItem.OrderType,
      AcItem.SalesOrderType,

      // Asset
      AcItem.AssetDepreciationArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      AcItem.MasterFixedAsset,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FixedAsset'
      AcItem.FixedAsset,
      AcItem.AssetAcctTransClassfctn,
      AcItem.AssetClass,

      // Associations
      _PubSecBudgetAccount,
      _BudgetAccountInChtAccts,
      _PubSecBudgetAccountCoCode,
      _PubSecBdgtAcctRevnExpnCode,
      AcItem._BillingDocumentType,
      AcItem._BillToParty,
      AcItem._BudgetingType,
      _BudgetDocWorkFlowStatus,
      _PubSecIsConsumableBudget,
      AcItem._BudgetPeriod,
      AcItem._BudgetProcess,
      AcItem._BusinessArea,
      AcItem._BusinessTransactionType,
      AcItem._CalendarDate,
      AcItem._ChartOfAccounts,
      AcItem._CompanyCode,
      AcItem._CompanyCodeCurrency,
      AcItem._ControllingArea,
      AcItem._ControllingDebitCreditCode,
      AcItem._ControllingObjectCurrency,
      AcItem._CostAnalysisResource,
      AcItem._CostCenter,
      AcItem._CostCtrActivityType,
      AcItem._CostSourceUnit,
      AcItem._CurrentCostCenter,
      AcItem._CurrentProfitCenter,
      AcItem._Customer,
      AcItem._CustomerGroup,
      AcItem._CustomerSupplierCountry,
      AcItem._CustomerSupplierIndustryText,
      AcItem._DistributionChannel,
      AcItem._Employment,
      AcItem._FinancialManagementArea,
      AcItem._FinancialTransactionType,
      AcItem._FiscalCalendarDate,
      AcItem._FiscalPeriodForVariant,
      AcItem._FiscalYear,
      AcItem._FiscalYearPeriodForVariant,
      AcItem._FiscalYearVariant,
      AcItem._FixedAsset,
      AcItem._FunctionalArea,
      AcItem._Fund,
      _FundType,
      _GranteeMgmtFundType,
      AcItem._GLAccountInChartOfAccounts,
      AcItem._GLAccountInCompanyCode,
      AcItem._GlobalCurrency,
      AcItem._Grant,
      AcItem._Grant._Sponsor,
      AcItem._InternalOrder,
      AcItem._Ledger,
      AcItem._LedgerFiscalYear,
      AcItem._LedgerFiscalYearForVariant,
      AcItem._MasterFixedAsset,
      AcItem._Order,
      AcItem._OrganizationDivision,
      AcItem._PartnerBusinessArea,
      AcItem._PartnerCompany,
      AcItem._PartnerCompanyCode,
      AcItem._PartnerCostCenter,
      AcItem._PartnerCostCtrActivityType,
      AcItem._PartnerFunctionalArea,
      AcItem._PartnerOrder,
      AcItem._PartnerOrder_2,
      AcItem._PartnerProfitCenter,
      AcItem._PartnerProjectBasicData,
      AcItem._PartnerSegment,
      AcItem._PlanningCategory,
      AcItem._Plant,
      AcItem._Product,
      AcItem._ProfitCenter,
      AcItem._ProjectBasicData,
      _ProjectExternalID,
      @UI.hidden: true
      _ProjectExternalIDText,
      _PartnerProjectExternalID,
      _ReferenceDocumentType,
      AcItem._SalesDistrict,
      AcItem._SalesDocument,
      AcItem._SalesDocumentItem,
      AcItem._SalesOrganization,
      AcItem._Segment,
      AcItem._SemTagGLAccount,
      AcItem._ShipToParty,
      AcItem._SoldProduct,
      AcItem._SponsoredClass,
      AcItem._SponsoredProgram,
      AcItem._TransactionCurrency,
      _WBSElementExternalID,
      @UI.hidden: true
      _WBSElementExternalIDText,
      AcItem._WorkPackage,
      AcItem._WorkPackageWorkItem,
      AcItem._WBSElementBasicData,
      AcItem._PartnerWBSElementBasicData,
      _PartnerWBSElementExternalID,
      _PubSecPlanningCategory,
      @Analytics.association.toDocumentStorage: true
      _DocumentStore 

}
```
