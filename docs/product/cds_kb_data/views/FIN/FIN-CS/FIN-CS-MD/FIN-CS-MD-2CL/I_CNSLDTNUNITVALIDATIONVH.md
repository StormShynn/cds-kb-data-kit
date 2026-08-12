---
name: I_CNSLDTNUNITVALIDATIONVH
description: "Cnsldtnunitvalidationvh"
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
# I_CNSLDTNUNITVALIDATIONVH

**Cnsldtnunitvalidationvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationUnitValidation` | ✓ | | `_CnsldtnUnitValidation` | `ConsolidationUnitValidation` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUVALIDATVH',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #VALUE_HELP,
    representativeKey: 'ConsolidationUnitValidation',
    modelingPattern: #VALUE_HELP_PROVIDER,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Cons Unit Validation Selection'

define view I_CnsldtnUnitValidationVH
  as select from I_CnsldtnUnitValidation as _CnsldtnUnitValidation

{

      @ObjectModel.text.element: 'CnsldtnUnitValidationText'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key _CnsldtnUnitValidation.ConsolidationUnitValidation,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _CnsldtnUnitValidation._Text[1: Language=$session.system_language].CnsldtnUnitValidationText,

      @Semantics.text
      _CnsldtnUnitValidation._Text[1: Language=$session.system_language].CnsldtnUnitValidationLongText

}
```
