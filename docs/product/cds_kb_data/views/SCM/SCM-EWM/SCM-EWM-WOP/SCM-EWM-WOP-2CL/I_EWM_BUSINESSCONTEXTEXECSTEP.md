---
name: I_EWM_BUSINESSCONTEXTEXECSTEP
description: "Execution Step in Business Context"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSCONTEXTEXECSTEP')/$value
semantic_en: "Execution Step in Business Context"
semantic_vi: "Execution Step in Business Context — CDS view giao diện dựa trên Execution Step in Business Context."
keywords:
  - "execution"
  - "step"
  - "business"
  - "context"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_BUSINESSCONTEXTEXECSTEP

**Execution Step in Business Context**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSCONTEXTEXECSTEP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessContextExecutionStep` | ✓ | |  | `prmode` | `CHAR(2)` | Execution Step in Business Context |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EWM_BusCntxtExecStepText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSCONTEXTEXECSTEP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_BUSINESSCONTEXTEXECSTEP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEWMBCEXECSTEP'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Execution Step in Business Context'

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'BusinessContextExecutionStep'
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
define view I_EWM_BusinessContextExecStep
  as select from /scwm/texecstep as  BusCntxtExecStep
  association [0..*] to I_EWM_BusCntxtExecStepText
  as  _Text   on  $projection.BusinessContextExecutionStep = _Text.BusinessContextExecutionStep
{
  @ObjectModel.text.association: '_Text'
  key prmode    as  BusinessContextExecutionStep,
  _Text
}
```
