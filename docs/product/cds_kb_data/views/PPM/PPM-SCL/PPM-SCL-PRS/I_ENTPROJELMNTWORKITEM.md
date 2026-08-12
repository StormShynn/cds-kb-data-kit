---
name: I_ENTPROJELMNTWORKITEM
description: "This CDS view retrieves the work item details of the project elements of a professional services project. This CDS view provides the data to answer the following business questions: What are the work items associated with a project element in a professional services project? Which work items are in active status or in inactive status? Which work items are configured or user-defined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PPM-SCL-PRS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJELMNTWORKITEM')/$value
semantic_en: "This CDS view retrieves the work item details of the project elements of a professional services project. This CDS view provides the data to answer the following business questions: What are the work items associated with a project element in a professional services project? Which work items are in active status or in inactive status? Which work items are configured or user-defined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Enterprise Project Element Work Item — CDS view giao diện dựa trên Enterprise Project Element Work Item."
keywords:
  - "enterprise"
  - "project"
  - "element"
  - "work"
  - "item"
  - "proj"
  - "elmnt"
  - "name"
tags:
  - PPM
  - bo:companycode
  - component:PPM-SCL-PRS
  - interface-view
  - PPM-SCL
  - PPM-SCL-PRS
  - project
  - bo:project
---
# I_ENTPROJELMNTWORKITEM

**This CDS view retrieves the work item details of the project elements of a professional services project. This CDS view provides the data to answer the following business questions: What are the work items associated with a project element in a professional services project? Which work items are in active status or in inactive status? Which work items are configured or user-defined? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-PRS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJELMNTWORKITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EntProjElmntWorkItemUUID` | ✓ | |  | `entprojelmntworkitemuuid` | `RAW(16)` | Entity Guid |
| `ProjectElementUUID` |  | |  | `projectelementuuid` | `RAW(16)` | Entity Guid |
| `ProjectUUID` |  | |  | `projectuuid` | `RAW(16)` | Entity Guid |
| `EntProjElmntWorkItem` |  | |  | `entprojelmntworkitem` | `CHAR(10)` | Enterprise Project Element Work Item |
| `EntProjElmntWorkItemName` |  | |  | `entprojelmntworkitemname` | `CHAR(40)` | Enterprise Project Element Work Item Name |
| `EntProjElmntWorkItemIsInactive` |  | |  | `entprojelmntworkitemisinactive` | `CHAR(1)` | Enterprise Project Element Work Item is Inactive |
| `EntProjElmntWorkItemIsCnfgrd` |  | |  | `entprojelmntworkitemiscnfgrd` | `CHAR(1)` | Enterprise Project Element Work Item is Configured |
| `EntProjElmntWrkItmLastUpdtSrce` |  | |  | `entprojelmntwrkitmlastupdtsrce` | `CHAR(1)` | Enterprise Project Element Work Item - Source of Update |
| `EntProjElmntWrkItmCrtedByUsr` |  | |  | `entprojelmntwrkitmcrtedbyusr` | `CHAR(12)` | Name of Person Who Created Object |
| `EntProjElmntWrkItmCrtnDteTme` |  | |  | `entprojelmntwrkitmcrtndtetme` | `DEC(15)` | Timestamp of Object Creation |
| `EntProjElmntWrkItmLstChgByUsr` |  | |  | `entprojelmntwrkitmlstchgbyusr` | `CHAR(12)` | Name of Person Who Changed Object |
| `EntProjElmntWrkItmLstChgDteTme` |  | |  | `entprojelmntwrkitmlstchgdtetme` | `DEC(15)` | Timestamp of Last Object Change |
| `_EnterpriseProjectElement` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |
| `_EnterpriseProjectForUser` | | ✓ | | | | |
| `_ConfiguredWorkItemText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [1..1] |
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |
| `_EnterpriseProjectForUser` | `I_EnterpriseProjectForUser` | [0..1] |
| `_ConfiguredWorkItemText` | `I_EntProjElmntCnfgrdWrkItmTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJELMNTWORKITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJELMNTWORKITEM')/$value)*

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#MANDATORY

@ObjectModel: {
   representativeKey: 'EntProjElmntWorkItemUUID',
   sapObjectNodeType.name: 'EntProjElmntWorkItem',
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   usageType: {
     serviceQuality:  #B,
     dataClass:       #TRANSACTIONAL,
     sizeCategory:    #XL
   }
}

@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@EndUserText.label: 'Enterprise Project Element Work Item'
@Metadata.ignorePropagatedAnnotations: true

@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
}

define view entity I_EntProjElmntWorkItem
  as select from /s4ppm/workitem as WorkItem
  association [1..1] to I_EnterpriseProjectElement    as _EnterpriseProjectElement on  $projection.ProjectElementUUID = _EnterpriseProjectElement.ProjectElementUUID
  association [1..1] to I_EnterpriseProject           as _EnterpriseProject        on  $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
  association [0..1] to I_EnterpriseProjectForUser    as _EnterpriseProjectForUser on  _EnterpriseProjectForUser.ProjectUUID = $projection.ProjectUUID
  association [0..*] to I_EntProjElmntCnfgrdWrkItmTxt as _ConfiguredWorkItemText   on  $projection.EntProjElmntWorkItem         = _ConfiguredWorkItemText.EntProjElmntWorkItem
                                                                                   and $projection.EntProjElmntWorkItemIsCnfgrd = 'X'
{
  key WorkItem.entprojelmntworkitemuuid       as EntProjElmntWorkItemUUID,
      WorkItem.projectelementuuid             as ProjectElementUUID,
      WorkItem.projectuuid                    as ProjectUUID,
      WorkItem.entprojelmntworkitem           as EntProjElmntWorkItem,
      WorkItem.entprojelmntworkitemname       as EntProjElmntWorkItemName, //Exposes name for User Defined Workitems
      @Semantics.booleanIndicator: true
      WorkItem.entprojelmntworkitemisinactive as EntProjElmntWorkItemIsInactive,
      @Semantics.booleanIndicator: true
      WorkItem.entprojelmntworkitemiscnfgrd   as EntProjElmntWorkItemIsCnfgrd,
      WorkItem.entprojelmntwrkitmlastupdtsrce as EntProjElmntWrkItmLastUpdtSrce,
      WorkItem.entprojelmntwrkitmcrtedbyusr   as EntProjElmntWrkItmCrtedByUsr,
      WorkItem.entprojelmntwrkitmcrtndtetme   as EntProjElmntWrkItmCrtnDteTme,
      WorkItem.entprojelmntwrkitmlstchgbyusr  as EntProjElmntWrkItmLstChgByUsr,
      WorkItem.entprojelmntwrkitmlstchgdtetme as EntProjElmntWrkItmLstChgDteTme,
      _EnterpriseProject,
      _EnterpriseProjectElement, // Make association public
      _EnterpriseProjectForUser,
      _ConfiguredWorkItemText
}
```
