---
name: I_EWM_BUSCNTXTEXECSTEPTEXT
description: "Business Context Execution Step - Text"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSCNTXTEXECSTEPTEXT')/$value
semantic_en: "Business Context Execution Step - Text"
semantic_vi: "Business Context Execution Step - Text — CDS view giao diện dựa trên Business Context Execution Step - Text."
keywords:
  - "business"
  - "context"
  - "execution"
  - "step"
  - "text"
  - "language"
  - "exec"
  - "name"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_BUSCNTXTEXECSTEPTEXT

**Business Context Execution Step - Text**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSCNTXTEXECSTEPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `BusinessContextExecutionStep` | ✓ | |  | `prmode` | `CHAR(2)` | Execution Step in Business Context |
| `BusinessContextExecStepName` |  | |  | `descr` | `CHAR(40)` | Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSCNTXTEXECSTEPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSCNTXTEXECSTEPTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEWMBCEXECSTEPT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Business Context Execution Step - Text'


@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: ['BusinessContextExecutionStep']
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
define view I_EWM_BusCntxtExecStepText
  as select from /scwm/texecstept as  BusCntxtExecStepText
{
  @Semantics.language: true
  key langu   as  Language,
  key prmode  as  BusinessContextExecutionStep,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      descr   as  BusinessContextExecStepName
}
```
