---
name: I_USERWITHMYEHSLOCATION
description: "This CDS view retrieves the particular location that is marked as My Location for your user. This CDS view provides the data to answer the following business questions: Which location is set to My Location for my current user in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERWITHMYEHSLOCATION')/$value
semantic_en: "This CDS view retrieves the particular location that is marked as My Location for your user. This CDS view provides the data to answer the following business questions: Which location is set to My Location for my current user in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "User With My EHS Location — CDS view giao diện dựa trên I_MyEHSLocation."
keywords:
  - "user"
  - "with"
  - "ehs"
  - "location"
  - "hierarchy"
  - "node"
  - "type"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_USERWITHMYEHSLOCATION

**This CDS view retrieves the particular location that is marked as My Location for your user. This CDS view provides the data to answer the following business questions: Which location is set to My Location for my current user in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERWITHMYEHSLOCATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UserID` | ✓ | |  | `$session.user` | `CHAR(12)` |  |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `HierarchyNodeType` |  | |  | `'EHSLocationUUID'` | `CHAR(15)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERWITHMYEHSLOCATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERWITHMYEHSLOCATION')/$value)*

```abap
@EndUserText.label: 'User With My EHS Location'


@VDM.viewType: #BASIC


@AccessControl.authorizationCheck: #MANDATORY

@AbapCatalog.sqlViewName: 'IUSRWITHMYEHSLOC'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #M, dataClass: #MASTER}
@ObjectModel.dataCategory: #HIERARCHY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET  ]
@ObjectModel.modelingPattern: #NONE

define view I_UserWithMyEHSLocation
  as select from I_MyEHSLocation
{
  key $session.user     as UserID,
      EHSLocationUUID,
      EHSLocationID,
      'EHSLocationUUID' as HierarchyNodeType
}
```
