---
name: I_GTEEMBDGTCOSTSHRNGCUBE
description: "Grant Budget Cost Sharing - Cube"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBDGTCOSTSHRNGCUBE')/$value
semantic_en: "Grant Budget Cost Sharing - Cube"
semantic_vi: "Grant Budget Cost Sharing - Cube — CDS view giao diện dựa trên I_PubSecGrantBudgetCostSharing."
keywords:
  - "grant"
  - "budget"
  - "cost"
  - "sharing"
  - "cube"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
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
# I_GTEEMBDGTCOSTSHRNGCUBE

**Grant Budget Cost Sharing - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBDGTCOSTSHRNGCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | | `_GrantBdgtCostSharing` | `GrantID` | `CHAR(20)` | Grant |
| `Ledger` | ✓ | | `_GrantBdgtCostSharing` | `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | | `_GrantBdgtCostSharing` | `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | | `_GrantBdgtCostSharing` | `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `SponsoredProgram` | ✓ | | `_GrantBdgtCostSharing` | `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | ✓ | | `_GrantBdgtCostSharing` | `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` | ✓ | | `_Grant` | `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `ActualPlanCode` | ✓ | |  | `cast(_GrantBdgtCostSharing.ActualPlanCode as fis_actual_plan_code)` | `CHAR(1)` | Actual Plan Code |
| `PubSecBudgetCnsmpnType` | ✓ | |  |  | `CHAR(2)` | Budget Consumption Type |
| `BudgetDocWorkFlowStatus` | ✓ | |  |  | `CHAR(1)` |  |
| `GrantType` |  | | `_Grant` | `GrantType` | `CHAR(2)` | Grant Type |
| `GrantLifecycleStatus` |  | | `_Grant` | `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `GteeMCostSharingRateInPercent` |  | |  | `cast(0 as abap.dec( 6, 3 ))` | `DEC(6)` |  |
| `GlobalCurrency` |  | | `_GrantBdgtCostSharing` | `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `CostShrngContrbnAmtInGlobCrcy` |  | | `_GrantBdgtCostSharing` | `CostShrngContrbnAmtInGlobCrcy` | `CURR(23)` |  |
| `SpnsrContrbnAmtInGlobCrcy` |  | | `_GrantBdgtCostSharing` | `SpnsrContrbnAmtInGlobCrcy` | `CURR(23)` |  |
| `ExcessCostShrngContrbnAmt` |  | | `_GrantBdgtCostSharing` | `ExcessCostShrngContrbnAmt` | `CURR(23)` | Excess Cost Sharing Contribution Amount in Global Currency |
| `GrantIsNotRelevantGrant` |  | | `_Grant` | `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `_Grant` | | ✓ | | | | |
| `_GrantStatus` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Grant` | `I_Grant` | [1..1] |
| `_GrantStatus` | `I_GrantStatus` | [0..1] |
| `_SponsoredClass` | `I_SponsoredClassCore` | [0..1] |
| `_SponsoredProgram` | `I_SponsoredProgramCore` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBDGTCOSTSHRNGCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBDGTCOSTSHRNGCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGRCSTSHRCBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Grant Budget Cost Sharing - Cube'


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

define view I_GteeMBdgtCostShrngCube  as select from  I_PubSecGrantBudgetCostSharing as _GrantBdgtCostSharing
  association [1..1] to I_Grant                        as _Grant                on  $projection.GrantID = _Grant.GrantID
  association [0..1] to I_GrantStatus                  as _GrantStatus                on  $projection.grantlifecyclestatus = _GrantStatus.SystemStatus
  association [0..1] to I_SponsoredClassCore           as _SponsoredClass             on  $projection.SponsoredClass  = _SponsoredClass.SponsoredClass
  association [0..1] to I_SponsoredProgramCore         as _SponsoredProgram           on  $projection.SponsoredProgram = _SponsoredProgram.SponsoredProgram
{
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
key _GrantBdgtCostSharing.GrantID,
key _GrantBdgtCostSharing.Ledger,
key _GrantBdgtCostSharing.CompanyCode,
key _GrantBdgtCostSharing.FiscalYear,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredProgram'
key _GrantBdgtCostSharing.SponsoredProgram,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredClass'
key _GrantBdgtCostSharing.SponsoredClass,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Sponsor'
key _Grant.GranteeMgmtSponsor,
key cast(_GrantBdgtCostSharing.ActualPlanCode as fis_actual_plan_code) as ActualPlanCode,
  key PubSecBudgetCnsmpnType,
  key BudgetDocWorkFlowStatus,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantType'
_Grant.GrantType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantStatus'
_Grant.GrantLifecycleStatus,
cast(0 as abap.dec( 6, 3 )) as GteeMCostSharingRateInPercent,
_GrantBdgtCostSharing.GlobalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
_GrantBdgtCostSharing.CostShrngContrbnAmtInGlobCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
_GrantBdgtCostSharing.SpnsrContrbnAmtInGlobCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
_GrantBdgtCostSharing.ExcessCostShrngContrbnAmt,
_Grant.GrantIsNotRelevantGrant,
_Grant,
_SponsoredClass,
_SponsoredProgram,
_GrantStatus,
_Grant._Sponsor,
_Grant._GrantType


} where _Grant.GrantIsNotRelevantGrant <> 'X'
```
