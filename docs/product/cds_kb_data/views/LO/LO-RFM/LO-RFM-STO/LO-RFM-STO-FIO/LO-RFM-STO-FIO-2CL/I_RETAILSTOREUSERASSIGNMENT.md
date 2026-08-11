---
name: I_RETAILSTOREUSERASSIGNMENT
description: "User Assigned Store in Retail Store Apps"
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILSTOREUSERASSIGNMENT')/$value
semantic_en: "User Assigned Store in Retail Store Apps"
semantic_vi: "User Assigned Store in Retail Store Apps — CDS view cơ bản dựa trên P_RetailStoreUserAssignment."
keywords:
  - "user"
  - "assigned"
  - "store"
  - "retail"
  - "apps"
tags:
  - LO
  - bo:project
  - component:LO-RFM-STO-FIO-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-STO
  - LO-RFM-STO-FIO
  - LO-RFM-STO-FIO-2CL
  - lob:finance
  - lob:logistics general
---
# I_RETAILSTOREUSERASSIGNMENT

**User Assigned Store in Retail Store Apps**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILSTOREUSERASSIGNMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` | ✓ | |  |  | `CHAR(4)` | Plant |
| `AssignedUser` | ✓ | |  |  | `CHAR(12)` | User ID |
| `_Store` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILSTOREUSERASSIGNMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILSTOREUSERASSIGNMENT')/$value)*

```abap
@VDM: {
  viewType                           : #BASIC,
  lifecycle.contract.type            : #PUBLIC_LOCAL_API
}
@EndUserText.label                   : 'User Assigned Store in Retail Store Apps'
@AccessControl.authorizationCheck    : #NOT_REQUIRED
@AccessControl.personalData.blocking : #NOT_REQUIRED
@ObjectModel: {
   representativeKey                 : 'Store',
   supportedCapabilities             : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET
                                        ],
   modelingPattern                   :  #NONE ,
   usageType                         : {serviceQuality: #A,sizeCategory: #M,dataClass: #MIXED }
 }
 @Analytics.technicalName            : 'IRTSTASSGNDSTORE' 
 @Metadata :{
   ignorePropagatedAnnotations       : true
}
 
define view entity I_RetailStoreUserAssignment
  as select from P_RetailStoreUserAssignment

{
  key Store,
  key AssignedUser,

      _Store

}
where
  _Store.SiteCategory = 'A'
```
