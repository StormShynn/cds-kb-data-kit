---
name: D_ARDISPUTECASECREATEP
description: D Ardisputecasecreatep
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - dispute
  - component:FIN-FIO-CCD-COL-2CL
  - lob:Other
---
# D_ARDISPUTECASECREATEP

**D Ardisputecasecreatep**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DisputeCaseCoordinator` |  | |  | `udm_coordinator` |
| `DisputeCaseRootCause` |  | |  | `udm_root_ccode` |
| `CaseProcessingDeadlineDate` |  | |  | `udm_due_date` |
| `CustomerDisputedAmount` |  | |  | `udm_custdisp_amt` |
| `CustomerDisputedCurrency` |  | |  | `udm_custdisp_curr` |
| `ContactPersonName` |  | |  | `udm_contact_name` |
| `ContactPersonEmailAddress` |  | |  | `udm_contact_email` |
| `ContactPersonPhoneNumber` |  | |  | `udm_contact_phone` |
| `Customer` |  | |  | `udm_kunnr` |
| `CompanyCode` |  | |  | `bukrs` |
| `CaseExternalReference` |  | |  | `scmg_ext_ref` |
| `CasePlannedCloseDate` |  | |  | `scmg_plan_end_date` |
| `CaseProcessor` |  | |  | `scmg_processor` |
| `CaseResponsible` |  | |  | `scmg_responsible` |
| `CaseTitle` |  | |  | `scmg_case_title` |
| `CaseEscalationReason` |  | |  | `scmg_escal_reason` |
| `CaseCategory` |  | |  | `scmg_category` |
| `CasePriority` |  | |  | `scmg_priority` |
| `CaseStatus` |  | |  | `scmgstatusonr` |
| `CaseReason` |  | |  | `scmg_reason_code` |
| `D_ARDsputCaseCrteCustDsputItmP` |  | |  | `_CustDsputItems : composition [0..*] of D_ARDsputCaseCrteCustDsputItmP` |
| `D_ARDisputeCaseCrteDsputdItmP` |  | |  | `_DisputedItems : composition [0..*] of D_ARDisputeCaseCrteDsputdItmP` |
| `D_ARDisputeCaseCreateNoteP` |  | |  | `_Notes : composition [0..*] of D_ARDisputeCaseCreateNoteP` |
| `D_ARDisputeCaseCreateAttchP` |  | |  | `_Attachments : composition [0..*] of D_ARDisputeCaseCreateAttchP` |

## Source Code

```abap
@EndUserText.label: 'Parameter for action CreateDisputeCase'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define root abstract entity D_ARDisputeCaseCreateP
{
  DisputeCaseCoordinator     : udm_coordinator;
  DisputeCaseRootCause       : udm_root_ccode;
  CaseProcessingDeadlineDate : udm_due_date;
  @Semantics.amount.currencyCode: 'CustomerDisputedCurrency'
  CustomerDisputedAmount     : udm_custdisp_amt;
  CustomerDisputedCurrency   : udm_custdisp_curr;
  ContactPersonName          : udm_contact_name;
  ContactPersonEmailAddress  : udm_contact_email;
  ContactPersonPhoneNumber   : udm_contact_phone;
  Customer                   : udm_kunnr;
  CompanyCode                : bukrs;
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

  _CustDsputItems            : composition [0..*] of D_ARDsputCaseCrteCustDsputItmP;
  _DisputedItems             : composition [0..*] of D_ARDisputeCaseCrteDsputdItmP;
  _Notes                     : composition [0..*] of D_ARDisputeCaseCreateNoteP;
  _Attachments               : composition [0..*] of D_ARDisputeCaseCreateAttchP;
}
```
