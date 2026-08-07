---
name: I_ROOTCAUSE
description: Rootcause
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
# I_ROOTCAUSE

**Rootcause**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CaseType` | ✓ | |  | `cast( casetype as scmgcase_type preserving type )` |
| `DisputeCaseRootCause` | ✓ | |  | `cast( root_ccode as udm_root_ccode preserving type )` |
| `_CaseType` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseType` | `I_CaseType` | [0..1] |
| `_Text` | `I_RootCauseText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Root Cause'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IROOTCAUSE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@ObjectModel.representativeKey: 'DisputeCaseRootCause'
@ObjectModel.representativeKey: 'DisputeCaseRootCause'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'DisputeCaseRootCause'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE ]
define view I_RootCause
  as select from udmattr_rccode
  association [0..1] to I_CaseType      as _CaseType on  $projection.CaseType = _CaseType.CaseType
  association [0..*] to I_RootCauseText as _Text     on  $projection.CaseType             = _Text.CaseType
                                                     and $projection.DisputeCaseRootCause = _Text.DisputeCaseRootCause
{
       @ObjectModel.foreignKey.association: '_CaseType'
  key  cast( casetype as scmgcase_type preserving type )    as CaseType,
       @ObjectModel.text.association: '_Text'
  key  cast( root_ccode as udm_root_ccode preserving type ) as DisputeCaseRootCause,
       _CaseType,
       _Text
};
```
