---
name: C_GRANTCOSTSHARINGLINKQRY
description: "Grant Cost Sharing Link - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTCOSTSHARINGLINKQRY')/$value
semantic_en: "Grant Cost Sharing Link - Query"
semantic_vi: "Grant Cost Sharing Link - Query — CDS view tiêu dùng dựa trên I_GrantCostSharingLinkCube."
keywords:
  - "grant"
  - "cost"
  - "sharing"
  - "link"
  - "query"
  - "financial"
  - "management"
  - "area"
  - "fund"
  - "gtee"
  - "source"
  - "sponsored"
  - "program"
tags:
  - PSM
  - component:PSM
  - consumption-view
---
# C_GRANTCOSTSHARINGLINKQRY

**Grant Cost Sharing Link - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTCOSTSHARINGLINKQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` | ✓ | |  |  | `CHAR(10)` | Fund |
| `GteeMCostSharingSource` | ✓ | |  |  | `CHAR(1)` | Cost Sharing Source |
| `SponsoredProgram` | ✓ | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | ✓ | |  |  | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `AvgGteeMCostSharingRateInPct` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTCOSTSHARINGLINKQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTCOSTSHARINGLINKQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4CCSTSHRG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Grant Cost Sharing Link - Query'

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

define view C_GrantCostSharingLinkQry
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
  as select from I_GrantCostSharingLinkCube as Cube
{
  @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
    key GrantID,
    key FinancialManagementArea,
    key Fund,
    key GteeMCostSharingSource,
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
    @AnalyticsDetails.query.formula: ' AvgGteeMCostSharingRateInPct / NumberOfGteeMMasterDataRecords'
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Average Cost Sharing Rate'
 1 as AvgGteeMCostSharingRateInPct
    
 
  
}
```
