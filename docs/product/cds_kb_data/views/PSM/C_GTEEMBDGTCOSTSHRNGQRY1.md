---
name: C_GTEEMBDGTCOSTSHRNGQRY1
description: "Grant Budget Cost Sharing Item - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBDGTCOSTSHRNGQRY1')/$value
semantic_en: "Grant Budget Cost Sharing Item - Query"
semantic_vi: "Grant Budget Cost Sharing Item - Query — CDS view tiêu dùng dựa trên I_GteeMBdgtCostShrngCube."
keywords:
  - "grant"
  - "budget"
  - "cost"
  - "sharing"
  - "item"
  - "query"
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
  - component:PSM
  - consumption-view
---
# C_GTEEMBDGTCOSTSHRNGQRY1

**Grant Budget Cost Sharing Item - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBDGTCOSTSHRNGQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `SponsoredProgram` | ✓ | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | ✓ | |  |  | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` | ✓ | |  |  | `CHAR(10)` | Grant Sponsor |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CostShrngContrbnAmtInGlobCrcy` |  | |  |  | `CURR(23)` |  |
| `SpnsrContrbnAmtInGlobCrcy` |  | |  |  | `CURR(23)` |  |
| `ExcessCostShrngContrbnAmt` |  | |  |  | `CURR(23)` | Excess Cost Sharing Contribution Amount in Global Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBDGTCOSTSHRNGQRY1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBDGTCOSTSHRNGQRY1')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4CGRCSQ1'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Grant Budget Cost Sharing Item - Query'

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
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
@OData.publish: true 

define view C_GteeMBdgtCostShrngQry1
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language     : sylangu,
    @Consumption.hidden: true
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE 
    P_KeyDate      : vdm_v_key_date,
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser : syuname
  as select from I_GteeMBdgtCostShrngCube as Cube
  {
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  key GrantID,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  key Ledger,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  key CompanyCode,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  key FiscalYear,
    @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  key SponsoredProgram,
      @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  key SponsoredClass,
      @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  key GranteeMgmtSponsor,
      @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #TEXT
  ActualPlanCode,
      @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GrantType,

      @Semantics.currencyCode: true
      @AnalyticsDetails.query.axis: #FREE
      @Consumption.hidden: true
  GlobalCurrency,
  
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
  CostShrngContrbnAmtInGlobCrcy,
  
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
  SpnsrContrbnAmtInGlobCrcy,
  
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #SUM
  ExcessCostShrngContrbnAmt
  }
```
