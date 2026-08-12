---
name: C_GRANTSPONSORLOCATIONQRY
description: "Grant Sponsor Location - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTSPONSORLOCATIONQRY')/$value
semantic_en: "Grant Sponsor Location - Query"
semantic_vi: "Grant Sponsor Location - Query — CDS view tiêu dùng dựa trên I_GrantSponsorLocationCube."
keywords:
  - "grant"
  - "sponsor"
  - "location"
  - "query"
  - "actual"
  - "plan"
  - "code"
  - "grantee"
  - "mgmt"
  - "lifecycle"
  - "status"
  - "company"
  - "currency"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM
  - consumption-view
---
# C_GRANTSPONSORLOCATIONQRY

**Grant Sponsor Location - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTSPONSORLOCATIONQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` |  |
| `CountryRegion` |  | |  |  | `CHAR(6)` |  |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTSPONSORLOCATIONQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTSPONSORLOCATIONQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4CGRSPLOCQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Grant Sponsor Location - Query'

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
     modelingPattern: #ANALYTICAL_QUERY,
     supportedCapabilities: [ #ANALYTICAL_QUERY ]
}
@OData.publish: true
define view C_GrantSponsorLocationQry
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
as select from I_GrantSponsorLocationCube  {
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  key GrantID,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  ActualPlanCode,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GranteeMgmtSponsor,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GrantLifecycleStatus,
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  CompanyCodeCurrency,
  @EndUserText.label: 'Amount in company code currency'
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.axis: #FREE
  AmountInCompanyCodeCurrency,
  @EndUserText.label: 'Country & Region'
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CountryRegion,
  @EndUserText.label: 'Country'
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  Country,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GlobalCurrency,
   @EndUserText.label: 'Amount in global currency'
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @DefaultAggregation: #SUM
  AmountInGlobalCurrency
}
```
