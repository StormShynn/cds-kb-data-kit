---
name: C_PUBSECGRANTBDGTCNSMPN
description: "Grant Budget Overview"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBDGTCNSMPN')/$value
semantic_en: "Grant Budget Overview"
semantic_vi: "Grant Budget Overview — CDS view tiêu dùng dựa trên I_PubSecBdgtCnsmpnAnalysisCube."
keywords:
  - "grant"
  - "budget"
  - "overview"
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
  - component:PSM-GM-GTE-IS
  - consumption-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
---
# C_PUBSECGRANTBDGTCNSMPN

**Grant Budget Overview**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBDGTCNSMPN')/$value) |

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
| `CtrlObjForGrant` | ✓ | |  | `cast( ltrim(Cube.CtrlObjForGrant,'0') as psm_s4c_fm_avc_ctrl_obj_gr preserving type )` | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForSponsoredClass` | ✓ | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredProgram` | ✓ | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `CtrlObjForBdgtValidityNmbr` | ✓ | |  |  | `CHAR(23)` | Control Object for a Budget Validity Number |
| `GranteeMgmtSponsor` | ✓ | |  |  | `CHAR(10)` | Grant Sponsor |
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
| `BdgtConsumableExpnAmtInGCrcy` |  | |  | `cast( Cube.BdgtConsumableAmtInGlobalCrcy as psm_amt_expn_cbdgt_grp_curr preserving type )` | `CURR(25)` | Consumable Expense Amount in Global Currency |
| `BdgtConsumedExpnAmtInGCrcy` |  | |  | `cast( Cube.BdgtConsumedAmtInGlobalCrcy as psm_amt_expn_cpost_grp_curr preserving type )` | `CURR(25)` | Consumed Expense Amount in Global Currency |
| `BdgtAvailableExpnAmtInGCrcy` |  | |  | `cast( Cube.BdgtAvailableAmtInGlobalCrcy as psm_amt_expn_avail_grp_curr preserving type )` | `CURR(25)` | Available Expense Amount in Global Currency |
| `HierarchyIDForFund` |  | |  |  | `CHAR(42)` | Hierarchy ID for Fund |
| `HierarchyIDForFunctionalArea` |  | |  |  | `CHAR(42)` | Hierarchy ID for Functional Area |
| `HierarchyIDForBudgetPeriod` |  | |  |  | `CHAR(42)` | Hierarchy ID for Budget Period |
| `HierarchyIDForCostCenter` |  | |  |  | `CHAR(42)` | Hierarchy ID for Cost Center |
| `HierarchyIDForWBSElement` |  | |  |  | `CHAR(42)` | Hierarchy ID for WBS Element |
| `HierarchyIDForBudgetAccount` |  | |  |  | `CHAR(42)` | Hierarchy ID for Budget Account Element |
| `GrantHierarchy` |  | |  |  | `CHAR(42)` | Grant Hierarchy |
| `SponsoredClassHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Class Hierarchy |
| `SponsoredProgramHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Program Hierarchy |
| `CtrlObjNameForFund` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Fund |
| `CtrlObjNameForFunctionalArea` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Functional Area |
| `CtrlObjNameForBudgetPeriod` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Budget Period |
| `CtrlObjNameForCostCenter` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Cost Center |
| `CtrlObjNameForWBSElement` |  | |  |  | `CHAR(50)` | Name of a Control Object for a WBS Element |
| `CtrlObjNameForBudgetAccount` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Budget Account |
| `CtrlObjForGrantName` |  | |  |  | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForSponsoredClassName` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredProgramName` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` |  |
| `PubSecBdgtAcctRevnExpnCodeText` |  | |  | `Cube._PubSecBdgtAcctRevnExpnCode._Text[1:Language = $session.system_language].PubSecBdgtAcctRevnExpnCodeText` | `CHAR(60)` | Description of Expense or Revenue on Budget Account |
| `AvailabilityControlProfileName` |  | |  | `Cube._PubSecAvailyCtrlProfile._Text[1:Language = $session.system_language].AvailabilityControlProfileName` | `CHAR(30)` | Budget Availability Control: Profile Name |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `CurrencyName` |  | |  | `Cube._GlobalCurrency._Text[1:Language = $session.system_language].CurrencyName` | `CHAR(40)` | Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBDGTCNSMPN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBDGTCNSMPN')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSGMBGTCNSMP'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #CONSUMPTION
@Search.searchable: false
@Metadata.allowExtensions: true
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     }
}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Analytics.internalName: #LOCAL
@Analytics.dataCategory: #CUBE
@Metadata.ignorePropagatedAnnotations: true

@OData.publish: true

@EndUserText.label: 'Grant Budget Overview'
define view C_PubSecGrantBdgtCnsmpn
  as select from I_PubSecBdgtCnsmpnAnalysisCube as Cube
{
      @Consumption.hidden: true
  key Cube.Ledger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @ObjectModel.text.element: 'CompanyCodeName'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
  key Cube.CompanyCode,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
  key Cube.FinancialManagementArea,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key Cube.ControllingArea,
      @Consumption.hidden: true
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FiscalYearForCompanyCode',
                     element: 'FiscalYear' },
          additionalBinding: [{ localElement: 'CompanyCode',
                                element: 'CompanyCode' } ]
        }]
  key Cube.FiscalYear, //Use overall budget, hide or remove Fiscal Year
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_PubSecCtrlObjFundVH',
                    element: 'CtrlObjForFund' } }]
      @UI.selectionField: [{ position: 20 }]
      @ObjectModel.text.element: 'CtrlObjNameForFund'
  key Cube.CtrlObjForFund,
      @ObjectModel.text.element: 'CtrlObjNameForFunctionalArea'
  key Cube.CtrlObjForFunctionalArea,
      @ObjectModel.text.element: 'CtrlObjNameForBudgetPeriod'
  key Cube.CtrlObjForBudgetPeriod,
      @ObjectModel.text.element: 'CtrlObjNameForCostCenter'
  key Cube.CtrlObjForCostCenter,
      @ObjectModel.text.element: 'CtrlObjNameForWBSElement'
  key Cube.CtrlObjForWBSElement,
      @ObjectModel.text.element: 'CtrlObjNameForBudgetAccount'
  key Cube.CtrlObjForBudgetAccount,
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_PubSecCtrlObjGrantVH',
                    element: 'ControlObjectForGrantTrimmed' } }]
      @UI.selectionField: [{ position: 10 }]
      @ObjectModel.text.element: 'CtrlObjForGrantName'
  key cast( ltrim(Cube.CtrlObjForGrant,'0') as psm_s4c_fm_avc_ctrl_obj_gr preserving type )                        as CtrlObjForGrant,

      @ObjectModel.text.element: 'CtrlObjForSponsoredClassName'
  key Cube.CtrlObjForSponsoredClass,
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_PubSecCtrlObjSpnsrdProgVH',
                    element: 'CtrlObjForSponsoredProgram' } }]
      @UI.selectionField: [{ position: 30 }]
      @ObjectModel.text.element: 'CtrlObjForSponsoredProgramName'
  key Cube.CtrlObjForSponsoredProgram,
  key Cube.CtrlObjForBdgtValidityNmbr,
      @ObjectModel.text.element: 'BusinessPartnerName'
  key Cube._Grant.GranteeMgmtSponsor,
 //     @ObjectModel.text.element: 'CurrencyName'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
  key Cube.GlobalCurrency,
      @Consumption.hidden: true
      @ObjectModel.text.element: 'PubSecBdgtAcctRevnExpnCodeText'
  key Cube.PubSecBdgtAcctRevnExpnCode,
      @ObjectModel.foreignKey.association: '_PubSecAvailyCtrlProfile'
      @ObjectModel.text.element: 'AvailabilityControlProfileName'
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_PubSecAvailyCtrlProfile',
                      element: 'AvailabilityControlProfile' }
         }]
  key Cube.AvailabilityControlProfile,

      // For Authorizations
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_Fund'
  key Cube.Fund,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_CostCenter'
  key Cube.CostCenter,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
  key Cube.FinancialAccountType,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_BusinessArea'
  key Cube.BusinessArea,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_Segment'
  key Cube.Segment,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_GLAccountInCompanyCode'
  key Cube.GLAccount,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_Supplier'
  key Cube.Supplier,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_Customer'
  key Cube.Customer,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
  key Cube.AccountingDocumentType,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_ProfitCenter'
  key Cube.ProfitCenter,
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_Grant'
  key Cube.GrantID,
      @Consumption.hidden: true
  key Cube.SponsoredClass,
      @Consumption.hidden: true
  key Cube.SponsoredProgram,
      @Consumption.hidden: true
  key Cube.GteeMBudgetValidityNumber,

      // For Additional Authorizations
      @Consumption.hidden: true
      @ObjectModel.foreignKey.association: '_FunctionalArea'
  key Cube.FunctionalArea,

      // Amounts
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast( Cube.BdgtConsumableAmtInGlobalCrcy as psm_amt_expn_cbdgt_grp_curr preserving type )                    as BdgtConsumableExpnAmtInGCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast( Cube.BdgtConsumedAmtInGlobalCrcy as psm_amt_expn_cpost_grp_curr preserving type )                      as BdgtConsumedExpnAmtInGCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast( Cube.BdgtAvailableAmtInGlobalCrcy as psm_amt_expn_avail_grp_curr preserving type )                     as BdgtAvailableExpnAmtInGCrcy,

      // Hierarchy ID's
      @Consumption.hidden: true
      Cube.HierarchyIDForFund,
      @Consumption.hidden: true
      Cube.HierarchyIDForFunctionalArea,
      @Consumption.hidden: true
      Cube.HierarchyIDForBudgetPeriod,
      @Consumption.hidden: true
      Cube.HierarchyIDForCostCenter,
      @Consumption.hidden: true
      Cube.HierarchyIDForWBSElement,
      @Consumption.hidden: true
      Cube.HierarchyIDForBudgetAccount,
      @Consumption.hidden: true
      Cube.GrantHierarchy,
      @Consumption.hidden: true
      Cube.SponsoredClassHierarchy,
      @Consumption.hidden: true
      Cube.SponsoredProgramHierarchy,

      // Texts
      Cube._CtrlObjFund.CtrlObjNameForFund                                                                         as CtrlObjNameForFund,
      Cube._CtrlObjFuncArea.CtrlObjNameForFunctionalArea                                                           as CtrlObjNameForFunctionalArea,
      Cube._CtrlObjBdgtPeriod.CtrlObjNameForBudgetPeriod                                                           as CtrlObjNameForBudgetPeriod,
      Cube._CtrlObjCostCenter.CtrlObjNameForCostCenter                                                             as CtrlObjNameForCostCenter,
      Cube._CtrlObjWBSElement.CtrlObjNameForWBSElement                                                             as CtrlObjNameForWBSElement,
      Cube._CtrlObjBdgtAccount.CtrlObjNameForBudgetAccount                                                         as CtrlObjNameForBudgetAccount,
      Cube._CtrlObjGrant.CtrlObjForGrantName                                                                       as CtrlObjForGrantName,
      Cube._CtrlObjSpnsrdClass.CtrlObjForSponsoredClassName                                                        as CtrlObjForSponsoredClassName,
      Cube._CtrlObjSpnsrdProg.CtrlObjForSponsoredProgramName                                                       as CtrlObjForSponsoredProgramName,
      Cube._Grant._Sponsor.BusinessPartnerName                                                                     as BusinessPartnerName,
      Cube._PubSecBdgtAcctRevnExpnCode._Text[1:Language = $session.system_language].PubSecBdgtAcctRevnExpnCodeText as PubSecBdgtAcctRevnExpnCodeText,
      Cube._PubSecAvailyCtrlProfile._Text[1:Language = $session.system_language].AvailabilityControlProfileName    as AvailabilityControlProfileName,
      Cube._CompanyCode.CompanyCodeName                                                                            as CompanyCodeName,
      Cube._GlobalCurrency._Text[1:Language = $session.system_language].CurrencyName                               as CurrencyName,

      // Associations
      @Consumption.hidden: true
      Cube._CompanyCode,
      @Consumption.hidden: true
      Cube._ControllingArea,
      @Consumption.hidden: true
      Cube._FinancialManagementArea,
      @Consumption.hidden: true
      Cube._Fund,
      @Consumption.hidden: true
      Cube._Grant,
      @Consumption.hidden: true
      Cube._CostCenter,
      @Consumption.hidden: true
      Cube._CurrentCostCenter,
      @Consumption.hidden: true
      Cube._PubSecBdgtAcctRevnExpnCode,
      @Consumption.hidden: true
      Cube._PubSecAvailyCtrlProfile,
      @Consumption.hidden: true
      Cube._FinancialAccountType,
      @Consumption.hidden: true
      Cube._BusinessArea,
      @Consumption.hidden: true
      Cube._Segment,
      @Consumption.hidden: true
      Cube._GLAccountInCompanyCode,
      @Consumption.hidden: true
      Cube._Supplier,
      @Consumption.hidden: true
      Cube._Customer,
      @Consumption.hidden: true
      Cube._AccountingDocumentType,
      @Consumption.hidden: true
      Cube._ProfitCenter,
      @Consumption.hidden: true
      Cube._CurrentProfitCenter,
      @Consumption.hidden: true
      Cube._FunctionalArea

}
// Select only the Expense side in this CDS view!
// The include measures also reflect only the Expense side
where
  Cube.PubSecBdgtAcctRevnExpnCode = 'E' and Cube.GrantID <> 'NRG'
```
