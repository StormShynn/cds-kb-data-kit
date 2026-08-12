---
name: I_CNSLDTNANSWERVH
description: "Cnsldtnanswervh"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNANSWERVH

**Cnsldtnanswervh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationAnswer` | ✓ | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        serviceQuality: #A,
        sizeCategory: #M
    },
    dataCategory: #VALUE_HELP,
    representativeKey: 'ConsolidationAnswer',
    modelingPattern: #VALUE_HELP_PROVIDER,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Consolidation Answer'

define view entity I_CnsldtnAnswerVH
  as select from I_CnsldtnAnswer
{
      @ObjectModel.text.element: ['ConsolidationAnswerText']
  key ConsolidationAnswer,

      @Semantics.text
      _Text[1: Language=$session.system_language].ConsolidationAnswerText

};
```
