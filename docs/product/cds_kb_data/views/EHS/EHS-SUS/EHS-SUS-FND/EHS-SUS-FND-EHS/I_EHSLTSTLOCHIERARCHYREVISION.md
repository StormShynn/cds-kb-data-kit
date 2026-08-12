---
name: I_EHSLTSTLOCHIERARCHYREVISION
description: "This CDS view retrieves the details about the latest location hierarchy revision in your system. This is the revision whose end date is set to the year 9999. This CDS view provides the data to answer the following business questions: Which is the latest location hierarchy revision in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLTSTLOCHIERARCHYREVISION')/$value
semantic_en: "This CDS view retrieves the details about the latest location hierarchy revision in your system. This is the revision whose end date is set to the year 9999. This CDS view provides the data to answer the following business questions: Which is the latest location hierarchy revision in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Latest Location Hierarchy Revision — CDS view giao diện dựa trên I_EHSLocationHierarchyRevision."
keywords:
  - "latest"
  - "location"
  - "hierarchy"
  - "revision"
  - "date"
  - "start"
  - "description"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSLTSTLOCHIERARCHYREVISION

**This CDS view retrieves the details about the latest location hierarchy revision in your system. This is the revision whose end date is set to the year 9999. This CDS view provides the data to answer the following business questions: Which is the latest location hierarchy revision in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLTSTLOCHIERARCHYREVISION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocHierarchyUUID` | ✓ | |  |  | `RAW(16)` | Location Hierarchy Root Key |
| `RevisionEndDate` | ✓ | |  |  | `DATS(8)` | Revision End Date |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `RevisionDescription` |  | |  |  | `CHAR(80)` | Revision Description |
| `EHSLocHierarchyRevisionUUID` |  | |  |  | `RAW(16)` | Location Hierarchy Revision Key |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLTSTLOCHIERARCHYREVISION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLTSTLOCHIERARCHYREVISION')/$value)*

```abap
@EndUserText.label: 'Latest Location Hierarchy Revision'

@VDM.viewType: #COMPOSITE

@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'ILSTLOCHIER'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #M, dataClass: #MASTER}
@ObjectModel.dataCategory: #HIERARCHY

@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@Metadata.ignorePropagatedAnnotations: true

define view I_EHSLtstLocHierarchyRevision
  as select from I_EHSLocationHierarchyRevision
  
{
  key EHSLocHierarchyUUID,
  
  key RevisionEndDate,
  
      RevisionStartDate,
      
      RevisionDescription,
      
      EHSLocHierarchyRevisionUUID
      
} where RevisionEndDate = '99991231'
```
