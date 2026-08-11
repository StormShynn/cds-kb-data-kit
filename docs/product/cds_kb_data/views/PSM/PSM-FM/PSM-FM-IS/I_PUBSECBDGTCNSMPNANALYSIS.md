---
name: I_PUBSECBDGTCNSMPNANALYSIS
description: "Public Sector Budget Consumption Analysis"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTCNSMPNANALYSIS')/$value
semantic_en: "Public Sector Budget Consumption Analysis"
semantic_vi: "Public Sector Budget Consumption Analysis — CDS view giao diện dựa trên P_PubSecBdgtCnsmpnAnalysis."
keywords:
  - "public"
  - "sector"
  - "budget"
  - "consumption"
  - "analysis"
  - "ledger"
  - "company"
  - "code"
  - "financial"
  - "management"
  - "area"
  - "controlling"
  - "fiscal"
  - "year"
tags:
  - PSM
  - budget
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_PUBSECBDGTCNSMPNANALYSIS

**Public Sector Budget Consumption Analysis**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTCNSMPNANALYSIS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `ControllingArea` | ✓ | |  |  | `CHAR(4)` | Controlling Area |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `CtrlObjForFund` | ✓ | |  |  | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForFunctionalArea` | ✓ | |  |  | `CHAR(50)` | Control Object for a Functional Area |
| `CtrlObjForBudgetPeriod` | ✓ | |  |  | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForCostCenter` | ✓ | |  |  | `CHAR(50)` | Control Object for a Cost Center |
| `CtrlObjForWBSElement` | ✓ | |  |  | `CHAR(50)` | Control Object for a WBS Element |
| `CtrlObjForBudgetAccount` | ✓ | |  |  | `CHAR(50)` | Control Object for a Budget Account |
| `CtrlObjForGrant` | ✓ | |  |  | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForSponsoredClass` | ✓ | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredProgram` | ✓ | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `CtrlObjForBdgtValidityNmbr` | ✓ | |  |  | `CHAR(23)` | Control Object for a Budget Validity Number |
| `GlobalCurrency` | ✓ | |  |  | `CUKY(5)` | Global Currency |
| `PubSecBdgtAcctRevnExpnCode` | ✓ | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `AvailabilityControlProfile` | ✓ | |  |  | `CHAR(6)` | Budget Availability Control Profile for Public Sector Mgmt |
| `Fund` | ✓ | |  |  | `CHAR(10)` | Fund |
| `CostCenter` | ✓ | |  |  | `CHAR(10)` | Cost Center |
| `FinancialAccountType` | ✓ | |  |  | `CHAR(1)` | Account Type |
| `BusinessArea` | ✓ | |  |  | `CHAR(4)` | Business Area |
| `Segment` | ✓ | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `Supplier` | ✓ | |  |  | `CHAR(10)` | Supplier |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer Number |
| `AccountingDocumentType` | ✓ | |  |  | `CHAR(2)` | Journal Entry Type |
| `ProfitCenter` | ✓ | |  |  | `CHAR(10)` | Profit Center |
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `SponsoredClass` | ✓ | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` | ✓ | |  |  | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` | ✓ | |  |  | `CHAR(3)` | Budget Validity Number |
| `FunctionalArea` | ✓ | |  |  | `CHAR(16)` | Functional Area |
| `BdgtConsumableAmtInGlobalCrcy` |  | |  | `cast( sum( Main.BdgtConsumableAmtInGlobalCrcy ) as psm_amt_cbdgt_grp_curr preserving type )` | `CURR(25)` | Consumable Amount in Global Currency |
| `BdgtConsumedAmtInGlobalCrcy` |  | |  | `cast( sum( Main.BdgtConsumedAmtInGlobalCrcy ) as psm_amt_cpost_grp_curr preserving type )` | `CURR(25)` | Consumed Amount in Global Currency |
| `BdgtAvailableAmtInGlobalCrcy` |  | |  | `cast( sum( Main.BdgtAvailableAmtInGlobalCrcy ) as psm_amt_avail_grp_curr preserving type )` | `CURR(25)` | Available Amount in Global Currency |
| `HierarchyIDForFund` |  | |  |  | `CHAR(42)` | Hierarchy ID for Fund |
| `HierarchyIDForFunctionalArea` |  | |  |  | `CHAR(42)` | Hierarchy ID for Functional Area |
| `HierarchyIDForBudgetPeriod` |  | |  |  | `CHAR(42)` | Hierarchy ID for Budget Period |
| `HierarchyIDForCostCenter` |  | |  |  | `CHAR(42)` | Hierarchy ID for Cost Center |
| `HierarchyIDForWBSElement` |  | |  |  | `CHAR(42)` | Hierarchy ID for WBS Element |
| `HierarchyIDForBudgetAccount` |  | |  |  | `CHAR(42)` | Hierarchy ID for Budget Account Element |
| `GrantHierarchy` |  | |  |  | `CHAR(42)` | Grant Hierarchy |
| `SponsoredClassHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Class Hierarchy |
| `SponsoredProgramHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Program Hierarchy |
| `_Ledger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_CtrlObjFund` | | ✓ | | | | |
| `_CtrlObjFuncArea` | | ✓ | | | | |
| `_CtrlObjBdgtPeriod` | | ✓ | | | | |
| `_CtrlObjCostCenter` | | ✓ | | | | |
| `_CtrlObjWBSElement` | | ✓ | | | | |
| `_CtrlObjBdgtAccount` | | ✓ | | | | |
| `_CtrlObjGrant` | | ✓ | | | | |
| `_CtrlObjSpnsrdClass` | | ✓ | | | | |
| `_CtrlObjSpnsrdProg` | | ✓ | | | | |
| `_PubSecFundHier` | | ✓ | | | | |
| `_PubSecFunctionalAreaHier` | | ✓ | | | | |
| `_PubSecBudgetPeriodHier` | | ✓ | | | | |
| `_PubSecCostCenterHier` | | ✓ | | | | |
| `_PubSecWBSElementHier` | | ✓ | | | | |
| `_PubSecBudgetAccountHier` | | ✓ | | | | |
| `_PubSecGrantHier` | | ✓ | | | | |
| `_PubSecSpnsrdClassHier` | | ✓ | | | | |
| `_PubSecSpnsrdProgHier` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_PubSecBdgtAcctRevnExpnCode` | | ✓ | | | | |
| `_PubSecAvailyCtrlProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Ledger` | `I_Ledger` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_CtrlObjFund` | `I_PubSecCtrlObjFund` | [0..1] |
| `_CtrlObjFuncArea` | `I_PubSecCtrlObjFuncArea` | [0..1] |
| `_CtrlObjBdgtPeriod` | `I_PubSecCtrlObjBdgtPeriod` | [0..1] |
| `_CtrlObjCostCenter` | `I_PubSecCtrlObjCostCenter` | [0..1] |
| `_CtrlObjWBSElement` | `I_PubSecCtrlObjWBSElement` | [0..1] |
| `_CtrlObjBdgtAccount` | `I_PubSecCtrlObjBdgtAccount` | [0..1] |
| `_CtrlObjGrant` | `I_PubSecCtrlObjGrant` | [0..1] |
| `_CtrlObjSpnsrdClass` | `I_PubSecCtrlObjSpnsrdClass` | [0..1] |
| `_CtrlObjSpnsrdProg` | `I_PubSecCtrlObjSpnsrdProg` | [0..1] |
| `_PubSecFundHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecFunctionalAreaHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecBudgetPeriodHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecCostCenterHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecWBSElementHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecBudgetAccountHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecGrantHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecSpnsrdClassHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecSpnsrdProgHier` | `I_PubSecHierarchy` | [0..1] |
| `_Fund` | `I_Fund` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_PubSecBdgtAcctRevnExpnCode` | `I_PubSecBdgtAcctRevnExpnCode` | [0..1] |
| `_PubSecAvailyCtrlProfile` | `I_PubSecAvailyCtrlProfile` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTCNSMPNANALYSIS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTCNSMPNANALYSIS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSBDGTCNSMPN'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Public Sector Budget Consumption Analysis'

@VDM.viewType: #COMPOSITE
//@VDM.lifecycle.contract.type: #SAP_INTERNAL_API
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     }
}

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@Analytics.internalName: #LOCAL
@Analytics.dataCategory: #CUBE

define view I_PubSecBdgtCnsmpnAnalysis
  as select from P_PubSecBdgtCnsmpnAnalysis as Main
  association [0..1] to I_Ledger                     as _Ledger                     on  $projection.Ledger = _Ledger.Ledger
  association [1..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ControllingArea            as _ControllingArea            on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_FinancialManagementArea    as _FinancialManagementArea    on  $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea
  association [0..1] to I_FiscalYearForCompanyCode   as _FiscalYear                 on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                    and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [0..1] to I_Currency                   as _GlobalCurrency             on  $projection.GlobalCurrency = _GlobalCurrency.Currency
  association [0..1] to I_PubSecCtrlObjFund          as _CtrlObjFund                on  $projection.CtrlObjForFund     = _CtrlObjFund.CtrlObjForFund
                                                                                    and $projection.HierarchyIDForFund = _CtrlObjFund.HierarchyIDForFund
  association [0..1] to I_PubSecCtrlObjFuncArea      as _CtrlObjFuncArea            on  $projection.CtrlObjForFunctionalArea     = _CtrlObjFuncArea.CtrlObjForFunctionalArea
                                                                                    and $projection.HierarchyIDForFunctionalArea = _CtrlObjFuncArea.HierarchyIDForFunctionalArea
  association [0..1] to I_PubSecCtrlObjBdgtPeriod    as _CtrlObjBdgtPeriod          on  $projection.CtrlObjForBudgetPeriod     = _CtrlObjBdgtPeriod.CtrlObjForBudgetPeriod
                                                                                    and $projection.HierarchyIDForBudgetPeriod = _CtrlObjBdgtPeriod.HierarchyIDForBudgetPeriod
  association [0..1] to I_PubSecCtrlObjCostCenter    as _CtrlObjCostCenter          on  $projection.CtrlObjForCostCenter     = _CtrlObjCostCenter.CtrlObjForCostCenter
                                                                                    and $projection.HierarchyIDForCostCenter = _CtrlObjCostCenter.HierarchyIDForCostCenter
  association [0..1] to I_PubSecCtrlObjWBSElement    as _CtrlObjWBSElement          on  $projection.CtrlObjForWBSElement     = _CtrlObjWBSElement.CtrlObjForWBSElement
                                                                                    and $projection.HierarchyIDForWBSElement = _CtrlObjWBSElement.HierarchyIDForWBSElement
  association [0..1] to I_PubSecCtrlObjBdgtAccount   as _CtrlObjBdgtAccount         on  $projection.CtrlObjForBudgetAccount     = _CtrlObjBdgtAccount.CtrlObjForBudgetAccount
                                                                                    and $projection.HierarchyIDForBudgetAccount = _CtrlObjBdgtAccount.HierarchyIDForBudgetAccount
  association [0..1] to I_PubSecCtrlObjGrant         as _CtrlObjGrant               on  $projection.CtrlObjForGrant = _CtrlObjGrant.CtrlObjForGrant
                                                                                    and $projection.GrantHierarchy  = _CtrlObjGrant.GrantHierarchy
  association [0..1] to I_PubSecCtrlObjSpnsrdClass   as _CtrlObjSpnsrdClass         on  $projection.CtrlObjForSponsoredClass = _CtrlObjSpnsrdClass.CtrlObjForSponsoredClass
                                                                                    and $projection.SponsoredClassHierarchy  = _CtrlObjSpnsrdClass.SponsoredClassHierarchy
  association [0..1] to I_PubSecCtrlObjSpnsrdProg    as _CtrlObjSpnsrdProg          on  $projection.CtrlObjForSponsoredProgram = _CtrlObjSpnsrdProg.CtrlObjForSponsoredProgram
                                                                                    and $projection.SponsoredProgramHierarchy  = _CtrlObjSpnsrdProg.SponsoredProgramHierarchy
  association [0..1] to I_PubSecHierarchy            as _PubSecFundHier             on  $projection.HierarchyIDForFund = _PubSecFundHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecFunctionalAreaHier   on  $projection.HierarchyIDForFunctionalArea = _PubSecFunctionalAreaHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecBudgetPeriodHier     on  $projection.HierarchyIDForBudgetPeriod = _PubSecBudgetPeriodHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecCostCenterHier       on  $projection.HierarchyIDForCostCenter = _PubSecCostCenterHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecWBSElementHier       on  $projection.HierarchyIDForWBSElement = _PubSecWBSElementHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecBudgetAccountHier    on  $projection.HierarchyIDForBudgetAccount = _PubSecBudgetAccountHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecGrantHier            on  $projection.GrantHierarchy = _PubSecGrantHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecSpnsrdClassHier      on  $projection.SponsoredClassHierarchy = _PubSecSpnsrdClassHier.HierarchyID
  association [0..1] to I_PubSecHierarchy            as _PubSecSpnsrdProgHier       on  $projection.SponsoredProgramHierarchy = _PubSecSpnsrdProgHier.HierarchyID
  association [0..1] to I_Fund                       as _Fund                       on  $projection.FinancialManagementArea = _Fund.FinancialManagementArea
                                                                                    and $projection.Fund                    = _Fund.Fund
  association [0..1] to I_Grant                      as _Grant                      on  $projection.GrantID = _Grant.GrantID
  association [0..*] to I_CostCenter                 as _CostCenter                 on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                    and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_CostCenter                 as _CurrentCostCenter          on  $projection.ControllingArea          = _CurrentCostCenter.ControllingArea
                                                                                    and $projection.CostCenter               = _CurrentCostCenter.CostCenter
                                                                                    and _CurrentCostCenter.ValidityStartDate <= $session.system_date
                                                                                    and _CurrentCostCenter.ValidityEndDate   >= $session.system_date
  association [0..1] to I_FinancialAccountType       as _FinancialAccountType       on  $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
  association [0..1] to I_BusinessArea               as _BusinessArea               on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_Segment                    as _Segment                    on  $projection.Segment = _Segment.Segment
  association [0..1] to I_GLAccountInCompanyCode     as _GLAccountInCompanyCode     on  $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode
                                                                                    and $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
  association [0..1] to I_Supplier                   as _Supplier                   on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Customer                   as _Customer                   on  $projection.Customer = _Customer.Customer
  association [0..1] to I_AccountingDocumentType     as _AccountingDocumentType     on  $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType
  association [0..*] to I_ProfitCenter               as _ProfitCenter               on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                    and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..1] to I_ProfitCenter               as _CurrentProfitCenter        on  $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea
                                                                                    and $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter
                                                                                    and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
                                                                                    and _CurrentProfitCenter.ValidityEndDate   >= $session.system_date
  association [0..1] to I_FunctionalArea             as _FunctionalArea             on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_PubSecBdgtAcctRevnExpnCode as _PubSecBdgtAcctRevnExpnCode on  $projection.PubSecBdgtAcctRevnExpnCode = _PubSecBdgtAcctRevnExpnCode.PubSecBdgtAcctRevnExpnCode
  association [0..1] to I_PubSecAvailyCtrlProfile    as _PubSecAvailyCtrlProfile    on  $projection.AvailabilityControlProfile = _PubSecAvailyCtrlProfile.AvailabilityControlProfile
  
{
      @ObjectModel.foreignKey.association: '_Ledger'
  key Main.Ledger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Main.CompanyCode,
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
  key Main.FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key Main.ControllingArea,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key Main.FiscalYear,
      @ObjectModel.foreignKey.association: '_CtrlObjFund'
  key Main.CtrlObjForFund,
      @ObjectModel.foreignKey.association: '_CtrlObjFuncArea'
  key Main.CtrlObjForFunctionalArea,
      @ObjectModel.foreignKey.association: '_CtrlObjBdgtPeriod'
  key Main.CtrlObjForBudgetPeriod,
      @ObjectModel.foreignKey.association: '_CtrlObjCostCenter'
  key Main.CtrlObjForCostCenter,
      @ObjectModel.foreignKey.association: '_CtrlObjWBSElement'
  key Main.CtrlObjForWBSElement,
      @ObjectModel.foreignKey.association: '_CtrlObjBdgtAccount'
  key Main.CtrlObjForBudgetAccount,
      @ObjectModel.foreignKey.association: '_CtrlObjGrant'
  key Main.CtrlObjForGrant,
      @ObjectModel.foreignKey.association: '_CtrlObjSpnsrdClass'
  key Main.CtrlObjForSponsoredClass,
      @ObjectModel.foreignKey.association: '_CtrlObjSpnsrdProg'
  key Main.CtrlObjForSponsoredProgram,
  key Main.CtrlObjForBdgtValidityNmbr,
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
  key Main.GlobalCurrency,
      @ObjectModel.foreignKey.association: '_PubSecBdgtAcctRevnExpnCode'
  key Main.PubSecBdgtAcctRevnExpnCode,

      // Availability Control
      @ObjectModel.foreignKey.association: '_PubSecAvailyCtrlProfile'
  key Main.AvailabilityControlProfile,

      // For Authorizations
      @ObjectModel.foreignKey.association: '_Fund'
  key Main.Fund,
      @ObjectModel.foreignKey.association: '_CostCenter'
  key Main.CostCenter,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
  key Main.FinancialAccountType,
      @ObjectModel.foreignKey.association: '_BusinessArea'
  key Main.BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
  key Main.Segment,
      @ObjectModel.foreignKey.association: '_GLAccountInCompanyCode'
  key Main.GLAccount,
      @ObjectModel.foreignKey.association: '_Supplier'
  key Main.Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
  key Main.Customer,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
  key Main.AccountingDocumentType,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
  key Main.ProfitCenter,
      @ObjectModel.foreignKey.association: '_Grant'
  key Main.GrantID,
  key Main.SponsoredClass,
  key Main.SponsoredProgram,
  key Main.GteeMBudgetValidityNumber,

      // For Additional Authorizations
      @ObjectModel.foreignKey.association: '_FunctionalArea'
  key Main.FunctionalArea,
  

      // Amounts
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast( sum( Main.BdgtConsumableAmtInGlobalCrcy ) as psm_amt_cbdgt_grp_curr preserving type ) as BdgtConsumableAmtInGlobalCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast( sum( Main.BdgtConsumedAmtInGlobalCrcy ) as psm_amt_cpost_grp_curr preserving type )   as BdgtConsumedAmtInGlobalCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast( sum( Main.BdgtAvailableAmtInGlobalCrcy ) as psm_amt_avail_grp_curr preserving type )  as BdgtAvailableAmtInGlobalCrcy,

      // Hierarchy IDs
      @ObjectModel.foreignKey.association: '_PubSecFundHier'
      Main.HierarchyIDForFund,
      @ObjectModel.foreignKey.association: '_PubSecFunctionalAreaHier'
      Main.HierarchyIDForFunctionalArea,
      @ObjectModel.foreignKey.association: '_PubSecBudgetPeriodHier'
      Main.HierarchyIDForBudgetPeriod,
      @ObjectModel.foreignKey.association: '_PubSecCostCenterHier'
      Main.HierarchyIDForCostCenter,
      @ObjectModel.foreignKey.association: '_PubSecWBSElementHier'
      Main.HierarchyIDForWBSElement,
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountHier'
      Main.HierarchyIDForBudgetAccount,
      @ObjectModel.foreignKey.association: '_PubSecGrantHier'
      Main.GrantHierarchy,
      @ObjectModel.foreignKey.association: '_PubSecSpnsrdClassHier'
      Main.SponsoredClassHierarchy,
      @ObjectModel.foreignKey.association: '_PubSecSpnsrdProgHier'
      Main.SponsoredProgramHierarchy,
      
    


      // Associations
      _FinancialManagementArea,
      _ControllingArea,
      _CtrlObjFund,
      _CtrlObjFuncArea,
      _CtrlObjBdgtPeriod,
      _CtrlObjCostCenter,
      _CtrlObjWBSElement,
      _CtrlObjBdgtAccount,
      _CtrlObjGrant,
      _CtrlObjSpnsrdClass,
      _CtrlObjSpnsrdProg,
      _PubSecFundHier,
      _PubSecFunctionalAreaHier,
      _PubSecBudgetPeriodHier,
      _PubSecCostCenterHier,
      _PubSecWBSElementHier,
      _PubSecBudgetAccountHier,
      _PubSecGrantHier,
      _PubSecSpnsrdClassHier,
      _PubSecSpnsrdProgHier,
      _PubSecBdgtAcctRevnExpnCode,
      _PubSecAvailyCtrlProfile,
      _Ledger,
      _CompanyCode,
      _Fund,
      _Grant,
      _CostCenter,
      _CurrentCostCenter,
      _FinancialAccountType,
      _BusinessArea,
      _Segment,
      _GLAccountInCompanyCode,
      _Supplier,
      _Customer,
      _AccountingDocumentType,
      _ProfitCenter,
      _CurrentProfitCenter,
      _FunctionalArea,
      _FiscalYear,
      _GlobalCurrency

}
group by
  Ledger,
  CompanyCode,
  FinancialManagementArea,
  ControllingArea,
  FiscalYear,
  CtrlObjForFund,
  CtrlObjForFunctionalArea,
  CtrlObjForBudgetPeriod,
  CtrlObjForCostCenter,
  CtrlObjForWBSElement,
  CtrlObjForBudgetAccount,
  CtrlObjForGrant,
  CtrlObjForSponsoredClass,
  CtrlObjForSponsoredProgram,
  CtrlObjForBdgtValidityNmbr,
  GlobalCurrency,
  PubSecBdgtAcctRevnExpnCode,
  AvailabilityControlProfile,
  Fund,
  CostCenter,
  FinancialAccountType,
  BusinessArea,
  Segment,
  GLAccount,
  Supplier,
  Customer,
  AccountingDocumentType,
  ProfitCenter,
  FunctionalArea,
  GrantID,
  SponsoredClass,
  SponsoredProgram,
  GteeMBudgetValidityNumber,
  HierarchyIDForFund,
  HierarchyIDForFunctionalArea,
  HierarchyIDForBudgetPeriod,
  HierarchyIDForCostCenter,
  HierarchyIDForWBSElement,
  HierarchyIDForBudgetAccount,
  GrantHierarchy,
  SponsoredClassHierarchy,
  SponsoredProgramHierarchy
```
