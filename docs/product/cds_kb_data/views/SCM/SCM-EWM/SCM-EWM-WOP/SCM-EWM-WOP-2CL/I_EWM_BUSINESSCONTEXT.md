---
name: I_EWM_BUSINESSCONTEXT
description: "This CDS view provides information about business contexts in your warehouse."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSCONTEXT')/$value
semantic_en: "This CDS view provides information about business contexts in your warehouse."
semantic_vi: "Business Identification — CDS view giao diện dựa trên Business Identification."
keywords:
  - "business"
  - "identification"
  - "context"
  - "document"
  - "category"
  - "delivery"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - bo:companycode
---
# I_EWM_BUSINESSCONTEXT

**This CDS view provides information about business contexts in your warehouse.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSCONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessContext` | ✓ | |  | `buscon` | `CHAR(3)` | Business Context |
| `DocumentCategory` |  | |  | `doccat_dlv` | `CHAR(3)` | Document Category |
| `EWMDeliveryDocumentCategory` |  | |  | `doccat_dlv` | `CHAR(3)` | Document Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EWM_BusinessContextText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSCONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSCONTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEWMBUSCNTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Business Identification'

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'BusinessContext'
@Analytics.dataCategory: #DIMENSION
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@Metadata.ignorePropagatedAnnotations:true
define view I_EWM_BusinessContext
  as select from /scwm/tbusid as  BusinessContext
  association [0..*] to I_EWM_BusinessContextText  as  _Text   on  $projection.BusinessContext = _Text.BusinessContext
{
  @ObjectModel.text.association: '_Text'
  key buscon      as  BusinessContext,
      @VDM.lifecycle.status: #DEPRECATED 
      @VDM.lifecycle.successor: 'EWMDeliveryDocumentCategory' 
      doccat_dlv  as  DocumentCategory,
      doccat_dlv  as  EWMDeliveryDocumentCategory,
      _Text
}
```
