---
name: I_ENGAGEMENTPROJFINANCIALPLAN
description: "This CDS view provides the prerequisites for answering the following business questions: How many projects are being executed in my organization? When were the projects reviewed? What is the status of project forecast?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJFINANCIALPLAN')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many projects are being executed in my organization? When were the projects reviewed? What is the status of project forecast?"
semantic_vi: "Financial Plan of Engagement Project — CDS view giao diện dựa trên Financial Plan of Engagement Project."
keywords:
  - "financial"
  - "plan"
  - "engagement"
  - "project"
  - "proj"
  - "currency"
  - "unit"
  - "measure"
  - "last"
  - "change"
  - "date"
  - "time"
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - project
  - plan
---
# I_ENGAGEMENTPROJFINANCIALPLAN

**This CDS view provides the prerequisites for answering the following business questions: How many projects are being executed in my organization? When were the projects reviewed? What is the status of project forecast?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJFINANCIALPLAN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjFinPlanUUID` | ✓ | |  | `cast(EngagementProjFinancialPlan.db_key as /cpd/eng_pfp_db_key preserving type )` | `RAW(16)` | Financial Plan UUID |
| `EngagementProjectUUID` |  | |  | `cast(EngagementProjFinancialPlan.mp_id_int as /cpd/pfp_mp_id_int preserving type )` | `RAW(16)` | Engagement Project UUID |
| `Currency` |  | |  | `currency` | `CUKY(5)` | Plan Currency |
| `UnitOfMeasure` |  | |  | `proj_uom` | `UNIT(3)` | Unit of Measure for Display |
| `LastChangeDateTime` |  | |  | `cast(EngagementProjFinancialPlan.changed_on as /cpd/cpm_changedon)` | `DEC(15)` | Commercial Project Last Changed On |
| `LastChangedByUser` |  | |  | `changed_by` | `CHAR(12)` | Changed By |
| `EngmntProjReviewYearPeriod` |  | |  | `cast(EngagementProjFinancialPlan.review_period_sc as /cpd/pfp_review_year_period)` | `NUMC(7)` | Review Year Period |
| `EngagementProjectReviewStatus` |  | |  | `period_end_forecast_status` | `CHAR(10)` | Forecast Status ID |
| `_EngagementProject` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_EngagementProjectPlanData` | | ✓ | | | | |
| `_EngmntProjFinPlanStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProject` | `I_EngagementProject` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_WorkPackage` | `I_WorkPackage` | [0..*] |
| `_EngagementProjectPlanData` | `I_EngagementProjectPlanData` | [0..*] |
| `_EngmntProjFinPlanStatus` | `I_EngmntProjFinPlanStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJFINANCIALPLAN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJFINANCIALPLAN')/$value)*

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IEPFINANPLN'
@EndUserText.label: 'Financial Plan of Engagement Project'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@AccessControl.privilegedAssociations: [ '_WorkPackage','_EngagementProject' ]
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
define view I_EngagementProjFinancialPlan
  as select from /cpd/d_pfp_ph as EngagementProjFinancialPlan
  association [1..1] to I_EngagementProject         as _EngagementProject         on $projection.EngagementProjectUUID = _EngagementProject.EngagementProjectUUID
  association [0..1] to I_Currency                  as _Currency                  on $projection.Currency = _Currency.Currency
  association [0..*] to I_WorkPackage               as _WorkPackage               on $projection.EngagementProjFinPlanUUID = _WorkPackage.EngagementProjFinPlanUUID
  association [0..*] to I_EngagementProjectPlanData as _EngagementProjectPlanData on $projection.EngagementProjFinPlanUUID = _EngagementProjectPlanData.EngagementProjFinPlanUUID
  association [0..1] to I_EngmntProjFinPlanStatus   as _EngmntProjFinPlanStatus   on $projection.EngagementProjectReviewStatus = _EngmntProjFinPlanStatus.EngagementProjectReviewStatus
{

  key cast(EngagementProjFinancialPlan.db_key      as /cpd/eng_pfp_db_key preserving type ) as EngagementProjFinPlanUUID,
      cast(EngagementProjFinancialPlan.mp_id_int   as /cpd/pfp_mp_id_int  preserving type ) as EngagementProjectUUID,
      EngagementProjFinancialPlan.currency                                                  as Currency,
      EngagementProjFinancialPlan.proj_uom                                                  as UnitOfMeasure,
      @Semantics.dateTime:true
      @Semantics.systemDate.lastChangedAt:true
      cast(EngagementProjFinancialPlan.changed_on as /cpd/cpm_changedon)                    as LastChangeDateTime,
      EngagementProjFinancialPlan.changed_by                                                as LastChangedByUser,
      cast(EngagementProjFinancialPlan.review_period_sc as /cpd/pfp_review_year_period)     as EngmntProjReviewYearPeriod,
      EngagementProjFinancialPlan.period_end_forecast_status                                as EngagementProjectReviewStatus,

      _EngagementProject,
      _WorkPackage,
      _EngagementProjectPlanData,
      _Currency,
      _EngmntProjFinPlanStatus

}
```
