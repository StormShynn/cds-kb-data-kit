---
name: I_PUBSECGTEEMBDGTACTLCUBE
description: "Grant Budget Actual Items - Cube"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMBDGTACTLCUBE')/$value
semantic_en: "Grant Budget Actual Items - Cube"
semantic_vi: "Grant Budget Actual Items - Cube — CDS view giao diện dựa trên I_Grant."
keywords:
  - "grant"
  - "budget"
  - "actual"
  - "items"
  - "cube"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
---
# I_PUBSECGTEEMBDGTACTLCUBE

**Grant Budget Actual Items - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMBDGTACTLCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` | ✓ | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `GrantID` | ✓ | | `_iGrant` | `GrantID` | `CHAR(20)` | Grant |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `GranteeMgmtSponsor` |  | | `_iGrant` | `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` |  | | `_iGrant` | `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `GrantStatus` |  | | `_iGrant` | `GrantStatus` | `CHAR(5)` | Grant Status |
| `GrantType` |  | | `_iGrant` | `GrantType` | `CHAR(2)` | Grant Type |
| `BusPartEmplrIndstryCode` |  | | `_iGrant._Sponsor._BusinessPartnerIndustry` | `IndustrySector` | `CHAR(10)` | Industry |
| `ValidityEndDate` |  | | `_iGrant` | `ValidityEndDate` | `DATS(8)` | Valid-to Date |
| `ValidityStartDate` |  | | `_iGrant` | `ValidityStartDate` | `DATS(8)` | Valid-from Date |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `Country` |  | | `_iGrant._Sponsor._DefaultAddress._Address` | `Country` | `CHAR(3)` | Country/Region Key |
| `CityName` |  | | `_iGrant._Sponsor._DefaultAddress._Address` | `CityName` | `CHAR(40)` | City |
| `Region` |  | | `_iGrant._Sponsor._DefaultAddress._Address` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `PubSecBdgtAcctRevnExpnCode` |  | | `_PubSecBudgetAccount` | `PubSecBdgtAcctRevnExpnCode` | `CHAR(1)` | Expense or Revenue on Budget Account |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `GrantIsNotRelevantGrant` |  | | `_iGrant` | `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `_Status` |  | | `_iGrant` | `_GrantStatus` |  |  |
| `_PubSecBudgetCnsmpnTypeGroup` |  | |  |  |  |  |
| `GrantAuthznGrp` |  | | `_iGrant` | `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLfcycStatusForAuthzn` |  | | `_iGrant` | `GrantLfcycStatusForAuthzn` | `CHAR(5)` | GM Lifecycle Status for Auth Grp |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `_PubSecBudgetAccount` | | ✓ | | | | |
| `_PubSecBdgtAcctRevnExpnCode` | | ✓ | | | | |
| `_BPEmploymentIndustry` | | ✓ | | | | |
| `_GrantMaster` | | ✓ | | | | |
| `_GrantStatus` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PubSecBudgetAccount` | `I_PubSecBudgetAccount` | [0..1] |
| `_PubSecBdgtAcctRevnExpnCode` | `I_PubSecBdgtAcctRevnExpnCode` | [0..1] |
| `_BPEmploymentIndustry` | `I_BPEmploymentIndustry` | [1..1] |
| `_GrantMaster` | `I_Grant` | [1..1] |
| `_GrantStatus` | `I_GrantStatus` | [0..1] |
| `_SponsoredClass` | `I_SponsoredClassCore` | [0..1] |
| `_SponsoredProgram` | `I_SponsoredProgramCore` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMBDGTACTLCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMBDGTACTLCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMTGTACTCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Grant Budget Actual Items - Cube'


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
define view I_PubSecGteeMBdgtActlCube
  as select from            I_Grant                   as _iGrant
    left outer to many join I_PubSecBdgtActlItemBasic as AcItem on _iGrant.GrantID = AcItem.GrantID

  association [0..1] to I_PubSecBudgetAccount        as _PubSecBudgetAccount        on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccount.PubSecBudgetAccountCoCode
                                                                                    and $projection.PubSecBudgetAccount       = _PubSecBudgetAccount.PubSecBudgetAccount
  association [0..1] to I_PubSecBdgtAcctRevnExpnCode as _PubSecBdgtAcctRevnExpnCode on  $projection.PubSecBdgtAcctRevnExpnCode = _PubSecBdgtAcctRevnExpnCode.PubSecBdgtAcctRevnExpnCode
  association [1..1] to I_BPEmploymentIndustry       as _BPEmploymentIndustry       on  $projection.BusPartEmplrIndstryCode = _BPEmploymentIndustry.BusPartEmplrIndstryCode
  association [1..1] to I_Grant                      as _GrantMaster                on  $projection.GrantID = _GrantMaster.GrantID
  association [0..1] to I_GrantStatus                as _GrantStatus                on  $projection.GrantLifecycleStatus = _GrantStatus.SystemStatus
  association [0..1] to I_SponsoredClassCore         as _SponsoredClass             on  $projection.SponsoredClass = _SponsoredClass.SponsoredClass
  association [0..1] to I_SponsoredProgramCore       as _SponsoredProgram           on  $projection.SponsoredProgram = _SponsoredProgram.SponsoredProgram
  //  association [0..1] to I_PubSecCtryRegGeoPoint as _CountryRegionGeoPoint                 on  $projection.CountryRegion  = _CountryRegionGeoPoint.CountryRegion

