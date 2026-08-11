---
name: I_INCIDENTPERSONROLE
description: "This CDS view retrieves information about the role of the involved person in an incident. This CDS view provides the data to answer the following business questions: How many incidents in the system have an injured person? What are the roles of the involved persons in an incident, for example witness, first physician, equipment operator? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTPERSONROLE')/$value
semantic_en: "This CDS view retrieves information about the role of the involved person in an incident. This CDS view provides the data to answer the following business questions: How many incidents in the system have an injured person? What are the roles of the involved persons in an incident, for example witness, first physician, equipment operator? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Involved Person Role in an Incident — CDS view giao diện dựa trên ehhssd_inc_prole."
keywords:
  - "involved"
  - "person"
  - "role"
  - "incident"
  - "creation"
  - "date"
  - "time"
  - "created"
  - "user"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - bo:salesorder
---
# I_INCIDENTPERSONROLE

**This CDS view retrieves information about the role of the involved person in an incident. This CDS view provides the data to answer the following business questions: How many incidents in the system have an injured person? What are the roles of the involved persons in an incident, for example witness, first physician, equipment operator? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTPERSONROLE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncidentPersonRoleUUID` | ✓ | |  | `db_key` | `RAW(16)` | NodeID |
| `IncidentUUID` |  | |  | `cast(root_key as ehhss_incident_uuid preserving type)` | `RAW(16)` | Incident UUID |
| `InvolvedPersonUUID` |  | |  | `cast(parent_key as ehhss_person_involved_uuid preserving type)` | `RAW(16)` | Involved Person UUID |
| `CreationDateTime` |  | |  | `cast(datetime_cr as ehfnd_datetime_cr preserving type)` | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  | `user_id_cr` | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  | `cast(datetime_ch as ehfnd_datetime_ch preserving type)` | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  | `user_id_ch` | `CHAR(12)` | Object Changed By |
| `IncidentPersonRole` |  | |  | `role` | `CHAR(21)` | Role of Involved Person |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_Incident` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_Incident` | `I_Incident` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTPERSONROLE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTPERSONROLE')/$value)*

```abap
@EndUserText.label: 'Involved Person Role in an Incident'
@Analytics.dataExtraction.enabled: true

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'IncidentPersonRoleUUID'
@AccessControl: { authorizationCheck: #CHECK,
                  privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser'] }

@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.sqlViewName: 'IINCPERROLE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}

// #NOT_REQUIRED because of existing end of purpose check
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'EHSIncidentPersonRole'

@Analytics.internalName:#LOCAL

define view I_IncidentPersonRole
  as select from ehhssd_inc_prole
  association [0..1] to I_User     as _CreatedByUser     on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User     as _LastChangedByUser on $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [1..1] to I_Incident as _Incident          on $projection.IncidentUUID = _Incident.IncidentUUID

{
  key db_key                                                         as IncidentPersonRoleUUID,
      cast(root_key as ehhss_incident_uuid preserving type)          as IncidentUUID,
      cast(parent_key as ehhss_person_involved_uuid preserving type) as InvolvedPersonUUID,

      // Admin data
      cast(datetime_cr as ehfnd_datetime_cr preserving type)         as CreationDateTime,
      user_id_cr                                                     as CreatedByUser,
      _CreatedByUser,
      cast(datetime_ch as ehfnd_datetime_ch preserving type)         as LastChangeDateTime,
      user_id_ch                                                     as LastChangedByUser,
      _LastChangedByUser,

      role                                                           as IncidentPersonRole,

      _Incident

}
```
