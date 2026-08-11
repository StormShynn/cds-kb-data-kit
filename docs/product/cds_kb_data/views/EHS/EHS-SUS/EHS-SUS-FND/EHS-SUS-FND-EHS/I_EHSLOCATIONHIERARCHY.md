---
name: I_EHSLOCATIONHIERARCHY
description: "supports the extraction of data for the hierarchy of an EHS location for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location hierarchies be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONHIERARCHY')/$value
semantic_en: "supports the extraction of data for the hierarchy of an EHS location for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location hierarchies be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Hierarchy — CDS view giao diện dựa trên I_EHSLocationHierarchyNode."
keywords:
  - "ehs"
  - "location"
  - "hierarchy"
  - "revision"
  - "date"
  - "parent"
  - "start"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - transaction
---
# I_EHSLOCATIONHIERARCHY

**supports the extraction of data for the hierarchy of an EHS location for further use, such as filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. This CDS view provides the data to answer the following business questions: How can location hierarchies be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONHIERARCHY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocHierarchyUUID` | ✓ | |  |  | `RAW(16)` | Location Hierarchy Root Key |
| `RevisionEndDate` | ✓ | |  |  | `DATS(8)` | Revision End Date |
| `EHSLocationUUID` | ✓ | |  |  | `RAW(16)` | Location Key |
| `EHSParentLocationUUID` |  | |  |  | `RAW(16)` | Location Hierarchy Parent Key |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `EHSLocHierarchyRevisionUUID` |  | |  |  | `RAW(16)` | Location Hierarchy Revision Key |
| `EHSLocHierarchyNodeUUID` |  | |  |  | `RAW(16)` | Location Hierarchy Key |
| `EHSLocationID` |  | | `_EHSLocationRoot` | `EHSLocationID` | `CHAR(20)` | Location ID |
| `_EHSLocationRoot` | | ✓ | | | | |
| `_EHSLocation` | | ✓ | | | | |
| `_EHSLocationHierarchyRevision` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRoot` | `I_EHSLocationRoot` | [1..1] |
| `_EHSLocation` | `I_EHSLocation` | [0..*] |
| `_EHSLocationHierarchyRevision` | `I_EHSLocationHierarchyRevision` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONHIERARCHY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONHIERARCHY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEHSLHR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:  #PRIVILEGED_ONLY
@EndUserText.label: 'EHS Location Hierarchy'
@VDM.viewType: #COMPOSITE

@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #HIERARCHY
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name: 'EHSLocationHierarchy'

@Hierarchy.parentChild: [{

  recurse: {
    parent: [ 'EHSParentLocationUUID' ],
    child:  [ 'EHSLocationUUID' ]
  },
  directory: '_EHSLocationHierarchyRevision',
  label: 'EHS Location Hierarchy',
  name: '_EHSLocationHierarchyRevision.RevisionDescription'
}]


// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

// used for BOBF Master Data Object
@ObjectModel.usageType:{ serviceQuality: #C,        // < 15 msec
                         sizeCategory:  #L,         // < 10.000.000
                         dataClass: #ORGANIZATIONAL }

define view I_EHSLocationHierarchy
  as select from I_EHSLocationHierarchyNode

    inner join   I_EHSLocationHierarchyRevision as rev on I_EHSLocationHierarchyNode.EHSLocHierarchyRevisionUUID = rev.EHSLocHierarchyRevisionUUID

  association [1..1] to I_EHSLocationRoot              as _EHSLocationRoot              on  $projection.EHSLocationUUID = _EHSLocationRoot.EHSLocationUUID

  association [0..*] to I_EHSLocation                  as _EHSLocation                  on  $projection.EHSLocationUUID = _EHSLocation.EHSLocationUUID

  association [1..1] to I_EHSLocationHierarchyRevision as _EHSLocationHierarchyRevision on  I_EHSLocationHierarchyNode.EHSLocHierarchyUUID = _EHSLocationHierarchyRevision.EHSLocHierarchyUUID
                                                                                        and rev.RevisionEndDate                            = _EHSLocationHierarchyRevision.RevisionEndDate
{
      @ObjectModel.foreignKey.association: '_EHSLocationHierarchyRevision'
  key I_EHSLocationHierarchyNode.EHSLocHierarchyUUID,
      _EHSLocationHierarchyRevision,

      @Semantics.businessDate.to
  key rev.RevisionEndDate,

      @ObjectModel.foreignKey.association: '_EHSLocation'
  key I_EHSLocationHierarchyNode.EHSLocationUUID,

      I_EHSLocationHierarchyNode.EHSParentLocationUUID,

      @Semantics.businessDate.from
      rev.RevisionStartDate,

      I_EHSLocationHierarchyNode.EHSLocHierarchyRevisionUUID,

      I_EHSLocationHierarchyNode.EHSLocHierarchyNodeUUID,
      _EHSLocationRoot.EHSLocationID,

      _EHSLocationRoot,
      _EHSLocation
}
```
