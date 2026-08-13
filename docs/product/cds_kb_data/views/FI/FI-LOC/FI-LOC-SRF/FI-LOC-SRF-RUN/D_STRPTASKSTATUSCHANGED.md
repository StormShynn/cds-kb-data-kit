---
name: D_STRPTASKSTATUSCHANGED
description: "D Strptaskstatuschanged"
semantic_vi: "View D_STRPTASKSTATUSCHANGED hiển thị các thay đổi trạng thái nhiệm vụ báo cáo, cung cấp thông tin về thực thể báo cáo, loại báo cáo, trạng thái và ngày hạn. Nó có thể được sử dụng để theo dõi và phân tích các thay đổi trạng thái nhiệm vụ báo cáo theo thời gian."
keywords:
  - "status"
  - "reporting"
  - "task"
  - "fi"
  - "fi-loc"
  - "fi-loc-srf"
  - "status change"
  - "trạng thái"
  - "nhiệm vụ báo cáo"
  - "thực thể báo cáo"
  - "loại báo cáo"
  - "trạng thái nhiệm vụ"
semantic_en: "The D_STRPTASKSTATUSCHANGED view exposes status changes of reporting tasks, providing information on the reporting entity, category, status, and due date. It can be used to track and analyze reporting task status changes over time."
app_component: FI-LOC-SRF-RUN
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-SRF
  - status
  - component:FI-LOC-SRF-RUN
  - lob:Finance
---
# D_STRPTASKSTATUSCHANGED

**D Strptaskstatuschanged**

| Property | Value |
|---|---|
| App Component | `FI-LOC-SRF-RUN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatryRptgEntity` |  | |  | `srf_reporting_entity` |  |  |
| `StatryRptCategory` |  | |  | `srf_rep_cat_id` |  |  |
| `StatryRptTaskStatus` |  | |  | `srf_reporting_status` |  |  |
| `StatryRptTaskStatusText` |  | |  | `srf_task_status_text` |  |  |
| `StatryRptTaskDueDate` |  | |  | `srf_due_date` |  |  |
| `StatryRptTaskPeriodStartDate` |  | |  | `srf_rpg_period_start_date` |  |  |
| `StatryRptTaskPeriodEndDate` |  | |  | `srf_rpg_period_end_date` |  |  |
| `StatryRptgReportingYear` |  | |  | `srf_reporting_year` |  |  |
| `StatryRptClassificationId` |  | |  | `srf_classification_id` |  |  |
| `StatryRptActivityPhase` |  | |  | `srf_rep_cat_phase` |  |  |
| `Country` |  | |  | `land1` |  |  |
| `Region` |  | |  | `regio` |  |  |
| `StatryRptAgencyID` |  | |  | `srf_agency_id` |  |  |
| `StatryRptIntegScenario` |  | |  | `srf_ext_integration_scenario` |  |  |

## Source Code

```abap
@EndUserText.label: 'Statutory reporting task status changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'StatutoryReportingTask'
define abstract entity D_StRpTaskStatusChanged
{
StatryRptgEntity              : srf_reporting_entity ; 
StatryRptCategory             : srf_rep_cat_id;
StatryRptTaskStatus           : srf_reporting_status;  --NOS/INP/CMP (NOS(Not Started)/GOD(In Process)/SOK(Completed) )
StatryRptTaskStatusText       : srf_task_status_text;  --‘Not Started’/ ‘In Process’ / ‘Completed’
StatryRptTaskDueDate          : srf_due_date;               
StatryRptTaskPeriodStartDate  : srf_rpg_period_start_date; 
StatryRptTaskPeriodEndDate    : srf_rpg_period_end_date;   
StatryRptgReportingYear       : srf_reporting_year; 
StatryRptClassificationId     : srf_classification_id;  
StatryRptActivityPhase        : srf_rep_cat_phase;
Country                       : land1;
Region                        : regio;
StatryRptAgencyID             : srf_agency_id;
StatryRptIntegScenario        : srf_ext_integration_scenario;
}
```
