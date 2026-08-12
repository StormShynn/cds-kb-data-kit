---
name: C_PUBSECGTEEMGRANTQRY1
description: "Grant - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMGRANTQRY1')/$value
semantic_en: "Grant - Query"
semantic_vi: "Grant - Query — CDS view tiêu dùng dựa trên I_PubSecGteeMGrantCube."
keywords:
  - "grant"
  - "query"
  - "navigation"
  - "identifier"
  - "validity"
  - "start"
  - "date"
  - "grantee"
  - "mgmt"
  - "sponsor"
tags:
  - PSM
  - component:PSM
  - consumption-view
---
# C_PUBSECGTEEMGRANTQRY1

**Grant - Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMGRANTQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `NavigationGrantIdentifier` |  | |  |  | `CHAR(20)` | Grant |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-from Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to Date |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GrantStatus` |  | |  |  | `CHAR(5)` | Grant Status |
| `BusPartEmplrIndstryCode` |  | |  |  | `CHAR(10)` | Industry |
| `PendingDaysToValdtyEnd` |  | |  |  | `INT4(10)` |  |
| `GranteeMgmtWorkflowStatus` |  | |  |  | `CHAR(1)` | Workflow status |
| `GrantBlockedByWorkflow` |  | |  |  | `CHAR(1)` | GM Blocks grant editing pending approval |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMGRANTQRY1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMGRANTQRY1')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4CGRAQ1'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Grant - Query'

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

define view C_PubSecGteeMGrantQry1
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
  as select from I_PubSecGteeMGrantCube as Cube
{
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
  key GrantID,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      NavigationGrantIdentifier,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      ValidityStartDate,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      ValidityEndDate,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GranteeMgmtSponsor,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GrantType,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GrantLifecycleStatus,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GrantStatus,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusPartEmplrIndstryCode,
      @EndUserText.label: 'Days to Close'
      PendingDaysToValdtyEnd,
      GranteeMgmtWorkflowStatus,
      GrantBlockedByWorkflow,
      @EndUserText.label: 'Master Data Records'
      NumberOfGteeMMasterDataRecords,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      CompanyCode
//      ,
//      @AnalyticsDetails.query.axis: #FREE
//      @AnalyticsDetails.query.totals: #SHOW
//      @AnalyticsDetails.query.display: #KEY
//      CountryRegion 
}
```
