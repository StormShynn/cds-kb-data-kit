---
name: D_ENTPROJCOPYTOACTIVEDOCUMENTP
description: D Entprojcopytoactivedocumentp
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - transactional-processing
  - document
  - component:PPM-SCL-STR
  - lob:Other
---
# D_ENTPROJCOPYTOACTIVEDOCUMENTP

**D Entprojcopytoactivedocumentp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EntProjDemandCopyIsRequested` |  | |  | `boole_d` |
| `EntProjSettlmtRuleCpyIsReqd` |  | |  | `boole_d` |
| `Project` |  | |  | `/s4ppm/project_id` |
| `ProjectName` |  | |  | `/s4ppm/tv_name` |
| `ProjectStartDate` |  | |  | `/s4ppm/tv_ltst_start_date` |
| `ProjectEndDate` |  | |  | `/s4ppm/tv_ltst_end_date` |
| `CustomerUUID` |  | |  | `bu_partner_guid` |
| `EnterpriseProjectServiceOrg` |  | |  | `/s4ppm/pws_ws_org_unit_id` |
| `ResponsibleCostCenter` |  | |  | `ps_fkstl` |
| `ProjectManagerUUID` |  | |  | `bu_partner_guid` |
| `ProjectCurrency` |  | |  | `ps_s4_waers` |
| `EntProjectIsConfidential` |  | |  | `/s4ppm/tv_project_confidential` |
| `RestrictedTimePosting` |  | |  | `/s4ppm/restrict_time_posting` |

## Source Code

```abap
@EndUserText.label: 'Enterprise Project Copy to Active Doc.'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]

@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]

define root abstract entity D_EntProjCopyToActiveDocumentP
{
  EntProjDemandCopyIsRequested : boole_d;
  EntProjSettlmtRuleCpyIsReqd  : boole_d;
  Project                      : /s4ppm/project_id;
  ProjectName                  : /s4ppm/tv_name;
  ProjectStartDate             : /s4ppm/tv_ltst_start_date;
  ProjectEndDate               : /s4ppm/tv_ltst_end_date;
  CustomerUUID                 : bu_partner_guid;
  EnterpriseProjectServiceOrg  : /s4ppm/pws_ws_org_unit_id;
  ResponsibleCostCenter        : ps_fkstl;
  ProjectManagerUUID           : bu_partner_guid;
  ProjectCurrency              : ps_s4_waers;
  EntProjectIsConfidential     : /s4ppm/tv_project_confidential;
  RestrictedTimePosting        : /s4ppm/restrict_time_posting;
}
```
