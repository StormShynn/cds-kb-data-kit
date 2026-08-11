---
name: I_COMMLPROJMGMTPLNGCAT
description: "Commercial Project Management Planning Category"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMLPROJMGMTPLNGCAT')/$value
semantic_en: "Commercial Project Management Planning Category"
semantic_vi: "Commercial Project Management Planning Category — CDS view giao diện dựa trên fcomc_category."
keywords:
  - "commercial"
  - "project"
  - "management"
  - "planning"
  - "category"
  - "plng"
  - "application"
  - "type"
  - "baseline"
  - "ongoing"
tags:
  - FI
  - bo:project
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - plan
  - project
---
# I_COMMLPROJMGMTPLNGCAT

**Commercial Project Management Planning Category**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMLPROJMGMTPLNGCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` | ✓ | |  | `category` | `CHAR(10)` | Plan Category |
| `PlngCategoryApplicationType` |  | |  | `application_type` | `NUMC(2)` | Application Type |
| `IsBaselinePlngCategory` |  | |  | `baseline` | `CHAR(1)` | Category is used for baseline plan version |
| `IsOngoingPlngCategory` |  | |  | `ongoing` | `CHAR(1)` | Category is used for ongoing plan version |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlanningCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMLPROJMGMTPLNGCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMLPROJMGMTPLNGCAT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Commercial Project Management Planning Category'
@Analytics: { dataCategory: #DIMENSION } //, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IFICPMCATEGORY'
@ObjectModel.representativeKey: 'PlanningCategory'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Metadata.ignorePropagatedAnnotations: true

define view I_CommlProjMgmtPlngCat
  as select from fcomc_category
    association [0..*] to I_PlanningCategoryText as _Text on $projection.PlanningCategory = _Text.PlanningCategory         
   {
  @ObjectModel.text.association: '_Text'
  key category             as PlanningCategory,
//    _Text.PlanningCategoryName as PlanningCategoryName,
      application_type     as PlngCategoryApplicationType,
      baseline             as IsBaselinePlngCategory,
      ongoing              as IsOngoingPlngCategory,
       
   _Text

} where application_type = '01' ;
```
