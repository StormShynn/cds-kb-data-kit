---
name: I_PUBSECBDGTCOSTSHARINGCUBE
description: "Grants Cost Sharing Budget Items - Cube"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTCOSTSHARINGCUBE')/$value
semantic_en: "Grants Cost Sharing Budget Items - Cube"
semantic_vi: "Grants Cost Sharing Budget Items - Cube — CDS view giao diện dựa trên P_PubSecBdgtCostSharingCalc."
keywords:
  - "grants"
  - "cost"
  - "sharing"
  - "budget"
  - "items"
  - "cube"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "grant"
  - "sponsored"
  - "program"
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
---
# I_PUBSECBDGTCOSTSHARINGCUBE

**Grants Cost Sharing Budget Items - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTCOSTSHARINGCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `SponsoredProgram` | ✓ | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | ✓ | |  |  | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` | ✓ | |  |  | `CHAR(10)` | Grant Sponsor |
| `BudgetDocWorkFlowStatus` | ✓ | |  |  | `CHAR(1)` | Workflow Status for a Budget Document |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CostShrngContrbnAmtInGlobCrcy` |  | |  |  | `CURR(23)` |  |
| `SpnsrContrbnAmtInGlobCrcy` |  | |  |  | `CURR(23)` |  |
| `CalcdCostShrngContrbnAmt` |  | |  |  | `CURR(23)` | Calculated Cost Sharing Contribution Amt in Global Currency |
| `ExcessCostShrngContrbnAmt` |  | |  | `cast( Main.CostShrngContrbnAmtInGlobCrcy - Main.CalcdCostShrngContrbnAmt as gm_excess_costshare_amount )` | `CURR(23)` | Excess Cost Sharing Contribution Amount in Global Currency |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `GranteeMgmtCostSharingRule` |  | |  |  | `NUMC(4)` | Rule for Determining Cost Sharing Requirements |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |
| `_Sponsor` | | ✓ | | | | |
| `_BudgetDocWorkFlowStatus` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTCOSTSHARINGCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTCOSTSHARINGCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBDGTCSCUBE'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blockingIndicator: ['#REQUIRED']
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED

@Metadata.allowExtensions: true
@VDM.viewType: #COMPOSITE
//@VDM.lifecycle.contract.type: #SAP_INTERNAL_API
@Analytics: { dataCategory: #CUBE, dataExtraction.enabled: true }
@Analytics.internalName: #LOCAL
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #X,
         sizeCategory: #XL
     }
}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'GranteeManagementCostSharing'
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Grants Cost Sharing Budget Items - Cube'
define view I_PubSecBdgtCostSharingCube
  as select from P_PubSecBdgtCostSharingCalc as Main
{

      @ObjectModel.foreignKey.association: '_Ledger'
  key Main.Ledger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Main.CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key Main.FiscalYear,
      @ObjectModel.foreignKey.association: '_Grant'
  key Main.GrantID,
      @ObjectModel.foreignKey.association: '_SponsoredProgram'
  key Main.SponsoredProgram,
      @ObjectModel.foreignKey.association: '_SponsoredClass'
  key Main.SponsoredClass,
      @ObjectModel.foreignKey.association: '_Sponsor'
  key Main.GranteeMgmtSponsor,
      @ObjectModel.foreignKey.association: '_BudgetDocWorkFlowStatus'
  key Main.BudgetDocWorkFlowStatus,
  


      /* Amounts and Currencies */
 //     @ObjectModel.foreignKey.association: '_GlobalCurrency'
      Main.GlobalCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      Main.CostShrngContrbnAmtInGlobCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      Main.SpnsrContrbnAmtInGlobCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      Main.CalcdCostShrngContrbnAmt,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast( Main.CostShrngContrbnAmtInGlobCrcy - Main.CalcdCostShrngContrbnAmt as gm_excess_costshare_amount ) as ExcessCostShrngContrbnAmt,


      Main.GteeMBudgetValidityNumber,
      Main.GranteeMgmtCostSharingRule,
      Main.BudgetingType,


      /* Associations */

      _CompanyCode,
      _FiscalYear,
      _GlobalCurrency,
      _Grant,
      _Ledger,
      _SponsoredClass,
      _SponsoredProgram,
      _Sponsor,
      _BudgetDocWorkFlowStatus
}
```