{
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key AcItem.SourceLedger,
      @ObjectModel.foreignKey.association: '_Ledger'
  key AcItem.Ledger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key AcItem.CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key AcItem.FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AcItem.AccountingDocument,
  key AcItem.FinancialPlanningReqTransSqnc,
  key AcItem.FinancialPlanningDataPacket,
  key AcItem.ActualPlanJournalEntryItem,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantMaster'
  key _iGrant.GrantID,
      AcItem.ActualPlanCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Fund'
      AcItem.Fund,
      AcItem._Fund._FundType.FundType,
      AcItem._Fund._FundType.GranteeMgmtFundType                as GranteeMgmtFundType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Sponsor'
      _iGrant.GranteeMgmtSponsor,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantStatus'
      _iGrant.GrantLifecycleStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Status'
      _iGrant.GrantStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantType'
      _iGrant.GrantType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BPEmploymentIndustry'
      _iGrant._Sponsor._BusinessPartnerIndustry.IndustrySector  as BusPartEmplrIndstryCode,
      _iGrant.ValidityEndDate,
      _iGrant.ValidityStartDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredClass'
      AcItem.SponsoredClass,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredProgram'
      AcItem.SponsoredProgram,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode:true
      AcItem.CompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AcItem.AmountInCompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      AcItem.AmountInGlobalCurrency,
      AcItem.PostingDate,
      AcItem.PubSecBudgetCnsmpnDate,

      _iGrant._Sponsor._DefaultAddress._Address.Country,
      _iGrant._Sponsor._DefaultAddress._Address.CityName,
      _iGrant._Sponsor._DefaultAddress._Address.Region,
      //      @ObjectModel.foreignKey.association: '_CountryRegionGeoPoint'
      //      concat( _iGrant._Sponsor._CurrentDefaultAddress._Address.Country,_iGrant._Sponsor._CurrentDefaultAddress._Address.Region ) as CountryRegion,

      // Fund Overview Changes
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBdgtAcctRevnExpnCode'
      _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode           as PubSecBdgtAcctRevnExpnCode,
      AcItem.LedgerGLLineItem,
      AcItem.FinancialPlanningEntryItem,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ControllingArea'
      AcItem.ControllingArea,
      AcItem.GLAccount,
      AcItem.BusinessArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      AcItem.ProfitCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      AcItem.FunctionalArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CostCenter'
      AcItem.CostCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      AcItem.WBSElementExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Segment'
      AcItem.Segment,
      AcItem.OrderID,
      AcItem.AccountingDocumentType,
      AcItem.FinancialAccountType,
      AcItem.FiscalPeriod,
      AcItem.PlanningCategory,
      AcItem.ValuationArea,
      AcItem.Plant,
      AcItem.Customer,
      AcItem.Supplier,
      AcItem.SalesDocument,
      AcItem.ServiceDocument,
      AcItem.ServiceDocumentType,
      AcItem.SalesOrganization,
      AcItem.DistributionChannel,
      AcItem.OrganizationDivision,
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      AcItem.FinancialManagementArea,
      AcItem.PubSecBudgetAccount,
      AcItem.PubSecBudgetAccountCoCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnType'
      AcItem.PubSecBudgetCnsmpnType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnTypeGroup'
      AcItem._PubSecBdgtCnsmpnType.PubSecBudgetCnsmpnTypeGroup  as PubSecBudgetCnsmpnTypeGroup,
      AcItem.PubSecBudgetIsRelevant,
      AcItem.GlobalCurrency,
      AcItem.BudgetProcess,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BudgetingType'
      AcItem.BudgetingType,
      _iGrant.GrantIsNotRelevantGrant,
      AcItem.FiscalYearVariant,


      /* Associations */
      AcItem._FinancialManagementArea,
      AcItem._ProfitCenter,
      AcItem._FunctionalArea,
      AcItem._BudgetingType,
      AcItem._Segment,
      AcItem._GLAccountInCompanyCode,
      AcItem._CompanyCode,
      AcItem._CompanyCodeCurrency,
      AcItem._GlobalCurrency,
      AcItem._FiscalYear,
      AcItem._JournalEntry,
      AcItem._Ledger,
      AcItem._SourceLedger,
      AcItem._Fund,
      AcItem._CostCenter,
      AcItem._WBSElementExternalID,
      AcItem._ControllingArea,
      _iGrant._Sponsor,
      _iGrant._Text,
      _iGrant._GrantLifecycleStatus,
      _iGrant._GrantStatus as _Status,
      _iGrant._GrantType,
      _GrantMaster,
      _GrantStatus,
      _BPEmploymentIndustry,
      _SponsoredProgram,
      _SponsoredClass,
      _PubSecBudgetAccount,
      _PubSecBdgtAcctRevnExpnCode,
      AcItem._PubSecBdgtCnsmpnType,
      AcItem._PubSecBdgtCnsmpnType._PubSecBudgetCnsmpnTypeGroup as _PubSecBudgetCnsmpnTypeGroup,
      //       _CountryRegionGeoPoint,


      /* Fields for Authorization */
      @Consumption.hidden: true
      _iGrant.GrantAuthznGrp,
      @Consumption.hidden: true
      _iGrant.GrantLfcycStatusForAuthzn,
      @Consumption.hidden: true
      AcItem.AssetClass,


      /* Associations for authorization */
      @Consumption.hidden: true
      AcItem._CurrentCostCenter,
      @Consumption.hidden: true
      AcItem._AccountingDocumentType,
      @Consumption.hidden: true
      AcItem._Customer,
      @Consumption.hidden: true
      AcItem._Supplier,
      @Consumption.hidden: true
      AcItem._SalesDocument,
      @Consumption.hidden: true
      AcItem._ServiceDocument,
      @Consumption.hidden: true
      AcItem._Order,
      @Consumption.hidden: true
      AcItem._CurrentProfitCenter



}
where
  (
    (
           AcItem.ActualPlanCode                             =  'P'
    )
    or // Budget data
    (
           AcItem.ActualPlanCode                             =  'A'
      //      and // Actual data only budget relevant
      //      (
      //           AcItem.PubSecBudgetIsRelevant                     =  'X'
      //      )
    )
  )
  and
  // Avc Profile not key field - hence only include ONE scenario per record
  (
           //    (
           //      (
           //           AcItem._Grant.GrantIsNotRelevantGrant      =  'X'
           //        or AcItem.GrantID                             =  ''
           //      )
           //             and ( _CtrlObjProfile.BudgetScenario = '' or _CtrlObjProfile.BudgetScenario is null )
           //    )
           //    or
           (
             AcItem._Grant.GrantIsNotRelevantGrant           <> 'X'
             and(
                  AcItem._Fund._FundType.GranteeMgmtFundType =  'I'
               or AcItem._Fund._FundType.GranteeMgmtFundType =  ''
               or AcItem._Fund._FundType.GranteeMgmtFundType is null
             )
             //        and _CtrlObjProfile.BudgetScenario = 'GMI'
           )
    or(
           AcItem._Grant.GrantIsNotRelevantGrant             <> 'X'
      and  AcItem._Fund._FundType.GranteeMgmtFundType        =  'E'
      //      and _CtrlObjProfile.BudgetScenario = 'GME'
    )
  )
```
