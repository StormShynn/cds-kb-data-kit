---
name: C_PUBSECGRANTCOSTSHRQRY
description: "Grants Management Cost Sharing Query"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCOSTSHRQRY')/$value
semantic_en: "Grants Management Cost Sharing Query"
semantic_vi: "Grants Management Cost Sharing Query — CDS view tiêu dùng dựa trên I_PubSecGrantCostSharing."
keywords:
  - "grants"
  - "management"
  - "cost"
  - "sharing"
  - "query"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "grant"
  - "sponsored"
  - "program"
  - "class"
tags:
  - PSM
  - component:PSM-GM-GTE-IS
  - consumption-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
---
# C_PUBSECGRANTCOSTSHRQRY

**Grants Management Cost Sharing Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCOSTSHRQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
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
| `ExcessCostShrngContrbnAmt` |  | |  |  | `CURR(23)` | Excess Cost Sharing Contribution Amount in Global Currency |
| `CostShrngSpnsrContrbnRate` |  | |  | `cast( 1 as gm_cost_share_percentage )` | `DEC(6)` | Cost Sharing Percentage |
| `CostShrngTotGrantContrbnRate` |  | |  | `cast( 1 as gm_cost_share_percentage )` | `DEC(6)` | Cost Sharing Percentage |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `GranteeMgmtCostSharingRule` |  | |  |  | `NUMC(4)` | Rule for Determining Cost Sharing Requirements |
| `_CompanyCode` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_PubSecBdgtCnsmpnType` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCOSTSHRQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCOSTSHRQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSGRCOSTSHR'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@OData.publish: true
@VDM.viewType: #CONSUMPTION
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
     query: true,
     internalName: #LOCAL,
     settings: {
         maxProcessingEffort: #HIGH
     }
}
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
     supportedCapabilities: [ #ANALYTICAL_QUERY ]
}

@EndUserText.label: 'Grants Management Cost Sharing Query'
define view C_PubSecGrantCostShrQry
  as select from I_PubSecGrantCostSharing as Main
{

      @AnalyticsDetails.query.axis: #FREE
  key Main.CompanyCode,
      @AnalyticsDetails.query.axis: #FREE
  key Main.FiscalYear,
      @AnalyticsDetails.query.axis: #FREE
  key Main.GrantID,
      @AnalyticsDetails.query.axis: #FREE
  key Main.SponsoredProgram,
      @AnalyticsDetails.query.axis: #FREE
  key Main.SponsoredClass,
      @AnalyticsDetails.query.axis: #FREE
  key Main.GranteeMgmtSponsor,
      @AnalyticsDetails.query.axis: #FREE
  key Main.PubSecBudgetCnsmpnType,



      /* Amounts and Currencies */
      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      @Consumption.hidden: true
      Main.GlobalCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Cost Share Contribution Amount'
      Main.CostShrngContrbnAmtInGlobCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Sponsor Contribution Amount'
      Main.SpnsrContrbnAmtInGlobCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Calculated Cost Share Contribution Amount'
      Main.CalcdCostShrngContrbnAmt,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Excess Cost Share Contribution Amount'
      Main.ExcessCostShrngContrbnAmt,


      @EndUserText.label: 'Cost Share % Sponsor Contribution'
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula : ' NDIV0( NODIM( $projection.CostShrngContrbnAmtInGlobCrcy ) / NODIM( $projection.SpnsrContrbnAmtInGlobCrcy ) ) * 100'
      cast( 1 as gm_cost_share_percentage ) as CostShrngSpnsrContrbnRate, // CS base sponsored contribution

      @EndUserText.label: 'Cost Share % Total Grant Contribution'
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula : ' NDIV0( NODIM( $projection.CostShrngContrbnAmtInGlobCrcy ) / NODIM( $projection.SpnsrContrbnAmtInGlobCrcy + $projection.CostShrngContrbnAmtInGlobCrcy ) ) * 100'
      cast( 1 as gm_cost_share_percentage ) as CostShrngTotGrantContrbnRate, // CS base total grant cost (project cost)


      //      @AnalyticsDetails.query.axis: #FREE
      //      Main.PubSecBudgetCnsmpnType,
      @AnalyticsDetails.query.axis: #FREE
      Main.PubSecBudgetIsRelevant,
      @AnalyticsDetails.query.axis: #FREE
      Main.GteeMBudgetValidityNumber,
      @AnalyticsDetails.query.axis: #FREE
      Main.GranteeMgmtCostSharingRule,


      Main._SponsoredClass._Text[1:Language = $session.system_language].SponsoredClassName,
      Main._SponsoredProgram._Text[1:Language = $session.system_language].SponsoredProgramName,
      Main._Grant._Text[1:Language = $session.system_language].GrantName,


      /* Associations */

      _CompanyCode,
      _GlobalCurrency,
      _Grant,
      _PubSecBdgtCnsmpnType,
      _SponsoredClass,
      _SponsoredProgram


}
```
