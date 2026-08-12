---
name: I_EHSLOCATIONBYIDENTIFIER
description: "This CDS view is used by other analytical views to retrieve location ID's and revision dates. This CDS view provides the data to answer the following business questions: What are the start and end dates of the revisions of a particular location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONBYIDENTIFIER')/$value
semantic_en: "This CDS view is used by other analytical views to retrieve location ID's and revision dates. This CDS view provides the data to answer the following business questions: What are the start and end dates of the revisions of a particular location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Location by identifier — CDS view giao diện dựa trên I_EHSLocationRevision."
keywords:
  - "location"
  - "identifier"
  - "revision"
  - "date"
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
# I_EHSLOCATIONBYIDENTIFIER

**This CDS view is used by other analytical views to retrieve location ID's and revision dates. This CDS view provides the data to answer the following business questions: What are the start and end dates of the revisions of a particular location? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONBYIDENTIFIER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationID` | ✓ | |  |  | `CHAR(20)` | Location ID |
| `RevisionEndDate` | ✓ | |  |  | `DATS(8)` | Revision End Date |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `EHSLocationRevisionUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EHSLocNameByIdentifierText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONBYIDENTIFIER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONBYIDENTIFIER')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics: {
dataCategory: #DIMENSION,
              technicalName: 'IEHSLOCBYID'
              ,
              internalName: #LOCAL,
              dataExtraction.enabled: false
}


@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'EHSLocationID' 

@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MASTER
}



@EndUserText.label: 'Location by identifier'
@VDM.viewType: #BASIC
@Metadata.allowExtensions:true

define view entity I_EHSLocationByIdentifier


  as select from    I_EHSLocationRevision                         as EHSLocationRevision
    inner join      I_EHSLocationRoot                             as EHSLocationRoot on EHSLocationRoot.EHSLocationUUID = EHSLocationRevision.EHSLocationUUID
  association [0..*] to I_EHSLocNameByIdentifierText as _Text on  EHSLocationRoot.EHSLocationID               = _Text.EHSLocationID 

{


      @ObjectModel.text.association: '_Text'
  key EHSLocationRoot.EHSLocationID,
      @Semantics.businessDate.to
  key EHSLocationRevision.RevisionEndDate,
      @Semantics.businessDate.from
      EHSLocationRevision.RevisionStartDate,
      EHSLocationRevision.EHSLocationRevisionUUID,
      EHSLocationRevision.EHSLocationUUID,
 

      _Text

}
```
