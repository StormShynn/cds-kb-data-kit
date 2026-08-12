---
name: I_EWM_BUSINESSCONTEXTTEXT
description: "Business Context - Text"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSCONTEXTTEXT')/$value
semantic_en: "Business Context - Text"
semantic_vi: "Business Context - Text — CDS view giao diện dựa trên Business Context - Text."
keywords:
  - "business"
  - "context"
  - "text"
  - "language"
  - "name"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_BUSINESSCONTEXTTEXT

**Business Context - Text**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSCONTEXTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `BusinessContext` | ✓ | |  | `buscon` | `CHAR(3)` | Business Context |
| `BusinessContextName` |  | |  | `descr` | `CHAR(40)` | Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSCONTEXTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSCONTEXTTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEWMBUSCNTXTT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Business Context - Text'

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: ['BusinessContext']
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT 

@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
define view I_EWM_BusinessContextText
  as select from /scwm/tbusidt as BusinessContextText
{
  @Semantics.language: true
  key langu   as  Language,
  key buscon  as  BusinessContext,
  @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      descr   as  BusinessContextName
}
```
