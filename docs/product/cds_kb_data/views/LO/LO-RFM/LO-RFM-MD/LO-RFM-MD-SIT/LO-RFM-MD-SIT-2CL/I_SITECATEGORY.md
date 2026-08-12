---
name: I_SITECATEGORY
description: "This CDS view allows you to display or access the site category information in your SAP environment. This view provides the following supported values for SiteCategory:Site Category Values Value Meaning A Store B Distribution Center This CDS view provides the data to answer the following business questions: What site categories are available for enterprise search in the system? Which sites belong to a specific category? How can you retrieve or filter sites based on their site category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITECATEGORY')/$value
semantic_en: "This CDS view allows you to display or access the site category information in your SAP environment. This view provides the following supported values for SiteCategory:Site Category Values Value Meaning A Store B Distribution Center This CDS view provides the data to answer the following business questions: What site categories are available for enterprise search in the system? Which sites belong to a specific category? How can you retrieve or filter sites based on their site category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Site Category for Site Enterprise Search — CDS view giao diện dựa trên dd07l."
keywords:
  - "site"
  - "category"
  - "for"
  - "enterprise"
  - "search"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - bo:plant
---
# I_SITECATEGORY

**This CDS view allows you to display or access the site category information in your SAP environment. This view provides the following supported values for SiteCategory:Site Category Values Value Meaning A Store B Distribution Center This CDS view provides the data to answer the following business questions: What site categories are available for enterprise search in the system? Which sites belong to a specific category? How can you retrieve or filter sites based on their site category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITECATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as sitecategory preserving type)` | `CHAR(1)` | Site Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SiteCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITECATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITECATEGORY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISITECATEGORY'
@EndUserText.label: 'Site Category for Site Enterprise Search'

@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog.preserveKey:true

@VDM.viewType: #BASIC
@ObjectModel: {
    compositionRoot: true,
    representativeKey: 'SiteCategory',
    resultSet.sizeCategory: #XS,
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #META
}
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */


define view I_SiteCategory
  as select from dd07l
  
  association [0..*] to I_SiteCategoryText as _Text on $projection.SiteCategory = _Text.SiteCategory
{

      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as sitecategory
   preserving type)
        as SiteCategory,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
      
}
where
      domname  = 'VLFKZ'
  and as4local = 'A'
```
