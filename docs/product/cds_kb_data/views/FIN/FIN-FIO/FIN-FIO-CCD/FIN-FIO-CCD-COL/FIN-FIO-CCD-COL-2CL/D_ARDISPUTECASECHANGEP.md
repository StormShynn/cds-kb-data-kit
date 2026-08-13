---
name: D_ARDISPUTECASECHANGEP
description: "D Ardisputecasechangep"
semantic_vi: "View D_ARDISPUTECASECHANGEP hiển thị dữ liệu liên quan đến thay đổi trường hợp tranh chấp, bao gồm chi tiết trường hợp và thông tin người điều phối. Nó được sử dụng khi quản lý tranh chấp và trường hợp liên quan."
keywords:
  - "dispute case"
  - "tranh chấp trường hợp"
  - "dispute case change"
  - "thay đổi trường hợp tranh chấp"
  - "case details"
  - "chi tiết trường hợp"
  - "case coordinator"
  - "người điều phối trường hợp"
  - "sap cds"
  - "cds view"
  - "fin-fio-ccd-col-2cl"
  - "fin"
semantic_en: "The D_ARDISPUTECASECHANGEP CDS view exposes data related to dispute case changes, including case details and coordinator information. It is used when managing disputes and their associated cases."
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - dispute
  - component:FIN-FIO-CCD-COL-2CL
  - lob:Other
---
# D_ARDISPUTECASECHANGEP

**D Ardisputecasechangep**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  | `scmg_case_guid` |  |  |
| `DisputeCaseCoordinator` |  | |  | `udm_coordinator` |  |  |
| `DisputeCaseRootCause` |  | |  | `udm_root_ccode` |  |  |
| `CaseProcessingDeadlineDate` |  | |  | `udm_due_date` |  |  |
| `CustomerDisputedAmount` |  | |  | `udm_custdisp_amt` |  |  |
| `CustomerDisputedCurrency` |  | |  | `udm_custdisp_curr` |  |  |
| `ContactPersonName` |  | |  | `udm_contact_name` |  |  |
| `ContactPersonEmailAddress` |  | |  | `udm_contact_email` |  |  |
| `ContactPersonPhoneNumber` |  | |  | `udm_contact_phone` |  |  |
| `CaseExternalReference` |  | |  | `scmg_ext_ref` |  |  |
| `CasePlannedCloseDate` |  | |  | `scmg_plan_end_date` |  |  |
| `CaseProcessor` |  | |  | `scmg_processor` |  |  |
| `CaseResponsible` |  | |  | `scmg_responsible` |  |  |
| `CaseTitle` |  | |  | `scmg_case_title` |  |  |
| `CaseEscalationReason` |  | |  | `scmg_escal_reason` |  |  |
| `CaseCategory` |  | |  | `scmg_category` |  |  |
| `CasePriority` |  | |  | `scmg_priority` |  |  |
| `CaseStatus` |  | |  | `scmgstatusonr` |  |  |
| `CaseReason` |  | |  | `scmg_reason_code` |  |  |
| `D_ARDisputeCaseChangeNoteP` |  | |  | `_Notes : composition [0..*] of D_ARDisputeCaseChangeNoteP` |  |  |
| `D_ARDisputeCaseChangeAttchP` |  | |  | `_Attachments : composition [0..*] of D_ARDisputeCaseChangeAttchP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameter for action Change'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define root abstract entity D_ARDisputeCaseChangeP
{
  DisputeCaseUUID            : scmg_case_guid;
  DisputeCaseCoordinator     : udm_coordinator;
  DisputeCaseRootCause       : udm_root_ccode;
  CaseProcessingDeadlineDate : udm_due_date;
  @Semantics.amount.currencyCode: 'CustomerDisputedCurrency'
  CustomerDisputedAmount     : udm_custdisp_amt;
  CustomerDisputedCurrency   : udm_custdisp_curr;
  ContactPersonName          : udm_contact_name;
  ContactPersonEmailAddress  : udm_contact_email;
  ContactPersonPhoneNumber   : udm_contact_phone;
  CaseExternalReference      : scmg_ext_ref;
  CasePlannedCloseDate       : scmg_plan_end_date;
  CaseProcessor              : scmg_processor;
  CaseResponsible            : scmg_responsible;
  CaseTitle                  : scmg_case_title;
  CaseEscalationReason       : scmg_escal_reason;
  CaseCategory               : scmg_category;
  CasePriority               : scmg_priority;
  CaseStatus                 : scmgstatusonr;
  CaseReason                 : scmg_reason_code;

  _Notes                     : composition [0..*] of D_ARDisputeCaseChangeNoteP;
  _Attachments               : composition [0..*] of D_ARDisputeCaseChangeAttchP;
}
```
