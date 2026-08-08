---
name: I_TREASURYGLACCOUNTASSIGNREF
description: "Treasurygl AccountASSIGNREF"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - gl-account
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYGLACCOUNTASSIGNREF

**Treasurygl AccountASSIGNREF**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryGLAccountAssignmentRef` | ✓ | |  | `aa_ref` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TreasuryGLAccAssignRefText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ITRGLACASGNREF'
@Analytics.dataExtraction.enabled : true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Treasury Account Assignment Reference'
@ObjectModel.sapObjectNodeType.name: 'TreasuryGLAccountAssignmentRef'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'TreasuryGLAccountAssignmentRef'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #BASIC

@Search.searchable: true

define view entity I_TreasuryGLAccountAssignRef
  as select from tracc_aa_ref as TreasuryGLAccountAssignRef

  association [0..*] to I_TreasuryGLAccAssignRefText as _Text on $projection.TreasuryGLAccountAssignmentRef = _Text.TreasuryGLAccountAssignmentRef
{
      @ObjectModel.text.association: '_Text'
      @Search : { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key TreasuryGLAccountAssignRef.aa_ref as TreasuryGLAccountAssignmentRef,

      _Text
}
```
