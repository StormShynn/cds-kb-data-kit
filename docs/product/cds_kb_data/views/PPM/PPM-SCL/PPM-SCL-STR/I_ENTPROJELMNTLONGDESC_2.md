---
name: I_ENTPROJELMNTLONGDESC_2
description: "This CDS view retrieves long text descriptions associated with enterprise project elements. This CDS view provides the data to answer the following business questions: What is the detailed description of a specific project element? Which project elements have extended documentation or notes? How can I access comprehensive textual information for project planning and execution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJELMNTLONGDESC_2')/$value
semantic_en: "This CDS view retrieves long text descriptions associated with enterprise project elements. This CDS view provides the data to answer the following business questions: What is the detailed description of a specific project element? Which project elements have extended documentation or notes? How can I access comprehensive textual information for project planning and execution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Description for Enterprise Proj Element — CDS view cơ bản dựa trên Description for Enterprise Proj Element."
keywords:
  - "description"
  - "for"
  - "enterprise"
  - "proj"
  - "element"
  - "elmnt"
  - "long"
  - "text"
  - "project"
tags:
  - PPM
  - bo:companycode
  - component:PPM-SCL-STR
  - document
  - interface-view
  - plan
  - PPM-SCL
  - PPM-SCL-STR
  - project
  - bo:project
---
# I_ENTPROJELMNTLONGDESC_2

**This CDS view retrieves long text descriptions associated with enterprise project elements. This CDS view provides the data to answer the following business questions: What is the detailed description of a specific project element? Which project elements have extended documentation or notes? How can I access comprehensive textual information for project planning and execution? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJELMNTLONGDESC_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EntProjElmntLongTextUUID` | ✓ | | `_LongText` | `guid` | `RAW(16)` | Entity Guid |
| `ProjectElementUUID` |  | |  | `cast( _LongText.referenceobjectuuid as /s4ppm/tv_task_guid preserving type )` | `RAW(16)` | Projectelement Guid |
| `LongText` |  | |  | `/S4PPM/RestrictedLongText( long_text => _LongText.longtext_string )` | `STRI(5000)` | Comments |
| `ProjectUUID` |  | |  | `cast( _EnterpriseProjectElement.ProjectUUID as /s4ppm/tv_project_guid preserving type )` | `RAW(16)` | Project GUID |
| `_EnterpriseProjectElement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJELMNTLONGDESC_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJELMNTLONGDESC_2')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}

@AbapCatalog.viewEnhancementCategory: [#NONE]

@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture.automatic: true

  },
  technicalName: 'IEntProjElmntLongDesc2'
}

@ObjectModel: {
    representativeKey: 'EntProjElmntLongTextUUID',
    sapObjectNodeType.name: 'EnterpriseProject',
    modelingPattern:#NONE,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    usageType: {
  serviceQuality: #C,
  dataClass: #TRANSACTIONAL,
  sizeCategory: #XL
  }
}

@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:  #BASIC,
  lifecycle.contract.type:  #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Description for Enterprise Proj Element'

define view entity I_EntProjElmntLongDesc_2
  as select from /s4ppm/longtext as _LongText
  association [1..1] to I_EnterpriseProjectElement as _EnterpriseProjectElement on _EnterpriseProjectElement.ProjectElementUUID = $projection.ProjectElementUUID
{
  key _LongText.guid                                                                          as EntProjElmntLongTextUUID,
      cast( _LongText.referenceobjectuuid as /s4ppm/tv_task_guid preserving type )            as ProjectElementUUID,
      /S4PPM/RestrictedLongText( long_text => _LongText.longtext_string )                     as LongText,
      cast( _EnterpriseProjectElement.ProjectUUID as /s4ppm/tv_project_guid preserving type ) as ProjectUUID,
      _EnterpriseProjectElement

}
```
