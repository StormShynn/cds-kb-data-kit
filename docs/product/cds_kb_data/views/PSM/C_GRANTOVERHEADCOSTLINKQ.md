---
name: C_GRANTOVERHEADCOSTLINKQ
description: "Grant Overhead Cost Link - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTOVERHEADCOSTLINKQ')/$value
semantic_en: "Grant Overhead Cost Link - Query"
semantic_vi: "Grant Overhead Cost Link - Query — CDS view tiêu dùng dựa trên I_GrantOverHeadCostLinkCube."
keywords:
  - "grant"
  - "overhead"
  - "cost"
  - "link"
  - "query"
  - "sponsored"
  - "program"
  - "class"
  - "grantee"
  - "mgmt"
  - "sponsor"
  - "number"
  - "gtee"
  - "master"
  - "data"
tags:
  - PSM
  - bo:costcenter
  - component:PSM
  - consumption-view
---
# C_GRANTOVERHEADCOSTLINKQ

**Grant Overhead Cost Link - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTOVERHEADCOSTLINKQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `SponsoredProgram` | ✓ | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | ✓ | |  |  | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `AvgGteeMIndirectCostRateInPct` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTOVERHEADCOSTLINKQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTOVERHEADCOSTLINKQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4COVRHQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Grant Overhead Cost Link - Query'

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

define view C_GrantOverHeadCostLinkQ
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
  as select from I_GrantOverHeadCostLinkCube as Cube
{
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
  key GrantID,
        @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
  key SponsoredProgram,
        @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
  key SponsoredClass,
          @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
  GranteeMgmtSponsor,
    @EndUserText.label: 'Master Data Records'
    NumberOfGteeMMasterDataRecords,
      @AnalyticsDetails.query.formula: 'AvgGteeMIndirectCostRateInPct / NumberOfGteeMMasterDataRecords'
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Average IDC Rate'
1 as  AvgGteeMIndirectCostRateInPct
    
//GrantTotalAmountInGrantCrcy
}
```
