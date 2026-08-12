---
name: I_CASETYPETEXT
description: "Casetypetext"
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
  - text-view
  - text
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# I_CASETYPETEXT

**Casetypetext**

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
| `Language` | ✓ | |  | `langu` |  |  |
| `CaseTypeName` |  | |  | `description` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Case Type - Text'
@Analytics: { dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'ICASETYPETEXT'
@VDM.viewType: #BASIC
//@VDM.private: false
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CaseType'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CaseTypeText
  as select from scmgcasetypet
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast( case_type as scmgcase_type preserving type ) as CaseType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                              as Language,
      @Semantics.text : true
      description                                        as CaseTypeName,
      _Language
};
```
