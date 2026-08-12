---
name: I_EHSLOCATIONNAME
description: "supports the extraction of data for the name of an EHS location revision. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. The CDS view is not structured as a text view due to technical constraints in the CDS delta. This CDS view provides the data to answer the following business questions: How can location revision names be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONNAME')/$value
semantic_en: "supports the extraction of data for the name of an EHS location revision. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. The CDS view is not structured as a text view due to technical constraints in the CDS delta. This CDS view provides the data to answer the following business questions: How can location revision names be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Revision Name — CDS view giao diện dựa trên ehfndd_loc_text."
keywords:
  - "ehs"
  - "location"
  - "revision"
  - "name"
  - "creation"
  - "date"
  - "time"
  - "created"
  - "user"
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
# I_EHSLOCATIONNAME

**supports the extraction of data for the name of an EHS location revision. The extracted data can be used for filtering another CDS view for related transactional data (amounts) or making selections in the consuming solution. The CDS view is not structured as a text view due to technical constraints in the CDS delta. This CDS view provides the data to answer the following business questions: How can location revision names be used to identify relevant data sets in Environment Management? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONNAME')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationRevisionNameUUID` | ✓ | |  | `cast( db_key as ehfnd_loc_text_key preserving type )` | `RAW(16)` | EHS Location - Revision Name UUID |
| `EHSLocationUUID` |  | |  | `cast( root_key as ehfnd_location_uuid_ref preserving type )` | `RAW(16)` | Location |
| `EHSLocationRevisionUUID` |  | |  | `cast( parent_key as ehfnd_loc_rev_key preserving type )` | `RAW(16)` | EHS Location - Revision UUID |
| `CreationDateTime` |  | |  | `cast( crea_date_time as ehfnd_bo_crea_date_time preserving type )` | `DEC(21)` | Created On |
| `CreatedByUser` |  | |  | `cast( crea_uname as ehfnd_bo_crea_uname preserving type )` | `CHAR(12)` | Created By |
| `LastChangeDateTime` |  | |  | `cast( lchg_date_time as ehfnd_bo_lchg_date_time preserving type )` | `DEC(21)` | Last Changed On |
| `LastChangedByUser` |  | |  | `cast( lchg_uname as ehfnd_bo_lchg_uname preserving type )` | `CHAR(12)` | Last Change By |
| `Language` |  | |  | `language` | `LANG(1)` | Language |
| `EHSLocationName` |  | |  | `text` | `CHAR(60)` | Location Revision Text |
| `_EHSLocationRevisionBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRevisionBasic` | `I_EHSLocationRevisionBasic` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONNAME')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONNAME')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'EHS Location Revision Name'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #MASTER
}
@ObjectModel: { modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ] }
@ObjectModel.sapObjectNodeType.name: 'EHSLocationRevisionName'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled:true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
define view entity I_EHSLocationName
  as select from ehfndd_loc_text
  association [1..1] to I_EHSLocationRevisionBasic as _EHSLocationRevisionBasic on  $projection.EHSLocationRevisionUUID = _EHSLocationRevisionBasic.EHSLocationRevisionUUID
                                                                                and $projection.EHSLocationUUID         = _EHSLocationRevisionBasic.EHSLocationUUID
{
  key cast( db_key as ehfnd_loc_text_key preserving type )              as EHSLocationRevisionNameUUID,
      cast( root_key as ehfnd_location_uuid_ref preserving type )       as EHSLocationUUID,
      cast( parent_key as ehfnd_loc_rev_key preserving type )           as EHSLocationRevisionUUID,
      @Consumption.hidden: true
      cast( crea_date_time as ehfnd_bo_crea_date_time preserving type ) as CreationDateTime,
      @Consumption.hidden: true
      cast( crea_uname as ehfnd_bo_crea_uname preserving type )         as CreatedByUser,
      @Consumption.hidden: true
      cast( lchg_date_time as ehfnd_bo_lchg_date_time preserving type ) as LastChangeDateTime,
      @Consumption.hidden: true
      cast( lchg_uname as ehfnd_bo_lchg_uname preserving type )         as LastChangedByUser,
      @Semantics.language: true
      language                                                          as Language,
      @Semantics.text: true
      text                                                              as EHSLocationName,

      _EHSLocationRevisionBasic
}
```
