---
name: I_EHSCMPLNCSCENAUTHZNFIELDS
description: "EHS Compliance Scenario Authorization Fields"
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCMPLNCSCENAUTHZNFIELDS')/$value
semantic_en: "EHS Compliance Scenario Authorization Fields"
semantic_vi: "EHS Compliance Scenario Authorization Fields — CDS view giao diện dựa trên I_EHSCmplncScenRoot."
keywords:
  - "ehs"
  - "compliance"
  - "scenario"
  - "authorization"
  - "fields"
  - "cmplnc"
  - "scen"
  - "orign"
  - "root"
  - "task"
  - "host"
  - "object"
  - "instance"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - EHS-SUS
  - EHS-SUS-EM
  - interface-view
---
# I_EHSCMPLNCSCENAUTHZNFIELDS

**EHS Compliance Scenario Authorization Fields**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCMPLNCSCENAUTHZNFIELDS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSCmplncScenOrignRootUUID` | ✓ | |  |  | `RAW(16)` | Cross Revision Key |
| `EHSTaskHostObjectInstance` |  | |  | `cast(bintohex(EHSCmplncScenOrignRootUUID) as sibfboriid)` | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCMPLNCSCENAUTHZNFIELDS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCMPLNCSCENAUTHZNFIELDS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEHSCPLSCAUTH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'EHS Compliance Scenario Authorization Fields'
@ObjectModel.usageType:{ dataClass: #TRANSACTIONAL,
                         serviceQuality: #D,
                         sizeCategory: #XL }
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #NONE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
define view I_EHSCmplncScenAuthznFields
  as select from I_EHSCmplncScenRoot
{
  key EHSCmplncScenOrignRootUUID,
      cast(bintohex(EHSCmplncScenOrignRootUUID) as sibfboriid) as EHSTaskHostObjectInstance,

      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationType,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationStatus,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].EHSLocationAuthorizationGroup,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].BusinessArea,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].Plant,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].CostCenter,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].CompanyCode,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].ControllingArea,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].Country,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date].Region,

      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._EHSLocationType,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._EHSLocationStatus,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._EHSLocationAuthGroup,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._BusinessArea,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._Plant,
      //      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._CostCenter,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._CompanyCode,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._ControllingArea,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._Country,
      _EHSLocationRevision[1: RevisionStartDate <= $session.system_date and RevisionEndDate >= $session.system_date]._Region

}
where
  RevisionEndDate = '99991231'
// where RevisionStartDate <= $session.system_date
//    and RevisionEndDate >= $session.system_date
```
