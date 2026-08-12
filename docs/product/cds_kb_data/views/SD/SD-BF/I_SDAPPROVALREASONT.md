---
name: I_SDAPPROVALREASONT
description: "Sdapprovalreasont"
app_component: SD-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - interface-view
  - approval
  - component:SD-BF
  - lob:Sales & Distribution
---
# I_SDAPPROVALREASONT

**Sdapprovalreasont**

| Property | Value |
|---|---|
| App Component | `SD-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `language` |  |  |
| `SDApprovalReason` | ✓ | |  | `apm_approval_reason` |  |  |
| `SDApprovalReasonName` |  | |  | `description` |  |  |
| `_SDApprovalReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SDApprovalReason` | `I_SDApprovalReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SDApprovalReason',
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, 
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
}
@Search.searchable: true
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:#NOT_REQUIRED

@AbapCatalog: {
  sqlViewName: 'ISDAPMAPRRT',
  buffering.status: #ACTIVE,
  buffering.type: #FULL,
  preserveKey: true,
  compiler.compareFilter: true
}

@Metadata.ignorePropagatedAnnotations:true

@EndUserText.label: 'Approval Reason for SD Document - Text'

define view I_SDApprovalReasonT
  as select from sdapmaprr_t

  association [0..1] to I_SDApprovalReason as _SDApprovalReason on $projection.SDApprovalReason = _SDApprovalReason.SDApprovalReason
  
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                 as Language,

      @ObjectModel.foreignKey.association: '_SDApprovalReason'
  key apm_approval_reason      as SDApprovalReason,
      
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      description              as SDApprovalReasonName,

      _SDApprovalReason,
      _Language

};
```
