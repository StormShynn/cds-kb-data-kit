---
name: I_USERSETGETPARAMFORCTRLGAREA
description: "Usersetgetparamforctrlgarea"
app_component: FI-GL-IS-2CL
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
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_USERSETGETPARAMFORCTRLGAREA

**Usersetgetparamforctrlgarea**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `BusinessUser` | ✓ | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CtrlgStdFinStatementVersion` |  | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |

## Source Code

```abap
@ObjectModel.representativeKey: 'BusinessUser'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern:  #ANALYTICAL_DIMENSION 

@ObjectModel.usageType: {
  dataClass: #MIXED,
  serviceQuality: #B,
  sizeCategory: #M
}
@AbapCatalog.sqlViewName: 'IFIUSRPARMCTRLGA'
@Analytics: { dataCategory: #DIMENSION } //,dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'User Parameter for Controlling Area'
@AccessControl.authorizationCheck: #NOT_REQUIRED //PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_UserSetGetParamForCtrlgArea as select from P_Usersetgetparamforctrlgarea
left outer join I_ControllingArea on I_ControllingArea.ControllingArea = P_Usersetgetparamforctrlgarea.ControllingArea
{
    
key P_Usersetgetparamforctrlgarea.BusinessUser,
P_Usersetgetparamforctrlgarea.ControllingArea,
I_ControllingArea.CtrlgStdFinStatementVersion,
I_ControllingArea.FiscalYearVariant
//cast( case when P_Usersetgetparamforctrlgarea.ControllingArea is null 
//  then 'A000'
//  else P_Usersetgetparamforctrlgarea.ControllingArea
//end as kokrs )as ControllingArea

} 

where P_Usersetgetparamforctrlgarea.BusinessUser = $session.user
```
