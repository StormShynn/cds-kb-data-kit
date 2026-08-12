---
name: C_GTEEMBILLGELMNTITMQRY1
description: "Grantee Mgmt Billing Element Item - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBILLGELMNTITMQRY1')/$value
semantic_en: "Grantee Mgmt Billing Element Item - Query"
semantic_vi: "Grantee Mgmt Billing Element Item - Query — CDS view tiêu dùng dựa trên I_GteeMBillgElmntItmCube."
keywords:
  - "grantee"
  - "mgmt"
  - "billing"
  - "element"
  - "item"
  - "query"
  - "gtee"
  - "billg"
  - "elmnt"
  - "entr"
  - "grant"
  - "sponsored"
  - "program"
  - "document"
  - "currency"
tags:
  - PSM
  - billing
  - bo:billingdocument
  - component:PSM
  - consumption-view
---
# C_GTEEMBILLGELMNTITMQRY1

**Grantee Mgmt Billing Element Item - Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBILLGELMNTITMQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GteeMBillgElmntEntrItmUUID` | ✓ | |  |  | `RAW(16)` | Grantee Mgmt: Billing Element Entry UUID |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Billing Document Currency |
| `OriginalRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Original Amount in Document Currency |
| `ToBePostponedAmtInDocCrcy` |  | |  |  | `CURR(23)` | Amount to Be Postponed in Document Currency |
| `ToBeWrittenOffAmtInDocCrcy` |  | |  |  | `CURR(23)` | Amount to Be Written Off in Document Currency |
| `BillgInProcAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billing in Process Amount in Document Currency |
| `BilledRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Document Currency |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `DocumentBillingStatus` |  | |  |  | `CHAR(1)` | GM Billing Elements: Grant Billing Doc. Request Status |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | GM Billing: Global Currency |
| `OriginalRevenueAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Original Amount in Global Currency |
| `ToBePostponedAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount to Be Postponed in Global Currency |
| `ToBeWrittenOffAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount to Be Written Off in Global Currency |
| `BillgInProcAmtInGlobCurrency` |  | |  |  | `CURR(23)` | Billing in Process Amount in Global Currency |
| `BilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Global Currency |
| `_Grant` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBILLGELMNTITMQRY1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBILLGELMNTITMQRY1')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CGMBLGELMITMQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Grantee Mgmt Billing Element Item - Query'
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
         sizeCategory: #L
     },
     supportedCapabilities: [ #ANALYTICAL_QUERY ]
}
@OData.publish: true
define view C_GteeMBillgElmntItmQry1
  as select from I_GteeMBillgElmntItmCube
{
      @AnalyticsDetails.query.hidden : true
      @AnalyticsDetails.query.axis: #FREE
  key GteeMBillgElmntEntrItmUUID,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GrantID,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      SponsoredProgram,
      @Semantics.currencyCode:true
      DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      OriginalRevenueAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      ToBePostponedAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      ToBeWrittenOffAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      BillgInProcAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @AnalyticsDetails.query.hidden : true
      @DefaultAggregation: #SUM
      BilledRevenueAmtInDocCrcy,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GranteeMgmtSponsor,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      DocumentBillingStatus,
      @Semantics.currencyCode:true
      GlobalCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      OriginalRevenueAmtInGlobalCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      ToBePostponedAmtInGlobalCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      ToBeWrittenOffAmtInGlobalCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      BillgInProcAmtInGlobCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      BilledRevenueAmtInGlobCrcy,
      /* Associations */
      _Grant
}
```
