---
name: C_EHSLOCHIERARCHYPATHDEX
description: "This CDS view provides data about all parents (direct and indirect) of a location within a specific hierarchy revision. The data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location hierarchy data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCHIERARCHYPATHDEX')/$value
semantic_en: "This CDS view provides data about all parents (direct and indirect) of a location within a specific hierarchy revision. The data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location hierarchy data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Hierarchy Path — CDS view tiêu dùng dựa trên I_EHSLocHierarchyPath."
keywords:
  - "ehs"
  - "location"
  - "hierarchy"
  - "path"
  - "revision"
  - "start"
  - "date"
  - "description"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - transaction
---
# C_EHSLOCHIERARCHYPATHDEX

**This CDS view provides data about all parents (direct and indirect) of a location within a specific hierarchy revision. The data can be used to filter another CDS view for related transactional data (amounts) or make selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location hierarchy data be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCHIERARCHYPATHDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocHierarchyPathUUID` | ✓ | |  |  | `RAW(16)` | Location Hierarchy - Path UUID |
| `EHSLocHierarchyRevisionUUID` |  | |  |  | `RAW(16)` | Location Hierarchy Revision Key |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `RevisionEndDate` |  | |  |  | `DATS(8)` | Revision End Date |
| `RevisionDescription` |  | |  |  | `CHAR(80)` | Revision Description |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSParentLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSParentLocationID` |  | |  | `EHSLocationID` | `CHAR(20)` | Location ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCHIERARCHYPATHDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCHIERARCHYPATHDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'EHS Location Hierarchy Path'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ] }
@ObjectModel.sapObjectNodeType.name: 'EHSLocationHierarchyPath'
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        table: 'ehfndd_lhr_path',
        role: #MAIN,
        viewElement: ['EHSLocHierarchyPathUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehfndd_lhr_rev',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['EHSLocHierarchyRevisionUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehfndd_loc_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['EHSLocationUUID'],
        tableElement: ['db_key']
      }, {
        table: 'ehfndd_loc_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['EHSParentLocationUUID'],
        tableElement: ['db_key']
      }]
    }
  }
}
@Metadata.allowExtensions: true
define view entity C_EHSLocHierarchyPathDEX
  as select from           I_EHSLocHierarchyPath          as EHSLocHierarchyPath
    left outer to one join I_EHSLocationHierarchyRevision as EHSLocationHierarchyRevision on EHSLocHierarchyPath.EHSLocHierarchyRevisionUUID = EHSLocationHierarchyRevision.EHSLocHierarchyRevisionUUID
    left outer to one join I_EHSLocationRoot              as EHSLocationRoot              on EHSLocHierarchyPath.EHSLocationUUID = EHSLocationRoot.EHSLocationUUID
    left outer to one join I_EHSLocationRoot              as EHSParentLocationRoot        on EHSLocHierarchyPath.EHSParentLocationUUID = EHSParentLocationRoot.EHSLocationUUID
{
  key EHSLocHierarchyPath.EHSLocHierarchyPathUUID,
      EHSLocationHierarchyRevision.EHSLocHierarchyRevisionUUID,
      EHSLocationHierarchyRevision.RevisionStartDate,
      EHSLocationHierarchyRevision.RevisionEndDate,
      EHSLocationHierarchyRevision.RevisionDescription,
      EHSLocHierarchyPath.EHSLocationUUID,
      EHSLocationRoot.EHSLocationID,
      EHSLocHierarchyPath.EHSParentLocationUUID,
      EHSParentLocationRoot.EHSLocationID as EHSParentLocationID
}
```
