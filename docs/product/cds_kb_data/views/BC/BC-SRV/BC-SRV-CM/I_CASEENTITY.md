---
name: I_CASEENTITY
description: "Case Entiry"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEENTITY')/$value
semantic_en: "Case Entiry"
semantic_vi: "Case Entiry — CDS view giao diện dựa trên scmg_t_case."
keywords:
  - "case"
  - "entiry"
  - "unique"
  - "record"
  - "persistent"
  - "note"
  - "process"
  - "route"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASEENTITY

**Case Entiry**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEENTITY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUniqueID` | ✓ | |  | `case_guid` | `CHAR(32)` | Technical Case Key (Case GUID) |
| `CaseRecordPersistentID` |  | |  | `record_pdir` | `CHAR(32)` | Record POID ID |
| `CaseNotePersistentID` |  | |  | `note_pdir` | `CHAR(32)` | Note POID ID |
| `CaseProcessRouteID` |  | |  | `wfpthid` | `NUMC(12)` | Process Route ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEENTITY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEENTITY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEENTITY'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Entiry'
//@Analytics. dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseUniqueID'
define view I_Caseentity
  as select from scmg_t_case


{
  key  scmg_t_case.case_guid   as CaseUniqueID,
       scmg_t_case.record_pdir as CaseRecordPersistentID,
       scmg_t_case.note_pdir   as CaseNotePersistentID,
       scmg_t_case.wfpthid     as CaseProcessRouteID

}
```
