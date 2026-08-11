---
name: C_GRANTSPONSOREDCLASSQRY
description: "Grant and Sponsored Class - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTSPONSOREDCLASSQRY')/$value
semantic_en: "Grant and Sponsored Class - Query"
semantic_vi: "Grant and Sponsored Class - Query — CDS view tiêu dùng dựa trên I_GrantSponsoredClassCube."
keywords:
  - "grant"
  - "and"
  - "sponsored"
  - "class"
  - "query"
  - "grantee"
  - "mgmt"
  - "sponsor"
  - "number"
  - "gtee"
  - "master"
  - "data"
  - "records"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM
  - consumption-view
---
# C_GRANTSPONSOREDCLASSQRY

**Grant and Sponsored Class - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTSPONSOREDCLASSQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTSPONSOREDCLASSQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTSPONSOREDCLASSQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4CGRSCLCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Grant and Sponsored Class - Query'

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

define view C_GrantSponsoredClassQry
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
  as select from I_GrantSponsoredClassCube as Cube
{
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
key GrantID,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
SponsoredClass,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
GranteeMgmtSponsor,
@EndUserText.label: 'Master Data Records'
NumberOfGteeMMasterDataRecords

}
```
