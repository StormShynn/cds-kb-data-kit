---
name: I_ENTPROJECTSTATUSAREADEX
description: "This CDS view enables the extraction of status area information for enterprise projects to SAP Datasphere, including comments for status areas. It enables monitoring and reporting on various aspects of project health by organizing status information into predefined areas with corresponding status values and trend directions. This CDS view provides the data to answer the following business questions: What is the current status of different areas for enterprise projects? Which comments or notes have been added to specific status areas? What is the trend direction (improving, stable, declining) for each status area? Who created or last modified the status area data, and when did these changes occur? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJECTSTATUSAREADEX')/$value
semantic_en: "This CDS view enables the extraction of status area information for enterprise projects to SAP Datasphere, including comments for status areas. It enables monitoring and reporting on various aspects of project health by organizing status information into predefined areas with corresponding status values and trend directions. This CDS view provides the data to answer the following business questions: What is the current status of different areas for enterprise projects? Which comments or notes have been added to specific status areas? What is the trend direction (improving, stable, declining) for each status area? Who created or last modified the status area data, and when did these changes occur? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Data Extraction for Ent Proj Status Area — CDS view cơ bản dựa trên Data Extraction for Ent Proj Status Area."
keywords:
  - "data"
  - "extraction"
  - "for"
  - "ent"
  - "proj"
  - "status"
  - "area"
  - "project"
  - "trend"
tags:
  - PPM
  - bo:companycode
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - project
  - bo:project
---
# I_ENTPROJECTSTATUSAREADEX

**This CDS view enables the extraction of status area information for enterprise projects to SAP Datasphere, including comments for status areas. It enables monitoring and reporting on various aspects of project health by organizing status information into predefined areas with corresponding status values and trend directions. This CDS view provides the data to answer the following business questions: What is the current status of different areas for enterprise projects? Which comments or notes have been added to specific status areas? What is the trend direction (improving, stable, declining) for each status area? Who created or last modified the status area data, and when did these changes occur? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJECTSTATUSAREADEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatusAreaUUID` | ✓ | |  | `guid` | `RAW(16)` | Entity Guid |
| `ProjectUUID` |  | |  | `project_guid` | `RAW(16)` | Entity Guid |
| `StatusArea` |  | |  | `statusarea` | `CHAR(4)` | Status Area Category |
| `StatusAreaStatus` |  | |  | `status` | `CHAR(2)` | Status Area Status |
| `StatusTrend` |  | |  | `trend` | `CHAR(2)` | Status Area Trend |
| `StatusAreaNote` |  | |  | `/S4PPM/RestrictedLongText( long_text => comments )` | `STRI(5000)` | Comments |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Name of Person Who Created Object |
| `CreationDateTime` |  | |  | `created_on` | `DEC(15)` | Timestamp of Object Creation |
| `LastChangedByUser` |  | |  | `changed_by` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDateTime` |  | |  | `changed_on` | `DEC(15)` | Timestamp of Last Object Change |
| `_Area` | | ✓ | | | | |
| `_AreaStatus` | | ✓ | | | | |
| `_AreaTrend` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Area` | `I_EntProjectStatusAreaCode` | [1] |
| `_AreaStatus` | `I_EntProjStatusAreaStatus` | [1] |
| `_AreaTrend` | `I_EntProjStatusAreaTrend` | [1] |
| `_EnterpriseProject` | `I_EnterpriseProject` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJECTSTATUSAREADEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJECTSTATUSAREADEX')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}

@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture.automatic: true

  },
  technicalName: 'IEntProjectStatusAreaDEX'
}
@ClientHandling.clientSafe: true

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel: {
    representativeKey: 'StatusAreaUUID',
    sapObjectNodeType.name: 'StatusArea',
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    usageType: {
      serviceQuality:  #C,
      dataClass:       #TRANSACTIONAL,
      sizeCategory:    #L
    }
}

@ObjectModel.modelingPattern:#NONE

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Data Extraction for Ent Proj Status Area' 

define view entity I_EntProjectStatusAreaDEX
  as select from /s4ppm/stat_area
  association [1] to I_EntProjectStatusAreaCode as _Area              on $projection.StatusArea = _Area.StatusArea

  association [1] to I_EntProjStatusAreaStatus  as _AreaStatus        on $projection.StatusAreaStatus = _AreaStatus.StatusAreaStatus

  association [1] to I_EntProjStatusAreaTrend   as _AreaTrend         on $projection.StatusTrend = _AreaTrend.StatusTrend

  association [1] to I_EnterpriseProject        as _EnterpriseProject on $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
{
  key guid                                               as StatusAreaUUID,
      project_guid                                       as ProjectUUID,
      @ObjectModel.foreignKey.association: '_Area'
      statusarea                                         as StatusArea,
      @ObjectModel.foreignKey.association: '_AreaStatus'
      status                                             as StatusAreaStatus,
      @ObjectModel.foreignKey.association: '_AreaTrend'
      trend                                              as StatusTrend,
      /S4PPM/RestrictedLongText( long_text => comments ) as StatusAreaNote,
      @Semantics.user.createdBy: true
      created_by                                         as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      created_on                                         as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      changed_by                                         as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      changed_on                                         as LastChangeDateTime,

      _Area,
      _AreaStatus,
      _AreaTrend,

      _EnterpriseProject
}
```
