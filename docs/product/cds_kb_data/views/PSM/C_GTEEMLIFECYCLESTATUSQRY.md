---
name: C_GTEEMLIFECYCLESTATUSQRY
description: "Grant Life Cycle Status Changes - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMLIFECYCLESTATUSQRY')/$value
semantic_en: "Grant Life Cycle Status Changes - Query"
semantic_vi: "Grant Life Cycle Status Changes - Query — CDS view tiêu dùng dựa trên I_GteeMLifeCycleStatusCube."
keywords:
  - "grant"
  - "life"
  - "cycle"
  - "status"
  - "changes"
  - "query"
  - "change"
  - "object"
  - "class"
  - "creation"
  - "date"
  - "time"
  - "lifecycle"
tags:
  - PSM
  - component:PSM
  - consumption-view
---
# C_GTEEMLIFECYCLESTATUSQRY

**Grant Life Cycle Status Changes - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMLIFECYCLESTATUSQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `ChangeDocObjectClass` | ✓ | |  |  | `CHAR(15)` | Object Class |
| `CreationDate` | ✓ | |  |  | `DATS(8)` | Creation Date of Change Document |
| `CreationTime` | ✓ | |  |  | `TIMS(6)` | Time of Change |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `ChangeDocNewFieldValue` |  | |  |  | `CHAR(254)` | New Content of Changed Field |
| `ChangeDocPreviousFieldValue` |  | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `IsChangeDocument` |  | |  |  | `INT1(3)` |  |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMLIFECYCLESTATUSQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMLIFECYCLESTATUSQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CGMLIFECYLSTSQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Grant Life Cycle Status Changes - Query'
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

define view C_GteeMLifeCycleStatusQry
  as select from I_GteeMLifeCycleStatusCube
{
  key GrantID,
  key ChangeDocObjectClass,
  key CreationDate,
  key CreationTime,
      GrantLifecycleStatus,
      GrantAuthznGrp,
      GrantIsNotRelevantGrant,
      ChangeDocNewFieldValue,
      ChangeDocPreviousFieldValue,
      @EndUserText.label: 'Change Document Record Available'
      IsChangeDocument,
      @EndUserText.label: 'Nr of Grants'
      NumberOfGteeMMasterDataRecords,
      GranteeMgmtSponsor
            
}
```
