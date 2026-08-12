---
name: I_SDAPPROVALREASON
description: "Sdapprovalreason"
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
# I_SDAPPROVALREASON

**Sdapprovalreason**

| Property | Value |
|---|---|
| App Component | `SD-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SDApprovalReason` | ✓ | |  | `apm_approval_reason` |  |  |
| `WorkflowIsExternal` |  | |  | `external_workflow` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SDApprovalReasonT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
  representativeKey: 'SDApprovalReason',
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: [ #ANALYTICAL_DIMENSION ]
}

@AbapCatalog: {
  sqlViewName: 'ISDAPMAPRR',
  preserveKey:true,
  compiler.compareFilter: true,
  buffering: {
    status: #ACTIVE,
    type: #FULL
  }
}

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}

@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Approval Reason for SD Document'
@ObjectModel.sapObjectNodeType.name: 'SDDocApprovalReason'
define view I_SDApprovalReason
  as select from sdapmaprr

  association [0..*] to I_SDApprovalReasonT as _Text on $projection.SDApprovalReason = _Text.SDApprovalReason

{
      @ObjectModel.text.association: '_Text'
  key apm_approval_reason          as SDApprovalReason,
      external_workflow            as WorkflowIsExternal,

      _Text
};
```
