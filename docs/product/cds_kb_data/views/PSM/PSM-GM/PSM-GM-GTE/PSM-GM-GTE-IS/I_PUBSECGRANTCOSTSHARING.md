---
name: I_PUBSECGRANTCOSTSHARING
description: "Grants Cost Sharing Basic"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTCOSTSHARING')/$value
semantic_en: "Grants Cost Sharing Basic"
semantic_vi: "Grants Cost Sharing Basic — CDS view giao diện dựa trên P_PubSecGrantCostSharingCalc."
keywords:
  - "grants"
  - "cost"
  - "sharing"
  - "basic"
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
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
---
# I_PUBSECGRANTCOSTSHARING

**Grants Cost Sharing Basic**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTCOSTSHARING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `SponsoredProgram` | ✓ | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | ✓ | |  |  | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` | ✓ | |  |  | `CHAR(10)` | Grant Sponsor |
| `PubSecBudgetCnsmpnType` | ✓ | |  |  | `CHAR(2)` | Budget Consumption Type |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CostShrngContrbnAmtInGlobCrcy` |  | |  |  | `CURR(23)` |  |
| `SpnsrContrbnAmtInGlobCrcy` |  | |  |  | `CURR(23)` |  |
| `CalcdCostShrngContrbnAmt` |  | |  |  | `CURR(23)` | Calculated Cost Sharing Contribution Amt in Global Currency |
| `ExcessCostShrngContrbnAmt` |  | |  | `cast( Main.CostShrngContrbnAmtInGlobCrcy - Main.CalcdCostShrngContrbnAmt as gm_excess_costshare_amount )` | `CURR(23)` | Excess Cost Sharing Contribution Amount in Global Currency |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `GranteeMgmtCostSharingRule` |  | |  |  | `NUMC(4)` | Rule for Determining Cost Sharing Requirements |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_PubSecBdgtCnsmpnType` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |
| `_Sponsor` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTCOSTSHARING')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTCOSTSHARING')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGRCOSTSHARE'
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

@EndUserText.label: 'Grants Cost Sharing Basic'
define view I_PubSecGrantCostSharing
  as select from P_PubSecGrantCostSharingCalc as Main
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
      @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnType'
  key Main.PubSecBudgetCnsmpnType,


      /* Amounts and Currencies */
      //      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      Main.GlobalCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      Main.CostShrngContrbnAmtInGlobCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      Main.SpnsrContrbnAmtInGlobCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      Main.CalcdCostShrngContrbnAmt,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast( Main.CostShrngContrbnAmtInGlobCrcy - Main.CalcdCostShrngContrbnAmt as gm_excess_costshare_amount ) as ExcessCostShrngContrbnAmt,


      //     Main.PubSecBudgetCnsmpnType,
      Main.PubSecBudgetIsRelevant,
      Main.GteeMBudgetValidityNumber,
      Main.GranteeMgmtCostSharingRule,



      /* Associations */

      _CompanyCode,
      _FiscalYear,
      _GlobalCurrency,
      _Grant,
      _Ledger,
      _PubSecBdgtCnsmpnType,
      _SponsoredClass,
      _SponsoredProgram,
      _Sponsor
}
```
