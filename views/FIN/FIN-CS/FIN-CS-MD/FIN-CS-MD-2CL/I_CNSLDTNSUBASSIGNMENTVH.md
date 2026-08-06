---
name: I_CNSLDTNSUBASSIGNMENTVH
description: Cnsldtnsubassignmentvh
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
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
# I_CNSLDTNSUBASSIGNMENTVH

**Cnsldtnsubassignmentvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CnsldtnSubassignment` | `CnsldtnSubassignment` |
| `CnsldtnSubassignmentText` | `cast(_SubAssignment._Text[1: Language=$session.system_language].CnsldtnSubassignmentText as fincs_description_text_40 preserving type )` |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSUBASSGMTVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S},
  resultSet.sizeCategory: #XS,
  representativeKey: 'CnsldtnSubassignment',
  semanticKey: ['CnsldtnSubassignment'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Breakdown Type'

// no search on code list

define view I_CnsldtnSubassignmentVH
  as select from I_CnsldtnSubassignment as _SubAssignment

{
      @ObjectModel.text.element: ['CnsldtnSubassignmentText']
  key CnsldtnSubassignment,

      @Semantics.text
      cast(_SubAssignment._Text[1: Language=$session.system_language].CnsldtnSubassignmentText as fincs_description_text_40 preserving type ) as CnsldtnSubassignmentText
};
```
