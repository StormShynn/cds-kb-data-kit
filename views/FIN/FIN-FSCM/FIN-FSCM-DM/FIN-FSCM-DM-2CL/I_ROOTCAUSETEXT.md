---
name: I_ROOTCAUSETEXT
description: Rootcausetext
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
  - text-view
  - text
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# I_ROOTCAUSETEXT

**Rootcausetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CaseType` | ✓ | |  | `cast( case_type as scmgcase_type preserving type )` |
| `DisputeCaseRootCause` | ✓ | |  | `cast( root_ccode as udm_root_ccode preserving type )` |
| `Language` | ✓ | |  | `langu` |
| `CaseRootCauseDescription` |  | |  | `description` |
| `_CaseType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseType` | `I_CaseType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Root Cause - Text'
@Analytics: { dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IROOTCAUSETEXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'DisputeCaseRootCause'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_RootCauseText
  as select from udmattr_rccodet
  association [0..1] to I_CaseType as _CaseType on $projection.CaseType = _CaseType.CaseType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CaseType'
  key cast( case_type as scmgcase_type preserving type )   as CaseType,
  key cast( root_ccode as udm_root_ccode preserving type ) as DisputeCaseRootCause,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                as Language,
      @Semantics.text: true
      description                                          as CaseRootCauseDescription,
      _Language,
      _CaseType
};
```
