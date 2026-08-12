---
name: I_ENTPROJELMNTBLOCKFUNC_3
description: "Entprojelmntblockfunc 3"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJELMNTBLOCKFUNC_3

**Entprojelmntblockfunc 3**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectElementUUID` | ✓ | |  | `TaskUUID` |  |  |
| `ProjectUUID` |  | |  |  |  |  |
| `EntProjTimeRecgIsBlkd` |  | |  |  |  |  |
| `EntProjStaffExpensePostgIsBlkd` |  | |  |  |  |  |
| `EntProjServicePostingIsBlkd` |  | |  |  |  |  |
| `EntProjOtherExpensePostgIsBlkd` |  | |  |  |  |  |
| `EntProjPurchasingIsBlkd` |  | |  |  |  |  |
| `_EnterpriseProject` | | ✓ | | | | |
| `_EnterpriseProjectElement` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Blocked Functions by Project Element'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  sapObjectNodeType.name: 'EntProjectElementBlockFunction'
}
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
  dataExtraction: {
    enabled: true
  }
}
define view entity I_EntProjElmntBlockFunc_3 as select from I_BlockFuncForEntProjElmnt as ProjElemBlkFnc
association of many to exact one I_EnterpriseProject as _EnterpriseProject on  $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
association of exact one to exact one I_EnterpriseProjectElement as _EnterpriseProjectElement on $projection.ProjectElementUUID = _EnterpriseProjectElement.ProjectElementUUID
{
  key TaskUUID as ProjectElementUUID,
  ProjectUUID,
  @Semantics.booleanIndicator:true
  EntProjTimeRecgIsBlkd,
  @Semantics.booleanIndicator:true      
  EntProjStaffExpensePostgIsBlkd,
  @Semantics.booleanIndicator:true
  EntProjServicePostingIsBlkd,
  @Semantics.booleanIndicator:true   
  EntProjOtherExpensePostgIsBlkd,
  @Semantics.booleanIndicator:true
  EntProjPurchasingIsBlkd,

  /* Associations */
  _EnterpriseProject,
  _EnterpriseProjectElement
}
```
