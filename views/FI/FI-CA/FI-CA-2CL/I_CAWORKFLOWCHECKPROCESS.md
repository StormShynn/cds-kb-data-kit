---
name: I_CAWORKFLOWCHECKPROCESS
description: Caworkflowcheckprocess
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
# I_CAWORKFLOWCHECKPROCESS

**Caworkflowcheckprocess**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAWorkflowCheckProcess` | `cast( left( domvalue_l, 1 ) as c4eyp_kk preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAWorkflowCheckProcessText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: { dataCategory: #DIMENSION,
              dataExtraction.enabled : true }

@EndUserText.label: 'Workflow Check Process'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CAWorkflowCheckProcess',
                sapObjectNodeType.name: 'ContrAcctgWorkflowCheckProcess',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAWorkflowCheckProcess
  as select from dd07l

  association [1..*] to I_CAWorkflowCheckProcessText as _Text on $projection.CAWorkflowCheckProcess = _Text.CAWorkflowCheckProcess

{
      @ObjectModel.text.association: '_Text'
  key cast( left( domvalue_l, 1 ) as c4eyp_kk preserving type ) as CAWorkflowCheckProcess,

      _Text
}
where
      domname  = 'C4EYP_KK'
  and as4local = 'A'
```
