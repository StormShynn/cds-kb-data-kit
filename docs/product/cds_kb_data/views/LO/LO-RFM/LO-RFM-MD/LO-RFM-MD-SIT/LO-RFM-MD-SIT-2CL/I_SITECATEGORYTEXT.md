---
name: I_SITECATEGORYTEXT
description: "This CDS view allows you to display or access the site category information in your SAP environment. This view provides the following supported values for SiteCategory:Site Category Values Value Meaning A Store B Distribution Center This CDS view provides the data to answer the following business questions: What site categories are available for enterprise search in the system? Which sites belong to a specific category? How can you retrieve or filter sites based on their site category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITECATEGORYTEXT')/$value
semantic_en: "This CDS view allows you to display or access the site category information in your SAP environment. This view provides the following supported values for SiteCategory:Site Category Values Value Meaning A Store B Distribution Center This CDS view provides the data to answer the following business questions: What site categories are available for enterprise search in the system? Which sites belong to a specific category? How can you retrieve or filter sites based on their site category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Site Category Text for Site ESH — CDS view giao diện dựa trên dd07t."
keywords:
  - "site"
  - "category"
  - "text"
  - "for"
  - "esh"
  - "language"
  - "name"
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
# I_SITECATEGORYTEXT

**This CDS view allows you to display or access the site category information in your SAP environment. This view provides the following supported values for SiteCategory:Site Category Values Value Meaning A Store B Distribution Center This CDS view provides the data to answer the following business questions: What site categories are available for enterprise search in the system? Which sites belong to a specific category? How can you retrieve or filter sites based on their site category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITECATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as w_akvst preserving type)` | `CHAR(1)` | Processing status of the promotion |
| `Language` | ✓ | |  | `cast( ddlanguage as langu preserving type )` | `LANG(1)` | Language Key |
| `SiteCategoryName` |  | |  | `cast(ddtext as sitecategoryname preserving type)` | `CHAR(60)` | Site Category |
| `_SiteCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SiteCategory` | `I_SiteCategory` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITECATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITECATEGORYTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISITECATTEXT'
@EndUserText.label: 'Site Category Text for Site ESH'

@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'SiteCategory',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #META
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ] }*/
define view I_SiteCategoryText
  as select from dd07t

  association [1..1] to I_SiteCategory as _SiteCategory on $projection.SiteCategory = _SiteCategory.SiteCategory
  association [1..1] to I_Language         as _Language                 on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_SiteCategory'
  key cast(substring(domvalue_l, 1, 1) as w_akvst preserving type)
        as  SiteCategory,


      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( ddlanguage as langu preserving type )
        as  Language,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
      cast(ddtext as sitecategoryname preserving type)
        as  SiteCategoryName,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SiteCategory,
      _Language
}

where
      domname  = 'VLFKZ'
  and as4local = 'A'
```
