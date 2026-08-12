---
name: I_CASESTATPROFILE
description: "Casestatprofile"
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-DM
  - interface-view
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# I_CASESTATPROFILE

**Casestatprofile**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseStatusProfile` | ✓ | |  | `profile_id` |  |  |
| `CaseStatusObjectType` |  | |  | `stat_obj_type` |  |  |
| `CaseUserStatusSchema` |  | |  | `stat_cust_scheme` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CaseStatProfileText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICASESTPROFILE'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
//@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Status Profile'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
//@VDM.lifecycle.contract: #SAP_INTERNAL_API
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'CaseStatusProfile'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'DisputeCaseStatusProfile'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE ]
define view I_CaseStatProfile
  as select from scmgstatprof

  association [0..*] to I_CaseStatProfileText as _Text on $projection.CaseStatusProfile = _Text.CaseStatusProfile
{

      @ObjectModel.text.association: '_Text'
  key scmgstatprof.profile_id        as CaseStatusProfile,
      @EndUserText.label: 'Case Status Object Type of Application'
      scmgstatprof.stat_obj_type     as CaseStatusObjectType,
      @EndUserText.label: 'Case User Status Schema'
      scmgstatprof.stat_cust_scheme  as CaseUserStatusSchema,

      _Text
}
```
