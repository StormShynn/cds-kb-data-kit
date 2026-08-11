---
name: I_ENGMNTPROJFINPLANSTATUSTEXT
description: "This CDS view retrieves the status text for forecasts of customer projects. This CDS view provides the prerequisites for answering the following business questions: What is the descriptive text of a forecast status?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFINPLANSTATUSTEXT')/$value
semantic_en: "This CDS view retrieves the status text for forecasts of customer projects. This CDS view provides the prerequisites for answering the following business questions: What is the descriptive text of a forecast status?"
semantic_vi: "Forecast Status of Engmnt Project - Text — CDS view giao diện dựa trên Forecast Status of Engmnt Project - Text."
keywords:
  - "forecast"
  - "status"
  - "engmnt"
  - "project"
  - "text"
  - "engagement"
  - "review"
  - "language"
  - "proj"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - project
  - bo:companycode
---
# I_ENGMNTPROJFINPLANSTATUSTEXT

**This CDS view retrieves the status text for forecasts of customer projects. This CDS view provides the prerequisites for answering the following business questions: What is the descriptive text of a forecast status?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFINPLANSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectReviewStatus` | ✓ | |  | `/cpd/fc_status_t.status_id` | `CHAR(4)` | Status ID |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `EngagementProjReviewStatusText` |  | |  | `/cpd/fc_status_t.description` | `CHAR(40)` | Status Description |
| `_EngmntProjFinPlanStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngmntProjFinPlanStatus` | `I_EngmntProjFinPlanStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFINPLANSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFINPLANSTATUSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IENGTFPSTATTEXT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Forecast Status of Engmnt Project - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'EngagementProjectReviewStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.buffering.numberOfKeyFields: 000
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {modelingPattern: #LANGUAGE_DEPENDENT_TEXT, 
               supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                       #CDS_MODELING_ASSOCIATION_TARGET,
                                       #CDS_MODELING_DATA_SOURCE,
                                       #SQL_DATA_SOURCE]
}
define view I_EngmntProjFinPlanStatusText 
       as select from /cpd/fc_status_t 
       association [1..1] to I_EngmntProjFinPlanStatus as _EngmntProjFinPlanStatus on $projection.EngagementProjectReviewStatus = _EngmntProjFinPlanStatus.EngagementProjectReviewStatus    
       association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_EngmntProjFinPlanStatus'
  key /cpd/fc_status_t.status_id     as EngagementProjectReviewStatus,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras       as Language,
      @Semantics.text: true
      /cpd/fc_status_t.description as EngagementProjReviewStatusText,
      _Language,
      _EngmntProjFinPlanStatus
}
```
