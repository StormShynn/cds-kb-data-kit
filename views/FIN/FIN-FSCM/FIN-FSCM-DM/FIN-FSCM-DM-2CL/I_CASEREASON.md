---
name: I_CASEREASON
description: Casereason
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
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
# I_CASEREASON

**Casereason**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseType` | ✓ | |  | `cast( case_type as scmgcase_type preserving type )` |  |  |
| `CaseReason` | ✓ | |  | `cast( reason_code as scmg_reason_code preserving type )` |  |  |
| `_CaseType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseType` | `I_CaseType` | [0..1] |
| `_Text` | `I_CaseReasonText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Case Reason'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICASEREASON'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CaseReason'  
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'DisputeCaseReason'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE ]
define view I_CaseReason
  as select from scmgattr_reason

  association [0..1] to I_CaseType       as _CaseType on  $projection.CaseType = _CaseType.CaseType
  association [0..*] to I_CaseReasonText as _Text     on  $projection.CaseType   = _Text.CaseType
                                                      and $projection.CaseReason = _Text.CaseReason
{
      @ObjectModel.foreignKey.association: '_CaseType'
  key cast( case_type as scmgcase_type preserving type )      as CaseType,
      @ObjectModel.text.association: '_Text'
  key cast( reason_code as scmg_reason_code preserving type ) as CaseReason,
      _CaseType,
      _Text
};
```
