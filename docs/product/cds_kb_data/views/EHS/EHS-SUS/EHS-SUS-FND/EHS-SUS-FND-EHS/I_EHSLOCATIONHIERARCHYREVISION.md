---
name: I_EHSLOCATIONHIERARCHYREVISION
description: "This CDS view retrieves information about revisions of the location hierarchy in Environment, Health, and Safety. This CDS view provides the data to answer the following business questions: Which location revisions in the systems are valid from next month? How many location revisions are valid until end of this week? Which location revisions were changed yesterday? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONHIERARCHYREVISION')/$value
semantic_en: "This CDS view retrieves information about revisions of the location hierarchy in Environment, Health, and Safety. This CDS view provides the data to answer the following business questions: Which location revisions in the systems are valid from next month? How many location revisions are valid until end of this week? Which location revisions were changed yesterday? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Hierarchy Revision — CDS view giao diện (organizational data) dựa trên ehfndd_lhr_rev."
keywords:
  - "ehs"
  - "location"
  - "hierarchy"
  - "revision"
  - "date"
  - "description"
  - "start"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSLOCATIONHIERARCHYREVISION

**This CDS view retrieves information about revisions of the location hierarchy in Environment, Health, and Safety. This CDS view provides the data to answer the following business questions: Which location revisions in the systems are valid from next month? How many location revisions are valid until end of this week? Which location revisions were changed yesterday? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONHIERARCHYREVISION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocHierarchyUUID` | ✓ | |  | `cast( parent_key as ehfnd_lhr_root_uuid preserving type )` | `RAW(16)` | Location Hierarchy Root Key |
| `RevisionEndDate` | ✓ | |  | `end_date` | `DATS(8)` | Revision End Date |
| `RevisionDescription` |  | |  | `revision_descr` | `CHAR(80)` | Revision Description |
| `RevisionStartDate` |  | |  | `split_date` | `DATS(8)` | Revision Start Date |
| `EHSLocHierarchyRevisionUUID` |  | |  | `cast( db_key as ehfnd_lhr_rev_uuid preserving type )` | `RAW(16)` | Location Hierarchy Revision Key |
| `LastChangeDate` |  | |  | `cast ( lchg_date_time as ehfnd_bo_lchg_date_time preserving type )` | `DEC(21)` | Last Changed On |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONHIERARCHYREVISION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONHIERARCHYREVISION')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'IEHSLHRREV',
    compiler.compareFilter: true
 }
@EndUserText.label: 'EHS Location Hierarchy Revision'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
            allowExtensions:true,
            ignorePropagatedAnnotations:true
}
@ObjectModel:{
    representativeKey: 'EHSLocHierarchyUUID',
// used for BOBF Master Data Object
    usageType:{ serviceQuality: #B,
                sizeCategory:  #S,         // < 1.000
                dataClass: #ORGANIZATIONAL },
    supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #NONE,
    sapObjectNodeType.name: 'EHSLocationHierarchyRevision'
}

define view I_EHSLocationHierarchyRevision
  as select from ehfndd_lhr_rev as rev
{
      @ObjectModel.text.element:  [ 'RevisionDescription' ]
  key cast( parent_key as ehfnd_lhr_root_uuid preserving type )          as EHSLocHierarchyUUID,

      @Semantics.businessDate.to
  key end_date                                                           as RevisionEndDate,

      @Semantics.text: true
      revision_descr                                                     as RevisionDescription,

      @Semantics.businessDate.from
      split_date                                                         as RevisionStartDate,

      cast( db_key as ehfnd_lhr_rev_uuid preserving type )               as EHSLocHierarchyRevisionUUID,

      @Semantics.systemDateTime.lastChangedAt
      cast ( lchg_date_time as ehfnd_bo_lchg_date_time preserving type ) as LastChangeDate
}
```
