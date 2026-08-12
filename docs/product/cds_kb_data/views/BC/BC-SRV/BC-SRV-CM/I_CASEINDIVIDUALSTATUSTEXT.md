---
name: I_CASEINDIVIDUALSTATUSTEXT
description: "Case Individual Status Text"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEINDIVIDUALSTATUSTEXT')/$value
semantic_en: "Case Individual Status Text"
semantic_vi: "Case Individual Status Text — CDS view giao diện dựa trên scmgstatprofst."
keywords:
  - "case"
  - "individual"
  - "status"
  - "text"
  - "profile"
  - "language"
  - "name"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASEINDIVIDUALSTATUSTEXT

**Case Individual Status Text**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEINDIVIDUALSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseStatusProfile` | ✓ | |  | `profile_id` | `CHAR(8)` | Case: Status Profile |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CaseStatus` | ✓ | |  | `stat_orderno` | `NUMC(2)` | Case: Status |
| `CaseStatusName` |  | |  | `stat_ordno_descr` | `CHAR(40)` | Case: Status Description |
| `_Language` | | ✓ | | | | |
| `_CaseStatusProfile` | | ✓ | | | | |
| `_CaseIndividual` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CaseStatusProfile` | `I_CaseStatusProfile` | [0..1] |
| `_CaseIndividual` | `I_Caseindividualstatus` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEINDIVIDUALSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEINDIVIDUALSTATUSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEISTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Individual Status Text'
@ObjectModel.dataCategory: #TEXT
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseStatus'
define view I_CaseIndividualStatusText
  as select from scmgstatprofst


  association [0..1] to I_Language    as _Language          on  $projection.Language = _Language.Language

  association [0..1] to I_CaseStatusProfile  as _CaseStatusProfile on  $projection.CaseStatusProfile = _CaseStatusProfile.CaseStatusProfile

  association [0..*] to I_Caseindividualstatus as _CaseIndividual  
    on  $projection.CaseStatus        = _CaseIndividual.CaseSystemStatus
    and $projection.CaseStatusProfile = _CaseIndividual.CaseStatusProfile
{
         @ObjectModel.foreignKey.association: '_CaseStatusProfile'
  key  scmgstatprofst.profile_id                as CaseStatusProfile,

        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language: true
  key  langu                                    as Language,

        @ObjectModel.foreignKey.association: '_CaseIndividual'
  key  scmgstatprofst.stat_orderno              as CaseStatus,

        @Semantics.text: true
       scmgstatprofst.stat_ordno_descr          as CaseStatusName,


       _Language,
       _CaseStatusProfile,
       _CaseIndividual
}
```
