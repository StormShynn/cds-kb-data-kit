---
name: I_CURRENTEHSPARENTLOCATIONID
description: "This CDS view retrieves the location ID of the current or parent location. This CDS view provides the data to answer the following business questions: Which are the location IDs in my location hierarchy? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTEHSPARENTLOCATIONID')/$value
semantic_en: "This CDS view retrieves the location ID of the current or parent location. This CDS view provides the data to answer the following business questions: Which are the location IDs in my location hierarchy? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Current EHS Location and Parent ID — CDS view giao diện dựa trên I_CurrentEHSLocationPath."
keywords:
  - "current"
  - "ehs"
  - "location"
  - "and"
  - "parent"
  - "superior"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_CURRENTEHSPARENTLOCATIONID

**This CDS view retrieves the location ID of the current or parent location. This CDS view provides the data to answer the following business questions: Which are the location IDs in my location hierarchy? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTEHSPARENTLOCATIONID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` | ✓ | |  |  | `RAW(16)` | Location |
| `EHSSuperiorLocationUUID` | ✓ | |  |  | `RAW(16)` | Location |
| `EHSLocationID` |  | |  | `case when _EHSLocationParentRoot.EHSLocationID is not null then _EHSLocationParentRoot.EHSLocationID when _EHSLocationRoot.EHSLocationID is not null then _EHSLocationRoot.EHSLocationID end` | `CHAR(20)` | Location ID |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationParentRoot` | `I_EHSLocationRoot` | [0..1] |
| `_EHSLocationRoot` | `I_EHSLocationRoot` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTEHSPARENTLOCATIONID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTEHSPARENTLOCATIONID')/$value)*

```abap
@EndUserText.label: 'Current EHS Location and Parent ID'
@VDM.viewType: #COMPOSITE

@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'ILOCANDPARID'
@AbapCatalog.compiler.compareFilter: true

// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

// used for BOBF Master Data Object
@ObjectModel.usageType:{ serviceQuality: #C,        // < 15 msec
                         sizeCategory:  #M,         // < 100.000
                         dataClass: #MASTER }

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: { modelingPattern: #NONE,
                supportedCapabilities: [ 'SQL_DATA_SOURCE' ] }

define view I_CurrentEHSParentLocationID
  as select from I_CurrentEHSLocationPath
  association [0..1] to I_EHSLocationRoot as _EHSLocationParentRoot on $projection.EHSSuperiorLocationUUID = _EHSLocationParentRoot.EHSLocationUUID
  association [1..1] to I_EHSLocationRoot as _EHSLocationRoot       on $projection.EHSLocationUUID = _EHSLocationRoot.EHSLocationUUID
{
  key EHSLocationUUID,

  key EHSSuperiorLocationUUID,

      case
        when _EHSLocationParentRoot.EHSLocationID is not null then _EHSLocationParentRoot.EHSLocationID
        when _EHSLocationRoot.EHSLocationID is not null then _EHSLocationRoot.EHSLocationID
      end as EHSLocationID

}
union select from I_SAPClient // this generates a dummy empty location -> it is in case when Location ID is space in the authorization object
{
  key cast( hextobin( '00000000000000000000000000000000' ) as ehfnd_location_uuid_ref preserving type ) as EHSLocationUUID,
  key cast( hextobin( '00000000000000000000000000000000' ) as ehfnd_location_uuid_ref preserving type ) as EHSSuperiorLocationUUID,

      ''                                                                                                as EHSLocationID
}
where
  I_SAPClient.sapclient = $session.client
```
