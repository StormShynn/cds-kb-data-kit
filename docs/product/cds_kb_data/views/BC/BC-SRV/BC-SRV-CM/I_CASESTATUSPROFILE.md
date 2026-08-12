---
name: I_CASESTATUSPROFILE
description: "Case Status Profile"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASESTATUSPROFILE')/$value
semantic_en: "Case Status Profile"
semantic_vi: "Case Status Profile — CDS view giao diện dựa trên scmgstatprof."
keywords:
  - "case"
  - "status"
  - "profile"
  - "object"
  - "type"
  - "user"
  - "schema"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - bo:companycode
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASESTATUSPROFILE

**Case Status Profile**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASESTATUSPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseStatusProfile` | ✓ | |  | `profile_id` | `CHAR(8)` | Case: Status Profile |
| `CaseStatusObjectType` |  | |  | `stat_obj_type` | `CHAR(3)` | Case: Status Object Type of Application (Central Stat. Mgmt) |
| `CaseUserStatusSchema` |  | |  | `stat_cust_scheme` | `CHAR(8)` | Case: User Status Schema (Central Status Administration) |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CaseStatusProfileText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASESTATUSPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASESTATUSPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASESSPROFILE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Status Profile'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseStatusProfile'
define view I_CaseStatusProfile
  as select from scmgstatprof

  association [0..*] to I_CaseStatusProfileText as _Text on $projection.CaseStatusProfile = _Text.CaseStatusProfile
{

      @ObjectModel.text.association: '_Text'
  key scmgstatprof.profile_id        as CaseStatusProfile,
   //   @EndUserText.label: 'Case Status Object Type of Application'
      scmgstatprof.stat_obj_type     as CaseStatusObjectType,
   //   @EndUserText.label: 'Case User Status Schema'
      scmgstatprof.stat_cust_scheme  as CaseUserStatusSchema,

      _Text
}
```
