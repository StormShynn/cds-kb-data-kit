---
name: I_CASESTATUS
description: "Casestatus"
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-DM
  - interface-view
  - status
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# I_CASESTATUS

**Casestatus**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Status` | ✓ | |  | `cast( stat_para as scmgstatpara preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CaseStatusText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Case Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'ICASESTATUS'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'Status'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'DisputeCaseSystemStatus'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE
                                      ]
define view I_CaseStatus
  as select from scmgstat
  association [0..*] to I_CaseStatusText as _Text on $projection.Status = _Text.Status
{
      @ObjectModel.text.association: '_Text'
  key cast( stat_para as scmgstatpara preserving type ) as Status,
      //    stat_auto,
      //    stat_case_disp,
      //    stat_case_close
      _Text
};
```
