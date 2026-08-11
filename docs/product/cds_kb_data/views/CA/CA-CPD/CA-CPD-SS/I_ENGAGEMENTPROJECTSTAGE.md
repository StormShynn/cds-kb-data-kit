---
name: I_ENGAGEMENTPROJECTSTAGE
description: "This CDS view provides information about the stage of a project."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTAGE')/$value
semantic_en: "This CDS view provides information about the stage of a project."
semantic_vi: "Stage of Engagement Project — CDS view giao diện dựa trên Stage of Engagement Project."
keywords:
  - "stage"
  - "engagement"
  - "project"
tags:
  - CA
  - bo:project
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - project
---
# I_ENGAGEMENTPROJECTSTAGE

**This CDS view provides information about the stage of a project.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectStage` | ✓ | |  | `mp_stg` | `CHAR(4)` | Commercial Project: Stage |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EngagementProjectStageText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTAGE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTAGE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IEPSTAGE'
@EndUserText.label: 'Stage of Engagement Project'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'EngagementProjectStage'
@ObjectModel.sapObjectNodeType.name: 'EngagementProjectStage'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.buffering.numberOfKeyFields: 000
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {modelingPattern: #ANALYTICAL_DIMENSION, 
               supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                       #CDS_MODELING_ASSOCIATION_TARGET,
                                       #CDS_MODELING_DATA_SOURCE,
                                       #SQL_DATA_SOURCE,
                                       #EXTRACTION_DATA_SOURCE]
}
define view I_EngagementProjectStage
  as select from /cpd/pwsc_mpstg
  association [0..*] to I_EngagementProjectStageText as _Text on $projection.EngagementProjectStage = _Text.EngagementProjectStage
{
       @ObjectModel.text.association: '_Text'
  key  mp_stg as EngagementProjectStage,

       _Text
}
```
