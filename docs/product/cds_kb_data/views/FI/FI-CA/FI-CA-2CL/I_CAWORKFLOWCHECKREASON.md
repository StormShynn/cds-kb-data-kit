---
name: I_CAWORKFLOWCHECKREASON
description: "Caworkflowcheckreason"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - workflow
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAWORKFLOWCHECKREASON

**Caworkflowcheckreason**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAWorkflowCheckReason` | ✓ | |  | `c4eye` |  |  |
| `CAPaymentIsForbiddenBfrConf` |  | |  | `xspza` |  |  |
| `CAClearingIsForbiddenBfrConf` |  | |  | `xspag` |  |  |
| `CADunningIsForbiddenBfrConf` |  | |  | `xspma` |  |  |
| `CAIntrstIsForbiddenBfrConf` |  | |  | `xspzi` |  |  |
| `CADocChangeIsForbiddenBfrConf` |  | |  | `xblae` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAWorkflowCheckReasonText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: { dataCategory: #DIMENSION,
              dataExtraction.enabled : true }

@EndUserText.label: 'Workflow Check Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CAWorkflowCheckReason',
                sapObjectNodeType.name: 'ContrAcctgWorkflowCheckReason',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAWorkflowCheckReason
  as select from tfk4eye

  association [0..*] to I_CAWorkflowCheckReasonText as _Text on $projection.CAWorkflowCheckReason = _Text.CAWorkflowCheckReason

{
      @ObjectModel.text.association: '_Text'
  key c4eye as CAWorkflowCheckReason,

      xspza as CAPaymentIsForbiddenBfrConf,
      xspag as CAClearingIsForbiddenBfrConf,
      xspma as CADunningIsForbiddenBfrConf,
      xspzi as CAIntrstIsForbiddenBfrConf,
      xblae as CADocChangeIsForbiddenBfrConf,

      _Text
}
```
