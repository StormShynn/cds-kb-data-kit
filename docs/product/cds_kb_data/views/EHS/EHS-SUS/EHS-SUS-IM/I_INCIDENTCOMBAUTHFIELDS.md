---
name: I_INCIDENTCOMBAUTHFIELDS
description: "This CDS view combines authorization-relevant fields from incidents and their related investigations. It consolidates authorization data from both incident-level and investigation-level access restrictions to support comprehensive authorization checks in incident management processes. This CDS view provides the data to answer the following business questions: Which incidents and investigations does a user have authorization to access based on their assigned organizational attributes (plant, location, country, region)? What access restrictions are currently applied to specific incidents or investigations, and how do these restrictions differ between the incident level and investigation level? Which incidents are associated with specific plants, locations, or geographic regions for the purpose of enforcing location-based security policies? What is the current status and category of incidents and investigations that a user is authorized to view or modify? How are authorization fields distributed across the combined set of incidents and investigations to support role-based access control in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCOMBAUTHFIELDS')/$value
semantic_en: "This CDS view combines authorization-relevant fields from incidents and their related investigations. It consolidates authorization data from both incident-level and investigation-level access restrictions to support comprehensive authorization checks in incident management processes. This CDS view provides the data to answer the following business questions: Which incidents and investigations does a user have authorization to access based on their assigned organizational attributes (plant, location, country, region)? What access restrictions are currently applied to specific incidents or investigations, and how do these restrictions differ between the incident level and investigation level? Which incidents are associated with specific plants, locations, or geographic regions for the purpose of enforcing location-based security policies? What is the current status and category of incidents and investigations that a user is authorized to view or modify? How are authorization fields distributed across the combined set of incidents and investigations to support role-based access control in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Incident Authorization Fields — CDS view giao diện dựa trên I_IncidentAuthorizationFields."
keywords:
  - "incident"
  - "authorization"
  - "fields"
  - "task"
  - "host"
  - "object"
  - "instance"
  - "investigation"
  - "access"
  - "restriction"
  - "category"
  - "status"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - plan
---
# I_INCIDENTCOMBAUTHFIELDS

**This CDS view combines authorization-relevant fields from incidents and their related investigations. It consolidates authorization data from both incident-level and investigation-level access restrictions to support comprehensive authorization checks in incident management processes. This CDS view provides the data to answer the following business questions: Which incidents and investigations does a user have authorization to access based on their assigned organizational attributes (plant, location, country, region)? What access restrictions are currently applied to specific incidents or investigations, and how do these restrictions differ between the incident level and investigation level? Which incidents are associated with specific plants, locations, or geographic regions for the purpose of enforcing location-based security policies? What is the current status and category of incidents and investigations that a user is authorized to view or modify? How are authorization fields distributed across the combined set of incidents and investigations to support role-based access control in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCOMBAUTHFIELDS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSTaskHostObjectInstanceUUID` | ✓ | |  |  | `RAW(16)` | Incident UUID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `InvestigationAccessRestriction` |  | |  | `''` | `CHAR(1)` |  |
| `IncidentCategory` |  | |  |  | `CHAR(3)` | Incident Category |
| `IncidentStatus` |  | |  |  | `CHAR(2)` | Incident Status |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `IncidentID` |  | |  |  | `CHAR(20)` | Incident ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region of Incident |
| `Region` |  | |  |  | `CHAR(3)` | Region of Incident |
| `IncidentAccessRestriction` |  | |  | `IncidentHasAccessRestriction` | `CHAR(1)` | Restricted Access to Incident Record |
| `_CurrentEHSParentLocationID` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_IncidentCategory` | | ✓ | | | | |
| `_IncidentStatus` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCOMBAUTHFIELDS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCOMBAUTHFIELDS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'INCCOMBAUTHFLDS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Incident Authorization Fields'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #NONE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
define view I_IncidentCombAuthFields
  as select from  I_IncidentAuthorizationFields 
 {
 //I_IncidentAuthorizationFields 
key EHSTaskHostObjectInstanceUUID,
    IncidentUUID, 
 //EHSTaskHostObjectInstance, // removed due to performance optimization 
 '' as InvestigationAccessRestriction, 
 IncidentCategory, 
 IncidentStatus, 
 Plant, 
 IncidentID,
 EHSLocationUUID, 
 Country, 
 Region, 
 IncidentHasAccessRestriction as IncidentAccessRestriction,
 _CurrentEHSParentLocationID,
 _Country,
 _IncidentCategory,
 _IncidentStatus,
 _Plant,
 _Region

 } union all select from I_IncidentInvstgnAuthznFields {

key EHSTaskHostObjectInstanceUUID,
IncidentUUID, 
//EHSTaskHostObjectInstance, // removed due to performance optimization 
InvestigationHasAccRestriction as InvestigationAccessRestriction, 
IncidentCategory, 
IncidentStatus, 
Plant, 
IncidentID,
EHSLocationUUID, 
Country, 
Region, 
'' as IncidentAccessRestriction,
 _CurrentEHSParentLocationID,
 _Country,
 _IncidentCategory,
 _IncidentStatus,
 _Plant,
 _Region

}
```
