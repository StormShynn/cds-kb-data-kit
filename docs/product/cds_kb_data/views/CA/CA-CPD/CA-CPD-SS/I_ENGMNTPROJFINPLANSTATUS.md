---
name: I_ENGMNTPROJFINPLANSTATUS
description: "This CDS view retrieves the status of forecasts for customer projects. This CDS view provides the prerequisites for answering the following business questions: Has a project forecast been initiated for a customer project? What is the status of the project forecast?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFINPLANSTATUS')/$value
semantic_en: "This CDS view retrieves the status of forecasts for customer projects. This CDS view provides the prerequisites for answering the following business questions: Has a project forecast been initiated for a customer project? What is the status of the project forecast?"
semantic_vi: "Forecast Status of Engagement Project — CDS view giao diện dựa trên Forecast Status of Engagement Project."
keywords:
  - "forecast"
  - "status"
  - "engagement"
  - "project"
  - "review"
  - "engmnt"
  - "proj"
  - "initial"
  - "perd"
  - "start"
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
# I_ENGMNTPROJFINPLANSTATUS

**This CDS view retrieves the status of forecasts for customer projects. This CDS view provides the prerequisites for answering the following business questions: Has a project forecast been initiated for a customer project? What is the status of the project forecast?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFINPLANSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectReviewStatus` | ✓ | |  | `/cpd/fc_prf_st.status_id` | `CHAR(4)` | Status ID |
| `EngmntProjReviewStsIsInitial` |  | |  | `/cpd/fc_prf_st.start_status` | `CHAR(1)` | Initial Status |
| `EngmntProjReviewStsIsPerdStart` |  | |  | `/cpd/fc_prf_st.forecast_pr_start` | `CHAR(1)` | Initial Status |
| `EngmntProjReviewStsIsPerdEnd` |  | |  | `/cpd/fc_prf_st.forecast_pr_end` | `CHAR(1)` | Reverse Completion |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EngmntProjFinPlanStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFINPLANSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJFINPLANSTATUS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IENGTFPSTATUS'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION}
@EndUserText.label: 'Forecast Status of Engagement Project'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'EngagementProjectReviewStatus'
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
                                       #SQL_DATA_SOURCE]
}
define view I_EngmntProjFinPlanStatus as select from /cpd/fc_prf_st 
              association [0..*] to I_EngmntProjFinPlanStatusText as _Text on $projection.EngagementProjectReviewStatus = _Text.EngagementProjectReviewStatus {
   @ObjectModel.text.association: '_Text'
  key  /cpd/fc_prf_st.status_id             as EngagementProjectReviewStatus,
       /cpd/fc_prf_st.start_status          as EngmntProjReviewStsIsInitial,
       /cpd/fc_prf_st.forecast_pr_start     as EngmntProjReviewStsIsPerdStart,
       /cpd/fc_prf_st.forecast_pr_end       as EngmntProjReviewStsIsPerdEnd,
        _Text
     
}where /cpd/fc_prf_st.profile_id = '0PFS'
```
