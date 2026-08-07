---
name: /MERP/SDF_CDS_FORMREG
description: Sdf Cds Formreg
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MOB
  - MOB-APP
  - MOB-APP-MAO
  - component:MOB-APP-MAO-ERP
  - lob:Other
---
# /MERP/SDF_CDS_FORMREG

**Sdf Cds Formreg**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RECORD_ID` |  | |  |  |
| `FORM_APP_NAME` |  | |  |  |
| `FORM_NAME` |  | |  |  |
| `FORM_VERSION` |  | |  |  |
| `FORM_INSTANCE_ID` |  | |  |  |
| `FORM_STATUS` |  | |  |  |
| `BOR_OBJTYP` |  | |  |  |
| `OBJECT_TYPE` |  | |  |  |
| `OBJECT_KEY` |  | |  |  |
| `OBJECT_GROUP` |  | |  |  |
| `OBJECT_GROUP_1` |  | |  |  |
| `OBJECT_DESCR` |  | |  |  |
| `TECH_ENTITY_TYPE` |  | |  |  |
| `TECH_ENTITY_KEY` |  | |  |  |
| `PARENT_OBJECT_TYPE` |  | |  |  |
| `PARENT_OBJECT_KEY` |  | |  |  |
| `OBJECT_KEY_EXT` |  | |  |  |
| `DF_AGENT_ID` |  | |  |  |
| `SYS_COMP` |  | |  |  |
| `TENANT_ID` |  | |  |  |
| `ORG_ID` |  | |  |  |
| `FLAG_MANDATORY` |  | |  |  |
| `MOBILE_APP` |  | |  |  |
| `DELETED` |  | |  |  |
| `ACTIVE` |  | |  |  |
| `FORM_UPDATE_TS` |  | |  |  |
| `FLAG_FINAL` |  | |  |  |
| `CREATED_BY` |  | |  |  |
| `CREATED_TS` |  | |  |  |
| `CHANGED_BY` |  | |  |  |
| `CHANGED_TS` |  | |  |  |
| `REGISTRY_ID` |  | |  |  |
| `DF_HOST_NAME` |  | |  |  |
| `FORM_INSTANCE_LINK` |  | |  |  |

## Source Code

```abap
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #OUTPUT_EMAIL_DATA_PROVIDER,
                                      #SQL_DATA_SOURCE ]
@AbapCatalog.sqlViewName: '/MERP/4MREG_V'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Dynamic Forms CDS view for form registry'
@Metadata.ignorePropagatedAnnotations: true
define view /merp/sdf_cds_formreg as 
    select from /MERP/SDF_4MREG_CNCTN_TBL_FUNC( clnt : $session.client ) as formreg_tbl_func association[1..1] to /merp/sdf_cds_formreg_simple as formreg
        on $projection.REGISTRY_ID = formreg.REGISTRY_ID
{
    formreg.RECORD_ID,
    formreg.FORM_APP_NAME,
    formreg.FORM_NAME,
    formreg.FORM_VERSION,
    formreg.FORM_INSTANCE_ID,
    formreg.FORM_STATUS,
    formreg.BOR_OBJTYP,
    formreg.OBJECT_TYPE,
    formreg.OBJECT_KEY,
    formreg.OBJECT_GROUP,
    formreg.OBJECT_GROUP_1,
    formreg.OBJECT_DESCR,
    formreg.TECH_ENTITY_TYPE,
    formreg.TECH_ENTITY_KEY,
    formreg.PARENT_OBJECT_TYPE,
    formreg.PARENT_OBJECT_KEY,
    formreg.OBJECT_KEY_EXT,
    formreg.DF_AGENT_ID,
    formreg.SYS_COMP,
    formreg.TENANT_ID,
    formreg.ORG_ID,
    formreg.FLAG_MANDATORY,
    formreg.MOBILE_APP,
    formreg.DELETED,
    formreg.ACTIVE,
    formreg.FORM_UPDATE_TS,
    formreg.FLAG_FINAL,
    formreg.CREATED_BY,
    formreg.CREATED_TS,
    formreg.CHANGED_BY,
    formreg.CHANGED_TS,
    formreg_tbl_func.REGISTRY_ID,
    formreg_tbl_func.DF_HOST_NAME,
    formreg_tbl_func.FORM_INSTANCE_LINK
}
```
